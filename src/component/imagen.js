import React from 'react'


export default function  Imagen ({imgthumb,imgfull,alt,imgnumber,prevnumber,nextnumber,imgref}) {
  return (
<>
<div class="cssbox">
  <a id={imgnumber} href={imgref}>
    <img id="draw" class ="cssbox_thumb" src={imgthumb}></img>
    <span class="cssbox_full">
      <img src={imgfull}></img>
    </span>
  </a>
  <a class="cssbox_close" href="#void"></a>
  <a class="cssbox_prev" href={prevnumber}>&lt;</a>
  <a class="cssbox_next" href={nextnumber}>&gt;</a>
</div>
</>
  )
}

