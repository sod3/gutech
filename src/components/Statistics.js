import React from 'react';
import './Statistics.css'; // Import the CSS file

function Statistics({ statistics }) {
  const { totalUsers, activeUsers, newSignups, activePercentage } = statistics;

  return (
    <div className="Statistics">
      <h1>Statistics</h1>
      <p>Total Users: {totalUsers}</p>
      <p>Active Users: {activeUsers}</p>
      <p>New Signups: {newSignups}</p>
      <div className="progress-container">
        <p>Active Percentage:</p>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${activePercentage}%` }}
          />
        </div>
        <p>{activePercentage}%</p>
      </div>
    </div>
  );
}

export default Statistics;