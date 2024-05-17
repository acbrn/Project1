import React from 'react';
import ProductList from '../../components/productlist/Productlist';

import './home.css';

const Home = ({ products, addToCart }) => {
    return (
        <div className='home-content'>
            <div className='home-title'>Welcome to Ecostyle Mart</div>
            <div className='Home-about-stage'>
                Ecostyle Mart is a forward-thinking e-commerce platform dedicated to providing eco-friendly products to conscious consumers.
                Our mission is to make sustainable shopping accessible and affordable, encouraging a greener lifestyle for everyone.
            </div>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
}

export default Home;
