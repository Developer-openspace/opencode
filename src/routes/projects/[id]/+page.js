import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  if (params.id) {
    const url=`/api/projects/${params.id}`;
    const response=await fetch(url)
    const parseRes=await response.json()
    return {parseRes};
  }
 
  throw error(404, 'Not found');
}