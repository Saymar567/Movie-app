import { Link } from "react-router-dom";
const Footer = ()=>{
    const newDate = new Date();
    
    return (
            <footer className="footer">
               <div>
                <a href="https:/twitter.com" target="_blank"><img src="/src/images/icons8-twitter-25.png" alt="twitter-logo" /> </a>
               <a href="https:/facebook.com" target="_blank"> <img src="/src/images/icons8-facebook-25.png" alt="" /></a>
                <a href="https:/instagram.com"  target="_blank"><img src="/src/images/icons8-instagram-25.png" alt="" /></a>
                </div> 
       Video-Club Santutxu ©️ {newDate.getFullYear()}
     
       <Link to="/contactForm"><button>Contact me</button></Link>
        </footer>
    )
}


export default Footer