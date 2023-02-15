import React from "react";

function Card({film}){
    {console.log(film.title)}
    return(
        <div>
            <h3>{film.title}</h3>
            <img src={film.image.url} alt={film.title} />
        </div>
    )
}

export default Card;