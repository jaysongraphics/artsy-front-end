import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Input from '@material-ui/core/Input';
import {useState} from 'react'

function SearchBar ({searchTerm, setSearchTerm}) {

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
