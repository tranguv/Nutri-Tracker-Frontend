import React from "react";
import styles from "./settings.module.css"; // Import as a module
import avatarImage from "./avatar.png";

const Settingpg = () => {
  const Edit = () => {
    // navigate to the edit page;
    console.log("Edit button clicked");
  };

  const placeholders = [
    { label: "Gia Bao Chiem" },
    { label: "04/02/2000" },
    { label: "Female" },
    { label: "Type AB" },
    { label: "abc@gmail.com" },
    { label: "168cm" },
    { label: "50kg" },
  ];

  return (
    <div className="flex flex-col items-center h-screen relative">
      {/* Flex container for the avatar and all placeholders */}
      <div className="flex items-start">
        {/* Avatar on the left */}
        <div className="w-10 h-12 bg-violet-300 rounded-2xl overflow-hidden">
          <img
            src={avatarImage}
            className="w-full h-full object-cover"
            alt="Avatar"
          />
        </div>

        {/* Placeholders including 'Your Profile' on the right */}
        <div className="ml-4">
          {/* 'Your Profile' text right on top of the full name */}
          <div className="text-black font-semibold font-['Nunito Sans'] mb-2">
            Your Profile
          </div>
          <div className="flex flex-col">
            {placeholders.map((placeholder, index) => (
              <div
                key={index}
                className="w-96 py-4 bg-gray-300 rounded-lg flex justify-center items-center my-2"
              >
                <div className="text-black font-HermeneusOne">
                  {placeholder.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit button at the bottom right */}
      <div className="absolute bottom-0 right-0 mr-20 mb-10 mt-5">
        <button onClick={Edit} className="bg-violet-300 text-black font-medium px-8 py-2 rounded-lg">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Settingpg;