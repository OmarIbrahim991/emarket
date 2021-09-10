import { Container } from 'react-bootstrap'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
    return(
        <Container as="footer" className="main-footer" style={{ textAlign: "center" }} fluid>
            <FaRegCopyright size={25} />
            {new Date().getFullYear()}
        </Container>
    )
}

export default Footer
