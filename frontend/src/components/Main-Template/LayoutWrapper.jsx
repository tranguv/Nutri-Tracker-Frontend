import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { useStateContext } from '../../contexts/ContextProvider';

const LayoutWrapper = ({ children }) => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarWidth = isSidebarCollapsed ? '180px' : '60px';

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        handleIconClick={handleIconClick}
      />
      <div
        style={{
          height: '100vh',
          width: '100%',
          marginLeft: sidebarWidth,
        }}
      >
        <div>
          <Navbar />
          <div
            style={{
              position: 'relative',
              top: '80px',
              height: 'calc(100vh - 82px)',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
