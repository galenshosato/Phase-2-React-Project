import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function TvDetails ({show, setShow, setType}) {

    const [isLoaded, setIsLoaded] = useState(false)

    const {id} = useParams()
    
    
    useEffect(() => {
        fetch(`http://localhost:4000/MovieList/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setShow(data)
            setIsLoaded(true)
            setType('tv')
        })
    }, [id])


    if (!isLoaded) {
        return <h1>Getflix</h1>
    }

    const url0 = `https://www.imdb.com${show.principals[0].id}`
    const url1 = `https://www.imdb.com${show.principals[1].id}`
    const url2 = `https://www.imdb.com${show.principals[2].id}`
    const episodeUrl = `https://www.imdb.com${show.nextEpisode}`
    const modUrl = `imdb.com${show.nextEpisode}`
    const endYear = show.seriesEndYear ? <span>Ended: {show.seriesEndYear}</span> : <span>Next Episode: <a href={episodeUrl} target= "_blank">{modUrl}</a></span>

    return (
        <div>
            <img src={show.image.url} alt={show.title}/>
            <div>
                <h2>{show.title}</h2>
            </div>
            <div>
                <span>Episodes: {show.numberOfEpisodes}</span>
                <span>Runtime: {show.runningTimeInMinutes} min</span>
                {show.seriesStartYear ? <span>Started: {show.seriesStartYear}</span> : null}
                {show.seriesStartYear ? endYear : null}

            </div>
            <div>
                <h4>Actors: 
                    <a href={url0} target="_blank">{show.principals[0].name}</a>
                    <a href={url1} target="_blank">{show.principals[1].name}</a>
                    <a href={url2} target="_blank">{show.principals[2].name}</a>
                </h4>
            </div>
        </div>
        
    )

}
export default TvDetails