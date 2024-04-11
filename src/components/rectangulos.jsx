import React, { useState } from 'react';

const Rectangulos = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="content-wrapper">
      <h3 className="titulo-servicios text-center text-2xl font-semibold mt-10">Servicios</h3>
      <div className="rectangulos-container flex justify-center bg-cover bg-center p-12 mt-10">
        <div className="columna flex flex-col items-center mr-10">
          <div
            className={`rectangulo bg-white border border-gray-300 rounded-lg p-12 mb-8 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              hoveredIndex === 0 ? 'bg-sky-200' : ''
            }`}
            style={{ width: '400px', height: '250px' }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="titulo-rectangulo text-xl font-semibold mb-4 text-center">Título 1</h3>
            <p className="texto-rectangulo text-base text-center">Texto 1</p>
          </div>
          <div
            className={`rectangulo bg-white border border-gray-300 rounded-lg p-12 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              hoveredIndex === 1 ? 'bg-sky-200' : ''
            }`}
            style={{ width: '400px', height: '250px' }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="titulo-rectangulo text-xl font-semibold mb-4 text-center">Título 2</h3>
            <p className="texto-rectangulo text-base text-center">Texto 2</p>
          </div>
        </div>
        <div className="columna flex flex-col items-center">
          <div
            className={`rectangulo bg-white border border-gray-300 rounded-lg p-12 mb-8 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              hoveredIndex === 2 ? 'bg-sky-200' : ''
            }`}
            style={{ width: '400px', height: '250px' }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="titulo-rectangulo text-xl font-semibold mb-4 text-center">Título 3</h3>
            <p className="texto-rectangulo text-base text-center">Texto 3</p>
          </div>
          <div
            className={`rectangulo bg-white border border-gray-300 rounded-lg p-12 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${
              hoveredIndex === 3 ? 'bg-sky-200' : ''
            }`}
            style={{ width: '400px', height: '250px' }}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="titulo-rectangulo text-xl font-semibold mb-4 text-center">Título 4</h3>
            <p className="texto-rectangulo text-base text-center">Texto 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangulos;
