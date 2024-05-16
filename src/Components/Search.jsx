import { useState, useEffect } from "react"

function Search() {
           // en el input, onChange= () => event.target.value (handleSearch), con un filter y luego un includes
//if searchvalue === ""
    const [q, setQ] = useState("")
    const [searchParam] = useState(["title"])

useEffect(()=>{
    setQ()
})

    return(
        <>
 <div>
    <div>
        <label htmlFor="search-form">
            <input type="search" name="search-form" value={q} onChange={(event)=> setQ(event.target.value)} />
            
        </label>
    </div>
 </div>
        </>
    )
}
export default Search