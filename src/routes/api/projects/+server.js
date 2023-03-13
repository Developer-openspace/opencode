import {content} from "$lib/db/data";
import {projects} from "$lib/mongodb/models/project_model";
import {json} from "@sveltejs/kit";

//get all projects
export async function GET(){
    const allProjects=await projects.find({}).toArray()
    return json(allProjects);
}

//post (add project to db)
export async function POST({request}){
    const item=await request.formData();
    const image=item.get('image');
    const name=item.get('name');
    const desc=item.get('desc');
    const insertProject=await projects.insertOne({
        image, 
        name,
        desc
    })
    return json(insertProject,{status:201});
}