import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { PencilSquareIcon } from '@heroicons/react/24/outline';


const UserProfile = () => {
  const { darkMode } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/120');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`flex w-11/12 space-x-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {/* Sidebar */}
        <div className={`w-1/3 p-8 shadow-lg rounded-lg flex flex-col justify-between ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="relative">
            <img
              src={profileImage}
              alt="User Avatar"
              className="rounded-full w-32 h-32 object-cover cursor-pointer"
              onClick={() => document.getElementById('upload-avatar').click()}
            />
            <input 
              type="file" 
              id="upload-avatar" 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageUpload} 
            />
            <div 
                className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 bg-black bg-opacity-40 rounded-full cursor-pointer transition-opacity opacity-0 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('upload-avatar').click();
                }}
              >
                <PencilSquareIcon className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`} />
              </div>

          </div>
          <div className="mt-[-1.5rem] flex items-center space-x-4"> {/* Espaciado ajustado */}
            <div>
              <h2 className="font-semibold text-2xl">Nathaniel Poole</h2>
              <span className={`block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Account user
              </span>
            </div>
          </div>
          <div className="mt-12">
            <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Opportunities applied: <span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>40</span>
            </p>
            <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Opportunities won: <span className={`font-bold ${darkMode ? 'text-green-400' : 'text-green-500'}`}>26</span>
            </p>
            <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Current opportunities: <span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>8</span>
            </p>
          </div>
          <div>
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md w-full">
              View Public Profile
            </button>
            <p className="text-blue-500 mt-6 text-center">https://example.com</p>
          </div>
        </div>

        {/* Main Content */}
        <div className={`w-2/3 shadow-lg rounded-lg p-8 flex flex-col justify-between ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-semibold">Account Settings</h1>
            <button className="text-blue-500 hover:underline">Change Cover</button>
          </div>

          {/* Tabs */}
          <div className="border-b mb-8">
            <nav className="flex space-x-6">
              <a href="#" className={`px-6 py-3 ${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-500 border-blue-500'} border-b-2`}>
                Account Settings
              </a>
            </nav>
          </div>

          {/* Account Settings Form */}
          <form className="flex-grow">
            <div className="grid grid-cols-2 gap-6">
              {['First Name', 'Last Name', 'Phone Number', 'Email Address', 'City', 'State/County', 'Postcode', 'Country'].map((label, index) => (
                <div key={index}>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {label}
                  </label>
                  <input
                    type="text"
                    className={`mt-1 p-3 block w-full border rounded-md ${darkMode ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-300'}`}
                    value="Placeholder"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-md"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
