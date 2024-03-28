import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

import Process from "../components/process-component/Process";
const Report = () => {
  return (
    <div className="mx-32 my-10 ">
      <div className="flex  items-center w-full bg-blue-200 h-50 px-3 rounded-lg ">
        <div className=" w-1/2 border-r-2   ">
          <h3>Line Graph </h3>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
        </div>
        <div className="w-1/2 ">
          <h3>Line Graph </h3>
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="grid grid-cols-3	mt-5  ">
        <Process />
        <Process />
        <Process />
      </div>
      <div className="grid grid-cols-3	mt-5  ">
        <div>
          
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Report;
