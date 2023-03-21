<script>
    /** @type {import('./$types').PageData} */  
    export let data;
</script>

<svelte:head>
    <title>Open code | Explore</title>
</svelte:head>

<main class="m-6 text-lg flex justify-center">
    <div class="grid-cols-1 sm:columns-3 sm:gap-2">
        {#each data.parseRes as item }
            <div class="mb-4 bg-slate-600 rounded-[15px] pb-4 shadow-lg" id={item.id}>
                <img src="/comp-with-code1.jpg" class="w-full rounded-tr-[15px] rounded-tl-[15px]" alt={item.alt}/>
                <div class=" text-gray-100 ml-8">
                    <p class="mt-3 text-xl font-semibold">{item.full_name}</p>
                    <p class="text-lg">{item?.description==null?"":item.description}</p>
                    <div class="mt-4 mr-6  flex justify-between items-center">
                        <a href={`${item.owner.html_url}`} target="_blank" rel="noreferrer">
                            <img class="w-[50px] h-[50px] rounded-[50px]" src={item.owner.avatar_url} alt={item.owner.login}/>
                        </a> 
                        <!-- https://github.com/imrany/django-rest/archive/refs/heads/main.zip -->
                        <div class="flex">
                            <a class="mr-4" href={`${item.clone_url}`} target="_blank" rel="noreferrer">
                                <button class="py-2 px-3 hover:shadow-lg bg-slate-500  text-base hover:text-slate-500 hover:bg-white">
                                    <i class="fa fa-share"></i>
                                </button>
                            </a>
                            <a href={`https://github.com/${item.full_name}/archive/refs/heads/${item.default_branch}.zip`} download={item.name}>
                                <button class="py-2 px-3 rounded-md hover:shadow-lg bg-slate-500  text-base hover:text-slate-500 hover:bg-white">
                                    <i class="fa fa-download"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>