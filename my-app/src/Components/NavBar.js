import { Link } from "react-router-dom"
import Search from "./Search"

function NavBar({movieSearch, setSearch}) {
    return (
            <nav>
                <Link to='/'>Home</Link>
                {/* <Link>Movie</Link>
                <Link>Tv Show</Link> */}
                <Link to='/add'>Add Movie/Tv Show</Link>
                <Search setSearch={setSearch} movieSearch={movieSearch} />
            </nav>
        
    )

}

export default NavBar

