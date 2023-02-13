import React, {useState, useEffect} from "react";
import MovieCollection from "./MovieCollection";

function App() {
    const [movieInfo, setMovies] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/MovieList')
            .then(resp => resp.json())
            .then(data => setMovies(data))
            
    },[])
    console.log(movieInfo)

    return(
        <div>
            <MovieCollection movieInfo={movieInfo} />
        </div>
    )
}

export default App;
