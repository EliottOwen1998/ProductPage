import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <a href="/" className="logo">Sneeky Sneeks</a>
            <nav className="nav-links">
                <a href="/">Products</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="cart-icon">
                <span role="img" aria-label="Cart">🛒</span>
            </div>
        </header>
    );
}

export default Header;
