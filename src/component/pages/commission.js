import React from 'react'
import Header from '../header'
import HI from '../../img/svgs/HeartIcon.svg'
import banana from '../../img/example/banana.jpg'
export default function Commission() {
  return (
    <>
    <Header></Header>
    <div id="Tabla">
    <br></br>
    <h3 id="Stat">I'm doing icons,chibis and fullbodys!</h3>
    <div>
        <img id="fullbody" src={banana}></img>
    </div>
    </div>
</>
  )
}
