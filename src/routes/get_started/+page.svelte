<script>
    
</script>

<svelte:head>
    <title>Open code | Get started</title>
</svelte:head>

<main class="flex flex-col items-center justify-center">
    <form method="POST" class="flex flex-col my-10 text-lg w-[90%] sm:w-[70%]" action="/api/projects">
        <h1 class="text-[40px] font-extrabold mb-10 text-slate-800">Get Started with OpenCode</h1>
        <label for="username">Username</label>
        <input type="text" id="username" title="Enter username" placeholder="Enter your username" class="border-slate-500 rounded-lg bg-slate-100 p-2 placeholder:text-slate-600" required maxlength="100" name="username"/>        
        <label class="mt-4" for="phone">Phone number</label>
        <input type="number" id="phone" title="Enter phone number" name="phone" maxlength="15" class="border-slate-500 rounded-lg p-2 bg-slate-200 placeholder:text-slate-600" placeholder="254 7xxxxxxxx" required/>
        <label class="mt-4" for="email">Email</label>
        <input type="email" id="email" title="Enter email" name="phone" maxlength="50" class="border-slate-500 rounded-lg p-2 bg-slate-200 placeholder:text-slate-600" placeholder="kevin@gmail.com" required/>
        <p class="text-sm text-slate-500 my-2">Please note that the phone number and email address you've entered would be important in future, enter appropriate phone number and email.</p>
        <button class="bg-green-800 mt-2 border-none text-white rounded-lg px-2 py-2">Submit</button>
    </form>
</main>