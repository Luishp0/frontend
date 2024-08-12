import React, { useContext } from "react";
import Navbar from "./navbar";
import Navbarsensor from "./navbarsensor";
import Portadafiltro from "./portadafiltro";
import Infopeceraa from "./infopeceraa";
import { AuthContext } from './AuthContext'; // Importa el contexto

const Sensores = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} min-h-screen`}>
      <Navbar />
      <Navbarsensor />
      <Portadafiltro />
      <Infopeceraa />
    </div>
  );
};

export default Sensores;
