import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faChartPie, faBell, faUsers, faDatabase } from '@fortawesome/free-solid-svg-icons';
import TargetaUsuario from './tarjetaUsuario.jsx';

const BarraLateral = () => {
  const [analisisOpen, setAnalisisOpen] = useState(false);

  const toggleAnalisis = () => {
    setAnalisisOpen(!analisisOpen);
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col"> 
      <div className="p-4">
        <h1 className="text-2xl font-bold">AcuaCode</h1>
      </div>
      <ul className="flex-1"> 
        
        <li 
          className="px-4 py-2 cursor-pointer" 
          onClick={toggleAnalisis}
        >
          <div className="py-2 cursor-pointer relative flex items-center w-full hover:bg-gray-700">
            <FontAwesomeIcon 
              icon={faChartPie}
            />
           <span className='ml-6'></span> Análisis
            <FontAwesomeIcon 
              icon={analisisOpen ? faAngleDown : faAngleRight} className="px-5"
            />
          </div>
          {analisisOpen && (
            <ul className="ml-4">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Todos los Análisis</li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Favoritos</li>
            </ul>
          )}
        </li>

        <li 
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center w-full">
            <FontAwesomeIcon icon={faUsers} />
            <span className='ml-6'>Usuarios</span>
          </div>
        </li>

        <li 
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center w-full">
            <FontAwesomeIcon icon={faDatabase} />
            <span className='ml-6'>Relpadar</span>
          </div>
        </li>

        <li 
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center w-full">
            <FontAwesomeIcon icon={faBell}  />
            <span className='ml-6'>Notificaciones</span>
          </div>
        </li>

      </ul>
      <div >
      <TargetaUsuario/>

      </div>
      
    </div>
    
  );
};

export default BarraLateral;
