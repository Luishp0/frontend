import React from 'react';

const HistorialRespaldo = ({ backupHistory }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-80">
      <h2 className="text-lg font-bold mb-2">Historial de Respaldos</h2>
      <ul className="list-disc list-inside text-sm">
        {backupHistory.map((backup, index) => (
          <li key={index} className="mb-1">
            <span className="font-bold">{backup.date}</span> - Hora: {backup.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorialRespaldo;
