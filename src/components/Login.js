import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { login } from '../actions'

const Login = ({ dispatch }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(login(username))
	}

	return (
		<div style={{ margin: "2em auto", maxWidth: 700, border: "6px solid", padding: "3em", borderRadius: "1em" }}>
			<h1 style={{ margin: "1em 0", textAlign: "center" }}>Login Page</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicUsername">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" size="lg" placeholder="Enter username" onChange={e => setUsername(e.target.value)} required />
					<Form.Text className="text-muted">Temporarily use any username and password.</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" size="lg" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
				</Form.Group>
				<Button variant="dark" type="submit" size="lg" disabled={username.length === 0 || password.length === 0}>
					Login
				</Button>
			</Form>
		</div>

	)
}

export default Login
