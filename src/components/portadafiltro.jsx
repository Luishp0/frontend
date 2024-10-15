import React, { useReducer } from "react";
import sensor1 from "../img/sensor1.jpg";
import sensor2 from "../img/sensorph.jpg";
import sensor3 from "../img/sensor3.jpg";
import sensor4 from "../img/sensor4.jpg";
import sensor5 from "../img/sensor5.jpg";
import sensor6 from "../img/sensordeluz.jpg";

// Definimos el estado inicial
const initialState = {
  darkMode: false, // Estado inicial para el modo oscuro
};

// Reducer para manejar el estado
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const Finosecond = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { darkMode } = state; // Obtenemos el estado de darkMode

  const cardClasses = `max-w-md mx-auto rounded-md shadow-md overflow-hidden md:max-w-2xl mb-8 border ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 border-opacity-30 bg-white'}`;
  const textClasses = `${darkMode ? 'text-gray-300' : 'text-black'} text-center`;
  const linkClasses = `block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`;
  const descriptionClasses = `mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-justify`;
  const containerClasses = `flex flex-wrap justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`;

  return (
    <div className={containerClasses}>
      {/* Primer componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={sensor1}
              alt="Sensor de Temperatura Digital"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a href="#" className={linkClasses}>
              Sensor de Temperatura Digital
            </a>
            <p className={descriptionClasses}>
              Mide la temperatura del agua de forma precisa. Compacto y fácil de colocar en la pecera. Algunos modelos pueden mostrar la temperatura en grados Celsius o Fahrenheit. Puede estar conectado a un sistema de monitoreo o alarma para alertar sobre cambios de temperatura significativos.
            </p>
          </div>
        </div>
      </div>

      {/* Segundo componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={sensor2}
              alt="Sensor de pH Compacto"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a href="#" className={linkClasses}>
              Sensor de pH Compacto
            </a>
            <p className={descriptionClasses}>
              Mide el nivel de pH del agua, indicando su acidez o alcalinidad. Diseño pequeño y discreto para colocarse en la pecera. Algunos sensores pueden ser sumergibles y resistentes al agua. Ayuda a mantener un ambiente acuático estable y saludable para los peces y las plantas.
            </p>
          </div>
        </div>
      </div>

      {/* Tercer componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={sensor3}
              alt="Sensor de Conductividad Eléctrica (EC)"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a href="#" className={linkClasses}>
              Sensor de Conductividad Eléctrica (EC)
            </a>
            <p className={descriptionClasses}>
              Mide la conductividad eléctrica del agua, que está relacionada con la cantidad de sales disueltas. Compacto y fácil de integrar en sistemas de monitoreo. Útil para controlar la salinidad del agua en acuarios marinos o de agua dulce.
            </p>
          </div>
        </div>
      </div>

      {/* Cuarto componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={sensor4}
              alt="Sensor de Oxígeno Disuelto (DO)"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a href="#" className={linkClasses}>
              Sensor de Oxígeno Disuelto (DO)
            </a>
            <p className={descriptionClasses}>
              Mide la cantidad de oxígeno disuelto en el agua, crucial para la salud de los peces y otros organismos acuáticos. Diseño pequeño y sumergible para su uso en acuarios. Ayuda a prevenir problemas de falta de oxígeno y a mantener un ambiente acuático bien oxigenado.
            </p>
          </div>
        </div>
      </div>

      {/* Quinto componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={sensor5}
              alt="Sensor de Nitratos y Nitritos"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a href="#" className={linkClasses}>
              Sensor de Nitratos y Nitritos
            </a>
            <p className={descriptionClasses}>
              Mide los niveles de nitratos y nitritos en el agua, indicadores de la calidad del agua y la eficacia del ciclo del nitrógeno. Compacto y fácil de colocar en la pecera. Ayuda a prevenir problemas de toxicidad por acumulación de desechos orgánicos y exceso de alimentos.
            </p>
          </div>
        </div>
      </div>

      {/* Sexto componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={sensor6}
              alt="Sensor de Luz"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a href="#" className={linkClasses}>
              Sensor de Luz
            </a>
            <p className={descriptionClasses}>
              Mide la intensidad de la luz en la pecera, importante para el crecimiento de las plantas y el comportamiento de los peces. Diseño pequeño y discreto. Puede estar conectado a sistemas de iluminación automatizados para regular la luz según las necesidades de los organismos acuáticos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finosecond;
