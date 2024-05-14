import { useState } from "react";
import supabase from "../Supabase/config";
const createFilm = {
    title: "",
        release_date: "",
        overview: "",
        poster_path: "",
        id: Math.floor(Math.random() * 1000000000)
    }

function FormPage(){
    const [newFilm, setNewFilm] = useState(createFilm)
    
    const handleInput = (event)=>{
        const field = event.target.name;
        const value = event.target.value;

        setNewFilm({
            ...newFilm, [field]: value,
        })
    };
    
    const handleSubmit= async (event)=>{
        event.preventDefault();
const {data, error} = await supabase.from("Movies").insert([newFilm]);
if (error){
    console.log("error creating the new film", error);
    return
} else{
    console.log("Film created!");
    setNewFilm(createFilm)
} 
    }
    return(
        <>
   <div>
            <form className="form-content" onSubmit={handleSubmit} action="">
<label htmlFor="title">Name </label>
<input onChange={handleInput} value={newFilm.title} type="text" name="title" />
<label htmlFor="release_date">Release date </label>
<input onChange={handleInput} value={newFilm.release_date} type="number" name="release_date" />
<label htmlFor="overview">Overview </label>
<textarea onChange={handleInput} value={newFilm.overview} type="text"  name="overview"/>
<label htmlFor="poster_path">Poster</label>
<input onChange={handleInput} value={newFilm.poster_path} type="text" name="poster_path" />
<button style={{width: 50}}>Create film</button>
            </form>
        </div>
        </>
    )
}
export default FormPage

// apiarray.concat(supabase.from("Movies"))