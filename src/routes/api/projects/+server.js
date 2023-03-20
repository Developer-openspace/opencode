import { octokit } from "$lib/octokit/octokit";
import {json} from "@sveltejs/kit";

//get all projects
export async function GET(){
    try {
        const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
            owner: "octocat",
            repo: "Spoon-Knife",
          });
      
        const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})
      
        console.log(titleAndAuthor)
      
      } catch (error) {
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
    }
}

//post (add project to db)
export async function POST({request}){
    // const item=await request.formData();
    // const image=item.get('image');
    // const name=item.get('name');
    // const desc=item.get('desc');
    const {image,name,desc}=await request.json();
    const count =await projects.countDocuments({}) +1;
    await projects.insertOne({
        image, 
        name,
        desc,
        count:`projectId_${count}`
    })
    return json({msg:"Project added"},{status:201});
}
