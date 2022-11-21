const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function Connect() {
  return client.connect();
}

function getDb(name) {
  return client.db(name);
}

module.exports = { Connect, getDb };
