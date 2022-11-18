import React from 'react';
import "../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faStar } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Products = ({productItems, handleAddProduct}) => {
  return (
    <Container>
        <div className='product-all'>
                    <div className='product-title'>
                        <h2 className="title-inner1">Check out our best selling products</h2>
                        <p className="text-center title-per">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                    </div>
                    <div className='products-details'>
                    <Row>
                        {productItems.map((productItems) => (
                            
                                <Col sm={6} md={3}>
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
                                                <div className="rating-details">
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faStar} />
                                                </div>
                                            </div>
                                            
                                            <Link to='/cart'>
                                                <button className='product-add-btn'onClick={ () => handleAddProduct(productItems)}><FontAwesomeIcon icon = { faCartShopping }></FontAwesomeIcon>Add to Cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            
                        ))}
                        </Row>
                    </div>
              
        </div>
    </Container>
    
  ); 
}

export default Products;
