import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // async function to handle the username input and set the username state
  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  // async function to handle the password input and set the password state
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  // async function to handle the login button and send the username and password to the server
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/api/login', {
      username: username,
      password: password,
    });
    if (response.data.message === 'Logged in successfully') {
      setMessage(response.data.message);
      window.location.href = '/home';
    } else {
      setMessage(response.data.message);
    }
  };

  // async function to handle the clear button and clear the text fields
  const handleClear = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Login</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <p className="text-danger">{message}</p>
              <Button type="submit" variant="primary" className="mr-2" onClick={handleLogin}>
                Login
              </Button>
              <Button type="submit" variant="secondary" onClick={handleClear}>
                Clear
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
