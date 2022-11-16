import React from 'react';
import './App.css';
import Header from './components/front/Header.js';
import Banner from './components/front/Banner.js';
import data from './components/back/Data/Data.js';
import RoutesFi from './components/front/RoutesFo/RoutesFi';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/front/Footer';
import Blog from './components/front/Blog';


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

  // clear cart function 
  const handleCartClearance = () =>{
    setCartItems([]);
  }

  return(
    <div className="App">
      <switch>
          <Router>
            <Route>
              <Header cartItems={cartItems}/>
            </Route>
            <Route path="/" exact>
              <Banner/>
            </Route>
            <Route>
              <RoutesFi productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} 
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance} />
            </Route>
            <Route path='/' exact>
              <Blog/>
            </Route>
            <Route>
              <Footer/>
            </Route>
          </Router>
        </switch>
    </div>
  );
 } 


export default App;
