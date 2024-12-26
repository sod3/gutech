import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [cart, setCart] = useState([]);

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

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div>
            <div className="sidebar">
                <p>Search for a product:</p>
                <input type="text" placeholder="Search" />
                <button>Search</button>
                <p>Filter by category:</p>
                <select>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="toys">Toys</option>
                </select>
            </div>
            <div className="content">
                <h1>Welcome To The Online Shop</h1>
                <p>
                    We have a wide range of products for you to choose from. You can
                    search for a product, filter by category, and view the details of a
                    product.
                </p>
            </div>
            <div className="products">
                <h2>Our Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cart">
                <h2>Shopping Cart</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
