<script>
    import Footer from "$lib/components/footer.svelte";
    import HowItWorks from "$lib/components/how_it_works.svelte";
    import ProjectSlider from "$lib/components/projectSlider.svelte";
</script>
<svelte:head>
    <title>Open code | Home</title>
</svelte:head>
<main class="text-xl bg-[url('/comp-with-code.jpg')] bg-cover max-sm:bg-center py-5 flex flex-col items-center justify-center max-sm:h-[70vh] h-[80vh]">
   <div class="flex flex-col bg-[rgba(0,0,0,0.7)] rounded-md p-5 items-center">
        <div class="text-center text-white text-xl font-medium sm:text-3xl uppercase mb-3">
            <p>Explore and Download <span class="text-slate-500">Computer</span> <span class="text-slate-500">science</span> projects</p>
            <p>ideal for your research or school work.</p>
        </div> 
        <p class="text-center text-white text-lg font-bold max-sm:w-[70vw]">Built for students, helps students and creative source out projects with ease.</p>
        <a href="/explore" class="m-5 p-2 text-base hover:text-slate-500 hover:bg-white hover:border-2 bg-slate-500 text-white rounded-md capitalize">View all projects</a>        
   </div>
</main>
<HowItWorks/>
<ProjectSlider/>
<Footer/>