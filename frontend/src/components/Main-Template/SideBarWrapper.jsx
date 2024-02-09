// SideBarWrapper.js
import React, { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '../Navbar-stuffs/Navbar'; // Ensure the path is correct

const SideBarWrapper = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const sideBarSpan = isSidebarCollapsed ? 1 : 1;
  const contentSpan = isSidebarCollapsed ? 13 : 13;

  return (
    <Grid templateColumns='repeat(14, 1fr)'>
      <GridItem colSpan={sideBarSpan}>
        <Navbar isSidebarCollapsed={isSidebarCollapsed} handleIconClick={handleIconClick} />
      </GridItem>
      <GridItem colSpan={contentSpan}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default SideBarWrapper;
