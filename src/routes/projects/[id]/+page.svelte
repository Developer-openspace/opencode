<script>
    /** @type {import('./$types').PageData} */  
    export let data;
    const detail=data.parseRes;
</script>

<main class="m-6 text-lg flex flex-col">
   <p>{detail.name}</p>
   <p>{detail.desc}</p>
</main>