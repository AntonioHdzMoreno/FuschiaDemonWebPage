import React from 'react'
import Header from '../header'
import CT from '../../img/svgs/CT.svg'
import CFF from '../../img/svgs/CFF.svg'
import HI from '../../img/svgs/HeartIcon.svg'
import mainicon from '../../img/example/icon.png'

export default function Home() {
  return (
    <>
    <Header></Header>
    <div id="Tabla">
    <div id="hometabla">
    <div>
    <div id="Red">
    <img id="cora" src={CT} alt="Twitter"></img>
    <img id="cora" src={CFF} alt="Twitter"></img>
    <img id="cora" src={CT} alt="Twitter"></img>
    <img id="cora" src={CT} alt="Twitter"></img>
    </div>

    <p id="Stat"> <img id="cora2" src={HI} alt=""></img>ART STATUS<img id="cora2"src={HI} alt=""></img></p>
    <h3 id="Status">Commissions Open-YCH Open<br></br> 
    TRADES OPEN-Rn Only physical items trade x digital art(my trade part)</h3>
    <h3 id="Me"><img id="cora2" src={HI} alt=""></img>
    ABOUT ME<img id="cora2"  src={HI} alt=""></img></h3>
    <h3 id="Status">Fucsia | Latine | he/she/they | eng•esp😋 |artist| current faves; amphibia🐸toh🦉Avatar 🌊Infinity train🚃</h3>
    
    </div>
    
    <div id="lado2">
    <img id="Icon" src={mainicon} alt="mainicon"></img>
    <h3 id="Stat"><img id="cora2"src={HI} alt=""></img>Likes
    <img id="cora2"src={HI} alt=""></img></h3>
    <h3 id="Status">I like all things cute, pastel, pinks, colorful, punk/rock/goth/emo stuff and also creepy-cute 
    stuff, kemonomimis, cartoons, videogames etc
i'm kinda shy but i try my best,new to the ''furry-world''</h3>
    
    </div>
    </div>
    </div>
    </>
  )
}
