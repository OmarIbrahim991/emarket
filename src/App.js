import { useReducer } from 'react'
import useFetch from './hooks/useFetch'
import { LOAD_INITIAL_DATA, SET_LOADING_STATE,SET_ERROR_STATE } from './actions'
import ProductsList from './components/ProductsList'

const initialState = { products: [], categories: [], cart: [], loading: false, error: false }

const reducer = (state=initialState, action={ type: "NOOP" }) => {
	switch (action.type) {
		case LOAD_INITIAL_DATA:
			const { products, categories, cart, } = action.payload
			return { ...state, products, categories, cart, }
		case SET_LOADING_STATE:
			const { loading } = action.payload
			return { ...state, loading, }
		case SET_ERROR_STATE:
			const { error } = action.payload
			return { ...state, error, }
		default:
			return state
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useFetch({
		endpoints: ["/products", "/products/categories",],
		resources: ["products", "categories"],
		dispatch,
	})

	if (state.loading) {
		return <h1>Loading...</h1>
	}

	if (state.error) {
		return <h1>Error occured!</h1>
	}
	return (
		<div className="container">
			<ProductsList products={state.products} />
		</div>
	)
}

export default App
