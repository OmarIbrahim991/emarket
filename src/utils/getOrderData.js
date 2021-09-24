const getOrderData = ({ products, cart }) => {
    return {
        total: (() => {
            let result = 0
            products.forEach(({ id, price }) => result += price * cart[id])
            return result.toFixed(2)
        })(),
        orderItems: products.filter(p => cart[p.id] && cart[p.id] > 0).map((product) => ({
            ...product,
            count: cart[product.id],
            totalPrice: (cart[product.id]*product.price).toFixed(2),
        }))
    }
}

export default getOrderData
