import { Link } from "react-router-dom"
import Search from "./Search"

function NavBar({movieSearch, setSearch, type, newMovie, show}) {

    const renderType = (type === 'movie' ? <Link to={`/movies/${newMovie.id}`}>Movie</Link> : <Link to={`/tvShow/${show.id}`}>Tv Show</Link>)

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                {type ? renderType : null}
                <Link to='/add'>Add Movie/Tv Show</Link>
            </nav>
            <div>
                <Search movieSearch={movieSearch} setSearch={setSearch}/>
            </div>
        </header>

        
    )

}

export default NavBar

