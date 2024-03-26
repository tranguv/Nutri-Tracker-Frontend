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
      className='flex h-screen w-full max-w-[200px] bg-green-200 text-black'
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
      <div className='flex items-center px-5 py-4 pt-12'>
        <h1
          style={{ display: isSidebarCollapsed ? 'block' : 'none' }}
          className='logo'
        >
          Logo
        </h1>
        <div
          style={{ marginLeft: isSidebarCollapsed ? '50px' : '0px' }}
          className='text-2xl cursor-pointer'
        >
          <FaBars onClick={handleIconClick} />
        </div>
      </div>
      <div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='flex items-center text-white px-4 py-3 gap-4 transition duration-500'
            activeclassname='active'
          >
            <div className='text-2xl' style={{ color: 'black' }}>
              {item.icon}
            </div>
            <div
              style={{
                display: isSidebarCollapsed ? 'block' : 'none',
                color: 'black',
              }}
              className='flex items-center px-4 py-2 gap-4 transition duration-500 rounded-lg hover:bg-green-500 hover:text-black'
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
