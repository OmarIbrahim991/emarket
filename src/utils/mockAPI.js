import { setLoadingState, setErrorState } from '../actions'
import { INITIAL_DATA } from './data'

export const get = async ({ dispatch }) => {
	try {
		dispatch(setLoadingState(true))
		const payload = await new Promise((resolve) => {
			setTimeout(() => {
				resolve(INITIAL_DATA)
			}, 1000)
		})
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
