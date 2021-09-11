import { setLoadingState, setErrorState } from '../actions'

const API_BASE_URL = "https://fakestoreapi.com"

export const get = async ({ resources, dispatch }) => {
	try {
		dispatch(setLoadingState(true))
		const payload = {}
		await Promise.all(Object.entries(resources).map(async ([resource, endpoint]) => {
			const response = await fetch(API_BASE_URL + endpoint)
			const jsonResp =  await response.json()
			payload[resource] = jsonResp
		}))
		return payload
	}
	catch (error) {
		dispatch(setErrorState(true))
		console.log(error.message)
	}
	finally {
		dispatch(setLoadingState(false))
	}
}
