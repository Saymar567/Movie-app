import { Link } from "react-router-dom";
const Footer = ()=>{
    const newDate = new Date();
    
    return (
            <footer className="footer">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
       Video-Club Santutxu ©️ {newDate.getFullYear()}
     
       <Link to="/contactForm"><button>Contact me</button></Link>
        </footer>
    )
}


export default Footer