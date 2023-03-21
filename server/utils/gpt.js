const { Configuration, OpenAIApi } = require('openai');

const fetchCompletion = async (content) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: content }],
  });
  console.log(completion.data.choices[0].message.content);
  return completion.data.choices[0].message.content;
};

module.exports = fetchCompletion;
