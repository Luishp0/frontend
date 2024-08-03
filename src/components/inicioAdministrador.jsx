import React from "react";
import BarraLateral from "./barraLateral";
import Buscador from "./buscador";
import Tarjetas from './tarjetas';
import GraficaPastel from "./graficaPastel";
import GraficaBarras from "./graficaBarras";

const InicioAdministrador = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <BarraLateral />
            <div className="flex flex-col flex-grow p-4">
                <Buscador />
                <div className="bg-white rounded-lg shadow-md p-4 mb-4" style={{ marginTop: '2px' }}>
                    <Tarjetas />
                </div>
                <div className="flex flex-col gap-4" style={{ marginTop: '1px' }}> {/* Añadido margen superior */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md">
                            <GraficaBarras />
                        </div>
                        <div className="flex-1 min-w-[200px] bg-white rounded-lg shadow-md">
                            <GraficaPastel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InicioAdministrador;
