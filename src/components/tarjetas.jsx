import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload } from '@fortawesome/free-solid-svg-icons';

const Tarjetas = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Tarjeta
          icono={<FontAwesomeIcon icon={faUsers} />}
          texto="Usuarios"
          link="/tablausuarios"
          total="150"
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faFish} />}
          texto="Peceras"
          link="/tablapeceras"
          total="50"
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faThermometer} />}
          texto="Sensores"
          link="/sensores"
          total="100"
        />
        <Tarjeta
          icono={<FontAwesomeIcon icon={faDownload} />}
          texto="Descargas"
          link="/inicio"
          total="200"
        />
      </div>
    </div>
  );
};

const Tarjeta = ({ icono, texto, link, total }) => {
  return (
    <div
      onClick={() => window.location.href = link}
      className="bg-white p-8 rounded-lg shadow-lg flex items-center cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="text-blue-500 text-6xl mr-6">
        {icono}
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-700">{texto}</p>
        <p className="text-3xl font-bold text-gray-900">{total}</p>
      </div>
    </div>
  );
};

export default Tarjetas;
