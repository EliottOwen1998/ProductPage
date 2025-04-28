import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios
import ProductCard from './ProductCard';
import '../styles/ProductDetail.css';

function ProductDetailFromApi() {
    const [products, setProducts] = useState([]);  // State to hold fetched products
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null);  // Error state

    // Fetch data from API using axios
    useEffect(() => {
        // Replace with your third-party API URL
        axios.get('https://fakestoreapi.com/products') // Example URL from Fake Store API
            .then((response) => {
                setProducts(response.data);  // Set the fetched data to state
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch((error) => {
                setError("Error fetching products");
                setLoading(false);
            });
    }, []);  // Empty dependency array means this effect runs only once when the component mounts

    if (loading) {
        return <div>Loading...</div>;  // Show loading state
    }

    if (error) {
        return <div>{error}</div>;  // Show error message if something goes wrong
    }

    return (
        <div className="product-detail">
            <div>Test Page</div>
            <div className="products-grid">
                {/* Render fetched products */}
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.title}  // Assuming 'title' is the field for product name in the API
                        price={`£${product.price}`}  // Assuming 'price' is the field for product price in the API
                        description={product.description}  // Assuming 'description' is the field for product description
                        images={[product.image]}  // Assuming 'image' is the field for the product image URL
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductDetailFromApi;
