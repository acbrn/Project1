import React from 'react';
import ProductItem from '../productitem/Productitem';


const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;
