import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";



const ShowSurvey = () => {
    const { id } = useParams();
    const [survey, setSurvey] = useState({});

    useEffect(() => {
      (async () => {
        const response = await fetch("http://localhost/api/surveys/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt'),
            }
        });
        
        const survey = await response.json();
        setSurvey(survey);
      })();
    }, [id]);
    console.log(survey);

    return(
        <>
            <Header/>
            <h2> Survey info </h2>
            <div>
                <article>
                    <p>Survey ID : {survey.id}</p>
                    <p>User ID : {survey.id_users_submit_survey}</p>
                    <p>Score : {survey.score}</p>
                    <p>Comment : {survey.comment}</p>
                </article>
            </div>
        </>
    );

};

export default ShowSurvey