import React from 'react';
import foto2 from '../img/foto2.png'; // Importa la imagen

const ContenidoAdicional = () => {
  return (
    <div className="contenido-adicional flex flex-col lg:flex-row justify-center items-center lg:justify-end lg:items-center mt-10 lg:ml-40" style={{ marginTop: '3cm' }}>
      <div className="contenido-texto lg:w-1/2 text-center lg:text-left lg:mr-16">
        <h3 className="titulo-adicional text-3xl font-bold mb-4">Mal cuidado de los peces</h3>
        <p className="texto-adicional text-lg text-justify">El cuidado de los peces en una pecera requiere de un monitoreo constante y preciso de múltiples factores ambientales y de alimentación para garantizar su salud y bienestar. La falta de un sistema integral para controlar y mantener estos parámetros puede resultar en condiciones adversas para los peces, como desequilibrios químicos en el agua o problemas de mantenimiento.</p>
      </div>
      <div className="imagen-izquierda-contenedor lg:ml-10 relative lg:self-start mt-6 lg:mt-0">
        <img src={foto2} alt="Imagen izquierda" className="contenido-imagen w-full lg:w-3/4 h-auto" />
      </div>
    </div>
  );
}

export default ContenidoAdicional;
