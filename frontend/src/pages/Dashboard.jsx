import React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
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
    <SimpleGrid rows={3} spacingY={0} width={`100%`} height={`100vh`} p={10}>
      <GridItem rowSpan={1}>
        <div style={{ background: 'blue', height: '150px' }}>Dashboard</div>
      </GridItem>
      <div>Heloooo wut</div>
      <GridItem rowSpan={1}>
        <Flex justify='space-between' p={2} gap={4}>
          <Process />
          <Process />
          <Process />
        </Flex>
      </GridItem>
      <GridItem rowSpan={1}>
        <Flex justify={'space-between'} p={2} gap={4}>
          <div style={{ background: 'blue' }}></div>
          <Achievement />
        </Flex>
      </GridItem>
      <GridItem rowSpan={1}>
        <Flex justify={'space-evenly'} p={2} gap={4}>
          <Achievement />
          <Achievement />
          <Achievement />
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default Dashboard;
