import { useEffect } from 'react'
import { setLoadingState, setErrorState, loadInitialData } from '../actions'

const API_BASE_URL = "https://fakestoreapi.com"

const useFetch = ({ endpoints, resources, dispatch, }) => {
	useEffect(() => {
		(async () => {
			try {
				dispatch(setLoadingState(true))
				const data = await Promise.all(endpoints.map(async (endpoint) => {
					const resp = await fetch(API_BASE_URL + endpoint)
					return await resp.json()
				}))
				const payload = {}
				resources.forEach((resource, i) => payload[resource] = data[i])
				dispatch(loadInitialData(payload))
			}
			catch (error) {
				dispatch(setErrorState(true))
				console.group(error.message)
					console.log("Error in useFetch")
					console.error(error)
				console.groupEnd()
			}
			finally {
				dispatch(setLoadingState(false))
			}
		})()
	}, [])
}

export default useFetch
