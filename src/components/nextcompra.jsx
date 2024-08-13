import React, { useContext } from "react";
import Navbar from "./navbar";
import Formcompras from "./formcompras";
import { AuthContext } from './AuthContext'; // Asegúrate de importar el contexto correcto

const Nextcompra = () => {
  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode desde el contexto

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <Formcompras />
    </div>
  );
};

export default Nextcompra;
