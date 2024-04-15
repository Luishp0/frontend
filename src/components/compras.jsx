import React from "react";
import Navbarcompras from "./navbarcompras";
import Productcompra from "./productcompra"
import Informacompras from "./informacompras"
import Coment from "./coment"
import Piepaginacomprar from "./piepaginacomprar"
import { Transition } from '@headlessui/react';


const Compras = () =>{
    return(
        <> 
        <div>
            <Navbarcompras></Navbarcompras>
            <Productcompra></Productcompra>
            <Informacompras></Informacompras>
            <Coment></Coment>
            <Piepaginacomprar></Piepaginacomprar>
        </div>
        </>
    )
}


export default Compras

