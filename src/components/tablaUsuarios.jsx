import React, { useState, useEffect } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:8000/usuario');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleUpdate = (userId) => {
    // Implementa la lógica para actualizar un usuario
    console.log('Actualizar usuario con ID:', userId);
  };

  const handleDelete = (userId) => {
    // Implementa la lógica para eliminar un usuario
    console.log('Eliminar usuario con ID:', userId);
  };

  return (
    <div className='flex h-screen'>
      <BarraLateral />
      <div className="container px-4 py-8 bg-gray-100">
        <Buscador />
        <h1 className="mb-4 text-2xl">Lista de Usuarios</h1>
        <table className="w-full leading-normal">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Nombre
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Fecha de Nacimiento
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Telefono
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario._id}>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  {usuario.nombre}
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  {usuario.correo}
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  {formatDate(usuario.fechaNacimiento)}
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  {usuario.telefono}
                </td>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <button
                    className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    onClick={() => handleUpdate(usuario._id)}
                  >
                    Actualizar
                  </button>
                  <button
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(usuario._id)}
                  >
                    Eliminar
                  </button>
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
