import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FaFolder } from 'react-icons/fa'; // Importa el ícono de la carpeta
import BarraLateral from './barraLateral';
import Buscador from './buscador';
import { AuthContext } from './AuthContext'; // Importar AuthContext

const Respaldo = () => {
  const [selectedTime, setSelectedTime] = useState('00:00');
  const [backupHistory, setBackupHistory] = useState(() => {
    const history = localStorage.getItem('backupHistory');
    return history ? JSON.parse(history) : [];
  });

  const { darkMode } = useContext(AuthContext); // Obtener el estado de darkMode desde AuthContext

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const selectedHour = new Date(now);
    const [hours, minutes] = selectedTime.split(':');
    selectedHour.setHours(hours, minutes, 0, 0);

    let diff = selectedHour - now;

    if (diff < 0) {
      selectedHour.setDate(selectedHour.getDate() + 1);
      diff = selectedHour - now;
    }

    return diff;
  }, [selectedTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, calculateTimeLeft]);

  const handleBackup = async () => {
    try {
      const response = await fetch('http://localhost:8000/respaldo');
      const data = await response.json();

      if (response.ok) {
        const now = new Date();
        const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
        const formattedTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

        const newBackup = {
          date: formattedDate,
          time: formattedTime,
        };

        const updatedHistory = [newBackup, ...backupHistory];
        setBackupHistory(updatedHistory);
        localStorage.setItem('backupHistory', JSON.stringify(updatedHistory));
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(`Error al realizar el respaldo: ${error}`);
    }
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setTimeLeft(calculateTimeLeft());
  };

  const handleSetTime = () => {
    setTimeLeft(calculateTimeLeft());
  };

  useEffect(() => {
    const fetchBackupHistory = async () => {
      try {
        const response = await fetch('http://localhost:8000/respaldo/historial');
        const data = await response.json();

        if (response.ok) {
          setBackupHistory(data.historial);
          localStorage.setItem('backupHistory', JSON.stringify(data.historial));
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(`Error al obtener el historial de respaldos: ${error}`);
      }
    };

    fetchBackupHistory();
  }, []);

  const handleFolderClick = () => {
    console.log('Ícono de carpeta clicado');
  };

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <BarraLateral />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-10">
          <Buscador />
        </div>
        <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h1 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Respaldo de Base de Datos</h1>
              <div className="mb-4">
                <label htmlFor="backupTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Hora del Respaldo:
                </label>
                <div className="flex items-center mt-1">
                  <input
                    type="time"
                    id="backupTime"
                    name="backupTime"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  />
                  <button
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSetTime}
                  >
                    Fijar Hora
                  </button>
                </div>
                <div className="flex items-center mt-4">
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 flex items-center"
                    onClick={handleBackup}
                  >
                    Realizar Respaldo
                  </button>
                  <div
                    onClick={handleFolderClick}
                    className="ml-10 cursor-pointer"
                  >
                    <FaFolder className="text-5xl text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 overflow-y-auto" style={{ maxHeight: '400px' }}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Historial de Respaldos</h2>
              <ul className="text-sm list-disc list-inside text-gray-800 dark:text-gray-300">
                {backupHistory.map((backup, index) => (
                  <li key={index} className="mb-1">
                    <span className="font-bold">{backup.date}</span> - Hora: {backup.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center col-span-1 md:col-span-2">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Tiempo Restante para el Respaldo</h2>
              <p className="text-gray-800 dark:text-gray-300">
                {`${Math.floor(timeLeft / (1000 * 60 * 60))} horas ${Math.floor((timeLeft / (1000 * 60)) % 60)} minutos ${Math.floor((timeLeft / 1000) % 60)} segundos`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Respaldo;
