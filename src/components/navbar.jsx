import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logotra.png";
import { AuthContext } from './AuthContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode, isAuthenticated, userName } = useContext(AuthContext);

  return (
    <nav className={`navbar fixed top-0 w-full py-4 z-50 transition duration-300 ease-in-out flex items-center justify-between ${darkMode ? 'bg-gray-800 text-gray-200 shadow-lg' : 'bg-white text-gray-800 shadow-md'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo-acuacode-container flex items-center text-lg font-semibold">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
          </div>
          <div className="acuacode ml-2">
            <span>ACUACODE</span>
          </div>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Barra lateral para dispositivos móviles */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md z-40 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <button onClick={toggleDarkMode} className="text-white">
                {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              </button>
            </li>
            <li>
              <Link to="/inicio" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
            </li>
            <li>
              <Link to="/infoma" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Información</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <span className="text-white px-3 py-2 rounded-md text-sm font-medium">{userName}</span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link to="/registro" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Registrarse</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/Compras" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Comprar</Link>
            </li>
          </ul>
        </div>

        {/* Enlaces de navegación normales para pantallas grandes */}
        <div className="hidden lg:flex space-x-8 items-center">
          <button onClick={toggleDarkMode} className="text-sm font-medium hover:bg-opacity-50 px-3 py-2 rounded-md">
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          <Link to="/inicio" className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
          <Link to="/infoma" className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">Información</Link>
          {isAuthenticated ? (
            <>
              <span className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">{userName}</span>
              <button onClick={() => { localStorage.removeItem('user'); window.location.reload(); }} className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link to="/Login" className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">Iniciar Sesión</Link>
              <Link to="/registro" className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">Registrarse</Link>
            </>
          )}
          <Link to="/Compras" className="nav-item hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium">Comprar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
