import { HeartIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/20/solid'
import img from "../img/filtropecera.jpg";

const features = [
  {
    name: 'Filtro de Múltiples Etapas.',
    description:
      'Utiliza diferentes etapas de filtración, como mecánica, química y biológica, para eliminar partículas sólidas, toxinas y desechos del agua. ',
    icon: HeartIcon,
  },
  {
    name: 'Filtro Biológico.',
    description: 'Proporciona un medio para el crecimiento de bacterias beneficiosas que descomponen los desechos orgánicos, ayudando a mantener un equilibrio biológico en el acuario.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Filtro UV.',
    description: 'Utiliza luz ultravioleta para eliminar algas y patógenos del agua, contribuyendo a mantener un ambiente acuático limpio y saludable.',
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
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Filtros</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                

              Los filtros de peceras son dispositivos diseñados para mantener el agua del acuario limpia y saludable mediante la eliminación de residuos, toxinas y otros contaminantes.
             Su función principal es mantener un equilibrio químico y biológico en el entorno acuático, proporcionando un ambiente adecuado para la vida de los peces y otras criaturas acuáticas.
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
