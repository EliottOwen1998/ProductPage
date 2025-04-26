import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductDetail.css';

function ProductDetail() {

    const products = [
        {
            id: 1,
            name: 'Nike Air Heads',
            price: '$120.00',
            description: 'The Nike Air Heads offer unparalleled comfort and style for any casual occasion.',
            images: [
                '/assets/images/NIKE1.jpg',
                '/assets/images/NIKE2.jpg',
                '/assets/images/NIKE3.jpg',
            ],
        },
        {
            id: 2,
            name: 'New Balance 3000x',
            price: '£150.00',
            description: 'Designed for high-performance athletes, the New Balance 3000x offers maximum support and durability.',
            images: [
                '/assets/images/NB.jpg',
            ],
        },
        {
            id: 3,
            name: 'Nike Runners Womens',
            price: '£80.00',
            description: 'Lightweight and breathable, these Nike Runners are designed for active women seeking comfort and style.',
            images: [
                '/assets/images/NIKEW1.jpg',
                '/assets/images/NIKEW2.jpg',
            ],
        },
        {
            id: 4,
            name: 'Asics Jumpers',
            price: '£90.00',
            description: 'The Asics Jumpers are perfect for outdoor activities with their solid grip and cushioned footbed.',
            images: [
                '/assets/images/ASICS1.jpg',
                '/assets/images/ASICS2.jpg',
                '/assets/images/ASICS3.jpg',
                '/assets/images/ASICS4.jpg',
            ],
        },
        {
            id: 5,
            name: 'Puma Hike',
            price: '£50.00',
            description: 'These Pumas are designed for both comfort and performance, ideal for sports and outdoor adventures.',
            images: [
                '/assets/images/PUMA1.jpg',
            ],
        },
        {
            id: 6,
            name: 'Hoka Hikers',
            price: '£75.00',
            description: 'Durable and versatile, these shoes are a great fit for any active lifestyle, offering all-day comfort.',
            images: [
                '/assets/images/HOKA.jpg',
            ],
        },
        {
            id: 7,
            name: 'Hoka 57s',
            price: '£105.00',
            description: 'Perfect for running or training, these provide excellent support for all your athletic needs.',
            images: [
                '/assets/images/HOKA1.jpg',
                '/assets/images/HOKA2.jpg',
            ],
        },
        {
            id: 8,
            name: 'Nike Pegasus',
            price: '£120.00',
            description: 'Engineered for comfort and performance, helping you push the limits during any workout.',
            images: [
                '/assets/images/PEGASUS.jpg',
            ],
        },
    ];

    return (
        <div className="product-detail">
            <div className="products-grid">
                {/* Render static products */}
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}  // Pass the id to the ProductCard
                        name={product.name}
                        price={product.price}
                        description={product.description}  // Pass description here
                        images={product.images}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductDetail;
