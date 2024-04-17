import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logotra.png";

const Navbar = ({ isAuthenticated, userName }) => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarBackground('bg-white');
      } else {
        setNavbarBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    // Eliminar el usuario del localStorage y actualizar el estado
    localStorage.removeItem('user');
    window.location.reload(); // Recargar la página para reflejar el cambio en el Navbar
  };

  return (
    <nav className={`navbar ${navbarBackground} fixed top-0 w-full py-4 z-50 transition duration-300 ease-in-out flex items-center justify-center`}>
      <div className="navbar-content flex justify-between items-center container mx-auto px-4">
        <div className="logo-acuacode-container flex items-center text-lg font-semibold">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
          </div>
          <div className="acuacode ml-2">
            <span>ACUACODE</span>
          </div>
        </div>
        <div className="nav-links">
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
          <ul className={`nav-list flex flex-col lg:flex-row gap-8 items-center ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
            <li>
              <Link to={"/inicio"} className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
            </li>
            <li>
              <Link to={"/infoma"} className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Información</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <span className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">{userName}</span>
                </li>
                <li>
                  <button onClick={handleLogout} className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Cerrar Sesión</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/Login"} className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Iniciar Sesión</Link>
                </li>
                <li>
                  <Link to={"/registro"} className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Registrarse</Link>
                </li>
              </>
            )}
            <li>
              <Link to={"/Compras"} className="nav-item hover:bg-customCyan hover:bg-opacity-50 text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Comprar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
