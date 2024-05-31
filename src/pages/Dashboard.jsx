import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/blogs/create">Create Blog</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
