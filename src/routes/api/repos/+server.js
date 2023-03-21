import { octokit } from "$lib/octokit/octokit";
import {json} from "@sveltejs/kit";

//get user repos
export async function GET(){
    try {
        const result = await octokit.request("GET /users/{owner}/repos", {
            owner: "imrany",
          });
      
        return json(result.data)
      
      } catch (error) {
        // @ts-ignore
        return json({error:`Error! Status: ${error.status}. Message: ${error.response.data.message}`})
    }
}
