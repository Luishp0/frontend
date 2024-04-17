import React from "react";
import Navbarcompras from "./navbarcompras";
import Productcompra from "./productcompra"
import Informacompras from "./informacompras"
import Coment from "./coment"

const Compras = () =>{
    return(
        <> 
        <div>
            <Navbarcompras></Navbarcompras>
            <Productcompra></Productcompra>
            <Informacompras></Informacompras>
            <Coment></Coment>
        </div>
        </>
    )
}


export default Compras

