import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./Components/Container";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import MovieDetails from "./Components/MovieDetails";

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
            <NavBar />
            <Switch>
                <Route exact path='/add'>
                    <Form setMovies={setMovies} />
                </Route>
                <Route path='/movies/:id'>
                    <MovieDetails />
                </Route>
                <Route  exact path='/'>
                    <Container movieInfo={movieInfo} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
