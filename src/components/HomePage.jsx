import React from "react";
import {useEffect, useState} from "react"
import Gallery from "./Gallery";
import SlideShow from "./SlideShow"
// import Painting from "./Painting"
import ArtistCollection from './ArtistCollection'
import UpcomingGallery from './UpcomingGallery'
import FeaturedArtist from './FeaturedArtist'

function HomePage({paintings, galleries}) {

      return(
        <div className="middle">
          {/* <h1 className="home1">Home</h1> */}
          <SlideShow 
          paintings={paintings}
          />
              <ArtistCollection paintings={paintings}/>
              <UpcomingGallery galleries={galleries}/>
              <FeaturedArtist />
            {/* <Gallery 
              paintings={paintings}
              galleries={galleries}
              reviews={reviews}
            /> */}
          {/* <button onClick={handleClick}>
                Click here for data
          </button>   */}
        </div>
      )
  }
  

export default HomePage;