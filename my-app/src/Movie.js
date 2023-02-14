import React from "react";
import { Link } from "react-router-dom";


function Movie({movie}){

    const movieID = movie.id
    
    return(
        <div>
            <h3>{movie.title}</h3>
            <a href={`/movies${movieID}`}> <img src={movie.image.url} alt={movie.title}/></a>
        </div>
        
    )
}

export default Movie;
