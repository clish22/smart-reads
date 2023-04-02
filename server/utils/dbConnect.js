const MongoClient = require('mongodb').MongoClient;

const dbConnect = async () => {
  try {
    const url = process.env.MONGODB_URI;
    const dbName = 'nrl-fantasy';
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    console.log('Connected to database successfully!');
    return db;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

module.exports = dbConnect;
