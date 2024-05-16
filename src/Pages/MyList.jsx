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

 const toggleButton = () => {
    setPressButton(pressButton);
    addToFavorites();
    setIsFavorite(!isFavorite);
}


const addToFavorites = async () => {
    try {
        const { data, error } = await supabase.from("Favorite_movies").insert([{ movieId: movieCard.id, title: movieCard.title, poster_path: movieCard.poster_path, release_date: movieCard.release_date }])
        if (error) {
            console.log(error, "error in adding to favorites")
        } else {
            console.log("film added to favorites", data)
        }
    } catch (error) {
        console.log("error trying to add the film", error)
    }
    getOneMovie()
}

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
    const getOneMovie = async () => {
        try {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bd5de89b9e82b5b22c882427a34369fa`);
            const data = await response.json();
            //const newPromise = await callingMovies();
            // 
            if (response.ok) {
                setMovie(data)
                // set the isSupabase to false
                setIsSupabase(false)
            } else {
                throw new Error("not taking from TMDB")
            }

        } catch (error) {
            console.log(error, "error from TMDB");
            const supabaseData = await callingMovies(movieId);
            if (supabaseData) {
                setMovie(supabaseData[0])

                // set the variable isSupabase to true
                setIsSupabase(true)
            } else {
                console.log("error from supabase", error);
                setIsSupabase(false)
            }
        }
    }
  
    useEffect(() => {
        getFavoriteMovie()
        
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
                <button className={`like-btn ${isFavorite ? 'liked' : ''}`} onClick={toggleButton}> {!isFavorite && <img className="second-like-btn" src="/src/Images/icons8-me-gusta-24.png"></img>} </button>
                    </div> 
                    
                
</div>

)})}
</div>
<div className="button3"><button onClick={()=> navigate(-1)} >Go Back</button> </div>
        </div>


  
    )

}
export default MyList