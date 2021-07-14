import React from "react";
import {useState, useEffect} from "react"
import { NavLink} from "react-router-dom"
import SearchBar from "./SearchBar"



function Nav() {
  return (
    <div >
      <nav className="nav_bar">
        <NavLink to='/' className="nav_button">
        Home
        </NavLink>
        <NavLink to='/galleries' className="nav_button">
        Galleries
        </NavLink>
        <NavLink to='/Collection' className="nav_button">
        Collection
        </NavLink>
        <SearchBar />
      </nav>   
    </div>
  );
}

export default NavBar