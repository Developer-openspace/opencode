import {projects} from "$lib/mongodb/models/project_model";
import {json} from "@sveltejs/kit";

//get all projects
export async function GET(){
    const allProjects=await projects.find({}).toArray()
    return json(allProjects);
}

//post (add project to db)
export async function POST({request}){
    // const item=await request.formData();
    // const image=item.get('image');
    // const name=item.get('name');
    // const desc=item.get('desc');
    const item=await request.body;
    const image=item?.getReader('image');
    const name=item?.getReader('name');
    const desc=item?.getReader('desc');
    const count =await projects.countDocuments({}) +1;
    const insertProject=await projects.insertOne({
        image, 
        name,
        desc,
        count:`projectId_${count}`
    })
    return json({msg:"Project added"},{status:201});
}
