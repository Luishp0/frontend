import React, { useContext } from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import { AuthContext } from './AuthContext'; 
import Graficauno from "./graficauno"; // Importar el componente de la gráfica
import Graficaph from "./graficaph";
import Graficausuarios from "./graficausuarios";
import Graficaentre2 from "./graficaentre2";

const TodasLasGraficas = () => {
    const { darkMode } = useContext(AuthContext); 

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <BarraLateral />
            <div className="flex flex-col flex-grow overflow-auto">
                <div className="sticky top-0 z-10">
                    <Buscador />
                </div>
                <div className="flex flex-col flex-grow p-4">
                    {/* Contenedor con flex para alinear las gráficas horizontalmente */}
                    <div className="flex space-x-6 mb-4">  {/* `space-x-6` para agregar un espacio entre las gráficas */}
                        <div className="w-1/2"> {/* Cada gráfica ocupará el 50% del ancho */}
                            <Graficauno />
                        </div>
                        <div className="w-1/2">
                            <Graficaph />
                        </div>
                    </div>
                    {/* Contenedor con flex para alinear Graficausuarios y Graficaentre2 horizontalmente */}
                    <div className="flex space-x-6">  {/* `space-x-6` para agregar un espacio entre las gráficas */}
                        <div className="w-1/2"> {/* Cada gráfica ocupará el 50% del ancho */}
                            <Graficausuarios />
                        </div>
                        <div className="w-1/2">
                            <Graficaentre2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodasLasGraficas;
