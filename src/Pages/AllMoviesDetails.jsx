import "../Styles/App.css"
function AllMoviesDetails({movies}) {
    const {movieId} =useParams();
    const movieCard = movies.find((movie)=> {
        return movie.id === movieId
    })
    return(
        <section key={movieCard.id} className="card-container">
        <h1>{movieCard.title} </h1>
        <img src={`https://image.tmdb.org/t/p/w500/${movieCard.poster_path}`} alt={movieCard.original_title} />
        <p>{movieCard.release_date} </p>
        <p>{movieCard.overview}</p>
        <Link to="/"><button>Go back</button></Link>
        </section>
    )
}
export default AllMoviesDetails