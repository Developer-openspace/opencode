<script>
    import { assets } from "$app/paths";
import "./app.css"
</script>

<nav class="p-5 text-xl shadow flex justify-between">
    <div class="flex">
        <img src="/open-code.png" class="w-10 h-7 rounded-sm shadow-sm mr-2" alt="logo"/>
        <a class="mx-2" href="/explore">Explore</a>
        <a class="mx-2" href="/about">About</a>
        <a class="mx-2" href="/projects/add">Add</a>
        <a class="mx-2" href="/sign_in">Sign in</a>
    </div>
    <a class="ml-20 px-2 py-1 text-base text-white rounded-md border-slate-600 bg-slate-500" href="/get_started">Get Started</a>
</nav>
  
<slot class="mx-1"></slot>
