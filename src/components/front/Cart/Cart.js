import React from 'react';
import Table from 'react-bootstrap/Table';  
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance}) => {
    const totalPrice = cartItems.reduce((price,item) => price + item.quntity * item.price,0);
        return (
            <div className="cart-all-contains">
                <Container>
                <div className='clear-cart-txt'>
                    {cartItems.length >=1 && (
                        <button className='clear-cart-btn' onClick={handleCartClearance}>Clear Cart Item</button>
                    )}
                </div>
                {cartItems.length === 0 && (<div className='card-item-empty'>Your Shopping bag is empty!!!!<img src = "../images/sad.gif" width={'40px'} alt=''/></div>)}
                <div className='cart-item'>

                            
                                    <div>
                                        <div className='cart-table'>
                                            <Table>
                                                <thead>
                                                    <th></th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {cartItems.map((item) => (
                                                            <div key={item.id} className="card-item-list">
                                                    
                                                        <td><img className='cart-item-img' src = {item.image} alt={item.name}/></td>
                                                        <td><div className='cart-item-name'>{item.name}</div></td>
                                                        <td>
                                                            <div className='cart-item-function'>
                                                                <button className='cart-item-add' onClick={() => handleAddProduct(item)}>+</button>{item.quntity}
                                                                <button className='cart-remove-add' onClick={() => handleRemoveProduct(item)}>-</button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className='cart-items-price'>
                                                                {item.quntity} * {item.price}
                                                            </div>
                                                        </td>
                                                        
                                                        </div>
                                                        ))}
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                
                                    <div className='cart-item-total-price-name'>
                                        <div className='cart-total-txt'>
                                            <p> Total Price : </p>
                                            <div className='cart-item-total-price'>${totalPrice}</div>
                                        </div>
                                    </div>
                                    <div className='check-out-btn'>
                                        <Link to ="/">
                                            <button className='check-btn'>Continue Shopping</button>
                                        </Link>
                                        <Link to ="/checkout">
                                            <button className='check-btn'>Checkout</button>
                                        </Link>
                                    </div>
                </div>
            </Container>
            </div>
            
            
        )
}

export default Cart