import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerData} */

export async function load({fetch}) {
  const url=`/api/projects`;
  const response=await fetch(url);
  const parseRes=await response.json();
  return { parseRes }

  throw error(404, 'Not found');
}