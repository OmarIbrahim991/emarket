import { useContext, useMemo } from 'react'
import { Container, Row, Col, Badge, Dropdown } from 'react-bootstrap'
import { FaShoppingCart, FaListUl } from 'react-icons/fa'
import { StateContext } from '../state'

const Header = () => {
	const { state } = useContext(StateContext)
	const inCart = useMemo(() => Object.values(state.cart).reduce((a,b) => a+b, 0), [state.cart])

	return (
		<Container as="header" fluid>
			<Row className="main-header">
				<Col><h1 style={{ fontFamily: "'Kaushan Script', cursive" }}>E-Market</h1></Col>
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
