/* const express = require('express');
const router = express.Router();
const fetchCompletion = require('../utils/gpt');

// use fetchCompletetion to get a response from GPT-3

router.post('/api/gpt', async (req, res) => {
  const { text } = req.body;
  const feedback = await fetchCompletion(text);
  res.send({ feedback });
});

module.exports = router;
 */
