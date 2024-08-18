import React, { useContext } from "react";
import { AuthContext } from './AuthContext';
import pez1 from "../img/Platys.jpg";
import pez2 from "../img/Guppies.jpg";
import pez3 from "../img/Tetras.jpg";
import pez4 from "../img/pez4.jpg";
import pez5 from "../img/Mollys.jpg";
import pez6 from "../img/Devarios.jpg";

const Finosecond = () => {
  const { darkMode } = useContext(AuthContext);

  const fishData = [
    {
      name: "Platys",
      image: pez1,
      info: [
        "Tamaño: Pequeño.",
        "Temperamento: Pacífico.",
        "Requisitos del agua: Prefieren agua ligeramente alcalina y bien oxigenada, con una temperatura de 20-28°C.",
        "Alimentación: Omnívoro, se alimenta de escamas, alimentos vivos y vegetales, larvas de mosquito, artemia y dafnias."
      ]
    },
    {
      name: "Guppies",
      image: pez2,
      info: [
        "Tamaño: Pequeño.",
        "Temperamento: Pacífico, ideal para acuarios comunitarios.",
        "Requisitos del agua: Prefieren agua ligeramente alcalina y bien oxigenada, con una temperatura de 22-28°C.",
        "Alimentación: Omnívoro, se alimenta de escamas, alimentos vivos y vegetales."
      ]
    },
    {
      name: "Tetras",
      image: pez3,
      info: [
        "Tamaño: Pequeño.",
        "Temperamento: Pacífico, adecuado para acuarios comunitarios.",
        "Requisitos del agua: Prefieren agua ligeramente ácida y bien oxigenada, con una temperatura de 22-26°C.",
        "Alimentación: Omnívoro, se alimenta de escamas, alimentos vivos y congelados."
      ]
    },
    {
      name: "Peces ángel",
      image: pez4,
      info: [
        "Tamaño: Mediano.",
        "Temperamento: Generalmente pacífico, pero puede ser territorial.",
        "Requisitos del agua: Prefieren agua ligeramente ácida y bien oxigenada, con una temperatura de 24-30°C.",
        "Alimentación: Omnívoro, se alimenta de una variedad de alimentos vivos, congelados y secos."
      ]
    },
    {
      name: "Mollys",
      image: pez5,
      info: [
        "Tamaño: Mediano.",
        "Temperamento: Pacífico, adecuado para acuarios comunitarios.",
        "Requisitos del agua: Prefieren agua ligeramente alcalina y bien oxigenada, con una temperatura de 24-28°C.",
        "Alimentación: Omnívoro, se alimenta de escamas, alimentos vivos y vegetales."
      ]
    },
    {
      name: "Danios",
      image: pez6,
      info: [
        "Tamaño: Pequeño.",
        "Temperamento: Pacífico, activo y compatible con otros peces.",
        "Requisitos del agua: Prefieren agua ligeramente alcalina y bien oxigenada, con una temperatura de 20-25°C.",
        "Alimentación: Omnívoro, se alimenta de escamas, alimentos vivos y congelados."
      ]
    }
  ];

  return (
    <div className={`flex flex-wrap justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {fishData.map((fish, index) => (
        <div key={index} className={`max-w-md mx-auto rounded-md shadow-md overflow-hidden md:max-w-2xl mb-8 border border-gray-300 border-opacity-30 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}>
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={fish.image}
                alt={fish.name}
              />
            </div>
            <div className={`p-8 ${darkMode ? 'text-blue-300' : 'text-black'}`}>
              <a
                href="#"
                className={`block mt-1 text-lg leading-tight font-medium hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
              >
                {fish.name}
              </a>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {fish.info.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Finosecond;
