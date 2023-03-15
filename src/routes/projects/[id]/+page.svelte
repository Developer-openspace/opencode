<script>
    /** @type {import('./$types').PageData} */  
    export let data;
    const detail=data.parseRes;
</script>

<svelte:head>
    <title>Open code | {detail.name}</title>
</svelte:head>

<main class="m-6 text-lg flex flex-col">
   <p>{detail.name}</p>
   <p>{detail.desc}</p>
</main>