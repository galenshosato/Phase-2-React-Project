import React from "react"

function MovieDetails ({movie}) {
    const movieHour = Math.floor(parseInt(movie.runningTimeInMinutes) / 60)
    const movieMin = Math.floor(parseInt(movie.runningTimeInMinutes % 60))
    const url0 = `https://www.imdb.com${movie.principals[0].id}`
    const url1 = `https://www.imdb.com${movie.principals[1].id}`
    const url2 = `https://www.imdb.com${movie.principals[2].id}`

    return (
        <div>
            <img src={movie.image.url} alt={movie.title}/>
            <div>
                <h2>{movie.title}</h2>
            </div>
            <div>
                <span>Year: {movie.year}</span>
                <span>Runtime: {movieHour}h {movieMin}min</span>
            </div>
            <div>
                <h4>Actors: 
                    <a href={url0}>{movie.principals[0].name}</a>
                    <a href={url1}>{movie.principals[1].name}</a>
                    <a href={url2}>{movie.principals[2].name}</a>
                </h4>
            </div>
        </div>
        
    )

}

export default MovieDetails