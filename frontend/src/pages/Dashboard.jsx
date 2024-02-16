import Process from "../components/process-component/Process";
import Achievement from "../components/process-component/Achievement";
const Dasboard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-10 mb-10 mx-16 "> {/* Added gap-8 for consistent vertical spacing */}
      <div className="flex w-full  h-32 bg-blue-200 rounded-lg items-center justify-center"> {/* Center content vertically and horizontally */}
        <p className="p-2 text-gray-500">
          Hi, ...
        </p>
      </div>

      <div className="flex w-full gap-10"> {/* Added gap-10 for horizontal gap */}
        <div className="w-2/3">
          <div className="flex flex-col justify-center mt-8 gap-6"> {/* Added gap-6 for vertical gap */}
            <div className="flex gap-10">
              <div className="w-1/2">
                <Process valuePercent="90" activity="Steps" />
              </div>
              <div className="w-1/2">
                <Process valuePercent="100" icon='rice' activity="Cal" />
              </div>
            </div>
            <div className="h-36 bg-gray-300 rounded-lg"></div>
            <div className="flex gap-10">
              <div className="w-1/2">
                  <Achievement />
              </div>
              <div className="w-1/2">
                <Process valuePercent="100" icon='rice' activity="Cal" height="36"/>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3 mt-8 gap-6"> {/* Added gap-6 for vertical gap */}
          <Process valuePercent="90" activity="Steps" />
          <div className="h-36 bg-gray-300 rounded-lg"></div>
          <div className="flex gap-10">
              <div className="w-full">
                <Process valuePercent="90" activity="Steps" height="36"/>
              </div>
              
            </div>
        </div>
      </div>

      <div className="w-full h-32 bg-red-300 rounded-lg flex gap-2"></div>

      <div className="flex justify-center flex-wrap gap-10 w-2/3">
        
      </div>
    </div>
  );
};


export default Dasboard;
