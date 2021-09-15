import { useEffect, useReducer } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { reducer, initialState, StateContext } from './state'
import { get } from './utils/api'
import { loadInitialData } from './actions'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Error from './components/Error'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		(async () => {
			const payload = await get({
				resources: { products: "/products", categories: "/products/categories"},
				dispatch,
			})
			dispatch(loadInitialData(payload))
		})()
	}, [])

	if (state.error) {
		return <Error />
	}

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/products/:productId">
						<ProductDetails />
					</Route>
				</Switch>
			</BrowserRouter>
		</StateContext.Provider>
	)
}

export default App
