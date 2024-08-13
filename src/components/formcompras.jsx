import React, { useContext } from 'react';
import img1 from "../img/peceramadera.png";
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Asegúrate de importar el contexto correcto

export default function Example() {
  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode desde el contexto

  return (
    <div className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-20`}>
      {/* Contenido principal */}
      <div className="relative z-10 flex justify-center items-center md:py-0">
        <div className={`w-full md:w-11/12 lg:w-3/4 xl:w-2/3 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`w-full md:w-1/2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex justify-center items-center md:mt-0 md:order-2`}>
            <img src={img1} alt="Placeholder" className="max-h-full max-w-full md:max-h-auto md:max-w-auto" />
          </div>
          <div className={`w-full md:w-1/2 p-8 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            <div className="text-center">
              <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Agregar una dirección</h2>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Estos datos nos ayudarán a entregar la pecera inteligente en su dirección</p>
            </div>
            <form action="#" method="POST" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Nombres</label>
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="last-name" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Apellidos</label>
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="company" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>País o Región</label>
                  <input type="text" name="company" id="company" autoComplete="organization" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="city" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Ciudad</label>
                  <input type="text" name="city" id="city" autoComplete="city" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="state" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Estado</label>
                  <input type="text" name="state" id="state" autoComplete="state" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="postal-code" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Código Postal</label>
                  <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Correo</label>
                  <input type="email" name="email" id="email" autoComplete="email" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
                <div>
                  <label htmlFor="phone-number" className={`block text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Número de teléfono</label>
                  <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className={`mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-black text-gray-900 focus:ring-indigo-600'}`} />
                </div>
              </div>
              <div className="mt-6">
                <Link to="/secondcompra">
                  <button className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500' : 'bg-gray-800 text-white hover:bg-indigo-700 focus:ring-indigo-500'}`}>Aceptar</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
