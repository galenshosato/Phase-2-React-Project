import React from "react";
import Card from "./Card.js"


function Container ({movieInfo, movieSearch, movieLoad}) {
    

    const sortedMovieInfo = movieInfo.sort((film_A, film_B) => {
        if(film_A.titleType.toLowerCase() > film_B.titleType.toLowerCase()){
            return 1;
        }
        else if(film_A.titleType.toLowerCase() < film_B.titleType.toLowerCase()){
            return -1;
        }
        else{
            return 0;
        }
    })

    const filteredFilms = sortedMovieInfo.filter(films => films.title.toLowerCase().includes(movieSearch.toLowerCase()))

    if (!movieLoad) {
        return <h1>Getflix</h1>
     }

    return( 
        <div id='Categories' >
            
            <div  id="TVshows" >
                <h3>TV Shows</h3>
                <div id='TVshowNavBar'>
                {filteredFilms.map(film =>{
                    if(film.titleType === 'tvSeries'){
                        return(
                            <div id = "card">
                                <Card key={film.id} film={film} />
                            </div>)}
                        })}
                </div>
            </div>
            <div id='Movies' >   
                <h3>Movies</h3>
                <div id='MovieNavBar'>
                    {filteredFilms.map(film =>{
                        if(film.titleType === 'movie'){
                            return(
                                <div id = "card">
                                    <Card key={film.id} film={film}/>
                                </div>)}
                        })}
                </div>
            </div>
            <div id='Galen' >   
                <h3>Galen Sato's Featured Films</h3>
                <div id='Galen_nav_bar'>
                    {filteredFilms.map(film =>{
                        if(film.titleType === "Galens_movies"){
                            return(
                                <div id = "card">
                                    <Card key={film.id} film={film}/>
                                </div>)}
                        })}
                </div>
            </div>
            <div id='SerialKillers' >   
                <h3>Serial Killers</h3>
                <div id='SerialKiller_navbar'>
                    {filteredFilms.map(film =>{
                        if(film.titleType === "Serial_Killers"){
                            return(
                                <div id = "card">
                                    <Card key={film.id} film={film}/>
                                </div>)}
                        })}
                </div>
            </div>
        </div>
    )
}

export default Container;
