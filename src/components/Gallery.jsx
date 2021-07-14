import React from "react";
import Painting from "./Painting"



function Gallery({paintings, galleries, reviews}) {
  const {id, comment, gallery_id, buyer_id} = reviews
  
  const galleryReview = reviews.map (review => <li> {review.comment} </li>)
  const galleryInfo = galleries.map (gallery => {
    return (
      <div>
        <h2>Gallery Name: {gallery.gallery_name}</h2>
        <p>Location: {gallery.location}</p>
        <p>Date: {gallery.date}</p>
        <p>Time: {gallery.time}</p>
        <p>Reviews: {galleryReview} </p>
      </div>)
  
  // const galleryReview = reviews.filter() 

  })  
  
  return (
    <div >
      <div className="galleries">
        {galleryInfo}
       
      </div>
      

      <Painting paintings={paintings}/>
        
      
    </div>
  );
}

export default Gallery;