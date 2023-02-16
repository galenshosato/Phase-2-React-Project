import React, {useState, useEffect} from "react";

import CollapseE from "./CollapseE"
import { Route, Switch } from "react-router-dom";
import Container from "./Components/Container";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";


function App() {
    const [movieInfo, setMovies] = useState([])
    const [movieSearch, setSearch] = useState('')
    const [show, setShow] = useState(null)
    const [newMovie, setNewMovie] = useState(null)
    const [movieLoad, setMovieLoad] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:4000/MovieList')
            .then(resp => resp.json())
            .then(data => {
                setMovies(data)
                setMovieLoad(true)
            })
    },[])

    return(
        <div>
             <CollapseE/>
            <NavBar movieSearch={movieSearch} setSearch={setSearch} />
            <Switch>
                <Route exact path='/add'>
                    <Form setMovies={setMovies} setMovieLoad={setMovieLoad} />
                </Route>
                <Route path='/movies/:id'>
                    <MovieDetails newMovie={newMovie} setNewMovie={setNewMovie}/>
                </Route>
                <Route path='/tvShow/:id'>
                    <TvDetails setShow ={setShow} show={show} />
                </Route>
                <Route  exact path='/'>
                    <Container movieInfo={movieInfo} movieSearch={movieSearch} movieLoad={movieLoad} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;