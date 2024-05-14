import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItem } from '../../constants';

// icons and image
import { FaBars } from 'react-icons/fa';
import nutritracker_logo from '../../assets/nutritracker_logo.png';

//css
import './Sidebar.modules.css';

const Sidebar = ({ isSidebarCollapsed, handleIconClick }) => {

  return (
    <div
      className='container-sidebar'
      style={{
        position: 'fixed',
        width: isSidebarCollapsed ? '11rem' : '4rem',
        height: '200vh',
        top: '0',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className='top_section'>
        <div
          style={{ marginLeft: isSidebarCollapsed ? '80%' : '0px' }}
          className='bars'
        >
          <FaBars onClick={handleIconClick} />
        </div>
        <h1
          style={{ display: isSidebarCollapsed ? 'block' : 'none' }}
          className='logo'
        >
          <img src={nutritracker_logo} width={500} height={500} />
        </h1>
      </div>
      <div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassname='active'
          >
            <div className='icon' style={{ color: 'white' }}>
              {item.icon}
            </div>
            <div
              style={{
                display: isSidebarCollapsed ? 'block' : 'none',
                color: 'white',
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
