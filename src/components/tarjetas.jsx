import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload } from '@fortawesome/free-solid-svg-icons';

const Tarjetas = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-4 text-white">
        <Tarjeta icono={<FontAwesomeIcon icon={faUsers} />} texto="Usuarios" color="bg-orange-500 bg-opacity-75" total="150" />
        <Tarjeta icono={<FontAwesomeIcon icon={faFish} />} texto="Peceras" color="bg-yellow-500 bg-opacity-75" total="50" />
        <Tarjeta icono={<FontAwesomeIcon icon={faThermometer} />} texto="Sensores" color="bg-green-500 bg-opacity-75" total="100" />
        <Tarjeta icono={<FontAwesomeIcon icon={faDownload} />} texto="Descargas" color="bg-purple-500 bg-opacity-75" total="200" />
      </div>
    </div>
  );
};

const Tarjeta = ({ icono, texto, color, total }) => {
  return (
    <div className={`${color} p-6 rounded-md shadow-md flex flex-col items-center w-58`}>
      <div className="flex items-center justify-center mb-6 text-4xl">
        {icono}
      </div>
      
      <p className="text-2xl font-bold text-center text-white">{`Total de `} {texto}</p>
      <p className="mb-2 text-xl text-center text-white"> {`${total}`}</p>
    </div>
  );
};

export default Tarjetas;
