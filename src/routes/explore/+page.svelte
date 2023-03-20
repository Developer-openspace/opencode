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
            <div class="mb-16" id={item.id}>
                <a href={`/repos/${item.name}`} >
                    <img src="/static/comp-with-code.jpg" class="w-full rounded-[15px] shadow-lg" alt={item.alt}/>
                    <div class="mt-[-80px] h-[30px] text-gray-100 ml-8">
                        <p class="text-xl font-semibold">{item.full_name}</p>
                        <p class="text-lg">{item.description}</p>
                        <div class="flex it">
                            <a href={`${item.owner.html_url}`} target="_blank" rel="noreferrer">
                                <img class="w-[50px] h-[50px] rounded-[50px]" src={item.owner.avatar_url} alt={item.owner.login}/>
                            </a>
                            <a href={`${item.clone_url}`} download>Download repo</a>
                            <a href={`${item.forks_url}`} target="_blank" rel="noreferrer">Fork repo</a>
                        </div>
                    </div>
                </a>
            </div>
        {/each}
    </div>
</main>