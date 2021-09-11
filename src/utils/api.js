import { setLoadingState, setErrorState } from '../actions'

const API_BASE_URL = "https://fakestoreapi.com"

export const get = async ({ resources, endpoints, dispatch }) => {
	try {
		dispatch(setLoadingState(true))
		const data = await Promise.all(endpoints.map(async (endpoint) => {
			const response = await fetch(API_BASE_URL + endpoint)
			return await response.json()
		}))
		const payload = {}
		resources.forEach((resource, i) => payload[resource] = data[i])
		return payload
	}
	catch (error) {
		dispatch(setErrorState(true))
	}
	finally {
		dispatch(setLoadingState(false))
	}
}
