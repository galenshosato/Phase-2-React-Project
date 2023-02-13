import React, {useState, useEffect} from "react";
import Container from "./Container";
import Header from "./Header";

function App() {
    const [movieInfo, setMovies] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/MovieList')
            .then(resp => resp.json())
            .then(data => setMovies(data))
            
    },[])
    

    return(
        <div>
            <Header />
            <Container movieInfo={movieInfo} />
        </div>
    )
}

export default App;
