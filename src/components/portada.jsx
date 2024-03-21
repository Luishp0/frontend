import React from 'react';
import foto1 from "../img/foto1.png";
import foto2 from "../img/foto2.png";
import "../css/portada.css";

const Portada = () => {
  const titulo = "AcuaCode";
  const titulo2 = "Mal cuidado de los peces"; // Texto del título
  const textoDerecha = "AcuaCode es un software que maneja en su totalidad la pecera y ver el estado de salud de los peces"; // Texto que irá a la derecha
  const textoDerecha2 = "El cuidado de los peces en una pecera requiere de un monitoreo constante y preciso de múltiples factores ambientales y de alimentación para garantizar su salud y bienestar. La falta de un sistema integral para controlar y mantener estos parámetros puede resultar en condiciones adversas para los peces, como desequilibrios químicos en el agua o problemas de mantenimiento."; // Texto que irá a la derecha

  return (
    <div>
      {/* Sección 1 */}
      <div className="portada-container" style={{ marginTop: '1cm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Sección de la izquierda */}
          <div style={{ flex: 1 }}>
            <img src={foto1} alt="" style={{ width: '700px', height: '344px' }} />
          </div>

          {/* Sección de la derecha */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1>{titulo}</h1>
            <p style={{ fontSize: '24px', color: 'black' }}>{textoDerecha}</p>
          </div>
        </div>
      </div>

      {/* Sección 2 */}
      <div className="portada-container" style={{ marginTop: '2cm' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Sección de la izquierda */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1>{titulo2}</h1>
            <p style={{ fontSize: '24px', color: 'black' }}>{textoDerecha2}</p>
          </div>

          {/* Sección de la derecha */}
          <div style={{ flex: 1 }}>
            <img src={foto2} alt="" style={{ width: '700px', height: '344px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
