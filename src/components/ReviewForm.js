import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { addReview } from '../actions'
import { StateContext } from '../state'
import Rating from './Rating'

const ReviewForm = ({ id }) => {
	const { dispatch } = useContext(StateContext)
	const [username, setUsername] = useState("")
	const [review, setReview] = useState("")
	const [rateVal, setRateVal] = useState(0)

	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(addReview({
			id,
			review: { username, review, rating: rateVal, timestamp: new Date(), },
		}))
		setUsername("")
		setReview("")
		setRateVal(0)
	} 

	return (
		<Form style={{ maxWidth: 400, margin: "3em auto" }} onSubmit={handleSubmit}>
			<Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
				<Form.Control type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
			</Form.Group>
			<Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
				<Form.Control as="textarea" placeholder="Your review" rows={3} value={review} onChange={e => setReview(e.target.value)} />
			</Form.Group>
			<Rating inputVal={rateVal} setInputVal={setRateVal} interactive />
			<Button style={{ margin: "1em"}} variant="primary" type="submit" disabled={!rateVal || !username || !review}>
				Submit Review
			</Button>
		</Form>
	)
}

export default ReviewForm
