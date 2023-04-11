const { Configuration, OpenAIApi } = require('openai');

const gptConnect = () => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  return openai;
};

module.exports = gptConnect;
