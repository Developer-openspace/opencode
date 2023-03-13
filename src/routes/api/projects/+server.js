import {content} from "$lib/db/data";
import {projects} from "$lib/mongodb/models/project_model";
import {json} from "@sveltejs/kit";

//get all projects
export function GET(){
    return json(content);
}

//post (add project to db)
export async function POST(RequestEvent){
    const project=RequestEvent;
    const items=project.request.body;
    const insertProject=await projects.insertOne({items})
    return json(insertProject,{status:201});
}