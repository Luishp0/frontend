import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const UserProfile = () => {
  const { darkMode, userName, telefono, correo } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/120');

  const [formData, setFormData] = useState({
    nombre: userName || '',
    telefono: telefono || '',
    correo: correo || '',
  });

  useEffect(() => {
    setFormData({
      nombre: userName || '',
      telefono: telefono || '',
      correo: correo || '',
    });
  }, [userName, telefono, correo]);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', formData);
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`flex w-11/12 space-x-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
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
          <div className="mt-4">
            <h2 className="font-semibold text-2xl text-center">Nombre de usuario</h2>
            {userName}
          </div>
        </div>

        <div className={`w-2/3 shadow-lg rounded-lg p-8 flex flex-col justify-between ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-semibold">Configuraciones de la cuenta</h1>
          </div>

          <div className="border-b mb-8">
            <nav className="flex space-x-6">
              <a href="#" className={`px-6 py-3 ${darkMode ? 'text-blue-400 border-blue-400' : 'text-blue-500 border-blue-500'} border-b-2`}>
                Configuraciones de la cuenta
              </a>
            </nav>
          </div>

          <form className="flex-grow" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              {['nombre', 'telefono', 'correo'].map((label, index) => (
                <div key={index}>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </label>
                  <input
                    type={label === 'contraseña' ? 'password' : 'text'}
                    name={label}
                    className={`mt-1 p-3 block w-full border rounded-md ${darkMode ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-300'}`}
                    placeholder={label.charAt(0).toUpperCase() + label.slice(1)}
                    value={formData[label]}
                    onChange={handleChange}
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
