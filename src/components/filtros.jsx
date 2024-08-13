import React, { useContext } from 'react';
import Navbar from './navbar';
import Navbarfiltros from './navbarfiltro';
import Filtroinfo from './filtrosinfo';
import Infopeceraa from './infopeceraa';
import { AuthContext } from './AuthContext'; // Importa el contexto

const Filtros = () => {
  const { darkMode } = useContext(AuthContext); // Obtén el estado del modo oscuro

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <Navbar />
      <Navbarfiltros />
      <Filtroinfo />
      <Infopeceraa />
    </div>
  );
};

export default Filtros;
