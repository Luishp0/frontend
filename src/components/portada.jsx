import React from 'react';
import foto1 from "../img/foto1.png";

const Portada = () => {
  const textoDerecha = "Texto a la derecha"; // Texto que irá a la derecha

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>AcuCode</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={foto1} alt="" style={{ width: '700px', height: '344px', marginLeft: '2cm', marginTop: '3cm' }} />
        <span>{textoDerecha}</span>
      </div>
    </div>
  );
}

export default Portada;
