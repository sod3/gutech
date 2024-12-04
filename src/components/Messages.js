import React from 'react';
import './Messages.css'; // Import the CSS file

function Messages({ message }) {
  const { Message1, Message2, Message3 } = message;

  return (
    <div className="messages-container">
      <div className="message-card">
        <p className="message-text">{Message1}</p>
      </div>
      <div className="message-card">
        <p className="message-text">{Message2}</p>
      </div>
      <div className="message-card">
        <p className="message-text">{Message3}</p>
      </div>
    </div>
  );
}

export default Messages;