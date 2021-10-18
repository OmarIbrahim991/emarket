import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Rating from './Rating'

const ReviewForm = () => {
	const [username, setUsername] = useState("")
	const [review, setReview] = useState("")
	const [rateVal, setRateVal] = useState(0)

	return (
		<Form style={{ maxWidth: 400, margin: "3em auto" }} onSubmit={e => e.preventDefault()}>
			<Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
				<Form.Control type="text" placeholder="Username" val={username} onChange={e => setUsername(e.target.value)} />
			</Form.Group>
			<Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
				<Form.Control as="textarea" placeholder="Your review" rows={3} val={review} onChange={e => setReview(e.target.value)} />
			</Form.Group>
			<Rating inputVal={rateVal} setInputVal={setRateVal} interactive />
			<Button style={{ margin: "1em"}} variant="primary" type="submit" disabled={!rateVal || !username || !review}>
				Submit Review
			</Button>
		</Form>
	)
}

export default ReviewForm
