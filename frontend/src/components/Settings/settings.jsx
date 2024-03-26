import React from "react";

const Settingpg = () => {
  const Edit = () => {
    // navigate to the edit page;
    console.log("Edit button clicked");
  };

  const placeholders = [
    { label: "Full Name" },
    { label: "Date of Birth" },
    { label: "Gender" },
    { label: "Blood Type" },
    { label: "Email Address" },
    { label: "Unit of measurement" },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center mt-72">
      {/* Mapping through the array to render placeholders */}
      {placeholders.map((placeholder, index) => (
        <div key={index} className="w-300 h-59 bg-gray-300 rounded-6 absolute left-819 top-50">
          <div className="absolute left-29 top-18 text-center text-black text-19 font-hermeneus font-normal" />
          <div >{placeholder.label}</div>
        </div>
      ))}
      {/* Edit button */}
      <div className="absolute right-0 top-100">
        <button onClick={Edit}>Edit</button>
      </div>
    </div>
  );
};

export default Settingpg;
