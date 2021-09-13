import { useState } from 'react'
import { Container, Tab, Nav } from 'react-bootstrap'
import ProductsList from './ProductsList'

const Home = () => {
	const [selected, setSelected] = useState("all")

	return (
		<Container>
			<Tab.Container>
				<Nav variant="tabs" onSelect={setSelected} id="nav-bar">
					<Nav.Link eventKey="all" active={selected === "all"}>All Products</Nav.Link>
					<Nav.Link eventKey="electronics">Electronics</Nav.Link>
					<Nav.Link eventKey="jewelery">Jewelery</Nav.Link>
					<Nav.Link eventKey="men's clothing">Men's Clothing</Nav.Link>
					<Nav.Link eventKey="women's clothing">Women's Clothing</Nav.Link>
				</Nav>
				<Tab.Content style={{ minHeight: "80vh"}}>
					<Tab.Pane eventKey={selected} active>
						<ProductsList category={selected} />
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		</Container>
	)
}

export default Home
