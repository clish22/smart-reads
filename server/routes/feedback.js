const express = require('express');
const router = express.Router();
const fetchCompletion = require('../utils/gptChatCompletion');

router.post('/', async (req, res) => {
  const { story, criteria } = req.body;
  const prompt = `As an elementary school teacher, you have received a student's writing assignment. Write a comment of 2-3 sentences on how the student performed based on the following criteria: ${criteria}. Provide one specific example of something they did well, and one specific example of how they could improve. Respond as if you are talking direclty to the student. Be kind and considerate, but to the point. Give them a score out of 10. Here is the story: ${story}`;
  const feedback = await fetchCompletion(prompt);
  res.json({ feedback });
});

module.exports = router;
