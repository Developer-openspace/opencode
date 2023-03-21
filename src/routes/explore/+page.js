import { error } from '@sveltejs/kit';
 
/** @type {import('../$types').PageData} */

export async function load({fetch}) {
  const url=`/api/repos`;
  const response=await fetch(url);
  const parseRes=await response.json();
  return { parseRes }

  throw error(404, 'Not found');
}