import React, { useState } from 'react';
import "./shoppingcart.css";

function ShoppingCart() {
    const [cart, setCart] = useState([
        { id: 1, name: "Item 1", price: 10.99, quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEto9VSCTkEIU3sdQ9r5sVRrCdHZ-8_JTDQ&s" },
        { id: 2, name: "Item 2", price: 20.49, quantity: 2, image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg" },
        { id: 3, name: "Item 3", price: 5.99, quantity: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: 4, name: "Item 4", price: 15.99, quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoteK3g91iaLQkcTHc0xh7Ie0Irmv1mZ4g2Q&s" },
        { id: 5, name: "Item 5", price: 7.99, quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSyZl85gniM1JtzPXGjuNddIWJWmnh5SfPw&s" },
    ]);

    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    const handleQuantityChange = (id, quantity) => {
        setCart(cart.map((item) => item.id === id ? { ...item, quantity } : item));
    };
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="shopping-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: ${getTotal()}</h2>
        </div>
    );
}

export default ShoppingCart;

