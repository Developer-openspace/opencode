<script>
    let content=[
        {
            name:"Management system",
            image:"/comp-with-code.jpg",
            alt:"image1"
        },
        {
            name:"Management system",
            image:"/sleep.jpg",
            alt:"image2"
        },
        {
            name:"Management system",
            image:"/figure.jpg",
            alt:"image3"
        },
        {
            name:"Management system",
            image:"/marketing.jpg",
            alt:"image4"
        },
        {
            name:"Management system",
            image:"/minion.jpg",
            alt:"image5"
        },
        {
            name:"Management system",
            image:"/minons1.jpg",
            alt:"image6"
        },
        {
            name:"Management system",
            image:"/comp-with-code1.jpg",
            alt:"image7"
        },
        {
            name:"Management system",
            image:"/comp-with-code2.jpg",
            alt:"image8"
        },
        {
            name:"Management system",
            image:"/robo-lego.jpg",
            alt:"image9"
        },
        {
            name:"Management system",
            image:"/comp-with-code4.jpg",
            alt:"image10"
        },
        {
            name:"Management system",
            image:"/comp-with-code3.jpg",
            alt:"image11"
        },
    ]
</script>
<svelte:head>
    <title>Open code | Home</title>
</svelte:head>

<main class="m-6 text-lg flex justify-center">
    <div class=" grid-cols-1 sm:columns-3 sm:gap-2">
        {#each content as item }
            <img src={item.image} class="w-full mb-6" alt={item.alt}/>
        {/each}
    </div>
</main>