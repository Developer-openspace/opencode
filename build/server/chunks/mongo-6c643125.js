import { MongoClient } from 'mongodb';

const MONGO_URL = "mongodb+srv://imrany:imrany00@cluster0.f9fud.mongodb.net/opencode";
const client = new MongoClient(MONGO_URL);
function start_mongodb() {
  console.log("Starting mongodb...");
  return client.connect();
}
const db = client.db();

export { db as d, start_mongodb as s };
//# sourceMappingURL=mongo-6c643125.js.map
