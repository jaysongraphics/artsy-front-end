import React from "react";
import {useState, useEffect} from "react"
// import from "";



function Painting({painting}) {
const paintInfo = painting.map(paint => {
            key={paint.id} 
            paint={paint}
 
    })

  return (
    <div className="App">   


       {/* <Nav /> */}
    </div>
  );
}

export default Painting;