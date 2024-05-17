import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className='navbar'>
                <div className='navbar-content'>
                    <button className='menu-toggle' onClick={toggleMenu}>
                        ☰
                    </button>
                    <nav className={`nav-link ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                        <Link to="/product" onClick={closeMenu}>Product</Link>
                        <Link to="/contact" onClick={closeMenu}>Contact</Link>
                        <Link to="/checkout" onClick={closeMenu}>Checkout</Link>
                        <Link to="/cart" onClick={closeMenu}>
                            <ShoppingCart size={24} weight="bold" />
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
