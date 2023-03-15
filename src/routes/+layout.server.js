import {projects} from "$lib/mongodb/models/project_model";
import {json} from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    const allProjects=await projects.find({}).toArray()
    return {projects:allProjects};
  }