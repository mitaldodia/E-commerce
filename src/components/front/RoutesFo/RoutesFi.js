import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../Products/Products';
import Cart from '../Cart/Cart.js';

const RoutesFi = ({productItems, cartItems, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div>
      <Switch>
          <Route path="/" exact>
            <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
          </Route>
          <Route path="/cart" exact >
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
          </Route>
      </Switch>
    </div>
  )
}

export default RoutesFi;