(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c02b6"],{4147:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"auto",padding:"30px"}},[n("iframe",{ref:"iframe",staticStyle:{width:"100%",height:"800px"},attrs:{id:"iframeConcent",frameborder:"0",scrolling:"no",src:t.url}})])},i=[],o=(n("ac1f"),n("1276"),n("5319"),{data:function(){return{src:this.VUE_APP_XLY_API+"/vote/index"}},computed:{url:function(){var t=sessionStorage.getItem("token"),e=t.split(" ");return this.VUE_APP_XLY_API+"/vote/index?token="+e[1]}},methods:{xlyReload:function(){var t="/operaManage/vote";this.$router.replace({path:"/redirect"+t})}},mounted:function(){var t=this;window["xlyReload"]=function(){t.xlyReload()}}}),a=o,c=n("2877"),l=Object(c["a"])(a,r,i,!1,null,null,null);e["default"]=l.exports}}]);