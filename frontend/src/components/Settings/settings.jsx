import React from "react";
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
  const avatarImageUrl = "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png";

  return (
    <div className="flex flex-col items-center h-screen justify-center p-8">
      {/* Top section with avatar and 'Your profile'*/}
      <div className="flex mb-8 items-start">
        {/* Avatar on the left */}
        <div className="mr-4 w-32 h-36 bg-violet-300 rounded-2xl overflow-hidden flex-shrink-0">
          <img
            src={avatarImageUrl}
            className="w-full h-full object-cover"
            alt="Avatar"
          />
        </div>

        {/* 'Your profile' heading */}
        <div className="ml-4">
          {/* 'Your Profile' text right on top of the full name */}
          <div className="text-black font-semibold text-lg mb-4">
            Your Profile
          </div>
          {/* Placeholders*/}
          <div className="flex flex-col">
            {placeholders.map((placeholder, index) => (
              <div
                key={index}
                className="w-96 py-4 bg-gray-300 rounded-lg flex p-10 items-center my-2"
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
        <button
          onClick={Edit}
          className="bg-violet-300 text-black font-medium px-8 py-2 rounded-lg"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Settingpg;
