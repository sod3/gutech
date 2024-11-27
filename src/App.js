import React from 'react';
// import Greeting from './components/Greeting';
import './App.css';
// import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';
import Navbar from './components/lab7/Navbar';
import LandingPage from './components/lab7/LandingPage';
import Form from './components/lab7/Form';
import Footer from './components/lab7/Footer';
const App = () => {
  return (
    <div className="App">
      {/* <Header />
      <Greeting />
      <Content />
      <Footer /> */}
      <Navbar />
      <LandingPage />
      <Form />
      <Footer />
    </div>
  );
};

export default App;