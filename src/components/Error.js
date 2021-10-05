import { Container } from 'react-bootstrap'
import { FaExclamationTriangle } from 'react-icons/fa'

const Error = () => {
	return (
		<Container style={{ height: "100vh", color: "white" }}>
			<main style={{ height: "90%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
				<FaExclamationTriangle size="10rem" />
				<h4>Error occured!</h4>
			</main>
		</Container>
	)
}

export default Error
