<<<<<<< HEAD:my-app/src/Movie.js
// import React from "react";

// function Movie({movie}){
//     return(
//         <div>
//             <h3>{movie.title}</h3>
//             <img src={movie.image.url} alt={movie.title} />
//         </div>
//     )
// }
=======
import React from "react";
import { Link } from "react-router-dom";



function Movie({movie}){

    return(
        <div>
            <h3>{movie.title}</h3>
            <Link to={`/movies/${movie.id}`}> <img src={movie.image.url} alt={movie.title}/></Link>
        </div>
        
    )
}
>>>>>>> bae96ef229bf00d577df36e282f3ffe9e98f949d:my-app/src/Components/Movie.js

// export default Movie;
