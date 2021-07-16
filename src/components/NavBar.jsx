import React from "react";
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import BuyerCollection from "./BuyerCollection"

function NavBar({searchTerm, setSearchTerm, setBuyer, buyers}) {
  return (
    <div id='navVertical' className="ui inverted vertical pointing menu" >
        <nav className="nav_bar" className=''>
          <Link to="/">
          <button id="bhover" class="ui black button">Home</button>
          </Link>
          <Link to="/gallery">
          <button id="bhover"class="ui black button">Galleries</button>
          </Link>
          {buyers ?
          <Link to="/buyercollection"> 
          <button id="bhover" class="ui black button">Buyer collection</button>
          </Link> : null}

          {!buyers ? <> <Link to="/login">
          <button id="bhover" class="ui black button">Login</button>
          </Link> 
          <Link to="/signup">
          <button id="bhover" class="ui black button">Sign up</button>
          </Link> </>
          :
          <button id="bhover" class="ui black button" onClick={() =>setBuyer()}>Logout</button> 
          } 

         

          {/* <Link to="/search-restults">
          <button id="bhover" class="ui black button">Art Info</button>
        </Link> */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </nav>         
    </div>
  );
}


export default NavBar
