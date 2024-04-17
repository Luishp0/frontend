import React from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import Tarjetas from './tarjetas';
import GraficaPastel from "./graficaPastel";
import GraficaBarras from "./graficaBarras";

const InicioAdministrador = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 "> {/* Añadido overflow-hidden para evitar el desbordamiento */}
            <BarraLateral /> {/* Aquí se encuentra el componente BarraLateral */}
            <div className="flex flex-col flex-grow p-4"> {/* Añadido flex y flex-col para distribución vertical */}
                <Buscador /> {/* Aquí se encuentra el componente Buscador */}
                <div className="flex flex-wrap gap-4"> {/* Contenedor de Tarjetas y Gráficas */}
                    <div className="flex-grow">
                        <Tarjetas />
                    </div>
                    <div className="flex-grow bg-white rounded-lg shadow-md">
                        <GraficaBarras/>
                    </div>
                    <div className="flex-grow p-4 bg-white rounded-lg shadow-md">
                        <GraficaPastel/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default InicioAdministrador;
