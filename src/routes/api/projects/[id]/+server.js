import { projects } from "$lib/mongodb/models/project_model";
import {json} from "@sveltejs/kit";

//get project
export async function GET(requestEvent){
    const {params}=requestEvent;
    const {id}=params;
    const project=await projects.findOne({count:id});
    return json(project);
}

//delete project
export async function DELETE(RequestEvent){
    const {params}=RequestEvent;
    const {id}=params;
    await projects.findOneAndDelete({count:id});
    return json({msg:"Project was deleted"})
}