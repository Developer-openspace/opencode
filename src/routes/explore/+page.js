export const config = {
  runtime: 'edge',
};

/** @type {import('../$types').PageData} */

export async function load({fetch}) {
 try {
  const url=`/api/repos`;
  const response=await fetch(url);
  const parseRes=await response.json();
  if(parseRes.error){
    console.log(parseRes.error)  
  }else{
    return { parseRes }
  }

 } catch (error) {
  // @ts-ignore
  console.log(error.message);
 }
}