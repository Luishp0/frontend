import React from 'react';

const AppSection = () => {
  return (
    <section className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h2 className="text-xs text-indigo-500 dark:text-indigo-300 tracking-widest font-medium title-font mb-1">
            Aplicación AcuaCode
          </h2>
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-gray-100">
            ¡Descarga la aplicación y el videojuego ahora!
          </h1>
        </div>
        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          {/* Botón de Google Play */}
          <button className="bg-gray-100 dark:bg-gray-900 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-gray-800 dark:text-gray-300" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 dark:text-gray-100 mb-1">Consíguelo</span>
              <span className="title-font font-medium text-gray-900 dark:text-gray-100">Google Play</span>
            </span>
          </button>

          {/* Botón para el videojuego */}
          <button className="bg-gray-100 dark:bg-gray-900 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-gray-800 dark:text-gray-300" viewBox="0 0 512 512">
              <path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm0 400c-97.046 0-176-78.954-176-176S158.954 80 256 80s176 78.954 176 176-78.954 176-176 176zm-48-264h96v48h-96zm0 80h96v96h-96z"></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 dark:text-gray-100 mb-1">Disponible ahora</span>
              <span className="title-font font-medium text-gray-900 dark:text-gray-100">Videojuego AcuaCode</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
