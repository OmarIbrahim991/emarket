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
		<>
			{
				products.length > 0 ?
					<section className="products-container">
						{
							products.map((product) => (
								<Product key={product.id} {...product} />
							))
						}
					</section>
				:
					<Spinner animation="border" variant="dark" style={{ marginTop: "10%" }} />
			}
		</>
	)
}

export default ProductsList
