import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthContext'; // Asegúrate de tener la ruta correcta

const NotificationView = () => {
  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode
  const [events, setEvents] = useState([
    { id: 1, name: 'Meghan Smith', date: '10 de septiembre', time: '3:30 PM', subject: 'Temperatura alta detectada en la pecera', status: 'confirmado', color: 'bg-blue-500', avatar: 'https://ui-avatars.com/api/?name=Meghan+Smith&background=random' },
    { id: 2, name: 'Nado Husa', date: '15 de septiembre', time: '8:00 AM', subject: 'Revisión de niveles de pH en la pecera', status: 'confirmado', color: 'bg-blue-500', avatar: 'https://ui-avatars.com/api/?name=Nado+Husa&background=random' },
    { id: 3, name: 'Nick Bove', date: '18 de septiembre', time: '9:00 AM', subject: 'Alarma: oxígeno bajo en la pecera', status: 'pendiente', color: 'bg-yellow-500', avatar: 'https://ui-avatars.com/api/?name=Nick+Bove&background=random' },
    { id: 4, name: 'Mónica Ribeiro', date: '20 de septiembre', time: '4:00 PM', subject: 'Sistema de filtración necesita mantenimiento', status: 'cancelado', color: 'bg-red-500', avatar: 'https://ui-avatars.com/api/?name=Mónica+Ribeiro&background=random' },
    { id: 5, name: 'Gunther Ackner', date: '20 de septiembre', time: '5:00 PM', subject: 'Revisión general de la pecera inteligente', status: 'confirmado', color: 'bg-blue-500', avatar: 'https://ui-avatars.com/api/?name=Gunther+Ackner&background=random' },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

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
        Swal.fire(
          '¡Eliminado!',
          'Tu evento ha sido eliminado.',
          'success'
        );
        setSelectedEvent(null);
      }
    });
  };

  const EventItem = ({ event }) => (
    <div
      className={`relative rounded-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md overflow-hidden my-2 transition-opacity duration-300`}
      onClick={() => setSelectedEvent(event)}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${event.color} rounded-l-xl`}></div>
      <div className={`flex items-center p-4 pl-12 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mr-4`}>{event.time}</div>
        <div className={`w-0.5 h-12 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} mx-4`}></div>
        <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden">
          <img src={event.avatar} alt={event.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow ml-4 flex items-center justify-between">
          <div className="flex flex-col text-sm">
            <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{event.name}</p>
            <p className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-1`}>{event.date}</p>
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-4`}>
            {event.subject}
          </div>
          <div className={`text-xs ml-2 ${event.status === 'confirmado' ? 'text-green-500' : event.status === 'pendiente' ? 'text-yellow-500' : 'text-red-500'}`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
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
      <div className={`p-4 flex overflow-x-auto ${darkMode ? 'bg-blue-700 text-white' : 'bg-blue-600 text-white'} rounded-t-lg`}>
  <div className="flex space-x-2">
    {['Todos', 'Confirmados', 'Pendientes', 'Cancelados'].map(status => (
      <button key={status} className={`bg-white-500 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-400 transition-colors duration-300`}>
        {status}
      </button>
    ))}
    <button className={`bg-white-500 text-white px-4 py-2 rounded-md text-xs hover:bg-blue-400 transition-colors duration-300`}>
      Añadir Notificaciones
    </button>
  </div>
</div>

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
            <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Detalles del Klatsch</h2>
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gray-300 rounded-full mr-4 overflow-hidden ${darkMode ? 'bg-gray-600' : ''}`}>
                <img src={selectedEvent.avatar} alt={selectedEvent.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedEvent.name}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mb-6">
              <p className={`font-semibold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Fecha y Hora</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedEvent.date} a las {selectedEvent.time}</p>
            </div>
            <div className="mb-6">
              <p className={`font-semibold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Asunto</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedEvent.subject}</p>
            </div>
            <div className="mb-6">
              <p className={`font-semibold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Temas</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Películas, Salud, Comida</p>
            </div>
            <div>
              <p className={`font-semibold text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Estado</p>
              <p className={`text-sm ${selectedEvent.status === 'confirmado' ? (darkMode ? 'text-green-400' : 'text-green-500') : selectedEvent.status === 'pendiente' ? (darkMode ? 'text-yellow-400' : 'text-yellow-500') : (darkMode ? 'text-red-400' : 'text-red-500')}`}>
                {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
              </p>
            </div>
          </div>
        ) : (
          <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''}`}>Selecciona un evento para ver los detalles</p>
        )}
      </div>
    </div>
  );
};

export default NotificationView;
