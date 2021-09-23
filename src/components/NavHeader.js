import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NavHeader = () => {
    return (
        <header className="main-header">
            <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
                <FaHome size={50} />
            </Link>
        </header>
    )
}

export default NavHeader
