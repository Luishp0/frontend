import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarBackground('#ffffff'); // Cambia el fondo a blanco cuando se desplaza hacia abajo
      } else {
        setNavbarBackground('transparent'); // Mantiene el fondo transparente cuando está en la parte superior
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navbarBackground !== 'transparent' ? 'fixed' : ''}`}>
      <div className="navbar-content">
        <div className="logo-acuacode-container">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
          </div>
          <div className="acuacode">
            <span>ACUACODE</span>
          </div>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item-with-dropdown">
              Información
              <div className="dropdown-content">
                <Link to={"/info1"} className="dropdown-link">Opción 1</Link>
                <Link to={"/info2"} className="dropdown-link">Opción 2</Link>
              </div>
            </li>
            <li>
              <Link to={"/descarga"} className="nav-item">Descarga</Link>
            </li>
            <li>
              <Link to={"/contacto"} className="nav-item">Contacto</Link>
            </li>
          </ul>
          <ul className="nav-list">
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
