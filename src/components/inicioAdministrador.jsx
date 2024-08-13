import React, { useContext } from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import Tarjetas from './tarjetas';
import GraficaPastel from "./graficaPastel";
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
                    <div className="flex flex-col gap-4" style={{ marginTop: '1px' }}>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className={`flex-1 min-w-[200px] rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                                <GraficaPastel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InicioAdministrador;
