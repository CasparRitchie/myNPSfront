import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";



const ShowSurvey = () => {
    const { id } = useParams();
    const [survey, setSurvey] = useState([null]);

    useEffect(() => {
      (async () => {
        const response = await fetch("http://localhost/api/surveys/" + id);
        const survey = await response.json();
        setSurvey(survey);
      })();
    }, [id]);

    return(
        <>
            <Header/>
            <h2> View a survey </h2>
            <div>
                <article>
                    <p>Survey ID : {survey.id}</p>
                    <p>User ID : {survey.userID}</p>
                    <p>Score : {survey.score}</p>
                    <p>Comment : {survey.comment}</p>
                </article>
            </div>
        </>
    );

};

export default ShowSurvey