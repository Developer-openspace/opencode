import { octokit } from "$lib/octokit/octokit";
import {json} from "@sveltejs/kit";

//get project
// @ts-ignore
export async function GET(requestEvent){
    try {
        const {params}=requestEvent;
        // @ts-ignore
        const {repo}=params;
        const result = await octokit.request("GET /repos/{owner}/{repo}", {
            owner: "imrany",
            repo,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });
      
        // @ts-ignore
        return json(result.data)
      
      } catch (error) {
        // @ts-ignore
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
      }
}
