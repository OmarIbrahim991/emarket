import { useEffect, useReducer } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { reducer, initialState, StateContext } from './state'
import { get } from './utils/mockAPI'
import { loadInitialData } from './actions'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Error from './components/Error'
import Cart from './components/Cart'
import Favorites from './components/Favorites'
import Orders from './components/Orders'
import Login from './components/Login'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		state.user && (async () => {
			const payload = await get({
				resources: { products: "/products", categories: "/products/categories"},
				dispatch,
			})
			dispatch(loadInitialData(payload))
		})()
	}, [state.user])

	if (state.error) {
		return <Error />
	}

	if (!state.user) {
		return <Login dispatch={dispatch} />
	}

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			<HashRouter>
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
			</HashRouter>
		</StateContext.Provider>
	)
}

export default App
