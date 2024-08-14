import React, { useContext } from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import Notificaciones2 from "./notificaciones2";
import { AuthContext } from './AuthContext'; 

const Notificaciones = () => {
    const { darkMode } = useContext(AuthContext); 

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <BarraLateral />
            <div className="flex flex-col flex-grow overflow-auto">
                <div className="sticky top-0 z-10">
                    <Buscador />
                </div>
                <div className={`flex flex-col flex-grow p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                    <Notificaciones2 />
                </div>
            </div>
        </div>
    );
}

export default Notificaciones;
