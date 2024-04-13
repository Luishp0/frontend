import React from 'react';
import foto1 from "../img/foto1.png";
import backgroundImage from "../img/fondoportada.png"; 

const Portada = () => {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  };

  return (
    <div className="pagina-container bg-cover bg-top" style={pageStyle}>
      <div className="portada-container flex flex-col lg:flex-row justify-center items-center min-h-screen">
        <div className="text-container center-content text-center px-4 lg:w-1/2 lg:px-8 lg:text-center lg:ml-64"> {/* Alinea el texto al centro en dispositivos grandes */}
          <h2 className="titulo text-5xl font-bold mb-8">AcuaCode</h2>
          <p className="texto text-lg">AcuaCode es un software que maneja en su totalidad la pecera y ver el estado de salud de los peces</p>
          <button className="boton leer-mas bg-blue-500 text-white py-3 px-8 rounded-lg mt-8">Leer más</button>
        </div>
        <div className="circles-container relative lg:w-1/2 lg:flex lg:justify-start lg:ml-32"> {/* Alinea la imagen a la izquierda en dispositivos grandes */}
          <div className="circle-wrapper relative">
            <div className="outer-circle w-64 h-64 lg:w-80 lg:h-80 bg-blue-500 flex justify-center items-center rounded-full relative shadow-2xl border-8 border-blue-200">
              <div className="circle-gray w-56 h-56 lg:w-72 lg:h-72 bg-white rounded-full flex justify-center items-center">
                <div className="inner-circle w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full flex justify-center items-center">
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
