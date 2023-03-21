import { o as octokit } from './octokit-86b3138a.js';
import { j as json } from './index-2109bb13.js';
import 'octokit';

async function GET(requestEvent) {
  try {
    const { params } = requestEvent;
    const { repo } = params;
    const result = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: "imrany",
      repo,
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
//# sourceMappingURL=_server-6711eaf3.js.map
