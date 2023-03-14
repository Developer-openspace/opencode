<script>

</script>

<main class="flex flex-col items-center justify-center">
    <form method="POST" class="flex flex-col my-10 text-lg w-[90%] sm:w-[70%]" action="/api/projects">
        <label>Name</label>
        <input type="text" placeholder="Provide the appropriate name of your project" title="Provide the appropriate name of your project" class="border-slate-500 rounded-lg bg-slate-100 p-2 placeholder:text-slate-600" required maxlength="100" name="name"/>        
        <label class="mt-4">Description</label>
        <textarea name="desc" minlength="100" class="border-slate-500 rounded-lg p-2 bg-slate-200 placeholder:text-slate-600 h-[40vh]" placeholder="What's the project about?" title="What's the project about?" required></textarea>
        <button class="bg-green-800 mt-2 border-none text-white rounded-lg px-2 py-2">Submit</button>
    </form>
</main>