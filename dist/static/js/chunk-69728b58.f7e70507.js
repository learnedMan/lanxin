(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69728b58"],{"231d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-preview-script"},[n("h3",[t._v(t._s(t.detail.title))]),n("p",{staticClass:"xl-preview-script--url"},[n("span",[t._v(t._s(this.url))]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticStyle:{"margin-left":"10px"},attrs:{type:"text",icon:"el-icon-copy-document",size:"small"},on:{click:t.copyText}},[t._v("复制链接")])],1),n("el-tabs",{attrs:{type:"card"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("el-tab-pane",{attrs:{label:"手机预览",name:"phone"}},[n("div",{staticClass:"xl-preview-script--box"},[t.flag?n("div",{staticClass:"xl-preview-script--phone"},[n("iframe",{staticStyle:{height:"100%"},attrs:{src:t.returnurl(),frameborder:"0"}})]):t._e(),n("div",{staticStyle:{"margin-left":"20px","text-align":"center"}},[n("canvas",{ref:"canvas",attrs:{id:"canvas",width:"200",height:"200"}}),n("p",[t._v("使用扫一扫，在手机上预览")])])])]),n("el-tab-pane",{attrs:{label:"电脑预览",name:"computed"}},[t._v(" 电脑预览 ")])],1)],1)},a=[],s=(n("99af"),n("ac1f"),n("5319"),n("cc48")),r=n("d055"),c=n.n(r),o={name:"Preview",data:function(){return{flag:!1,detail:{title:""},tab:"phone"}},computed:{id:function(t){var e=t.$route;return e.query.id},type:function(t){var e=t.$route;return e.query.type},previewDomin:function(t){var e=t.$store.state.user.u_info.site.extra;return e.preview_domain},url:function(t){var e=t.id,n=t.type,i=t.previewDomin,a=sessionStorage.getItem("token");return i||this.$message.warning("站点未配置预览域名，请联系管理员去站点管理页面配置"),"".concat(i,"?id=").concat(e,"&type=").concat(n,"&token=").concat(a)}},methods:{returnurl:function(){var t=sessionStorage.getItem("token");return this.previewDomin||this.$message.warning("站点未配置预览域名，请联系管理员去站点管理页面配置"),"".concat(this.previewDomin,"?id=").concat(this.id,"&type=").concat(this.type,"&token=").concat(t)},getList:function(){var t,e=this;t="news"===this.type?Object(s["M"])(this.id):Object(s["O"])(this.id),t.then((function(t){e.detail=t}))},copyText:function(){var t=this.replaceStr(this.url,"%20"),e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message.success("复制成功!")},replaceStr:function(t,e){var n=t.replace(/\s+/g,e);return n}},mounted:function(){this.flag=!0,c.a.toCanvas(this.$refs.canvas,this.url,{width:200,height:200},(function(t){t?console.error(t):console.log("success")}))},created:function(){this.getList()}},l=o,u=(n("fed7"),n("2877")),p=Object(u["a"])(l,i,a,!1,null,"ba58f620",null);e["default"]=p.exports},"81a9":function(t,e,n){},fed7:function(t,e,n){"use strict";n("81a9")}}]);