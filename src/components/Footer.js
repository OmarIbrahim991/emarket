import { Container } from 'react-bootstrap'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
    return(
        <Container as="footer" className="main-footer" fluid>
            <h6 style={{ textAlign: "center" }}>
                <FaRegCopyright size={25} /> {new Date().getFullYear()}
            </h6>
        </Container>
    )
}

export default Footer
