import React from 'react';
import foto1 from "../img/foto1.png";
import backgroundImage from "../img/fondoportada.png"; // Ruta de la imagen de fondo

const Portada = () => {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Fondo fijo para que se extienda hasta la parte superior
    minHeight: '100vh', // Altura mínima de la página igual a la altura de la ventana de visualización
  };

  return (
    <div className="pagina-container bg-cover bg-top" style={pageStyle}>
      <div className="portada-container flex justify-center items-center min-h-screen">
        <div className="center-content text-center px-4">
          <h2 className="titulo text-5xl font-bold mb-8">AcuaCode</h2>
          <p className="texto text-lg">AcuaCode es un software que maneja en su totalidad la pecera y ver el estado de salud de los peces</p>
          <button className="boton leer-mas bg-blue-500 text-white py-3 px-8 rounded-lg mt-8">Leer más</button>
        </div>
        <div className="circles-container relative">
          <div className="circle-wrapper relative">
            <div className="outer-circle w-80 h-80 bg-blue-500 flex justify-center items-center rounded-full relative shadow-2xl border-8 border-blue-200"> {/* Ajusta el tamaño del círculo azul */}
              <div className="circle-gray w-72 h-72 bg-white rounded-full flex justify-center items-center">
                <div className="inner-circle w-64 h-64 overflow-hidden rounded-full flex justify-center items-center">
                  <img src={foto1} alt="Imagen" className="circle-image object-cover w-full h-full rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
