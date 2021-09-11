import { useContext, useMemo } from 'react'
import { Spinner } from 'react-bootstrap'
import { StateContext } from '../state'
import Product from './Product'

const ProductsList = ({ category }) => {
	const { state } = useContext(StateContext)
	const products = useMemo(() => {
		const result = state.products
		if (category === "all") {
			return result
		}
		return result.filter(p => p.category === category)
	}, [category, state.products])

	return (
		<section className="products-container">
			{
				products.length > 0 ?
					products.map((product) => (
						<Product key={product.id} {...product} />
					))
				:
					<Spinner animation="border" variant="dark" style={{ marginTop: "10%" }} />
			}
		</section>
	)
}

export default ProductsList
