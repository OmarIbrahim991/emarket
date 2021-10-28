import { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaListUl } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { StateContext } from '../state'
import { logout } from '../actions'

const Menu = () => {
	const { dispatch } = useContext(StateContext)
	const history = useHistory()

	const handleLogout = () => {
		history.push("/")
		dispatch(logout())
	}

	return (
		<Dropdown>
			<Dropdown.Toggle variant="dark">
				<FaListUl size={30} />
			</Dropdown.Toggle>
			<Dropdown.Menu variant="dark" align="end">
				<Dropdown.Item onClick={() => history.push("/cart")}>Cart</Dropdown.Item>
				<Dropdown.Item onClick={() => history.push("/orders")}>My Orders</Dropdown.Item>
				<Dropdown.Item onClick={() => history.push("/favorites")}>My Favorites</Dropdown.Item>
				<Dropdown.Item onClick={() => history.push("/product-form")}>Sell Products</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default Menu
