import React from 'react';
import './App.css';
import Profile from './components/profilrcard';
import Productcard from './components/productcard';

const App = () => {
  return (
    <div className="App">
      <Profile name="Mudassir" age="20" occupation="student" location="Pakistan"/>
      <Productcard 
        title="Bugatti La Voiture Noire"
        description="A masterpiece of automotive engineering, featuring unparalleled luxury and performance."
        price={18.7}
        imageUrl={require('./images/bugatti.png')}
      />
    </div>
  );
};

export default App;