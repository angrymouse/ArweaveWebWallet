import Arweave from 'arweave'
import { reactive, watchEffect, watch, computed } from 'vue'

const hash = new URLSearchParams(window.location.hash.slice(1))
const origin = hash.get('origin')
const appInfo = { name: hash.get('name'), logo: hash.get('logo') }
const instance = origin + Math.random().toString().slice(2)
const chPrefix = 'connectorState:'
const heartbeatPrefix = 'heartbeat:'
const stateChannel = chPrefix + instance
const messageQueue = []
const stateInit = {
	origin,
	appInfo,
	wallet: null,
}
const globalStorageListener = (e) => {
	if (e.key === heartbeatPrefix + instance && e.newValue === '') {
		localStorage.setItem(heartbeatPrefix + instance, 'ok')
	}
}
window.addEventListener('storage', globalStorageListener)
localStorage.setItem(stateChannel, JSON.stringify(stateInit))
const { state, closeChannel } = getChannel(instance)
const { states, closeChannels } = getChannels()
const connectors = computed(() => Object.fromEntries(Object.entries(states).filter(([key, value]) => value.type === 'connector')))
const clients = computed(() => Object.fromEntries(Object.entries(states).filter(([key, value]) => value.type === 'client')))
export { state, states, connectors, clients }



export function connect (walletAddress) {
	postMessage({ method: 'connect', params: { address: walletAddress } })
}

export function disconnect () {
	postMessage({ method: 'disconnect' })
}

export function postMessage (message) {
	window.parent.postMessage({ jsonrpc: '2.0', ...message }, origin)
}

export function navigateBack () {
	if (!navigateBackAvailable()) { return }
	try {
		window.open('', 'parent')
		window.opener.focus()
	} catch (e) { console.log(e) }
}

export function navigateBackAvailable (origin) {
	if (origin && state.origin !== origin) { return false }
	if (!window.opener) { return false }
	return true
}



async function processMessage () {
	if (!messageQueue.length || state.processing) { return }
	state.processing = true
	const message = messageQueue[0]
	const response = { id: message.data.id }
	try {
		let action = null // check if message can be processed right away
		action ??= await broadcastMessage(message)
		if (action === 'accepted') {
			response.result = await runProcedure(message)
		} else {
			response.error = 'rejected'
		}
	} catch (e) {
		console.error(e)
		response.error = 'error'
	}
	postMessage(response)
	messageQueue.splice(0, 1)
	delete state.response
	delete state.request
	state.processing = false
	processMessage()
}

async function runProcedure (message) {
	return procedures[message.method](JSON.parse(message.params))
}

const procedures = {
	async signTransaction (messageParams) {
		console.log('tx would be signed here', messageParams)
		return '😁'
	},
}

async function broadcastMessage (message) {
	if (!Object.keys(clients.value).length) {
		const popup = window.open(window.location.href, '_blank', 'location,resizable,scrollbars,width=360,height=600')
		if (!popup) { } // popup blocked
	}
	return new Promise(resolve => {
		const watchStop = watch(() => state.response, (res) => {
			if (res) { resolve(res); watchStop() }
		})
		state.request = broadcasts[message.method](JSON.parse(message.params))
	})
}

const broadcasts = {
	signTransaction (messageParams) {
		const res = { ...messageParams }
		delete res.data
		return res
	},
}



function getChannels () {
	const channels = {}
	const states = reactive({})
	const getInstanceNames = () => {
		const result = []
		for (const key in localStorage) {
			if (key.includes(chPrefix)) { result.push(key.slice(chPrefix.length)) }
		}
		return result
	}
	const instanciate = async (name) => {
		channels[name] = null
		if (!(await heartbeat(name))) { close(name); return null }
		if (!Object.keys(channels).includes(name)) { return null }
		channels[name] = getChannel(name)
		states[name] = channels[name].state
	}
	const close = (name) => {
		channels[name]?.closeChannel()
		delete channels[name]
		delete states[name]
	}
	const storageListener = () => {
		const storageChannels = getInstanceNames()
		for (const channel in channels) {
			if (storageChannels.includes(channel)) { continue }
			close(channel)
		}
		for (const storageChannel of storageChannels) {
			if (Object.keys(channels).includes(storageChannel) || storageChannel === instance) { continue }
			instanciate(storageChannel)
		}
	}
	window.addEventListener('storage', storageListener)
	const closeChannels = () => {
		window.removeEventListener('storage', storageListener)
		for (const instance in channels) { close(instance) }
	}
	storageListener()
	return { states, closeChannels }
}

function getChannel (instanceName) {
	const stateChannel = chPrefix + instanceName
	const state = reactive({})
	try { Object.assign(state, JSON.parse(localStorage.getItem(stateChannel))) } catch (e) { }
	const storageListener = (e) => {
		if (e.key !== stateChannel || e.newValue === e.oldValue) { return }
		try { Object.assign(state, JSON.parse(e.newValue)) } catch (e) { }
	}
	const stopUpdate = watchEffect(() => {
		if (JSON.stringify(state) === localStorage.getItem(stateChannel)) { return }
		localStorage.setItem(stateChannel, JSON.stringify(state))
	})
	window.addEventListener('storage', storageListener)
	const closeChannel = () => {
		window.removeEventListener('storage', storageListener)
		stopUpdate()
	}
	return { state, closeChannel }
}

async function heartbeat (instanceName, timeout) {
	if (instanceName === instance) { return true }
	const promise = new Promise(resolve => {
		const heartbeatListener = async (e) => {
			if (e.key === heartbeatPrefix + instanceName && e.newValue) { heartbeatReturn(true) }
		}
		const heartbeatReturn = (result) => {
			if (result) { clearTimeout(cleanupTimeout) }
			setTimeout(() => localStorage.removeItem(heartbeatPrefix + instanceName), 1000)
			if (!result) { localStorage.removeItem(chPrefix + instanceName) }
			window.removeEventListener('storage', heartbeatListener)
			resolve(result)
		}
		window.addEventListener('storage', heartbeatListener)
		const cleanupTimeout = setTimeout(() => heartbeatReturn(false), 60000)
		if (timeout) { setTimeout(() => resolve(false), timeout) }
	})
	localStorage.setItem(heartbeatPrefix + instanceName, '')
	return promise
}

function cleanHeartbeats () {
	for (const key in localStorage) {
		if (!key.includes(heartbeatPrefix)) { continue }
		const relatedChannel = chPrefix + key.slice(heartbeatPrefix.length)
		if (localStorage.getItem(relatedChannel)) { continue }
		localStorage.removeItem(key)
	}
}

async function instanceStartPromise (filter, timeout) {
	return new Promise(resolve => {
		const watchStop = watch(() => states, () => {
			const name = findInstance(filter)
			if (!name) { return }
			resolve(name)
			watchStop()
		}, { deep: true, immediate: true })
		if (timeout) { setTimeout(() => resolve(false), timeout) }
	})
}

export function findInstance (filter) {
	for (const name in states) {
		const currentInstance = states[name]
		if (!Object.entries(filter).find(attr => currentInstance[attr[0]] !== attr[1])) {
			return name
		}
	}
}



export function launchConnector () {
	state.type = 'connector'
	watch(() => state.wallet, (wallet) => wallet ? connect(wallet) : disconnect())
	window.addEventListener('message', (e) => {
		if (e.source !== window.parent || e.origin !== origin) { return }
		const message = e.data // Todo check types
		console.info(`MessageChannel:${new URL(origin).hostname}->${location.hostname}`, message)
		if (Object.keys(procedures).includes(e.data.method)) {
			messageQueue.push(message)
			processMessage()
		} else {
			postMessage({ error: 'Unsupported method', id: e.data.id })
		}
	})
	instanceStartPromise({ origin }, 5000).then(() => {
		watch(() => clients.value, () => {
			if (!state.wallet && !Object.keys(clients.value).length) {
				disconnect()
			}
		}, { immediate: true })
	})
}

export function launchClient () {
	state.type = 'client'
}



cleanHeartbeats()
window.addEventListener('beforeunload', () => {
	window.removeEventListener('storage', globalStorageListener)
	closeChannel()
	closeChannels()
	localStorage.removeItem(stateChannel)
})