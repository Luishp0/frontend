import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logotra.png";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarBackground('bg-white'); // Cambia el fondo a blanco cuando se desplaza hacia abajo
      } else {
        setNavbarBackground('bg-transparent'); // Mantiene el fondo transparente cuando está en la parte superior
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navbarBackground} fixed top-0 w-full py-4 z-50 transition duration-300 ease-in-out`}>
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
          <ul className="nav-list flex gap-8">
            <li className="nav-item-with-dropdown relative">
              Información
              <div className="dropdown-content absolute bg-gray-100 shadow-md rounded-md hidden min-w-max">
                <Link to={"/info1"} className="dropdown-link block px-4 py-2">Opción 1</Link>
                <Link to={"/info2"} className="dropdown-link block px-4 py-2">Opción 2</Link>
              </div>
            </li>
            <li>
              <Link to={"/descarga"} className="nav-item">Descarga</Link>
            </li>
            <li>
              <Link to={"/contacto"} className="nav-item">Contacto</Link>
            </li>
          </ul>
          <ul className="nav-list flex gap-8">
            <li>
              <Link to={"/inicio-sesion"} className="nav-item">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to={"/comenzar"} className="nav-item">Comenzar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
