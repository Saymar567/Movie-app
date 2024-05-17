import { useEffect } from "react";
import "../Styles/App.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "../Supabase/config";
import FormPage from "./FormPage"; // this import is not being used
import MyList from "./MyList"; // this import is not being used
import EditForm from "../Components/EditForm"; // this import is not being used
import callingMovies from "../Supabase/GetData";

function AllMoviesDetails({ newFilm }) {
    const [movieCard, setMovie] = useState(null)
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [pressButton, setPressButton] = useState(false)
    // create a state variable to check if its supabase or not
    const [isSupabase, setIsSupabase] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const displayEditFilm = () => {
        navigate(`/editForm/${movieId}`)
    }



    const deleteMovie = async () => {
        const { error } = await (supabase)
            .from("Movies")
            .delete()
            .eq("id", movieCard.id)
        if (error) {
            console.log("me cagonmivida", error)
        } else {
            setMovie()
        }

    }



    const addToFavorites = async () => {
        try {
            const { data, error } = await supabase.from("Favorite_movies").insert([{ movieId: movieCard.id, title: movieCard.title, poster_path: movieCard.poster_path, release_date: movieCard.release_date }])
            if (error) {
                console.log(error, "error in adding to favorites")
            } else {
                console.log("film added to favorites", data)
                setIsFavorite(true)
            }
        } catch (error) {
            console.log("error trying to add the film", error)
        }
        getOneMovie()
    }

const removeFromFavorites = async()=> {
    // the implementation of the async/await is correct, but the try/catch block is not necessary because you are already destructuring the response and the error
    try{
        const {data, error} = await supabase
        .from("Favorite_movies")
        .delete()
        .eq("movieId", movieCard.id);
        if(error){
            console.log(error, "error removing from favorites")
        } else {
            console.log("successfully removed for god's sake")
            setIsFavorite(false)
        }
    }catch(error) {
        console.log(error, "error trying to remove the fu*** thing") // careful with the language 
    }
}

    const toggleButton = () => {
        setPressButton(pressButton);
        if(!isFavorite){
            addToFavorites();

        }else {
            removeFromFavorites()
        }
        
    }

    const getOneMovie = async () => {
        // in this case the try/catch block is necessary because you are making a request to an external API
        // good implementation! 
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

    const checkIfFavorite = async()=>{
try {
    const {data, error} = await supabase
    .from("Favorite_movies")
    .select("*")
    .eq("movieId", movieId);
    if(error){
        console.log("error checking favorites", error)
    }else{
        if(data.length>0){
            setIsFavorite(true)
        }
    }
}catch(error){
    console.log("error checking if favorite", error)
}
    }

    useEffect(() => {
        getOneMovie()
        checkIfFavorite()
    }, [movieId]);

    /*let newPoster = "";
    if(newFilm.poster_path) {
        newPoster = newFilm.poster_path.replace("https://image.tmdb.org/t/p/w500/", "")
        return newPoster
    }*/
    if (!movieCard) {
        return <button onClick={() => navigate(-1)} >Go back</button>
    };
    console.log(movieCard)
    return (
        <>
        
            {
                movieCard && (
                    <section key={movieCard.id} className="card-container">
                        <h1>{movieCard.title} </h1>
                        <img src={isSupabase ? (movieCard.poster_path):`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`} alt={movieCard.original_title} />
                        <button className={`like-btn ${isFavorite ? 'liked' : ''}`} onClick={toggleButton}>  </button>
                        <p>{movieCard.release_date} </p>
                        <p>{movieCard.overview}</p>

                        {movieCard.popularity && (<p>Popularity: {movieCard.popularity}</p>)}
                        {movieCard.vote_count && (<p>Votes: {movieCard.vote_count}</p>)}
                        {movieCard.vote_average && (<p>Average: {movieCard.vote_average}</p>)}

                        <button onClick={() => navigate(-1)} >Go back</button>
                        <br />
                        {isSupabase && <button onClick={deleteMovie}>Delete</button>}
                        {isSupabase && <button onClick={displayEditFilm} style={{ marginTop: 10 }}>Edit</button>}
                    </section>)
            }

        </>
    )
}

export default AllMoviesDetails

