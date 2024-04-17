import React from 'react';
import { FaHome, FaFish, FaFilter, FaThermometerHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

const WhatWeOffer = () => {
  const services = [
  
    {
      icon: <FaFish className="text-blue-500 text-6xl" />,
      title: 'PECES',
      description: '',
      link: '/infoma', // Ruta a la que se redirigirá al hacer clic
    },
    {
      icon: <FaFilter className="text-orange-500 text-6xl" />, // Icono de filtro
      title: 'FILTROS',
      description: '',
      link: '/filtros', // Ruta a la que se redirigirá al hacer clic
    },
    {
      icon: <FaThermometerHalf className="text-yellow-500 text-6xl" />, // Icono de termómetro medio
      title: 'SENSORES',
      description: '',
      link: '/sensores', // Ruta a la que se redirigirá al hacer clic
    }
  ];

  return (
    <div className="py-12" style={{ marginTop: '2cm' }}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceButton
              key={index}
              icon={service.icon}
              title={service.title}
              link={service.link} // Pasar la ruta al componente de botón de servicio
              isFish={service.title === 'PECES'} // Agregar prop para identificar si es el botón de PECES
              isFilters={service.title === 'FILTROS'} // Agregar prop para identificar si es el botón de FILTROS
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const ServiceButton = ({ icon, title, link, isFish, isFilters }) => {
  let bgColorClass = 'bg-white'; // Por defecto, el fondo es blanco
  if (isFish) {
    bgColorClass = 'bg-white'; // Cambia el fondo a blanco si es el botón de PECES
  } else if (isFilters) {
    bgColorClass = 'bg-blue-200'; // Cambia el fondo a azul celeste si es el botón de FILTROS
  }

  return (
    <Link
      to={link}
      className={`p-6 rounded-md shadow-md focus:outline-none ${bgColorClass}`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-lg font-bold text-gray-700">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{/* No se muestra la descripción en el botón de enlace */}</p>
    </Link>
  );
};
