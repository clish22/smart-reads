//Feedback component page. This page contains a text field for the user to enter their piece of writing. The user can then click the submit button to send the text to the server. The server will then return with feedback on the quality of text sent to the server. The feedback will be displayed in a text field below the submit button. The user can then click the clear button to clear the text field. The user can also click the back button to go back to the home page.

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Header from '../components/Header';

function Feedback() {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState('');

  // function to handle the submit button with async
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/feedback', { text });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.log(error);
    }
  };

  // function to handle the clear button
  const handleClear = (e) => {
    e.preventDefault();
    setText('');
    setFeedback('');
  };

  return (
    <div>
      <Header />
      <Container className="text-center p-3">
        <Row>
          <Col>
            <h1>Feedback</h1>
            <h3>Enter your text below</h3>
            <Form>
              <Form.Group controlId="text">
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="primary" type="submit" onClick={handleClear}>
                Clear
              </Button>
            </Form>
            <Form>
              <Form.Group controlId="feedback">
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feedback;
