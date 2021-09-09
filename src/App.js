import { useReducer } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { reducer, initialState, StateContext } from './state'
import useFetch from './hooks/useFetch'
import LoadingBar from './components/LoadingBar'
import Home from './components/Home'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useFetch({
		endpoints: ["/products", "/products/categories",],
		resources: ["products", "categories"],
		dispatch,
	})

	if (state.error) {
		return <h1>Error occured!</h1>
	}

	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{state.loading && <LoadingBar />}
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</StateContext.Provider>
	)
}

export default App
