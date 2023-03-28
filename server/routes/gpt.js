const express = require('express');
const router = express.Router();
const fetchCompletion = require('../utils/gptConnect');

router.post('/', async (req, res) => {
  const { text } = req.body;
  const feedback = await fetchCompletion(text);
  res.send({ feedback: feedback });
});

module.exports = router;
