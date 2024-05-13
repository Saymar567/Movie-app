function AllMoviesDetails({movie, setMovies}) {
    return(
        <>
        <h1>{movie.original_title} </h1>
        <img src={movie.poster_path} alt={movie.original_title} />
        <p>{movie.release_date} </p>
        </>
    )
}
export default AllMoviesDetails