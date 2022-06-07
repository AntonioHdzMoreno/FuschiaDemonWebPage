import React from 'react'
import HI from '../img/svgs/HeartIcon.svg'
export default function Header() {
  return (
<>
<div id = "head2">
            <div id="menu2">
     <div id="figura"><h3 id="Nick">FusciaDemon<img id="cora2" src={HI} alt=""></img></h3></div>
            </div>
        </div>
    <header id = "head">
    <div id="menu">
        <button class = "boton" type="button">HOME</button>
        <button class = "boton" type="button">TOS</button>
        <button class = "boton" type="button">MY ART</button>
        <button class = "boton" type="button">DNI</button>
        <button class = "boton" type="button">COMMISSIONS</button>
    </div>
    </header>
</>
  )
}
