import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Header = ({cartItems}) => {
    return (
        <>
            <div className="header-all">
                <div className="header-top">
                    <Container>
                        <Row>
                            
                            <Col sm={6} md={7}>
                                <div className="header-top-left">
                                    <p className ="info-text">Welcome to Our shop</p>
                                </div>
                            </Col>
                            <Col sm={6} md={5}>
                                <div className="header-top-right">
                                    <div className="lang-details">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-name'>
                                                My Account
                                            </Dropdown.Toggle>
    
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div> 
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
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="header-center">
                    <Container>
                        <Row>
                            <Col sm={6} lg={3}>
                                <div className="header-logo">
                                    <Link to ="/">
                                        <img src = "images/header-logo.png" alt="" />
                                    </Link>
                                </div>
                            </Col>
                            <Col sm={6} lg={9}>
                                <div className="header-contact-details">
                                <Navbar  expand="lg" >
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                                <ul>
                                                    <li>
                                                        <Link to ="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to ="/">Feature</Link>
                                                    </li>
                                                    <li>
                                                        <Link to ="/">Shop</Link>
                                                    </li>
                                                    <li>
                                                        <Link to ="/">Product</Link>
                                                    </li>
                                                    <li>
                                                        <Link to ="/">Page</Link>
                                                    </li>
                                                </ul>
                                            </Nav>
                                            <div className="cart-details">
                                                
                                                <Link to ="/cart" className='cart'>
                                                    <FontAwesomeIcon icon = { faCartShopping }></FontAwesomeIcon>
                                                    <span className='cart-lenght'>
                                                        {cartItems.lenght === 0 ? "" : cartItems.lenght}
                                                    </span>
                                                </Link>
                                            </div>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div> 
                            </Col>   
                        </Row>
                    </Container>
                </div>
                
            </div>
        </>
        
      )
}


export default Header;