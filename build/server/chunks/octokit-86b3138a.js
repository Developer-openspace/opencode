import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export { octokit as o };
//# sourceMappingURL=octokit-86b3138a.js.map
