import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa los estilos globales, incluyendo los del modo oscuro
import App from './App'; 
import reportWebVitals from './reportWebVitals';

// Crear el elemento raíz de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación dentro del StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* Asegúrate de que App esté envuelto en los proveedores de contexto */}
  </React.StrictMode>
);

// Si quieres medir el rendimiento de tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de análisis. Aprende más en: https://bit.ly/CRA-vitals
reportWebVitals();
