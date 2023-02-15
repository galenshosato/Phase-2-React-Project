import React from "react";
import Card from "./Card.js"


function Container ({movieInfo, movieSearch, setMovie}) {

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

    return( 
        <div id='Categories' >
            
            <div  id="TVshows" >
                {filteredFilms.map(film =>{
                    if(film.titleType === 'tvSeries'){
                        return(
                            <div>
                                <Card key={film.id} film={film} />
                            </div>)}
                        })}
            </div>
            <div id='Movies' >    
                {filteredFilms.map(film =>{
                    if(film.titleType === 'movie'){
                        return(
                            <div>
                                <Card key={film.id} film={film}/>
                            </div>)}
                        })}
            </div>
        </div>
    )
}

export default Container;
