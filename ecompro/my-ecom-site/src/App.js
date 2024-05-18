// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, Navbar } from './components/index';
import { Home, Contact, Checkout } from './views/index';
import ProductPage from './views/productpage/Product';
import { product } from './data/products';

import './App.css';

const App = () => {
    const [cartItems, setCartItems] = React.useState([]);
    const [cartCount, setCartCount] = React.useState(0);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setCartCount(cartCount + 1);
    };

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
        setCartCount(cartCount - 1);
    };

    return (
        <Router>
            <div className="App">
                <Header cartCount={cartCount} />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home products={product} addToCart={addToCart} />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/products" element={<ProductPage addToCart={addToCart} />} />
                        <Route path="/checkout" element={<Checkout cartItems={cartItems} 
                        updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
