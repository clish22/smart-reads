import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function SubmitStory() {
  const [story, setStory] = useState('');
  const [criteria, setCriteria] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/feedback', {
        story,
        criteria,
      });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setStory('');
    setCriteria('');
  };

  return (
    <Container className="w-75 my-4">
      <Row className="border border-dark rounded justify-content-center">
        <Col md={12} className="p-3">
          <h1 className="text-center mb-4">Submit Your Story</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="story">
              <Form.Label className="fw-bold">Story:</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="criteria">
              <Form.Label className="mt-4 fw-bold">Criteria:</Form.Label>
              <Form.Control
                as="select"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
              >
                <option value="">Select a criteria</option>
                <option value="Spelling">Spelling</option>
                <option value="Grammar">Grammar</option>
                <option value="Punctuation">Punctuation</option>
                {/* Add more options here */}
              </Form.Control>
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="warning" type="submit" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        <Col md={6}>
          <Container>
            <h1 className="text-center mb-4">Feedback</h1>
            {feedback && <p className="text-center">{feedback}</p>}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmitStory;
