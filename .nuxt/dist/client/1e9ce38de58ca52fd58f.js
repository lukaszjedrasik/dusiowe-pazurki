(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(e,t,r){var content=r(184);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("eba13e3a",content,!0,{sourceMap:!1})},182:function(e,t,r){var content=r(186);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("7c4cc6a9",content,!0,{sourceMap:!1})},183:function(e,t,r){"use strict";var n=r(181);r.n(n).a},184:function(e,t,r){(e.exports=r(19)(!1)).push([e.i,".slide-menu-off[data-v-49ded260]{position:fixed;top:0;right:-100px;width:0;transition:.3s}.slide-menu-off ul[data-v-49ded260]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off ul li[data-v-49ded260]{font-size:3.5rem;font-weight:300;cursor:pointer}.slide-menu-off.sideMenuOn[data-v-49ded260]{position:fixed;right:0;width:100%;height:100%;box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22);background-color:#ffcbcf;z-index:999}.slide-menu-off.sideMenuOn ul[data-v-49ded260]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;list-style-type:none}.slide-menu-off.sideMenuOn ul li[data-v-49ded260]{margin:1rem 0;font-size:3.5rem;font-weight:300;cursor:pointer}",""])},185:function(e,t,r){"use strict";var n=r(182);r.n(n).a},186:function(e,t,r){(e.exports=r(19)(!1)).push([e.i,".hamburger[data-v-1e0e9fd0]{position:fixed;top:25px;right:25px;width:35px;height:25px;cursor:pointer;z-index:99}.hamburger div[data-v-1e0e9fd0]{position:absolute;top:0;right:0;height:2px;width:20px;background-color:#fff;transition:.3s}.hamburger div[data-v-1e0e9fd0]:nth-child(2){top:10px;width:100%}.hamburger div[data-v-1e0e9fd0]:nth-child(3){top:20px}@media (min-width:768px){.hamburger[data-v-1e0e9fd0]{display:none}}.hamburger.hamburgerBlack div[data-v-1e0e9fd0]{background-color:#ff4081}.hamburger.transformHamburger[data-v-1e0e9fd0]{position:fixed;z-index:9999}.hamburger.transformHamburger div[data-v-1e0e9fd0]{width:100%;top:10px;right:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hamburger.transformHamburger div[data-v-1e0e9fd0]:nth-child(2){opacity:0}.hamburger.transformHamburger div[data-v-1e0e9fd0]:nth-child(3){-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""])},187:function(e,t,r){"use strict";var n={name:"SideMenu",methods:{hideMenu:function(){this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF")}}},o=(r(183),r(14)),d={name:"Hamburger",components:{SideMenu:Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slide-menu-off",class:{sideMenuOn:this.$store.state.hamburgerValue.hamburger}},[r("ul",{on:{click:e.hideMenu}},[r("nuxt-link",{attrs:{tag:"li",to:"/"}},[e._v("Strona Główna")]),e._v(" "),r("nuxt-link",{attrs:{tag:"li",to:"/blog"}},[e._v("Blog")]),e._v(" "),r("nuxt-link",{attrs:{tag:"li",to:"/galeria"}},[e._v("Galeria")]),e._v(" "),r("nuxt-link",{attrs:{tag:"li",to:"/kontakt"}},[e._v("Kontakt")])],1)])},[],!1,null,"49ded260",null).exports},data:function(){return{isSlide:!1}},methods:{hamburger:function(){this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF")},changeHamburgerColor:function(){window.scrollY>=240?this.isSlide=!0:this.isSlide=!1}},created:function(){window.addEventListener("scroll",this.changeHamburgerColor)},destroyed:function(){window.removeEventListener("scroll",this.changeHamburgerColor)}},l=(r(185),Object(o.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"hamburger",class:{transformHamburger:this.$store.state.hamburgerValue.hamburger,hamburgerBlack:this.isSlide&&!1===this.$store.state.hamburgerValue.hamburger},on:{click:this.hamburger,scroll:this.changeHamburgerColor}},[t("div",{class:{transformHamburger:this.$store.state.hamburgerValue.hamburger}}),this._v(" "),t("div",{class:{transformHamburger:this.$store.state.hamburgerValue.hamburger}}),this._v(" "),t("div",{class:{transformHamburger:this.$store.state.hamburgerValue.hamburger}})]),this._v(" "),t("SideMenu")],1)},[],!1,null,"1e0e9fd0",null));t.a=l.exports},199:function(e,t,r){"use strict";r.r(t);var n={components:{Hamburger:r(187).a},transition:"slide",layout:"DesktopMenu"},o=r(14),component=Object(o.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("Galeria")]),this._v(" "),t("Hamburger")],1)},[],!1,null,"6953ce5e",null);t.default=component.exports}}]);