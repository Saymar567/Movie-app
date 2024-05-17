import { useParams } from "react-router-dom"
import callingMovies from "../Supabase/GetData"
import { useEffect } from "react"
import { useState } from "react"
import supabase from "../Supabase/config"
function EditForm() {
    const {movieId} =useParams()
    
    const filmEdited = {
        title: "",
        poster_path: "",
        release_date: "",
        overview: ""
    }
    const [editFilm, setEditFilm] = useState(filmEdited) // the name of this variable can be confusing, editFilm can look like a function that modifies the film, but it is just a variable that stores the film that we are going to edit

    const handleInput = (event) => {
        const field = event.target.name;
        const value = event.target.value;

        setEditFilm({ ...editFilm, [field]: value })
    }

    useEffect(()=>{
        callingMovies(movieId)
    })
console.log()
    const editMovie = async (event) => {
        event.preventDefault();
        const { error } = await (supabase)
            .from("Movies")
            .update(editFilm)
            .eq("id", movieId)
        if (error) {
            console.log("qué collons està passant", error) // careful with the language you share with the user/other developers
        } else {
            setEditFilm(filmEdited)

        }
    }

    return (
        <>
            <div>
                <form className="form-content" onSubmit={editMovie} action="">
                    <label htmlFor="title">Name </label>
                    <input onChange={handleInput} value={editFilm.title} type="text" name="title" />
                    <label htmlFor="release_date">Release date </label>
                    <input onChange={handleInput} value={editFilm.release_date} type="number" name="release_date" />
                    <label htmlFor="overview">Overview </label>
                    <textarea onChange={handleInput} value={editFilm.overview} type="text" name="overview" />
                    <label htmlFor="poster_path">Poster</label>
                    <input onChange={handleInput} value={editFilm.poster_path} type="text" name="poster_path" />
                    <button style={{ width: 50 }}>Edit film</button> {/* Inline styling is not recommended in our projects */}
                </form>
            </div>
        </>
    )
}
export default EditForm