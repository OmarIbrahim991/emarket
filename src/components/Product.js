import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import {FaHeart, FaRegHeart } from 'react-icons/fa'
import { StateContext } from '../state'
import { toggleLikeProduct } from '../actions'
import AddToCartButton from './AddToCartButton'

const Product = ({ id }) => {
	const { state, dispatch } = useContext(StateContext)
	const index = useMemo(() => state.products.findIndex(p => p.id === id), [id, state.products])
	const { title, image, price, liked } = index >= 0 ? state.products[index] : {}

	const toggleLike = () => dispatch(toggleLikeProduct(id))

	return (
		<Card className="product">
			<Link to={`/products/${id}`} style={{ textDecoration: 'none', color: "inherit" }}>
				<Card.Img className="product-image" variant="top" src={image} />
				<Card.Body>
					<Card.Title style={{ fontWeight: "bolder" }}>{title}</Card.Title>
				</Card.Body>
			</Link>
			<Card.Footer className="product-footer">
				<Card.Text style={{ margin: "1em 0" }}>{price}$</Card.Text>

				<span className="clickable" style={{ padding: 0 }}>
					{liked ? <FaHeart size={35} color="red" onClick={toggleLike} /> : <FaRegHeart size={30} onClick={toggleLike} />}
				</span>

				<AddToCartButton id={id} />
			</Card.Footer>
		</Card>
	)
}

export default Product
