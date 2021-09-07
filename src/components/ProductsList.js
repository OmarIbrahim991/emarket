import Product from './Product'

const ProductsList = ({ products }) => {
    return (
        <div className="products-container">
            {
                products.map((product) => (
                    <Product key={product.id} {...product} />
                ))
            }
        </div>
    )
}

export default ProductsList
