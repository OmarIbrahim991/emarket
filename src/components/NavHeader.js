import { Link, useHistory } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'
import Menu from './Menu'

const NavHeader = () => {
    const history = useHistory()

    return (
        <header className="main-header" style={{ display: "flex", justifyContent: "space-between"}}>
            <FaArrowLeft className="clickable" size = {50} onClick={history.goBack} />
            <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
                <FaHome size={50} />
            </Link>
            <Menu />
        </header>
    )
}

export default NavHeader
