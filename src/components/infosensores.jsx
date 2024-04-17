import { HeartIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/20/solid'
import img from "../img/sensorpecera.jpg";

const features = [
  {
    name: 'Sensor de pH.',
    description:
      'Ayuda a mantener un pH estable, lo cual es crucial para la salud de los peces y otras formas de vida acuática. Los cambios extremos en el pH pueden ser perjudiciales e incluso mortales para los organismos acuáticos.',
    icon: HeartIcon,
  },
  {
    name: 'Sensor de Temperatura.',
    description: 'Permite monitorear y mantener la temperatura dentro de un rango óptimo para los peces y otras criaturas acuáticas. La temperatura del agua afecta el metabolismo, el sistema inmunológico y el comportamiento de los peces.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Sensor de Amoníaco, Nitritos y Nitratos',
    description: 'Estos compuestos son subproductos del metabolismo de los peces y pueden ser tóxicos en concentraciones elevadas. El monitoreo regular de estos parámetros ayuda a prevenir intoxicaciones y mantener la calidad del agua.',
    icon: LightBulbIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sensores</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                
Una pecera inteligente es un sistema moderno que incorpora tecnología para monitorear y controlar varios aspectos del entorno de una pecera, brindando un ambiente más seguro y saludable para los peces y simplificando las tareas de mantenimiento para los propietarios. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
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
