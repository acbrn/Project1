import React from 'react';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <br />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;
