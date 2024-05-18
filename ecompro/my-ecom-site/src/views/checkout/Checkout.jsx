import React, { useState } from 'react';
import CartItem from '../../components/cartitem/CartItem';

import './checkout.css';

const Checkout = ({ cartItems, updateQuantity, removeFromCart }) => {

    const [step, setStep] = useState(1);

    const handleUpdateQuantity = (id, quantity) => {
        updateQuantity(id, quantity);
    };

    const handleRemoveFromCart = (id) => {
        removeFromCart(id);
    };

    const handleNextStep = () => setStep(step + 1);
    const handlePreviousStep = () => setStep(step - 1);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);


    return (
        <div className="checkout-container">
            <div className="checkout-main">
                {step === 1 && (
                    <div className="checkout-step">
                        <h2>Cart Overview</h2>
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateQuantity={handleUpdateQuantity}
                                removeFromCart={handleRemoveFromCart}
                            />
                        ))}
                        <button onClick={handleNextStep}>Proceed to Checkout</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="checkout-step">
                        <h2>Payment Information</h2>
                        {/* Mock payment form */}
                        <div className="payment-form">
                            <input type="text" placeholder="Card Number" />
                            <input type="text" placeholder="Name on Card" />
                            <input type="text" placeholder="Expiration Date" />
                            <input type="text" placeholder="CVV" />
                        </div>
                        <button onClick={handlePreviousStep}>Back</button>
                        <button onClick={handleNextStep}>Place Order</button>
                    </div>
                )}
                {step === 3 && (
                    <div className="checkout-step">
                        <h2>Order Review</h2>
                        {/* Order review and confirmation goes here */}
                        <p>Order Total: ${totalAmount}</p>
                        <p>Shipping Address: 1234 Elm St.</p>
                        <p>Payment Method: Visa ending in 1234</p>
                        <p>Expected Delivery: 3-5 business days</p>
                        <p>Thank you for your order!</p>

                        <button onClick={handlePreviousStep}>Back</button>
                    </div>
                )}
            </div>
            <div className="checkout-sidebar">
                <h3>Order Summary</h3>
                {cartItems.map(item => (
                    <div key={item.id}>
                        <p>{item.name} - ${item.price} x {item.quantity}</p>
                    </div>
                ))}
                <span>Total: ${totalAmount}</span>
            </div>

        </div>
    );
};

export default Checkout;
