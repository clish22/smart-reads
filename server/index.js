// express server
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;
const fetchCompletion = require('./utils/gptConnect');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app use routes
app.use('/api/gpt', require('./routes/gpt'));

/* app.post('/api/login', async (req, res) => {
  console.log(`Post Request req.body: ${req.body}`);
  const users = {
    1: {
      id: '1',
      username: 'admin',
      password: 'admin',
    },
    2: {
      id: '2',
      username: 'user',
      password: 'user',
    },
  };
  const { username, password } = req.body;
  const user = users[0];
  if (user.username === username && user.password === password) {
    res.send({ message: 'Logged in successfully', user: user });
  } else {
    res.send({ message: 'Username or password is incorrect' });
  }
}); */

app.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
