import { useParams } from "react-router-dom"
import callingMovies from "../Supabase/GetData"
import { useEffect } from "react"
import { useState } from "react"
function EditForm() {
    const {movieId} =useParams()
    
    const filmEdited = {
        title: "",
        poster_path: "",
        release_date: "",
        overview: ""
    }
    const [editFilm, setEditFilm] = useState(filmEdited)

    const handleInput = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        setEditFilm({ ...editFilm, [field]: value })
    }

    useEffect(()=>{
        callingMovies(movieId)
    })

    const editMovie = async () => {
        const { error } = await (supabase)
            .from("Movies")
            .update({ id: movieCard.id, title: movieCard.title, poster_path: movieCard.poster_path, release_date: movieCard.release_date })
            .eq("id", movieCard.id)
        if (error) {
            console.log("qué collons està passant", error)
        } else {
            setEditFilm()

        }
    }

    return (
        <>
            <div>
                <form className="form-content" onSubmit={editMovie} action="">
                    <label htmlFor="title">Name </label>
                    <input onChange={handleInput} value={filmEdited.title} type="text" name="title" />
                    <label htmlFor="release_date">Release date </label>
                    <input onChange={handleInput} value={filmEdited.release_date} type="number" name="release_date" />
                    <label htmlFor="overview">Overview </label>
                    <textarea onChange={handleInput} value={filmEdited.overview} type="text" name="overview" />
                    <label htmlFor="poster_path">Poster</label>
                    <input onChange={handleInput} value={filmEdited.poster_path} type="text" name="poster_path" />
                    <button style={{ width: 50 }}>Edit film</button>
                </form>
            </div>
        </>
    )
}
export default EditForm