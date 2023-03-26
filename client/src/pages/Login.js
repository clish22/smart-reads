// this is a login page. All other pages can only be accessed if the user is logged in. The user can enter their username and password in the text fields. The user can then click the login button to send the username and password to the server. The server will then return with a message to indicate whether the login was successful or not. The message will be displayed in a text field below the login button. The user can then click the clear button to clear the text fields. The user can also click the back button to go back to the home page.

import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // function to handle the login button with async
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  // function to handle the clear button
  const handleClear = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    setMessage('');
  };

  return (
    <div>
      <Navbar />
      <Container className="text-center p-3">
        <Row>
          <Col>
            <h1>Login</h1>
            <h3>Enter your username and password below</h3>
            <Form>
              <Form.Group controlId="username">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button onClick={handleLogin}>Login</Button>
              <Button onClick={handleClear}>Clear</Button>
            </Form>
            <Form>
              <Form.Group controlId="message">
                <Form.Control
                  type="text"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
