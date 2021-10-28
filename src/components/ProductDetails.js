import { useContext, useMemo, useEffect } from 'react'
import { Container, Image, Carousel, Badge, Spinner } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaSnapchatSquare, FaWhatsappSquare } from 'react-icons/fa'
import { StateContext } from '../state'
import { get } from '../utils/mockAPI'
import { toggleLikeProduct, loadInitialData } from '../actions'
import AddToCartButton from './AddToCartButton'
import NavHeader from './NavHeader'
import Rating from './Rating'
import ReviewForm from './ReviewForm'
import Review from './Review'
import DefaultImage from '../img/placeholder.png'

const ProductDetails = () => {
	const { state, dispatch } = useContext(StateContext)
	const { productId } = useParams()
	const index = useMemo(() => state.products.findIndex(p => p.id === parseInt(productId)), [productId, state.products])
	const { id, title, image, price, liked, category, description, rating, reviews, } = index >= 0 ? state.products[index] : {}

	const handleImgError = ({ target }) => {
		target.onerror = null
		target.src = DefaultImage
	}

	const toggleLike = () => dispatch(toggleLikeProduct(id))

	useEffect(() => {
		if (state.products.length === 0) {
			(async () => {
				const payload = await get({
					resources: { products: "/products", categories: "/products/categories"},
					dispatch,
				})
				dispatch(loadInitialData(payload))
			})()
		}
	}, [dispatch, state.products.length])

	return (
		<>
			<NavHeader />
			{
				index >= 0 ?
					<Container style={{ color: "white" }}>
						<Image src={image} thumbnail style={{ maxWidth: "90vw", maxHeight: "75vh", margin: "1em" }} onError={handleImgError} />
						<h3>{title} ({price}$)</h3>
						<Rating rating={Math.round(rating.rate*2)/2} />
						<p style={{ fontSize: "110%", margin: "0.5em 0 1em" }}>{description}</p>
						<hr />
						<h4>Share on:</h4>
						<div style={{ backgroundColor: "#fff", margin: "auto", display: "flex", justifyContent: "center", gap: 20, width: 300 }}>
							<FaFacebookSquare className="clickable" size={40} fill="blue" />
							<FaTwitterSquare className="clickable" size={40} fill="cyan" />
							<FaInstagramSquare className="clickable" size={40} fill="purple" />
							<FaSnapchatSquare className="clickable" size={40} fill="#de0" />
							<FaWhatsappSquare className="clickable" size={40} fill="green" />
						</div>
						<div className="product-footer" style={{ backgroundColor: "black", margin: "1em" }}>
							<span className="clickable" style={{ padding: 0 }}>
								{liked ? <FaHeart size={70} color="red" onClick={toggleLike} /> : <FaRegHeart size={60} onClick={toggleLike} />}
							</span>
							<AddToCartButton id={id} large={true} />
						</div>
						<Container style={{ margin: "2em" }}>
							<h2 style={{ textAlign: "left", textDecoration: "underline" }}>Similar products</h2>
							<Carousel>
								{
									state.products.filter(p => p.category === category && p.id !== id).map((product) => (
										<Carousel.Item interval={1000} key={product.id}>
											<Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: "inherit" }}>
												<Image src={product.image} style={{ maxHeight: "40vh" }} rounded />
												<Carousel.Caption>
													<h4 style={{ backgroundColor: "black", opacity: 0.75 }}>
														{product.title} <Badge pill>{product.price}$</Badge>
													</h4>
												</Carousel.Caption>
											</Link>
										</Carousel.Item>
									))
								}
							</Carousel>
						</Container>
						<hr />
						<h3>Reviews</h3>
						<ReviewForm id={id} />
						<hr />
						<div>
							{
								reviews && reviews.length > 0 ?
									<>
										<h3 style={{ margin: "1em" }}>{reviews.length} Review{reviews.length !== 1 && "s"}</h3>
										{
											reviews.map((review, i) => (
												<Review key={i} index={i} {...review} />
											))
										}
									</>
								:
									<h3>Be the first to add a review!</h3>
							}
						</div>
					</Container>
				:
					<Container>
						<Spinner animation="border" variant="dark" style={{ marginTop: "10%" }} />
					</Container>
			}

		</>
	)
}

export default ProductDetails
