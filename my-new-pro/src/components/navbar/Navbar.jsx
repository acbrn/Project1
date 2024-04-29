import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <div className="sts_navbar">
            {/* Mobile view */}
            <div className="mobile-view">
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className={`bar ${menuActive ? 'active' : ''}`}></div>
                    <div className={`bar ${menuActive ? 'active' : ''}`}></div>
                    <div className={`bar ${menuActive ? 'active' : ''}`}></div>
                </div>
                <div className={`menu-title ${menuActive ? '' : 'collapsed'}`}>Menu</div>
                <div className={`sts_navbar_links ${menuActive ? 'active' : ''}`}>
                    <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" activeClassName="active" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/services" activeClassName="active" onClick={closeMenu}>Services</NavLink>
                    <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink>
                    <div className="dropdown">
                        <NavLink to="/newsletter" activeClassName="active" onClick={closeMenu}>Newsletter</NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/newsletter/latest" activeClassName="active" onClick={closeMenu}>Latest</NavLink>
                            <NavLink to="/newsletter/archives" activeClassName="active" onClick={closeMenu}>Archives</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
