// import
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/feedback', require('./routes/feedback'));

// listen
app.listen(port, () => {
  console.log(`Express Server listening at http://localhost:${port}`);
});
