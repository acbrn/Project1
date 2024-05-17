import React from "react";

const cartItem = ({ item, updateQuantity, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h3> {item.name} </h3>
                <p> {item.description} </p>
                <span> ${item.price} </span>
                <div className="cart-item-quantity">
                    <label>
                        Quantity:
                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item, e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
        </div >
    );
};

export default cartItem;