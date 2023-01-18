import { Link } from 'react-router-dom';
import LoggedInAs from '../functions/LoggedInAs';
import new_mnNPS_logo_contrast_c from '../images//new_mnNPS_logo_contrast_c.png';


const Footer = () => {
    return(
        <footer>          
            <nav>
                <ul>
                     <Link to="/">
                        <img src={new_mnNPS_logo_contrast_c} alt="myNPS" className="contrastLogo" style={{ width: '80px', }} />
                      </Link>
                    <>Contact us</>
                </ul>
            </nav>
            <LoggedInAs/>
        </footer>
    )
}
export default Footer