import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ProductPage.css';

function ProductPage() {
    const location = useLocation();  // Get the product data from the Link's state
    const { name, price, images, description } = location.state || {};  // Destructure product data

    if (!name) {
        return <div>Product not found!</div>;  // Display error if no product data exists
    }

    return (
        <div className="product-page">
            <h1>{name}</h1>
            <img src={images[0]} alt={name} className="product-image" />
            <p className="product-price">{price}</p>
            <p className="product-description">{description}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
}

export default ProductPage;


