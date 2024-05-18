// src/views/productpage/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/productitem/Productitem';
import './product.css';

const ProductPage = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-page">
            <h1>All Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
