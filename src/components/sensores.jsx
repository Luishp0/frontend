import React from "react";
import Navbarsensor from "./navbarsensor"
import Portadafiltro from "./portadafiltro"
import Navbar from "./navbar"
import Infosensores from "./infosensores"

const Sensores = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      <Navbarsensor></Navbarsensor>
      <Portadafiltro></Portadafiltro>
      <Infosensores></Infosensores>
      </div>
    </>
  );
};

export default Sensores;
