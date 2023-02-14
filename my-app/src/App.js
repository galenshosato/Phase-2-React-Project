import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./Container";
import NavBar from "./NavBar";
import Form from "./Form";
import MovieDetails from "./MovieDetails";
import TvDetails from "./TvDetails";

function App() {
    const [movieInfo, setMovies] = useState([])

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
                <Route path='/movies/:movieID'>
                    <MovieDetails />
                </Route>
                {/* <Route path='/:id'>
                    <TvDetails />
                </Route> */}
                <Route  exact path='/'>
                    <Container movieInfo={movieInfo} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
