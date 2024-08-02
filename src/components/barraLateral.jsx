import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faChartPie, faUsers, faDatabase, faRightFromBracket, faFishFins } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BarraLateral = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col justify-between w-64 bg-white text-gray-600 border-r border-gray-300">
      <div className="p-4">
        <Link to="/inicio">
          <h1 className="text-3xl font-extrabold text-black">AcuaCode</h1>
        </Link>
      </div>
      <ul className="flex-1 space-y-2">
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faChartPie} className="text-lg" />
            <span className="ml-4 text-lg font-medium">
              <Link to="/inicioadministrador">Dashboard</Link>
            </span>
          </div>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUsers} className="text-lg" />
            <span className="ml-4 text-lg font-medium">
              <Link to="/tablausuarios">Usuarios</Link>
            </span>
          </div>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFishFins} className="text-lg" />
            <span className="ml-4 text-lg font-medium">
              <Link to="/tablapeceras">Peceras</Link>
            </span>
          </div>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faDatabase} className="text-lg" />
            <span className="ml-4 text-lg font-medium">
              <Link to="/respaldo">Respaldo</Link>
            </span>
          </div>
        </li>
        <li className="relative px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors" onClick={toggleDropdown}>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faChartPie} className="text-lg" />
            <span className="ml-4 text-lg font-medium">Análisis</span>
            <FontAwesomeIcon icon={dropdownOpen ? faAngleDown : faAngleRight} className="ml-auto" />
          </div>
          {dropdownOpen && (
            <ul className="pl-8 mt-2 space-y-1">
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <Link to="/todasgraficas">Todos los Análisis</Link>
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <Link to="/graficasfavoritas">Favoritos</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faRightFromBracket} className="text-lg" />
            <span className="ml-4 text-lg font-medium">
              <Link to="/login">Cerrar Sesión</Link>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BarraLateral;
