import supabase from "./config";
const callingMovies = async (movieId) => {
    try {

        const { data, error } = await supabase.from("Movies").select().match({ id: movieId });
        if (error) {
            console.log("WTF is going on", error)
        } else {
            console.log("Data fetch-a, good cheese")
            return data
        }
    } catch (error) {
        console.log(error)
    }
}

export default callingMovies