import React, { useContext } from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import { AuthContext } from './AuthContext'; 
import Graficauno from "./graficauno"; // Importar el componente de la gráfica
import Graficaph from "./graficaph"

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
                    {/* Añadir el componente Graficauno */}
                    <div className="mb-6">
                        <Graficauno />
                    </div>
                    {/* Puedes añadir más gráficas aquí si es necesario */}
                    <div className="mb-6">
                        <Graficaph />
                    </div>
                    {/* Puedes añadir más gráficas aquí si es necesario */}
                </div>
            </div>
        </div>
    );
}

export default TodasLasGraficas;
