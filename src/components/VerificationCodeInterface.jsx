import React, { useState, useEffect, useRef } from 'react';
import logotra from '../img/logotra.png';

const VerificationCodeInterface = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [timeRemaining, setTimeRemaining] = useState(180); // Cambiado a 180 segundos (3 minutos)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false); // Estado para controlar si el código es incorrecto
  const [isEmpty, setIsEmpty] = useState(false); // Estado para controlar si el código está vacío
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (timeRemaining > 0 && !isSubmitted) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeRemaining, isSubmitted]);

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return; // Solo permitir un solo dígito

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Verificar si el código está vacío
    if (value === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    // Pasar al siguiente campo automáticamente si se ingresa un dígito
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // Restablecer el estado de código incorrecto si se está ingresando un nuevo código
    setIsIncorrect(false);
  };

  const handleVerify = () => {
    // Verificar si el código está vacío
    if (verificationCode.some(digit => digit === '')) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }

    // Aquí iría la lógica para verificar el código
    const enteredCode = verificationCode.join('');
    const correctCode = '1234'; // Código de ejemplo, sustituir por el código real
    if (enteredCode === correctCode) {
      setIsSubmitted(true);
      setTimeRemaining(0); // Detener el tiempo de caducidad después de la verificación
    } else {
      setIsIncorrect(true); // Establecer estado de código incorrecto
      setVerificationCode(['', '', '', '']); // Limpiar el código ingresado
      inputRefs.current[0].focus(); // Poner el foco en el primer input
    }
  };

  const handleResendCode = () => {
    // Aquí iría la lógica para volver a enviar el código
    console.log('Enviando código de verificación de nuevo');
    setTimeRemaining(180); // Reiniciar el tiempo de caducidad a 3 minutos
    setIsSubmitted(false);
    setVerificationCode(['', '', '', '']);
    setIsIncorrect(false); // Reiniciar el estado de código incorrecto
    inputRefs.current[0].focus(); // Poner el foco en el primer input
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-1 space-x-1">
            <img src={logotra} alt="Logo" className="w-20 h-20" />
            <h2 className="mt-6 text-xl font-bold text-center text-gray-600">AcuaCode</h2>
        </div>
        <h2 className="mb-1 text-xl font-bold text-center text-gray-900">Código de verificación</h2>
        <p className="mt-2 mb-4 text-sm text-center text-gray-600">Le hemos enviado un código para verificar su dirección de correo electrónico.</p>
        <div className="flex justify-center mb-1">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-12 h-12 mx-4 text-2xl text-center bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-customCyan"
            />
          ))}
        </div>
        {isEmpty && (
          <p className="mt-1 mb-2 text-xs text-center text-red-500">El código de verificación es obligatorio. Por favor, llénelo antes de verificar.</p>
        )}
        {isIncorrect && (
          <p className="mt-1 mb-2 text-xs text-center text-red-500">El código de verificación ingresado es incorrecto. Inténtelo de nuevo.</p>
        )}
        {!isSubmitted && (
          <p className="mb-4 text-sm text-center">
            {timeRemaining > 0
              ? `El código caduca en: ${Math.floor(timeRemaining / 60)}:${timeRemaining % 60 < 10 ? '0' : ''}${timeRemaining % 60} minutos`
              : 'Código caducado'}
          </p>
        )}
        <div className="flex flex-col items-center">
          <button
            onClick={handleVerify}
            disabled={timeRemaining === 0 || isSubmitted}
            className="w-11/12 px-4 py-3 mb-4 text-sm font-bold text-white rounded bg-gradient-to-r from-customBlue to-customTurquoise disabled:cursor-not-allowed"
          >
            Verificar
          </button>
          <button
            onClick={handleResendCode}
            disabled={timeRemaining > 0 && !isSubmitted}
            className="w-11/12 px-4 py-3 text-sm font-bold text-gray-900 bg-white border rounded border-customCyan hover:bg-gray-100 disabled:cursor-not-allowed"
          >
            Enviar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeInterface;
