import React, { useState, useEffect, useCallback } from 'react';
import BarraLateral from './barraLateral';
import Buscador from "./buscador";

const Respaldo = () => {
  const [selectedTime] = useState('00:00');
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
        
      <div className="container flex items-center justify-center h-screen p-4 mx-auto bg-gray-100">
      
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h1 className="mb-4 text-2xl">Respaldo de Base de Datos</h1>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={handleBackup}
            >
              Realizar Respaldo
            </button>
          </div>
          <div className="p-4 overflow-y-auto bg-white rounded-lg shadow-lg" style={{ maxHeight: '400px' }}>
            <h2 className="mb-2 text-lg font-bold">Historial de Respaldos</h2>
            <ul className="text-sm list-disc list-inside">
              {backupHistory.map((backup, index) => (
                <li key={index} className="mb-1">
                  <span className="font-bold">{backup.date}</span> - Hora: {backup.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Respaldo;
