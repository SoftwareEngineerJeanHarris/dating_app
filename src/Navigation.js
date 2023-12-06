import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile/1">User Profile</Link></li>
        <li><Link to="/chat/1">Chat Window</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
