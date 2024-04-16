import React from 'react';
import { FaSearch, FaCode, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

const WhatWeOffer = () => {
  const services = [
    {
      icon: <FaSearch className="text-blue-500 text-6xl" />,
      title: 'PECES',
      description: '',
      link: '/infoma', // Ruta a la que se redirigirá al hacer clic
    },
    {
      icon: <FaCode className="text-orange-500 text-6xl" />,
      title: 'FILTROS',
      description: '',
      link: '/filtros', // Ruta a la que se redirigirá al hacer clic
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-6xl" />,
      title: 'SENSORES',
      description: '',
      link: '/sensores', // Ruta a la que se redirigirá al hacer clic
    }
  ];

  return (
    <div className="py-12" style={{ marginTop: '0cm' }}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              title={service.title}
              link={service.link} // Pasar la ruta al componente de botón de servicio
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const ServiceButton = ({ icon, title, link }) => {
  return (
    <Link to={link} className="p-6 bg-white rounded-md shadow-md focus:outline-none">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-lg font-bold text-gray-700">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{/* No se muestra la descripción en el botón de enlace */}</p>
    </Link>
  );
};
