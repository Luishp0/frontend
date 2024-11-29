import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthContext';

const NotificationView = () => {
  const { darkMode } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Fetch notifications from the API
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:8000/notificacion');
        if (!response.ok) {
          throw new Error('Error al obtener las notificaciones');
        }
        const notifications = await response.json(); // Ajusta esto según la estructura de la respuesta de tu API
        setEvents(notifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleDelete = (event) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        setEvents(events.filter(e => e.id !== event.id));
        Swal.fire('¡Eliminado!', 'Tu evento ha sido eliminado.', 'success');
        setSelectedEvent(null);
      }
    });
  };

  const EventItem = ({ event }) => (
    <div
      className={`relative rounded-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md overflow-hidden my-2 transition-opacity duration-300`}
      onClick={() => setSelectedEvent(event)}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${event.color || 'bg-blue-500'} rounded-l-xl`}></div>
      <div className={`flex items-center p-4 pl-12 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mr-4`}>{event.time || 'N/A'}</div>
        <div className={`w-0.5 h-12 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} mx-4`}></div>
        <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
          <img src={event.avatar || 'https://ui-avatars.com/api/?name=Default&background=random'} alt={event.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow ml-4 flex items-center justify-between">
          <div className="flex flex-col text-sm">
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{event.name || 'Desconocido'}</p>
            <p className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>{event.date || 'Fecha desconocida'}</p>
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-4`}>
            {event.subject || 'Sin asunto'}
          </div>
          <div className={`text-xs ml-2 ${event.status === 'confirmado' ? 'text-green-500' : event.status === 'pendiente' ? 'text-yellow-500' : 'text-red-500'}`}>
            {event.status ? event.status.charAt(0).toUpperCase() + event.status.slice(1) : 'Desconocido'}
          </div>
          <button
            className={`ml-2 ${darkMode ? 'text-red-400 hover:text-red-500' : 'text-red-500 hover:text-red-700'}`}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(event);
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-200'} p-6`}>
      <div className={`w-2/3 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md rounded-xl overflow-hidden mr-4`}>
        {/* Your other UI elements remain the same */}
        <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-md font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Hoy</h2>
          {events.length > 0 && <EventItem event={events[0]} />}
        </div>
        <div className={`p-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-md font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Próximos</h2>
          {events.slice(1).map(event => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div className={`w-1/3 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow-md rounded-xl p-6`}>
        {selectedEvent ? (
          <div>
            {/* Your selected event details UI */}
          </div>
        ) : (
          <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''}`}>Selecciona un evento para ver los detalles</p>
        )}
      </div>
    </div>
  );
};

export default NotificationView;
