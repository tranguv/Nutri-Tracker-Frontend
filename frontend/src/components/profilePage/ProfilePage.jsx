import React, { useState } from 'react';
import Badge from '../badge/Badge';

const ProfilePage = ({ user }) => {
  const { name, email, date } = user;
  const [profileImage, setProfileImage] = useState(null); // State to store the profile picture

  // Function to handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mt-10 mb-10">
          <div className="flex items-center relative">
            <div className="relative rounded-full overflow-hidden">
              <img
                src={profileImage ? URL.createObjectURL(profileImage) : "../src/assets/data/alex-browne.png.256x256_q100_crop-smart.png"}
                className="rounded-full h-30 w-30 mr-5 transition duration-300 transform hover:scale-105"
                alt="Profile"
                style={{ width: '200px', height: '200px' }} // Set default size for the image
              />
              <label
                htmlFor="profilePicInput"
                className="absolute inset-0 flex items-center justify-center bg-black 
                bg-opacity-50 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ width: '200px', height: '200px' }} // Set static size for the shadow
              >
                <span className="text-white">Change Picture</span>
              </label>
            </div>
            <div>
              {/* Profile information */}
              <h2 className="text-4xl font-semibold">{name}</h2>
              <p className="text-gray-600 text-lg">{email}</p>
              <p className="text-gray-600 text-lg">Joined: {date}</p>
              {/* Profile picture upload */}
              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
        {/* Display badges */}
        <div className="flex justify-center items-center">
          <div>
            <Badge title="Badges" />
            <Badge title="Achievements" />
            <div style={{ width: '1015px', borderBottom: '2px solid black', marginBottom: '20px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
