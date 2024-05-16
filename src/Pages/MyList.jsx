import AllMoviesDetails from "./AllMoviesDetails";
import { useState, useEffect } from "react";
import supabase from "../Supabase/config";
function MyList() {
const [favoriteMovie, setFavoriteMovie] = useState([])

const getFavoriteMovie =async()=> {
        const {data, error} = await supabase
        .from("movies")
        .select()
        .order("movieId", {ascending: false})
        .eq("favorite", true)
if(error){
    console.log("no enchiendou", error)
    return
}else{
    setFavoriteMovie(data)
    return
}
    }

    useEffect(()=>{
        getFavoriteMovie()
    }, [])

   return (
            <>
             
             {favoriteMovie.map((movie)=>{
                <p>{movie.title}</p>
             })}
            </>
        )
    
}
export default MyList