import React, { useContext } from 'react';
import Navbar from './navbar';
import Productcompra from './productcompra';
import Informacompras from './informacompras';
import { AuthContext } from './AuthContext'; // Asegúrate de importar el contexto correcto

const Compras = () => {
  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode desde el contexto

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <Productcompra />
      <div style={{ marginTop: '2.5cm' }}>
        <Informacompras />
      </div>
    </div>
  );
};

export default Compras;
