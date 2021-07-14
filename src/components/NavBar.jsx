import React from "react";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar"
// import Gallery from "./";

function NavBar() {
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
          <button id="bhover" class="ui black button">Buyer Collection</button>
          </Link>
          <SearchBar />
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