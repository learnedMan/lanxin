(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f8b15c"],{"0191":function(t,e,a){"use strict";a.d(e,"r",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"i",(function(){return l})),a.d(e,"g",(function(){return u})),a.d(e,"u",(function(){return c})),a.d(e,"k",(function(){return d})),a.d(e,"l",(function(){return m})),a.d(e,"w",(function(){return p})),a.d(e,"s",(function(){return f})),a.d(e,"t",(function(){return b})),a.d(e,"x",(function(){return h})),a.d(e,"j",(function(){return g})),a.d(e,"f",(function(){return v})),a.d(e,"c",(function(){return y})),a.d(e,"h",(function(){return O})),a.d(e,"v",(function(){return w})),a.d(e,"n",(function(){return k})),a.d(e,"d",(function(){return j})),a.d(e,"b",(function(){return _})),a.d(e,"m",(function(){return q})),a.d(e,"q",(function(){return P})),a.d(e,"e",(function(){return A})),a.d(e,"p",(function(){return x})),a.d(e,"o",(function(){return L}));var n=a("b775"),r=a("b60c"),i=a("0385");a("2ab73");function o(t){return Object(n["a"])({url:"/api/refuseReasons",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/api/refuseReasons",method:"post",data:t})}function l(t,e){return Object(n["a"])({url:"/api/refuseReasons/".concat(t),method:"PATCH",data:e})}function u(t){return Object(n["a"])({url:"/api/refuseReasons/".concat(t),method:"delete"})}function c(){return Object(r["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(t){return Object(r["a"])({url:"/internal/feedback/pageList",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/internal/feedback/info",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/internal/feedback/reply",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/internal/report/pageList",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/internal/report/info",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/internal/report/reply",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/new/intranet/comment/manage/".concat(t),method:"get"})}function y(t){return Object(i["a"])({url:"/new/intranet/comment/operate",method:"post",data:t})}function O(t){return Object(i["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:t})}function w(t){return Object(i["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/internal/baoliao/getList",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/internal/baoliao/modifyState",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/internal/baoliao/getData",method:"post",params:t})}function P(t){return Object(r["a"])({url:"/internal/social/post/list",method:"post",data:t})}function A(t){return Object(r["a"])({url:"/internal/social/post/verify",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/internal/social/post/Info",method:"post",params:t})}function L(t){return Object(n["a"])({url:"/api/operationLogs",method:"get",params:t})}},1550:function(t,e,a){},6143:function(t,e,a){"use strict";a("1550")},"8e6c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xl-gossip"},[a("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"所属产品："}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:t.product_id,callback:function(e){t.product_id=e},expression:"product_id"}},t._l(t.productList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"爆料标题:",prop:"title"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.title,callback:function(e){t.$set(t.queryParams,"title",e)},expression:"queryParams.title"}})],1),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态",clearable:""},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.statusLists,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"爆料人:",prop:"userName"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.userName,callback:function(e){t.$set(t.queryParams,"userName",t._n(e))},expression:"queryParams.userName"}})],1),a("el-form-item",{attrs:{label:"提交时间:",prop:"submitTime"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:function(e){return t.handleDateChange(e,"submitTime")}},model:{value:t.queryParams.submitTime,callback:function(e){t.$set(t.queryParams,"submitTime",e)},expression:"queryParams.submitTime"}})],1),a("el-form-item",{attrs:{label:"审核时间:",prop:"auditTime"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:function(e){return t.handleDateChange(e,"auditTime")}},model:{value:t.queryParams.auditTime,callback:function(e){t.$set(t.queryParams,"auditTime",e)},expression:"queryParams.auditTime"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleReset}},[t._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{size:"mini",type:"success",disabled:t.disabledBatchAction},on:{click:function(e){return t.batchAgreeOrRefused(1)}}},[t._v("批量通过")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{size:"mini",type:"warning",disabled:t.disabledBatchAction},on:{click:function(e){return t.batchAgreeOrRefused(3)}}},[t._v("批量拒绝")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"新闻ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"爆料标题",align:"center",prop:"title",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"statusLabel"}}),a("el-table-column",{attrs:{label:"爆料人",align:"center",prop:"userName"}}),a("el-table-column",{attrs:{label:"审核时间",align:"center",prop:"auditAt"}}),a("el-table-column",{attrs:{label:"提交时间",align:"center",prop:"createdAt"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"verify-table-action"},[a("Iconbutton",{attrs:{icontype:"ckxq",label:"详情"},on:{fatherMethod:function(a){return t.watchDetail(e.row)}}}),1!=e.row.status?a("Iconbutton",{attrs:{icontype:"shtg",label:"通过"},on:{fatherMethod:function(a){return t.handleAgreeOrRefused(e.row,1)}}}):t._e(),3!=e.row.status?a("Iconbutton",{attrs:{icontype:"shjj",label:"拒绝"},on:{fatherMethod:function(a){return t.handleAgreeOrRefused(e.row,3)}}}):t._e()],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.limit},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{width:"600px",title:"详情",visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[a("el-form",{attrs:{size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"爆料人:"}},[t._v(t._s(t.detail.userName))]),a("el-form-item",{attrs:{label:"爆料账号:"}},[t._v(t._s(t.detail.userId))]),a("el-form-item",{attrs:{label:"爆料时间:"}},[t._v(t._s(t.detail.createdAt))]),a("el-form-item",{attrs:{label:"爆料标题:"}},[t._v(t._s(t.detail.title))]),a("el-form-item",{attrs:{label:"状态:"}},[t._v(t._s(t.detail.statusLabel))]),a("el-form-item",{attrs:{label:"爆料内容:"}},[t._v(t._s(t.detail.content))]),a("el-form-item",{attrs:{label:"图片/视频:"}},t._l(t.detail.files,(function(e){return a("span",{staticClass:"xl-gossip-file"},[2===e.type?a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{lazy:"",src:e.path,fit:"cover","preview-src-list":t.imgLists}}):a("video",{staticStyle:{width:"100%",height:"100%"},attrs:{controls:"",preload:"metadata"}},[a("source",{attrs:{src:e.path}}),t._v(" 您的浏览器不支持 HTML5 video 标签。 ")])],1)})),0)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(e){t.dialog.show=!1}}},[t._v(" 关 闭 ")])],1)],1)],1)},r=[],i=a("1da1"),o=a("2909"),s=a("5530"),l=a("ade3"),u=(a("96cf"),a("d81d"),a("4de4"),a("d3b7"),a("7db0"),a("0191")),c=a("0fea"),d={data:function(){var t;return{productList:[],statusLists:[{label:"全部",value:""},{label:"已审核",value:1},{label:"待审核",value:2},{label:"已拒绝",value:3}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},queryParams:(t={sourceId:"",type:"",status:"",title:""},Object(l["a"])(t,"type",0),Object(l["a"])(t,"userName",""),Object(l["a"])(t,"startCreateAt",""),Object(l["a"])(t,"endCreateAt",""),Object(l["a"])(t,"submitTime",""),Object(l["a"])(t,"startAuditAt",""),Object(l["a"])(t,"endAuditAt",""),Object(l["a"])(t,"auditTime",""),Object(l["a"])(t,"page",1),Object(l["a"])(t,"limit",10),t),product_id:0,dialog:{show:!1},detail:{title:"",content:"",userName:"",statusLabel:"",files:[]},loading:!1,total:0,tableData:[],selection:[]}},computed:{disabledBatchAction:function(){return 0===this.selection.length},imgLists:function(){return this.detail.files.filter((function(t){return 2===t.type})).map((function(t){return t.path}))}},watch:{product_id:function(t){this.queryParams.sourceId=this.productList.filter((function(e){return e.id==t}))[0].source_id||0,this.getList()}},methods:{getProductList:function(){var t=this;Object(c["mc"])({}).then((function(e){t.productList=e.data,t.product_id=t.productList[0].id}))},handleDateChange:function(t,e){var a=t||["",""];"submitTime"===e?(this.queryParams.startCreateAt=a[0],this.queryParams.endCreateAt=a[1]):(this.queryParams.startAuditAt=a[0],this.queryParams.endAuditAt=a[1])},handleReset:function(){Object.assign(this.queryParams,{startCreateAt:"",endCreateAt:"",startAuditAt:"",endAuditAt:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},watchDetail:function(t){var e=this,a=t.id,n=t.statusLabel;Object(u["m"])({id:a}).then((function(t){var a;200==t.code&&(e.detail=Object(s["a"])(Object(s["a"])({},t.data||{}),{},{statusLabel:n,files:((null===(a=t.data)||void 0===a?void 0:a.files)||[]).filter((function(t){return 0!==t.type}))}),e.dialog.show=!0)}))},batchAgreeOrRefused:function(t){var e=this;Object(u["b"])({ids:Object(o["a"])(this.selection),status:t}).then((function(t){200==t.code&&(e.$message.success(t.msg),e.getList())}))},handleAgreeOrRefused:function(t,e){var a=this,n=t.id;Object(u["d"])({id:n,status:e}).then((function(t){200==t.code&&(a.$message.success(t.msg),a.getList())}))},handleSelectionChange:function(t){this.selection=t.map((function(t){return t.id}))},getList:function(){var t=this;this.loading=!0;var e=Object(s["a"])({},this.queryParams);delete e.submitTime,delete e.auditTime,Object(u["n"])(this.removePropertyOfNullFor0(e)).then((function(e){if(200==e.code){var a=e.data;t.selection=[],t.tableData=(a.list||[]).map((function(e){var a;return Object(s["a"])(Object(s["a"])({},e),{},{statusLabel:null===(a=t.statusLists.find((function(t){return t.value===e.status})))||void 0===a?void 0:a.label})})),t.total=a.totalCount}})).finally((function(){t.loading=!1}))}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProductList();case 2:case"end":return e.stop()}}),e)})))()}},m=d,p=(a("6143"),a("2877")),f=Object(p["a"])(m,n,r,!1,null,"71342f84",null);e["default"]=f.exports}}]);