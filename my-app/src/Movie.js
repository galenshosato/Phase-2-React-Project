import React, {useState} from "react";
import MovieDetails from "./MovieDetails";

function Movie({movie}){
    const [details, setDetails] = useState(false)

    function handleClick(event) {
        setDetails(prev => !prev)
    }
    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.image.url} alt={movie.title} onClick={handleClick} />
            <div>
                {details ? <MovieDetails movie={movie} /> : null}
            </div>
        </div>
        
    )
}

export default Movie;
