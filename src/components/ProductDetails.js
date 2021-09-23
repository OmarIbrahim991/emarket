import { useContext, useMemo } from 'react'
import { Container, Image, Carousel, Badge } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { StateContext } from '../state'
import { toggleLikeProduct } from '../actions'
import AddToCartButton from './AddToCartButton'
import NavHeader from './NavHeader'

const ProductDetails = () => {
	const { state, dispatch } = useContext(StateContext)
	const { productId } = useParams()
	const index = useMemo(() => state.products.findIndex(p => p.id === parseInt(productId)), [productId, state.products])
	const { id, title, image, price, liked, category, description } = state.products[index]

	const toggleLike = () => dispatch(toggleLikeProduct(id))

	return (
		<>
			<NavHeader />
			<Container>
				<Image src={image} thumbnail style={{ maxWidth: "90vw", maxHeight: "75vh" }} />
				<h3>{title} ({price}$)</h3>
				<p>{description}</p>
				<div className="product-footer">
					<span className="clickable" style={{ padding: 0 }}>
						{liked ? <FaHeart size={70} color="red" onClick={toggleLike} /> : <FaRegHeart size={60} onClick={toggleLike} />}
					</span>

					<AddToCartButton id={id} large={true} />
				</div>
				<Container style={{ margin: "1em" }}>
					<h2 style={{ textAlign: "left", textDecoration: "underline" }}>Similar products</h2>
					<Carousel variant="dark">
						{
							state.products.filter(p => p.category === category && p.id !== id).map((product) => (
								<Carousel.Item interval={1000} key={product.id}>
									<Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: "inherit" }}>
										<Image src={product.image} style={{ maxHeight: "40vh" }} rounded />
										<Carousel.Caption>
											<h4 style={{ backgroundColor: "white", opacity: 0.75 }}>
												{product.title} - <Badge pill>{product.price}$</Badge>
											</h4>
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
