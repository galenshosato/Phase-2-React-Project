import { Link } from "react-router-dom"
import Search from "./Search"

function NavBar({movieSearch, setSearch, type, newMovie, show}) {

    const renderType = (type === 'movie' ? <Link to={`/movies/${newMovie.id}`}>Movie</Link> : <Link to={`/tvShow/${show.id}`}>Tv Show</Link>)

    return (
        <header>
            <nav>
                <span className="spanNav"><Link to='/'>Home</Link></span>
                <span className="spanNav">{type ? renderType : null}</span>
                <span className="spanNav"><Link to='/add'>Add Movie/Tv Show</Link></span>
                <Search movieSearch={movieSearch} setSearch={setSearch}/>
            </nav>
            
        </header>

        
    )

}

export default NavBar

