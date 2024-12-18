import React from 'react';
import './App.css';
import Counter from './lab09-2/counter';
import Calculator from './lab09-2/calculator';
import LoginForm from './lab09-2/login';
import ShoppingCart from './lab09-2/shoppingcart2';

const App = () => {
  return (
    <div className="App">
      <Counter />
      <Calculator />
      <LoginForm />
      <ShoppingCart />
    </div>
  );
};

export default App;