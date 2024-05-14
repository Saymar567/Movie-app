import { useState } from "react";
const createFilm = {
    name: "",
        year: "",
        overview: "",
        image: ""
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
/*const {data, error} = await database.from("nombre de la base de datos").insert([newFilm]);
if (error){
    console.log("error creating the new film", error);
    return
} else{
    console.log("Film created!");
    setNewFilm(createFilm)
} */
    }
    return(
        <>
   <div>
            <form className="form-content" onSubmit={handleSubmit} action="">
<label htmlFor="Name">Name </label>
<input onChange={handleInput} value={newFilm.title} type="text" name="name" />
<label htmlFor="year">Year </label>
<input onChange={handleInput} value={newFilm.release_date} type="number" name="number" />
<label htmlFor="Message">Overview </label>
<input onChange={handleInput} value={newFilm.overview} type="text" name="message" style={{height: 60, }}/>
<label htmlFor="Image">Poster</label>
<input onChange={handleInput} value={newFilm.poster_path} type="image" name="image" />
<button style={{width: 50}}>Create film</button>
            </form>
        </div>
        </>
    )
}
export default FormPage