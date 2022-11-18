import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';





export default function Footer({ productItems }) {
  return (
    <div>
        <div className="footer-contains">
            <Container>
                <Row>
                    <Col md = {4} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>
                                Best selling product
                            </h5>
                            <Row>
                        {productItems.map((productItems) => (
                            
                                <Col md={12}>
                                    <div className='card-details'>
                                        <div>
                                            <img className='product-img' src={productItems.image} alt={productItems.name}/>
                                        </div>
                                        <div className='product-cart-details'>
                                            <div className='product-txt'>
                                                <h6 className='product-name'>
                                                    {productItems.name}
                                                </h6>
                                                <div className='product-price'><h4>${productItems.price}</h4></div>
                                                
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </Col>
                            
                        ))}
                        </Row>
                        </div>
                    </Col>
                    <Col md = {4} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>limited time offer</h5>
                            <Row>
                        {productItems.map((productItems) => (
                            
                                <Col md={12}>
                                    <div className='card-details'>
                                        <div>
                                            <img className='product-img' src={productItems.image} alt={productItems.name}/>
                                        </div>
                                        <div className='product-cart-details'>
                                            <div className='product-txt'>
                                                <h6 className='product-name'>
                                                    {productItems.name}
                                                </h6>
                                                <div className='product-price'><h4>${productItems.price}</h4></div>
                                                
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </Col>
                            
                        ))}
                        </Row>
                        </div>
                    </Col>
                    <Col md = {2} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>Archives</h5>
                            <ListGroup>
                                <ListGroup.Item action >
                                January-2007
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                February-2007
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                March - 2009
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                April - 2009
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                May - 2010 
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                June - 2011
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                July - 2011
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                August - 2012
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                September - 2013
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                October - 2014
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                November - 2011
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                December - 2000
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col md = {2} col sm = {12}>
                        <div className="footer-links-details">
                            <h5>meta</h5>
                            <ListGroup>
                                <ListGroup.Item action >
                                    Home
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                    News
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                    About Us
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                   Shop
                                </ListGroup.Item>
                                <ListGroup.Item action >
                                   Services 
                                </ListGroup.Item>
                                
                            </ListGroup>
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
                                <a >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a >
                                    Shop demo
                                </a>
                            </li>
                            <li>
                                <a >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a >
                                    Template
                                </a>
                            </li>
                            <li>
                                <a >
                                    Layout
                                </a>
                            </li>
                            <li>
                                <a >
                                    Theme features
                                </a>
                            </li>
                            <li>
                                <a >
                                    Buy now
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
