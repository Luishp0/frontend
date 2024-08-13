import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext'; // Importa el AuthContext

const iconColors = {
  usuarios: 'text-green-500',
  peceras: 'text-orange-500',
  sensores: 'text-blue-500',
  descargas: 'text-red-500',
};

const Tarjetas = () => {
  const { darkMode } = useContext(AuthContext); // Obtén el estado de dark mode del contexto

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Contenido de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Tarjeta
          icono={<FontAwesomeIcon icon={faUsers} className={iconColors.usuarios} />}
          texto="Usuarios"
          link="/tablausuarios"
          total="150"
          darkMode={darkMode} // Pasando el estado de darkMode a los componentes hijos
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faFish} className={iconColors.peceras} />}
          texto="Peceras"
          link="/tablapeceras"
          total="50"
          darkMode={darkMode}
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faThermometer} className={iconColors.sensores} />}
          texto="Sensores"
          link="/sensores"
          total="100"
          darkMode={darkMode}
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faDownload} className={iconColors.descargas} />}
          texto="Descargas"
          link="/inicio"
          total="200"
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

const Tarjeta = ({ icono, texto, link, total, darkMode }) => {
  // Establece los colores de fondo para las tarjetas según el estado darkMode
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
