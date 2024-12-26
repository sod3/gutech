import React from 'react';
import { useNavigate } from 'react-router-dom';
function ProductDetailsButton( ) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shoppingcart');
  }

  return (
    <button onClick={handleClick}>Add to cart</button>
  );
}
export default ProductDetailsButton;