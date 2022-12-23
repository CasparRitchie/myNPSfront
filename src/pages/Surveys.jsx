import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Surveys = () => {
    
    const [surveysFromApi, setSurveys] = useState([]);

    useEffect((surveysFromApi) => {
        (async () => {
            const response = await fetch("http://localhost/api/surveys");
            const surveysFromApi = await response.json();
            setSurveys(surveysFromApi);
        })();
    }, []);    
    return (
        <div> 
            <Header />
                <h2> List of surveys </h2>
           {surveysFromApi.map((survey) => {
            return (
                <article>
                    <Link to={"/surveys/" + survey.id}>View more details</Link>

                    <p>Score : {survey.score}</p>
                    <p>Comment : {survey.comment}</p>
                </article>
            )
           })}
        </div>
    )
}
export default Surveys