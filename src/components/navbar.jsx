import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: 'transparent', padding: '10px', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo-acuacode-container" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo">
          <img src={logo} alt="" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
        </div>
        <div className="acuacode">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}>ACUACODE</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ul className="nav-list" style={{ textAlign: 'center' }}>
          <li className="nav-item-with-dropdown">
            Información
            <div className="dropdown-content">
              <Link to={"/info1"} className="dropdown-link">Opción 1</Link>
              <Link to={"/info2"} className="dropdown-link">Opción 2</Link>
            </div>
          </li>
          <li>
            Descarga
          </li>
          <li>Contacto</li>
        </ul>
      </div>
      <ul className="nav-list">
        <li className="nav-item">Iniciar Sesión</li>
        <li className="nav-item">Comenzar</li>
      </ul>
    </nav>
  );
}

export default Navbar;
