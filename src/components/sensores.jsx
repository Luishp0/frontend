import React from "react";
import Navbar from "./navbar"
import Navbarsensor from "./navbarsensor"
import Portadafiltro from "./portadafiltro"
import Infopeceraa from "./infopeceraa"

const Sensores = () => {
  return (
    <>
      <div>
      <Navbar></Navbar>
      <Navbarsensor></Navbarsensor>
      <Portadafiltro></Portadafiltro>
      <Infopeceraa/>
      </div>
    </>
  );
};

export default Sensores;
