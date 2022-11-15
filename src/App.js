import React from 'react';
import './App.css';
import Header from './components/front/Header.js';
import data from './components/back/Data/Data.js';
import RoutesFi from './components/front/RoutesFo/RoutesFi';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';


const App = () =>{
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    // find-product is already in cart items
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist,quntity: ProductExist.quntity+1}:item)
      );
    }
    else{
      setCartItems([...cartItems, {...product, quntity: 1}])
    }
  };

  // handle-product function.

  const handleRemoveProduct = (product) =>{
  const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quntity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id ));
    }
    else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quntity: ProductExist.quntity - 1}:item)
      )
    }
  }

  return(
    <div className="App">
      <Router>
        <Header/>
        <RoutesFi productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
      </Router>
    </div>
  );
 } 


export default App;
