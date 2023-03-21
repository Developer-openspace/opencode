import { d as db } from './mongo-6c643125.js';
import { j as json } from './index-2109bb13.js';
import 'mongodb';

const users = db.collection("users");
async function GET() {
  const allUsers = await users.find({}).toArray();
  return json(allUsers);
}
async function POST({ request }) {
  const { email, username, phone } = await request.json();
  const count = await users.countDocuments({}) + 1;
  await users.insertOne({
    username,
    email,
    phone,
    count: `userId_${count}`
  });
  return json({ msg: "register successful" }, { status: 201 });
}

export { GET, POST };
//# sourceMappingURL=_server-70fde976.js.map
