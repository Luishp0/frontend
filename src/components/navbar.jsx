import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import logo from "../img/logo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: 'white', padding: '10px', fontFamily: 'Roboto, sans-serif' }}>
      <div className="logo">
        <img src={logo} alt="" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}>ACUACODE</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">Información</li>
        <li className="nav-item">Contrato</li>
        <li className="nav-item">Cerrar Sesión</li>
        <Link to={"/"}><li className="nav-item">Descarga</li></Link>
      </ul> 
    </nav> 
  );
}

export default Navbar;
