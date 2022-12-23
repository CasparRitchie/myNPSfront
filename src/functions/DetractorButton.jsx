import React from 'react';
import normalImage from '../images/0button.png'; // import the normal state image
import hoverImage from '../images/0buttonHover.png'; // import the hover state image
import clickedImage from '../images/0buttonClicked.png'; // import the clicked state image

function DetractorButton() {
  ;
  // create a style object for the radio button
  const detractorStyle = {
    appearance: 'none',
    '-webkit-appearance': 'none',
    margin:'auto',
    padding:'1px',
    gap: '1rem',
    cursor: 'pointer',
    size: '40px',
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
    <label className='detractor'>
      {/* apply the style object to the radio button element */}
      <input type="radio" style={detractorStyle} />
      Detractor button
    </label>
  );
}
export default DetractorButton