import { Link } from "react-router-dom"
import Search from "./Search"

function NavBar({movieSearch, setSearch}) {
    return (
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/add'>Add Movie/Tv Show</Link>
                <Search movieSearch={movieSearch} setSearch={setSearch} 
 />
            </nav>

        
    )

}

export default NavBar

