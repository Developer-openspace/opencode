<script>

    let content=[
        {
            name:"School management",
            desc:"this is a school management that manages school records and files.",
            image:"/comp-with-code.jpg",
            alt:"image1"
        },
        {
            name:"Hostel management",
            desc:"This is a hostel management.",
            image:"/sleep.jpg",
            alt:"image2"
        },
        {
            name:"Booking management",
            desc:"This is a booking management.",
            image:"/figure.jpg",
            alt:"image3"
        },
        {
            name:"Hostel management",
            desc:"this is a hotel management.",
            image:"/marketing.jpg",
            alt:"image4"
        },
        {
            name:"Health management",
            desc:"This is a healtht",
            image:"/minion.jpg",
            alt:"image5"
        },
        {
            name:"Leave management",
            desc:"This is a leave management",
            image:"/minons1.jpg",
            alt:"image6"
        },
        {
            name:"Loan management",
            desc:"This is a loat that give out loans to user per number of savings and amount of savings.",
            image:"/comp-with-code1.jpg",
            alt:"image7"
        },
        {
            name:"Bank management",
            desc:"This is a bankint that organises data into clusters and collections",
            image:"/comp-with-code2.jpg",
            alt:"image8"
        },
        {
            name:"Campus management",
            desc:"This is a campus management development on nodejs",
            image:"/robo-lego.jpg",
            alt:"image9"
        },
        {
            name:"Medical assistance chat bot",
            desc:"This is a medical assistance, was created with a machine learning library, it performs google queries for the user/",
            image:"/comp-with-code4.jpg",
            alt:"image10"
        },
        {
            name:"Management",
            desc:"This is a simple management",
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
            <div class="mb-16">
                <a href={item.image} >
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