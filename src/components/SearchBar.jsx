import React from 'react';
import 'semantic-ui-css/semantic.min.css'

function SearchBar ({searchTerm, setSearchTerm, handleSearch}) {

  return(
     <div className="search-bar">
      <div className="ui inverted divider"></div>
        <form className="ui inverted transparent icon input" onSubmit={handleSearch}>
          <input type="text" placeholder="Search..." value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
          <i className="search icon"></i>
        </form>
    </div>
  )
}
    
export default SearchBar
