// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { Box } from '@chakra-ui/react';



export default function Navbar() {
  return (
    <nav className="navbar" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div>
        <img alt="Logo" className="logo"/>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
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
        </ul>
      </div>

      <Box className="logout-button" mt="auto">
        <button><a href="/logout">Logout</a></button>
      </Box>
    </nav>
  );
}
