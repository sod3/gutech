import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
        <h1>counter {count}</h1>
        <button onClick= {increment}>Increment</button>
        <button onClick= {decrement}>decrement</button>
        <button onClick= {reset}>reset</button>        
    </div>
  )
}
export default Counter;