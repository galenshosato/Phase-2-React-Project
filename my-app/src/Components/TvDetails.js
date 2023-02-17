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
        return <h1 id="getflix"> </h1>
    }

    const url0 = `https://www.imdb.com${show.principals[0].id}`
    const url1 = `https://www.imdb.com${show.principals[1].id}`
    const url2 = `https://www.imdb.com${show.principals[2].id}`
    const episodeUrl = `https://www.imdb.com${show.nextEpisode}`
    const modUrl = `imdb.com${show.nextEpisode}`
    const endYear = show.seriesEndYear ? <span>Ended: {show.seriesEndYear}</span> : <span>Next Episode: <a href={episodeUrl} target= "_blank">{modUrl}</a></span>

    return (
        <div className="details">
            <img className="imgDetails" src={show.image.url} alt={show.title}/>
            <div className="detailName">
                <h2>{show.title}</h2>
            </div>
            <div className="detailAtts">
                <span>Episodes: {show.numberOfEpisodes}</span>
                <span>Runtime: {show.runningTimeInMinutes} min</span>
                <ul className="detailList">
                 <li>{show.seriesStartYear ? <span>Started: {show.seriesStartYear}</span> : null}</li>
                 <li>{show.seriesStartYear ? endYear : null}</li>
                </ul>
            </div>
            <div className="actor">
                <h4>Actors</h4> 
                     <ul className='actorList' >
                        <li><a href={url0} target="_blank">{show.principals[0].name}</a></li>
                        <li><a href={url1} target="_blank">{show.principals[1].name}</a></li>
                        <li><a href={url2} target="_blank">{show.principals[2].name}</a></li>
                    </ul>
            </div>
            <div className="description">
                <i>{show.description}</i>
            </div>
        </div>
        
    )

}
export default TvDetails