import React from "react";

function Search({setSearch}){

    function handleChange(event){
        setSearch(preval => event.target.value)
    }

    return(
        <div>
            <div id='searchfor' >
                <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='Search for Movie' />
                <span> </span>
                <input
                    type='text'
                    placeholder='Search for movie'
                    onChange={handleChange}
                    />
            </div>
        </div>
    )
}
export default Search;