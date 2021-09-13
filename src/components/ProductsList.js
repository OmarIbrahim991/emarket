import { useContext, useMemo } from 'react'
import { Spinner } from 'react-bootstrap'
import { StateContext } from '../state'
import Product from './Product'

const ProductsList = ({ category }) => {
	const { state } = useContext(StateContext)
	const products = useMemo(() => {
		const result = state.products
		if (category === "all") {
			return result.filter(p => !state.search || p.title.toLowerCase().includes(state.search.toLowerCase()))
		}
		return result.filter(p => p.category === category && (!state.search || p.title.toLowerCase().includes(state.search.toLowerCase())))
	}, [category, state.products, state.search])

	return (
		<>
			{
				state.products.length > 0 ?
					<section className="products-container">
						{
							products.length > 0 ?
								products.map((product) => (
									<Product key={product.id} {...product} />
								))
							:
								<h1>No results</h1>
						}
					</section>
				:
					<Spinner animation="border" variant="dark" style={{ marginTop: "10%" }} />
			}
		</>
	)
}

export default ProductsList
