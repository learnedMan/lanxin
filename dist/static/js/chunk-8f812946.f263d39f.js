(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f812946"],{"0191":function(e,t,n){"use strict";n.d(t,"r",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"u",(function(){return c})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return p})),n.d(t,"w",(function(){return m})),n.d(t,"s",(function(){return f})),n.d(t,"t",(function(){return b})),n.d(t,"x",(function(){return h})),n.d(t,"j",(function(){return y})),n.d(t,"f",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"h",(function(){return w})),n.d(t,"v",(function(){return O})),n.d(t,"n",(function(){return _})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return k})),n.d(t,"m",(function(){return q})),n.d(t,"q",(function(){return P})),n.d(t,"e",(function(){return x})),n.d(t,"p",(function(){return D})),n.d(t,"o",(function(){return L}));var a=n("b775"),r=n("b60c"),o=n("0385");n("2ab73");function i(e){return Object(a["a"])({url:"/api/refuseReasons",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/api/refuseReasons",method:"post",data:e})}function u(e,t){return Object(a["a"])({url:"/api/refuseReasons/".concat(e),method:"PATCH",data:t})}function s(e){return Object(a["a"])({url:"/api/refuseReasons/".concat(e),method:"delete"})}function c(){return Object(r["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(e){return Object(r["a"])({url:"/internal/feedback/pageList",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/internal/feedback/info",method:"get",params:e})}function m(e){return Object(r["a"])({url:"/internal/feedback/reply",method:"post",data:e})}function f(e){return Object(r["a"])({url:"/internal/report/pageList",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/internal/report/info",method:"get",params:e})}function h(e){return Object(r["a"])({url:"/internal/report/reply",method:"post",data:e})}function y(e){return Object(o["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:e})}function g(e){return Object(o["a"])({url:"/new/intranet/comment/manage/".concat(e),method:"get"})}function v(e){return Object(o["a"])({url:"/new/intranet/comment/operate",method:"post",data:e})}function w(e){return Object(o["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:e})}function O(e){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function _(e){return Object(r["a"])({url:"/internal/baoliao/getList",method:"post",data:e})}function j(e){return Object(r["a"])({url:"/internal/baoliao/modifyState",method:"post",data:e})}function k(e){return Object(r["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:e})}function q(e){return Object(r["a"])({url:"/internal/baoliao/getData",method:"post",params:e})}function P(e){return Object(r["a"])({url:"/internal/social/post/list",method:"post",data:e})}function x(e){return Object(r["a"])({url:"/internal/social/post/verify",method:"post",data:e})}function D(e){return Object(r["a"])({url:"/internal/social/post/Info",method:"post",params:e})}function L(e){return Object(a["a"])({url:"/api/operationLogs",method:"get",params:e})}},"0951":function(e,t,n){},a2a8:function(e,t,n){"use strict";n("0951")},c3a4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log"},[n("div",{staticClass:"search"},[n("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"资源类型:",prop:"item_type"}},[n("el-select",{attrs:{size:"small",placeholder:"请选择类型",clearable:""},on:{change:e.handleQuery},model:{value:e.queryParams.item_type,callback:function(t){e.$set(e.queryParams,"item_type",t)},expression:"queryParams.item_type"}},e._l(e.statusOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"资源ID:",prop:"item_id"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入ID",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.item_id,callback:function(t){e.$set(e.queryParams,"item_id",t)},expression:"queryParams.item_id"}})],1),n("el-form-item",{attrs:{label:"操作人ID:",prop:"user_id"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入操作人ID",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.user_id,callback:function(t){e.$set(e.queryParams,"user_id",t)},expression:"queryParams.user_id"}})],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"序号",type:"index",width:"100",align:"center"}}),e.isMobile?e._e():n("el-table-column",{attrs:{label:"ID",width:"100",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"操作内容",align:"center",prop:"operation","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"类型",align:"center",width:"140",prop:"item_type","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作人ID",align:"center",width:"140",prop:"user.id","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作人姓名",align:"center",width:"140",prop:"user.name","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作人手机号",align:"center",width:"140",prop:"user.phone","show-overflow-tooltip":!0}}),e.isMobile?e._e():n("el-table-column",{attrs:{label:"操作时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},r=[],o=(n("d3b7"),n("0191")),i={name:"Log",data:function(){return{statusOptions:[{label:"全部",value:""},{label:"user",value:"user"},{label:"新闻",value:"news"},{label:"栏目",value:"channel"},{label:"稿件",value:"script"}],queryParams:{pageSize:10,page:1,user_id:"",item_type:"",item_id:""},total:0,loading:!0,tableData:[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(o["o"])(this.queryParams).then((function(t){e.tableData=t.data,e.total=t.total})).finally((function(){e.loading=!1}))},handleReset:function(){Object.assign(this.queryParams,{user_id:"",item_type:"",item_id:"",page:1})},handleQuery:function(){this.queryParams.page=1,this.getList()}}},l=i,u=(n("a2a8"),n("2877")),s=Object(u["a"])(l,a,r,!1,null,"b666b13c",null);t["default"]=s.exports}}]);