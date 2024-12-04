import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Statistics from './components/Statistics';
import Messages from './components/Messages';

const userinfo = {
  name: "Mudassir Muneer",
  email: "mudassir.muneer@gmail.com",
  role: "Admin",
  profilePicture: require('./images/profile.jpeg'),
  };
  const statistics = {
    totalUsers: 10000,
    activeUsers: 7000,
    newSignups: 500,
    activePercentage: 70,
  };
  const message = {
    Message1: "Hello, Welcome to our website!",
    Message2: "Thank you for visiting our website. We hope you find what you're looking for.",
    Message3: "Let's get started!",
  }
  
const App = () => {
  return (
    <div className="App">
      <UserInfo user={userinfo} />
      <Statistics statistics={statistics} />
      <Messages message={message} />
    </div>
  );
};

export default App;