// this is a button component for the app. It is used in the Feedback.js page to submit the text to the server and to clear the text field. It is also used in the Home.js page to go back to the home page.

//import
import React from 'react';
import './Button.css';

//button component with bootstrap styling

function Button(props) {
  return (
    <button
      type={props.type}
      className={`btn btn-${props.variant} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
