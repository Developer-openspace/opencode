import {projects} from "$lib/mongodb/models/project_model";
import {json} from "@sveltejs/kit";
import { projectStorage,ref,getDownloadURL,uploadBytesResumable,deleteObject } from "$lib/firebase/firebaseConfig";
/** @type {import('./$types').PageServerData} */

// export function load({fetch}) {
  
// }

export async function POST({request}){
    const item=await request.formData();
    const image=item.get('image');
    const name=item.get('name');
    const desc=item.get('desc');
    const count =await projects.countDocuments({}) +1;
    await projects.insertOne({
        image, 
        name,
        desc,
        count:`projectId_${count}`
    })
    return json({msg:"Project added"},{status:201});
}
