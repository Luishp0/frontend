import React, { useContext } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { AuthContext } from './AuthContext'; // Asegúrate de tener la ruta correcta

const datosUsuarios = [
  {
    nombre: "Diana Lucia Campos Estrada",
    edad: 20,
    pecera: "Pecera 1",
    diseño: "Diseño 1",
  },
  {
    nombre: "Luis",
    edad: 25,
    pecera: "Pecera 2",
    diseño: "Diseño 2",
  },
];

const TablaPeceras = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <BarraLateral />
      <div className="flex-1 flex flex-col">
        <Buscador />
        <div className={`flex-1 overflow-y-auto container mx-auto px-4 py-8 ${darkMode ? 'text-white' : 'text-gray-700'}`} style={{ marginTop: '1cm' }}>
          <h1 className="mb-4 text-2xl font-semibold">
            Tabla de Peceras
          </h1>
          <div className={`shadow overflow-hidden border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sm:rounded-lg`}>
            <table className={`min-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                <tr>
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Edad
                  </th>
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Pecera
                  </th>
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Diseño
                  </th>
                </tr>
              </thead>
              <tbody className={darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
                {datosUsuarios.map((usuario, index) => (
                  <tr key={index} className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition duration-200`}>
                    <td className="px-6 py-4 text-sm">{usuario.nombre}</td>
                    <td className="px-6 py-4 text-sm">{usuario.edad}</td>
                    <td className="px-6 py-4 text-sm">{usuario.pecera}</td>
                    <td className="px-6 py-4 text-sm">{usuario.diseño}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaPeceras;
