import React from 'react';
import "../css/portada.css";
import foto1 from "../img/foto1.png"; // Importa la imagen que deseas mostrar dentro del círculo

const Portada = () => {
  return (
    <div>
      <div className="portada-container">
        <div className="outer-circle">
          <div className="inner-circle">
            <img src={foto1} alt="Imagen" className="circle-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
