import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Buscardor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [welcomeMessage ] = useState('Bienvenido');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para buscar el término
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <nav className=" text-black p-1">
      <div className="flex justify-between items-center">
       <span className="mr-4 text-xl font-bold">{welcomeMessage}</span>
        <div className="flex items-center ">
          
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-md mr-4"
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Buscardor;
