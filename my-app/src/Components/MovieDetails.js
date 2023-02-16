import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

function MovieDetails ({newMovie, setNewMovie}) {
    const [isLoaded, setIsLoaded] = useState(false)

    const {id} = useParams()
    
    
    useEffect(() => {
        fetch(`http://localhost:4000/MovieList/${id}`)
        .then(resp => resp.json())
        .then(data => {
            setNewMovie(data)
            setIsLoaded(true)
        })
    }, [id])


    if (!isLoaded) {
        return <h1>Getflix</h1>
    }

    
    const movieHour = Math.floor(parseInt(newMovie.runningTimeInMinutes) / 60)
    const movieMin = Math.floor(parseInt(newMovie.runningTimeInMinutes % 60))
    const url0 = `https://www.imdb.com${newMovie.principals[0].id}`
    const url1 = `https://www.imdb.com${newMovie.principals[1].id}`
    const url2 = `https://www.imdb.com${newMovie.principals[2].id}`

    return (
        <div>
            <img src={newMovie.image.url} alt={newMovie.title}/>
            <div>
                <h2>{newMovie.title}</h2>
            </div>
            <div>
                {newMovie.year ? <span>Year: {newMovie.year}</span> : null}
                {newMovie.runningTimeInMinutes ? <span>Runtime: {movieHour}h {movieMin}min</span> : null}
            </div>
            <div>
                <h4>Actors: 
                    <a href={url0} target="_blank">{newMovie.principals[0].name}</a>
                    <a href={url1} target="_blank">{newMovie.principals[1].name}</a>
                    <a href={url2} target="_blank">{newMovie.principals[2].name}</a>
                </h4>
            </div>
            <div>
                <i>{newMovie.description}</i>
            </div>
        </div>
        
    )

}

export default MovieDetails