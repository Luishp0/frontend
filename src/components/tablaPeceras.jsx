import React, { useState, useEffect, useContext } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { AuthContext } from './AuthContext'; // Asegúrate de tener la ruta correcta

const TablaPeceras = () => {
  const { darkMode } = useContext(AuthContext);
  const [ peces, setPeces ] = useState ([]); 

  useEffect(() => {
    fetchPeces();
  }, []);

  const fetchPeces = async () => {
    try {
      const response = await fetch('http://localhost:8000/peces');
      const data = await response.json();
      setPeces(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <BarraLateral />
      <div className="flex-1 flex flex-col">
        <Buscador />
        <div className={`flex-1 overflow-y-auto container mx-auto px-4 py-8 ${darkMode ? 'text-white' : 'text-gray-700'}`} style={{ marginTop: '1cm' }}>
          <h1 className="mb-4 text-2xl font-semibold">
            Tabla de Peceras
          </h1>
          <div className={`shadow overflow-hidden border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sm:rounded-lg`}>
            <table className={`min-w-full ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <thead className={darkMode ? 'bg-gray-600' : 'bg-gray-50'}>
                <tr>
                  
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Tipo
                  </th>
                 
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Alimentación
                  </th>
                  <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                    Parámetros
                  </th>
                </tr>
              </thead>
              <tbody className={darkMode ? 'bg-gray-700 divide-y divide-gray-600' : 'bg-white divide-y divide-gray-200'}>
                {peces.map((pez, index) => (
                  <tr key={index} className={`hover:${darkMode ? 'bg-gray-600' : 'bg-gray-100'} transition duration-200`}>
                    
                    <td className="px-6 py-4 text-sm">{pez.tipo}</td>
                   
                    <td className="px-6 py-4 text-sm">
                      {pez.alimentacion.map((alimento, i) => (
                        <div key={i}>
                          <strong>{alimento.alimento}</strong>: {alimento.cantidad}g ({alimento.frecuencia})
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {pez.parametros.map((parametro, i) => (
                        <div key={i}>
                          <strong>{parametro.nombre}</strong>: {parametro.valorSugerido}
                        </div>
                      ))}
                    </td>
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
