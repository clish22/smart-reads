// this is a button component for the app. It is used in the Feedback.js page to submit the text to the server and to clear the text field. It is also used in the Home.js page to go back to the home page.

//import
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.css';

//button component with bootstrap styling

function Button(props) {
  return (
    <BootstrapButton className="button" variant={props.variant} onClick={props.onClick}>
      {props.children}
    </BootstrapButton>
  );
}

export default Button;
