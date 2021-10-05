import { Container } from 'react-bootstrap'
import NavHeader from './NavHeader'

const NoContent = () => {
	return (
		<>
			<NavHeader />
			<Container style={{ height: "75vh", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
				<h1>There are no items to show here yet!</h1>
			</Container>
		</>
	)
}

export default NoContent
