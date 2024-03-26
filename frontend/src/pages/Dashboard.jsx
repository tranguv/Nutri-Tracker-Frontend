import React from 'react';
import Process from '../components/process-component/Process';
import Achievement from '../components/process-component/Achievement';
import { useStateContext } from '../contexts/ContextProvider';
import { GridItem, SimpleGrid, Flex } from '@chakra-ui/react';

const Dashboard = () => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div></div>
  );
};

export default Dashboard;
