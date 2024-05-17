import { useState } from "react"


const ContactForm = ()=>{
    const newRequest = {
        name: "",
        surname: "",
        message: "",
        mail: ""
    }
    const handleSubmit = (event)=>{
        event.preventDefault();

    }
// careful with the format of the code, it is important to have a good format to make it easier to read and understand
    return(
        <div>
            <form className="form-content" onChange={handleSubmit} action="">
<label htmlFor="Name">Name: </label>
<input type="text" name="name" />
<label htmlFor="Surname">Surname: </label>
<input type="text" name="surname" />
<label htmlFor="Message">Message: </label>
<input type="text" name="message"/>
<label htmlFor="Mail">Mail</label>
<input type="email" name="mail" />
<button >Send</button>
            </form>
        </div>
    )
}
export default ContactForm