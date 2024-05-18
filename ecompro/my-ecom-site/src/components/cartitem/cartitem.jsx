import React from 'react';
import './cartitem.css';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity > 0) {
            updateQuantity(item.id, newQuantity);
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <input
                    type="number"
                    value={item.quantity}
                    onChange={handleQuantityChange}
                    className="cart-item-quantity"
                />
                <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
