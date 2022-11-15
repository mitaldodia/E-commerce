import React from 'react';
import "../../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = ({productItems, handleAddProduct}) => {
  return (
    <Container>
        <div className='product-all'>
            
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
                                            </div>
                                            
                                            <div>
                                                <button className='product-add-btn'onClick={ () => handleAddProduct(productItems)}><FontAwesomeIcon icon = { faCartShopping }></FontAwesomeIcon></button>
                                            </div>
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
