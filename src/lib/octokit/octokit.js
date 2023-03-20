import {Octokit} from "octokit";
import {GITHUB_TOKEN} from "$env/static/private";

export const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });
  