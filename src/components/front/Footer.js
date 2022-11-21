import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone,  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';





export default function Footer() {
  return (
    <div>
        <div className="footer-contains">
            <Container>
                <Row>
                    <Col md = {3} col sm = {12}>
                        <div className="footer-logo-sec">
                            <img src ='../images/footer-logo.png' width = "217"/>
                            <p>Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <div className="add-details-sec">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                        <a href='#'>40 Baria Sreet, NewYork City, US</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                        <a href='#'>001-1234-88888</a>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                        <a href='#'>info.deercreative@gmail.com</a>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                    <Col md = {3} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>Our Links</h5>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Home
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                    News
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                    About Us
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                   Shop
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                   Services 
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                   Contact
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                    Pages
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                   Support
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                    Projects
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link1">
                                   Careers 
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md = {3} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>Recent News</h5> 
                            <div className="news-details">
                                <p>Colombia Gets a Business Makeover</p>
                                <p>Colombia Gets a Business Makeover</p>
                            </div>
                        </div>  
                    </Col>
                    <Col md = {3} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>Newsletter</h5> 
                            <div className="news-sletter">
                                <p>Subscribe our newsletter gor get noti-fication about new updates, etc.</p>
                                <Form>
                                    <Col>
                                        <Form.Control placeholder="Enter Your Email" />
                                    </Col>
                                </Form>   
                                <div className="footer-btn">
                                    <button type='button'>subscribe</button>
                                </div>
                            </div>
                        </div>  
                    </Col>
                </Row>   
            </Container>
        </div> 
        <div className="footer-bottom">
            <Container>
                <div className="footer-bottom-details">
                    <div className="copy-text">@2017 Themesflat. All rights reserved.</div>
                    <div className="social-icon">
                        <ul>
                            <li>
                                <a herf="#!">
                                    <FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a herf="#!">
                                    <FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a herf="#!">
                                    <FontAwesomeIcon icon={ faGooglePlusG }></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </Container>
        </div>
    </div>
  )
}
