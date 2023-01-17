import {FaBars, FaTimes} from "react-icons/fa"; // importation des icônes pour les boutons de navigation
import {useRef} from "react"; // importation de la fonction useRef de React pour la gestion des références de DOM
import { Link } from 'react-router-dom'; // importation de Link pour les liens de navigation
import new_mnNPS_logo_contrast_c from '../images//new_mnNPS_logo_contrast_c.png'; // importation de l'image pour le logo de l'application

function Navbar() {
const navRef = useRef(); // déclaration de la référence de l'élément de navigation

const showNavbar = () => {
navRef.current.classList.toggle("responsive_nav"); // toggle la classe "responsive_nav" pour afficher ou masquer la navigation
}

return (
<header>
<nav ref={navRef}>

      <Link to="/">
    <img src={new_mnNPS_logo_contrast_c} alt="myNPS" className="contrastLogo" style={{ width: '80px', }} />
    </Link>
        <a href="/surveys/ShowChart/">Charts</a>
        <Link to="/surveys/create">New survey</Link>
        <Link to="/surveys">Surveys</Link>
        <Link to ="/login">Log in</Link>
        <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/> {/* Utilisation de l'icône FaTimes pour le bouton de fermeture de la navigation */}
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/> {/* Utilisation de l'icône FaBars pour le bouton d'ouverture de la navigation */}
      </button>
    </header>
  )
}
export default Navbar




