import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logotra.png";

const Navbar = () => {
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
              <Link to={"/Inicio"} className="nav-item">Inicio</Link>
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
