import React from "react";
import { useHistory } from "react-router-dom";

function Form ({setMovies, setMovieLoad}) {
    const history = useHistory()

    function actorHandle (array) {    
    let words = array.split(',')
    let wordsArray = []
    let idArray = ["/name/nm5512500", "/name/nm8994451", "/name/nm6459603"]
    for (let i = 0; i < words.length; i++) {
        wordsArray.push({
            name: words[i],
            id: idArray[i]
        })
    }

    return wordsArray
 }

 

    function handleSubmit (event) {
        event.preventDefault()
        setMovieLoad(prev => !prev)
        let newMovie = {
            title : event.target.title.value,
            image : {
                url : event.target.image.value
            },
            titleType: event.target.type.value,
            principals : actorHandle(event.target.actors.value),
            description : event.target.description.value
        }

        fetch('http://localhost:4000/MovieList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        .then(resp => resp.json())
        .then(data => {
            setMovies(prev => [...prev, data])
            setMovieLoad(true)
            history.push('/')
        })

        
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type='text'
                    name='title'
                    placeholder="Enter title..."
                />
            </div>
            <div>
                <input 
                    type='text'
                    name='image'
                    placeholder="Enter poster url..."
                />
            </div>
            <div>
                <input
                    type='radio'
                    name='type'
                    value='movie'
                />
                <label>Movie</label>
            </div>
            <div>
                <input
                    type='radio'
                    name='type'
                    value='tvSeries'
                    />
                <label>Tv Show</label>
            </div>
            <div>
                <input 
                    type='text'
                    name='actors'
                    placeholder="Enter actors"
                />
            </div>
            <div>
                <input 
                    type='text'
                    name='description'
                    placeholder="Description..."
                />
            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>    
        </form>
    )

}

export default Form