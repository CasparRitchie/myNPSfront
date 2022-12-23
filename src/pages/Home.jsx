import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from 'react-router-dom';


const Home = () => {
    return(
        <div>
            <Header />
   

            <ul>

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
                        <Link to="/users/create">Create a user</Link>
                    </li>
                    <li>
                        <Link to="/users/:id">View a user</Link>
                    </li>
                    {/* <li>
                        <Link to="/users/:id">Delete a user (admin only under construction)</Link>
                    </li> */}
                    <li>
                        <Link to="/surveys/ShowChart">View charts (under construction)</Link>
                    </li>
                    <li>
                        <Link to="/surveys/ShowChartData">Get data for charts (under construction)</Link>
                    </li>
                    <li>Contact us</li>
                </ul>

            <Footer />
        </div>
    )
}
export default Home