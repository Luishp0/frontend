import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function Example() {
  return (
    <div className="relative py-16 mt-8 mb-0 overflow-hidden bg-gray-900 isolate sm:py-24 lg:py-32" style={{ marginTop: '3cm' }}>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Suscríbete a nuestras notificaciones.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Gracias a nuestra suscripción tendrás notificaciones cuando tengamos nuevas actualizaciones.
            </p>
            <div className="flex max-w-md mt-6 gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Dirección de correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Introduce tu correo electrónico"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Suscribir
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <CalendarDaysIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Actualizaciones semanales</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                El resultado del trabajo es mantener actualizada su pecera inteligente.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <HandRaisedIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No es basura</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                El mensaje que se enviará no contará con spam alguno.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#fd83b685/95] to-[#9089fc/95] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 42%, 100% 58%, 97.5% 29%, 85.5% 0%, 80.7% 2%, 72.5% 32%, 60.2% 62%, 52.4% 68%, 47.5% 58%, 45.2% 34%, 27.5% 76%, 0% 64%, 17.9% 100%, 27.6% 76%, 76.1% 97%, 74.1% 42%)',
          }}
        />
      </div>
    </div>
  );
}