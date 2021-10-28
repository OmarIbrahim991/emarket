import { useContext, useMemo, useState } from 'react'
import { Container, Row, Col, Table, Image, Button, Modal } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { StateContext } from '../state'
import { addToCart } from '../actions'
import NavHeader from './NavHeader'
import getOrderData from '../utils/getOrderData'
import AddToCartButton from './AddToCartButton'
import NoContent from './NoContent'

const Cart = () => {
	const { state, dispatch } = useContext(StateContext)
	const { cart, products } = state
	const { orderItems, total } = useMemo(() => getOrderData({ products, cart }), [products, cart])
	const [show, setShow] = useState(false)
	const history = useHistory()

	const handleRemove = (id) => {
		dispatch(addToCart({ id, count: 0 }))
		setShow(false)
	}

	if (!orderItems || orderItems.length === 0) {
		return <NoContent />
	}

	return (
		<>
			<NavHeader />
			<Container>
				<Row><h1>Cart</h1></Row>
				<Table style={{ border: "5px solid" }} responsive striped hover>
					<thead>
						<tr style={{ borderBottom: "3px solid" }}>
							<th colSpan="2">Product</th>
							<th>Price/Unit</th>
							<th>N.O Units</th>
							<th>Total</th>
							<th>Remove</th>
						</tr>
					</thead>
					<tbody>
						{
							orderItems.map(({ id, title, image, price, totalPrice }) => (
								<tr key={id}>
									<td className="align-middle"><Image src={image} alt={title} height={100} rounded /></td>
									<td className="align-middle">{title}</td>
									<td className="align-middle">{price}$</td>
									<td className="align-middle">
										<div style={{ display: "flex", justifyContent: "center" }}><AddToCartButton id={id} /></div>
									</td>
									<td className="align-middle">{totalPrice}$</td>
									<td className="align-middle">
										<FaTrash size={35} className="clickable" onClick={() => setShow(id)} />
									</td>
								</tr>
							))
						}
					</tbody>
					<tfoot style={{ fontWeight: "bolder", borderTop: "3px solid" }}>
						<tr>
							<td colSpan="2">Total Price</td>
							<td colSpan="4">{total}$</td>
						</tr>
					</tfoot>
				</Table>
				<Row>
					<Col>
						<Button variant="danger" size="lg" onClick={() => history.push("/")}>Cancel</Button>
					</Col>
					<Col>
						<Link to={{ pathname: "/payment", state: { total, orderItems } }} style={{ textDecoration: 'none', color: "inherit" }}>
							<Button variant="success" size="lg">Proceed ({total}$)</Button>
						</Link>
					</Col>
				</Row>
			</Container>
			<hr />
			<Modal show={show !== false} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Remove Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to remove this item from cart!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
					<Button variant="danger" onClick={() => handleRemove(show)}>Remove</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Cart
