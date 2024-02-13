import Process from "../components/process-component/Process";
const Dasboard = () => {
  return (
    <div className="flex flex-col justify-center items-center "> {/* Apply flexbox properties to center vertically */}
      <div className="flex justify-center items-center w-2/3 h-32 bg-blue-200 m-2 rounded-lg">
        {/* Content inside this div */}
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        <Process valuePercent="90" />
        <Process valuePercent="65" icon='rice' />
        <Process valuePercent="45" icon="water" />
      </div>
    </div>
  );
};

export default Dasboard;
