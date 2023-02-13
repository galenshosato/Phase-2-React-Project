import React from "react";
import Movie from "./Movie.js"

function MovieCollection({movieInfo}){



    return(
        <div>
            {movieInfo.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default MovieCollection;
