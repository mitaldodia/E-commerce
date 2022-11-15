import React from 'react';


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {
    const totalPrice = cartItems.reduce((price,item) => price + item.quntity * item.price,0);
  return (
    <div className='cart-item'>
        <div className='cart-items-header'>Card Items</div>

        {cartItems.length === 0 && (<div className='card-item-empty'>Your Card is empty!!!!<img src = "../images/sad.gif" width={'40px'} alt=''/></div>)}

        <div>
            {cartItems.map((item) => (
                <div key={item.id} className="card-item-list">
                    <img className='cart-item-img' src = {item.image} alt={item.name}/>
                    <div className='cart-item-name'>{item.name}</div>
                    <div className='cart-item-function'>
                        <button className='cart-item-add' onClick={() => handleAddProduct(item)}>+</button>
                        <button className='cart-remove-add' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-items-price'>
                        {item.quntity} * {item.price}
                    </div>
                </div>
            ))}
        </div>

        <div className='cart-item-total-price-name'>
            Total Price
            <div className='cart-item-total-price'>${totalPrice}</div>
        </div>
    </div>
  )
}

export default Cart