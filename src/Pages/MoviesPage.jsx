import { useEffect } from "react"
import { useState } from "react";
import AllMoviesDetails from "./AllMoviesDetails";
import Search from "../Components/Search";
const MoviesPage = ()=> {
    const [movies, setMovies] = useState([])
    
    async function getMovies() {
        try{
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=bd5de89b9e82b5b22c882427a34369fa");
            const data = await response.json();
            setMovies(data)
        }catch(error){console.log("The end", error)}
    }
    
    useEffect(()=>{
getMovies()
    }, []) 
    
    return (
        <>
<Search />
{movies.map((movie)=> {return <AllMoviesDetails key={movie.id} movie={movie} setMovies={setMovies} />})}
        </>
    )
}
export default MoviesPage