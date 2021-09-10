import { Container } from 'react-bootstrap'

const Footer = () => {
    return(
        <Container as="footer" className="main-footer" fluid>
            <h6 style={{ textAlign: "center" }}>&copy; {new Date().getFullYear()}</h6>
        </Container>
    )
}

export default Footer
