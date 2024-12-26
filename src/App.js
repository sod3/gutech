import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './lab10/ecommerce/home';
import UserProfile from './lab10/ecommerce/userprofile';
import Navbar from './lab10/ecommerce/navbar';
import ShoppingCart from './lab10/ecommerce/shoppingcart';
import ProductDetail from './lab10/ecommerce/productdetail';
function App() {
  return (
   <Router>
     <div>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
       </Routes>
     </div>
  </Router>
 );
}
export default App;