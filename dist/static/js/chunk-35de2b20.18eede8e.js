(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35de2b20"],{"0191":function(e,t,a){"use strict";a.d(t,"r",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"i",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"u",(function(){return c})),a.d(t,"k",(function(){return d})),a.d(t,"l",(function(){return m})),a.d(t,"w",(function(){return p})),a.d(t,"s",(function(){return f})),a.d(t,"t",(function(){return b})),a.d(t,"x",(function(){return h})),a.d(t,"j",(function(){return y})),a.d(t,"f",(function(){return g})),a.d(t,"c",(function(){return v})),a.d(t,"h",(function(){return k})),a.d(t,"v",(function(){return w})),a.d(t,"n",(function(){return O})),a.d(t,"d",(function(){return q})),a.d(t,"b",(function(){return T})),a.d(t,"m",(function(){return _})),a.d(t,"q",(function(){return j})),a.d(t,"e",(function(){return P})),a.d(t,"p",(function(){return L})),a.d(t,"o",(function(){return x}));var n=a("b775"),r=a("b60c"),i=a("0385");a("2ab73");function o(e){return Object(n["a"])({url:"/api/refuseReasons",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/api/refuseReasons",method:"post",data:e})}function l(e,t){return Object(n["a"])({url:"/api/refuseReasons/".concat(e),method:"PATCH",data:t})}function u(e){return Object(n["a"])({url:"/api/refuseReasons/".concat(e),method:"delete"})}function c(){return Object(r["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(e){return Object(r["a"])({url:"/internal/feedback/pageList",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/internal/feedback/info",method:"get",params:e})}function p(e){return Object(r["a"])({url:"/internal/feedback/reply",method:"post",data:e})}function f(e){return Object(r["a"])({url:"/internal/report/pageList",method:"post",data:e})}function b(e){return Object(r["a"])({url:"/internal/report/info",method:"get",params:e})}function h(e){return Object(r["a"])({url:"/internal/report/reply",method:"post",data:e})}function y(e){return Object(i["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:e})}function g(e){return Object(i["a"])({url:"/new/intranet/comment/manage/".concat(e),method:"get"})}function v(e){return Object(i["a"])({url:"/new/intranet/comment/operate",method:"post",data:e})}function k(e){return Object(i["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:e})}function w(e){return Object(i["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function O(e){return Object(r["a"])({url:"/internal/baoliao/getList",method:"post",data:e})}function q(e){return Object(r["a"])({url:"/internal/baoliao/modifyState",method:"post",data:e})}function T(e){return Object(r["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:e})}function _(e){return Object(r["a"])({url:"/internal/baoliao/getData",method:"post",params:e})}function j(e){return Object(r["a"])({url:"/internal/social/post/list",method:"post",data:e})}function P(e){return Object(r["a"])({url:"/internal/social/post/verify",method:"post",data:e})}function L(e){return Object(r["a"])({url:"/internal/social/post/Info",method:"post",params:e})}function x(e){return Object(n["a"])({url:"/api/operationLogs",method:"get",params:e})}},7629:function(e,t,a){},c8d8:function(e,t,a){"use strict";a("7629")},d417:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-posts"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"所属产品："}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:e.product_id,callback:function(t){e.product_id=t},expression:"product_id"}},e._l(e.productList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"帖子内容:",prop:"content"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入帖子内容",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.content,callback:function(t){e.$set(e.queryParams,"content",t)},expression:"queryParams.content"}})],1),a("el-form-item",{attrs:{label:"话题:",prop:"topicId"}},[a("el-select",{attrs:{placeholder:"请选择话题",clearable:""},model:{value:e.queryParams.topicId,callback:function(t){e.$set(e.queryParams,"topicId",t)},expression:"queryParams.topicId"}},e._l(e.topicLists,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"发帖人:",prop:"nickName"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.nickName,callback:function(t){e.$set(e.queryParams,"nickName",t)},expression:"queryParams.nickName"}})],1),a("el-form-item",{attrs:{label:"发帖账号:",prop:"mobile"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入手机号",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.mobile,callback:function(t){e.$set(e.queryParams,"mobile",t)},expression:"queryParams.mobile"}})],1),a("el-form-item",{attrs:{label:"提交时间:",prop:"submitTime"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:function(t){return e.handleDateChange(t,"submitTime")}},model:{value:e.queryParams.submitTime,callback:function(t){e.$set(e.queryParams,"submitTime",t)},expression:"queryParams.submitTime"}})],1),a("el-form-item",{attrs:{label:"审核时间:",prop:"auditTime"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:function(t){return e.handleDateChange(t,"auditTime")}},model:{value:e.queryParams.auditTime,callback:function(t){e.$set(e.queryParams,"auditTime",t)},expression:"queryParams.auditTime"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{size:"mini",type:"success",disabled:e.disabledBatchAction},on:{click:function(t){return e.batchAgreeOrRefused(1)}}},[e._v("批量通过")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{size:"mini",type:"warning",disabled:e.disabledBatchAction},on:{click:function(t){return e.batchAgreeOrRefused(2)}}},[e._v("批量拒绝")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"新闻ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"发帖内容",align:"center",prop:"content",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"分类",align:"center",prop:"classifyName",showOverflowTooltip:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("classifyfilter")(t.row.classifyName))+" ")]}}])}),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"statusLabel"}}),a("el-table-column",{attrs:{label:"发帖人",align:"center",prop:"nickName"}}),a("el-table-column",{attrs:{label:"审核时间",align:"center",prop:"updatedTime"}}),a("el-table-column",{attrs:{label:"提交时间",align:"center",prop:"createdTime"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"verify-table-action"},[a("Iconbutton",{attrs:{icontype:"ckxq",label:"详情"},on:{fatherMethod:function(a){return e.watchDetail(t.row)}}}),1!=t.row.status?a("Iconbutton",{attrs:{icontype:"shtg",label:"通过"},on:{fatherMethod:function(a){return e.handleAgreeOrRefused(t.row,1)}}}):e._e(),2!=t.row.status?a("Iconbutton",{attrs:{icontype:"shjj",label:"拒绝"},on:{fatherMethod:function(a){return e.handleAgreeOrRefused(t.row,2)}}}):e._e()],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.limit},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"limit",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:"详情",visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{attrs:{size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"发帖人:"}},[e._v(e._s(e.detail.nickName))]),a("el-form-item",{attrs:{label:"发帖时间:"}},[e._v(e._s(e.detail.createdTime))]),a("el-form-item",{attrs:{label:"分类:"}},[e._v(e._s(e._f("classifyfilter")(e.detail.classifyName)))]),a("el-form-item",{attrs:{label:"话题:"}},[e._v(e._s(e._f("topicInfofilter")(e.detail.topicInfo)))]),a("el-form-item",{attrs:{label:"状态:"}},[e._v(e._s(e.detail.statusLabel))]),a("el-form-item",{attrs:{label:"发帖内容:"}},[e._v(e._s(e.detail.content))]),a("el-form-item",{attrs:{label:"图片/视频:"}},[e._l(e.detail.images,(function(t){return a("span",{staticClass:"xl-posts-file"},[a("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{lazy:"",src:t.path,fit:"cover","preview-src-list":e.imgLists}})],1)})),e._l(e.detail.videos,(function(t){return a("span",{staticClass:"xl-posts-file"},[a("video",{staticStyle:{width:"100%",height:"100%"},attrs:{controls:"",preload:"metadata"}},[a("source",{attrs:{src:t.path}}),e._v(" 您的浏览器不支持 HTML5 video 标签。 ")])])}))],2)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 关 闭 ")])],1)],1)],1)},r=[],i=a("1da1"),o=a("2909"),s=a("5530"),l=(a("96cf"),a("d81d"),a("4de4"),a("d3b7"),a("a15b"),a("e9c4"),a("7db0"),a("0191")),u=a("0fea"),c=a("13cc"),d={data:function(){return{topicLists:[],productList:[],statusLists:[{label:"全部",value:3},{label:"已审核",value:1},{label:"待审核",value:0},{label:"已拒绝",value:2}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},queryParams:{sourceId:"",status:3,content:"",topicId:"",nickName:"",mobile:"",createdStartTime:"",createdEndTime:"",submitTime:"",updatedStartTime:"",updatedEndTime:"",auditTime:"",page:1,limit:10},product_id:0,dialog:{show:!1},detail:{title:"",content:"",userName:"",statusLabel:"",files:[],nickName:""},loading:!1,total:0,tableData:[],selection:[]}},computed:{disabledBatchAction:function(){return 0===this.selection.length},imgLists:function(){return this.detail.files.filter((function(e){return 2===e.type})).map((function(e){return e.path}))}},filters:{classifyfilter:function(e){return e||"默认分类"},topicInfofilter:function(e){return e=e||[],e.map((function(e){return e.topicName})).join(",")}},watch:{product_id:function(e){this.queryParams.sourceId=this.productList.filter((function(t){return t.id==e}))[0].source_id||0,this.getList()}},methods:{sourceIdChange:function(){this.getTopicList(),this.getList()},getProductList:function(){var e=this;Object(u["mc"])({}).then((function(t){e.productList=t.data,e.product_id=e.productList[0].id}))},getTopicList:function(){var e=this,t={sourceId:this.queryParams.sourceId,page:1,limit:9999};Object(c["C"])(t).then((function(t){var a=JSON.parse(JSON.stringify(t.data.list));a.unshift({name:"全部",id:""}),e.topicLists=a}))},handleDateChange:function(e,t){var a=e||["",""];"submitTime"===t?(this.queryParams.createdStartTime=a[0],this.queryParams.createdEndTime=a[1]):(this.queryParams.updatedStartTime=a[0],this.queryParams.updatedEndTime=a[1])},handleReset:function(){Object.assign(this.queryParams,{createdStartTime:"",createdEndTime:"",updatedStartTime:"",updatedEndTime:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},watchDetail:function(e){var t=this,a=e.id,n=e.statusLabel,r=e.nickName;Object(l["p"])({id:a,sourceId:this.queryParams.sourceId}).then((function(e){var a;200==e.code&&(t.detail=Object(s["a"])(Object(s["a"])({},e.data||{}),{},{statusLabel:n,nickName:r,files:((null===(a=e.data)||void 0===a?void 0:a.files)||[]).filter((function(e){return 0!==e.type}))}),t.dialog.show=!0)}))},batchAgreeOrRefused:function(e){var t=this;Object(l["e"])({sourceId:this.queryParams.sourceId,id:Object(o["a"])(this.selection),status:e}).then((function(e){200==e.code&&(t.$message.success(e.msg),t.getList())}))},handleAgreeOrRefused:function(e,t){var a=this,n=[];n[0]=e.id,Object(l["e"])({sourceId:this.queryParams.sourceId,id:n,status:t}).then((function(e){200==e.code&&(a.$message.success(e.msg),a.getList())}))},handleSelectionChange:function(e){this.selection=e.map((function(e){return e.id}))},getList:function(){var e=this;this.loading=!0;var t=Object(s["a"])({},this.queryParams);delete t.submitTime,delete t.auditTime,Object(l["q"])(this.removePropertyOfNullFor0(t)).then((function(t){if(200==t.code){var a=t.data;e.selection=[],e.tableData=(a.list||[]).map((function(t){var a;return Object(s["a"])(Object(s["a"])({},t),{},{statusLabel:null===(a=e.statusLists.find((function(e){return e.value===t.status})))||void 0===a?void 0:a.label})})),e.total=a.totalCount}})).finally((function(){e.loading=!1}))}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:case"end":return t.stop()}}),t)})))()}},m=d,p=(a("c8d8"),a("2877")),f=Object(p["a"])(m,n,r,!1,null,"135385aa",null);t["default"]=f.exports}}]);