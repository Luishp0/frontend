import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faChartPie, faUsers, faDatabase, faRightFromBracket, faFishFins, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Importa el AuthContext para acceder al dark mode

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
  const { darkMode } = useContext(AuthContext); // Obtén el estado de dark mode del contexto

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex flex-col h-screen ${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {sidebarOpen && (
              <Link to="">
                <h1 className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-black'}`}>AcuaCode</h1>
              </Link>
            )}
            <button onClick={toggleSidebar} className={`p-2 rounded-md hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors ${sidebarOpen ? 'ml-4' : ''}`}>
              <FontAwesomeIcon icon={sidebarOpen ? faArrowLeft : faArrowRight} className="text-lg" />
            </button>
          </div>
        </div>
        <ul className="flex-1 space-y-2">
          <li className={`px-4 py-3 cursor-pointer hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
            <FontAwesomeIcon icon={faChartPie} className={`${iconColors.dashboard} text-lg`} />
            <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
              <Link to="/inicioadministrador">Dashboard</Link>
            </span>
          </li>
          <li className={`px-4 py-3 cursor-pointer hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
            <FontAwesomeIcon icon={faUsers} className={`${iconColors.usuarios} text-lg`} />
            <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
              <Link to="/tablausuarios">Usuarios</Link>
            </span>
          </li>
          <li className={`px-4 py-3 cursor-pointer hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
            <FontAwesomeIcon icon={faFishFins} className={`${iconColors.peceras} text-lg`} />
            <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
              <Link to="/tablapeceras">Peces</Link>
            </span>
          </li>
          <li className={`px-4 py-3 cursor-pointer hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`}>
            <FontAwesomeIcon icon={faDatabase} className={`${iconColors.respaldo} text-lg`} />
            <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
              <Link to="/respaldo">Respaldo</Link>
            </span>
          </li>
          <li className={`relative px-4 py-3 cursor-pointer hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors flex items-center ${!sidebarOpen && 'justify-center'}`} onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faChartPie} className={`${iconColors.dashboard} text-lg`} />
            <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>Análisis</span>
            <FontAwesomeIcon icon={dropdownOpen ? faAngleDown : faAngleRight} className={`ml-auto ${!sidebarOpen && 'hidden'}`} />
            {dropdownOpen && (
              <ul className={`pl-4 mt-2 space-y-1 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'} rounded-md shadow-md absolute top-full left-0 w-full z-20`}>
                <li className={`px-4 py-2 cursor-pointer hover:${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}>
                  <Link to="/todasgraficas">Todos los Análisis</Link>
                </li>
                <li className={`px-4 py-2 cursor-pointer hover:${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}>
                  <Link to="/graficasfavoritas">Favoritos</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`px-4 py-3 cursor-pointer hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors flex items-center ${!sidebarOpen && 'justify-center'} z-10`}>
            <FontAwesomeIcon icon={faRightFromBracket} className={`${iconColors.cerrarSesion} text-lg`} />
            <span className={`ml-4 text-lg font-medium ${!sidebarOpen && 'hidden'}`}>
              <Link to="/login">Cerrar Sesión</Link>
            </span>
          </li>
        </ul>
      </div>
      {!sidebarOpen && (
        <div className={`absolute bottom-0 left-0 w-16 h-full flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'} z-10`}>
          <button onClick={toggleSidebar} className={`p-2 rounded-md hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mt-4`}>
            <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
          </button>
          <Link to="/inicioadministrador" className={`p-2 hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <FontAwesomeIcon icon={faChartPie} className={`${iconColors.dashboard} text-2xl`} />
          </Link>
          <Link to="/tablausuarios" className={`p-2 hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <FontAwesomeIcon icon={faUsers} className={`${iconColors.usuarios} text-2xl`} />
          </Link>
          <Link to="/tablapeceras" className={`p-2 hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <FontAwesomeIcon icon={faFishFins} className={`${iconColors.peceras} text-2xl`} />
          </Link>
          <Link to="/respaldo" className={`p-2 hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <FontAwesomeIcon icon={faDatabase} className={`${iconColors.respaldo} text-2xl`} />
          </Link>
          <Link to="/login" className={`p-2 hover:${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <FontAwesomeIcon icon={faRightFromBracket} className={`${iconColors.cerrarSesion} text-2xl`} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default BarraLateral;
