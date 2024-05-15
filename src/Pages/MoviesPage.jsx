import { useEffect } from "react"
import { useState } from "react";
import AllMoviesDetails from "./AllMoviesDetails";
import Search from "../Components/Search";
import "../Styles/App.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import supabase from "../Supabase/config";
const MoviesPage = ({ movies, setMovies }) => {
    const { q } = useParams();
    const createPages = () => {
        const currentPage = Number(q);
        const arrayofPages = [-2, -1, q, 1, 2];
        return arrayofPages.map((each) => {
            if (currentPage + each > 0 && each + currentPage < 469 && each !== q) {
                return (
                    <>
                        <Link key={currentPage + each} to={`/movies/${each + currentPage}`}>{each + currentPage}
                        </Link>

                    </>
                )

            }else if(each == currentPage){
                return <span>{currentPage}</span>
            }
        })
    }
    
    const callingMovies = async ()=>{
      const {data, error} = await supabase.from("Movies").select();
      if(error) {
        console.log("WTF is going on", error)
      } else {
        console.log("Data fetch-a, good cheese")
        return data
      }
    }
    async function getMovies() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_MOVIEBASE_KEY}&page=${q}`);
            const userMovies = await callingMovies()
            // add the supabase call for the Movies table
            // store it in a variable (also await)
            // setMovies([...data.results, ...variableOfSupabase])
            console.log(userMovies)
            const data = await response.json();
            setMovies([...userMovies, ...data.results])
        
        } catch (error) { console.log("The end", error) }
    }

    useEffect(() => {
        getMovies()
    }, [q])


    return (
        <div className="section-card">
            {movies.map((movie) => {
                return (
                    <Link  to={`/movies/details/${movie.id}`}>
                   <div key={movie.id}>
                        
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                    </div>
                        </Link>
                )
            })}
            <section className="subsection">
                {q >= 2 && (<div><Link to={`/movies/1`}><button>First page</button></Link> </div>)}
                <a className="pages">{createPages()}</a>
                {q < 469 && (<div><Link to={`/movies/469`}><button>Last Page</button></Link> </div>)}
            </section>
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