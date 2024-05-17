import { Link } from "react-router-dom";
import Twitter from "../Images/icons8-twitter-25.png"
import Facebook from "../Images/icons8-facebook-25.png"
import Instagram from "../Images/icons8-instagram-25.png"

const Footer = ()=>{
    const newDate = new Date();
    // please format your code before pushing it to the repository, this makes it easier to read and understand
    return (
            <footer className="footer">
               <div>
                <a href="https://twitter.com" target="_blank"><img src={Twitter} alt="twitter-logo" /> </a>
               <a href="https://facebook.com" target="_blank"> <img src={Facebook} alt="" /></a>
                <a href="https://instagram.com"  target="_blank"><img src={Instagram} alt="" /></a>
                </div> 
       Video-Club Santutxu ©️ {newDate.getFullYear()} {/* Good detail */}
     
       <Link to="/contactForm"><button>Contact me</button></Link>
        </footer>
    )
}


export default Footer