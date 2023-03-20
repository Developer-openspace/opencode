import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
  if (params.id) {
    const url=`/api/repos/${params.repo}`;
    const response=await fetch(url)
    const parseRes=await response.json()
    return {parseRes};
  }
 
  throw error(404, 'Not found');
}