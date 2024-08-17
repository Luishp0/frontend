import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

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
        <div className={`w-1/3 p-8 shadow-lg rounded-lg flex flex-col items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
          </div>
          <div className="mt-4"> {/* Separación de aproximadamente 1 cm */}
            <h2 className="font-semibold text-2xl text-center">Nombre de usuario</h2>
            <span className={`block ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className={`w-2/3 shadow-lg rounded-lg p-8 flex flex-col justify-between ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-semibold">Configuraciones de la cuenta</h1>
          </div>

          {/* Tabs */}
          <div className="border-b mb-8">
            <nav className="flex space-x-6">
              <a href="#" className={`px-6 py-3 ${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-500 border-blue-500'} border-b-2`}>
                Configuraciones de la cuenta
              </a>
            </nav>
          </div>

          {/* Account Settings Form */}
          <form className="flex-grow">
            <div className="grid grid-cols-2 gap-6">
              {['Nombre', 'Telefono', 'Edad', 'Correo electronico', 'Contraseña'].map((label, index) => (
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
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
