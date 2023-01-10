import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import { Link } from 'react-router-dom';
import new_mnNPS_logo_contrast_c from '../images//new_mnNPS_logo_contrast_c.png';


function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>

      <Link to="/">
    <img src={new_mnNPS_logo_contrast_c} alt="myNPS" className="contrastLogo" style={{ width: '80px', }} />
  </Link>
        <a href="/surveys/ShowChart/">View charts</a>
        <Link to="/surveys/create">Submit a survey</Link>
        <Link to="/surveys">View surveys</Link>
        <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  )
}

export default Navbar
