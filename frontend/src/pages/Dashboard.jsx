import * as React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Card, CardHeader, Progress } from "@chakra-ui/react";
import avatar from "../assets/data/ANIMEava.png";
import Process from "../components/process-component/Process";
import progressPic from "./image.png";
import DailyTask from "../components/Daily Task/DailyTask";

const Dashboard = () => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useStateContext();

  const handleIconClick = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <main>
      <section className="grid grid-cols-3 gap-6 mb-6 px-10 2xl:px-20">
        <Card className="col-span-2 px-6 " bg="#CBB5DC">
          <div className="flex  px-5">
            <div className="my-auto">
              <h1 className="font-extrabold text-4xl">Hello Bao!</h1>
              <p className="font-semibold text-xl">Great to see you again.</p>
            </div>
            <img
              src={avatar}
              alt="avatar"
              className="max-h-60 transition duration-300 transform hover:scale-105 mx-auto"
            />
          </div>
        </Card>
        <Card bg="#A6D3FF" className="p-6 text-white">
          {/* Add content here */}
        </Card>
      </section>
      <section className="grid grid-cols-4 grid-rows-5 gap-6 mb-6 px-10 2xl:px-20 ">
        <div>
          <Process valuePercent={40} icon="footsteps" activity="steps" />
        </div>

        <div>
          <Process valuePercent={70} icon="rice" activity="Cal" />
        </div>

        <div>
          <Process valuePercent={30} icon="water" activity="ml" />
        </div>
        <div className="row-span-5  rounded-lg">
          <DailyTask />
        </div>
        <div className="col-start-1 row-span-2 bg-blue-200 ">
          <img src={progressPic} className="object-fill h-48 w-96" />
        </div>
        <div
          className="col-start-2 row-span-4 col-end-4 rounded-lg "
          style={{ backgroundColor: "#F9B0CB" }}
        ></div>
        <div className="col-start-1 row-span-2  rounded-lg bg-blue-200">

        </div>
      </section>
    </main>
  );
};

export default Dashboard;
