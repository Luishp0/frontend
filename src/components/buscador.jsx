import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para buscar el término
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="relative flex items-center w-1/3">
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Escriba para buscar..."
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faCog} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 relative">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          </button>
          <button className="text-gray-500 hover:text-gray-700 relative">
            <FontAwesomeIcon icon={faBell} />
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40" // Reemplaza con la URL del avatar del usuario
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-gray-700">
              <div>Thomas Anree</div>
              <div className="text-sm text-gray-500">UX Designer</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Buscador;
