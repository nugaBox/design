(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(t,e,r){var content=r(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("dd5bbef8",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";var n=r(6),o=r(77),c=r(42),d=r(28),l=r(38),h=r(172),m=r(79),f=r(80),v=r(49),_=f("splice"),w=v("splice",{ACCESSORS:!0,0:0,1:2}),x=Math.max,k=Math.min;n({target:"Array",proto:!0,forced:!_||!w},{splice:function(t,e){var r,n,f,v,_,w,y=l(this),O=d(y.length),I=o(t,O),T=arguments.length;if(0===T?r=n=0:1===T?(r=0,n=O-I):(r=T-2,n=k(x(c(e),0),O-I)),O+r-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(f=h(y,n),v=0;v<n;v++)(_=I+v)in y&&m(f,v,y[_]);if(f.length=n,r<n){for(v=I;v<O-n;v++)w=v+r,(_=v+n)in y?y[w]=y[_]:delete y[w];for(v=O;v>O-n+r;v--)delete y[v-1]}else if(r>n)for(v=O-n;v>I;v--)w=v+r-1,(_=v+n-1)in y?y[w]=y[_]:delete y[w];for(v=0;v<r;v++)y[v+I]=arguments[v+2];return y.length=O-n+r,f}})},428:function(t,e,r){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},429:function(t,e,r){"use strict";var n=r(368);r.n(n).a},430:function(t,e,r){(t.exports=r(15)(!1)).push([t.i,'.attachments[data-v-495beb8e]{display:flex;flex-wrap:wrap;padding-top:6px}.attachments .attach[data-v-495beb8e],.attachments .attachment[data-v-495beb8e],.attachments .progress[data-v-495beb8e]{margin-bottom:12px;width:84px;height:84px}.attachments .attach[data-v-495beb8e]:not(:last-child),.attachments .attachment[data-v-495beb8e]:not(:last-child),.attachments .progress[data-v-495beb8e]:not(:last-child){margin-right:12px}.attachments .attachment[data-v-495beb8e]{position:relative}.attachments .attachment .image[data-v-495beb8e]{background-repeat:no-repeat;background-position:50%;background-size:cover;border-radius:12px;width:100%;height:100%}.attachments .attachment .remove[data-v-495beb8e]{background-image:url(/images/remove.png);background-repeat:no-repeat;background-position:50%;background-size:contain;position:absolute;top:-6px;right:-6px;width:16px;height:16px;cursor:pointer}.attachments .progress[data-v-495beb8e]{display:flex;justify-content:center;align-items:center}.attachments .progress .loading[data-v-495beb8e]{width:24px;height:24px}.attachments .attach[data-v-495beb8e]{display:flex;justify-content:center;align-items:center;box-sizing:border-box;border:1px solid #ddd;border-radius:12px;cursor:pointer}.attachments .attach[data-v-495beb8e]:before{background-image:url(/images/add.png);background-repeat:no-repeat;background-position:50%;background-size:contain;content:"";display:block;width:14px;height:14px}@media (max-width:896px){.attachments[data-v-495beb8e]{position:relative;left:-12px;display:block;width:calc(100% + 24px);white-space:nowrap;overflow:auto;font-size:0}.attachments[data-v-495beb8e]::-webkit-scrollbar{display:none}.attachments .attach[data-v-495beb8e],.attachments .attachment[data-v-495beb8e],.attachments .progress[data-v-495beb8e]{vertical-align:top}.attachments .attach[data-v-495beb8e]:first-child,.attachments .attachment[data-v-495beb8e]:first-child,.attachments .progress[data-v-495beb8e]:first-child{margin-left:12px}.attachments .attach[data-v-495beb8e]:last-child,.attachments .attachment[data-v-495beb8e]:last-child,.attachments .progress[data-v-495beb8e]:last-child{margin-right:12px}.attachments .attachment[data-v-495beb8e]{display:inline-block}.attachments .attach[data-v-495beb8e],.attachments .progress[data-v-495beb8e]{display:inline-flex}}',""])},435:function(t,e,r){var content=r(576);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("425416eb",content,!0,{sourceMap:!1})},487:function(t,e,r){"use strict";r(59),r(32);var n,o=r(2),c=r(167),d=r(428),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.file,n=void 0===r?null:r,o=e.id,d=void 0===o?0:o,l=e.objectURL,h=void 0===l?"":l,m=e.originalBlob,f=void 0===m?null:m,v=e.originalUrl,_=void 0===v?"":v,w=e.thumbBlob,x=void 0===w?null:w,k=e.thumbUrl,y=void 0===k?"":k;Object(c.a)(this,t),this.file=n,this.id=d,this.objectURL=h,this.originalBlob=f,this.originalUrl=_,this.thumbBlob=x,this.thumbUrl=y}return Object(d.a)(t,[{key:"fileEquals",value:function(t){var e=this;return this.file&&["lastModified","name","size","type"].every((function(r){return t[r]===e.file[r]}))}},{key:"attached",get:function(){return 0!==this.id}},{key:"imageUrl",get:function(){return this.thumbUrl||this.originalUrl||this.objectURL}},{key:"key",get:function(){return this.id||this.objectURL}}]),t}(),h={props:{attachmentsLimit:{default:10,type:Number},attachments:{default:function(){return[]},validator:function(t){return t.every((function(t){return t instanceof l}))},type:Array},inProgress:{default:!1,type:Boolean}},data:function(){return{length:0}},computed:{hideAttach:function(){var t=this.attachments.length,e=this.attachmentsLimit;return!t||t>=e}},watch:{attachments:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((r=e.length)>this.length)){t.next=6;break}return t.next=4,this.$nextTick();case 4:(n=this.$el).scrollLeft=n.scrollWidth-n.clientWidth;case 6:this.length=r;case 7:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}},m=(r(429),r(4));r.d(e,"a",(function(){return l}));var component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"attachments"},[t._l(t.attachments,(function(e){return r("div",{key:e.key,staticClass:"attachment"},[r("div",{staticClass:"image",style:{backgroundImage:"url("+e.imageUrl+")"}}),t._v(" "),r("div",{staticClass:"remove",on:{click:function(r){return t.$emit("remove",r,e)}}})])})),t._v(" "),t.inProgress?r("div",{staticClass:"progress"},[r("img",{staticClass:"loading",attrs:{src:"/images/loading.svg"}})]):t.hideAttach?t._e():r("div",{staticClass:"attach",on:{click:function(e){return t.$emit("attach",e)}}})],2)}),[],!1,null,"495beb8e",null);e.b=component.exports},490:function(t,e,r){"use strict";function n(source,t){if(null==source)return{};var e,i,r=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r}(source,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r}r.d(e,"a",(function(){return n}))},575:function(t,e,r){"use strict";var n=r(435);r.n(n).a},576:function(t,e,r){(t.exports=r(15)(!1)).push([t.i,'.writepage[data-v-74baeb28]{display:flex;flex-direction:column;margin:0 auto;padding:48px 0;max-width:848px}.writepage__title[data-v-74baeb28]{line-height:40px;color:#292929;font-size:32px;margin-bottom:24px;font-weight:700}.writepage__boards[data-v-74baeb28]{display:flex;margin-bottom:24px}.writepage__boards .writepage__board[data-v-74baeb28]{line-height:20px;color:#737373;font-size:15px;display:flex;align-items:center;height:36px;cursor:pointer}.writepage__boards .writepage__board input[type=radio][data-v-74baeb28]{display:none}.writepage__boards .writepage__board .writepage__board-radio[data-v-74baeb28]{background-image:url(/images/radio.png);background-repeat:no-repeat;background-position:50%;background-size:contain;content:"";display:block;flex-shrink:0;width:24px;height:24px;cursor:pointer}.writepage__boards .writepage__board input[type=radio]:checked~.writepage__board-radio[data-v-74baeb28]{background-image:url(/images/radio.active.png)}.writepage__boards .writepage__board input[type=radio]:checked~.writepage__board-title[data-v-74baeb28]{color:#c62917;font-weight:700}.writepage__boards .writepage__board[data-v-74baeb28]:not(:last-of-type){margin-right:6px}.writepage__boards .writepage__board--disabled .writepage__board-radio[data-v-74baeb28]{background-image:url(/images/radio.disabled.png);background-repeat:no-repeat;background-position:50%;background-size:contain;cursor:not-allowed}.writepage__boards .writepage__board--disabled input[type=radio]:checked~.writepage__board-radio[data-v-74baeb28]{background-image:url(/images/radio.disabled.active.png)}.writepage__boards .writepage__board--disabled input[type=radio]:checked~.writepage__board-title[data-v-74baeb28]{color:#737373}.writepage__content[data-v-74baeb28]{box-shadow:0 2px 6px rgba(0,0,0,.06);margin-bottom:24px;padding:24px;border-radius:12px;background-color:#fff}.writepage__content .writepage__content-profile[data-v-74baeb28]{display:flex;margin-bottom:12px}.writepage__content .writepage__content-profile .writepage__content-picture[data-v-74baeb28]{background-repeat:no-repeat;background-position:50%;background-size:contain;margin-right:6px;border-radius:50%;width:20px;height:20px}.writepage__content .writepage__content-profile .writepage__content-nickname[data-v-74baeb28]{line-height:20px;color:#292929;font-size:13px;font-weight:700}.writepage__content .writepage__content-text[data-v-74baeb28],.writepage__content .writepage__content-title[data-v-74baeb28]{display:block;width:100%}.writepage__content .writepage__content-title[data-v-74baeb28]{line-height:24px;color:#292929;font-size:18px;margin-bottom:12px;padding:12px 0;border-bottom:1px solid #ddd;border-radius:0;font-weight:700}.writepage__content .writepage__content-text[data-v-74baeb28]{line-height:24px;color:#292929;font-size:15px;margin-bottom:6px;height:180px}.writepage__content .writepage__content-file[data-v-74baeb28]{padding-top:6px;border-top:1px solid #ddd;border-radius:0}.writepage__content .writepage__content-file .writepage__content-upload[data-v-74baeb28]{display:block;width:24px;height:24px;cursor:pointer;background-image:url(/images/camera.png);background-repeat:no-repeat;background-position:50%;background-size:contain}.writepage__content .writepage__content-file input[type=file][data-v-74baeb28]{position:fixed;top:-100%;left:-100%}.writepage__submit[data-v-74baeb28]{padding:0 36px;border-radius:6px;height:40px;color:#fff;font-weight:700;background-color:#c62917;cursor:pointer;align-self:flex-end}@media (max-width:896px){.writepage[data-v-74baeb28]{padding:36px 24px;max-width:none}.writepage--app[data-v-74baeb28]{padding-bottom:64px}.writepage__title[data-v-74baeb28]{line-height:36px;color:#292929;font-size:26px}.writepage__boards[data-v-74baeb28]{flex-wrap:wrap}.writepage__boards .writepage__board[data-v-74baeb28]:not(:last-of-type){margin-right:6px}.writepage__content[data-v-74baeb28]{padding:12px}.writepage__content .writepage__content-text[data-v-74baeb28]{height:144px}.writepage__submit[data-v-74baeb28]{width:100%}}',""])},674:function(t,e,r){"use strict";r.r(e);r(12),r(60),r(78),r(39),r(10),r(229),r(40),r(372),r(52),r(59),r(173),r(17),r(18),r(13),r(21),r(25),r(53),r(11),r(27),r(76);var n=r(490),o=(r(32),r(2)),c=r(3),d=r(24),l=r(5),h=r(487);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v,_,w,x,k={components:{CommunityContainerAttachment:h.b},validate:function(t){var e=t.params.articleId;return void 0===e||Number(e)>0},data:function(){var t=this.$constants.COMMUNITY_BOARDS,e=this.$route,r=e.params,n=e.query,o=!r.articleId?[window.localStorage.getItem(this.$constants.STORAGE_KEY_COMMUNITY_WRITE_BOARD),window.localStorage.getItem(this.$constants.STORAGE_KEY_COMMUNITY_WRITE_INPUT)]:[null,null],c=Object(d.a)(o,2),l=c[0],h=c[1],m=JSON.parse(h)||{},f=m.text,v=void 0===f?"":f,_=m.title,w=void 0===_?"":_;return{attaching:!1,attachments:[],attachmentsLimit:10,boardId:Number(n.boardId||l)||1,communityBoards:t,inProgress:!1,inputText:v,inputTitle:w}},computed:f({},Object(l.c)({appInfo:function(t){return t.user.appInfo},currentDialog:function(t){return t.dialog.currentDialog},userInfo:function(t){return t.user.userInfo}}),{isEditPage:function(){var t=this.$route.params.articleId;return Boolean(t)},pageTitle:function(){return this.isEditPage?"글 수정":"글쓰기"},submitTitle:function(){return this.isEditPage?"수정하기":"등록하기"}}),watch:{boardId:function(t){var e=this.$route.query;this.$router.replace({query:f({},e,{boardId:t})})},currentDialog:{handler:function(dialog){if(!dialog){var t=this.userInfo,e=t.id,r=t.nickname;e?r||this.$services.setProfile({ignoreNavigationGuard:!0}):this.$services.login({ignoreNavigationGuard:!0,redirectUrl:this.$route.fullPath})}},immediate:!0},inputText:"storeInput",inputTitle:"storeInput"},beforeMount:(x=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,article,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isEditPage){t.next=12;break}return e=this.$route.params.articleId,r={articleId:e},this.inProgress=!0,t.next=6,this.$axios.$get("/find/community/comment/list",{params:r});case 6:n=t.sent,o=n.result,article=(o=void 0===o?{}:o).article,c=n.status,this.inProgress=!1,"success"!==c?(d=new Error(c),"not_found_article"===c&&(d.description="존재하지 않는 글입니다."),this.$nuxt.error(d)):article.isMine?(l=this.communityBoards.find((function(t){return t.name===article.boardName})),m=l.id,this.attachments=article.attaches.map((function(t){var e=t.id,r=t.originalUrl;return new h.a({id:e,originalUrl:r})})),this.boardId=m,this.inputText=article.text.replace(/&lt;/g,"<"),this.inputTitle=article.title.replace(/&lt;/g,"<")):this.$router.back();case 12:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)}),mounted:function(){var t=this.$refs.inputText;t.focus(),t.blur()},methods:{attachFile:(w=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,c,d,l,m,f,v,_,w,x,k,y,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.attachments,r=this.attachmentsLimit,n=this.$refs.inputFile,o=n.files,e.length+o.length>r&&window.alert("이미지는 ".concat(r,"장까지 첨부할 수 있습니다.")),this.attaching=!0,c=!0,d=!1,l=void 0,t.prev=8,m=o[Symbol.iterator]();case 10:if(c=(f=m.next()).done){t.next=28;break}if(v=f.value,!(e.length>=r)){t.next=14;break}return t.abrupt("break",28);case 14:return t.next=16,this.$services.downscaleImage(v,{targetWidth:1280});case 16:return _=t.sent,w=_.blob,t.next=20,this.$services.downscaleImage(v,{square:!0,targetWidth:360});case 20:x=t.sent,k=x.blob,y=window.URL.createObjectURL(k),O=new h.a({file:v,objectURL:y,originalBlob:w,thumbBlob:k}),e.push(O);case 25:c=!0,t.next=10;break;case 28:t.next=34;break;case 30:t.prev=30,t.t0=t.catch(8),d=!0,l=t.t0;case 34:t.prev=34,t.prev=35,c||null==m.return||m.return();case 37:if(t.prev=37,!d){t.next=40;break}throw l;case 40:return t.finish(37);case 41:return t.finish(34);case 42:this.attaching=!1,n.value="";case 44:case"end":return t.stop()}}),t,this,[[8,30,34,42],[35,,37,41]])}))),function(){return w.apply(this,arguments)}),clickInputFile:function(t){var e=this.attachments,r=this.attachmentsLimit,n=this.inProgress;e.length>=r?window.alert("이미지는 ".concat(r,"장까지 첨부할 수 있습니다.")):n||this.$refs.inputFile.click(t)},removeAttachment:function(t,e){var r=this.attachments.indexOf(e);window.URL.revokeObjectURL(e.objectURL),this.attachments.splice(r,1)},storeInput:function(){if(!this.isEditPage){var t=this.inputText,text=void 0===t?"":t,e=this.inputTitle,title=void 0===e?"":e;window.localStorage.setItem(this.$constants.STORAGE_KEY_COMMUNITY_WRITE_INPUT,JSON.stringify({text:text,title:title}))}},submitArticle:(_=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,text,n,title,o,c,d,l,h,m,path,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.boardId,r=this.inputText,text=void 0===r?"":r,n=this.inputTitle,title=void 0===n?"":n,o=this.isEditPage,c=this.$route.params.articleId,""!==title){t.next=6;break}window.alert("제목을 입력해주세요."),t.next=22;break;case 6:if(""!==text){t.next=10;break}window.alert("내용을 입력해주세요."),t.next=22;break;case 10:if(this.inProgress){t.next=22;break}return t.next=13,this.submitAttachments();case 13:return d=t.sent,l=JSON.stringify(d.filter((function(t){return t.attached})).map((function(t){return t.id}))),this.inProgress=!0,t.next=18,this.$axios.$post("/save/community/article",{boardId:e,title:title,text:text,attachIds:l,articleId:c});case 18:h=t.sent,"success"===(m=h.status)?(window.localStorage.setItem(this.$constants.STORAGE_KEY_COMMUNITY_WRITE_BOARD,e),window.localStorage.removeItem(this.$constants.STORAGE_KEY_COMMUNITY_WRITE_INPUT),path=o?"/community/view/".concat(c):"/community",f={boardId:e},this.$router.push({path:path,query:f})):(v={banned_user:"서비스 이용이 제한되었습니다.",too_frequent:"글을 너무 자주 작성할 수 없습니다."}[m]||"오류가 발생하였습니다.",window.alert(v)),this.inProgress=!1;case 22:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),submitAttachments:(v=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,c,l,h,m,f,v,_,w,x,k,y,O,I,T=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.attachments,r=this.boardId,this.inProgress||!e.length){t.next=50;break}this.inProgress=!0,this.$store.commit("dialog/SET_CURRENT_DIALOG",{currentDialog:"dialog-upload-progress"}),t.prev=4,c=!0,l=!1,h=void 0,t.prev=8,m=e[Symbol.iterator]();case 10:if(c=(f=m.next()).done){t.next=27;break}if(!(v=f.value).attached){t.next=14;break}return t.abrupt("continue",24);case 14:return t.next=16,this.$axios.$post("/save/community/article/attach",{boardId:r});case 16:if(_=t.sent,w=_.result,"success"===_.status){t.next=21;break}return t.abrupt("continue",24);case 21:x=w.attach,k=w.s3Provider,y=k.bucket,O=k.region,I=Object(n.a)(k,["bucket","region"]),Object.assign(v,{attach:x,bucket:y,region:O,s3Provider:I});case 24:c=!0,t.next=10;break;case 27:t.next=33;break;case 29:t.prev=29,t.t0=t.catch(8),l=!0,h=t.t0;case 33:t.prev=33,t.prev=34,c||null==m.return||m.return();case 36:if(t.prev=36,!l){t.next=39;break}throw h;case 39:return t.finish(36);case 40:return t.finish(33);case 41:return t.next=43,Promise.all(e.map(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l,h,m,f,v,_,w,x,k,y,O,I,P;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.attached){t.next=2;break}return t.abrupt("return",e);case 2:for(r=e.attach,n=r.id,o=r.s3OriginalKey,c=r.s3ThumbKey,l=e.bucket,h=e.originalBlob,m=e.region,f=e.s3Provider,v=e.thumbBlob,_=new FormData,w=new FormData,x=0,k=Object.entries(f);x<k.length;x++)y=Object(d.a)(k[x],2),O=y[0],I=y[1],_.append(O,I),w.append(O,I);return _.append("Content-Type",h.type),_.append("key",o),_.append("file",h),w.append("Content-Type",v.type),w.append("key",c),w.append("file",v),P="https://".concat(l,".s3.").concat(m,".amazonaws.com/"),t.next=15,Promise.all([_,w].map((function(t){return T.$axios.$post(P,t)})));case 15:return e.id=n,t.abrupt("return",e);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 43:return t.abrupt("return",t.sent);case 44:return t.prev=44,this.$store.commit("dialog/SET_CURRENT_DIALOG"),this.inProgress=!1,t.finish(44);case 48:t.next=51;break;case 50:return t.abrupt("return",[]);case 51:case"end":return t.stop()}}),t,this,[[4,,44,48],[8,29,33,41],[34,,36,40]])}))),function(){return v.apply(this,arguments)})}},y=(r(575),r(4)),component=Object(y.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"writepage",class:{"writepage--app":"univ100"===t.appInfo.appName},on:{submit:function(t){t.preventDefault()}}},[r("h2",{staticClass:"writepage__title"},[t._v("\n    "+t._s(t.pageTitle)+"\n  ")]),t._v(" "),r("div",{staticClass:"writepage__boards"},t._l(t.communityBoards,(function(e){var n=e.id,o=e.name;return r("label",{key:n,staticClass:"writepage__board",class:{"writepage__board--disabled":t.isEditPage}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.boardId,expression:"boardId"}],attrs:{type:"radio",disabled:t.isEditPage||t.inProgress},domProps:{value:n,checked:t._q(t.boardId,n)},on:{change:function(e){t.boardId=n}}}),t._v(" "),r("span",{staticClass:"writepage__board-radio"}),t._v(" "),r("span",{staticClass:"writepage__board-title"},[t._v(t._s(o))])])})),0),t._v(" "),r("div",{staticClass:"writepage__content"},[t.userInfo.nickname?r("div",{staticClass:"writepage__content-profile"},[r("span",{staticClass:"writepage__content-picture",style:{backgroundImage:"url("+t.userInfo.pictureUrl+")"}}),t._v(" "),r("span",{staticClass:"writepage__content-nickname"},[t._v(t._s(t.userInfo.nickname))])]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputTitle,expression:"inputTitle",modifiers:{trim:!0}},{name:"hide-bottom-nav",rawName:"v-hide-bottom-nav"}],ref:"inputTitle",staticClass:"writepage__content-title",attrs:{type:"text",placeholder:"제목",disabled:t.inProgress},domProps:{value:t.inputTitle},on:{input:function(e){e.target.composing||(t.inputTitle=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputText,expression:"inputText",modifiers:{trim:!0}},{name:"auto-rows",rawName:"v-auto-rows"},{name:"hide-bottom-nav",rawName:"v-hide-bottom-nav"}],ref:"inputText",staticClass:"writepage__content-text",attrs:{placeholder:"내용을 입력해주세요.",disabled:t.inProgress},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("community-container-attachment",{attrs:{attachments:t.attachments,"in-progress":t.attaching},on:{attach:t.clickInputFile,remove:t.removeAttachment}}),t._v(" "),r("div",{staticClass:"writepage__content-file"},[r("input",{staticClass:"writepage__content-upload",attrs:{type:"button"},on:{click:t.clickInputFile}}),t._v(" "),r("input",{ref:"inputFile",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:t.attachFile}})])],1),t._v(" "),r("input",{staticClass:"writepage__submit",attrs:{type:"submit"},domProps:{value:t.submitTitle},on:{click:t.submitArticle}})])}),[],!1,null,"74baeb28",null);e.default=component.exports}}]);