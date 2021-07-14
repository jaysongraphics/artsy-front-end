import React from "react";
import Painting from "./Painting"



function Gallery({paintings, galleries, reviews}) {
  const galleryInfo = galleries.map (gallery => {
    return (
      <div>
        <h2>Gallery Name: {gallery.gallery_name}</h2>
        <p>Location: {gallery.location}</p>
        <p>Date: {gallery.date}</p>
        <p>Time: {gallery.time}</p>
      </div>)
  
  const galleryReview = reviews.map ((review) => {review.comment})

  })  
  
  return (
    <div >
      {galleryInfo}    
      <Painting paintings={paintings}/>
    </div>
  );
}

export default Gallery;