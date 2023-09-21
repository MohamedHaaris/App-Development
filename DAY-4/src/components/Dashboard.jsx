import React from 'react';
 import '../assets/css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>College Admission Portal</h1>
        <button className="logout-button">Logout</button>
      </header>
      <nav className="sidebar">
        {/* Sidebar content (navigation links) */}
        <ul>
          <li>Dashboard</li>
          <li>Applications</li>
          <li>Students</li>
          <li>Courses</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="dashboard-content">
        {/* Main content of the dashboard */}
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Add various components and content here */}
      </main>
    </div>
  );
};

export default Dashboard;
