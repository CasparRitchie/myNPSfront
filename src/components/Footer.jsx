import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <footer>          
            <nav>
                <h1>myNPS</h1>
                <ul>
                    <li>Contact us</li>
                <li>
                    <Link to="/">back</Link>
                </li>
                </ul>
            </nav>
        </footer>
    )
}
export default Header