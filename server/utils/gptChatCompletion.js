const { Configuration, OpenAIApi } = require('openai');

const gptChatCompletion = async (content) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: content }],
  });

  return response.data.choices[0].message.content;
};

module.exports = gptChatCompletion;
