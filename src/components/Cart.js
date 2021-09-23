import { useContext, useMemo } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { StateContext } from '../state'
import NavHeader from './NavHeader'

const Cart = () => {
    const { state } = useContext(StateContext)
    const { cart, products } = state
    const totalPrice = useMemo(() => {
        let total = 0
        products.forEach(({ id, price }) => total += price * cart[id])
        return total
    }, [products, cart])

    return (
        <>
            <NavHeader />
            <Container>
                <Row><h1>Cart</h1></Row>
                <Table striped bordered hover>
                    <tbody>
                    {
                        products.filter(p => cart[p.id] > 0).map(({ id, title, price }) => (
                            <tr key={id}>
                                <td>{title}</td>
                                <td>{price}$</td>
                                <td>{cart[id]}</td>
                                <td>{(price * cart[id]).toFixed(2)}$</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <h3>{totalPrice}</h3>
            </Container>
        </>
    )
}

export default Cart
