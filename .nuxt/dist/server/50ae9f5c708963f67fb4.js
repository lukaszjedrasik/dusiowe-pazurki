exports.ids=[4],exports.modules={32:function(e,t,r){var content=r(35);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("eba13e3a",content,!0,e)}},33:function(e,t,r){var content=r(37);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=r(3).default;e.exports.__inject__=function(e){n("7c4cc6a9",content,!0,e)}},34:function(e,t,r){"use strict";r.r(t);var n=r(32),o=r.n(n);for(var d in n)"default"!==d&&function(e){r.d(t,e,function(){return n[e]})}(d);t.default=o.a},35:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".slide-menu-off[data-v-49ded260]{position:fixed;top:0;right:-100px;width:0;transition:.3s}.slide-menu-off ul[data-v-49ded260]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off ul li[data-v-49ded260]{font-size:3.5rem;font-weight:300;cursor:pointer}.slide-menu-off.sideMenuOn[data-v-49ded260]{position:fixed;right:0;width:100%;height:100%;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);background-color:#ffcbcf;z-index:999}.slide-menu-off.sideMenuOn ul[data-v-49ded260]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off.sideMenuOn ul li[data-v-49ded260]{margin:1rem 0;font-size:3.5rem;font-weight:300;cursor:pointer}",""])},36:function(e,t,r){"use strict";r.r(t);var n=r(33),o=r.n(n);for(var d in n)"default"!==d&&function(e){r.d(t,e,function(){return n[e]})}(d);t.default=o.a},37:function(e,t,r){(e.exports=r(2)(!1)).push([e.i,".hamburger[data-v-1e0e9fd0]{position:fixed;top:25px;right:25px;width:35px;height:25px;cursor:pointer;z-index:99}.hamburger div[data-v-1e0e9fd0]{position:absolute;top:0;right:0;height:2px;width:20px;background-color:#fff;transition:.3s}.hamburger div[data-v-1e0e9fd0]:nth-child(2){top:10px;width:100%}.hamburger div[data-v-1e0e9fd0]:nth-child(3){top:20px}@media (min-width:768px){.hamburger[data-v-1e0e9fd0]{display:none}}.hamburger.hamburgerBlack div[data-v-1e0e9fd0]{background-color:#ff4081}.hamburger.transformHamburger[data-v-1e0e9fd0]{position:fixed;z-index:9999}.hamburger.transformHamburger div[data-v-1e0e9fd0]{width:100%;top:10px;right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hamburger.transformHamburger div[data-v-1e0e9fd0]:nth-child(2){opacity:0}.hamburger.transformHamburger div[data-v-1e0e9fd0]:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""])},38:function(e,t,r){"use strict";var n={name:"SideMenu",methods:{hideMenu(){this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF")}}},o=r(1);var d={name:"Hamburger",components:{SideMenu:Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slide-menu-off",class:{sideMenuOn:this.$store.state.hamburgerValue.hamburger}},[e._ssrNode("<ul data-v-49ded260>","</ul>",[r("nuxt-link",{attrs:{tag:"li",to:"/"}},[e._v("Strona Główna")]),e._ssrNode(" "),r("nuxt-link",{attrs:{tag:"li",to:"/blog"}},[e._v("Blog")]),e._ssrNode(" "),r("nuxt-link",{attrs:{tag:"li",to:"/galeria"}},[e._v("Galeria")]),e._ssrNode(" "),r("nuxt-link",{attrs:{tag:"li",to:"/kontakt"}},[e._v("Kontakt")])],2)])},[],!1,function(e){var t=r(34);t.__inject__&&t.__inject__(e)},"49ded260","09afc3d6").exports},data:()=>({isSlide:!1}),methods:{hamburger(){this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF")},changeHamburgerColor(){window.scrollY>=240?this.isSlide=!0:this.isSlide=!1}},created(){0},destroyed(){0}};var l=Object(o.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._ssrNode("<div"+this._ssrClass("hamburger",{transformHamburger:this.$store.state.hamburgerValue.hamburger,hamburgerBlack:this.isSlide&&!1===this.$store.state.hamburgerValue.hamburger})+" data-v-1e0e9fd0><div"+this._ssrClass(null,{transformHamburger:this.$store.state.hamburgerValue.hamburger})+" data-v-1e0e9fd0></div> <div"+this._ssrClass(null,{transformHamburger:this.$store.state.hamburgerValue.hamburger})+" data-v-1e0e9fd0></div> <div"+this._ssrClass(null,{transformHamburger:this.$store.state.hamburgerValue.hamburger})+" data-v-1e0e9fd0></div></div> "),t("SideMenu")],2)},[],!1,function(e){var t=r(36);t.__inject__&&t.__inject__(e)},"1e0e9fd0","15258b8e");t.a=l.exports},50:function(e,t,r){"use strict";r.r(t);var n={components:{Hamburger:r(38).a},transition:"slide",layout:"DesktopMenu"},o=r(1);var component=Object(o.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[this._ssrNode("<h1 data-v-6dc0d9f1>Kontakt</h1> "),t("Hamburger")],2)},[],!1,function(e){},"6dc0d9f1","28429b1f");t.default=component.exports}};
//# sourceMappingURL=50ae9f5c708963f67fb4.js.map