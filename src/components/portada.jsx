import React from 'react';
import foto1 from "../img/foto1.png";

const Portada = () => {
  const titulo = "AcuaCode"; // Texto del título
  const textoDerecha = "AcuaCode es un software que maneja en su totalidad la pecera y ver el estado de salud de los peces"; // Texto que irá a la derecha

  return (
    <div style={{ marginTop: '2cm' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 0 }}>
          <img src={foto1} alt="" style={{ width: '700px', height: '344px' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1>{titulo}</h1>
          <p style={{ fontSize: '24px', color: 'black' }}>{textoDerecha}</p>
        </div>
      </div>
    </div>
  );
}

export default Portada;
