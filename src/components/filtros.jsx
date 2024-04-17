import React from "react";
import Navbar from "./navbar"
import Navbarfiltros from "./navbarfiltro"
import Filtroinfo from "./filtrosinfo"
import Infopeceraa from "./infopeceraa"

const Filtros = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      <Navbarfiltros></Navbarfiltros>
      <Filtroinfo></Filtroinfo>
      <Infopeceraa/>
      </div>
    </>
  );
};

export default Filtros;
