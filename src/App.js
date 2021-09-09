import { useReducer, useState, useEffect } from 'react'
import { Container, Tab, Nav } from 'react-bootstrap'
import { reducer, initialState, StateContext } from './state'
import useFetch from './hooks/useFetch'
import ProductsList from './components/ProductsList'
import LoadingBar from './components/LoadingBar'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const [display, setDisplay] = useState("all")

	useFetch({
		endpoints: ["/products", "/products/categories",],
		resources: ["products", "categories"],
		dispatch,
	})

	useEffect(() => setDisplay("all"), [])

	if (state.error) {
		return <h1>Error occured!</h1>
	}
	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{state.loading && <LoadingBar />}
			<Container className="container">
				<Tab.Container>
					<Nav variant="tabs" onSelect={setDisplay} id="nav-bar">
						<Nav.Link eventKey="all" active={display === "all"}>All Products</Nav.Link>
						<Nav.Link eventKey="electronics">Electronics</Nav.Link>
						<Nav.Link eventKey="jewelery">Jewelery</Nav.Link>
						<Nav.Link eventKey="men's clothing">Men's Clothing</Nav.Link>
						<Nav.Link eventKey="women's clothing">Women's Clothing</Nav.Link>
					</Nav>
					<Tab.Content>
						<Tab.Pane eventKey={display} active>
							<ProductsList category={display} />
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
			</Container>
		</StateContext.Provider>
	)
}

export default App
