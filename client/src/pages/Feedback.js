import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

function Feedback() {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState('');

  // async function to handle the text input and set the text state
  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  // async function to handle the submit button and send the text to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/api/gpt', { text: text });
    setFeedback(response.data.feedback);
  };

  // async function to handle the clear button and clear the text field
  const handleClear = (e) => {
    e.preventDefault();
    setText('');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Feedback</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label htmlFor="text">Please Enter Your Text:</label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="3"
                  value={text}
                  onChange={handleTextChange}
                />
              </div>
              <Button type="submit" variant="primary" className="mr-2" onClick={handleSubmit}>
                Submit
              </Button>
              <Button type="submit" variant="secondary" onClick={handleClear}>
                Clear
              </Button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Feedback</h1>
            {/* feedback displayed in a p tag with some fancy bootstrap stylings */}
            <p className="text-center text-white bg-dark">{feedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
