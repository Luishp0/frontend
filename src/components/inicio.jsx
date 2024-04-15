import React from "react";
import Navbar from "./navbar";
import Portada from "./portada";
import Rectangulos from "./rectangulos";
import Portaima from "./portaima";
import Informacion from "./informacion";
import Dobletex from "./dobletex";
import Comentarios from "./comentarios";
 
const Inicio = () =>{
    return(
        <> 
        <div>
            <Navbar></Navbar>
            <Portada></Portada>
            <Rectangulos></Rectangulos>
            <Portaima></Portaima>
            <Informacion></Informacion>
            <Dobletex></Dobletex>
            <Comentarios></Comentarios>

        </div>
        </>
    )
}


export default Inicio

