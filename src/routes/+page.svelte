<script>
    import Footer from "$lib/components/footer.svelte";
    import HowItWorks from "$lib/components/how_it_works.svelte";
    import ProjectSlider from "$lib/components/projectSlider.svelte";
</script>
<svelte:head>
    <title>Open code | Home</title>
</svelte:head>
<main class="text-xl bg-[url('/comp-with-code.jpg')] bg-cover max-sm:bg-center py-5 flex flex-col items-center max-sm:h-[60vh] h-[80vh]">
   <div class="flex flex-col bg-[rgba(0,0,0,0.5)] rounded-md p-3 items-center mt-[7rem]">
        <div class="text-center text-white text-xl font-medium sm:text-3xl uppercase mb-3">
            <p>OpenCode provides Access to different <span class="text-slate-500">Computer</span></p>
            <p><span class="text-slate-500">science</span> projects.</p>
        </div> 
        <p class="text-center text-white text-lg font-bold max-sm:w-[70vw]">Built for students, explore and download free and paid projects easily.</p>
        <a href="/explore" class="m-5 p-2 text-base hover:text-slate-500 hover:bg-white hover:border-2 bg-slate-500 text-white rounded-md capitalize">View all projects</a>        
   </div>
</main>
<HowItWorks/>
<ProjectSlider/>
<Footer/>