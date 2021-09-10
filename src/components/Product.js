import { useState, useContext, useEffect, useMemo } from 'react'
import { Card, Form } from 'react-bootstrap'
import { FaArrowUp, FaArrowDown, FaCartPlus, FaHeart,FaRegHeart } from 'react-icons/fa'
import { StateContext } from '../state'
import { addToCart, toggleLikeProduct } from '../actions'

const Product = ({ id }) => {
    const { state, dispatch } = useContext(StateContext)
    const index = useMemo(() => state.products.findIndex(p => p.id === id), [id])
    const { title, image, price, liked, category, description, rating } = state.products[index]
    const [inCart, setInCart] = useState(state.cart[id] ? state.cart[id] : 0)

    const handleChange = (event) => {
        const { value } = event.target
        setInCart(isNaN(value) ? 0 : Math.abs(parseInt(value)))
    }
    const increment = () => {
        setInCart(current => current+1)
    }
    const decrement = () => {
        setInCart(current => Math.max(0, current-1))
    }
    const toggleLike = () => dispatch(toggleLikeProduct(id))

    useEffect(() => {
        dispatch(addToCart({ id, count: inCart }))
    }, [inCart])


    return (
        <Card className="product">
            <Card.Img className="product-image" variant="top" src={image} />
            <Card.Body>
                <Card.Title style={{ fontWeight: "bolder" }}>{title}</Card.Title>
                
            </Card.Body>
            <Card.Footer className="product-footer">
                <Card.Text style={{ margin: "1em 0" }}>{price}$</Card.Text>

                <span className="clickable" style={{ padding: 0 }}>
                    {liked ? <FaHeart size={35} color="red" onClick={toggleLike} /> : <FaRegHeart size={30} onClick={toggleLike} />}
                </span>

                {
                    inCart === 0 ?
                        <FaCartPlus size={40} onClick={increment} className="reversable clickable" />
                    :
                        <div className="product-counter">
                            <FaArrowUp onClick={increment} size={25} className="reversable clickable" />
                            <Form.Control type="number" className="input-counter" onChange={handleChange} value={inCart} />
                            <FaArrowDown onClick={decrement} size={25} className="reversable clickable" />
                        </div>
                }
            </Card.Footer>
        </Card>
    )
}

export default Product
