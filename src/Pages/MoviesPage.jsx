import { useEffect } from "react"
import { useState } from "react";
import AllMoviesDetails from "./AllMoviesDetails";
import Search from "../Components/Search";
import "../Styles/App.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const MoviesPage = ()=> {
    const [movies, setMovies] = useState([])
    const {q} = useParams()


    async function getMovies() {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=bd5de89b9e82b5b22c882427a34369fa&page=${q}`);
            const data = await response.json();
            setMovies(data.results)
        }catch(error){console.log("The end", error)}
    }
    
    useEffect(()=>{
getMovies()
    }, []) 
    
    return (
       <div className="section-card">
        {movies.map((movie)=>{
            return(
<div key={movie.id}>
<h1>{movie.name}</h1>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
    <Link to={`/movie/${movie.id}`}> <button>Details</button></Link>
</div>
            )
        })}
        
        </div>
    )
    }

{/*movies.map((movie)=> 
(<h1>{movie.name}</h1>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
<p>{movie.movie.release_date}</p>
<Link to={`/movie/${movie.id}`}> <button>Details</button> </Link>
))}        
</div>
<div><Link to={`/Movies/${q}`}><button>Next page</button></Link> </div>
    )
*/}
export default MoviesPage