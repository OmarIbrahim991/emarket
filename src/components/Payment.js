import { useState, useContext } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { useLocation, useHistory } from 'react-router'
import { FaCcMastercard, FaCcVisa, FaRegCreditCard, FaCcPaypal } from 'react-icons/fa'
import { StateContext } from '../state'
import { addOrder } from '../actions'
import NavHeader from './NavHeader'


const Payment = () => {
	const { dispatch } = useContext(StateContext)
	const { state } = useLocation()
	const { orderItems, total } = state ?? {}
	const [selectedMethod, setSelectedMethod] = useState("paypal")
	const history = useHistory()

	const handleChange = ({ target }) => setSelectedMethod(target.value)

	const placeOrder = () => {
		dispatch(addOrder({ orderItems, total }))
		history.push("/")
	}

	return (
		<>
			<NavHeader />
			<Container style={{ margin: "3em auto" }}>
				<h3>Great, that's {total}$</h3>
				<Form>
					<Container style={{ width: "50%" ,border: "5px solid", borderRadius: "1em", padding: "2em", }}>
						<div className="mb-3" style={{ textAlign: "left" }}>
							<Form.Check
								type="radio" label="PayPal" value="paypal" checked={selectedMethod === "paypal"}
								onChange={handleChange} inline
							/>
							<div style={{ float: "right" }}>
								<FaCcPaypal size={35} fill="white" />
							</div>
						</div>
						<div className="mb-3" style={{ textAlign: "left" }}>
							<Form.Check
								type="radio" label="Debit/credit card" value="card" checked={selectedMethod === "card"}
								onChange={handleChange} inline
							/>
							<div style={{ float: "right" }}>
								<FaCcVisa size={35} fill="white" />
								<FaCcMastercard size={35} fill="white" />
								<FaRegCreditCard size={35} fill="white" />
							</div>

						</div>
						{
							selectedMethod === "paypal" &&
							<Row className="mb-3" style={{ textAlign: "left" }}>
								<Col>
									<Form.Label>Email</Form.Label>
								</Col>
								<Col>
									<Form.Control type="email" size="sm" placeholder="Enter your email" />
								</Col>
							</Row>

						}
						{
							selectedMethod === "card" &&
							<>
								<Row className="mb-3" style={{ textAlign: "left" }}>
									<Col md="3">
										<Form.Label>Card number</Form.Label>
									</Col>
									<Col>
										<Form.Control type="text" size="sm" maxLength={19} placeholder="XXXX XXXX XXXX XXXX" />
									</Col>
								</Row>
								<Row className="mb-3" style={{ textAlign: "left" }}>
									<Col md="2">
										<Form.Label>Expiry date</Form.Label>
									</Col>
									<Col>
										<Form.Select size="sm" name="expireMM" id="expireMM">
											<option value="">Month</option>
											<option value="01">January</option>
											<option value="02">February</option>
											<option value="03">March</option>
											<option value="04">April</option>
											<option value="05">May</option>
											<option value="06">June</option>
											<option value="07">July</option>
											<option value="08">August</option>
											<option value="09">September</option>
											<option value="10">October</option>
											<option value="11">November</option>
											<option value="12">December</option>
										</Form.Select>
									</Col>
									<Col>
										<Form.Select size="sm" name="expireYY" id="expireYY">
											<option value="">Year</option>
											<option value="21">2021</option>
											<option value="22">2022</option>
											<option value="23">2023</option>
											<option value="24">2024</option>
											<option value="25">2025</option>
										</Form.Select>
									</Col>
									<Col md="2" style={{ textAlign: "right" }}>
										<Form.Label>CVC</Form.Label>
									</Col>
									<Col>
										<Form.Control type="number" pattern="\d{3}" size="sm" placeholder="XXX" />
									</Col>
								</Row>
							</>
						}
					</Container>
				</Form>
				<Button size="lg" style={{ margin: "2em auto", minWidth: "50%" }} onClick={placeOrder}>
					Finish and Pay ({total}$)
				</Button>
			</Container>
		</>
	)
}

export default Payment
