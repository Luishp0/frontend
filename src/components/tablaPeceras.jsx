import React from "react";
import BarraLateral from "./barraLateral";

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
    <div className="flex h-screen">
      <BarraLateral />
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="mb-4 text-2xl">Tabla de Peceras</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Edad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Pecera
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  Diseño
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {datosUsuarios.map((usuario, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.edad}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.pecera}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{usuario.diseño}</div>
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
