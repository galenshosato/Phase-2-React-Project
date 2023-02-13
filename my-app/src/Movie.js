import React from "react";

function Movie({movie}){
    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.image.url} alt={movie.title} />
        </div>
    )
}

export default Movie;
