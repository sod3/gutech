import React, { useState } from 'react';

function ShoppingCart() {
  const [addItems, setAddItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const items = [
    { name: 'Apple', price: 10 },
    { name: 'Banana', price: 5 },
    { name: 'Orange', price: 8 },
    { name: 'Grapes', price: 12 },
    { name: 'Mango', price: 15 },
  ];
  const addToCart = (item) => {
    setAddItems([...addItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (item) => {
    const updatedItems = addItems.filter((i) => i !== item);
    setAddItems(updatedItems);
    setTotalPrice(totalPrice - item.price);
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
        {items.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            </li>
        ))}
        <p>Total Price: ${totalPrice}</p>
        </div>
        );
    }
export default ShoppingCart;
