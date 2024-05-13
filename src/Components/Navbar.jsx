import "../Styles/Navbar.css"
import "../Styles/App.css"
import { Link } from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            
                <Link to="/">Home</Link>
                <Link to="/Movies">Data</Link>
                <Link to="/MyList">My List</Link>
                <Link to="/Form"></Link>

       
        </div>
        </>
    )
}
export default Navbar