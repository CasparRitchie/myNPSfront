import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import happyhands from '../images/happyhands.png';
import new_mnNPS_logo_contrast_c from '../images//new_mnNPS_logo_contrast_c.png';
const Home = () => {
    return(
        <div>
            <Header />
            <>
                <section className="myNPSintro">
                    <h1>
                        <img src={new_mnNPS_logo_contrast_c} alt="myNPS" />
                    </h1>
                </section>
                <h3>
                            how are you feeling?
                </h3>
            </>
            <ul>
                    <li>
                        <Link to="/surveys">View a list of surveys</Link>
                    </li>
                    {/* <li>
                        <Link to="/surveys/:id">View a survey by ID</Link>
                    </li> */}
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
                        <Link to="/surveys/ShowChart">View charts</Link>
                    </li>
                    {/* <li> */}
                        {/* <Link to="/surveys/ShowChartData">Get data for charts (under construction)</Link> */}
                    {/* </li> */}
                </ul>

            <Footer />
        </div>
    )
}
export default Home