(function(t){function e(e){for(var s,n,r=e[0],o=e[1],c=e[2],p=0,v=[];p<r.length;p++)n=r[p],a[n]&&v.push(a[n][0]),a[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return l.push.apply(l,c||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],s=!0,r=1;r<i.length;r++){var o=i[r];0!==a[o]&&(s=!1)}s&&(l.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},a={app:0},l=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"3dfd":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("tab-menu"),i("router-view"),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("p",[t._v("Ryo Naganuma")])])}],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"header_name"},[i("h1",[i("router-link",{attrs:{to:{path:"/hello_app"}}},[t._v("Ryo Naganuma")])],1)]),i("div",{staticClass:"header_menu"},[i("ol",t._l(t.items,function(e,s){return i("li",{key:s},[i("router-link",{attrs:{to:e.path}},[t._v("\n            "+t._s(e.title)+"\n         ")])],1)}),0)])])},n=[],r={name:"TabMenu",data:function(){return{items:[{title:"top",path:"/hello_app"},{title:"profile",path:"/hello_app/profile"},{title:"skills",path:"/hello_app/skills"},{title:"outputs",path:"/hello_app/outputs"}]}}},o=r,c=i("2877"),u=Object(c["a"])(o,l,n,!1,null,null,null),p=u.exports,v={name:"App",components:{TabMenu:p}},d=v,b=Object(c["a"])(d,s,a,!1,null,null,null);e["a"]=b.exports},"41cb":function(t,e,i){"use strict";var s=i("2b0e"),a=i("8c4f"),l=(i("3dfd"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("ul",t._l(t.items,function(e,s){return i("li",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],key:s,class:{active:t.isVisible}},[i("router-link",{attrs:{to:e.path}},[i("div",{staticClass:"mask"},[i("p",[t._v(t._s(e.title))])])])],1)}),0)])}),n=[],r={name:"main",mounted:function(){$(".main a").hover(function(){$(this).parent("li").removeClass("close"),$(this).parent("li").addClass("open"),$(this).children(".mask").fadeIn()},function(){$(this).parent("li").removeClass("open"),$(this).parent("li").addClass("close"),$(this).children(".mask").fadeOut()})},data:function(){return{isVisible:!1,items:[{title:"PROFILE",path:"/hello_app/profile"},{title:"SKILLS",path:"/hello_app/skills"},{title:"OUTPUTS",path:"/hello_app/outputs"}]}},methods:{visibilityChanged:function(t,e){this.isVisible=t}}},o=r,c=i("2877"),u=Object(c["a"])(o,l,n,!1,null,null,null),p=u.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile"},[i("h2",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}],staticClass:"fade_in",class:{active:t.isVisible}},[t._v("PROFILE")]),t._m(0),t._m(1)])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile_box"},[i("div",{staticClass:"profile_box--pic"},[i("img",{attrs:{src:"/hello_app/images/3.jpg"}})]),i("div",{staticClass:"profile_box--txt"},[i("p",{staticClass:"profileTtl"},[t._v("名前名前名前")]),i("p",{staticClass:"profileTxt"},[t._v("\n        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト\n      ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profile_about"},[i("p",{staticClass:"profile_about--ttl"},[t._v("HOW I CAN HELP")]),i("div",{staticClass:"profile_about--box"},[i("div",{staticClass:"aboutList"},[i("img",{attrs:{src:"/hello_app/images/3.jpg"}}),i("p",{staticClass:"aboutList_ttl"},[t._v("WEB DESIGN")]),i("p",{staticClass:"aboutList_txt"},[t._v("\n          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト\n        ")])]),i("div",{staticClass:"aboutList"},[i("img",{attrs:{src:"/hello_app/images/3.jpg"}}),i("p",{staticClass:"aboutList_ttl"},[t._v("WEB DEVELOPMENT")]),i("p",{staticClass:"aboutList_txt"},[t._v("\n          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト\n        ")])]),i("div",{staticClass:"aboutList"},[i("img",{attrs:{src:"/hello_app/images/3.jpg"}}),i("p",{staticClass:"aboutList_ttl"},[t._v("GRAPHIC DESIGN")]),i("p",{staticClass:"aboutList_txt"},[t._v("\n          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト\n        ")])])])])}],b={name:"Profile",data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t,e){this.isVisible=t}}},f=b,h=Object(c["a"])(f,v,d,!1,null,null,null),_=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skills"},[i("h2",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}],staticClass:"fade_in",class:{active:t.isVisible}},[t._v("SKILLS")])])},C=[],y={name:"Skills",data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t,e){this.isVisible=t}}},g=y,x=Object(c["a"])(g,m,C,!1,null,null,null),k=x.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"output"},[i("h2",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}],staticClass:"fade_in",class:{active:t.isVisible}},[t._v("OUTPUTS")]),i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0,throttle:2e3,throttleOptions:{leading:"hidden"}},expression:"{callback: visibilityChanged, once: true, throttle: 2000, throttleOptions: {leading: 'hidden'}}"}],staticClass:"output_box fade_bottom",class:{active:t.isVisible}},t._l(6,function(e){return i("div",{key:e,staticClass:"content"},[i("h3",[t._v(" "+t._s(t.name)+" ")]),i("img",{attrs:{src:"/hello_app/images/3.jpg"}}),i("p",[t._v(" "+t._s(t.text)+" ")])])}),0)])},j=[],w=(i("14b9"),{name:"Output",data:function(){return{name:"タイトルエリア",text:"このような意図で作成しました。ここをこのように工夫しました。ここが難しかったです。今後はこうゆう機能を追加したいです。".repeat(3),isVisible:!1}},methods:{visibilityChanged:function(t,e){this.isVisible=t}}}),E=w,L=Object(c["a"])(E,O,j,!1,null,null,null),P=L.exports;s["a"].use(a["a"]);e["a"]=new a["a"]({mode:"history",routes:[{path:"/hello_app",name:"Top",component:p},{path:"/hello_app/profile",name:"Profile",component:_},{path:"/hello_app/skills",name:"Skills",component:k},{path:"/hello_app/outputs",name:"Output",component:P}]})},"56d7":function(t,e,i){"use strict";i.r(e),function(t){i("cadf"),i("551c"),i("f751"),i("097d");var e=i("2b0e"),s=i("3dfd"),a=i("41cb"),l=i("1157"),n=i.n(l),r=i("85fe");e["a"].config.productionTip=!1,new e["a"]({router:a["a"],render:function(t){return t(s["a"])}}).$mount("#app"),t.jquery=n.a,t.$=n.a,window.$=window.jQuery=i("1157"),e["a"].use(r["a"])}.call(this,i("c8ba"))}});
//# sourceMappingURL=app.c25c5824.js.map