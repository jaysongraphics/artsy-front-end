import React from "react";
import {Link, useHistory} from "react-router-dom"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import BuyerCollection from "./BuyerCollection"

function NavBar({searchTerm, setSearchTerm, setLoggedInBuyer, loggedInBuyer}) {
  const history = useHistory()

  const handleLogOut = () => {
    setLoggedInBuyer(false)
    history.push("/login")
  }
  
  return (
    <div id='navVertical' className="ui inverted vertical pointing menu" >
        <nav className="nav_bar" className=''>
          <Link to="/">
          <button id="bhover" class="ui black button">Home</button>
          </Link>
          <Link to="/gallery">
          <button id="bhover"class="ui black button">Galleries</button>
          </Link>
          {loggedInBuyer ?
          <Link to="/buyercollection"> 
          <button id="bhover" class="ui black button">Buyer collection</button>
          </Link> : null}

          {!loggedInBuyer ? <> <Link to="/login">
          <button id="bhover" class="ui black button">Login</button>
          </Link> 
          <Link to="/signup">
          <button id="bhover" class="ui black button">Sign up</button>
          </Link> </>
          :
          <button id="bhover" class="ui black button" onClick={handleLogOut}>Logout</button> 
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
