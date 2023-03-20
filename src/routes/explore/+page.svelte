<script>
    /** @type {import('./$types').PageData} */  
    export let data;
    console.log(data.parseRes)
</script>

<svelte:head>
    <title>Open code | Explore</title>
</svelte:head>

<main class="m-6 text-lg flex justify-center">
    <div class="grid-cols-1 sm:columns-3 sm:gap-2">
        {#each data.parseRes as item }
            <div class="mb-16">
                <a href={`/projects/${item.count}`} >
                    <img src={item.image} class="w-full rounded-[15px] shadow-lg" alt={item.alt}/>
                    <div class="mt-[-80px] h-[30px] text-gray-100 ml-8">
                        <p class="text-xl font-semibold">{item.name}</p>
                        <p class="text-lg">{item.desc.slice(0,20)}</p>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</main>