import Product from './Product'

const ProductsList = ({ products }) => {
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
