import React, {useState, useEffect} from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";

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
            <Form setMovies={setMovies} />
        </div>
    )
}

export default App;
