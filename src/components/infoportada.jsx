import React from 'react';
import { FaHome, FaFish, FaFilter, FaThermometerHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhatWeOffer = () => {
  const services = [
    {
      icon: <FaFish className="text-blue-500 text-6xl" />,
      title: 'PECES',
      description: '',
      link: '/infoma',
    },
    {
      icon: <FaFilter className="text-orange-500 text-6xl" />,
      title: 'FILTROS',
      description: '',
      link: '/filtros',
    },
    {
      icon: <FaThermometerHalf className="text-yellow-500 text-6xl" />,
      title: 'SENSORES',
      description: '',
      link: '/sensores',
    }
  ];

  return (
    <div className="py-12 ml-80" style={{ marginTop: '2cm' }}> {/* Ajuste del margen a la izquierda */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              title={service.title}
              link={service.link}
              isFish={service.title === 'PECES'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const ServiceButton = ({ icon, title, link, isFish }) => {
  return (
    <Link
      to={link}
      className={`p-6 rounded-md shadow-md focus:outline-none ${isFish ? 'bg-blue-200' : 'bg-white'}`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-lg font-bold text-gray-700">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{/* No se muestra la descripción en el botón de enlace */}</p>
    </Link>
  );
};
