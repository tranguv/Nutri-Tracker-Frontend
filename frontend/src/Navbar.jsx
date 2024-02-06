// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
        <img alt = "Logo" className = "logo"></img>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/goal">Goal</a>
        </li>
        <li>
          <a href="/report">Report</a>
        </li>
        <li>
          <a href="/calendar">Calendar</a>
        </li>
        <li>
          <a href="/logs">Logs</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        {/* Add more navigation items as needed */}
        <li className="logout-button">
        <a href="/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
}
