import React, { useContext } from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import Tarjetas from './tarjetas';
import Graficauno from "./graficauno"; // Importar el componente de la gráfica
import Graficaph from "./graficaph";

import { AuthContext } from './AuthContext'; 

const InicioAdministrador = () => {
    const { darkMode } = useContext(AuthContext); 

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <BarraLateral />
            <div className="flex flex-col flex-grow overflow-auto">
                <div className="sticky top-0 z-10">
                    <Buscador />
                </div>
                <div className="flex flex-col flex-grow p-4">
                    <div className={`rounded-lg shadow-md p-4 mb-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ marginTop: '2px' }}>
                        <Tarjetas />
                    </div>
                    <div className="flex space-x-6 mb-4">  {/* Agregué `space-x-6` para agregar un espacio entre las gráficas */}
                        <div className="w-1/2"> {/* Cada gráfica ocupará el 50% del ancho */}
                            <Graficauno />
                        </div>
                        <div className="w-1/2">
                            <Graficaph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InicioAdministrador;
