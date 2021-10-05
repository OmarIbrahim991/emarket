import { useContext, useMemo, useRef } from 'react'
import { Container, Row, Col, Badge, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { StateContext } from '../state'
import { setSearch } from '../actions'
import Menu from './Menu'

const Header = ({ setSelected }) => {
	const { state, dispatch } = useContext(StateContext)
	const inCart = useMemo(() => Object.values(state.cart).reduce((a,b) => a+b, 0), [state.cart])
	const search = useRef()

	const handleChange = (event) => {
		dispatch(setSearch(event.target.value))
	}

	const resetSearch = () => {
		dispatch(setSearch(""))
		search.current.value = ""
		setSelected("all")
	}

	return (
		<Container as="header" fluid>
			<Row className="main-header">
				<Col>
					<h1 className="clickable" onClick={resetSearch}>Apps Intellect</h1>
				</Col>
				<Col xs={4} sm={4} md={5} lg={5} xl={6} xxl={6}>
					<Form.Control size="lg" type="search" onChange={handleChange} ref={search} placeholder="&#128269;Search for products!" />
				</Col>
				<Col>
					<Row>
						<Col className="right">
							<span style={{ position: "relative" }}>
								<Link to="/cart" style={{ textDecoration: 'none', color: "inherit" }}>
									<FaShoppingCart size={35} className="clickable" style={{ margin: "0.35em 0 0"}} />
								</Link>
								{
									inCart > 0 &&
									<Badge text="main" bg="danger" pill style={{ position: "absolute", top: -5, right: -10, bordeRadius: "50%" }}>
										{inCart}
									</Badge>
								}
							</span>
						</Col>
						<Col className="right" md="auto">
							<Menu />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default Header
