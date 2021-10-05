import { useState } from 'react'
import { Container, Tab, Nav } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import LoadingBar from './LoadingBar'
import ProductsList from './ProductsList'


const Home = () => {
	const [selected, setSelected] = useState("all")

	return (
		<>
			<Header setSelected={setSelected} />
			<LoadingBar />
			<Container>
				<Tab.Container>
					<Nav variant="tabs" onSelect={setSelected} id="nav-bar">
						<Nav.Link eventKey="all" active={selected === "all"} bsPrefix="nav-link nav-link-override">
							All Products
						</Nav.Link>
						<Nav.Link eventKey="electronics" active={selected === "electronics"} bsPrefix="nav-link nav-link-override">
							Electronics
						</Nav.Link>
						<Nav.Link eventKey="jewelery" active={selected === "jewelery"} bsPrefix="nav-link nav-link-override">
							Jewelery
						</Nav.Link>
						<Nav.Link eventKey="men's clothing" active={selected === "men's clothing"} bsPrefix="nav-link nav-link-override">
							Men's Clothing
						</Nav.Link>
						<Nav.Link eventKey="women's clothing" active={selected === "women's clothing"} bsPrefix="nav-link nav-link-override">
							Women's Clothing
						</Nav.Link>
					</Nav>
					<Tab.Content style={{ minHeight: "80vh"}}>
						<Tab.Pane eventKey={selected} active>
							<ProductsList category={selected} />
						</Tab.Pane>
					</Tab.Content>
				</Tab.Container>
			</Container>
			<Footer />
		</>
	)
}

export default Home
