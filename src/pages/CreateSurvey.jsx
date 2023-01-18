import Header from '../components/Header';
import { useRef } from 'react';
import DetractorButton from '../functions/DetractorButton';
import ButtonsNPS from '../components/ButtonsNPS';
import Footer from '../components/Footer';

import { useNavigate } from "react-router";


const CreateSurvey = () => {
    // Create references to the form elements
    const npsScoreRef = useRef(null);
    const commentRef = useRef(null);
    const navigate = useNavigate();

  
    // This function is used as the onSubmit handler for the form element
  const handleSubmit = (event) => {
    // Prevent the default action of the submit event (which is to refresh the page)
    event.preventDefault();

    // Find the selected radio button
    const selectedRadioButton = Array.from(event.target.elements).find(
      (element) => element.name === 'nps_score' && element.checked
    );

    // Retrieve the value of the selected radio button
    const score = selectedRadioButton.value;
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
    npsScoreRef.current.value = null;
    commentRef.current.value = '';
    navigate('/surveys');

  };
  
    return (
      <> 
        {/* Render the Header component */}
        <Header/>
        <section className='myNPSsurvey'>
            <h2> Submit a survey </h2>
          <ul>
            <li>
          {/* <ButtonsNPS/> */}
              <section>
          {/* Render a form element with an onSubmit attribute that references the handleSubmit function */}
                <form className='submitSurveyForm' onSubmit={handleSubmit}>
                    {/* Render a series of radio buttons for selecting an NPS score */}
                    <label className='container' htmlFor="score0">
                      <input type="radio" id="score0" name="nps_score" value={0} ref={npsScoreRef} className="detractor"/>
                      <span className="checkmark0"></span>
                    </label>
                    <label className='container' htmlFor="score1">
                      <input type="radio" id="score1" name="nps_score" value={1} ref={npsScoreRef} className="detractor1"/>
                      <span className="checkmark1"></span>
                    </label>
                    <label className='container' htmlFor="score2">
                      <input type="radio" id="score2" name="nps_score" value={2} ref={npsScoreRef} className="detractor2"/>
                      <span class="checkmark2"></span>
                    </label>
                    <label className='container' htmlFor="score3">
                      <input type="radio" id="score3" name="nps_score" value={3} ref={npsScoreRef} className="detractor3"/>
                      <span class="checkmark3"></span>
                    </label>
                    <label className='container' htmlFor="score4">
                      <input type="radio" id="score4" name="nps_score" value={4} ref={npsScoreRef} className="detractor4"/>
                      <span class="checkmark4"></span>
                    </label>
                    <label className='container' htmlFor="score5">
                      <input type="radio" id="score5" name="nps_score" value={5} ref={npsScoreRef} className="detractor5"/>
                      <span class="checkmark5"></span>
                    </label>
                    <label className='container' htmlFor="score6">
                      <input type="radio" id="score6" name="nps_score" value={6} ref={npsScoreRef} className="detractor6"/>
                      <span class="checkmark6"></span>
                    </label>
                    <label className='container' htmlFor="score7">
                      <input type="radio" id="score7" name="nps_score" value={7} ref={npsScoreRef} className="detractor7"/>
                      <span class="checkmark7"></span>
                    </label>
                    <label className='container' htmlFor="score8">
                      <input type="radio" id="score8" name="nps_score" value={8} ref={npsScoreRef} className="detractor8"/>
                      <span class="checkmark8"></span>
                    </label>
                    <label className='container' htmlFor="score9">
                      <input type="radio" id="score9" name="nps_score" value={9} ref={npsScoreRef} className="detractor9"/>
                      <span class="checkmark9"></span>
                    </label>
                    <label className='container' htmlFor="score10">
                      <input type="radio" id="score10" name="nps_score" value={10} ref={npsScoreRef} className="detractor10"/>
                      <span class="checkmark10"></span>
                    </label>
                    {/* Render a label and text input element for entering a comment */}
                    <label htmlFor="comment" className='surveyCommentsLabel'> Comments </label>
                    <input type="textarea" className='surveyCommentsBox' name="comment" placeholder="Please enter your comments here" ref={commentRef} />                       
                    <button type="submit" className='submitSurvey'>Submit survey</button>
                    {/* <SubmitASurveyButton/> */}
                  </form>
               </section>
            </li>
          </ul>
          </section>
                        <Footer />
    </>
);
};

export default CreateSurvey;
