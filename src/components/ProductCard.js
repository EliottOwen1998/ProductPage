import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import '../styles/ProductCard.css';

function ProductCard({ id, name, price, description, images }) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageChange = (image) => {
        setSelectedImage(image); // Update the displayed image
    };

    return (
        <div className="product-card">
            <img src={selectedImage} alt={name} className="product-image" />
            <div className="product-info">
                <h3>{name}</h3>
                <p className="product-price">{price}</p>
                <div className="image-switcher">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageChange(image)}
                            className="image-switcher-btn"
                        >
                            {`Variant ${index + 1}`}
                        </button>
                    ))}
                </div>
                <Link to={`/product/${id}`} state={{ name, price, description, images }}>
                    <button className="view-details-btn">View</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
