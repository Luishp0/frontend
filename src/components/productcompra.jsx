import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgBasico from '../img/compras1.jpg'; // Importa la imagen del paquete básico
import imgAvanzado from '../img/compras2.jpg'; // Importa la imagen del paquete avanzado
import imgPro from '../img/compras3.jpg'; // Importa la imagen del paquete pro

export const Pricing = () => {
  const navigate = useNavigate();
  const packages = [
    {
      title: 'Paquete Básico',
      description: 'Cuidado esencial para peceras pequeñas.',
      price: '$339.99 MXN/mes',
      imgSrc: imgBasico, // Usa la imagen importada
      buttonText: 'Compra Básica',
      features: [
        'Filtro básico',
        'Sensor de temperatura',
        'Luz LED blanca',
        'Soporte técnico 24/7',
      ],
    },
    {
      title: 'Paquete Avanzado',
      description: 'Cuidado completo para peceras medianas.',
      price: '$680.00 MXN/mes',
      imgSrc: imgAvanzado, // Usa la imagen importada
      buttonText: 'Compra Avanzada',
      features: [
        'Filtro avanzado',
        'Sensor de temperatura y pH',
        'Luz LED multicolor',
        'Mantenimiento mensual',
        'Soporte técnico 24/7',
      ],
    },
    {
      title: 'Paquete Pro',
      description: 'Cuidado para peceras grandes y exóticas.',
      price: '$1019.99 MXN/mes',
      imgSrc: imgPro, // Usa la imagen importada
      buttonText: 'Compra Pro',
      features: [
        'Filtro de alta capacidad',
        'Sensor de temperatura, pH y calidad del agua',
        'Luz LED multicolor programable',
        'Mantenimiento quincenal',
        'Soporte técnico 24/7',
      ],
    },
  ];

  const handleBuyClick = (pkgTitle) => {
    navigate('/nextcompra', { state: { package: pkgTitle } });
  };

  return (
    <div className="px-8 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gradient-to-r dark:from-gray-800 dark:to-gray-900">
      {/* Ajuste del espaciado del título */}
      <div className="text-center mb-12">
        <p className="text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-400">
          Selecciona el paquete que mejor se adapte a tus necesidades.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`flex flex-col transition duration-300 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden ${index === 1 ? 'border border-blue-600 dark:border-gray-600' : ''}`}
          >
            <div className="p-4 text-center bg-white dark:bg-gray-700">
              <h3 className="text-xl font-bold text-black dark:text-white">{pkg.title}</h3>
              <p className="text-lg text-black dark:text-gray-300">{pkg.description}</p>
            </div>
            <div className="relative w-full h-48">
              <img
                src={pkg.imgSrc}
                className="object-cover w-full h-full"
                alt={pkg.title}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-6 bg-gray-50 dark:bg-gray-700 border border-t-0 dark:border-gray-600 rounded-b">
              <div className="mb-4 text-center">
                <p className="text-2xl font-bold text-black dark:text-gray-200">{pkg.price}</p>
                <ul className="mt-4 text-black dark:text-gray-400 text-left list-disc list-inside">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">{feature}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleBuyClick(pkg.title)}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide rounded-lg shadow-md transition duration-200 bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-600"
              >
                {pkg.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
