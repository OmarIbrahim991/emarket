import { useEffect, useReducer } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { reducer, initialState, StateContext } from './state'
import { get } from './utils/mockAPI'
import { loadInitialData } from './actions'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Error from './components/Error'
import Cart from './components/Cart'
import Favorites from './components/Favorites'
import Orders from './components/Orders'

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
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/favorites">
						<Favorites />
					</Route>
					<Route path="/orders">
						<Orders />
					</Route>
				</Switch>
			</BrowserRouter>
		</StateContext.Provider>
	)
}

export default App
