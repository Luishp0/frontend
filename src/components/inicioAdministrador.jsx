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
                    {/* Contenedor de las tarjetas */}
                    <div className={`rounded-lg shadow-md p-4 mb-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ marginTop: '2px' }}>
                        <Tarjetas />
                    </div>

                    {/* Contenedor de las gráficas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"> 
                        {/* Gráfica 1 */}
                        <div className="w-full">
                            <Graficauno />
                        </div>
                        
                        {/* Gráfica 2 */}
                        <div className="w-full">
                            <Graficaph />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InicioAdministrador;
