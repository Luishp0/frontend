import React from "react";
import Navbar from "./navbar"
import Navbarfiltros from "./navbarfiltro"
import Filtroinfo from "./filtrosinfo"
import Infofiltros from "./infofiltros"

const Filtros = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      <Navbarfiltros></Navbarfiltros>
      <Filtroinfo></Filtroinfo>
      <Infofiltros></Infofiltros>
      </div>
    </>
  );
};

export default Filtros;
