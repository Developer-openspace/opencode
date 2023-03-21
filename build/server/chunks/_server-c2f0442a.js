import { o as octokit } from './octokit-86b3138a.js';
import { j as json } from './index-2109bb13.js';
import 'octokit';

async function GET() {
  try {
    const result = await octokit.request("GET /users/{owner}/repos", {
      owner: "imrany",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });
    return json(result.data);
  } catch (error) {
    console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
  }
}

export { GET };
//# sourceMappingURL=_server-c2f0442a.js.map
