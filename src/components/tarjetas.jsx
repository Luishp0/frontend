import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFish, faThermometer, faDownload } from '@fortawesome/free-solid-svg-icons';

const Tarjetas = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-4">
        <Tarjeta icono={<FontAwesomeIcon icon={faUsers} />} texto="Usuarios" color="bg-blue-100" total="150" />
        <Tarjeta icono={<FontAwesomeIcon icon={faFish} />} texto="Peceras" color="bg-green-100" total="50" />
        <Tarjeta icono={<FontAwesomeIcon icon={faThermometer} />} texto="Sensores" color="bg-yellow-100" total="100" />
        <Tarjeta icono={<FontAwesomeIcon icon={faDownload} />} texto="Descargas" color="bg-purple-100" total="200" />
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
      
      <p className="text-center text-2xl font-bold">{`Total de `} {texto}</p>
      <p className="text-center mb-2 text-xl"> {`${total}`}</p>
    </div>
  );
};

export default Tarjetas;
