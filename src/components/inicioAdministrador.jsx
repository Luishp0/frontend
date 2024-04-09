import React from "react";
import BarraDasbord from './barraDashbord.jsx'

const inicioAdministrador = () => {

    return(
        <div className="flex">
        <BarraDasbord />
            <div className="flex-1">
                {/* Aquí irá el contenido principal de tu aplicación */}
                    <h1 className="p-4 text-2xl">Resumen General</h1>
                {/* Agrega el resto de los componentes y gráficos aquí */}
                <div>
                </div>
            </div>
        </div>

    );
}

export default inicioAdministrador


