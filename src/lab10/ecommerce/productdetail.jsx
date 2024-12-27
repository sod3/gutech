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

    let product = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === Number(id)) {
            product = products[i];
            break;
        }
    }

    const relatedProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].id !== Number(id) && relatedProducts.length < 5) {
            relatedProducts.push(products[i]);
        }
    }

    return (
        <div className="product-detail">
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
            <p>Product Name: {product.name}</p>
            <p>Product Price: ${product.price}</p>
            <div className="related-products">
                <h2>Related Products</h2>
                <ul>
                    <li>{relatedProducts[0].name} - ${relatedProducts[0].price}</li>
                    <li>{relatedProducts[1].name} - ${relatedProducts[1].price}</li>
                    <li>{relatedProducts[2].name} - ${relatedProducts[2].price}</li>
                    <li>{relatedProducts[3].name} - ${relatedProducts[3].price}</li>
                    <li>{relatedProducts[4].name} - ${relatedProducts[4].price}</li>
                </ul>
            </div>
        </div>
    );

}

export default ProductDetail;

