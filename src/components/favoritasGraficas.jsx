import React from "react";
import BarraLateral from "./barraLateral";
import GraficaLines from "./graficas/graficaLines";



const FavoritasGrafica = () => {
    return(
        <div className="flex h-screen overflow-hidden">
            <BarraLateral/>
            <div className="flex-grow p-4 flex flex-col">
                <GraficaLines/>

            </div>

        </div>
    )
}

export default FavoritasGrafica