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
        setCart([...cart, product]);
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
                <Link to="/cart">Go to Cart ({cart.length})</Link>
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
                    <li>
                        <Link to="/product/1">Product 1</Link> - $10
                        <button onClick={() => handleAddToCart(products[0])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/2">Product 2</Link> - $20
                        <button onClick={() => handleAddToCart(products[1])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/3">Product 3</Link> - $5
                        <button onClick={() => handleAddToCart(products[2])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/4">Product 4</Link> - $100
                        <button onClick={() => handleAddToCart(products[3])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/5">Product 5</Link> - $50
                        <button onClick={() => handleAddToCart(products[4])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/6">Product 6</Link> - $50
                        <button onClick={() => handleAddToCart(products[5])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/7">Product 7</Link> - $20
                        <button onClick={() => handleAddToCart(products[6])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/8">Product 8</Link> - $30
                        <button onClick={() => handleAddToCart(products[7])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/9">Product 9</Link> - $40
                        <button onClick={() => handleAddToCart(products[8])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/10">Product 10</Link> - $10
                        <button onClick={() => handleAddToCart(products[9])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/11">Product 11</Link> - $20
                        <button onClick={() => handleAddToCart(products[10])}>Add to Cart</button>
                    </li>
                    <li>
                        <Link to="/product/12">Product 12</Link> - $5
                        <button onClick={() => handleAddToCart(products[11])}>Add to Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
