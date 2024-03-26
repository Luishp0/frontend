import React from 'react';
import foto1 from "../img/foto1.png";
import foto2 from "../img/foto2.png";
import "../css/portada.css";

const Portada = () => {
  const titulo = "AcuaCode";
  
  const textoDerecha = "Este es el texto a la derecha. Lorem ipsum dolor sit amet, consectetur adipiscing elit."; // Texto que irá a la derecha

  return (
    <div>
      {/* Sección 1 */}
      <div className="portada-container" style={{ marginTop: '1cm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Sección de la izquierda */}
          <div style={{ flex: 1 }}>
            <img src={foto1} alt="" style={{ width: '700px', height: '344px', borderRadius: '10px' }} />
          </div>

          {/* Sección de la derecha */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1>{titulo}</h1>
            <p style={{ fontSize: '24px', color: 'black' }}>{textoDerecha}</p>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <div className="portada-container" style={{ marginTop: '3cm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Sección de la izquierda */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1>{titulo}</h1>
            <p style={{ fontSize: '24px', color: 'black' }}>{textoDerecha}</p>
          </div>

          {/* Sección de la derecha */}
          <div style={{ flex: 1 }}>
            <img src={foto2} alt="" style={{ width: '700px', height: '344px', borderRadius: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
