import Search from "../Components/Search"
import TMDB from "../Images/tmdb-logo.jpg"
function HomePage(){
    return(
       <>
       <div className="homepage">
        <h1>VIDEO-CLUB SANTUTXU</h1>
         <img src={TMDB} alt="tmdb-logo" />
        <div className="section-h2">

        <h2>Welcome</h2>
        <h2>Benvinguts</h2>
        <h2>Ongi etorri</h2>
        <h2>Bienvenidos</h2>
        <h2>Benvenutti</h2>
        </div>
        </div>
        <div>
        <Search />
        </div>
       </>
    )
}
export default HomePage