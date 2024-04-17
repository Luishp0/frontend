import React, { useState, useEffect, useCallback } from 'react';
import BarraLateral from './barraLateral';

const Respaldo = () => {
  const [selectedTime, setSelectedTime] = useState('00:00');
  const [backupHistory, setBackupHistory] = useState(() => {
    const history = localStorage.getItem('backupHistory');
    return history ? JSON.parse(history) : [];
  });

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

  return (
    <div className="flex">
      <BarraLateral />
        
      <div className="container mx-auto p-4 flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-2xl mb-4">Respaldo de Base de Datos</h1>
            <div className="mb-4">
              <label htmlFor="backupTime" className="block text-sm font-medium text-gray-700">
                Hora del Respaldo:
              </label>
              <input
                type="time"
                id="backupTime"
                name="backupTime"
                value={selectedTime}
                onChange={handleTimeChange}
                className="mt-1 p-2 border rounded-md"
              />
              <button
                className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSetTime}
              >
                Fijar Hora
              </button>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBackup}
            >
              Realizar Respaldo
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
            <h2 className="text-lg font-bold mb-2">Historial de Respaldos</h2>
            <ul className="list-disc list-inside text-sm">
              {backupHistory.map((backup, index) => (
                <li key={index} className="mb-1">
                  <span className="font-bold">{backup.date}</span> - Hora: {backup.time}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold mb-2">Tiempo Restante para el Respaldo</h2>
            <p>{`${Math.floor(timeLeft / (1000 * 60 * 60))} horas ${Math.floor((timeLeft / (1000 * 60)) % 60)} minutos ${Math.floor((timeLeft / 1000) % 60)} segundos`}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Respaldo;
