import React from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";

const InicioAdministrador = () => {
    return (
        <div className="flex h-screen overflow-hidden"> {/* Añadido overflow-hidden para evitar el desbordamiento */}
            <BarraLateral /> {/* Aquí se encuentra el componente BarraLateral */}
            <div className="flex-grow p-4">
                <Buscador /> {/* Aquí se encuentra el componente Buscador */}
            </div>
        </div>
    )
}

export default InicioAdministrador;
