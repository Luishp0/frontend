import React, { useState, useEffect } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import Swal from 'sweetalert2';

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
    console.log('Actualizar usuario con ID:', userId);
  };

  const handleDelete = async (userId) => {
    // Muestra una alerta de confirmación
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás recuperar este usuario!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        // Realiza la petición para eliminar el usuario
        await fetch(`http://localhost:8000/usuario/${userId}`, {
          method: 'DELETE',
        });

        // Elimina el usuario de la lista local
        setUsuarios(usuarios.filter(usuario => usuario._id !== userId));

        // Muestra un mensaje de éxito
        Swal.fire(
          '¡Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting user:', error);

        // Muestra un mensaje de error
        Swal.fire(
          'Error',
          'Hubo un problema al eliminar el usuario.',
          'error'
        );
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <BarraLateral />
      <div className="container mx-auto px-4 py-8">
        <Buscador />
        <h1 className="mb-4 text-2xl font-semibold text-gray-700" style={{ marginTop: '1cm' }}>Lista de Usuarios </h1>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Nacimiento
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Teléfono
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {usuarios.map((usuario) => (
                <tr key={usuario._id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{usuario.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{usuario.correo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatDate(usuario.fechaNacimiento)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{usuario.telefono}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      onClick={() => handleUpdate(usuario._id)}
                    >
                      <PencilIcon className="h-5 w-5 inline" /> Actualizar
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(usuario._id)}
                    >
                      <TrashIcon className="h-5 w-5 inline" /> Eliminar
                    </button>
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

export default TablaUsuarios;
