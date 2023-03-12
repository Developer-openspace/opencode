import {content} from "$lib/db/data";
import {json} from "@sveltejs/kit";

export function GET(){
    return json(content);
}