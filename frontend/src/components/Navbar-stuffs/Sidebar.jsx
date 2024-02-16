import React from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,FaCalendarAlt
} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import './Navbar.modules.css';
import { Tooltip } from '@chakra-ui/react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const Sidebar = ({ children, isSidebarCollapsed, handleIconClick }) => {
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      icon: <FaCalendarAlt />,
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaShoppingBag />,
    },
    {
      path: '/productList',
      name: 'Product List',
      icon: < FaThList />,
    },
  ];
  return (
    <div className= "container ">
      <div style={{ width: 'fit-content' }} className='sidebar bg-red-300 '>
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
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassName='active'
          >
            <TooltipComponent content={item.name}> 
              <div className='icon'>{item.icon}</div>
              <div
                style={{ display: isSidebarCollapsed ? 'block' : 'none' }}
                className='link_text'
              >
                {item.name}
              </div>
            </TooltipComponent>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
