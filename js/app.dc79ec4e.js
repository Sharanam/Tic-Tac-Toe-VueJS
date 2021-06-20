(function(t){function e(e){for(var n,u,a=e[0],o=e[1],c=e[2],h=0,v=[];h<a.length;h++)u=a[h],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&v.push(s[u][0]),s[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},s={app:0},i=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Tic-Tac-Toe-VueJS/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"300c":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("dashboard")],1)},i=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("h1",[t._v("Tic Tac Toe")]),r("h2",{staticClass:"status"},[t.result?r("span",{staticClass:"result"},[t._v(" Result: "+t._s(t.result)+" ")]):r("span",[t._v(" Turn: "+t._s(t.currentTurn)+" ")])]),t._l(t.values,(function(e,n){return r("div",{key:n,staticClass:"row"},t._l(e,(function(e,s){return r("div",{key:s},[r("cell",{attrs:{value:e,positionX:n,positionY:s,turn:t.current},on:{hit:t.record}})],1)})),0)})),r("button",{on:{click:t.clear}},[r("h3",[t._v("Clear")])])],2),r("scoreboard",{attrs:{score:t.score}}),r("author")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{on:{click:t.clicked}},[t._v(" "+t._s(t.value)+" ")])},c=[],l={name:"block",props:["value","positionX","positionY"],methods:{clicked(){this.$emit("hit",[this.positionX,this.positionY])}}},h=l,v=(r("aba6"),r("2877")),f=Object(v["a"])(h,o,c,!1,null,"048053a6",null),p=f.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("table",[t._m(1),r("tr",[r("td",[t._v(t._s(t.score.O))]),r("td",[t._v(t._s(t.score.X))])])])])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",[r("u",[t._v("Scoreboard")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",[t._v("O")]),r("th",[t._v("X")])])}],b={name:"Scoreboard",props:["score"]},m=b,g=(r("ed58"),Object(v["a"])(m,d,_,!1,null,"4027d024",null)),O=g.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v(" Author: "),r("a",{attrs:{href:"https://github.com/Sharanam",target:"_blank"}},[t._v("Sharanam Chotai")]),t._v(", "),r("a",{attrs:{href:"https://github.com/Sharanam/Tic-Tac-Toe-VueJS/tree/master/src",target:"_blank"}},[t._v("Source Code")])])])}],y={name:"Author"},k=y,S=(r("9054"),Object(v["a"])(k,T,w,!1,null,"31901680",null)),j=S.exports,x={name:"sortingOptions",data(){return{values:[["","",""],["","",""],["","",""]],current:!0,won:"",score:{O:0,X:0}}},methods:{record(t){this.result||""!==this.values[t[0]][t[1]]||(this.values[t[0]][t[1]]=this.currentTurn,this.evaluate(),this.toggle())},toggle(){this.current=!this.current},checkStraight(){for(let t=0;t<3;t++)if(""!==this.values[t][1]&&this.values[t][0]===this.values[t][1]&&this.values[t][1]===this.values[t][2]||""!==this.values[1][t]&&this.values[0][t]===this.values[1][t]&&this.values[1][t]===this.values[2][t])return!0;return!1},checkDiagonal(){return""!==this.values[1][1]&&this.values[0][0]===this.values[1][1]&&this.values[1][1]===this.values[2][2]||""!==this.values[1][1]&&this.values[2][0]===this.values[1][1]&&this.values[1][1]===this.values[0][2]},evaluate(){let t=!0;for(let e=0;e<3;e++){for(let r=0;r<3;r++)if(""===this.values[e][r]){t=!1;break}if(!t)break}if(this.checkStraight()||this.checkDiagonal())return this.won=this.currentTurn,void this.score[this.currentTurn]++;t&&(this.won="T")},clear(){this.values=[["","",""],["","",""],["","",""]],this.won=""}},components:{cell:p,scoreboard:O,author:j},computed:{currentTurn(){return this.current?"O":"X"},result(){return""!==this.won&&(["X","O"].includes(this.won)?this.won+" Won":"Tie")}}},$=x,E=(r("e024"),Object(v["a"])($,u,a,!1,null,"02dbab28",null)),X=E.exports,C={name:"App",components:{dashboard:X}},P=C,J=(r("034f"),Object(v["a"])(P,s,i,!1,null,null,null)),M=J.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(M)}).$mount("#app")},"85ec":function(t,e,r){},9054:function(t,e,r){"use strict";r("eaf8")},"93d8":function(t,e,r){},aba6:function(t,e,r){"use strict";r("300c")},e024:function(t,e,r){"use strict";r("eb11")},eaf8:function(t,e,r){},eb11:function(t,e,r){},ed58:function(t,e,r){"use strict";r("93d8")}});
//# sourceMappingURL=app.dc79ec4e.js.map