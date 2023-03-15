<script>
// @ts-nocheck
    import { redirect } from "@sveltejs/kit";

    let name, image, desc;
      async function add(e){
        try {
            e.preventdefault()
            const url=`/api/projects/add`
            const response=await fetch(url,{
                method:"POST",
                body:JSON.stringify({
                    name,
                    image,
                    desc
                }),
                headers:{
                    'content-type':"applictaion/json"
                }
            })
            const parseRes=await response.json();
            if(parseRes.msg){
                console.log(parseRes.msg);
                redirect(200,'/');
            }
        } catch (error) {
            redirect(404,'/')
        }
     }
</script>

<svelte:head>
    <title>Open code | Add Project</title>
</svelte:head>

<main class="flex flex-col items-center justify-center">
    <form on:submit={add} class="flex flex-col my-10 text-lg w-[90%] sm:w-[70%]">
        <label for="name">Name</label>
        <input type="text" bind:value={name} id="name" placeholder="Provide the appropriate name of your project" title="Provide the appropriate name of your project" class="border-slate-500 rounded-lg bg-slate-100 p-2 placeholder:text-slate-600" required maxlength="100" name="name"/>   
        <label for="image">Image</label>
        <input type="text" bind:value={image} id="image" placeholder="Provide image path" title="Provide the appropriate name of your project" class="border-slate-500 rounded-lg bg-slate-100 p-2 placeholder:text-slate-600" required maxlength="100" name="image"/>             
        <label class="mt-4" for="desc">Description</label>
        <textarea name="desc" bind:value={desc} id="desc" minlength="100" class="border-slate-500 rounded-lg p-2 bg-slate-200 placeholder:text-slate-600 h-[40vh]" placeholder="What's the project about?" title="What's the project about?" required></textarea>
        <button class="bg-green-800 mt-2 border-none text-white rounded-lg px-2 py-2">Submit</button>
    </form>
</main>