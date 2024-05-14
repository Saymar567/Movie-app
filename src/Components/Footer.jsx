import { Link } from "react-router-dom";
const Footer = ()=>{
    const newDate = new Date();
    
    return (
            <footer className="footer">
               <div>
                <img src="/src/images/icons8-twitter-25.png" alt="twitter-logo" /> 
                <img src="/src/images/icons8-facebook-25.png" alt="" />
                <img src="/src/images/icons8-instagram-25.png" alt="" />
                </div> 
       Video-Club Santutxu ©️ {newDate.getFullYear()}
     
       <Link to="/contactForm"><button>Contact me</button></Link>
        </footer>
    )
}


export default Footer