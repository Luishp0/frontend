import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import filtro7 from "../img/filtro7.jpg";
import filtro2 from "../img/filtro2.jpg";
import filtro3 from "../img/filtro3.jpg";
import filtro4 from "../img/filtro4.jpg";
import filtro5 from "../img/filtro5.jpg";
import filtro6 from "../img/filtro6.jpg";

const Filtroinfo = () => {
  const { darkMode } = useContext(AuthContext);

  const cardClasses = `max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-8 md:mr-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`;
  const textClasses = `${darkMode ? 'text-white' : 'text-black'}`;
  const titleClasses = `block mt-1 text-lg leading-tight font-medium ${darkMode ? 'text-white' : 'text-black'}`;
  const descriptionClasses = `mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <div className={`flex flex-wrap justify-center ${darkMode ? 'bg-grayDark' : 'bg-white'}`}>
      {/* Primer componente */}
      <div className={cardClasses}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-60 w-60 object-cover md:h-60 md:w-60"
              src={filtro7}
              alt="Filtro Interno de Esponja"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a
              href="#"
              className={titleClasses}
            >
              Filtro Interno de Esponja
            </a>
            <p className={descriptionClasses}>
              Compacto y fácil de instalar en el interior de la pecera.
              Utiliza una esponja como medio de filtración para atrapar partículas sólidas y residuos.
              Proporciona una filtración mecánica eficaz.
              Ideal para peceras pequeñas y nano acuarios.
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
              src={filtro2}
              alt="Filtro Colgante (Hang-On-Back)"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a
              href="#"
              className={titleClasses}
            >
              Filtro Colgante (Hang-On-Back)
            </a>
            <p className={descriptionClasses}>
              Se monta en el borde de la pecera, lo que ahorra espacio en el interior.
              Utiliza un cartucho de filtración que puede contener esponjas, carbón activado y otros medios filtrantes.
              Proporciona filtración mecánica y química.
              Adecuado para peceras pequeñas y medianas.
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
              src={filtro3}
              alt="Filtro de Esquina"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a
              href="#"
              className={titleClasses}
            >
              Filtro de Esquina
            </a>
            <p className={descriptionClasses}>
              Diseñado para colocarse en una esquina de la pecera, optimizando el espacio.
              Utiliza una combinación de medios de filtración, como esponjas y carbón activado.
              Proporciona filtración mecánica y química.
              Ideal para peceras de esquina y acuarios de tamaño reducido.
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
              src={filtro4}
              alt="Filtro de Cascada Pequeño"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a
              href="#"
              className={titleClasses}
            >
              Filtro de Cascada Pequeño
            </a>
            <p className={descriptionClasses}>
              Similar al filtro de cascada estándar, pero diseñado en una versión más compacta.
              Ofrece filtración mecánica y biológica mediante un flujo de agua descendente.
              Requiere poco espacio y se puede colocar fácilmente en el borde de la pecera.
              Apto para peceras pequeñas y nano acuarios.
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
              src={filtro5}
              alt="Filtro de Esquina de Espuma"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a
              href="#"
              className={titleClasses}
            >
              Filtro de Esquina de Espuma
            </a>
            <p className={descriptionClasses}>
              Diseñado para encajar en una esquina de la pecera, maximizando el espacio disponible.
              Utiliza una esponja como medio de filtración para atrapar partículas y residuos.
              Proporciona filtración mecánica eficiente.
              Perfecto para peceras de esquina y acuarios de tamaño reducido.
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
              src={filtro6}
              alt="Filtro Sumergible"
            />
          </div>
          <div className={`p-8 ${textClasses}`}>
            <a
              href="#"
              className={titleClasses}
            >
              Filtro Sumergible
            </a>
            <p className={descriptionClasses}>
              Se coloca completamente dentro de la pecera, ocupando poco espacio.
              Utiliza un cartucho de filtración interno que puede contener esponjas y carbón activado.
              Proporciona filtración mecánica y química.
              Ideal para peceras pequeñas y acuarios de escritorio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtroinfo;
