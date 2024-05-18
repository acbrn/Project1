// src/components/productitem/ProductItem.jsx
import React from 'react';
import './productitem.css';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="product-item">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <span>Price: ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
