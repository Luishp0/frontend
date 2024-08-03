import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faChartPie, faUsers, faDatabase, faRightFromBracket, faFishFins, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const iconColors = {
  dashboard: 'text-blue-500',
  usuarios: 'text-green-500',
  peceras: 'text-orange-500',
  respaldo: 'text-red-500',
  cerrarSesion: 'text-gray-500',
};

const BarraLateral = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Estado para controlar la visibilidad

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex flex-col justify-between ${sidebarOpen ? 'w-64' : 'w-16'} bg-white text-gray-600 border-r border-gray-300 transition-all duration-300 relative`}>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {sidebarOpen && (
            <Link to="/inicio">
              <h1 className="text-3xl font-extrabold text-black">AcuaCode</h1>
            </Link>
          )}
          <button onClick={toggleSidebar} className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${sidebarOpen ? 'ml-4' : ''}`}>
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </button>
        </div>
      </div>
      <ul className="flex-1 space-y-2">
        <li className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
          <FontAwesomeIcon icon={faChartPie} className={`${iconColors.dashboard} text-lg`} />
          <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
            <Link to="/inicioadministrador">Dashboard</Link>
          </span>
        </li>
        <li className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
          <FontAwesomeIcon icon={faUsers} className={`${iconColors.usuarios} text-lg`} />
          <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
            <Link to="/tablausuarios">Usuarios</Link>
          </span>
        </li>
        <li className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
          <FontAwesomeIcon icon={faFishFins} className={`${iconColors.peceras} text-lg`} />
          <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
            <Link to="/tablapeceras">Peceras</Link>
          </span>
        </li>
        <li className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
          <FontAwesomeIcon icon={faDatabase} className={`${iconColors.respaldo} text-lg`} />
          <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
            <Link to="/respaldo">Respaldo</Link>
          </span>
        </li>
        <li className={`relative px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`} onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faChartPie} className={`${iconColors.dashboard} text-lg`} />
          <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>Análisis</span>
          <FontAwesomeIcon icon={dropdownOpen ? faAngleDown : faAngleRight} className={`ml-auto ${!sidebarOpen && 'hidden'}`} />
          {dropdownOpen && (
            <ul className={`pl-8 mt-2 space-y-1 ${!sidebarOpen && 'hidden'}`}>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <Link to="/todasgraficas">Todos los Análisis</Link>
              </li>
              <li className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors">
                <Link to="/graficasfavoritas">Favoritos</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
          <FontAwesomeIcon icon={faRightFromBracket} className={`${iconColors.cerrarSesion} text-lg`} />
          <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
            <Link to="/login">Cerrar Sesión</Link>
          </span>
        </li>
      </ul>
      {/* Overlay for clickable icons when sidebar is collapsed */}
      {!sidebarOpen && (
        <div className="absolute top-0 left-0 w-16 h-full flex flex-col items-center justify-center bg-white z-10">
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 mt-4">
            <FontAwesomeIcon icon={faBars} className="text-2xl" /> {/* Cambiado a text-2xl */}
          </button>
          <Link to="/inicioadministrador" className="p-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faChartPie} className={`${iconColors.dashboard} text-2xl`} /> {/* Cambiado a text-2xl */}
          </Link>
          <Link to="/tablausuarios" className="p-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faUsers} className={`${iconColors.usuarios} text-2xl`} /> {/* Cambiado a text-2xl */}
          </Link>
          <Link to="/tablapeceras" className="p-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faFishFins} className={`${iconColors.peceras} text-2xl`} /> {/* Cambiado a text-2xl */}
          </Link>
          <Link to="/respaldo" className="p-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faDatabase} className={`${iconColors.respaldo} text-2xl`} /> {/* Cambiado a text-2xl */}
          </Link>
          <Link to="/login" className="p-2 hover:bg-gray-100">
            <FontAwesomeIcon icon={faRightFromBracket} className={`${iconColors.cerrarSesion} text-2xl`} /> {/* Cambiado a text-2xl */}
          </Link>
        </div>
      )}
    </div>
  );
};

export default BarraLateral;
