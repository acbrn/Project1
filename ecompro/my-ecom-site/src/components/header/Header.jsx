import React from 'react';
import { ShoppingCart } from 'phosphor-react';
import TreeLogo from '../../assets/ecostyle-mart-high-resolution-logo-transparent.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header className="header">

            <div className="header-title">
                {<img className='img' src={TreeLogo} alt="Tree Logo" />}
            </div>
            <div className="header-slogan">
                <p>"Sustainable Shopping for a Greener Tomorrow"</p>
            </div>
            <div className="cart-info">
                <p>Cart: {cartCount} items
                    <Link to="/cart">
                        <ShoppingCart size={24} />
                    </Link>
                </p>

            </div>
        </header>
    );
}

export default Header;
