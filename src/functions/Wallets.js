import { arweave, pushWallet } from '@/store/ArweaveStore'
import { generateMnemonic, getKeyFromMnemonic } from "arweave-mnemonic-keys"

export async function newWallet (jwkObj) {
	const jwk = jwkObj || await arweave.wallets.generate()
	const key = await arweave.wallets.jwkToAddress(jwk)
	if (!jwkObj) { download(key, JSON.stringify(jwk)) }
	const wallet = { key, jwk, type: 'jwk' }
	return pushWallet(wallet)
}

export async function newPassphrase (passphrase) {
	const currentPassphrase = passphrase || await generateMnemonic()
	const jwk = await getKeyFromMnemonic(currentPassphrase)
	newWallet(jwk)
	return currentPassphrase
}

export async function importWallet (arweaveWallet) {
	const key = await arweaveWallet.getActiveAddress()
	if (!key) { return }
	const wallet = { key, metaData: arweaveWallet.metaData }
	return pushWallet(wallet)
}

function download (filename, text) {
	var element = document.createElement('a')
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
	element.setAttribute('download', filename)
	element.style.display = 'none'
	document.body.appendChild(element)
	element.click()
	document.body.removeChild(element)
}