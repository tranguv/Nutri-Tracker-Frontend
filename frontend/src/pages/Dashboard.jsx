import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Process from '../components/process-component/Process';
import Achievement from '../components/process-component/Achievement';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import { useStateContext } from '../contexts/ContextProvider';

const Dashboard = () => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex relative dark:bg-main-dark-bg">


      <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <TooltipComponent content="Settings Tooltip">
          <FiSettings size={30} />
        </TooltipComponent>
      </div>


      <div className={isSidebarCollapsed ? 'w-44' : 'w-14'}>
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} handleIconClick={handleIconClick} />
      </div>

      <div className="dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2">
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg">
                <Navbar />
              </div>

            <div className="flex flex-col justify-center items-center gap-8 mt-16 mb-10 mx-32 sm:mx-16">
            <div className="flex w-full h-32 bg-blue-200 rounded-lg items-center justify-center">
              <p className="p-2 text-gray-500">Hi, ...</p>
            </div>

            <div className="flex w-full gap-10">
              <div className="w-full">
                <div className="flex flex-col justify-center mt-8 gap-6">
                  <div className="flex gap-10">
                    <div className="w-1/3">
                      <Process valuePercent="90" activity="Step" height="48" />
                    </div>
                    <div className="w-1/3">
                      <Process valuePercent="100" icon="rice" activity="Cal" height="48"/>
                    </div>
                    <div className="w-1/3">
                      <Process valuePercent="100" icon="rice" activity="Cal" />
                    </div>
                  </div>
                  <div className='flex bg-gray-200 gap-10'>
                    <div className="h-36 w-2/3 bg-gray-500 rounded-lg"></div>
                    <div className="h-36 w-1/3 bg-gray-300 rounded-lg"></div>
                  </div>
                  <div className="flex gap-10">
                    <div className="w-1/3">
                      <Achievement />
                    </div>
                    <div className="w-1/3">
                      <Process valuePercent="100" icon="rice" activity="Cal" height="36" />
                    </div>
                    <div className="w-1/3">
                      <Process valuePercent="100" icon="rice" activity="Cal" height="36" />
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            <div className="w-full h-32 bg-red-300 rounded-lg flex"></div>

            <div className="flex justify-center flex-wrap gap-10 w-2/3"></div>
          </div>


         </div>

      
        
          
          
         




    </div>
  );
};

export default Dashboard;
