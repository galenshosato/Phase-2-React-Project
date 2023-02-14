import React from "react";

function Form ({setMovies}) {

    function handleSubmit (event) {
        event.preventDefault()
        let newMovie = {
            title : event.target.title.value,
            image : {
                url : event.target.image.value
            },
            titleType: event.target.type.value,
            principals : {
                name: event.target.actors.value
            },
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
        
        setMovies(prev => [...prev, newMovie])

        
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
                    placeholder="Enter a description"
                />
            </div>
            <div>
            <button type='submit'>Submit</button>
            </div>    
        </form>
    )

}

export default Form