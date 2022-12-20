import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>          
            <nav>
                <h1>myNPS</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/surveys">View a list of surveys</Link>
                    </li>
                    <li>
                        <Link to="/surveys/:id">View a survey by ID</Link>
                    </li>
                    <li>
                        <Link to="/surveys/create">Submit a survey</Link>
                    </li>
                    <li>
                        <Link to="/users">View current users</Link>
                    </li>
                    <li>
                        <Link to="/users/:id">View a user</Link>
                    </li>
                    <li>
                        <Link to="/users/create">Create a user</Link>
                    </li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header