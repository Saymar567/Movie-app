import { useEffect } from "react";
import "../Styles/App.css"
import { useParams} from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllMoviesDetails() {
    const [movieCard, setMovie] = useState(null)
    const { movieId } = useParams();
    const navigate = useNavigate()
    

    const getOneMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bd5de89b9e82b5b22c882427a34369fa`);
        const data = await response.json();
        setMovie(data)
    }
    useEffect(() => {
        getOneMovie()
    }, [])
    console.log(movieCard)
    return (
        <>
            {
                movieCard && (
                    <section key={movieCard.id} className="card-container">
                        <h1>{movieCard.title} </h1>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`} alt={movieCard.original_title} />
                        <button className="btn-like"> <img src="/src/images/icons8-best-67.png" alt="like button" /> </button>
                        <p>{movieCard.release_date} </p>
                        <p>{movieCard.overview}</p>
                        
                        {movieCard.popularity && (<p>Popularity: {movieCard.popularity}</p>)}
                        {movieCard.vote_count &&(<p>Votes: {movieCard.vote_count}</p>)}
                        {movieCard.vote_average && (<p>Average: {movieCard.vote_average}</p>)}
                       
                    <button onClick={()=> navigate(-1)} >Go back</button>
                    </section>)
            }
        </>
    )
}
export default AllMoviesDetails