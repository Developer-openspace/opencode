import{n as _e,s as nt,o as Me,t as ce}from"../chunks/index.4a8c7099.js";import{a as at,b as B}from"../chunks/paths.674fe392.js";function rt(e,a){return e==="/"||a==="ignore"?e:a==="never"?e.endsWith("/")?e.slice(0,-1):e:a==="always"&&!e.endsWith("/")?e+"/":e}function ot(e){return e.split("%25").map(decodeURI).join("%25")}function it(e){for(const a in e)e[a]=decodeURIComponent(e[a]);return e}const st=["href","pathname","search","searchParams","toString","toJSON"];function ct(e,a){const i=new URL(e);for(const s of st){let u=i[s];Object.defineProperty(i,s,{get(){return a(),u},enumerable:!0,configurable:!0})}return lt(i),i}function lt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ft="/__data.json";function ut(e){return e.replace(/\/$/,"")+ft}const J=[];function Re(e,a=_e){let i;const s=new Set;function u(l){if(nt(e,l)&&(e=l,i)){const g=!J.length;for(const p of s)p[1](),J.push(p,e);if(g){for(let p=0;p<J.length;p+=2)J[p][0](J[p+1]);J.length=0}}}function d(l){u(l(e))}function v(l,g=_e){const p=[l,g];return s.add(p),s.size===1&&(i=a(u)||_e),l(e),()=>{s.delete(p),s.size===0&&(i(),i=null)}}return{set:u,update:d,subscribe:v}}const dt="1679386834060",We="sveltekit:snapshot",Xe="sveltekit:scroll",C="sveltekit:index",ue={tap:1,hover:2,viewport:3,eager:4,off:-1};function ze(e){let a=e.baseURI;if(!a){const i=e.getElementsByTagName("base");a=i.length?i[0].href:e.URL}return a}function ee(){return{x:pageXOffset,y:pageYOffset}}function le(e,a){return e.getAttribute(`data-sveltekit-${a}`)}const Ge={...ue,"":ue.hover};function Ze(e){let a=e.assignedSlot??e.parentNode;return(a==null?void 0:a.nodeType)===11&&(a=a.host),a}function He(e,a){for(;e&&e!==a;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function be(e,a){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,u=!i||!!s||Se(i,a)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:i,external:u,target:s}}function fe(e){let a=null,i=null,s=null,u=null,d=e;for(;d&&d!==document.documentElement;)i===null&&(i=le(d,"preload-code")),s===null&&(s=le(d,"preload-data")),a===null&&(a=le(d,"noscroll")),u===null&&(u=le(d,"reload")),d=Ze(d);return{preload_code:Ge[i??"off"],preload_data:Ge[s??"off"],noscroll:a==="off"?!1:a===""?!0:null,reload:u==="off"?!1:u===""?!0:null}}function Be(e){const a=Re(e);let i=!0;function s(){i=!0,a.update(v=>v)}function u(v){i=!1,a.set(v)}function d(v){let l;return a.subscribe(g=>{(l===void 0||i&&g!==l)&&v(l=g)})}return{notify:s,set:u,subscribe:d}}function ht(){const{set:e,subscribe:a}=Re(!1);let i;async function s(){clearTimeout(i);const u=await fetch(`${at}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(u.ok){const v=(await u.json()).version!==dt;return v&&(e(!0),clearTimeout(i)),v}else throw new Error(`Version check failed: ${u.status}`)}return{subscribe:a,check:s}}function Se(e,a){return e.origin!==location.origin||!e.pathname.startsWith(a)}function Qe(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Je(e,a){const i=JSON.stringify(a);try{sessionStorage[e]=i}catch{}}function pt(...e){let a=5381;for(const i of e)if(typeof i=="string"){let s=i.length;for(;s;)a=a*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let u=s.length;for(;u;)a=a*33^s[--u]}else throw new TypeError("value must be a string or TypedArray");return(a>>>0).toString(36)}const de=window.fetch;window.fetch=(e,a)=>((e instanceof Request?e.method:(a==null?void 0:a.method)||"GET")!=="GET"&&ne.delete(Ae(e)),de(e,a));const ne=new Map;function gt(e,a){const i=Ae(e,a),s=document.querySelector(i);if(s!=null&&s.textContent){const{body:u,...d}=JSON.parse(s.textContent),v=s.getAttribute("data-ttl");return v&&ne.set(i,{body:u,init:d,ttl:1e3*Number(v)}),Promise.resolve(new Response(u,d))}return de(e,a)}function mt(e,a,i){if(ne.size>0){const s=Ae(e,i),u=ne.get(s);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(u.body,u.init);ne.delete(s)}}return de(a,i)}function Ae(e,a){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(a!=null&&a.headers||a!=null&&a.body){const u=[];a.headers&&u.push([...new Headers(a.headers)].join(",")),a.body&&(typeof a.body=="string"||ArrayBuffer.isView(a.body))&&u.push(a.body),s+=`[data-hash="${pt(...u)}"]`}return s}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(e){const a=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${bt(e).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return a.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return a.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const v=s.split(/\[(.+?)\](?!\])/);return"/"+v.map((g,p)=>{if(p%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(L=>parseInt(L,16))));const y=yt.exec(g);if(!y)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,I,E,U]=y;return a.push({name:E,matcher:U,optional:!!$,rest:!!I,chained:I?p===1&&v[0]==="":!1}),I?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),params:a}}function _t(e){return!/^\([^)]+\)$/.test(e)}function bt(e){return e.slice(1).split("/").filter(_t)}function vt(e,a,i){const s={},u=e.slice(1);let d=0;for(let v=0;v<a.length;v+=1){const l=a[v],g=u[v-d];if(l.chained&&l.rest&&d){s[l.name]=u.slice(v-d,v+1).filter(p=>p).join("/"),d=0;continue}if(g===void 0){l.rest&&(s[l.name]="");continue}if(!l.matcher||i[l.matcher](g)){s[l.name]=g;continue}if(l.optional&&l.chained){d++;continue}return}if(!d)return s}function ve(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Et({nodes:e,server_loads:a,dictionary:i,matchers:s}){const u=new Set(a);return Object.entries(i).map(([l,[g,p,y]])=>{const{pattern:$,params:I}=wt(l),E={id:l,exec:U=>{const L=$.exec(U);if(L)return vt(L,I,s)},errors:[1,...y||[]].map(U=>e[U]),layouts:[0,...p||[]].map(v),leaf:d(g)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(l){const g=l<0;return g&&(l=~l),[g,e[l]]}function v(l){return l===void 0?l:[u.has(l),e[l]]}}let te=class{constructor(a,i){this.status=a,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${a}`}}toString(){return JSON.stringify(this.body)}},Ke=class{constructor(a,i){this.status=a,this.location=i}};function kt(e){e.client}const V={url:Be({}),page:Be({}),navigating:Re(null),updated:ht()};async function St(e){var a;for(const i in e)if(typeof((a=e[i])==null?void 0:a.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([s,u])=>[s,await u])));return e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Rt=-1,At=-2,Lt=-3,It=-4,Ut=-5,Ot=-6;function Pt(e,a){if(typeof e=="number")return u(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,s=Array(i.length);function u(d,v=!1){if(d===Rt)return;if(d===Lt)return NaN;if(d===It)return 1/0;if(d===Ut)return-1/0;if(d===Ot)return-0;if(v)throw new Error("Invalid input");if(d in s)return s[d];const l=i[d];if(!l||typeof l!="object")s[d]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],p=a==null?void 0:a[g];if(p)return s[d]=p(u(l[1]));switch(g){case"Date":s[d]=new Date(l[1]);break;case"Set":const y=new Set;s[d]=y;for(let E=1;E<l.length;E+=1)y.add(u(l[E]));break;case"Map":const $=new Map;s[d]=$;for(let E=1;E<l.length;E+=2)$.set(u(l[E]),u(l[E+1]));break;case"RegExp":s[d]=new RegExp(l[1],l[2]);break;case"Object":s[d]=Object(l[1]);break;case"BigInt":s[d]=BigInt(l[1]);break;case"null":const I=Object.create(null);s[d]=I;for(let E=1;E<l.length;E+=2)I[l[E]]=u(l[E+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);s[d]=g;for(let p=0;p<l.length;p+=1){const y=l[p];y!==At&&(g[p]=u(y))}}else{const g={};s[d]=g;for(const p in l){const y=l[p];g[p]=u(y)}}return s[d]}return u(0)}function Nt(e){return e.filter(a=>a!=null)}const H=Qe(Xe)??{},Q=Qe(We)??{};function Ee(e){H[e]=ee()}function jt(e,a){var Ce;const i=Et(e),s=e.nodes[0],u=e.nodes[1];s(),u();const d=document.documentElement,v=[],l=[];let g=null;const p={before_navigate:[],after_navigate:[]};let y={branch:[],error:null,url:null},$=!1,I=!1,E=!0,U=!1,L=!1,K=!1,F=!1,M,j=(Ce=history.state)==null?void 0:Ce[C];j||(j=Date.now(),history.replaceState({...history.state,[C]:j},"",location.href));const he=H[j];he&&(history.scrollRestoration="manual",scrollTo(he.x,he.y));let z,Le,ae;async function Ie(){ae=ae||Promise.resolve(),await ae,ae=null;const n=new URL(location.href),t=W(n,!0);g=null,await Ne(t,n,[])}function Ue(n){l.some(t=>t==null?void 0:t.snapshot)&&(Q[n]=l.map(t=>{var o;return(o=t==null?void 0:t.snapshot)==null?void 0:o.capture()}))}function Oe(n){var t;(t=Q[n])==null||t.forEach((o,r)=>{var f,c;(c=(f=l[r])==null?void 0:f.snapshot)==null||c.restore(o)})}async function pe(n,{noScroll:t=!1,replaceState:o=!1,keepFocus:r=!1,state:f={},invalidateAll:c=!1},m,h){return typeof n=="string"&&(n=new URL(n,ze(document))),se({url:n,scroll:t?ee():null,keepfocus:r,redirect_chain:m,details:{state:f,replaceState:o},nav_token:h,accepted:()=>{c&&(F=!0)},blocked:()=>{},type:"goto"})}async function Pe(n){return g={id:n.id,promise:$e(n).then(t=>(t.type==="loaded"&&t.state.error&&(g=null),t))},g.promise}async function re(...n){const o=i.filter(r=>n.some(f=>r.exec(f))).map(r=>Promise.all([...r.layouts,r.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(o)}async function Ne(n,t,o,r,f,c={},m){var _,w,A;Le=c;let h=n&&await $e(n);if(h||(h=await qe(t,{id:null},await Z(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)),t=(n==null?void 0:n.url)||t,Le!==c)return!1;if(h.type==="redirect")if(o.length>10||o.includes(t.pathname))h=await oe({status:500,error:await Z(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return pe(new URL(h.location,t).href,{},[...o,t.pathname],c),!1;else((_=h.props.page)==null?void 0:_.status)>=400&&await V.updated.check()&&await X(t);if(v.length=0,F=!1,U=!0,r&&(Ee(r),Ue(r)),(w=h.props.page)!=null&&w.url&&h.props.page.url.pathname!==t.pathname&&(t.pathname=(A=h.props.page)==null?void 0:A.url.pathname),f&&f.details){const{details:S}=f,O=S.replaceState?0:1;if(S.state[C]=j+=O,history[S.replaceState?"replaceState":"pushState"](S.state,"",t),!S.replaceState){let R=j+1;for(;Q[R]||H[R];)delete Q[R],delete H[R],R+=1}}if(g=null,I?(y=h.state,h.props.page&&(h.props.page.url=t),M.$set(h.props)):je(h),f){const{scroll:S,keepfocus:O}=f,{activeElement:R}=document;await ce();const b=document.activeElement!==R&&document.activeElement!==document.body;if(!O&&!b&&await ke(),E){const P=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));S?scrollTo(S.x,S.y):P?P.scrollIntoView():scrollTo(0,0)}}else await ce();E=!0,h.props.page&&(z=h.props.page),m&&m(),U=!1}function je(n){var r;y=n.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),z=n.props.page,M=new e.root({target:a,props:{...n.props,stores:V,components:l},hydrate:!0}),Oe(j);const o={from:null,to:{params:y.params,route:{id:((r=y.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(f=>f(o)),I=!0}async function Y({url:n,params:t,branch:o,status:r,error:f,route:c,form:m}){let h="never";for(const R of o)(R==null?void 0:R.slash)!==void 0&&(h=R.slash);n.pathname=rt(n.pathname,h),n.search=n.search;const _={type:"loaded",state:{url:n,params:t,branch:o,error:f,route:c},props:{constructors:Nt(o).map(R=>R.node.component)}};m!==void 0&&(_.props.form=m);let w={},A=!z,S=0;for(let R=0;R<Math.max(o.length,y.branch.length);R+=1){const b=o[R],P=y.branch[R];(b==null?void 0:b.data)!==(P==null?void 0:P.data)&&(A=!0),b&&(w={...w,...b.data},A&&(_.props[`data_${S}`]=w),S+=1)}return(!y.url||n.href!==y.url.href||y.error!==f||m!==void 0&&m!==z.form||A)&&(_.props.page={error:f,params:t,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(n),form:m??null,data:A?w:z.data}),_}async function ge({loader:n,parent:t,url:o,params:r,route:f,server_data_node:c}){var w,A,S;let m=null;const h={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},_=await n();if((w=_.universal)!=null&&w.load){let O=function(...b){for(const P of b){const{href:D}=new URL(P,o);h.dependencies.add(D)}};const R={route:{get id(){return h.route=!0,f.id}},params:new Proxy(r,{get:(b,P)=>(h.params.add(P),b[P])}),data:(c==null?void 0:c.data)??null,url:ct(o,()=>{h.url=!0}),async fetch(b,P){let D;b instanceof Request?(D=b.url,P={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...P}):D=b;const q=new URL(D,o);return O(q.href),q.origin===o.origin&&(D=q.href.slice(o.origin.length)),I?mt(D,q.href,P):gt(D,P)},setHeaders:()=>{},depends:O,parent(){return h.parent=!0,t()}};m=await _.universal.load.call(null,R)??null,m=m?await St(m):null}return{node:_,loader:n,server:c,universal:(A=_.universal)!=null&&A.load?{type:"data",data:m,uses:h}:null,data:m??(c==null?void 0:c.data)??null,slash:((S=_.universal)==null?void 0:S.trailingSlash)??(c==null?void 0:c.slash)}}function Te(n,t,o,r,f){if(F)return!0;if(!r)return!1;if(r.parent&&n||r.route&&t||r.url&&o)return!0;for(const c of r.params)if(f[c]!==y.params[c])return!0;for(const c of r.dependencies)if(v.some(m=>m(new URL(c))))return!0;return!1}function me(n,t){return(n==null?void 0:n.type)==="data"?n:(n==null?void 0:n.type)==="skip"?t??null:null}async function $e({id:n,invalidating:t,url:o,params:r,route:f}){if((g==null?void 0:g.id)===n)return g.promise;const{errors:c,layouts:m,leaf:h}=f,_=[...m,h];c.forEach(k=>k==null?void 0:k().catch(()=>{})),_.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const A=y.url?n!==y.url.pathname+y.url.search:!1,S=y.route?f.id!==y.route.id:!1;let O=!1;const R=_.map((k,x)=>{var G;const N=y.branch[x],T=!!(k!=null&&k[0])&&((N==null?void 0:N.loader)!==k[1]||Te(O,S,A,(G=N.server)==null?void 0:G.uses,r));return T&&(O=!0),T});if(R.some(Boolean)){try{w=await Ye(o,R)}catch(k){return oe({status:k instanceof te?k.status:500,error:await Z(k,{url:o,params:r,route:{id:f.id}}),url:o,route:f})}if(w.type==="redirect")return w}const b=w==null?void 0:w.nodes;let P=!1;const D=_.map(async(k,x)=>{var ye;if(!k)return;const N=y.branch[x],T=b==null?void 0:b[x];if((!T||T.type==="skip")&&k[1]===(N==null?void 0:N.loader)&&!Te(P,S,A,(ye=N.universal)==null?void 0:ye.uses,r))return N;if(P=!0,(T==null?void 0:T.type)==="error")throw T;return ge({loader:k[1],url:o,params:r,route:f,parent:async()=>{var Fe;const Ve={};for(let we=0;we<x;we+=1)Object.assign(Ve,(Fe=await D[we])==null?void 0:Fe.data);return Ve},server_data_node:me(T===void 0&&k[0]?{type:"skip"}:T??null,k[0]?N==null?void 0:N.server:void 0)})});for(const k of D)k.catch(()=>{});const q=[];for(let k=0;k<_.length;k+=1)if(_[k])try{q.push(await D[k])}catch(x){if(x instanceof Ke)return{type:"redirect",location:x.location};let N=500,T;if(b!=null&&b.includes(x))N=x.status??N,T=x.error;else if(x instanceof te)N=x.status,T=x.body;else{if(await V.updated.check())return await X(o);T=await Z(x,{params:r,url:o,route:{id:f.id}})}const G=await xe(k,q,c);return G?await Y({url:o,params:r,branch:q.slice(0,G.idx).concat(G.node),status:N,error:T,route:f}):await qe(o,{id:f.id},T,N)}else q.push(void 0);return await Y({url:o,params:r,branch:q,status:200,error:null,route:f,form:t?void 0:null})}async function xe(n,t,o){for(;n--;)if(o[n]){let r=n;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await o[n](),loader:o[n],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:n,error:t,url:o,route:r}){const f={};let c=null;if(e.server_loads[0]===0)try{const w=await Ye(o,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;c=w.nodes[0]??null}catch{(o.origin!==location.origin||o.pathname!==location.pathname||$)&&await X(o)}const h=await ge({loader:s,url:o,params:f,route:r,parent:()=>Promise.resolve({}),server_data_node:me(c)}),_={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:o,params:f,branch:[h,_],status:n,error:t,route:null})}function W(n,t){if(Se(n,B))return;const o=ie(n);for(const r of i){const f=r.exec(o);if(f)return{id:n.pathname+n.search,invalidating:t,route:r,params:it(f),url:n}}}function ie(n){return ot(n.pathname.slice(B.length)||"/")}function De({url:n,type:t,intent:o,delta:r}){var h,_;let f=!1;const c={from:{params:y.params,route:{id:((h=y.route)==null?void 0:h.id)??null},url:y.url},to:{params:(o==null?void 0:o.params)??null,route:{id:((_=o==null?void 0:o.route)==null?void 0:_.id)??null},url:n},willUnload:!o,type:t};r!==void 0&&(c.delta=r);const m={...c,cancel:()=>{f=!0}};return L||p.before_navigate.forEach(w=>w(m)),f?null:c}async function se({url:n,scroll:t,keepfocus:o,redirect_chain:r,details:f,type:c,delta:m,nav_token:h,accepted:_,blocked:w}){const A=W(n,!1),S=De({url:n,type:c,delta:m,intent:A});if(!S){w();return}const O=j;_(),L=!0,I&&V.navigating.set(S),await Ne(A,n,r,O,{scroll:t,keepfocus:o,details:f},h,()=>{L=!1,p.after_navigate.forEach(R=>R(S)),V.navigating.set(null)})}async function qe(n,t,o,r){return n.origin===location.origin&&n.pathname===location.pathname&&!$?await oe({status:r,error:o,url:n,route:t}):await X(n)}function X(n){return location.href=n.href,new Promise(()=>{})}function tt(){let n;d.addEventListener("mousemove",c=>{const m=c.target;clearTimeout(n),n=setTimeout(()=>{r(m,2)},20)});function t(c){r(c.composedPath()[0],1)}d.addEventListener("mousedown",t),d.addEventListener("touchstart",t,{passive:!0});const o=new IntersectionObserver(c=>{for(const m of c)m.isIntersecting&&(re(ie(new URL(m.target.href))),o.unobserve(m.target))},{threshold:0});function r(c,m){const h=He(c,d);if(!h)return;const{url:_,external:w}=be(h,B);if(w)return;const A=fe(h);if(!A.reload)if(m<=A.preload_data){const S=W(_,!1);S&&Pe(S)}else m<=A.preload_code&&re(ie(_))}function f(){o.disconnect();for(const c of d.querySelectorAll("a")){const{url:m,external:h}=be(c,B);if(h)continue;const _=fe(c);_.reload||(_.preload_code===ue.viewport&&o.observe(c),_.preload_code===ue.eager&&re(ie(m)))}}p.after_navigate.push(f),f()}function Z(n,t){return n instanceof te?n.body:e.hooks.handleError({error:n,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:n=>{Me(()=>(p.after_navigate.push(n),()=>{const t=p.after_navigate.indexOf(n);p.after_navigate.splice(t,1)}))},before_navigate:n=>{Me(()=>(p.before_navigate.push(n),()=>{const t=p.before_navigate.indexOf(n);p.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(U||!I)&&(E=!1)},goto:(n,t={})=>pe(n,t,[]),invalidate:n=>{if(typeof n=="function")v.push(n);else{const{href:t}=new URL(n,location.href);v.push(o=>o.href===t)}return Ie()},invalidateAll:()=>(F=!0,Ie()),preload_data:async n=>{const t=new URL(n,ze(document)),o=W(t,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Pe(o)},preload_code:re,apply_action:async n=>{if(n.type==="error"){const t=new URL(location.href),{branch:o,route:r}=y;if(!r)return;const f=await xe(y.branch.length,o,r.errors);if(f){const c=await Y({url:t,params:y.params,branch:o.slice(0,f.idx).concat(f.node),status:n.status??500,error:n.error,route:r});y=c.state,M.$set(c.props),ce().then(ke)}}else if(n.type==="redirect")pe(n.location,{invalidateAll:!0},[]);else{const t={form:n.data,page:{...z,form:n.data,status:n.status}};M.$set(t),n.type==="success"&&ce().then(ke)}},_start_router:()=>{var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{var r;let o=!1;if(!L){const f={from:{params:y.params,route:{id:((r=y.route)==null?void 0:r.id)??null},url:y.url},to:null,willUnload:!0,type:"leave",cancel:()=>o=!0};p.before_navigate.forEach(c=>c(f))}o?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ee(j),Je(Xe,H),Ue(j),Je(We,Q))}),(n=navigator.connection)!=null&&n.saveData||tt(),d.addEventListener("click",t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const o=He(t.composedPath()[0],d);if(!o)return;const{url:r,external:f,target:c}=be(o,B);if(!r)return;if(c==="_parent"||c==="_top"){if(window.parent!==window)return}else if(c&&c!=="_self")return;const m=fe(o);if(!(o instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:"))return;if(f||m.reload){De({url:r,type:"link"})||t.preventDefault(),L=!0;return}const[_,w]=r.href.split("#");if(w!==void 0&&_===location.href.split("#")[0]){K=!0,Ee(j),y.url=r,V.page.set({...z,url:r}),V.page.notify();return}se({url:r,scroll:m.noscroll?ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:r.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),d.addEventListener("submit",t=>{if(t.defaultPrevented)return;const o=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||o.method)!=="get")return;const c=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||o.action);if(Se(c,B))return;const m=t.target,{noscroll:h,reload:_}=fe(m);if(_)return;t.preventDefault(),t.stopPropagation();const w=new FormData(m),A=r==null?void 0:r.getAttribute("name");A&&w.append(A,(r==null?void 0:r.getAttribute("value"))??""),c.search=new URLSearchParams(w).toString(),se({url:c,scroll:h?ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var o;if((o=t.state)!=null&&o[C]){if(t.state[C]===j)return;const r=H[t.state[C]];if(y.url.href.split("#")[0]===location.href.split("#")[0]){H[j]=ee(),j=t.state[C],scrollTo(r.x,r.y);return}const f=t.state[C]-j;let c=!1;await se({url:new URL(location.href),scroll:r,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=t.state[C]},blocked:()=>{history.go(-f),c=!0},type:"popstate",delta:f}),c||Oe(j)}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[C]:++j},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&V.navigating.set(null)})},_hydrate:async({status:n=200,error:t,node_ids:o,params:r,route:f,data:c,form:m})=>{$=!0;const h=new URL(location.href);({params:r={},route:f={id:null}}=W(h,!1)||{});let _;try{const w=o.map(async(A,S)=>{const O=c[S];return O!=null&&O.uses&&(O.uses=et(O.uses)),ge({loader:e.nodes[A],url:h,params:r,route:f,parent:async()=>{const R={};for(let b=0;b<S;b+=1)Object.assign(R,(await w[b]).data);return R},server_data_node:me(O)})});_=await Y({url:h,params:r,branch:await Promise.all(w),status:n,error:t,form:m,route:i.find(({id:A})=>A===f.id)??null})}catch(w){if(w instanceof Ke){await X(new URL(w.location,location.href));return}_=await oe({status:w instanceof te?w.status:500,error:await Z(w,{url:h,params:r,route:f}),url:h,route:f})}je(_)}}}async function Ye(e,a){const i=new URL(e);i.pathname=ut(e.pathname),i.searchParams.append("x-sveltekit-invalidated",a.map(u=>u?"1":"").join("_"));const s=await de(i.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async u=>{var y;const d=new Map,v=s.body.getReader(),l=new TextDecoder;function g($){return Pt($,{Promise:I=>new Promise((E,U)=>{d.set(I,{fulfil:E,reject:U})})})}let p="";for(;;){const{done:$,value:I}=await v.read();if($&&!p)break;for(p+=!I&&p?`
`:l.decode(I);;){const E=p.indexOf(`
`);if(E===-1)break;const U=JSON.parse(p.slice(0,E));if(p=p.slice(E+1),U.type==="redirect")return u(U);if(U.type==="data")(y=U.nodes)==null||y.forEach(L=>{(L==null?void 0:L.type)==="data"&&(L.uses=et(L.uses),L.data=g(L.data))}),u(U);else if(U.type==="chunk"){const{id:L,data:K,error:F}=U,M=d.get(L);d.delete(L),F?M.reject(g(F)):M.fulfil(g(K))}}}})}function et(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function ke(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const a=document.body,i=a.getAttribute("tabindex");return a.tabIndex=-1,a.focus({preventScroll:!0}),i!==null?a.setAttribute("tabindex",i):a.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var u;s((u=getSelection())==null?void 0:u.removeAllRanges())})})}}async function qt(e,a,i){const s=jt(e,a);kt({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{qt as start};
