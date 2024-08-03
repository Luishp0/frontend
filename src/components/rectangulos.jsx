import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { FaSearch, FaCode, FaGlobe, FaCog, FaWrench, FaServer } from 'react-icons/fa';

const WhatWeOffer = () => {
  const { darkMode } = useContext(AuthContext);

  const services = [
    {
      icon: <FaSearch className={`text-6xl ${darkMode ? 'text-blue-300' : 'text-blue-500'}`} />,
      title: 'Asesoramiento personalizado en diseño de peceras inteligentes',
      description: 'Nuestro equipo de expertos en acuarismo te guiará en la creación de una pecera inteligente que se adapte perfectamente a tus necesidades y preferencias estéticas.'
    },
    {
      icon: <FaCode className={`text-6xl ${darkMode ? 'text-orange-300' : 'text-orange-500'}`} />,
      title: 'Instalación profesional y configuración inicial',
      description: 'Nos encargamos de la instalación de tu pecera inteligente en tu hogar u oficina, asegurándonos de que todos los componentes estén correctamente configurados y funcionando según lo previsto.'
    },
    {
      icon: <FaGlobe className={`text-6xl ${darkMode ? 'text-yellow-300' : 'text-yellow-500'}`} />,
      title: 'Monitoreo remoto y mantenimiento a distancia',
      description: 'Con nuestra plataforma de monitoreo remoto, puedes supervisar el estado de tu pecera inteligente desde cualquier lugar a través de tu dispositivo móvil o computadora.'
    },
    {
      icon: <FaCog className={`text-6xl ${darkMode ? 'text-green-300' : 'text-green-500'}`} />,
      title: 'Servicios de limpieza y cambio de agua programados',
      description: 'Nos encargamos de la limpieza periódica de tu pecera inteligente y del cambio de agua según un calendario preestablecido.'
    },
    {
      icon: <FaWrench className={`text-6xl ${darkMode ? 'text-purple-300' : 'text-purple-500'}`} />,
      title: 'Programación personalizada de iluminación y alimentación',
      description: 'Aprovecha al máximo las capacidades de tu pecera inteligente con una programación personalizada de la iluminación y la alimentación.'
    },
    {
      icon: <FaServer className={`text-6xl ${darkMode ? 'text-red-300' : 'text-red-500'}`} />,
      title: 'Asistencia técnica y soporte al cliente 24/7',
      description: 'Estamos disponibles las 24 horas del día, los 7 días de la semana, para brindarte asistencia técnica y soporte al cliente ante cualquier duda o problema que puedas tener con tu pecera inteligente.'
    }
  ];

  return (
    <div className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} h-auto`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className={`mb-8 text-3xl font-extrabold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>Servicios</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

const ServiceCard = ({ icon, title, description, darkMode }) => {
  return (
    <div className={`p-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} rounded-md shadow-md`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};
