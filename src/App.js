import React from 'react';
import Greeting from './components/Greeting';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Content />
      <Footer />
    </div>
  );
};

export default App;