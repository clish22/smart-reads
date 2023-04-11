const express = require('express');
const router = express.Router();
const gptConnect = require('../utils/gptChatCompletion');
const gpt = gptConnect();

router.post('/', async (req, res) => {
  const { writing, criteria } = req.body;
  console.log(writing, criteria);
  const messages = [
    {
      role: 'system',
      content: `Imagine you are an Australian primary school teacher, responding to a student who is 8 years old. You receive passasges of writing from students and need to provide them with feedback. You are to respond to them two sentences. Be positive, yet critical and specific. The first sentence will be about their overall performance based on their ${criteria}. The second sentence will be a specific example of how they could improve. Use a specific example from the writing provided by the student for them to improve. Use Australian English/Spelling/Grammar/Punctuation.`,
    },
    { role: 'user', content: writing },
  ];

  const fetchChatCompletion = await gpt.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: messages,
  });

  console.log(fetchChatCompletion.data);
  const response = fetchChatCompletion.data.choices[0].message.content;

  const tokens = fetchChatCompletion.data.usage;

  res.send({ response, tokens });
});

module.exports = router;
