import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
         <li className='logo-links-container'>
            <div className='logo'>
                <img src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="logo" width="50px" height="50px"/>
            </div>
            <div className='links-container'>
                <Link to="/">Home</Link>
                <Link to="/profile/104">Profile</Link>
                <Link to="/shoppingcart">Cart</Link>
            </div>
          </li>
       </ul>
    </nav>
  );
}


export default Navbar;