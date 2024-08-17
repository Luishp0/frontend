import React, { useContext } from "react";
import { AuthContext } from './AuthContext'; // Importa el contexto
import pez1 from "../img/pez1.jpg";
import pez2 from "../img/pez2.jpg";
import pez3 from "../img/pez3.jpg";
import pez4 from "../img/pez4.jpg";
import pez5 from "../img/pez5.jpg";
import pez6 from "../img/pez6.jpg";

const Finosecond = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`flex flex-wrap justify-center ${darkMode ? 'bg-grayDark' : 'bg-white'}`}>
      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pez1}
              alt="Pez Betta"
            />
          </div>
          <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* Empty */}
            </div>
            <a
              href="#"
              className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Betta Splendens (Pez Betta)
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Tamaño: Pequeño.
Temperamento: A menudo agresivo hacia otros peces betta y peces con colores brillantes similares.
Requisitos del agua: Prefieren agua cálida y limpia, con una temperatura de alrededor de 24-28°C.
Alimentación: Carnívoro, se alimenta de alimentos vivos y secos, como pellets de calidad para bettas.

            </p>
          </div>
        </div>
      </div>

      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pez2}
              alt="Guppy"
            />
          </div>
          <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* Empty */}
            </div>
            <a
              href="#"
              className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Guppy
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Tamaño: Pequeño.
Temperamento: Pacífico, generalmente compatible con otros peces comunitarios.
Requisitos del agua: Prefieren agua ligeramente alcalina y bien oxigenada, con una temperatura de alrededor de 24-28°C.
Alimentación: Omnívoro, se alimenta de alimentos vivos y secos, como escamas y alimentos congelados.

            </p>
          </div>
        </div>
      </div>

      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pez3}
              alt="Tetra Neón"
            />
          </div>
          <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* Empty */}
            </div>
            <a
              href="#"
              className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Tetra Neón
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Tamaño: Pequeño.
Temperamento: Pacífico, se lleva bien con otros peces comunitarios.
Requisitos del agua: Prefieren agua suave y ligeramente ácida, con una temperatura de alrededor de 23-26°C.
Alimentos vivos o congelados: Artemia, larvas de mosquito, y dafnias son ideales para complementar su dieta y mantener su colorido brillante.
            </p>
          </div>
        </div>
      </div>

      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pez4}
              alt="Pez Ángel"
            />
          </div>
          <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* Empty */}
            </div>
            <a
              href="#"
              className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Pez Ángel
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Tamaño: Mediano.
Temperamento: Generalmente pacífico, pero puede volverse agresivo con otros peces de su misma especie.
Requisitos del agua: Prefieren agua ligeramente ácida y bien oxigenada, con una temperatura de alrededor de 24-30°C.
Alimentación: Omnivoros, se alimentan de una variedad de alimentos vivos, secos y congelados.
            </p>
          </div>
        </div>
      </div>

      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pez5}
              alt="Pez Disco"
            />
          </div>
          <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* Empty */}
            </div>
            <a
              href="#"
              className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Pez Disco
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Tamaño: Mediano.
Temperamento: Pacífico, se lleva bien con otros peces tranquilos y pacíficos.
Requisitos del agua: Prefieren agua blanda y ligeramente ácida, con una temperatura de alrededor de 26-32°C.
Alimentación: Omnívoro, se alimenta de una variedad de alimentos vivos, congelados y secos.
            </p>
          </div>
        </div>
      </div>

      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={pez6}
              alt="Pez Globo Enano"
            />
          </div>
          <div className={`p-8 ${darkMode ? 'text-white' : 'text-black'}`}>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {/* Empty */}
            </div>
            <a
              href="#"
              className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
            >
              Pez Globo Enano
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Tamaño: Pequeño.
Temperamento: Pacífico, pero puede ser territorial.
Requisitos del agua: Prefieren agua ligeramente alcalina y bien oxigenada, con una temperatura de alrededor de 24-28°C.
Alimentación: Carnívoro, se alimenta de alimentos vivos y congelados, como camarones, mejillones y gusanos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finosecond;
