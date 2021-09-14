import React from "react";
import SlideShow from "./SlideShow"
import ArtistCollection from './ArtistCollection'
import UpcomingGallery from './UpcomingGallery'
import FeaturedArtist from './FeaturedArtist'

function HomePage({paintings, galleries}) {

      return(
        <div className="middle">
          <SlideShow 
          paintings={paintings}
          />
              <ArtistCollection paintings={paintings}/>
              <UpcomingGallery galleries={galleries}/>
              <FeaturedArtist />
        </div>
      )
  }
  

export default HomePage;