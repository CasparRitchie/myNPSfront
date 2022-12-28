import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>

        <a href="/">Home</a>
        <a href="/surveys/ShowChart/">View charts</a>
        <Link to="/surveys/create">Submit a survey</Link>
        <Link to="/surveys">View a list of surveys</Link>
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
