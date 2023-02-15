import React from "react";
import { Link } from "react-router-dom";



function Movie({movie}){

    return(
        <div>
            <h3>{movie.title}</h3>
            <Link to={`/movies/${movie.id}`}> <img src={movie.image.url} alt={movie.title}/></Link>
        </div>
        
    )
}

export default Movie;
