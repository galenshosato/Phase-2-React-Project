import React, {useState, useEffect} from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Search from "./Search";


function App() {
    const [movieInfo, setMovies] = useState([])
    const [movieSearch, setSearch] = useState('')

    useEffect(()=>{
        fetch('http://localhost:4000/MovieList')
            .then(resp => resp.json())
            .then(data => setMovies(data))
            
    },[])

    return(
        <div>
            <Header />
            <Container movieInfo={movieInfo} movieSearch={movieSearch} />
            <Form setMovies={setMovies} />
            <Search movieSearch={movieSearch} setSearch={setSearch} />
        </div>
    )
}

export default App;
