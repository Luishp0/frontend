import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const PasswordRequirement = ({ label, isValid }) => (
  <div className="flex items-center">
    <div
      className={`w-6 h-6 rounded-full mr-2 flex items-center justify-center ${
        isValid ? 'bg-blue-500' : 'bg-gray-400'
      }`}
    >
      {isValid ? <FaCheck className="text-white" /> : <FaCheck className="text-gray-700" />}
    </div>
    <span className="text-gray-600">{label}</span>
  </div>
);

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [isAtLeast6Chars, setIsAtLeast6Chars] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para restablecer la contraseña
    console.log('Nueva contraseña:', password);
  };

  const validatePassword = () => {
    const hasMinLength = password.length >= 6;
    const hasNumericChar = /\d/.test(password);
    setIsAtLeast6Chars(hasMinLength);
    setHasNumber(hasNumericChar);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Restablecer Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
           
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword();
              }}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Ingrese su nueva contraseña"
            />

            <label htmlFor="password" className="block mb-2 font-bold text-gray-700">
              Su contraseña debe contener:
            </label>

             <div className="flex flex-col space-y-2">
              <PasswordRequirement label="Al menos 6 caracteres" isValid={isAtLeast6Chars} />
              <PasswordRequirement label="Un número" isValid={hasNumber} />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordScreen;
