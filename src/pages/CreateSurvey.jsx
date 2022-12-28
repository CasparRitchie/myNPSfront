import Header from '../components/Header';
import { useRef } from 'react';
import DetractorButton from '../functions/DetractorButton';
import ButtonsNPS from '../components/ButtonsNPS';


const CreateSurvey = () => {
    // Create references to the form elements
    const npsScoreRef = useRef(null);
    const commentRef = useRef(null);
  
    // This function is used as the onSubmit handler for the form element
    const handleSubmit = (event) => {
      // Prevent the default action of the submit event (which is to refresh the page)
      event.preventDefault();
  
      // Retrieve the values of the nps_score and comment form elements
      const score = npsScoreRef.current.value;
      const comment = commentRef.current.value;
  
      // Make a POST request to the http://localhost/api/surveys endpoint, passing the score and comment values as the body of the request
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
  
      // Clear the form fields by setting the values to an empty string
      npsScoreRef.current.checked = false;
      commentRef.current.value = '';
    };
  
    return (
      <> 
        {/* Render the Header component */}
        <Header/>
        <div>
          <h2> Submit a survey </h2>
{/* WORKING ON ADDING RADIO BUTTONS */}
{/* <ButtonsNPS/> */}
          
          {/* Render a form element with an onSubmit attribute that references the handleSubmit function */}
          <form onSubmit={handleSubmit}>
                {/* Render a series of radio buttons for selecting an NPS score */}
                <DetractorButton ref={npsScoreRef} value="0"/>
                <>
                <input type="radio" id="score0" name="nps_score" value="0" ref={npsScoreRef} className="detractor"/>
                <label className='detractor' htmlFor="score0">0</label>
                </>
                <input type="radio" id="score1" name="nps_score" value="1" ref={npsScoreRef}/>
                <label className='detractor' htmlFor="score1">1</label>
                <input type="radio" id="score2" name="nps_score" value="2" ref={npsScoreRef}/>
                <label className='detractor' htmlFor="score2">2</label>
                <input type="radio" id="score3" name="nps_score" value="3" ref={npsScoreRef}/>
                <label className='detractor' htmlFor="score3">3</label>
                <input type="radio" id="score4" name="nps_score" value="4" ref={npsScoreRef}/>
                <label className='detractor' htmlFor="score4">4</label>
                <input type="radio" id="score5" name="nps_score" value="5" ref={npsScoreRef}/>
                <label className='detractor' htmlFor="score5">5</label>
                <input type="radio" id="score6" name="nps_score" value="6" ref={npsScoreRef}/>
                <label className='detractor' htmlFor="score6">6</label>
                <input type="radio" id="score7" name="nps_score" value="7" ref={npsScoreRef}/>
                <label htmlFor="score7">7</label>
                <input type="radio" id="score8" name="nps_score" value="8" ref={npsScoreRef}/>
                <label htmlFor="score8">8</label>
                <input type="radio" id="score9" name="nps_score" value="9" ref={npsScoreRef}/>
                <label htmlFor="score9">9</label>
                <input type="radio" id="score10" name="nps_score" value="10" ref={npsScoreRef}/>
                <label htmlFor="score10">10</label>

                {/* Render a label and text input element for entering a comment */}
                <label htmlFor="comment"> Comments </label>
                <input type="text" name="comment" ref={commentRef} />
                    
                <button type="submit">Submit survey</button>
            </form>
        </div>
    </>
);
};

export default CreateSurvey;
