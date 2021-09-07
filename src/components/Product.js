import { useState } from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ id, title, image, price, category, description, rating }) => {
    // const [count, setCount] = useState(0)

    return (
        <Card className="product">
        <Card.Img className="product-image" variant="top" src={image} />
        <Card.Body>
            <Card.Title style={{ fontWeight: "bolder" }}>{title}</Card.Title>
            <Card.Text>{price}$</Card.Text>
            {/* <input type="number" min={0} max={100} step={1} value={count} onChange={e => setCount(e.target.value)} /> */}
        </Card.Body>
    </Card>
    )
}

export default Product
