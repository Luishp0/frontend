import React, { useContext } from 'react';
import { FaFish, FaFilter, FaThermometerHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const WhatWeOffer = () => {
  const { darkMode } = useContext(AuthContext);

  const services = [
    {
      icon: <FaFish className={`text-5xl ${darkMode ? 'text-blue-300' : 'text-blue-500'}`} />,
      title: 'PECES',
      description: '',
      link: '/infoma',
    },
    {
      icon: <FaFilter className={`text-5xl ${darkMode ? 'text-orange-300' : 'text-orange-500'}`} />,
      title: 'FILTROS',
      description: '',
      link: '/filtros',
    },
    {
      icon: <FaThermometerHalf className={`text-5xl ${darkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />,
      title: 'SENSORES',
      description: '',
      link: '/sensores',
    }
  ];

  return (
    <div className={`py-12 ml-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'}`} style={{ marginTop: '2cm' }}>
      <div className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
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
      className={`p-4 w-60 h-32 flex flex-col justify-center items-center rounded-md border-2 shadow-lg focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-500 text-white' : 'bg-white border-gray-300 text-black'}`}
    >
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="ml-2 text-lg font-bold">{title}</h3>
      </div>
    </Link>
  );
};
