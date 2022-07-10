import React from 'react'
import Header from '../header'
import HI from '../../img/svgs/HeartIcon.svg'
import banana from '../../img/example/banana.jpg'
import { useEffect } from 'react';
export default function Commission() {

  
useEffect(() => {
  document.title = 'Commissions';
});

  return (
    <>
     <div id="Refresh">
     <div id="Espacio"></div>
    <Header></Header>
    <div id="Tabla">
    <div>
    <p id="Title" >I'm doing icons,chibis and fullbodys!</p>
    <div id ="Commission">

    </div>
    </div>
    </div>
    <div id="Espacio"></div>
    </div>
</>
  )
}
