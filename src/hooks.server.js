import { start_mongodb } from "$lib/mongodb/mongo";

start_mongodb().then(()=>{
    console.log("MongoDB started")
}).catch(err=>console.error(err))