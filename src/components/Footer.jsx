import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>          
            <nav>
                <ul>
                <h1>myNPS</h1>
                    <li>Contact us</li>
                <li>
                    <Link to="/">back</Link>
                </li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer