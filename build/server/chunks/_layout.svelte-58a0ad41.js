import { c as create_ssr_component } from './index-25a4bfec.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"p-5 text-xl shadow flex justify-between"}"><div class="${"flex"}"><img src="${"/open-code.png"}" class="${"w-10 h-7 rounded-sm shadow-sm mr-2"}" alt="${"logo"}">
        <a class="${"mx-2"}" style="${"font-family: 'Tilt Neon';"}" href="${"/"}">OpenCode</a></div>
    <div class="${"sm:flex none"}"><a class="${"mx-2"}" href="${"/explore"}">Explore</a>
        <a class="${"mx-2"}" href="${"/sign_in"}">Sign in</a>
        <a class="${"ml-4 px-2 py-1 text-base text-white rounded-md border-slate-600 bg-slate-500 "}" href="${"/get_started"}">Get Started</a></div></nav>
  
${slots.default ? slots.default({ class: "mx-1" }) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-58a0ad41.js.map
