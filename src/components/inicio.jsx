import React, { useContext } from "react";
import Navbar from "./navbar";
import Portada from "./portada";
import Rectangulos from "./rectangulos";
import Portaima from "./portaima";
import Informacion from "./informacion";
import Descarga from "./descarga";
import Dobletex from "./dobletex";
import Geolocalizacion from "./geolocalizacion"
import Comentarios from "./comentarios";
import { AuthContext } from './AuthContext';

const Inicio = () => {
  const { isAuthenticated, userName } = useContext(AuthContext);

  return (
    <> 
      <div>
        <Navbar isAuthenticated={isAuthenticated} userName={userName} />
        <Portada />
        <Rectangulos />
        <Portaima />
        <Informacion />
        <Descarga />
        <Dobletex />
        <Geolocalizacion />
        <Comentarios />
      </div>
    </>
  );
}

export default Inicio;
