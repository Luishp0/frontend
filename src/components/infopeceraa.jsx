import { HeartIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/20/solid';
import img from "../img/compra1.jpg";
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Importa el contexto

const features = [
  {
    name: 'Monitoreo de Parámetros del Agua.',
    description:
      'Utiliza sensores para medir y monitorear constantemente los niveles de pH, temperatura, amoníaco, nitritos y nitratos en el agua.',
    icon: HeartIcon,
  },
  {
    name: 'Sistemas de Filtración Avanzados.',
    description: 'Incorpora filtros eficientes que pueden limpiar el agua de manera más efectiva, eliminando desechos, toxinas y materia orgánica para mantener el agua limpia y cristalina.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Control Automatizado de Temperatura.',
    description: 'Regula automáticamente la temperatura del agua dentro de un rango específico para garantizar que se mantenga estable y adecuada para los peces.',
    icon: LightBulbIcon,
  },
];

export default function Example() {
  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`overflow-hidden py-24 sm:py-32 ${darkMode ? 'bg-grayDark' : 'bg-white'}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Pecera Inteligente</p>
              <p className="mt-6 text-lg leading-8">
                Una pecera inteligente es un sistema moderno que incorpora tecnología para monitorear y controlar varios aspectos del entorno de una pecera, brindando un ambiente más seguro y saludable para los peces y simplificando las tareas de mantenimiento para los propietarios.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className={`inline font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className={`inline ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={img}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
