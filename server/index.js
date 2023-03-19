// express server
const express = require('express');
const routes = require('./routes');
const connectToDatabase = require('./db');

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();
connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
