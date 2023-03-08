<script>
    import { assets } from "$app/paths";
import "./app.css"
</script>

<nav class="p-5 text-xl shadow flex">
    <img src="/open-code.png" class="w-10 h-7 shadow-sm" alt="logo"/>
    <a class="mx-2" href="/">Home</a>
    <a class="mx-2" href="/about">About</a>
    <a class="mx-2" href="/blog/hello-world">Hello</a>
</nav>
  
<slot class="mx-1"></slot>
