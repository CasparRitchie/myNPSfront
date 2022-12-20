import Header from '../components/Header'
const CreateSurvey = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const score = event.target.nps_score.value;
        const comment = event.target.comment.value;

        fetch("http://localhost/api/surveys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                score,
                comment
            })
        });
   };

    return (
        <> 
            <Header/>
            <div>
                <h2> Submit a survey </h2>
                <form onSubmit={handleSubmit}>
                    <input type="radio" id="score0" name="nps_score" value="0"/>
                    <label for="score0">0</label>
                    <input type="radio" id="score1" name="nps_score" value="1"/>
                    <label for="score1">1</label>
                    <input type="radio" id="score2" name="nps_score" value="2"/>
                    <label for="score2">2</label>
                    <input type="radio" id="score3" name="nps_score" value="3"/>
                    <label for="score3">3</label>
                    <input type="radio" id="score4" name="nps_score" value="4"/>
                    <label for="score4">4</label>
                    <input type="radio" id="score5" name="nps_score" value="5"/>
                    <label for="score5">5</label>
                    <input type="radio" id="score6" name="nps_score" value="6"/>
                    <label for="score6">6</label>
                    <input type="radio" id="score7" name="nps_score" value="7"/>
                    <label for="score7">7</label>
                    <input type="radio" id="score8" name="nps_score" value="8"/>
                    <label for="score8">8</label>
                    <input type="radio" id="score9" name="nps_score" value="9"/>
                    <label for="score9">9</label>
                    <input type="radio" id="score10" name="nps_score" value="10"/>
                    <label for="score10">10</label>
                    
                    <label for="comment"> Comments </label>
                    <input type="text" name="comment" />
                
                    <button type="submit">Submit survey</button>
                </form>
            </div>
        </>
    )
};

export default CreateSurvey