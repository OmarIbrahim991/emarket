import { useContext, useState } from 'react'
import { Container, Row, Table, Image, Button, Modal } from 'react-bootstrap'
import { StateContext } from '../state'
import { FaTrash } from 'react-icons/fa'
import { toggleLikeProduct } from '../actions'
import NavHeader from './NavHeader'
import AddToCartButton from './AddToCartButton'
import NoContent from './NoContent'

const Favorites = () => {
	const { state, dispatch } = useContext(StateContext)
	const [show, setShow] = useState(false)

	const handleRemove = (id) => {
		dispatch(toggleLikeProduct(id))
		setShow(false)
	}

	if (state.products.filter(p => p.liked).length === 0) {
		return <NoContent />
	}

	return (
		<>
			<NavHeader />
			<Container>
				<Row><h1>My Favorites</h1></Row>
				<Table style={{ border: "5px solid" }} bordered responsive striped hover>
					<tbody>
						{
							state.products.filter(p => p.liked).map(({ id, title, image, price, }) => (
								<tr key={id}>
									<td className="align-middle"><Image src={image} alt={title} height={100} rounded /></td>
									<td className="align-middle">{title}</td>
									<td className="align-middle">{price}$</td>
									<td className="align-middle">
										<div style={{ display: "flex", justifyContent: "center" }}><AddToCartButton id={id} /></div>
									</td>
									<td className="align-middle">
										<FaTrash size={35} className="clickable" onClick={() => setShow(id)} />
									</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</Container>
			<Modal show={show !== false} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Remove Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to remove this item from your favorites!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
					<Button variant="danger" onClick={() => handleRemove(show)}>Remove</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Favorites
