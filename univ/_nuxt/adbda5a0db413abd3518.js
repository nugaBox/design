(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{485:function(t,o,e){var content=e(638);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("0a748f57",content,!0,{sourceMap:!1})},637:function(t,o,e){"use strict";var n=e(485);e.n(n).a},638:function(t,o,e){(t.exports=e(15)(!1)).push([t.i,".bottomnav[data-v-1f9d17c4]{display:none}@media (max-width:1128px){.bottomnav[data-v-1f9d17c4]{box-shadow:0 2px 6px rgba(0,0,0,.12);position:fixed;bottom:0;left:0;z-index:50;display:flex;padding-bottom:env(safe-area-inset-bottom);width:100%;height:56px;background-color:hsla(0,0%,100%,.94)}.bottomnav__item[data-v-1f9d17c4]{display:flex;justify-content:center;align-items:center;flex:1;flex-direction:column}.bottomnav__item .bottomnav__icon[data-v-1f9d17c4]{margin-bottom:4px;width:24px;height:24px}.bottomnav__item .bottomnav__icon--home[data-v-1f9d17c4]{background-image:url(/images/nav.home.png);background-size:contain}.bottomnav__item .bottomnav__icon--bookmark[data-v-1f9d17c4]{background-image:url(/images/nav.bookmark.png);background-size:contain}.bottomnav__item .bottomnav__icon--write[data-v-1f9d17c4]{background-image:url(/images/nav.write.png);background-size:contain}.bottomnav__item .bottomnav__icon--community[data-v-1f9d17c4]{background-image:url(/images/nav.community.png);background-size:contain}.bottomnav__item .bottomnav__icon--mypage[data-v-1f9d17c4]{background-image:url(/images/nav.mypage.png);background-size:contain}.bottomnav__item .bottomnav__text[data-v-1f9d17c4]{line-height:12px;color:#737373;font-size:10px;font-weight:700}.bottomnav__item--active .bottomnav__icon--home[data-v-1f9d17c4]{background-image:url(/images/nav.home.active.png)}.bottomnav__item--active .bottomnav__icon--bookmark[data-v-1f9d17c4]{background-image:url(/images/nav.bookmark.active.png)}.bottomnav__item--active .bottomnav__icon--write[data-v-1f9d17c4]{background-image:url(/images/nav.write.active.png)}.bottomnav__item--active .bottomnav__icon--community[data-v-1f9d17c4]{background-image:url(/images/nav.community.active.png)}.bottomnav__item--active .bottomnav__icon--mypage[data-v-1f9d17c4]{background-image:url(/images/nav.mypage.active.png)}.bottomnav__item--active .bottomnav__text[data-v-1f9d17c4]{color:#c62917}}",""])},686:function(t,o,e){"use strict";e.r(o);e(12),e(10),e(17),e(18),e(13),e(11);var n=e(3),c=e(5);function m(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}var r={data:function(){return{active:"home",items:[{key:"home",title:"홈",to:"/"},{key:"bookmark",title:"관심",to:"/bookmark"},{key:"write",title:"질문하기",to:"/write"},{key:"community",title:"커뮤니티",to:"/community"},{key:"mypage",title:"마이페이지",to:"/mypage"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}({},Object(c.c)({hidden:function(t){return t.bottomNav.hidden},userInfo:function(t){return t.user.userInfo}})),watch:{"$route.path":{handler:function(path){"/"===path?this.active="home":/^\/bookmark/.test(path)?this.active="bookmark":/^\/write/.test(path)?this.active="write":/^\/community/.test(path)?this.active="community":/^\/mypage/.test(path)?this.active="mypage":/^\/(info|qna|review|admission)/.test(path)||(this.active="home")},immediate:!0}}},v=(e(637),e(4)),component=Object(v.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.hidden?t._e():e("div",{staticClass:"bottomnav"},t._l(t.items,(function(o){var n=o.key,title=o.title,c=o.to;return e("nuxt-link",{key:n,staticClass:"bottomnav__item",class:{"bottomnav__item--active":t.active===n},attrs:{to:c}},[e("div",{staticClass:"bottomnav__icon",class:["bottomnav__icon--"+n]}),t._v(" "),e("div",{staticClass:"bottomnav__text"},[t._v("\n      "+t._s(title)+"\n    ")])])})),1)}),[],!1,null,"1f9d17c4",null);o.default=component.exports}}]);