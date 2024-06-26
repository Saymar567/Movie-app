import AllMoviesDetails from "./AllMoviesDetails";
import { useState, useEffect } from "react";
import supabase from "../Supabase/config";
import { useNavigate } from "react-router-dom";
import callingMovies from "../Supabase/GetData";

function MyList() {
    const [favoriteMovie, setFavoriteMovie] = useState([])
  const [isSupabase, SetIsSupabase] = useState(false)
  const [isFavorite, setIsFavorite] =useState(false)
  const [pressButton, setPressButton] = useState(false)

 const navigate = useNavigate()




    const getFavoriteMovies = async () => {
        const { data, error } = await supabase
            .from("Favorite_movies")
            .select()

        console.log(data);
        /* .order("movieId", {ascending: false})
        .eq("favorite", true) */
        if (error) {
            console.log("no enchiendou", error)
            return
        } else {
            setFavoriteMovie(data)
            return
        }
    }
    
    const removeFromFavorites = async(movieId)=>{
const {data, error} = await supabase
.from("Favorite_movies")
.delete()
.eq("movieId", movieId);
if(error){
    console.log("another error", error)
    return
}else{
    console.log("removed at last!", data)
setFavoriteMovie((prev)=>
    prev.filter((movie)=> movie.movieId !== movieId))
}   
}
    const toggleFavorite = async(movie) =>{
const isFavorite= favoriteMovie.some((favMovie)=> favMovie.movieId===movie.movieId);
if(isFavorite){
    await removeFromFavorites(movie.movieId)
}
    }
  
    useEffect(() => {
        getFavoriteMovies()
        
    }, [])

    return (
        <div>
<div className="wtf-section">

            {favoriteMovie.map((movie) => {
                return (
                    <div>
                   <div className="favorite-movie">
                <p>{movie.title}</p>
                <img src={isSupabase ? (movie.poster_path):`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster" />
                <p>{movie.release_date}</p>
                <button className={`like-btn ${!isFavorite ? 'liked' : ''}`} onClick={()=> toggleFavorite(movie)}>  </button>
                    </div> 
                    
                
</div>

)})}
</div>
<div className="button3"><button onClick={()=> navigate(-1)} >Go Back</button> </div>
        </div>


  
    )

}
export default MyList