import React, {useState, useEffect} from "react";
import Painting from "./Painting"
import GalleryChild from "./GalleryChild"

function Gallery({paintings, galleries, reviews, addReview, buyers, setLoggedInBuyer, loggedInBuyer}) {

  const galleryInfo = galleries.map (gallery => {
    const reviewArray = reviews.filter(review => review.gallery_id == gallery.id)
    const galleryReview = reviewArray.map (review => <li> {review.comment}</li>)

    return (
      <GalleryChild 
      key={gallery.id} 
      id={gallery.id} 
      reviews={reviews} 
      gallery={gallery} 
      galleryReview={galleryReview} 
      addReview={addReview} 
      buyers={buyers}
      setLoggedInBuyer={setLoggedInBuyer}
      loggedInBuyer={loggedInBuyer}
      />
    )
  })  


  return (
    <div className="gallery-div" >
        <h1 className="gallery_title">Galleries</h1>
        <div className="galleries">
          {galleryInfo}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}

export default Gallery;