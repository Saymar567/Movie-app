import "../Styles/Navbar.css"
import "../Styles/App.css"
import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
        {/* 
            The use of the fragment is not necessary in this case, you can remove it because the main container is the div
        */}
        <div className="navbar">
           
                <Link to="/">Home</Link>
                <Link to={`/movies/1`}>Database</Link>
                <Link to="/MyList">Favorites</Link>
                <Link to="/Form">Form</Link>

       
        </div>
        </>
    )
}
export default Navbar