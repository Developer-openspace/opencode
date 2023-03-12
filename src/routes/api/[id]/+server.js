import * as db from "$lib/db/data.js";
import {json} from "@sveltejs/kit";

export function GET({requestEvent}){
    const {params}=requestEvent;
    const {id}=params;
    const project=db[id];
    return json(project);
}