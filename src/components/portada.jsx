import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import nuevofondo from "../img/nuevoimg2.jpg";
import fondo21 from "../img/fondo21.jpg";

const Portada = () => {
  const { darkMode } = useContext(AuthContext);

  const pageStyle = {
    backgroundImage: `url(${fondo21})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    filter: darkMode ? 'brightness(0.7)' : 'brightness(1)', // Ajusta el brillo según el modo
  };

  return (
    <div className={`pagina-container ${darkMode ? 'bg-dark-bg' : 'bg-light-bg'}`} style={pageStyle}>
      <div className={`portada-container flex flex-col lg:flex-row justify-center items-center min-h-screen ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className="text-container center-content text-center px-4 lg:w-1/2 lg:px-8 lg:mr-8 lg:mt-0 mt-0">
          <h2 className={`titulo text-5xl lg:text-6xl font-bold mb-6 lg:mb-10 ${darkMode ? 'text-black' : 'text-black'}`}>
            AcuaCode
          </h2>
          <p className={`texto text-xl lg:text-2xl mb-8 lg:mb-10 text-justify ${darkMode ? 'text-black' : 'text-black'}`}>
            AcuaCode es un software completo para gestionar tu acuario y monitorear la salud de tus peces en tiempo real.
          </p>
          <button className={`boton leer-mas bg-cyan-400 ${darkMode ? 'text-white' : 'text-black'} py-4 px-10 rounded-xl hover:bg-cyan-500 transition duration-300 text-lg`}>
            <a href="#" className={`${darkMode ? 'text-white' : 'text-black'}`}>Leer más</a>
          </button>
        </div>
        <div className="image-container lg:w-1/2 lg:mr-0 lg:ml-auto lg:mt-0 mt-0 flex justify-center">
          <img src={nuevofondo} alt="Imagen" className="w-full lg:max-w-full lg:h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Portada;
