import React, {useState, useEffect} from "react";
import Painting from "./Painting"
import GalleryChild from "./GalleryChild"

//add review form to each individual gallery

function Gallery({paintings, galleries, reviews, addReview, buyers}) {
  // const [random, setRandom] = useState([])

  // useEffect(() =>{
  //   setRandom(getRandomReviews(reviews))
  // },[reviews])
  
  // console.log(reviews)
  
  // {galleryReview.slice(1,5)}
  
  const galleryInfo = galleries.map (gallery => {
    const reviewArray = reviews.filter(review => review.gallery_id == gallery.id)
    // console.log(reviewArray)
    const galleryReview = reviewArray.map (review => <li> {review.comment}</li>)

    // <button id="buttondelete"class="ui button">❌</button>
    return (
      <GalleryChild key={gallery.id} reviews={reviews} gallery={gallery} galleryReview={galleryReview} addReview={addReview} buyers={buyers}/>
      // <div className="gallery_info">
      //   <h2 className="gallery_name">{gallery.gallery_name}</h2>
      //   <img className="gallery_img" src={gallery.image} />
      //   <p>Location: {gallery.location}</p>
      //   <p>Date: {gallery.date}</p>
      //   <p>Opening hours: {gallery.hours}</p>
      //   <p>{gallery.description}</p>
      //   <p>Reviews: {galleryReview} </p>

      // </div>)
    )
  })  
  //  function getRandomReviews(reviews) {
  //   const numberOfReviews= Math.floor(Math.random() * 6) 
  //   const selectedReviews = []
    
  //   while (selectedReviews.length < numberOfReviews) {
  //     let index = Math.floor(Math.random() * reviews.length)
  //     if (!selectedReviews.includes(reviews[index])){
  //       selectedReviews.push(reviews[index])
  //     } 
  //   }

  //   return selectedReviews
  //  }


  return (
    <div className="gallery-div" >
        <h1 className="gallery_title">Galleries</h1>
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