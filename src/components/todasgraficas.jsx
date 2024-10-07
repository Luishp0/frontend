import React, { useContext } from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import { AuthContext } from './AuthContext'; 
import Graficauno from "./graficauno";
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
                    {/* Contenedor para las primeras dos gráficas */}
                    <div className="flex flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-6 mb-4">  
                        {/* Cada gráfica ocupará el 100% en pantallas pequeñas y el 50% en pantallas grandes */}
                        <div className="w-full lg:w-1/2"> 
                            <Graficauno />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Graficaph />
                        </div>
                    </div>
                    {/* Contenedor para las siguientes dos gráficas */}
                    <div className="flex flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 lg:space-x-6"> 
                        <div className="w-full lg:w-1/2"> 
                            <Graficausuarios />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Graficaentre2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodasLasGraficas;
