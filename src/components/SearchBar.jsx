import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Input from '@material-ui/core/Input';




function SearchBar () {


    return(
        <form className="ui mini icon input">
            <input type="text" placeholder="Search..." value="" />
            <i class="search icon"></i>
        </form>
    )
}


export default SearchBar