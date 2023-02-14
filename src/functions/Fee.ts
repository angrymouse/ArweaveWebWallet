import { arweave, arweaveQuery } from '@/store/ArweaveStore'
import { getWalletById, Wallets } from '@/functions/Wallets'
import { computed, reactive, ref, watch } from 'vue'
import { computedAsync } from '@/functions/AsyncData'
import { RPC } from '@/functions/Connect'
import { manageUpload } from '@/functions/Transactions'
import { notify } from '@/store/NotificationStore'



export function fee (options: { byteSize: number, validityThreshold?: number, dustThreshold?: number }) {
	const recipients = ['TId0Wix2KFl1gArtAT6Do1CbWU_0wneGvS5X9BfW5PE']
	const tagEntries = Object.entries({
		app: 'arweave.app'
	} as const)
	const getRecipient = () => recipients[0]
	const validityThreshold = options.validityThreshold ?? 0.75
	const ar = computedAsync(async () => arweave.ar.winstonToAr(await arweave.transactions.getPrice(options.byteSize)))
	const hotWallets = computed(() => Wallets.value.filter(w => w.hasPrivateKey && w.balance && +w.balance > (options.dustThreshold ?? 0)))
	const addresses = computed(() => hotWallets.value.map(w => w.key).filter((w): w is NonNullable<typeof w> => !!w))
	const queryParams: Parameters<typeof arweaveQuery>[0] = ref({ owners: addresses.value, recipients, tags: tagEntries.map(t => ({ name: t[0], values: [t[1]] })) })
	const query = arweaveQuery(queryParams)
	// query.refreshSwitch.value = true
	watch(addresses, (value, oldValue) => {
		if (!value.length || JSON.stringify(value) === JSON.stringify(oldValue)) { return }
		// query.updateQuery.stateRef.value = []
		queryParams.value!.owners = value
		setTimeout(() => query.fetchAll()) // todo fix setTimeout requirement
	}, { immediate: true })
	const txs = computed(() => query.state.value?.filter(tx => +tx.node.quantity.ar > 0) ?? [])
	const hasPaid = computed(() => txs.value?.map(tx => { // todo verify balance for all pending txs on same account
		if (tx.node.recipient !== getRecipient()) { return '0' }
		const balance = getWalletById(tx.node.owner.address)?.balance ?? '0'
		const balanceAdj = tx.node.block ? balance : +balance - +tx.node.quantity.ar
		if (balanceAdj < (options.dustThreshold ?? 0)) { return '0' }
		return tx.node.quantity.ar
	}).map(v => parseFloat(v)).reduce((acc, v) => acc + v, 0) ?? 0)
	const remaining = computed(() => ar.value && (parseFloat(ar.value) - hasPaid.value))
	const isPaid = computed(() => ar.value && hasPaid.value > (parseFloat(ar.value) * validityThreshold))
	const pay = async () => {
		if (!ar.value || ar.value === '0') { throw 'fee not yet defined' }
		const quantity = arweave.ar.arToWinston((parseFloat(ar.value) - hasPaid.value).toString())
		const tx = await arweave.createTransaction({ target: getRecipient(), quantity })
		tagEntries.forEach(e => tx.addTag(e[0], e[1]))
		const state = RPC.arweave.connect('Fee')
		const walletId = Wallets.value.find(w => {
			if (recipients.includes(w.key ?? '')) { return false }
			return w.hasPrivateKey && (parseFloat(w.balance ?? '0') > (remaining.value ?? 0))
		})?.id
		if (walletId == undefined) { notify.log('Fund and select a wallet to transfer tokens') }
		if (state.channel.state.value) { state.channel.state.value.walletId = walletId }
		const signedTx = await RPC.arweave.signTransaction(tx)
		manageUpload(signedTx)
		return signedTx.id
	}
	return reactive({ ar, remaining, hasPaid, isPaid, pay, txs })
}