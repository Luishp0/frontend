import React from "react";
import sensor1 from "../img/sensor1.jpg";
import sensor2 from "../img/sensorph.jpg";
import sensor3 from "../img/sensor3.jpg";
import sensor4 from "../img/sensor4.jpg";
import sensor5 from "../img/sensor5.jpg";
import sensor6 from "../img/sensordeluz.jpg";

const Finosecond = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Primer componente */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sensor1}
              alt="Sensor de Temperatura Digital"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
            >
              Sensor de Temperatura Digital
            </a>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Mide la temperatura del agua de forma precisa.
              Compacto y fácil de colocar en la pecera.
              Algunos modelos pueden mostrar la temperatura en grados Celsius o Fahrenheit.
              Puede estar conectado a un sistema de monitoreo o alarma para alertar sobre cambios de temperatura significativos.
            </p>
          </div>
        </div>
      </div>

      {/* Segundo componente */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sensor2}
              alt="Sensor de pH Compacto"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
            >
              Sensor de pH Compacto
            </a>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Mide el nivel de pH del agua, indicando su acidez o alcalinidad.
              Diseño pequeño y discreto para colocarse en la pecera.
              Algunos sensores pueden ser sumergibles y resistentes al agua.
              Ayuda a mantener un ambiente acuático estable y saludable para los peces y las plantas.
            </p>
          </div>
        </div>
      </div>

      {/* Tercer componente */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sensor3}
              alt="Sensor de Conductividad Eléctrica (EC)"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
            >
              Sensor de Conductividad Eléctrica (EC)
            </a>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Mide la conductividad eléctrica del agua, que está relacionada con la cantidad de sales disueltas.
              Compacto y fácil de integrar en sistemas de monitoreo.
              Útil para controlar la salinidad del agua en acuarios marinos o de agua dulce.
            </p>
          </div>
        </div>
      </div>

      {/* Cuarto componente */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sensor4}
              alt="Sensor de Oxígeno Disuelto (DO)"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
            >
              Sensor de Oxígeno Disuelto (DO)
            </a>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Mide la cantidad de oxígeno disuelto en el agua, crucial para la salud de los peces y otros organismos acuáticos.
              Diseño pequeño y sumergible para su uso en acuarios.
              Ayuda a prevenir problemas de falta de oxígeno y a mantener un ambiente acuático bien oxigenado.
            </p>
          </div>
        </div>
      </div>

      {/* Quinto componente */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sensor5}
              alt="Sensor de Nitratos y Nitritos"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
            >
              Sensor de Nitratos y Nitritos
            </a>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Mide los niveles de nitratos y nitritos en el agua, indicadores de la calidad del agua y la eficacia del ciclo del nitrógeno.
              Compacto y fácil de colocar en la pecera.
              Ayuda a prevenir problemas de toxicidad por acumulación de desechos orgánicos y exceso de alimentos.
            </p>
          </div>
        </div>
      </div>

      {/* Sexto componente */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 md:mr-4">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={sensor6}
              alt="Sensor de Luz"
            />
          </div>
          <div className="p-8">
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
            >
              Sensor de Luz
            </a>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Mide la intensidad de la luz en la pecera, importante para el crecimiento de las plantas y el comportamiento de los peces.
              Diseño pequeño y discreto.
              Puede estar conectado a sistemas de iluminación automatizados para regular la luz según las necesidades de los organismos acuáticos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finosecond;
