import { useContext, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { StateContext } from '../state'
import { addProduct } from '../actions'
import NavHeader from './NavHeader'

const ProductForm = () => {
	const { state, dispatch } = useContext(StateContext)
	const history = useHistory()
	const [title, setTitle] = useState("")
	const [price, setPrice] = useState(0)
	const [category, setCategory] = useState("")
	const [description, setDescription] = useState("")
	const [image, setImage] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(addProduct({
			title,
			category,
			description,
			image,
			description,
			image,
			price: parseFloat(price.toFixed(2)),
			id: state.products.length + 1,
			rating: { rate: (Math.random() * (4) + 1).toFixed(1), count: 543 },
		}))
		history.push("/")
	}

	return (
		<>
			<NavHeader />
			<Container style={{ color: "#fff", fontSize: "120%", padding: "2em", maxWidth: 600 }}>
				<h1>Sell New Product</h1>
				<hr />
				<Form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
					<Form.Group className="mb-4">
						<Form.Label>Title</Form.Label>
						<Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label>Price (USD)</Form.Label>
						<Form.Control type="number" value={price} onChange={e => setPrice(parseFloat(e.target.value))} />
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label>Category</Form.Label>
						<Form.Select value={category} onChange={e => setCategory(e.target.value)}>
							<option value="">Select a category...</option>
							{
								state.categories.map((category) => (
									<option key={category} value={category}>
										{category[0].toUpperCase() + category.slice(1).toLowerCase()}
									</option>
								))
							}
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label>Description</Form.Label>
						<Form.Control size="lg" as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label>Image URL</Form.Label>
						<Form.Control type="url" value={image} onChange={e => setImage(e.target.value)} />
					</Form.Group>
					<Button variant="primary" size="lg" type="submit" disabled={!title || !price || !category || !description || !image}>
						Add to products for sale!
					</Button>
				</Form>
			</Container>
		</>
	)
}

export default ProductForm
