import "../Styles/Navbar.css"
function AllMoviesDetails({movie, setMovies}) {
    return(
        <div className="details">
        <h1>{movie.title} </h1>
        <img src={movie.poster_path} alt={movie.original_title} />
        <p>{movie.release_date} </p>
        </div>
    )
}
export default AllMoviesDetails