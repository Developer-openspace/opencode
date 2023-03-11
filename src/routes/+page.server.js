import * as db from '../db/data.json';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        content:db
    }
  throw error(404, 'Not found');
}