import React from 'react';
import "../css/portada.css";
import foto1 from "../img/foto1.png"; // Importa la imagen que deseas mostrar dentro del círculo interior

const Portada = () => {
  return (
    <div>
      <div className="portada-container">
        <div className="center-content">
          <h2 className="titulo">AcuaCode</h2>
          <p className="texto">AcuaCode es un software que maneja en su totalidad la pecera y ver el estado de salud de los peces</p>
          <button className="boton leer-mas">Leer más</button>
        </div>
        <div className="circles-container">
          <div className="circle-wrapper">
            <div className="outer-circle">
              <div className="inner-circle">
                <img src={foto1} alt="Imagen" className="circle-image" />
              </div>
            </div>
          </div>
          <div className="second-circle-wrapper">
            <div className="outer-circle second-circle">
              <div className="inner-circle">
                {/* Aquí puedes agregar la imagen del segundo círculo si lo deseas */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portada;
