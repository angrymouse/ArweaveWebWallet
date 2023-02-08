import { useChannel } from '@/functions/Channels'
import { Wallets } from '@/functions/Wallets'
import { computed, watch } from 'vue'
import InterfaceStore from '@/store/InterfaceStore'
import { notify } from '@/store/NotificationStore'
import { awaitEffect } from '@/functions/AsyncData'
import router from '@/router'
import IconSnow from '@/assets/icons/snow.svg?component'
import IconLock from '@/assets/icons/lock.svg?component'
import IconUnlock from '@/assets/icons/unlock.svg?component'

export const { state: coldState } = useChannel('cold')

export const ready = computed(() => !InterfaceStore.online)

export function getColdWalletAction (launch?: boolean): Action {
	if (coldState.value?.status === 'compromised' || coldState.value?.status === 'active' && !ready.value) { return {
		name: `Online | Disable Vault`,
		color: 'var(--red)',
		run: () => coldState.value = undefined,
	} }
	if (!ready.value && (launch || coldState.value?.status === 'active')) { return {
		icon: IconUnlock,
		name: `Device must be offline`,
		color: 'var(--red)',
		run: () => launchVault(),
	} }
	if (coldState.value?.status === 'active') { return {
		icon: IconLock,
		name: `Active`,
		to: 'cold',
	} }
	if (launch) { return {
		icon: IconSnow,
		name: 'Launch',
		color: 'var(--blue)',
		run: () => launchVault(),
	} }
	return {
		name: `Use this device as a cold wallet`,
		to: 'cold',
	}
}

export function paywall (wallet: Wallet) {
	return !InterfaceStore.online && wallet.hasPrivateKey && !wallet.state.hot && !coldState.value?.status
}

export async function launchVault () {
	if (!ready.value) { const error = 'Device must be offline'; notify.error(error); throw error }
	if (coldState.value) { return }
	const excluded = Wallets.value.filter(wallet => wallet.state.hot).map(wallet => wallet.key!)
	coldState.value = { status: 'active', excluded }
	router.push('add')
	notify.log('You can now create or import vault accounts')
}

async function init () {
	awaitEffect(() => coldState.value?.status === 'active').then(() => watch(Wallets, () => {
		if (Wallets.value.find(w => w.state.hot && w.key && !coldState.value?.excluded.includes(w.key))) { coldState.value && (coldState.value.status = 'compromised') }
	}, { immediate: true, deep: true }))
	watch(() => [coldState.value?.status, ready.value] as const, ([status, ready]) => {
		if (status === 'compromised') { notify.error({
			requireInteraction: true,
			title: `Online presence detected`,
			body: `Cold wallets are at risk of being compromised. You must transfer everything to new cold accounts in order to restore the same security properties.`,
			actions: [{ name: 'Disable', icon: IconUnlock, run: () => coldState.value = undefined  }],
		}) }
		else if (status === 'active' && !ready) { notify.warn({
			requireInteraction: true,
			title: `Online presence detected`,
			body: `You must go back offline to securely import cold accounts.`,
			actions: [{ name: 'Disable', icon: IconUnlock, run: () => coldState.value = undefined  }],
		}) }
	}, { immediate: true })
}
init()