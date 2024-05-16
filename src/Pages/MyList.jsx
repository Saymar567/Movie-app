import AllMoviesDetails from "./AllMoviesDetails";
import { useState, useEffect } from "react";
import supabase from "../Supabase/config";
import { useNavigate } from "react-router-dom";
function MyList() {
    const [favoriteMovie, setFavoriteMovie] = useState([])
const navigate = useNavigate()
    const getFavoriteMovie = async () => {
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

    useEffect(() => {
        getFavoriteMovie()
    }, [])

    return (
        <>

            {favoriteMovie.map((movie) => {
                return (
                    <>
                   <div className="favorite-movie">
                <p>{movie.title}</p>
                <img src={movie.poster_path} alt="poster" />
                <p>{movie.release_date}</p>
                    </div> 
                    
                
</>

            )})}
            <div><button onClick={()=> navigate(-1)} >Go Back</button> </div>
        </>
    )

}
export default MyList