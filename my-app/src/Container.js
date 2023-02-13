import React from "react";
import Movie from "./Movie.js"
import TvShow from "./TvShow.js";

function Container ({movieInfo}) {
    let movieList = movieInfo.filter(movie => {
        return movie.titleType === 'movie'
    })

    let tvList = movieInfo.filter(movie => {
        return movie.titleType === 'tvSeries'
    })

    return(
        <div>
            <h2>Movies</h2>
            {movieList.map(movie => {
                return <Movie key={movie.id} movie={movie}/>
            })}
            <h2>Tv Shows</h2>
            {tvList.map(tvShow => {
                return <TvShow key={tvShow.id} tvShow={tvShow} />
            })}
        </div>
    )
}

export default Container;
