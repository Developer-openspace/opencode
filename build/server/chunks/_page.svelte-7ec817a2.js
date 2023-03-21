import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from './index-25a4bfec.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1b1jc0b_START -->${$$result.title = `<title>Open code | Explore</title>`, ""}<!-- HEAD_svelte-1b1jc0b_END -->`, ""}

<main class="${"m-6 text-lg flex justify-center"}"><div class="${"grid-cols-1 sm:columns-3 sm:gap-2"}">${each(data.parseRes, (item) => {
    return `<div class="${"mb-6 bg-slate-600 rounded-[15px] pb-4 shadow-lg"}"${add_attribute("id", item.id, 0)}>
                <img${add_attribute("src", `https://opengraph.githubassets.com/1f3977f37995637ee111830aa8ae02d8c0ac6838db385a43e9009b4a84708f47/${item.full_name}`, 0)} class="${"w-full rounded-tr-[15px] rounded-tl-[15px]"}"${add_attribute("alt", item.alt, 0)}>
                <div class="${"text-gray-100 ml-8"}"><p class="${"mt-3 text-xl font-semibold"}">${escape(item.full_name)}</p>
                    <p class="${"text-lg"}">${escape(item?.description == null ? "" : item.description)}</p>
                    <div class="${"mt-4 mr-6 flex justify-between items-center"}"><a${add_attribute("href", `${item.owner.html_url}`, 0)} target="${"_blank"}" rel="${"noreferrer"}"><img class="${"w-[50px] h-[50px] rounded-[50px]"}"${add_attribute("src", item.owner.avatar_url, 0)}${add_attribute("alt", item.owner.login, 0)}></a> 
                        
                        <div class="${"flex"}"><a class="${"mr-4"}"${add_attribute("href", `${item.clone_url}`, 0)} target="${"_blank"}" rel="${"noreferrer"}"><button class="${"py-2 px-3 hover:shadow-lg bg-slate-500 text-base hover:text-slate-500 hover:bg-white"}"><i class="${"fa fa-share"}"></i>
                                </button></a>
                            <a${add_attribute("href", `https://github.com/${item.full_name}/archive/refs/heads/${item.default_branch}.zip`, 0)}${add_attribute("download", item.name, 0)}><button class="${"py-2 px-3 rounded-md hover:shadow-lg bg-slate-500 text-base hover:text-slate-500 hover:bg-white"}"><i class="${"fa fa-download"}"></i></button>
                            </a></div>
                    </div></div>
            </div>`;
  })}</div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7ec817a2.js.map
