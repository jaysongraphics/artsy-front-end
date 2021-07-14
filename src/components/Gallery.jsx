import React, {useState, useEffect} from "react";
import Painting from "./Painting"

function Gallery({paintings, galleries, reviews}) {
  const [random, setRandom] = useState([])

  useEffect(() =>{
    setRandom(getRandomReviews(reviews))
  },[reviews])
  
  const galleryReview = random.map (review => <li> {review.comment} </li>)
  const galleryInfo = galleries.map (gallery => {
    return (
      <div>
        <h2>Gallery Name: {gallery.gallery_name}</h2>
        <p>Location: {gallery.location}</p>
        <p>Date: {gallery.date}</p>
        <p>Time: {gallery.time}</p>
        <p>Reviews: {galleryReview} </p>
      </div>)
  })  
   function getRandomReviews(reviews) {
    const numberOfReviews= Math.floor(Math.random() * 6) 
    const selectedReviews = []
    
    while (selectedReviews.length < numberOfReviews) {
      let index = Math.floor(Math.random() * reviews.length)
      if (!selectedReviews.includes(reviews[index])){
        selectedReviews.push(reviews[index])
      
      } 
    }
    return selectedReviews
  
   }


  return (
    <div className="gallery-div" >
        <h1>Galleries</h1>
        <div className="galleries">
          {galleryInfo}
        </div>
        {/* <Painting 
        paintings={paintings}
        /> */}
    </div>
  );
}

export default Gallery;