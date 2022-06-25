import React from 'react'
import Header from '../header'
import Imagen from '../imagen';
import { useEffect } from 'react';
import mainicon from '../../img/example/icon.png'

export default function Art() {
  function trigger(element, action) {
    var link = element.parentNode.querySelector(".cssbox_" + action)
    if (link)
    link.click();
    }
    document.addEventListener("keyup", function(e) {
    switch(e.key) {
    case "Escape":
    return trigger(e.target, "close");
    case "ArrowLeft":
    return trigger(e.target, "prev");
    case "ArrowRight":
    return trigger(e.target, "next");
    }
    });

    return (
    <>
    <Header></Header>
    <div id="Tabla">
    <br></br>
    <p id="Stat" >Some of my work</p>
    <div id="Galeria">
    <Imagen imgthumb = "https://i.ibb.co/C7JDvzN/1.jpg" imgfull ="https://i.ibb.co/C7JDvzN/1.jpg"
    alt="DIA" imgnumber = "image1" imgref="#image1" prevnumber="#image0" nextnumber="#image2"></Imagen>   
    </div>
    </div>
    </>
  )
}
