import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };
  const subtract = () => {
    setResult(num1 - num2);
  };
  const multiply = () => {
    setResult(num1 * num2);
  };
  const divide = () => {
    setResult(num1 / num2);
  };
  return (
    <div>
        <h1>Calculator</h1>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>    
        <button onClick={divide}>/</button>
        <p>Result: {result}</p>
    </div>
    );
}
    export default Calculator;