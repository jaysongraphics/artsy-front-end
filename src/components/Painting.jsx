import React from "react";
import {useState, useEffect} from "react"
import PaintingsCard from "./PaintingCard";
import {useParams} from "react-router-dom"
import soldout from '../images/soldout.png'


function Painting({paintings}) {
  let { id } = useParams();

    const onePainting = paintings.filter((painting) => painting.gallery_id == id);
    // console.log(paintings);
    // console.log(onePainting);
    // console.log(id);

    const paintingsDisplay = onePainting.map (painting => {
      return <PaintingsCard key={painting.id} painting={painting}/>  
    })

    if(onePainting.length == 0){
      return <>
      <h1 className="paint-sold">Sorry, all paintings are sold out!</h1>
    
        <img id="paint-sold" src={soldout} width='400px' height=' 400px' />
        <br></br>
        <br></br>
        <br></br>
        </>
   }
      
    
  return (
    <div className="paintings">
      {paintingsDisplay}
    </div>
  );
}

export default Painting;