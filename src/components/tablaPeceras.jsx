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
    
    nombre: "luis",
    edad: 25,
    pecera: "Pecera 2",
    diseño: "Diseño 2",
  },
];

const TablaPeceras = () => {
  return (
    <div className="flex h-screen">
      <BarraLateral />
      <div className="flex-1 p-10">
        <h1 className="text-2xl mb-4">Tabla de Peceras</h1>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Edad
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Pecera
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Diseño
              </th>
            </tr>
          </thead>
          <tbody>
            {datosUsuarios.map((usuario) => (
              <tr key={usuario.id}>
                
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {usuario.nombre}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {usuario.edad}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {usuario.pecera}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {usuario.diseño}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaPeceras;
