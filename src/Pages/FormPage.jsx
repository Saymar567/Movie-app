
function FormPage(){
    const newFilm = {
        name: "",
        year: "",
        overview: "",
        image: ""
    }
    const handleSubmit= (event)=>{
        event.preventDefault()
    }
    return(
        <>
   <div>
            <form className="form-content" onChange={handleSubmit} action="">
<label htmlFor="Name">Name </label>
<input type="text" name="name" />
<label htmlFor="year">Year </label>
<input type="number" name="number" />
<label htmlFor="Message">Overview </label>
<input type="text" name="message"/>
<label htmlFor="Image">Poster</label>
<input type="image" name="image" />
<button>Send</button>
            </form>
        </div>
        </>
    )
}
export default FormPage