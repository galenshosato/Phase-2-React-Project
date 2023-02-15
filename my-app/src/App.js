import React, {useState, useEffect} from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Search from "./Search";
import CollapseE from "./CollapseE"

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
            
            <CollapseE/>
            <Header />
          
            <Container movieInfo={movieInfo} />
            <Form setMovies={setMovies} />
            <Search  movieInfo={movieInfo}/>
        </div>
    )
}

export default App;