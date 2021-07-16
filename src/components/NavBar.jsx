import React from "react";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

function NavBar({searchTerm, setSearchTerm}) {
  return (
    <div id='navVertical' className="ui inverted vertical pointing menu" >
        <nav className="nav_bar" className=''>
          <Link to="/">
          <button id="bhover" class="ui black button">Home</button>
          </Link>
          <Link to="/gallery">
          <button id="bhover"class="ui black button">Galleries</button>
          </Link>
          <Link to="/buyercollection">
          <button id="bhover" class="ui black button">Buyer collection</button>
          </Link>
          <Link to="/login">
          <button id="bhover" class="ui black button">Login</button>
          </Link>
          <Link to="/signup">
          <button id="bhover" class="ui black button">Sign up</button>
          </Link>
          <Link to="/search-restults">
          <button id="bhover" class="ui black button">Art Info</button>
          </Link>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </nav>         
    </div>
  );
}


export default NavBar


{/* <NavLink to='/' className="nav_button">
Home
</NavLink>
<NavLink to='/galleries' className="nav_button">
Galleries
</NavLink>
<NavLink to='/Collection' className="nav_button">
Collection
</NavLink> */}