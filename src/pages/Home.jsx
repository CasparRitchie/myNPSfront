import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import happyhands from '../images/happyhands.png';
import mynpsContrast from '../images/mynpsContrast.png';
import CarouselImage1 from '../images/carousel_images/pexels-artem-podrez-5726835@2x.png';
import CarouselImage2 from '../images/carousel_images/pexels-shvets-production-72042@2x.png';
import CarouselImage3 from '../images/carousel_images/pexels-eren-li-7168996@2x.png';
import HomePageCarousel from "../components/HomePageCarousel";
import SubmitASurveyButton from "../functions/SubmitSurvey";


const Home = () => {
    return(
        <div>
            <Header />
            <>
                <section className="myNPSintro">
                    <ul>
                        <>
                        <img src={mynpsContrast} alt="mynpsContrast" />
                        </>
                        <>
                    <h3>
                        how are you feeling?
                    </h3>
                        </>
                    </ul>
                </section>
            </>
            <ul>
                <li>
            <section className="whatIsNPS">
                <>
                    <h2> What is <span className="mynpsMy">my</span><span className="mynpsN">n</span ><span className="mynpsP">p</span><span className="mynpsS">s</span>? </h2> 
                    <p> The basic formula for a Net Promoter Score is easy to understand, hence its popularity and widespread use. If a company has more detractors than promoters, the score will be negative and vice versa. A Net Promoter Score provides companies with a simple and direct indicator that can be shared with front-line employees. This practical tool can serve as a motivator for employees and encourage them to improve and provide the best possible customer experience.
                <>
                    <SubmitASurveyButton/>
                </>
                    </p> 
                </>
            </section>
            </li>
            </ul>
            <ul>
                <li>
                <HomePageCarousel className="carousel-inner" role="listbox" style=" width:100% !important;"/>
                </li>
                <li>
                    <Link to="/surveys">View a list of surveys</Link>
                </li>
                {/* <li>
                    <Link to="/surveys/:id">View a survey by ID</Link>
                </li> */}
                <li>
                <SubmitASurveyButton/>
                </li>
                <li>
                    <section className="whatAreOtherPeopleSaying">
                        <h2>What are other people saying?
                        </h2>
                        <p>
                        Information about the score, what it means and how it can be improved 
                        </p>
                    </section>
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
                 <section>
                        <h2>How this site works</h2>
                        <ul>
                        <div class="row">
                            <li class="col-lg-12 col-md-12 col-sm-12">
                            Our approach uses three main areas of work: Data gathering, which involves capturing clean data to allow us to complete the second stage - Data analysis or number crunching, to compose proactive suggestions on improving wellbeing; and Data presentation to provide easy-to-understand charts, graphics and proposals and suggestions for ways to improve your wellbeing and to help improve teamwork.
                            </li>
                        </div>
                        <div class="row">
                            <li class="col-lg-6 col-md-6 col-sm-12">
                            People complete surveys with comments and send them through to myNPS. All the responses created by users go into our database which has algorithms to analyse and define the data so that myNPS can give you constructive ideas for improving the way you feel, based on feedback from other people, in similar situations as you. 
                            </li>
                            <li class="col-lg-6 col-md-6 col-sm-12">
                            <img src={CarouselImage1} alt="image of a scientist" />                            </li>
                        </div>
                        <div class="row">
                            <li class="col-lg-6 col-md-6 col-sm-12">
                            Then we use the responses to create an overall chart showing how everyone else is feeling.
                            This creates the output charts which are used in the analysis where we to crunch the numbers and provide easy to understand dynamic visual representation of the data.
                            </li>
                            <li class="col-lg-6 col-md-6 col-sm-12">
                            <img src={CarouselImage2} alt="image of a person" /> 
                            </li> 
                        </div>
                        <div class="row">
                            <li class="col-lg-6 col-md-6 col-sm-12">
                            We offer consultancy servies and can help you set up your Customer Experience approach. Get in touch to find out more.
                            </li>
                            <li class="col-lg-6 col-md-6 col-sm-12">
                            <img src={CarouselImage3} alt="image of a person" /> 
                            </li> 
                        </div>
                    </ul>
                </section>
                
                <>
                    <SubmitASurveyButton/>
                </>
                <li>
                    <Link to="/surveys/ShowChart">View charts</Link>
                </li>
                <li>
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