import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
  return (
    <div className='checkout-contains'>
        <Container>
            
            <Row>
                <Col md = {6} col sm = {12}>
                    <div className="billing-details">
                    
                        <h4 className='billing-title'>Billing Details</h4>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col md={6}>
                                <Form.Control placeholder="Last name" />
                            </Col>
                            <Col md={6}>
                                <Form.Control placeholder="Phone No" />
                            </Col>
                            <Col md={6}>
                                <Form.Control placeholder="Email Address" />
                            </Col>
                            <Col md={12}>
                                <Form.Control placeholder="Country" />
                            </Col>
                            <Col md={12}>
                                <Form.Control placeholder="Town/City" />
                            </Col>
                            <Col md={12}>
                                <Form.Control placeholder="State / County" />
                            </Col>
                            <Col md={12}>
                                <Form.Control placeholder="Postal Code" />
                            </Col>
                        </Row>
                    </Form>
                    </div>
                </Col>
                <Col md = {6} col sm = {12}>
                    <div className="product-billing-details">
                        <h5>Product</h5>
                        <div className="product-all-billing">
                            <div className="product-name-billing">
                                <div className="billing-name-pro">
                                    <h6>wedoo logo T-shirt</h6>
                                </div>
                                <div className="price-bill-pro">$2222</div>
                            </div>
                            <div className="bill-total-details">
                                <div className="bill-total">
                                    <h4>Total-price</h4>
                                    <p>$22222</p>
                                </div>
                            </div>
                            <div className="payment-method">
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            label="Case On Delivery"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            label="UPI"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            label="Card"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                       
                                        </div>
                                    ))}
                                </Form>
                            </div>
                            <div className="place-btn">
                                <div className="back-cart">
                                    <Link to ="/cart">
                                        Back to cart
                                    </Link>
                                </div>
                                <button className="pl-btn">Place Order</button>
                            </div>
                        </div>
                    </div>
                </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Checkout
