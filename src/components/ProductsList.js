import { useContext, useMemo } from 'react'
import { StateContext } from '../state'
import Product from './Product'

const ProductsList = ({ category }) => {
    const { state } = useContext(StateContext)
    const products = useMemo(() => {
        const { products } = state
        if (category === "all") {
            return products
        }
        return products.filter(p => p.category === category)
    }, [category, state.products])

    return (
        <section className="products-container">
            {
                products.map((product) => (
                    <Product key={product.id} {...product} />
                ))
            }
        </section>
    )
}

export default ProductsList
