import React from "react";



function BuyerCollection({paintings}) {

    const paintingsDisp = paintings.map (painting => {
      return (
        <div className="collectionpaintings">
          <img className = "imgcard" src={painting.image} alt="" />
          <h3 className = "title-paint">Title: {painting.painting_name}</h3>
          <h4 className = "detail-info">Artist name: {painting.artist_name}</h4>
          <h4 className = "detail-info">Country of Birth: {painting.country}</h4>
          <h4 className = "detail-info">Date of Birth: {painting.birthday}</h4>
          <h4 className = "detail-info">Price: ${painting.price}</h4>
        </div>
      )
    })
    
  return (
    <div >
        <h1 className="buyer_title">Here is your Collection</h1>
         {paintingsDisp}
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>

    </div>
  );
}


export default BuyerCollection;


