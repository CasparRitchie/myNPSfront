// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";

// const Surveys = () => {
    
//     const [surveysFromApi, setSurveys] = useState([]);

//     useEffect((surveysFromApi) => {
//         (async () => {
//             const response = await fetch("http://localhost/api/surveys");
//             const surveysFromApi = await response.json();
//             setSurveys(surveysFromApi);
//         })();
//     }, []);    
//     return (
//         <div> 
//             <Header />
//                 <h2> List of surveys </h2>
//            {surveysFromApi.map((survey) => {
//             return (
//                 <article>
//                     <Link to={"/surveys/" + survey.id}>View more details</Link>

//                     <p>Score : {survey.score}</p>
//                     <p>Comment : {survey.comment}</p>
//                 </article>
//             )
//            })}
//         </div>
//     )
// }
// export default Surveys

// new version of code to try and resolve the .map is not a function issue 20230116

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Surveys = () => {
        // On définit un état initial vide pour notre liste de sondages

    const [surveysFromApi, setSurveys] = useState([]);

    useEffect(() => {
                // Fonction asynchrone pour récupérer les sondages depuis l'API
        (async () => {
                        // On effectue une requête pour récupérer les sondages depuis l'API
            const response = await fetch("http://localhost/api/surveys");
                        // On met à jour l'état en utilisant la réponse de l'API
            setSurveys(await response.json());
        })();
    }, []);    
    return (
        <div> 
            <Header />
                <h2> List of surveys </h2>
           {Array.isArray(surveysFromApi) && surveysFromApi.map((survey) => {
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