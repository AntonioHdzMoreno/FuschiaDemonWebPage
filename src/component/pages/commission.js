import React from 'react'
import Header from '../header'
import HI from '../../img/svgs/HeartIcon.svg'
import banana from '../../img/example/banana.jpg'
export default function Commission() {
  return (
    <>
     <div id="Espacio"></div>
    <Header></Header>
    <div id="Tabla">
    <h3 id="Title">I'm doing icons,chibis and fullbodys!</h3>
    <br></br>
    <div id ="Commission">
    <h3>✨FULLBODYS=
💗Flatcolor $20
💗Fullcolor $25
💗Full render $35</h3>
        <img id="fullbody" src={banana}></img>
    </div>
    </div>
    <div id="Espacio"></div>
</>
  )
}
