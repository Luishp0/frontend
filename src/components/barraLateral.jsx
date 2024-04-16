import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faChartPie, faUsers, faDatabase, faRightFromBracket,faFishFins } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import TargetaUsuario from './tarjetaUsuario.jsx';

const BarraLateral = () => {
  const [analisisOpen, setAnalisisOpen] = useState(false);

  const toggleAnalisis = () => {
    setAnalisisOpen(!analisisOpen);
  };

  return (
    <div className="bg-gray-800 text-white w-64  flex flex-col justify-between"> 
      <div className="p-4">
        <Link to="/inicioadministrador">
          <h1 className="text-2xl font-bold">AcuaCode</h1>
        </Link>
        
      </div>
      <ul className="flex-1"> 
        
        <li 
          className="cursor-pointer" 
          onClick={toggleAnalisis}
        >
          <div className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon 
              icon={faChartPie}
            />
           <span className='ml-6'> Análisis</span> 

             
            
            <FontAwesomeIcon 
              icon={analisisOpen ? faAngleDown : faAngleRight} className="px-5"
            />
          </div>
          {analisisOpen && (
            <ul className="ml-4">
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/todasgraficas" className="text-white">
                  Todos los Análisis
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                <Link to="/graficasfavoritas" className="text-white">
                  Favoritos
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li 
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center w-full">
            <FontAwesomeIcon icon={faUsers} />
            <span className='ml-6'>
              <Link to="/tablausuarios" className="text-white">
                Usuarios
              </Link>
            </span>
          </div>
        </li>
        <li 
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center w-full">
          <FontAwesomeIcon icon={faFishFins} />
            <span className='ml-6'>
              <Link to="/tablapeceras" className="text-white">
                Peceras
              </Link>
            </span>
          </div>
        </li>

        <li 
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <div className="flex items-center w-full">
            <FontAwesomeIcon icon={faDatabase} />
            <span className='ml-6'>
              <Link to="/respaldo" className="text-white">
                Respaldo
              </Link>
            </span>
          </div>
        </li>

        
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center w-full">
          <FontAwesomeIcon icon={faRightFromBracket} />          
            <span className='ml-6'>
              <Link to="/login" className="text-white">
                Cerrar Sesión
              </Link>
            </span>
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
