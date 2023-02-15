import React from "react";
import { Link } from "react-router-dom";

function Card({film}){

    return(
        <div>
            <h3>{film.title}</h3>
            <h6>{film.titleType}</h6>
            { film.titleType === 'movie' ? <Link to={`/movies/${film.id}`}> <img src={film.image.url} alt={film.title}/></Link> : <Link to={`/tvShow/${film.id}`}> <img src={film.image.url} alt={film.title}/></Link>}
        </div>
    )
}

export default Card;