import * as db from '../db/data.json';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load() {
    return new Response({text:"Hello there"})
  throw error(404, 'Not found');
}