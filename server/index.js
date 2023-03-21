// express server
const express = require('express');
const routes = require('./routes');
const connectToDatabase = require('./db');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();
const fetchCompletion = require('./utils/gpt');
const db = connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.post('/api/gpt', async (req, res) => {
  const { text } = req.body;
  const feedback = await fetchCompletion(text);
  res.send({ feedback: feedback });
});

app.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
