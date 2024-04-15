import React from 'react';
import { FaSearch, FaCode, FaGlobe, FaCog, FaWrench, FaServer } from 'react-icons/fa';

const WhatWeOffer = () => {
  const services = [
    {
      icon: <FaSearch className="text-blue-500 text-6xl" />,
      title: 'Asesoramiento personalizado en diseño de peceras inteligentes',
      description: 'Nuestro equipo de expertos en acuarismo te guiará en la creación de una pecera inteligente que se adapte perfectamente a tus necesidades y preferencias estéticas.'
    },
    {
      icon: <FaCode className="text-orange-500 text-6xl" />,
      title: 'Instalación profesional y configuración inicial',
      description: 'Nos encargamos de la instalación de tu pecera inteligente en tu hogar u oficina, asegurándonos de que todos los componentes estén correctamente configurados y funcionando según lo previsto.'
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-6xl" />,
      title: 'Monitoreo remoto y mantenimiento a distancia',
      description: 'Con nuestra plataforma de monitoreo remoto, puedes supervisar el estado de tu pecera inteligente desde cualquier lugar a través de tu dispositivo móvil o computadora.'
    },
    {
      icon: <FaCog className="text-green-500 text-6xl" />,
      title: 'Servicios de limpieza y cambio de agua programados',
      description: 'Nos encargamos de la limpieza periódica de tu pecera inteligente y del cambio de agua según un calendario preestablecido.'
    },
    {
      icon: <FaWrench className="text-purple-500 text-6xl" />,
      title: 'Programación personalizada de iluminación y alimentación',
      description: 'Aprovecha al máximo las capacidades de tu pecera inteligente con una programación personalizada de la iluminación y la alimentación.'
    },
    {
      icon: <FaServer className="text-red-500 text-6xl" />,
      title: 'Asistencia técnica y soporte al cliente 24/7',
      description: 'Estamos disponibles las 24 horas del día, los 7 días de la semana, para brindarte asistencia técnica y soporte al cliente ante cualquier duda o problema que puedas tener con tu pecera inteligente.'
    }
  ];

  return (
    <div className="py-12 bg-gray-100 h-200">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900">Servicios</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-lg font-bold text-gray-700">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};
