import React from 'react'
import HI from '../img/svgs/HeartIcon.svg'
import { useNavigate } from "react-router-dom";

export default function Header() {

  let navigate = useNavigate(); 
  const routeChange = (ruta) =>{ 
    let path = ruta; 
    navigate(path);
  }

  return (
  
<>
<div id = "head2">
 <p id="Nick">FusciaDemon<img id="cora2" src={HI} alt=""></img></p>
</div>
<div id = "head">
    <div id="menu">
    <input class = "boton" type="button" onClick={() => routeChange("/")} value="HOME"/>
    <input class = "boton" type="button" onClick={() => routeChange("/art")} value="MY ART"/>
    <input class = "boton" type="button" onClick={() => routeChange("/commissions")} value="COMMISSIONS"/>
    <input class = "boton" type="button" onClick={() => routeChange("/tos")} value="TOS"/>
    <input class = "boton" type="button" onClick={() => routeChange("/rules")} value="RULES"/>
    <input class = "boton" type="button" onClick={() => routeChange("/rules")} value="DNI"/>
    </div>
</div>
</>
  )
}
