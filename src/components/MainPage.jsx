import React from "react";
import {useEffect, useState} from "react"
import Gallery from "./Gallery";

function MainPage() {
    const [paintings, setPaintings] = useState([])
    const [galleries, setGalleries] = useState([])
  
    useEffect(() =>{
      fetch('http://localhost:9393/painting')
      .then(res => res.json())
      .then(paintingArray => setPaintings(paintingArray))
    }, []);
    console.log(paintings);

    // useEffect(() =>{
    //   fetch('http://localhost:9393/gallary')
    //   .then(res => res.json())
    //   .then(galleryArray => setGalleries(galleryArray))
    // }, []);
  
  
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
          />

          
          {/* <button onClick={handleClick}>
                Click here for data
          </button>   */}
        </div>
      )
  }
  

export default MainPage;