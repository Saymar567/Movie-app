import { useEffect } from "react";
import "../Styles/App.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import supabase from "../Supabase/config";

function AllMoviesDetails() {
    const [movieCard, setMovie] = useState(null)
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [pressButton, setPressButton] = useState(false)
    // create a state variable to check if its supabase or not
    const [isSupabase, setIsSupabase] = useState(false)

    const deleteMovie = async()=>{
        const {error} = await (supabase)
        .from("Movies")
        .delete()
        .eq("id", movieCard.id)
        if(error){
            console.log("me cagonmivida", error)
        } else {
            setMovie()
        }

    }
    /*const deleteMovie = movieId =>{
        const deleteButton = movieCard.filter(movieCard => movieCard.id !== movieId)
        return setMovie(deleteButton) }*/
const toggleButton = () =>{
    setPressButton(!pressButton)
}
    const callingMovies = async () => {
        try{

            const { data, error } = await supabase.from("Movies").select().match({ id: movieId });
            if (error) {
                console.log("WTF is going on", error)
            } else {
                console.log("Data fetch-a, good cheese")
                return data
            }
        }catch(error){
            console.log(error)
        }
    }       
        const getOneMovie = async () => {
            try{
                
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
                
            }catch(error){
                console.log(error, "error from TMDB");
                const supabaseData = await callingMovies();
                if(supabaseData){
                    setMovie(supabaseData[0])
                    
                    // set the variable isSupabase to true
                    setIsSupabase(true)
                }else{
                    console.log("error from supabase", error);
                    setIsSupabase(false)
                }
            }
        }
        useEffect(() => {
            getOneMovie()
        }, [movieId])

        if(!movieCard){
            
            return  <button onClick={() => navigate(-1)} >Go back</button>
        }
        console.log(movieCard)
        return (
            <>
                {
                    movieCard && (
                        <section key={movieCard.id} className="card-container">
                            <h1>{movieCard.title} </h1>
                            <img src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`} alt={movieCard.original_title} />
                           <button className="like-btn" onClick={toggleButton}> {} {pressButton ? (<img className="second-like-btn" src="/src/Images/icons8-me-gusta-24-1.png" alt=""></img>) :(<img src="/src/Images/icons8-me-gusta-24.png" alt="like-btn"></img>)} </button>
                            <p>{movieCard.release_date} </p>
                            <p>{movieCard.overview}</p>

                            {movieCard.popularity && (<p>Popularity: {movieCard.popularity}</p>)}
                            {movieCard.vote_count && (<p>Votes: {movieCard.vote_count}</p>)}
                            {movieCard.vote_average && (<p>Average: {movieCard.vote_average}</p>)}

                            <button onClick={() => navigate(-1)} >Go back</button>
                            <br />
                            {isSupabase && <button onClick={deleteMovie}>Delete</button>}
                        </section>)
                }
            </>
        )
    }

export default AllMoviesDetails