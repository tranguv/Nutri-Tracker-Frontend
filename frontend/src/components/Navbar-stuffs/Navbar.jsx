import React, { useState } from 'react';
import './Navbar.modules.css'; // Import your CSS file for styling
import { Box } from '@chakra-ui/react';
import { AiFillDatabase } from "react-icons/ai";

export default function Navbar() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };


  return (
    <nav className={`navbar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <Box className="icon">
        <button onClick={handleIconClick}>
          <a>
            <AiFillDatabase size={20} />
          </a>
        </button>
      </Box>

      <div className="content">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/goal">Goal</a></li>
          <li><a href="/report">Report</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/logs">Logs</a></li>
          <li><a href="/settings">Settings</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>

      <Box className={`logout-button ${isSidebarCollapsed ? 'hidden' : ''}`} mt="auto">
      <button><a>Logout</a></button>
      </Box>

    </nav>
  );
}
