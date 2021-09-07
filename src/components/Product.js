import { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { FaArrowUp, FaArrowDown, FaCartPlus } from 'react-icons/fa'

const Product = ({ id, title, image, price, category, description, rating }) => {
    const [inCart, setInCart] = useState(0)

    const increment = () => {
        setInCart(current => current+1)
    }
    const decrement = () => {
        setInCart(current => Math.max(0, current-1))
    }

    return (
        <Card className="product">
            <Card.Img className="product-image" variant="top" src={image} />
            <Card.Body>
                <Card.Title style={{ fontWeight: "bolder" }}>{title}</Card.Title>
            </Card.Body>
            <Card.Footer className="product-footer">
                <Card.Text>{price}$</Card.Text>
                {
                    inCart && inCart > 0 ?
                        <div className="product-counter">
                            <FaArrowUp onClick={increment} />
                            <Form.Control type="number" className="input-counter" value={inCart} readOnly />
                            <FaArrowDown onClick={decrement} />
                        </div>
                    :
                    <FaCartPlus size={30} onClick={increment} />
                }
            </Card.Footer>
        </Card>
    )
}

export default Product
