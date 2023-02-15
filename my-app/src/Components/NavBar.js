import { Link } from "react-router-dom"
import Search from "./Search"

function NavBar() {
    return (
            <nav>
                <Link to='/'>Home</Link>
                {/* <Link>Movie</Link>
                <Link>Tv Show</Link> */}
                <Link to='/add'>Add Movie/Tv Show</Link>
                
            </nav>
        
    )

}

export default NavBar

