import React from "react";
import {useEffect, useState} from "react"
import Gallery from "./Gallery";
import SlideShow from "./SlideShow"
// import Painting from "./Painting"
import ArtistCollection from './ArtistCollection'
import UpcomingGallery from './UpcomingGallery'

function HomePage({paintings, galleries}) {
  // const [paintings, setPaintings] = useState([])
  // const [galleries, setGalleries] = useState([])
  // const [reviews, setReviews] = useState([])

  // useEffect(() =>{
  //   fetch('http://localhost:9393/painting')
  //   .then(res => res.json())
  //   .then(paintingArray => setPaintings(paintingArray))
  // }, []);
  // console.log(paintings);

  // useEffect(() =>{
  //   fetch('http://localhost:9393/gallery')
  //   .then(res => res.json())
  //   .then(galleryArray => setGalleries(galleryArray))
  // }, []);

  // useEffect(() =>{
  //   fetch('http://localhost:9393/reviews')
  //   .then(res => res.json())
  //   .then(reviewArray => setReviews(reviewArray))
  // }, []);

  // console.log(reviews)

    // const handleClick = () => {
    //   fetch('http://localhost:9393/painting')
    //   .then(res => res.json())
    //   .then(paintingArray => setPaintings(paintingArray))
    // }
    //   console.log(paintings);
  
      return(
        <div className="middle">
          <h1 className="home1">Home</h1>
          <SlideShow 
          paintings={paintings}
          />
            {/* <Gallery 
              paintings={paintings}
              galleries={galleries}
              reviews={reviews}
            /> */}
          <ArtistCollection />
          <UpcomingGallery />
          {/* <button onClick={handleClick}>
                Click here for data
          </button>   */}
        </div>
      )
  }
  

export default HomePage;