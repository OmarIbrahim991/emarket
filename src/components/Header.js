import { useContext, useMemo } from 'react'
import { Container, Row, Col, Badge, Dropdown, Form, } from 'react-bootstrap'
import { FaShoppingCart, FaListUl } from 'react-icons/fa'
import { StateContext } from '../state'
import { setSearch } from '../actions'

const Header = () => {
	const { state, dispatch } = useContext(StateContext)
	const inCart = useMemo(() => Object.values(state.cart).reduce((a,b) => a+b, 0), [state.cart])

	const handleChange = (event) => {
		console.log(event.target.value)
		dispatch(setSearch(event.target.value))
	}

	return (
		<Container as="header" fluid>
			<Row className="main-header">
				<Col><h1 style={{ fontFamily: "'Kaushan Script', cursive" }}>E-Market</h1></Col>
				<Col xs={4} sm={4} md={6} lg={8} xl={8} xxl={8}>
					<Form.Control size="lg" type="search" onChange={handleChange} placeholder="&#128269;Search for products!" />
				</Col>
				<Col>
					<Row>
						<Col className="right">
							<span style={{ position: "relative" }}>
								<FaShoppingCart size={35} className="clickable" style={{ margin: "0.35em 0 0"}} />
								{
									inCart > 0 &&
									<Badge text="main" bg="danger" pill style={{ position: "absolute", top: -5, right: -10, bordeRadius: "50%" }}>
										{inCart}
									</Badge>
								}
							</span>
						</Col>
						<Col className="right" md="auto">
							<Dropdown>
								<Dropdown.Toggle variant="dark">
									<FaListUl size={30} />
								</Dropdown.Toggle>
								<Dropdown.Menu variant="dark" align="end">
									<Dropdown.Item href="#/action-1">Cart</Dropdown.Item>
									<Dropdown.Item href="#/action-2">My Orders</Dropdown.Item>
									<Dropdown.Item href="#/action-2">My Favorites</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Header
