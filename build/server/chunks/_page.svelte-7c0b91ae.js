import { c as create_ssr_component, v as validate_component } from './index-25a4bfec.js';

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"text-xl flex flex-col px-5 py-8 text-slate-700 bg-slate-200"}"><div class="${"flex max-sm:flex-col justify-around"}"><div class="${"flex flex-col"}"><p class="${"font-bold mb-2 text-3xl"}">OpenCode</p>
            <p class="${"sm:w-[20vw]"}">Get Access to wide varieties of projects, including machine learning projects and data science.
            </p></div>
        <div class="${"flex flex-col max-sm:mt-7"}"><p class="${"font-bold mb-2"}">Start for free</p>
            <form method="${"POST"}" class="${"flex justify-between bg-white border-2 border-slate-300 p-[1px] rounded-md"}"><input type="${"email"}" placeholder="${"Email"}" class="${"focus:border-0 w-[20vw] p-1 text-base"}" title="${"Subscribe by entering email"}" required>
                <button class="${"text-white bg-slate-500 rounded-md px-2 py-[6px] text-base"}">Get Started</button></form></div></div>
    <div class="${"flex justify-around mt-6"}"><ol class="${"flex max-sm:flex-col"}"><li class="${"mx-3"}"><a href="${"https://twitter.com/matano_imran"}">Twitter</a></li>
            <li class="${"mx-3"}"><a href="${"mailto:imranmat254@gmail.com"}">Email</a></li>
            <li class="${"mx-3"}"><a href="${"https://wa.me/+254734720752"}">Whatsapp</a></li>
            <li class="${"mx-3"}"><a href="${"https://linkedin.com/imran_matano_ngati"}">Linkedin</a></li>
            <li class="${"mx-3"}"><a href="${"https://instagram.com/imrany00"}">Instagram</a></li></ol></div></main>`;
});
const How_it_works = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"flex justify-center bg-gray-100 py-14"}"><div class="${"flex flex-col items-center"}"><p class="${"text-center text-3xl text-slate-700 font-bold"}">How it works</p>
        <p class="${"text-center m-3 text-lg max-sm:w-[80vw] w-[50vw]"}">This is the website you wish you knew earlier. In here, you get a lot of free and paid resources that will help your in your learning.</p>
        <div class="${"flex justify-around max-sm:flex-col items-center my-10"}"><div class="${"mx-9"}"><p class="${"text-xl text-slate-500 font-semibold"}">Explore</p>
                <p class="${"text-lg max-sm:w-[70vw] max-sm:mb-7 w-[20vw]"}">Scroll through the available projects, find a project of your liking.</p></div> 
            <div class="${"mx-9"}"><p class="${"text-xl text-slate-500 font-semibold"}">Discover</p>
                <p class="${"text-lg max-sm:w-[70vw] max-sm:mb-7 w-[20vw]"}">After finding a project, read its details and see if it fits in your research or work.</p></div> 
            <div class="${"mx-9"}"><p class="${"text-xl text-slate-500 font-semibold"}">Download</p>
                <p class="${"text-lg max-sm:w-[70vw] max-sm:mb-7 w-[20vw]"}">Then, download the project.</p></div></div></div></main>`;
});
const ProjectSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"flex flex-col items-center py-14"}"><p class="${"text-3xl text-slate-700 font-bold text-center max-sm:text-xl"}">Download any Project you need</p>
    <div class="${"mt-10 sm:grid sm:grid-cols-3 gap-4 max-sm:flex max-sm:flex-col"}"><a href="${"/explore"}" class="${"hover:shadow-lg mt-4 bg-slate-100 py-9 px-5 max-sm:w-[70vw]"}"><p class="${"text-lg text-center font-bold"}">Machine learning projects</p></a>
        <a href="${"/explore"}" class="${"hover:shadow-lg mt-4 bg-slate-100 py-9 px-5 max-sm:w-[70vw]"}"><p class="${"text-lg text-center font-bold"}">Management systems</p></a>
        <a href="${"/explore"}" class="${"hover:shadow-lg mt-4 bg-slate-100 py-9 px-5 max-sm:w-[70vw]"}"><p class="${"text-lg text-center font-bold"}">Web development projects</p></a>
        <a href="${"/explore"}" class="${"hover:shadow-lg mt-4 bg-slate-100 py-9 px-5 max-sm:w-[70vw]"}"><p class="${"text-lg text-center font-bold"}">Backend projects</p></a>
        <a href="${"/explore"}" class="${"hover:shadow-lg mt-4 bg-slate-100 py-9 px-5 max-sm:w-[70vw]"}"><p class="${"text-lg text-center font-bold"}">Fullstack web dev projects</p></a>
        <a href="${"/explore"}" class="${"hover:shadow-lg mt-4 bg-slate-100 py-9 px-5 max-sm:w-[70vw]"}"><p class="${"text-lg text-center font-bold"}">Javascript projects</p></a></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1vncl55_START -->${$$result.title = `<title>Open code | Home</title>`, ""}<!-- HEAD_svelte-1vncl55_END -->`, ""}
<main class="${"text-xl bg-[url('/api.jpg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center max-sm:h-[70vh] h-[80vh]"}"><div class="${"flex flex-col bg-[rgba(0,0,0,0.6)] w-full h-[80vh] max-sm:h-[70vh] p-5 items-center justify-center"}"><div class="${"text-center text-white text-xl font-medium sm:text-3xl uppercase mb-3"}"><p>OpenCode provides Access to different <span class="${"text-slate-500"}">Computer</span></p>
            <p><span class="${"text-slate-500"}">science</span> projects.</p></div> 
        <p class="${"text-center text-white text-lg font-bold max-sm:w-[70vw]"}">Built for students, to explore and download free and paid projects with ease.</p>
        <a href="${"/explore"}" class="${"m-5 p-2 text-base hover:text-slate-500 hover:bg-white hover:border-2 bg-slate-500 text-white rounded-md capitalize"}">View all projects</a></div></main>
${validate_component(How_it_works, "HowItWorks").$$render($$result, {}, {}, {})}
${validate_component(ProjectSlider, "ProjectSlider").$$render($$result, {}, {}, {})}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7c0b91ae.js.map
