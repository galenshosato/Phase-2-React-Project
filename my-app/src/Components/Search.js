import React, {useState} from "react";

function Search({setSearch}){

    function handleChange(event){
        setSearch(preval => event.target.value)
    }
    

    return(
        <div>
            <div>
                <h2>Search for Movie</h2>
            </div>
            <div>
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