import AllMoviesDetails from "./AllMoviesDetails";
import { useState } from "react";
function MyList({movies}) {
    
    const [likedFilm, setLikedFilms] = useState([]);
    const toggleButton = (movies) =>{
        if(likedFilm.includes(movies)) {
            return
        } else {
            setLikedFilms(...likedFilm, movies)
        }
    }
   
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
                        </section>)
                }
            </>
        )
    
}
export default MyList