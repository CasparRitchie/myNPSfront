import React, { useRef, useEffect } from 'react';
import normalImage from '../images/0button.png'; // import the normal state image
import hoverImage from '../images/0buttonHover.png'; // import the hover state image
import clickedImage from '../images/0buttonClicked.png'; // import the clicked state image


function RadioButtonStyle1() {
  const radioButtonRef = useRef(null); // create a ref for the radio button element

  useEffect(() => {
    // add an event listener for the click event
    radioButtonRef.current.addEventListener('click', handleClick);

    // remove the event listener when the component unmounts
    return () => radioButtonRef.current.removeEventListener('click', handleClick);
  }, []); // empty array means the effect runs only once

  // handle the click event
  const handleClick = () => {
    console.log('Radio button clicked!');
  };

  // create a style object for the radio button
  const style = {
    appearance: 'none', // hide the default radio button styling
    '-webkit-appearance': 'none', // hide the default radio button styling for webkit-based browsers
    // specify the custom image for the normal state
    backgroundImage: `url(${normalImage})`,

    // specify the custom image for the hover state
    ':hover': {
      backgroundImage: `url(${hoverImage})`,
    },

    // specify the custom image for the clicked state
    ':active': {
      backgroundImage: `url(${clickedImage})`,
    },
  };

  return (
    <label>
      {/* apply the ref to the radio button element */}
      <input type="radio" style={style} ref={radioButtonRef} />
      Radio button style 1
    </label>
  );
}

function RadioButtonStyle2() {
    const radioButtonRef = useRef(null); // create a ref for the radio button element
  
    useEffect(() => {
      // add an event listener for the click event
      radioButtonRef.current.addEventListener('click', handleClick);
  
      // remove the event listener when the component unmounts
      return () => radioButtonRef.current.removeEventListener('click', handleClick);
    }, []); // empty array means the effect runs only once
  
    // handle the click event
    const handleClick = () => {
      console.log('Radio button clicked!');
    };
  
    // create a style object for the radio button
    const style = {
      appearance: 'none', // hide the default radio button styling
      '-webkit-appearance': 'none', // hide the default radio button styling for webkit-based browsers
      // specify the custom image for the normal state
      backgroundImage: `url(${normalImage})`,
  
      // specify the custom image for the hover state
      ':hover': {
        backgroundImage: `url(${hoverImage})`,
      },
  
      // specify the custom image for the clicked state
      ':active': {
        backgroundImage: `url(${clickedImage})`,
      },
    };
  
    return (
      <label>
        {/* apply the ref to the radio button element */}
        <input type="radio" style={style} ref={radioButtonRef} />
        Radio button style 2
      </label>
    );
  }

export default {
    RadioButtonStyle1,
    RadioButtonStyle2,
}