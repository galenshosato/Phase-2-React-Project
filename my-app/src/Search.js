import React, {useState} from "react";
import Movie from "./Movie.js"
import TvShow from "./TvShow.js";
import SearchResults from "./SearchResults"

function Search({movieInfo}) {
    const [query, setQuery] = useState("")

    function handleOnSearchChange (event){
        console.log(event.target.value)
        setQuery(event.target.value)
    }

    console.log(Movie)
    console.log(movieInfo)

    const mediaDisplayF= movieInfo.filter((show)=> show.title.toLowerCase().includes(query.toLowerCase()))
   
    const mediaDisplayM = mediaDisplayF.map(media=> {
        return( <div>
                    <SearchResults key={media.id} media={media.title} />
                </div>)

    })

    return(
        <div>
            <br/>
            <input type="text" name="search" placeholder="Search Here" value={query} onChange={handleOnSearchChange}/>
            {mediaDisplayM}
        </div>

    )

}
export default Search;