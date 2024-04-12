import React, { useState, useEffect } from 'react';
import BarraLateral from './barraLateral';
import Buscardor from './buscador';

const TablaUsuarios = () => {
  const [usuarios, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/usuario');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className='flex h-screen'>
      <BarraLateral/>
        
    <div className="container px-4 py-8">
    <Buscardor/>
      <h1 className="text-2xl mb-4">Lista de Usuarios</h1>
      <table className="w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Fecha de Nacimiento
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Telefono
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user._id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.nombre}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.correo}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.fechaNacimiento}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {user.telefono}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TablaUsuarios;
