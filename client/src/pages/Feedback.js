import React, { useState } from 'react';
import axios from 'axios';
import './Feedback.css';

function SubmitWriting() {
  const [writing, setWriting] = useState('');
  const [criteria, setCriteria] = useState('');
  const [feedback, setFeedback] = useState('');
  const [tokens, setTokens] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.180:3001/api/feedback', {
        writing,
        criteria,
      });
      setFeedback(response.data.response);
      setTokens(response.data.tokens);
      console.log(tokens);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setWriting('');
    setCriteria('');
  };

  return (
    <div className="container p-5">
      <div className="col-md-12">
        <h1 className="text-center">Writing Feedback</h1>
        <form>
          <div className="mb-4">
            <label className="mt-2 fw-bold d-inline-block" htmlFor="criteria">
              Assessment:
            </label>
            <select
              id="criteria"
              className="form-control d-inline-block w-25 mx-3"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
            >
              <option value="">Select an assessment</option>
              <option value="term-1-english">Term 1 English</option>
              <option value="writers-cafe">Writer's Cafe</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="form-group">
            <textarea
              id="writing"
              rows={10}
              placeholder="Enter your writing here"
              className="form-control h-auto"
              value={writing}
              onChange={(e) => setWriting(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" onClick={handleSubmit} className="btn btn-warning m-2">
              Get Feedback
            </button>
            <button type="button" onClick={handleClear} className="btn btn-warning m-2">
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title text-center">Comment</h5>
                  <p className="card-text">{feedback}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title text-center">What went well</h5>
                  <p className="card-text">Placeholder for 'what went well' feedback</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title text-center">What needs improving</h5>
                  <p className="card-text">Placeholder for 'what needs improving' feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitWriting;
