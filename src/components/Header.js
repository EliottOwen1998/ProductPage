import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from 'react-router-dom'
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">Sneeky Sneeks</Link>  {/* Change to Link for navigation */}
            <nav className="nav-links">
                <Link to="/">Products</Link>  {/* Link to static products */}
                <Link to="/products-from-api">Products from API</Link>  {/* Link to products from API */}
                <Link to="/about">About</Link>  {/* Change to Link for About */}
                <Link to="/contact">Contact</Link>  {/* Change to Link for Contact */}
            </nav>
            <div className="cart-icon">
                <span role="img" aria-label="Cart">🛒</span>
            </div>
        </header>
    );
}

export default Header;
