import { c as create_ssr_component } from './index-25a4bfec.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1n78794_START -->${$$result.title = `<title>Open code | Sign in</title>`, ""}<!-- HEAD_svelte-1n78794_END -->`, ""}

<main class="${"flex flex-col items-center justify-center"}"><form method="${"POST"}" class="${"flex flex-col my-10 text-lg w-[90%] sm:w-[70%]"}" action="${"/api/projects"}"><h1 class="${"text-[40px] font-extrabold mb-10 text-slate-800"}">Welcome back</h1>
        <label for="${"username"}">Username</label>
        <input type="${"text"}" title="${"Enter username"}" placeholder="${"Enter your username"}" class="${"border-slate-500 rounded-lg bg-slate-100 p-2 placeholder:text-slate-600"}" required maxlength="${"100"}" name="${"username"}">        
        <label class="${"mt-4"}" for="${"phone"}">Phone number</label>
        <input type="${"number"}" id="${"phone"}" title="${"Enter phone number"}" name="${"phone"}" maxlength="${"50"}" class="${"border-slate-500 rounded-lg p-2 bg-slate-200 placeholder:text-slate-600"}" placeholder="${"254 7xxxxxxxx"}" required>
        <p class="${"text-sm text-slate-500 my-2"}">Provide correct credentials.</p>
        <button class="${"bg-green-800 mt-2 border-none text-white rounded-lg px-2 py-2"}">Submit</button></form></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-887d0fde.js.map
