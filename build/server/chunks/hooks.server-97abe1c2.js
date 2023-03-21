import { s as start_mongodb } from './mongo-6c643125.js';
import 'mongodb';

start_mongodb().then(() => {
  console.log("MongoDB started");
}).catch((err) => console.error(err));
//# sourceMappingURL=hooks.server-97abe1c2.js.map
