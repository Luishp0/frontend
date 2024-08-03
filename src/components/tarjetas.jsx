import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './AuthContext'; // Importa el AuthContext

const iconColors = {
  usuarios: 'text-green-500',
  peceras: 'text-orange-500',
  sensores: 'text-blue-500',
  descargas: 'text-red-500',
};

const Tarjetas = () => {
  const { darkMode } = useContext(AuthContext); // Obtén el estado de dark mode del contexto
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Botón de alternancia */}
      <button 
        onClick={toggleVisibility} 
        className={`p-2 rounded-md mb-4 text-lg ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'}`}
      >
        <FontAwesomeIcon 
          icon={isVisible ? faChevronUp : faChevronDown} 
          className={`transition-transform ${!isVisible ? 'scale-125' : ''}`} 
        />
      </button>
      {/* Contenido de tarjetas o iconos */}
      {isVisible ? (
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
      ) : (
        <div className="flex flex-row justify-center space-x-6">
          <Icono
            icono={<FontAwesomeIcon icon={faUsers} className={iconColors.usuarios} />}
            link="/tablausuarios"
            darkMode={darkMode}
          />
          <Icono
            icono={<FontAwesomeIcon icon={faFish} className={iconColors.peceras} />}
            link="/tablapeceras"
            darkMode={darkMode}
          />
          <Icono
            icono={<FontAwesomeIcon icon={faThermometer} className={iconColors.sensores} />}
            link="/sensores"
            darkMode={darkMode}
          />
          <Icono
            icono={<FontAwesomeIcon icon={faDownload} className={iconColors.descargas} />}
            link="/inicio"
            darkMode={darkMode}
          />
        </div>
      )}
    </div>
  );
};

const Tarjeta = ({ icono, texto, link, total, darkMode }) => {
  return (
    <div
      onClick={() => window.location.href = link}
      className={`p-8 rounded-lg shadow-lg flex items-center cursor-pointer transition-transform transform hover:scale-105 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
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

const Icono = ({ icono, link, darkMode }) => {
  return (
    <a href={link} className={`p-4 transition-colors ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'}`}>
      <div className="text-4xl">
        {icono}
      </div>
    </a>
  );
};

export default Tarjetas;
