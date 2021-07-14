import React from "react";
import {useEffect, useState} from "react"
import Gallery from "./Gallery";
import SlideShow from "./SlideShow"
// import Painting from "./Painting"

function HomePage() {
    const [paintings, setPaintings] = useState([])
    const [galleries, setGalleries] = useState([])
    const [reviews, setReviews] = useState([])
  
    useEffect(() =>{
      fetch('http://localhost:9393/painting')
      .then(res => res.json())
      .then(paintingArray => setPaintings(paintingArray))
    }, []);
    console.log(paintings);

    useEffect(() =>{
      fetch('http://localhost:9393/gallery')
      .then(res => res.json())
      .then(galleryArray => setGalleries(galleryArray))
    }, []);

    useEffect(() =>{
      fetch('http://localhost:9393/reviews')
      .then(res => res.json())
      .then(reviewArray => setReviews(reviewArray))
    }, []);

    console.log(reviews)

   
  
  
    // const handleClick = () => {
    //   fetch('http://localhost:9393/painting')
    //   .then(res => res.json())
    //   .then(paintingArray => setPaintings(paintingArray))
    // }
    //   console.log(paintings);
  
      return(
        <div>
            <Gallery 
              paintings={paintings}
              galleries={galleries}
              reviews={reviews}
            />
    

          <SlideShow paintings={paintings}/>

          
          {/* <button onClick={handleClick}>
                Click here for data
          </button>   */}
        </div>
      )
  }
  

export default HomePage;