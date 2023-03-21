import {users} from "$lib/mongodb/models/user_model";
import {json} from "@sveltejs/kit";

//get all projects
export async function GET(){
    const allUsers=await users.find({}).toArray()
    return json(allUsers);
}

//post (register user to db)
export async function POST({request}){
    // const item=await request.formData();
    // const image=item.get('image');
    // const name=item.get('name');
    // const desc=item.get('desc');
    const {email,username,phone}=await request.json();
    const count =await users.countDocuments({}) +1;
    await users.insertOne({
        username, 
        email,
        phone,
        count:`userId_${count}`
    })
    return json({msg:"register successful"},{status:201});
}
