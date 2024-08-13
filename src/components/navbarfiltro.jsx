import React, { useContext } from 'react';
import { FaFish, FaFilter, FaThermometerHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Importa el contexto

const WhatWeOffer = () => {
  const { darkMode } = useContext(AuthContext);

  const services = [
    {
      icon: <FaFish className={`text-6xl ${darkMode ? 'text-blue-300' : 'text-blue-500'}`} />,
      title: 'PECES',
      description: '',
      link: '/infoma',
    },
    {
      icon: <FaFilter className={`text-6xl ${darkMode ? 'text-orange-300' : 'text-orange-500'}`} />,
      title: 'FILTROS',
      description: '',
      link: '/filtros',
    },
    {
      icon: <FaThermometerHalf className={`text-6xl ${darkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />,
      title: 'SENSORES',
      description: '',
      link: '/sensores',
    }
  ];

  return (
    <div className={`py-12 ml-80 ${darkMode ? 'bg-gray-800' : 'bg-white'}`} style={{ marginTop: '2cm' }}>
      <div className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              title={service.title}
              link={service.link}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const ServiceButton = ({ icon, title, link, darkMode }) => {
  return (
    <Link
      to={link}
      className={`p-6 rounded-md shadow-md focus:outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className={`ml-4 text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{title}</h3>
      </div>
      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>{/* No se muestra la descripción en el botón de enlace */}</p>
    </Link>
  );
};
