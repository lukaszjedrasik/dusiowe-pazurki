module.exports=function(t){var e={},r={0:0};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.e=function(e){if(0!==r[e]){var n=require("./"+{1:"80b4d400c3dc333a2fbd"}[e]+".js"),o=n.modules,c=n.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)r[c[i]]=0}return Promise.all([])},n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/_nuxt/",n.oe=function(t){process.nextTick(function(){throw t})},n(n.s=17)}([function(t,e){t.exports=require("vue")},function(t,e,r){"use strict";function n(t,e,r,n,o,c,l,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=r,h._compiled=!0),n&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(h.functional){h._injectStyles=f;var m=h.render;h.render=function(t,e){return f.call(e),m(t,e)}}else{var x=h.beforeCreate;h.beforeCreate=x?[].concat(x,f):[f]}return{exports:t,options:h}}r.d(e,"a",function(){return n})},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",r=t[3];if(!r)return content;if(e&&"function"==typeof btoa){var n=(c=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=r.sources.map(function(source){return"/*# sourceURL="+r.sourceRoot+source+" */"});return[content].concat(o).concat([n]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&n[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="("+c[2]+") and ("+r+")"),e.push(c))}},e}},function(t,e,r){"use strict";function n(t,e,r,n){if(n||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),n){n.hasOwnProperty("styles")||(Object.defineProperty(n,"styles",{enumerable:!0,get:function(){return o(n._styles)}}),n._renderStyles=o);var c=n._styles||(n._styles={});e=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[c]?n[c].parts.push(l):r.push(n[c]={id:c,parts:[l]})}return r}(t,e),r?function(t,e){for(var i=0;i<e.length;i++)for(var r=e[i].parts,n=0;n<r.length;n++){var o=r[n],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var r=e[i].parts,n=0;n<r.length;n++){var o=r[n];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var r in t){var style=t[r];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}r.r(e),r.d(e,"default",function(){return n})},function(t,e,r){var content=r(19);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("b675d82e",content,!0,t)}},function(t,e,r){var content=r(21);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("17cfdfa9",content,!0,t)}},function(t,e,r){var content=r(23);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("aab9a468",content,!0,t)}},function(t,e,r){var content=r(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("7330f7e7",content,!0,t)}},function(t,e,r){var content=r(27);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("af9bd312",content,!0,t)}},function(t,e,r){"use strict";var n={name:"SideMenu",props:["sideMenuOn"],data:()=>({sideMenuOff:!0})},o=r(1);var component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"slide-menu-off",class:{sideMenuOn:this.sideMenuOn}},[this._ssrNode("<ul data-v-339a0e44><li data-v-339a0e44>Blog</li> <li data-v-339a0e44>Galeria</li> <li data-v-339a0e44>Kontakt</li></ul>")])},[],!1,function(t){var e=r(24);e.__inject__&&e.__inject__(t)},"339a0e44","49f558c5");e.a=component.exports},function(t,e){t.exports=require("vue-router")},function(t,e,r){"use strict";var n={name:"Hamburger",components:{SideMenu:r(9).a},data:()=>({hamburger:!1})},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode("<div"+t._ssrClass("hamburger",{transformHamburger:t.hamburger})+" data-v-067d2bbd><div"+t._ssrClass(null,{transformHamburger:t.hamburger})+" data-v-067d2bbd></div> <div"+t._ssrClass(null,{transformHamburger:t.hamburger})+" data-v-067d2bbd></div> <div"+t._ssrClass(null,{transformHamburger:t.hamburger})+" data-v-067d2bbd></div></div> "),r("SideMenu",{attrs:{sideMenuOn:t.hamburger}})],2)},[],!1,function(t){var e=r(26);e.__inject__&&e.__inject__(t)},"067d2bbd","844b79ac");e.a=component.exports},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("axios")},function(t,e,r){t.exports=r(29)},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(t,e,r){"use strict";r.r(e);var n=r(5),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},function(t,e,r){"use strict";r.r(e);var n=r(6),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"html{font-family:Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0;padding:0}",""])},function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".slide-menu-off[data-v-339a0e44]{position:fixed;top:0;right:-100px;width:0;transition:.5s}.slide-menu-off ul[data-v-339a0e44]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off ul li[data-v-339a0e44]{margin:1.5em 0;font-size:2.2em;font-weight:300;color:#fff;cursor:pointer}.slide-menu-off.sideMenuOn[data-v-339a0e44]{position:fixed;width:70%;height:100%;background-color:#ffcbcf}.slide-menu-off.sideMenuOn ul[data-v-339a0e44]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off.sideMenuOn ul li[data-v-339a0e44]{margin:1.5em 0;font-size:2.2em;font-weight:300;color:#fff;cursor:pointer}",""])},function(t,e,r){"use strict";r.r(e);var n=r(8),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".hamburger[data-v-067d2bbd]{position:absolute;top:20px;right:20px;width:35px;height:25px;cursor:pointer}.hamburger div[data-v-067d2bbd]{position:absolute;top:0;right:0;height:3px;width:20px;background-color:#fff;transition:.5s}.hamburger div[data-v-067d2bbd]:nth-child(2){top:10px;width:100%}.hamburger div[data-v-067d2bbd]:nth-child(3){top:20px}.hamburger.transformHamburger[data-v-067d2bbd]{left:20px}.hamburger.transformHamburger div[data-v-067d2bbd]{width:100%;top:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hamburger.transformHamburger div[data-v-067d2bbd]:nth-child(2){left:0;width:0}.hamburger.transformHamburger div[data-v-067d2bbd]:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""])},function(t,e){t.exports=require("debug")},function(t,e,r){"use strict";r.r(e);var n=r(12),o=r(0),c=r.n(o),l=r(13),d=r.n(l);var f={};function h(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function m(t,e=!1){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t.components).map(n=>(e&&e.push(r),t.components[n]))))}function x(t){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t.components).reduce((n,o)=>(t.components[o]?n.push(e(t.components[o],t.instances[o],t,o,r)):delete t.components[o],n),[])))}(t,async(t,e,r,n)=>("function"!=typeof t||t.options||(t=await t()),r.components[n]=h(t),r.components[n])))}async function v(t){if(t)return await x(t),{...t,meta:m(t).map((e,r)=>({...e.options.meta,...(t.matched[r]||{}).meta}))}}async function y(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=((e,path,r)=>{if(!e)return;t.context._redirected=!0;let n=typeof path;"number"==typeof e||"undefined"!==n&&"object"!==n||(r=path||{},n=typeof(path=e),e=302),"object"===n&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:r,status:e}):(path=function(t,e){let r;const n=t.indexOf("://");-1!==n?(r=t.substring(0,n),t=t.substring(n+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(r?r+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&(path=c[0],o=c[1]);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const r=t[e];return null==r?"":Array.isArray(r)?r.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+r}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,r),t.context.next({path:path,status:e}))}),t.context.beforeNuxtRender=(t=>e.beforeRenderFns.push(t)));const[r,n]=await Promise.all([v(e.route),v(e.from)]);e.route&&(t.context.route=r),e.from&&(t.context.from=n),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!!e.isHMR,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():w(t[0],e).then(()=>_(t.slice(1),e))}function w(t,e){let r;return(r=2===t.length?new Promise(r=>{t(e,function(t,data){t&&e.error(t),r(data=data||{})})}):t(e))&&(r instanceof Promise||"function"==typeof r.then)||(r=Promise.resolve(r)),r}function C(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(r,n){let path="";const data=r||{},o=n||{},c=o.pretty?k:encodeURIComponent;for(let i=0;i<t.length;i++){const r=t[i];if("string"==typeof r){path+=r;continue}const n=data[r.name||"pathMatch"];let o;if(null==n){if(r.optional){r.partial&&(path+=r.prefix);continue}throw new TypeError('Expected "'+r.name+'" to be defined')}if(Array.isArray(n)){if(!r.repeat)throw new TypeError('Expected "'+r.name+'" to not repeat, but received `'+JSON.stringify(n)+"`");if(0===n.length){if(r.optional)continue;throw new TypeError('Expected "'+r.name+'" to not be empty')}for(let t=0;t<n.length;t++){if(o=c(n[t]),!e[i].test(o))throw new TypeError('Expected all "'+r.name+'" to match "'+r.pattern+'", but received `'+JSON.stringify(o)+"`");path+=(0===t?r.prefix:r.delimiter)+o}}else{if(o=r.asterisk?encodeURI(n).replace(/[?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()):c(n),!e[i].test(o))throw new TypeError('Expected "'+r.name+'" to match "'+r.pattern+'", but received "'+o+'"');path+=r.prefix+o}}return path}}(function(t,e){const r=[];let n=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=j.exec(t));){const e=l[0],d=l[1],f=l.index;if(path+=t.slice(o,f),o=f+e.length,d){path+=d[1];continue}const h=t[o],m=l[2],x=l[3],v=l[4],y=l[5],_=l[6],w=l[7];path&&(r.push(path),path="");const C=null!=m&&null!=h&&h!==m,j="+"===_||"*"===_,k="?"===_||"*"===_,E=l[2]||c,pattern=v||y;r.push({name:x||n++,prefix:m||"",delimiter:E,optional:k,repeat:j,partial:C,asterisk:!!w,pattern:pattern?S(pattern):w?".*":"[^"+$(E)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&r.push(path);return r}(t,e))}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function k(t){return encodeURI(t).replace(/[\/?#]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}var E=r(14),O=r.n(E),T=r(10),N=r.n(T);const R=()=>(function(t){return t.then(t=>t.default||t)})(r.e(1).then(r.bind(null,35)));c.a.use(N.a);const A=function(t,e,r){let n=!1;return t.matched.length<2&&t.matched.every(t=>!1!==t.components.default.options.scrollToTop)?n={x:0,y:0}:t.matched.some(t=>t.components.default.options.scrollToTop)&&(n={x:0,y:0}),r&&(n=r),new Promise(e=>{window.$nuxt.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(n={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(n)})})};var P=r(15),M={...r.n(P).a,name:"NoSsr"},z={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:r}){data.nuxtChild=!0;const n=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,f={};L.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const h={};D.forEach(t=>{"function"==typeof d[t]&&(h[t]=d[t].bind(n))});const m=h.beforeEnter;h.beforeEnter=(t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(n,t)});let x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:f,on:h},x)}};const L=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],D=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var U={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}},H=r(1);var B=Object(H.a)(U,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])},[],!1,function(t){var e=r(18);e.__inject__&&e.__inject__(t)},null,"90dfc500").exports,I={name:"Nuxt",components:{NuxtChild:z,NuxtError:B},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},F={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var K=Object(H.a)(F,void 0,void 0,!1,function(t){var e=r(20);e.__inject__&&e.__inject__(t)},null,"eb548a98").exports;var V=Object(H.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,function(t){var e=r(22);e.__inject__&&e.__inject__(t)},null,"ca06387c").exports,J=r(11),X=r(9);const W={_default:V,_Hamburger:J.a,_SideMenu:X.a};var G={head:{title:"Dusiowe Pazurki | Nails | Blog",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"dusiowe-pazurki"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Dancing+Script&amp;subset=latin-ext"}],style:[],script:[]},render(t,e){const r=t("NuxtLoading",{ref:"loading"}),n=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[r,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&W["_"+t]||(t="default"),this.layoutName=t,this.layout=W["_"+t],this.layout},loadLayout:t=>(t&&W["_"+t]||(t="default"),Promise.resolve(W["_"+t]))},components:{NuxtLoading:K}},Q=r(16),Y=r.n(Q);const Z={setHeader(t,e,r="common"){for(let n of Array.isArray(r)?r:[r]){if(!e)return void delete this.defaults.headers[n][t];this.defaults.headers[n][t]=e}},setToken(t,e,r="common"){const n=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",n,r)},onRequest(t){this.interceptors.request.use(e=>t(e)||e)},onResponse(t){this.interceptors.response.use(e=>t(e)||e)},onRequestError(t){this.interceptors.request.use(void 0,e=>t(e)||Promise.reject(e))},onResponseError(t){this.interceptors.response.use(void 0,e=>t(e)||Promise.reject(e))},onError(t){this.onRequestError(t),this.onResponseError(t)}};for(let t of["request","delete","get","head","options","post","put","patch"])Z["$"+t]=function(){return this[t].apply(this,arguments).then(t=>t&&t.data)};var tt=(t,e)=>{const r={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};r.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete r.headers.common.accept,delete r.headers.common.host,delete r.headers.common["cf-ray"],delete r.headers.common["cf-connecting-ip"],r.headers.common["Accept-Encoding"]="gzip, deflate";const n=Y.a.create(r);(t=>{for(let e in Z)t[e]=Z[e].bind(t)})(n),t.$axios=n,e("axios",n)};c.a.component(M.name,M),c.a.component(z.name,z),c.a.component("NChild",z),c.a.component(I.name,I),c.a.use(O.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const et={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function nt(t){const e=await new N.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:A,routes:[{path:"/",component:R,name:"index"}],fallback:!1}),r={router:e,nuxt:{defaultTransition:et,transitions:[et],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},et,{name:t}):Object.assign({},et,t):et),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,r.context._errored=!!e,e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(r){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...G},n=t?t.next:t=>r.router.push(t);let o;if(t)o=e.resolve(t.url).route;else{const path=function(base,t){let path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}(e.options.base);o=e.resolve(path).route}await y(r,{route:o,next:n,error:r.nuxt.error.bind(r),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;const n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof tt&&await tt(r.context,l),t&&t.url&&await new Promise((n,o)=>{e.push(t.url,n,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,r.context.route=await v(e),r.context.params=e.params||{},r.context.query=e.query||{},o(),n()})})}),{app:r,router:e}}var ot={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(ot.name,ot),c.a.component("NLink",ot),global.fetch||(global.fetch=d.a),r(28)("nuxt:render").color=4;const it=()=>new c.a({render:t=>t("div")}),st=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(n.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=(async t=>{t.redirected=!1,t.next=st(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:r}=await nt(t),n=new c.a(e);t.meta=n.$meta(),t.asyncData={};const o=async()=>{await Promise.all(t.beforeRenderFns.map(e=>w(e,{Components:x,nuxtState:t.nuxt})))},l=async()=>{const r="function"==typeof B.layout?B.layout(e.context):B.layout;return t.nuxt.layout=r||"default",await n.loadLayout(r),n.setLayout(r),await o(),n},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),x=m(r.match(t.url));let v=[];if(v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await _(v,e.context),t.redirected)return it();if(t.nuxt.error)return l();let y=x.length?x[0].options.layout:B.layout;if("function"==typeof y&&(y=y(e.context)),await n.loadLayout(y),t.nuxt.error)return l();if(y=n.setLayout(y),t.nuxt.layout=n.layoutName,v=[],(y=h(y)).options.middleware&&(v=v.concat(y.options.middleware)),x.forEach(t=>{t.options.middleware&&(v=v.concat(t.options.middleware))}),v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await _(v,e.context),t.redirected)return it();if(t.nuxt.error)return l();let C=!0;try{for(const t of x)if("function"==typeof t.options.validate&&!(C=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!C)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!x.length)return d();const j=await Promise.all(x.map(r=>{const n=[];if(r.options.asyncData&&"function"==typeof r.options.asyncData){const o=w(r.options.asyncData,e.context);o.then(e=>(t.asyncData[r.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const r=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=r,t.options.data=function(){const data=r.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(r),e)),n.push(o)}else n.push(null);return r.options.fetch?n.push(r.options.fetch(e.context)):n.push(null),Promise.all(n)}));return t.nuxt.data=j.map(t=>t[0]||{}),t.redirected?it():t.nuxt.error?l():(await o(),n)})}]);
//# sourceMappingURL=server.js.map