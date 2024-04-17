import React from "react";
import Navbarsensor from "./navbarsensor"
import Portadafiltro from "./portadafiltro"
import Navbartercer from "./navbartercer"

const Sensores = () => {
  return (
    <>
      <div>
        <Navbartercer></Navbartercer>
      <Navbarsensor></Navbarsensor>
      <Portadafiltro></Portadafiltro>
      </div>
    </>
  );
};

export default Sensores;
