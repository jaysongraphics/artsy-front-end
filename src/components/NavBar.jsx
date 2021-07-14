import React from "react";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar"
// import Gallery from "./";

function NavBar() {
  return (
    <div id='navVertical' className="ui large vertical menu" >
        <nav className="nav_bar">
          <Link to="/">
          <button class="ui button">Home</button>
          </Link>
          <Link to="/gallery">
          <button class="ui button">Galleries</button>
          </Link>
          <Link to="/buyercollection">
          <button class="ui button">Buyer Collection</button>
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