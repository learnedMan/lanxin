(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b010b2e2"],{"0dff":function(t,e,n){"use strict";n("f2f0")},"7dd2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-label-manage"},[n("div",{staticClass:"search"},[n("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"标签名称:",prop:"name"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}})],1),n("el-form-item",{attrs:{label:"样式:",prop:"type"}},[n("el-select",{attrs:{size:"small",placeholder:"请选择样式",clearable:""},model:{value:t.queryParams.type,callback:function(e){t.$set(t.queryParams,"type",e)},expression:"queryParams.type"}},t._l(t.typeOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleReset}},[t._v(" 重置 ")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleAdd}},[t._v(" 新增 ")])],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"标签名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"样式",align:"center",prop:"typeLabel"}}),n("el-table-column",{attrs:{label:"标签描述",align:"center",prop:"introduction","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"verify-table-action"},[n("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(n){return t.handleEdit(e.row)}}}),n("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(n){return t.handleListDelete(e.row)}}})],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),n("el-dialog",{attrs:{width:"600px",title:t.dialog.title,visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.dialog.form,rules:t.dialog.rules}},[n("el-form-item",{attrs:{"label-width":"120px",label:"标签名称:",prop:"name"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签名称",clearable:"",size:"small"},model:{value:t.dialog.form.name,callback:function(e){t.$set(t.dialog.form,"name",e)},expression:"dialog.form.name"}})],1),n("el-form-item",{attrs:{"label-width":"120px",label:"样式:",prop:"type"}},[n("el-radio-group",{model:{value:t.dialog.form.type,callback:function(e){t.$set(t.dialog.form,"type",e)},expression:"dialog.form.type"}},t._l(t.typeOptions,(function(e){return n("el-radio",{key:e.value,attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1),n("el-form-item",{attrs:{"label-width":"120px",label:"描述:"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入标签描述",clearable:"",type:"textarea",rows:"4",resize:"none"},model:{value:t.dialog.form.introduction,callback:function(e){t.$set(t.dialog.form,"introduction",e)},expression:"dialog.form.introduction"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v("确 定")])],1)],1)],1)},r=[],o=n("8955"),i=n("06c4"),l=(n("e18c"),n("2eeb"),n("053b"),n("cc48")),c={name:"labelManage",data:function(){return{queryParams:{name:"",type:"",pageSize:10,page:1},total:0,loading:!1,typeOptions:[{label:"高亮",value:"hightlight"},{label:"普通",value:"dafault"}],dateValue:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-6048e5),t.$emit("pick",[n,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-7776e6),t.$emit("pick",[n,e])}}]},tableData:[],dialog:{title:"新增",show:!1,form:{name:"",type:"",introduction:""},rules:{name:{required:!0,message:"请输入标签名称",trigger:"blur"},type:{required:!0,message:"请选择样式",trigger:"change"}}}}},created:function(){this.getList()},methods:{handleReset:function(){this.dateValue="",Object.assign(this.queryParams,{page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){var t=this;Object.assign(this.dialog,{show:!0,title:"新增",form:{name:"",type:"",introduction:""}}),this.$nextTick((function(){var e;null===(e=t.$refs.dialogForm)||void 0===e||e.clearValidate()}))},handleDateChange:function(t){var e=t||["",""];this.queryParams.startdate=e[0],this.queryParams.enddate=e[1]},getList:function(){var t=this;this.loading=!0,Object(l["u"])(this.removePropertyOfNull(this.queryParams)).then((function(e){var n=e.data,a=e.total,r=t.typeOptions.reduce((function(t,e){return Object(i["a"])(Object(i["a"])({},t),{},Object(o["a"])({},e.value,e.label))}),{});t.tableData=n.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{typeLabel:r[t.type]})})),t.total=a})).finally((function(){t.loading=!1}))},handleListDelete:function(t){var e=this,n=t.id;this.$confirm("此操作将永久删除这条id为".concat(n,"的标签, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["l"])(n).then((function(){e.$message({message:"删除成功",type:"success"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleEdit:function(t){var e=this;Object.assign(this.dialog,{show:!0,title:"编辑",form:{name:t.name,type:t.type,introduction:t.introduction,id:t.id}}),this.$nextTick((function(){var t;null===(t=e.$refs.dialogForm)||void 0===t||t.clearValidate()}))},closeDialog:function(){this.dialog.show=!1},enterDialog:function(){var t=this,e=this.dialog.form.id;this.$refs.dialogForm.validate((function(n){var a;n&&(e?(delete t.dialog.form.id,a=Object(l["p"])(e,t.removePropertyOfNull(t.dialog.form))):a=Object(l["b"])(t.removePropertyOfNull(t.dialog.form)),a.then((function(){t.$message({message:e?"修改成功":"新增成功",type:"success"}),t.dialog.show=!1,t.getList()})))}))}}},u=c,s=(n("0dff"),n("cba8")),d=Object(s["a"])(u,a,r,!1,null,"cf377d98",null);e["default"]=d.exports},cc48:function(t,e,n){"use strict";n.d(e,"y",(function(){return r})),n.d(e,"k",(function(){return o})),n.d(e,"s",(function(){return i})),n.d(e,"h",(function(){return l})),n.d(e,"n",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"D",(function(){return d})),n.d(e,"x",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"m",(function(){return m})),n.d(e,"v",(function(){return h})),n.d(e,"w",(function(){return b})),n.d(e,"F",(function(){return g})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return v})),n.d(e,"t",(function(){return O})),n.d(e,"u",(function(){return w})),n.d(e,"l",(function(){return j})),n.d(e,"p",(function(){return k})),n.d(e,"b",(function(){return x})),n.d(e,"G",(function(){return q})),n.d(e,"r",(function(){return $})),n.d(e,"B",(function(){return P})),n.d(e,"C",(function(){return D})),n.d(e,"A",(function(){return _})),n.d(e,"c",(function(){return C})),n.d(e,"i",(function(){return S})),n.d(e,"j",(function(){return T})),n.d(e,"o",(function(){return z})),n.d(e,"E",(function(){return L})),n.d(e,"z",(function(){return F})),n.d(e,"q",(function(){return E}));var a=n("b775");function r(t){return Object(a["a"])({url:"/api/scripts/",method:"get",params:t})}function o(t,e){return Object(a["a"])({url:"/api/scripts/duplicate/".concat(t),method:"post",data:e})}function i(t){return Object(a["a"])({url:"/api/news/checkEditors",method:"get",params:t})}function l(t,e){return Object(a["a"])({url:"/api/scripts/".concat(t||""),method:t?"patch":"post",data:e})}function c(t){return Object(a["a"])({url:"/api/scripts/".concat(t),method:"delete"})}function u(t,e){return Object(a["a"])({url:"/api/scripts/".concat(t),method:"patch",data:e})}function s(t){return Object(a["a"])({url:"/api/scripts/pushScriptsToChannel",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/api/scripts/pullAll/".concat(t),method:"post"})}function p(t){return Object(a["a"])({url:"/api/scripts/".concat(t),method:"get"})}function f(t,e){return Object(a["a"])({url:"/api/news/".concat(t),method:"patch",data:e})}function m(t){return Object(a["a"])({url:"/api/news/".concat(t),method:"delete"})}function h(t){return Object(a["a"])({url:"/api/news/".concat(t),method:"get"})}function b(t){return Object(a["a"])({url:"/api/news",method:"get",params:t})}function g(t){return Object(a["a"])({url:"/api/news/setTop",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/api/news/setSort",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/api/news/setStatus",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/api/operationLogs",methods:"get",params:t})}function w(t){return Object(a["a"])({url:"/api/tags",method:"get",params:t})}function j(t){return Object(a["a"])({url:"/api/tags/".concat(t),method:"delete"})}function k(t,e){return Object(a["a"])({url:"/api/tags/".concat(t),method:"patch",data:e})}function x(t){return Object(a["a"])({url:"/api/tags",method:"post",params:t})}function q(t){return Object(a["a"])(t)}function $(t,e){return Object(a["a"])({url:e?"/api/resources/myResources":"/api/resources",method:"get",params:t})}function P(t){return Object(a["a"])({url:"/api/videos/vms_channels",method:"get",params:t})}function D(t){return Object(a["a"])({url:"/api/videos",method:"get",params:t})}function _(t){return Object(a["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function C(t){return Object(a["a"])({url:"/api/channels",method:"post",data:t})}function S(t,e){return Object(a["a"])({url:"/api/channels/".concat(t),method:"patch",data:e})}function T(t){return Object(a["a"])({url:"/api/channels/setStatus",method:"post",data:t})}function z(t){return Object(a["a"])({url:"/api/channels/".concat(t),method:"delete"})}function L(t){return Object(a["a"])({url:"/api/channels/publishSpecialChannelAsNews",method:"post",data:t})}function F(t){return Object(a["a"])({url:"/api/channels/".concat(t,"/?include=father"),method:"get"})}function E(t){return Object(a["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}},f2f0:function(t,e,n){}}]);