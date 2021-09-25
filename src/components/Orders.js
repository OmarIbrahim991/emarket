import { useContext } from 'react'
import { Container, Row, Accordion, Table, Image, Badge } from 'react-bootstrap'
import NavHeader from './NavHeader'
import { StateContext } from '../state'
import NoContent from './NoContent'

const Orders = () => {
	const { state } = useContext(StateContext)
	const { orders } = state

	if (!orders || orders.length === 0) {
		return <NoContent />
	}

	return (
		<>
			<NavHeader />
			<Container>
				<Row><h1>My Orders</h1></Row>
				<Accordion>
					{
						orders.map(({ orderItems, total }, index) => (
							<Accordion.Item key={index} eventKey={index}>
								<Accordion.Header><h3>Order #{index+1} <Badge pill>{total}$</Badge></h3></Accordion.Header>
								<Accordion.Body>
									<Table style={{ border: "3px solid" }} responsive striped hover>
										<tbody>
											{
												orderItems.map(({ id, title, image, price, totalPrice, count }) => (
													<tr key={id}>
														<td className="align-middle">
															<Image src={image} alt={title} height={100} rounded />
														</td>
														<td className="align-middle">{title}</td>
														<td className="align-middle">{price}$</td>
														<td className="align-middle">{count} item{count !== 1 && "s"}</td>
														<td className="align-middle">{totalPrice}$</td>
													</tr>
												))
											}
										</tbody>
									</Table>
								</Accordion.Body>
							</Accordion.Item>
						))
					}
				</Accordion>

			</Container>
		</>
	)
}

export default Orders
