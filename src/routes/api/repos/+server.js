import { octokit } from "$lib/octokit/octokit";
import {json} from "@sveltejs/kit";

//get user repos
export async function GET(){
    try {
        const result = await octokit.request("GET /users/{owner}/repos", {
            owner: "imrany",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
          });
      
        return json(result.data)
      
      } catch (error) {
        // @ts-ignore
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
    }
}
