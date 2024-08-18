import React, { useContext } from "react";
import { FaFish, FaFilter, FaThermometerHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

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
    <div className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'}`} style={{ marginTop: '2cm' }}>
      <div className={`px-4 mx-auto max-w-7xl sm:px-6 lg:px-8`}>
        <div className="flex justify-center items-center gap-8">
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

const ServiceButton = ({ icon, title, link, darkMode }) => {
  return (
    <Link
      to={link}
      className={`p-8 w-80 h-36 flex flex-col justify-center items-center rounded-md border border-gray-300 border-opacity-30 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
    >
      <div className="flex flex-col items-center">
        {icon}
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default WhatWeOffer;
