import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const iconColors = {
  usuarios: 'text-green-500',
  peceras: 'text-orange-500',
  sensores: 'text-blue-500',
  descargas: 'text-red-500',
};

const Tarjetas = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Botón de alternancia */}
      <button 
        onClick={toggleVisibility} 
        className="p-2 rounded-md hover:bg-gray-100 transition-colors mb-4 text-lg"
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
          />
          <Tarjeta
            icono={<FontAwesomeIcon icon={faFish} className={iconColors.peceras} />}
            texto="Peceras"
            link="/tablapeceras"
            total="50"
          />
          <Tarjeta
            icono={<FontAwesomeIcon icon={faThermometer} className={iconColors.sensores} />}
            texto="Sensores"
            link="/sensores"
            total="100"
          />
          <Tarjeta
            icono={<FontAwesomeIcon icon={faDownload} className={iconColors.descargas} />}
            texto="Descargas"
            link="/inicio"
            total="200"
          />
        </div>
      ) : (
        <div className="flex flex-row justify-center space-x-6">
          <Icono
            icono={<FontAwesomeIcon icon={faUsers} className={iconColors.usuarios} />}
            link="/tablausuarios"
          />
          <Icono
            icono={<FontAwesomeIcon icon={faFish} className={iconColors.peceras} />}
            link="/tablapeceras"
          />
          <Icono
            icono={<FontAwesomeIcon icon={faThermometer} className={iconColors.sensores} />}
            link="/sensores"
          />
          <Icono
            icono={<FontAwesomeIcon icon={faDownload} className={iconColors.descargas} />}
            link="/inicio"
          />
        </div>
      )}
    </div>
  );
};

const Tarjeta = ({ icono, texto, link, total }) => {
  return (
    <div
      onClick={() => window.location.href = link}
      className="bg-white p-8 rounded-lg shadow-lg flex items-center cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="text-6xl mr-6">
        {icono}
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-700">{texto}</p>
        <p className="text-3xl font-bold text-gray-900">{total}</p>
      </div>
    </div>
  );
};

const Icono = ({ icono, link }) => {
  return (
    <a href={link} className="p-4 hover:bg-gray-100 transition-colors">
      <div className="text-4xl">
        {icono}
      </div>
    </a>
  );
};

export default Tarjetas;
