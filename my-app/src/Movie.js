import React from "react";

function Movie({movie}){
    return(
        <div>
            {/* console.log({movie.title}) */}
            {/* <h1>{movie.title}</h1> */}
            <img src={movie.image.url} alt={movie.title} />
        </div>
    )
}

export default Movie;
