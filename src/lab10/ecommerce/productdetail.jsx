import React from 'react';
import { useParams } from 'react-router-dom';
import './productdetail.css';

function ProductDetail() {
    const { id } = useParams();

    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 5 },
        { id: 4, name: 'Product 4', price: 100 },
        { id: 5, name: 'Product 5', price: 50 },
        { id: 6, name: 'Product 6', price: 50 },
        { id: 7, name: 'Product 7', price: 20 },
        { id: 8, name: 'Product 8', price: 30 },
        { id: 9, name: 'Product 9', price: 40 },
        { id: 10, name: 'Product 10', price: 10 },
        { id: 11, name: 'Product 11', price: 20 },
        { id: 12, name: 'Product 12', price: 5 },
    ];

    const product = products.find((product) => product.id === Number(id));
    const relatedProducts = products.filter((product) => product.id !== Number(id)).slice(0, 5);

    return (
        <div className="product-detail">
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
            <p>Product Name: {product.name}</p>
            <p>Product Price: ${product.price}</p>
            <div className="related-products">
            <h2>Related Products</h2>
            <ul>
                {relatedProducts.map((relatedProduct) => (
                    <li key={relatedProduct.id}>
                        {relatedProduct.name} - ${relatedProduct.price}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default ProductDetail;

