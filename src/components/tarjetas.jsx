import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext';

const iconColors = {
  usuarios: 'text-green-500',
  peceras: 'text-orange-500',
  sensores: 'text-blue-500',
  descargas: 'text-red-500',
};

const Tarjetas = () => {
  const [usuarios, setUsuarios] = useState(0);
  const [peces, setPeces] = useState(0);
  const [sensores, setSensores] = useState(0);
  const { darkMode } = useContext(AuthContext);

  useEffect(() => {
    fetchUsuarios();
    fetchPeces();
    fetchSensores();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:8000/usuario/contador');
      const data = await response.json();
      setUsuarios(data.totalUsuarios);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchPeces = async () => {
    try {
      const response = await fetch('http://localhost:8000/peces/contador');
      const data = await response.json();
      setPeces(data.totalPeces);
    } catch (error) {
      console.error('Error fetching fish:', error);
    }
  };

  const fetchSensores = async () => {
    try {
      const response = await fetch('http://localhost:8000/sensores/contador');
      const data = await response.json();
      setSensores(data.totalSensores);
    } catch (error) {
      console.error('Error fetching sensors:', error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Contenido de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Tarjeta
          icono={<FontAwesomeIcon icon={faUsers} className={iconColors.usuarios} />}
          texto="Usuarios"
          link="/tablausuarios"
          total={usuarios}
          darkMode={darkMode}
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faFish} className={iconColors.peceras} />}
          texto="Peces"
          link="/tablapeceras"
          total={peces}
          darkMode={darkMode}
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faThermometer} className={iconColors.sensores} />}
          texto="Sensores"
          link="/sensores"
          total={sensores}
          darkMode={darkMode}
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faDownload} className={iconColors.descargas} />}
          texto="Descargas"
          total="1"
          link="/inicio"
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

const Tarjeta = ({ icono, texto, link, total, darkMode }) => {
  const bgColor = darkMode ? 'bg-gray-700' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-gray-700';

  return (
    <div
      onClick={() => window.location.href = link}
      className={`p-6 rounded-lg shadow-md flex items-center cursor-pointer transition-transform transform hover:scale-105 ${bgColor} ${textColor}`}
    >
      <div className="text-6xl mr-6">
        {icono}
      </div>
      <div>
        <p className="text-2xl font-semibold">{texto}</p>
        <p className="text-3xl font-bold">{total}</p>
      </div>
    </div>
  );
};

export default Tarjetas;
