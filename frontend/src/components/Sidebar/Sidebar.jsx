import React from 'react';
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaSignOutAlt,
  FaRunning,
  FaGamepad,
  FaHome,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
//css
import './Sidebar.modules.css';

const Sidebar = ({ isSidebarCollapsed, handleIconClick }) => {
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaHome />,
    },
    {
      path: '/reports',
      name: 'Reports',
      icon: <FaRegChartBar />,
    },
    {
      path: '/logs',
      name: 'Logs',
      icon: <FaRunning />,
    },
    {
      path: '/coinstore',
      name: 'Coin Store',
      icon: <FaGamepad />,
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: <FaUserAlt />,
    },
    {
      path: '/logout',
      name: 'Log Out',
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div
      className='container'
      style={{
        position: 'fixed',
        width: isSidebarCollapsed ? '10rem' : '4rem',
        height: '200vh',
        top: '0',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className='top_section'>
        <h1
          style={{ display: isSidebarCollapsed ? 'block' : 'none' }}
          className='logo'
        >
          Logo
        </h1>
        <div
          style={{ marginLeft: isSidebarCollapsed ? '50px' : '0px' }}
          className='bars'
        >
          <FaBars onClick={handleIconClick} />
        </div>
      </div>
      <div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassname='active'
          >
            <div className='icon' style={{ color: 'black' }}>
              {item.icon}
            </div>
            <div
              style={{
                display: isSidebarCollapsed ? 'block' : 'none',
                color: 'black',
              }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
