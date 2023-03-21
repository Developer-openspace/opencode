const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["api.jpg","open-code.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.43ad77c3.js","imports":["_app/immutable/entry/start.43ad77c3.js","_app/immutable/chunks/index.4a8c7099.js","_app/immutable/chunks/paths.674fe392.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c2fbdfaf.js","imports":["_app/immutable/entry/app.c2fbdfaf.js","_app/immutable/chunks/index.4a8c7099.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-47c9cd5a.js'),
			() => import('./chunks/1-c6b3fe8f.js'),
			() => import('./chunks/2-b67cb447.js'),
			() => import('./chunks/3-8c4b83da.js'),
			() => import('./chunks/4-3d406793.js'),
			() => import('./chunks/5-028028dd.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/repos",
				pattern: /^\/api\/repos\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-c2f0442a.js')
			},
			{
				id: "/api/repos/[repo]",
				pattern: /^\/api\/repos\/([^/]+?)\/?$/,
				params: [{"name":"repo","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server-6711eaf3.js')
			},
			{
				id: "/api/user",
				pattern: /^\/api\/user\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-70fde976.js')
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/get_started",
				pattern: /^\/get_started\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sign_in",
				pattern: /^\/sign_in\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
