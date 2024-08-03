import React, { useState, useEffect, useContext } from 'react';
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthContext'; // Asegúrate de tener la ruta correcta

const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const { darkMode } = useContext(AuthContext);

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
        await fetch(`http://localhost:8000/usuario/${userId}`, {
          method: 'DELETE',
        });

        setUsuarios(usuarios.filter(usuario => usuario._id !== userId));

        Swal.fire(
          '¡Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting user:', error);

        Swal.fire(
          'Error',
          'Hubo un problema al eliminar el usuario.',
          'error'
        );
      }
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <BarraLateral />
      <div className={`container mx-auto px-4 py-8 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
        <Buscador />
        <h1 className="mb-4 text-2xl font-semibold" style={{ marginTop: '1cm' }}>
          Lista de Usuarios
        </h1>
        <div className={`shadow overflow-hidden border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sm:rounded-lg`}>
          <table className={`min-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
              <tr>
                <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                  Fecha de Nacimiento
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                  Teléfono
                </th>
                <th className="px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className={darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
              {usuarios.map((usuario) => (
                <tr key={usuario._id} className={`hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition duration-200`}>
                  <td className="px-6 py-4 text-sm">{usuario.nombre}</td>
                  <td className="px-6 py-4 text-sm">{usuario.correo}</td>
                  <td className="px-6 py-4 text-sm">{formatDate(usuario.fechaNacimiento)}</td>
                  <td className="px-6 py-4 text-sm">{usuario.telefono}</td>
                  <td className="px-6 py-4 text-sm font-medium">
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
