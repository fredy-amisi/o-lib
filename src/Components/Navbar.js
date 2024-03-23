import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../Css/styling.css'

const Navbar=()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return(
    <header>
      <nav>
      <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? "bar1 change" : "bar1"}></div>
          <div className={isMenuOpen ? "bar2 change" : "bar2"}></div>
          <div className={isMenuOpen ? "bar3 change" : "bar3"}></div>
        </div>
        <ul className={isMenuOpen ? "nav-links show" : "nav-links"}>
        <li><Link to="/Index" ><span>HOME</span></Link></li>
               <li><Link to="/About" ><span>ABOUT</span></Link></li>
               <li><Link to="/Services" > <span>SERVICES</span></Link></li>
               <li><Link to="/Courses" > <span>COURSES</span></Link></li>
               <li><Link to="/Teachers" > <span>TEACHERS</span></Link></li>
               <li><Link to="/Gallery" > <span>GALLERY</span></Link></li>
               <li><Link to="/Blog" > <span>BLOG</span></Link></li>
               <li><Link to="/Contact" > <span>CONTACT</span></Link></li>
               <li><Link to="/Login" > <span>LOGIN</span></Link></li>
               <li><Link to="/Signup" > <span>SIGNUP</span></Link></li>
        </ul>
      </nav>
    </header>
  )

    
      
    
} 
export default Navbar;