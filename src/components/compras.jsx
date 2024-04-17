import React from "react";
import Navbar from "./navbar";
import Productcompra from "./productcompra"
import Informacompras from "./informacompras"
import Coment from "./coment"

const Compras = () =>{
    return(
        <> 
        <div>
            <Navbar></Navbar>
            <Productcompra></Productcompra>
            <Informacompras></Informacompras>
            <Coment></Coment>
        </div>
        </>
    )
}


export default Compras

