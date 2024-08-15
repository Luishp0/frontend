import React, { useContext } from 'react';
import img1 from "../img/peceramadera.png";
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Asegúrate de importar el contexto correcto

export default function Example() {
  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode desde el contexto

  return (
    <div className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-20`}>
      {/* Contenido principal */}
      <div className="relative z-10 flex justify-center items-center">
        <div className={`w-full md:w-11/12 lg:w-4/5 xl:w-3/4 flex flex-col md:flex-row items-center justify-center mx-auto rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className={`w-full md:w-1/2 flex justify-center items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} order-2 md:order-1`}>
            <img src={img1} alt="Pecera" className="object-cover w-full h-auto max-w-md md:max-w-full" />
          </div>
          <div className={`w-full md:w-1/2 p-8 ${darkMode ? 'text-gray-200' : 'text-gray-900'} order-1 md:order-2`}>
            <div className="text-center md:text-left">
              <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Agregar una dirección</h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Estos datos nos ayudarán a entregar la pecera inteligente en su dirección.</p>
            </div>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'first-name', label: 'Nombres', type: 'text', autoComplete: 'given-name' },
                  { id: 'last-name', label: 'Apellidos', type: 'text', autoComplete: 'family-name' },
                  { id: 'company', label: 'País o Región', type: 'text', autoComplete: 'organization' },
                  { id: 'city', label: 'Ciudad', type: 'text', autoComplete: 'city' },
                  { id: 'state', label: 'Estado', type: 'text', autoComplete: 'state' },
                  { id: 'postal-code', label: 'Código Postal', type: 'text', autoComplete: 'postal-code' },
                  { id: 'email', label: 'Correo', type: 'email', autoComplete: 'email' },
                  { id: 'phone-number', label: 'Número de teléfono', type: 'tel', autoComplete: 'tel' },
                ].map(({ id, label, type, autoComplete }) => (
                  <div key={id}>
                    <label htmlFor={id} className={`block text-sm font-semibold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{label}</label>
                    <input
                      type={type}
                      name={id}
                      id={id}
                      autoComplete={autoComplete}
                      className={`block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-indigo-600' : 'bg-white border-gray-300 text-gray-900 focus:ring-indigo-600'}`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/secondcompra">
                  <button className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500' : 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-indigo-500'}`}>Aceptar</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
