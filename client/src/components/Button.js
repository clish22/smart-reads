// this is a button component for the app. It is used in the Feedback.js page to submit the text to the server and to clear the text field. It is also used in the Home.js page to go back to the home page.

//import
import React from 'react';
import './Button.css';
import { Button as BootstrapButton } from 'react-bootstrap';

function Button(props) {
  return (
    <BootstrapButton variant="primary" type="submit" onClick={props.onClick}>
      {props.children}
    </BootstrapButton>
  );
}

export default Button;
