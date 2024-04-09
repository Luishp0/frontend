import React from 'react';

const BarraDasbord = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64">
      <div className="p-4 text-xl font-bold">Monitoreo de Pecera</div>
      <ul>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#resumen">Resumen General</a>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#usuarios">Usuarios</a>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#peces">Peces</a>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#sensores">Sensores</a>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#aparatos">Aparatos</a>
        </li>
      </ul>
    </div>
  );
};

export default BarraDasbord;
