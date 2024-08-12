import React, { useContext } from 'react';
import Navbar from "./navbar";
import Inforportada from "./infoportada";
import Finosecond from "./finosecond";
import Infopeceraa from "./infopeceraa";
import { AuthContext } from './AuthContext';

const Infoma = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <Navbar />
      <Inforportada />
      <Finosecond />
      <Infopeceraa />
    </div>
  );
};

export default Infoma;
