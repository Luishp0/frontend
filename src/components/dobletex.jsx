import React from 'react';
import cel4 from '../img/phone.png';

const RectangulosVerticales = () => {
  return (
    <div className="flex items-center justify-center mt-40 mr-20"> {/* Modificado mt-40 */}
      <div className="w-64 ml-4"> {/* Agregado ml-4 */}
        <img src={cel4} alt="Imagen" className="w-full h-full object-cover" />
      </div>
      <div className="w-640 ml-80"> {/* Agregado ml-80 */}
        <h3 className="text-3xl font-bold mb-4 text-center">Título Derecha</h3>
        <p className="text-lg text-justify">Texto explicativo a la derecha de los rectángulos verticales.</p>
      </div>
    </div>
  );
}

export default RectangulosVerticales;
