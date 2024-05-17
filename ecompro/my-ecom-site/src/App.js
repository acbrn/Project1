import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header, Footer, Navbar, ProductList} from './components/index';
import { Home, Contact, Checkout, Cart, Product } from './views/index';
import { products } from './data/products';

import './App.css';

const App = () => {

const [cartItems, setCartItems] = React.useState([])
const [cartCount, setCartCount] = React.useState(0)

const addToCart = (product) => {
  setCartItems([...cartItems, product])
  setCartCount(cartCount + 1)
}



  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <Navbar />
        <main>
          <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
