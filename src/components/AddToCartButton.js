import { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { FaArrowUp, FaArrowDown, FaCartPlus } from 'react-icons/fa'
import { StateContext } from '../state'
import { addToCart } from '../actions'

const AddToCartButton = ({ id, large=false }) => {
    const { state, dispatch } = useContext(StateContext)
    const [inCart, setInCart] = useState(state.cart && state.cart[id] ? state.cart[id] : 0)

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

	useEffect(() => {
		dispatch(addToCart({ id, count: inCart }))
	}, [inCart, id, dispatch])

    return (
        <>
            {
                inCart === 0 ?
                    <FaCartPlus size={large ? 70 : 40} onClick={increment} className="reversable clickable" />
                :
                    <div className="product-counter">
                        <FaArrowUp onClick={increment} size={large ? 40 : 25} className="reversable clickable" />
                        <Form.Control type="number" className="input-counter" onChange={handleChange} value={inCart} />
                        <FaArrowDown onClick={decrement} size={large ? 40 : 25} className="reversable clickable" />
                    </div>
            }
        </>
    )
}

export default AddToCartButton
