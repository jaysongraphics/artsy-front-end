import React from "react";
import {useState, useEffect} from "react"
import PaintingsCard from "./PaintingCard";
// import from "";



function Painting({paintings}) {
const paintingsDisplay = paintings.map (painting => {
  return <PaintingsCard key={painting.id} painting={painting}/>
          
 
    })

  return (
    <div className="paintings">
      {paintingsDisplay}
    </div>
  );
}

export default Painting;