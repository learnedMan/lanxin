(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-077e574a"],{1727:function(t,n,e){},"231d":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"xl-preview-script"},[e("h3",[t._v(t._s(t.detail.title))]),e("p",{staticClass:"xl-preview-script--url"},[e("span",[t._v(t._s(this.url))]),e("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticStyle:{"margin-left":"10px"},attrs:{type:"text",icon:"el-icon-copy-document",size:"small"},on:{click:t.copyText}},[t._v("复制链接")])],1),e("el-tabs",{attrs:{type:"card"},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[e("el-tab-pane",{attrs:{label:"手机预览",name:"phone"}},[e("div",{staticClass:"xl-preview-script--box"},[e("div",{staticClass:"xl-preview-script--phone"},[e("iframe",{staticStyle:{height:"100%"},attrs:{src:t.url,frameborder:"0"}})]),e("div",{staticStyle:{"margin-left":"20px","text-align":"center"}},[e("canvas",{ref:"canvas",attrs:{id:"canvas",width:"200",height:"200"}}),e("p",[t._v("使用扫一扫，在手机上预览")])])])]),e("el-tab-pane",{attrs:{label:"电脑预览",name:"computed"}},[t._v(" 电脑预览 ")])],1)],1)},c=[],u=(e("b4fb"),e("cc48")),a=e("5618"),o=e.n(a),i={name:"Preview",data:function(){return{detail:{title:""},tab:"phone"}},computed:{id:function(t){var n=t.$route;return n.query.id},type:function(t){var n=t.$route;return n.query.type},url:function(t){var n=t.id,e=t.type,r=sessionStorage.getItem("token");return"http://synews.cztv.com/Preview?id=".concat(n,"&type=").concat(e,"&token=").concat(r)}},methods:{getList:function(){var t,n=this;t="news"===this.type?Object(u["G"])(this.id):Object(u["I"])(this.id),t.then((function(t){n.detail=t}))},copyText:function(){var t=this.url,n=document.createElement("input");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$message.success("复制成功!")}},mounted:function(){o.a.toCanvas(this.$refs.canvas,this.url,{width:200,height:200},(function(t){t?console.error(t):console.log("success")}))},created:function(){this.getList()}},s=i,d=(e("9f71"),e("cba8")),p=Object(d["a"])(s,r,c,!1,null,"f73ec382",null);n["default"]=p.exports},"9f71":function(t,n,e){"use strict";e("1727")},cc48:function(t,n,e){"use strict";e.d(n,"J",(function(){return c})),e.d(n,"q",(function(){return u})),e.d(n,"D",(function(){return a})),e.d(n,"m",(function(){return o})),e.d(n,"v",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"f",(function(){return d})),e.d(n,"O",(function(){return p})),e.d(n,"I",(function(){return l})),e.d(n,"j",(function(){return f})),e.d(n,"u",(function(){return h})),e.d(n,"G",(function(){return m})),e.d(n,"H",(function(){return b})),e.d(n,"Q",(function(){return j})),e.d(n,"k",(function(){return O})),e.d(n,"l",(function(){return v})),e.d(n,"E",(function(){return g})),e.d(n,"F",(function(){return w})),e.d(n,"t",(function(){return y})),e.d(n,"x",(function(){return x})),e.d(n,"d",(function(){return C})),e.d(n,"R",(function(){return S})),e.d(n,"C",(function(){return T})),e.d(n,"M",(function(){return _})),e.d(n,"N",(function(){return k})),e.d(n,"L",(function(){return N})),e.d(n,"e",(function(){return P})),e.d(n,"n",(function(){return $})),e.d(n,"o",(function(){return A})),e.d(n,"w",(function(){return E})),e.d(n,"P",(function(){return L})),e.d(n,"K",(function(){return q})),e.d(n,"z",(function(){return z})),e.d(n,"B",(function(){return I})),e.d(n,"i",(function(){return J})),e.d(n,"c",(function(){return G})),e.d(n,"s",(function(){return R})),e.d(n,"h",(function(){return B})),e.d(n,"A",(function(){return D})),e.d(n,"y",(function(){return F})),e.d(n,"p",(function(){return H})),e.d(n,"r",(function(){return K})),e.d(n,"b",(function(){return M})),e.d(n,"g",(function(){return Q}));var r=e("b775");function c(t){return Object(r["a"])({url:"/api/scripts/",method:"get",params:t})}function u(t,n){return Object(r["a"])({url:"/api/scripts/duplicate/".concat(t),method:"post",data:n})}function a(t){return Object(r["a"])({url:"/api/news/checkEditors",method:"get",params:t})}function o(t,n){return Object(r["a"])({url:"/api/scripts/".concat(t||""),method:t?"patch":"post",data:n})}function i(t){return Object(r["a"])({url:"/api/scripts/".concat(t),method:"delete"})}function s(t,n){return Object(r["a"])({url:"/api/scripts/".concat(t),method:"patch",data:n})}function d(t){return Object(r["a"])({url:"/api/scripts/pushScriptsToChannel",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/api/scripts/pullAll/".concat(t),method:"post"})}function l(t){return Object(r["a"])({url:"/api/scripts/".concat(t),method:"get"})}function f(t,n){return Object(r["a"])({url:"/api/news/".concat(t),method:"patch",data:n})}function h(t){return Object(r["a"])({url:"/api/news/".concat(t),method:"delete"})}function m(t){return Object(r["a"])({url:"/api/news/".concat(t),method:"get"})}function b(t){return Object(r["a"])({url:"/api/news",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/api/news/setTop",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/api/news/setSort",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/api/news/setStatus",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/api/operationLogs",methods:"get",params:t})}function w(t){return Object(r["a"])({url:"/api/tags",method:"get",params:t})}function y(t){return Object(r["a"])({url:"/api/tags/".concat(t),method:"delete"})}function x(t,n){return Object(r["a"])({url:"/api/tags/".concat(t),method:"patch",data:n})}function C(t){return Object(r["a"])({url:"/api/tags",method:"post",params:t})}function S(t){return Object(r["a"])(t)}function T(t,n){return Object(r["a"])({url:n?"/api/resources/myResources":"/api/resources",method:"get",params:t})}function _(t){return Object(r["a"])({url:"/api/videos/vms_channels",method:"get",params:t})}function k(t){return Object(r["a"])({url:"/api/videos",method:"get",params:t})}function N(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function P(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function $(t,n){return Object(r["a"])({url:"/api/channels/".concat(t),method:"patch",data:n})}function A(t){return Object(r["a"])({url:"/api/channels/setStatus",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/api/channels/".concat(t),method:"delete"})}function L(t){return Object(r["a"])({url:"/api/channels/publishSpecialChannelAsNews",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/?include=father"),method:"get"})}function z(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function I(t){return Object(r["a"])({url:"/api/subscriptions",method:"get",params:t})}function J(t){return Object(r["a"])({url:"/api/subscriptions/setStatus",method:"post",data:t})}function G(t){return Object(r["a"])({url:"/api/subscriptions",method:"post",data:t})}function R(t){return Object(r["a"])({url:"/api/subscriptions/".concat(t),method:"delete"})}function B(t,n){return Object(r["a"])({url:"/api/subscriptions/".concat(t),method:"patch",data:n})}function D(t){return Object(r["a"])({url:"/api/TPNews/",method:"get",params:t})}function F(t){return Object(r["a"])({url:"/api/TPNews/".concat(t),method:"get"})}function H(t){return Object(r["a"])({url:"/api/TPNews/pullAll/".concat(t),method:"post"})}function K(t,n){return Object(r["a"])({url:"/api/TPNews/duplicate/".concat(t),method:"post",data:n})}function M(t,n){return Object(r["a"])({url:"/api/TPNews/".concat(t),method:"patch",data:n})}function Q(t){return Object(r["a"])({url:"/api/scripts/pushTPNewsToChannel",method:"post",data:t})}}}]);