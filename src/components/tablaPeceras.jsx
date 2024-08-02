import React from "react";
import BarraLateral from "./barraLateral";
import Buscador from './buscador';

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
  return (
    <div className="flex h-screen bg-gray-200">
      <BarraLateral />
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Tabla de Peceras</h1>
        <Buscador /> {/* Agregado Buscador aquí */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg mt-6">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase"
                >
                  Edad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase"
                >
                  Pecera
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase"
                >
                  Diseño
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {datosUsuarios.map((usuario, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {usuario.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {usuario.edad}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {usuario.pecera}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {usuario.diseño}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaPeceras;
