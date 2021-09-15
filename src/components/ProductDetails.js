import { useContext, useMemo, useState, useEffect } from 'react'
import { Container, Image, Form, Carousel } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { FaArrowUp, FaArrowDown, FaCartPlus, FaHeart, FaRegHeart, FaHome } from 'react-icons/fa'
import { StateContext } from '../state'
import { addToCart, toggleLikeProduct } from '../actions'

const ProductDetails = () => {
	const { state, dispatch } = useContext(StateContext)
	const { productId } = useParams()
	const index = useMemo(() => state.products.findIndex(p => p.id === parseInt(productId)), [productId, state.products])
	const { id, title, image, price, liked, category, description } = state.products[index]
	const [inCart, setInCart] = useState(state.cart[id] ? state.cart[id] : 0)

	const handleChange = (event) => {
		const { value } = event.target
		setInCart(isNaN(value) ? 0 : Math.abs(parseInt(value)))
	}
	const increment = () => {
		setInCart(current => current+1)
	}
	const decrement = () => {
		setInCart(current => Math.max(0, current-1))
	}
	const toggleLike = () => dispatch(toggleLikeProduct(id))

	useEffect(() => {
		dispatch(addToCart({ id, count: inCart }))
	}, [inCart, id, dispatch])

	return (
		<>
			<header className="main-header">
				<Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
					<FaHome size={50} />
				</Link>
			</header>
			<Container>
				<Image src={image} thumbnail style={{ maxWidth: "90vw", maxHeight: "75vh" }} />
				<h3>{title} ({price}$)</h3>
				<p>{description}</p>
				<div className="product-footer">
					<span className="clickable" style={{ padding: 0 }}>
						{liked ? <FaHeart size={70} color="red" onClick={toggleLike} /> : <FaRegHeart size={60} onClick={toggleLike} />}
					</span>

					{
						inCart === 0 ?
							<FaCartPlus size={80} onClick={increment} className="reversable clickable" />
						:
							<div className="product-counter">
								<FaArrowUp onClick={increment} size={50} className="reversable clickable" />
								<Form.Control type="number" className="input-counter" onChange={handleChange} value={inCart} />
								<FaArrowDown onClick={decrement} size={50} className="reversable clickable" />
							</div>
					}
				</div>
				<Container style={{ margin: "1em" }}>
					<h2 style={{ textAlign: "left", textDecoration: "underline" }}>Similar products</h2>
					<Carousel variant="dark">
						{
							state.products.filter(p => p.category === category && p.id !== id).map((product) => (
								<Carousel.Item interval={1000}>
									<Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: "inherit" }}>
										<Image src={product.image} style={{ maxHeight: "40vh" }} rounded />
										<Carousel.Caption>
											<h4 style={{ backgroundColor: "white", opacity: 0.75 }}>{product.title}</h4>
										</Carousel.Caption>
									</Link>
								</Carousel.Item>
							))
						}
					</Carousel>
				</Container>
			</Container>
		</>
	)
}

export default ProductDetails
