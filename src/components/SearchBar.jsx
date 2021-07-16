import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Input from '@material-ui/core/Input';
import {useState} from 'react'

// search by artist, gallery name, painting name


function SearchBar ({searchTerm, setSearchTerm}) {
  // const [artistSearch, setArtistSearch] = useState(false)
  // const [paintingSearch, setPaintingsSearch] = useState(false)
  // const [gallerySearch, setGallerySearch] = useState (false)

  
  // function handleArtistSearch () {
  //     setArtistSearch(!artistSearch)
  // }

  // function handlePaintingSearch () {
  //     setPaintingsSearch(!paintingSearch)
  // }

  // function handleGallerySearch () {
  //     setGallerySearch(!gallerySearch)
  // }


    return(
     <div className="search-bar">
  <div class="ui inverted divider"></div>
  <div class="ui inverted transparent icon input">
          <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
          <i class="search icon"></i>
        </div>
    </div>
  )
}
    
    export default SearchBar
    
    
    {/* //    <div className="search-bar" >
    //     <div class="ui divider"></div>
    //     <div class="ui icon input">
    //       <input type="text" placeholder="Search..." />
    //       <i class="search icon"></i>
    //     </div>
       </div> */}

        {/* <div class="ui icon input">
        <form className="">
            <input type="text" placeholder="Search..." value="" />
            <i class="search icon"></i>
        </form>
        </div> */}