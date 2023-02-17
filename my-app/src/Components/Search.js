import React from "react";
import { useHistory } from "react-router-dom";

function Search({setSearch}){
    const history = useHistory()
    function handleChange(event){
        history.push("/")
        setSearch(preval => event.target.value)
    }

    return(
        <div>
            <div id='searchfor' >
                <input
                    type='text'
                    placeholder='Search for movie'
                    onChange={handleChange}
                    />
                <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='Search for Movie' />
            </div>
        </div>
    )
}
export default Search;