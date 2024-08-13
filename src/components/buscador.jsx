import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { AuthContext } from './AuthContext'; // Asegúrate de tener la ruta correcta

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { darkMode, toggleDarkMode } = useContext(AuthContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <nav className={`p-4 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center">
        <div className="relative flex items-center w-1/3">
          <FontAwesomeIcon 
            icon={faSearch} 
            className={`absolute left-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} 
          />
          <input
            type="text"
            placeholder="Escriba para buscar..."
            className={`pl-10 pr-4 py-2 w-full rounded-md border ${darkMode ? 'bg-gray-800 border-gray-600 text-white' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className={`text-${darkMode ? 'white' : 'gray-500'} hover:text-${darkMode ? 'gray-300' : 'gray-700'}`}
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
          <button 
            className={`text-${darkMode ? 'white' : 'gray-500'} hover:text-${darkMode ? 'gray-300' : 'gray-700'}`}
          >
            <FontAwesomeIcon 
              icon={faCog} 
              className={darkMode ? 'text-gray-300' : 'text-gray-600'} 
            />
          </button>
          <button 
            className={`text-${darkMode ? 'white' : 'gray-500'} hover:text-${darkMode ? 'gray-300' : 'gray-700'} relative`}
          >
            
            <FontAwesomeIcon 
              icon={faBell} 
              className={darkMode ? 'text-gray-300' : 'text-gray-600'} 
            />
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className={`text-${darkMode ? 'white' : 'gray-700'}`}>
              <div>Thomas Anree</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>UX Designer</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Buscador;
