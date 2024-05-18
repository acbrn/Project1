import React, { useState } from 'react';
import CartItem from '../../components/cartitem/CartItem';
import AuthForm from '../../components/auth/auth';
import './checkout.css';

const Checkout = ({ cartItems, updateQuantity, removeFromCart, user, onSignIn, onSignUp }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);
    const [step, setStep] = useState(1);

    const handleSignIn = (credentials) => {
        onSignIn(credentials);
        setIsAuthenticated(true);
    };

    const handleSignUp = (credentials) => {
        onSignUp(credentials);
        setIsAuthenticated(true);
    };

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
                {step === 2 && !isAuthenticated && (
                    <div className="checkout-step">
                        <h2>Sign In or Create Account</h2>
                        <AuthForm onSignIn={handleSignIn} onSignUp={handleSignUp} />
                        <button onClick={handlePreviousStep}>Back to Cart</button>
                    </div>
                )}
                {step === 2 && isAuthenticated && (
                    <div className="checkout-step">
                        <h2>Shipping Information</h2>
                        {/* Shipping form goes here */}
                        <button onClick={handlePreviousStep}>Back to Cart</button>
                        <button onClick={handleNextStep}>Continue</button>
                    </div>
                )}
                {step === 3 && (
                    <div className="checkout-step">
                        <h2>Payment Information</h2>
                        {/* Payment form goes here */}
                        <button onClick={handlePreviousStep}>Back</button>
                        <button onClick={handleNextStep}>Review Order</button>
                    </div>
                )}
                {step === 4 && (
                    <div className="checkout-step">
                        <h2>Order Review</h2>
                        {/* Order review and confirmation goes here */}
                        <button onClick={handlePreviousStep}>Back</button>
                        <button>Place Order</button>
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
