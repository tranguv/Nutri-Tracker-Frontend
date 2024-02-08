import React, { useState } from 'react';
import './.modules.css'; // Import your CSS file for styling
import { Box } from '@chakra-ui/react';
import { AiFillDatabase } from "react-icons/ai";

export default function Navbar() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    

    <nav className={`navbar ${isSidebarCollapsed ? 'collapsed' : ''}`} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1px' }}>
        <div>
          <Box className="icon">
            <button onClick={handleIconClick}>
              <a href="/icon">
                <AiFillDatabase size={20} />
              </a>
            </button>
          </Box>
        </div>
      </div>

      <div className="content" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
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


