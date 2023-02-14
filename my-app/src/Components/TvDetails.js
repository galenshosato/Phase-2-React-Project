import React from "react";

function TvDetails ({show}) {
    const url0 = `https://www.imdb.com${show.principals[0].id}`
    const url1 = `https://www.imdb.com${show.principals[1].id}`
    const url2 = `https://www.imdb.com${show.principals[2].id}`
    const episodeUrl = `https:www.imdb.com${show.nextEpisode}`

    return (
        <div>
            <img src={show.image.url} alt={show.title}/>
            <div>
                <h2>{show.title}</h2>
            </div>
            <div>
                <span>Episodes: {show.numberOfEpisodes}</span>
                <span>Runtime: {show.runningTimeInMinutes} min</span>
                <span>Started: {show.seriesStartYear}</span>
                {show.seriesEndYear ? <span>Ended: {show.seriesEndYear}</span> : <span>Next Episode: {episodeUrl}</span>}

            </div>
            <div>
                <h4>Actors: 
                    <a href={url0}>{show.principals[0].name}</a>
                    <a href={url1}>{show.principals[1].name}</a>
                    <a href={url2}>{show.principals[2].name}</a>
                </h4>
            </div>
        </div>
        
    )

}
export default TvDetails