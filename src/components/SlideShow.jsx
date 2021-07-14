import React from "react";
import {useState, useEffect} from "react"



function SlideShow({paintings}) {
  const imgSrc = paintings.map (painting => {
    <li> <img src={painting.image}/> </li>
  }) 

  return (
    <div className="slide_show">
      {imgSrc}    
    </div>
  )
}

export default SlideShow;