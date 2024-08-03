import React, { useContext } from "react";
import Navbar from "./navbar";
import { AuthContext } from './AuthContext';
import Actualizadordatos from "./Actualizardatos";

const Actualizador = () => {
  const { isAuthenticated, userName } = useContext(AuthContext);

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} userName={userName} />
      <Actualizadordatos/>
    </>
  );
}

export default Actualizador;
