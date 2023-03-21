import './index-2109bb13.js';

async function load({ fetch }) {
  const url = `/api/repos`;
  const response = await fetch(url);
  const parseRes = await response.json();
  return { parseRes };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-7ec817a2.js')).default;
const file = '_app/immutable/entry/explore-page.svelte.af658c06.js';
const universal_id = "src/routes/explore/+page.js";
const imports = ["_app/immutable/entry/explore-page.svelte.af658c06.js","_app/immutable/chunks/index.4a8c7099.js","_app/immutable/entry/explore-page.js.e40dc728.js","_app/immutable/chunks/_page.8dddde3c.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-8c4b83da.js.map
