import React from "react";
import { Link } from "react-router-dom";

function Card({film}){

    return(
        <div id='wholeCard' >
            { film.titleType === 'movie' ? <Link to={`/movies/${film.id}`}> <img id='img_to_hover' src={film.image.url} alt={film.title}/></Link> : <Link to={`/tvShow/${film.id}`}> <img id='img_to_hover' src={film.image.url} alt={film.title}/></Link>}
            <div id="hiddenforhover">
                <h5>{film.title}</h5>
                <p>{film.year}</p>
                <span>{film.runningTimeInMinutes ? `${film.runningTimeInMinutes} min` : null}</span>
            </div>
        </div>
    )
}

export default Card;
