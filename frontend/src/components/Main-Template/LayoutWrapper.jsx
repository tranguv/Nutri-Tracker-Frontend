import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const LayoutWrapper = ({ children }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Flex gap={2}>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          handleIconClick={handleIconClick}
        />
      </Box>
      <Box>{children}</Box>
    </Flex>
  );
};

export default LayoutWrapper;
