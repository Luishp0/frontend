import React from 'react';

const AccountCreatedModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="p-2 bg-green-100 rounded-full">
            <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800">Éxito cuenta creada</h2>
          <p className="text-center text-gray-600">
            Se ha enviado un correo electrónico de confirmación a tu dirección. ¡Activa tu cuenta para comenzar!
          </p>
          <button
            className="px-6 py-2 font-medium text-white rounded bg-customCyan "
            onClick={() => console.log('Go back to dashboard')}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreatedModal;