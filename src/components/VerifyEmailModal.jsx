import React from 'react';


const VerifyEmailModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100" >
      {/* Contenedor principal con mayor altura */}
      <div className="flex flex-col w-full h-auto max-w-xs bg-white rounded-lg shadow-xl md:max-w-md md:h-96">
        {/* Encabezado */}
        <div className="flex items-center justify-center h-20 rounded-t-lg bg-gradient-to-r from-customBlue to-customTurquoise md:h-24">
          {/* Icono */}
          <svg className="w-12 h-12 text-white md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
          </svg>
        </div>
        {/* Contenido */}
        <div className="flex flex-col items-center justify-center p-4 space-y-4 md:p-6">
          {/* Título */}
          <h2 className="text-sm font-bold text-gray-800 md:text-lg">Verifica tu dirección de correo electrónico</h2>
          {/* Descripción */}
          <p className="text-xs text-center text-gray-600 md:text-sm">
            ¡Bienvenido a AcuaCode! Haz clic en el botón de abajo para confirmar tu dirección de correo electrónico y activar tu cuenta.
          </p>
          {/* Botón de confirmación */}
          <button className="w-full px-2 py-1 font-medium text-white rounded bg-gradient-to-r from-customBlue to-customTurquoise md:px-4 md:py-2 ">
            Confirmar correo electrónico
          </button>
          {/* Mensaje adicional */}
          <p className="text-xs text-center text-gray-500 md:text-sm">
            Si recibiste este correo por error, simplemente ignóralo y no hagas clic en el botón.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
