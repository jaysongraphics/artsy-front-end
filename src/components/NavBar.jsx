import React from "react";
import {useState, useEffect} from "react"
// import {NavLink} from "react-router-dom"
import SearchBar from "./SearchBar"




function NavBar() {
  return (
    <div >
      <header>
        <nav className="nav_bar">
          {/* <NavLink to='/' className="nav_button">
          Home
          </NavLink>
          <NavLink to='/galleries' className="nav_button">
          Galleries
          </NavLink>
          <NavLink to='/Collection' className="nav_button">
          Collection
          </NavLink> */}
          <button>Home</button>
          <button>Galleries</button>
          <button>Buyer Collection</button>
          <SearchBar />
        </nav>         
      </header>
  
    </div>
  );
}

export default NavBar