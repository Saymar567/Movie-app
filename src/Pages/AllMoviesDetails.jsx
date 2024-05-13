import { useEffect } from "react";
import "../Styles/App.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
function AllMoviesDetails() {
    const [movieCard, setMovie] = useState(null)
    const { movieId } = useParams();



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
            <p>{movieCard.release_date} </p>
            <p>{movieCard.overview}</p>
            <p>Popularity: {movieCard.popularity}</p>
            <p>Votes: {movieCard.vote_count}</p>
            <p>Average: {movieCard.vote_average}</p>
          <button className="btn-like"> <img src="/src/images/icons8-best-67.png" alt="like button" /> </button>
            <Link to={`/movies/1`}><button>Go back</button></Link>
            </section>)
        }
        </>
    )
}
export default AllMoviesDetails