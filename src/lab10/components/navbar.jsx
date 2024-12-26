import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className='list'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/user/125">User</Link>
        </li>
       </ul>
    </nav>
  );
}


export default Navbar;