import React, { useContext } from 'react';
import compra1 from "../img/compra1.jpg";
import compra2 from "../img/compra2.jpg";
import compra3 from "../img/compra3.jpg";
import compra4 from "../img/compra4.jpg";
import { AuthContext } from './AuthContext'; // Asegúrate de importar el contexto correcto

const features = [
  { name: 'Sistema de Filtración Inteligente', description: 'La pecera puede incorporar un sistema de filtración inteligente que monitorea automáticamente la calidad del agua y ajusta el nivel de filtración según sea necesario.' },
  { name: 'Conectividad Wi-Fi', description: 'La pecera puede estar equipada con conectividad Wi-Fi que permite al usuario monitorear y controlar la pecera desde una aplicación móvil o un sitio web.' },
  { name: 'Alimentación Automatizada', description: 'Algunas peceras inteligentes pueden incluir sistemas de alimentación automatizados que dispensan comida en horarios programados.' },
  { name: 'Cámaras Integradas', description: 'Para monitorear a los habitantes de la pecera, especialmente útil en acuarios de peces tropicales o de agua salada.' },
  { name: 'Sistemas de Notificación y Alerta', description: 'La pecera puede enviar notificaciones automáticas al usuario en caso de condiciones adversas como fluctuaciones bruscas de temperatura, niveles de agua bajos o problemas con el sistema de filtración.' },
  { name: 'Diseño Modular y Personalizable', description: 'Muchas peceras inteligentes están diseñadas de manera modular, lo que permite a los usuarios personalizar y expandir su sistema según sus necesidades.' },
];

export default function Example() {
  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode desde el contexto

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} style={{ marginTop: '-5cm' }}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{`Especificaciones técnicas`}</h2>
          <p className="mt-4">
            Estas son solo algunas de las especificaciones técnicas que podrías encontrar en una pecera inteligente. La tecnología en este campo está en constante evolución, por lo que es posible que haya características adicionales disponibles en modelos más recientes.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
                <dt className="font-medium">{feature.name}</dt>
                <dd className="mt-2 text-sm">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={compra1}
            alt="Descripción de la imagen 1"
            className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          />
          <img
            src={compra2}
            alt="Descripción de la imagen 2"
            className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          />
          <img
            src={compra3}
            alt="Descripción de la imagen 3"
            className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          />
          <img
            src={compra4}
            alt="Descripción de la imagen 4"
            className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          />
        </div>
      </div>
    </div>
  );
}
