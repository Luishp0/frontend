import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/recuperacionC.css';

function RecuperacionC() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(5); // Inicia el temporizador en 5 segundos
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Se ha enviado un correo electrónico de recuperación a ${email}`);
    setShowCountdown(true); // Muestra el contador después de enviar el correo de recuperación
    startCountdown(); // Comienza el temporizador
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // 1000 milisegundos = 1 segundo

    setTimeout(() => {
      clearInterval(timer); // Detiene el temporizador después de 5 segundos
      navigate('/');
    }, 5000); // 5000 milisegundos = 5 segundos
  };

  return (
    <div className="container">
      <h2>Recuperación de cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Enviar correo de recuperación</button>
      </form>
      {message && <p>{message}</p>}
      {showCountdown && countdown > 0 && <p>Redirigiendo al inicio de sesión en {countdown} segundos...</p>}
    </div>
  );
}

export default RecuperacionC;
