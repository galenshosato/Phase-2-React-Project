import React, {useState, useEffect} from "react";

import { Route, Switch } from "react-router-dom";
import Container from "./Components/Container"
import Form from "./Components/Form";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import Slider from "./Slider";
import CollapseE from "./CollapseE";


function App() {
    const [movieInfo, setMovies] = useState([])
    const [movieSearch, setSearch] = useState('')
    const [show, setShow] = useState([])
    const [newMovie, setNewMovie] = useState([])
    const [movieLoad, setMovieLoad] = useState(false)
    const [type, setType] = useState(null)

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
            <CollapseE movieSearch={movieSearch} setSearch={setSearch} newMovie={newMovie} show={show} type={type} />
            <Switch>
                <Route exact path='/add'>
                    <Form setMovies={setMovies} setMovieLoad={setMovieLoad} />
                </Route>
                <Route path='/movies/:id'>
                    <MovieDetails newMovie={newMovie} setNewMovie={setNewMovie} setType={setType}/>
                </Route>
                <Route path='/tvShow/:id'>
                    <TvDetails setShow ={setShow} show={show} setType={setType} />
                </Route>
                <Route  exact path='/'>
                    <Container movieInfo={movieInfo} movieSearch={movieSearch} movieLoad={movieLoad} />
                </Route>
            </Switch>
            <Slider/>
        </div>
    )
}

export default App; 