import React from "react";
import {useParams} from "react-router-dom"
import PaintingsCard from "./PaintingCard";

function ArtInfo({paintings}) {
    let { id } = useParams();

    const onePainting = paintings.filter((painting) => painting.id == id);
    const paintingsDisplay = onePainting.map (painting => {
        return <PaintingsCard key={painting.id} painting={painting}/>  
      })

  return (
    <div >
         <h1 className="art-info">Art info</h1>
         {paintingsDisplay}
    </div>
  );
}

export default ArtInfo;
