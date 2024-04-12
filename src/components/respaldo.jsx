import React, { useState, useEffect } from 'react';
import BarraLateral from './barraLateral';
import HistorialRespaldo from './historialRespaldo';

const Respaldo = () => {
  const [selectedTime, setSelectedTime] = useState('00:00');
  const [intervalTime, setIntervalTime] = useState(60); // en minutos
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [backupHistory, setBackupHistory] = useState(() => {
    const history = localStorage.getItem('backupHistory');
    return history ? JSON.parse(history) : [];
  });

  function calculateTimeLeft() {
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
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setTimeLeft(calculateTimeLeft());
  };

  const handleIntervalChange = (e) => {
    setIntervalTime(e.target.value);
  };

  const handleBackup = () => {
    // Lógica para respaldar la base de datos
    console.log('Respaldo de la base de datos realizado');

    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;

    const newBackup = {
      date: formattedDate,
      time: selectedTime,
    };

    const updatedHistory = [...backupHistory, newBackup];
    setBackupHistory(updatedHistory);

    // Almacenar en localStorage
    localStorage.setItem('backupHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="flex">
      <BarraLateral />
        
      <div className="container mx-auto p-4 flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-2xl mb-4">Respaldo de Base de Datos</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="backupTime">
                Hora de Respaldo:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="backupTime"
                type="time"
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBackup}
            >
              Realizar Respaldo
            </button>
            <div className="mt-4">
              <p className="text-gray-700">
                Tiempo restante para el próximo respaldo: {Math.floor(timeLeft / (1000 * 60 * 60))} horas{' '}
                {Math.floor((timeLeft / (1000 * 60)) % 60)} minutos{' '}
                {Math.floor((timeLeft / 1000) % 60)} segundos
              </p>
            </div>
          </div>
          <HistorialRespaldo backupHistory={backupHistory} />
        </div>
      </div>
    </div>
  );
};

export default Respaldo;
