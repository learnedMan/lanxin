(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6fd84ee"],{"0191":function(e,t,a){"use strict";a.d(t,"r",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"i",(function(){return s})),a.d(t,"g",(function(){return u})),a.d(t,"u",(function(){return c})),a.d(t,"k",(function(){return p})),a.d(t,"l",(function(){return d})),a.d(t,"w",(function(){return m})),a.d(t,"s",(function(){return f})),a.d(t,"t",(function(){return b})),a.d(t,"x",(function(){return y})),a.d(t,"j",(function(){return v})),a.d(t,"f",(function(){return h})),a.d(t,"c",(function(){return g})),a.d(t,"h",(function(){return k})),a.d(t,"v",(function(){return w})),a.d(t,"n",(function(){return O})),a.d(t,"d",(function(){return x})),a.d(t,"b",(function(){return D})),a.d(t,"m",(function(){return j})),a.d(t,"q",(function(){return T})),a.d(t,"e",(function(){return _})),a.d(t,"p",(function(){return C})),a.d(t,"o",(function(){return q}));var r=a("b775"),n=a("b60c"),l=a("0385");a("2ab73");function o(e){return Object(r["a"])({url:"/api/refuseReasons",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/api/refuseReasons",method:"post",data:e})}function s(e,t){return Object(r["a"])({url:"/api/refuseReasons/".concat(e),method:"PATCH",data:t})}function u(e){return Object(r["a"])({url:"/api/refuseReasons/".concat(e),method:"delete"})}function c(){return Object(n["a"])({url:"/intranet/querySourceIdData",method:"get"})}function p(e){return Object(n["a"])({url:"/internal/feedback/pageList",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/internal/feedback/info",method:"get",params:e})}function m(e){return Object(n["a"])({url:"/internal/feedback/reply",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/internal/report/pageList",method:"post",data:e})}function b(e){return Object(n["a"])({url:"/internal/report/info",method:"get",params:e})}function y(e){return Object(n["a"])({url:"/internal/report/reply",method:"post",data:e})}function v(e){return Object(l["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:e})}function h(e){return Object(l["a"])({url:"/new/intranet/comment/manage/".concat(e),method:"get"})}function g(e){return Object(l["a"])({url:"/new/intranet/comment/operate",method:"post",data:e})}function k(e){return Object(l["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:e})}function w(e){return Object(l["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function O(e){return Object(n["a"])({url:"/internal/baoliao/getList",method:"post",data:e})}function x(e){return Object(n["a"])({url:"/internal/baoliao/modifyState",method:"post",data:e})}function D(e){return Object(n["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:e})}function j(e){return Object(n["a"])({url:"/internal/baoliao/getData",method:"post",params:e})}function T(e){return Object(n["a"])({url:"/internal/social/post/list",method:"post",data:e})}function _(e){return Object(n["a"])({url:"/internal/social/post/verify",method:"post",data:e})}function C(e){return Object(n["a"])({url:"/internal/social/post/Info",method:"post",params:e})}function q(e){return Object(r["a"])({url:"/api/operationLogs",method:"get",params:e})}},b341:function(e,t,a){"use strict";a("fb5a")},f943:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-report"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"所属产品:"}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:e.queryParams.sourceId,callback:function(t){e.$set(e.queryParams,"sourceId",t)},expression:"queryParams.sourceId"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"举报人:",prop:"reportNickname"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.reportNickname,callback:function(t){e.$set(e.queryParams,"reportNickname",t)},expression:"queryParams.reportNickname"}})],1),a("el-form-item",{attrs:{label:"举报内容:",prop:"reportContent"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.reportContent,callback:function(t){e.$set(e.queryParams,"reportContent",t)},expression:"queryParams.reportContent"}})],1),a("el-form-item",{attrs:{label:"回复状态:",prop:"replyStatus"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择回复状态",clearable:""},model:{value:e.queryParams.replyStatus,callback:function(t){e.$set(e.queryParams,"replyStatus",t)},expression:"queryParams.replyStatus"}},e._l(e.replyOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"处理状态:",prop:"handleStatus"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择回复状态",clearable:""},model:{value:e.queryParams.handleStatus,callback:function(t){e.$set(e.queryParams,"handleStatus",t)},expression:"queryParams.handleStatus"}},e._l(e.handleOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"投诉时间:"}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:function(t){return e.handleDateChange(t,"reportDate")}},model:{value:e.reportDate,callback:function(t){e.reportDate=t},expression:"reportDate"}})],1),a("el-form-item",{attrs:{label:"回复时间:"}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:function(t){return e.handleDateChange(t,"replyDate")}},model:{value:e.replyDate,callback:function(t){e.replyDate=t},expression:"replyDate"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"举报人",align:"center",prop:"reportNickname"}}),a("el-table-column",{attrs:{label:"举报内容",align:"center",prop:"reportContent","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"所属新闻",align:"center",prop:"mediaTitle"}}),a("el-table-column",{attrs:{label:"举报类型",align:"center",prop:"reportTypeLabel"}}),a("el-table-column",{attrs:{label:"回复状态",align:"center",prop:"replyStatusLabel"}}),a("el-table-column",{attrs:{label:"处理状态",align:"center",prop:"handleStatusLabel"}}),a("el-table-column",{attrs:{label:"回复时间",align:"center",prop:"replyTime"}}),a("el-table-column",{attrs:{label:"举报时间",align:"center",prop:"reportTime"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"ckxq",label:"详情"},on:{fatherMethod:function(a){return e.handleWatch(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.limit},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"limit",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"1000px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-dialog",{attrs:{width:"500px",title:"回复",visible:e.innerDialog.show,"append-to-body":""},on:{"update:visible":function(t){return e.$set(e.innerDialog,"show",t)}}},[a("el-form",{ref:"innerForm",attrs:{inline:!0,model:e.innerDialog.form,size:"small"}},[a("el-form-item",{attrs:{label:"回复内容:",prop:"replyContent"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入回复内容",type:"textarea",rows:"5",clearable:""},model:{value:e.innerDialog.form.replyContent,callback:function(t){e.$set(e.innerDialog.form,"replyContent",t)},expression:"innerDialog.form.replyContent"}})],1),a("el-form-item",{attrs:{label:"上传图片:",prop:"replyImg"}},[a("upload-single",{model:{value:e.innerDialog.form.replyImg,callback:function(t){e.$set(e.innerDialog.form,"replyImg",t)},expression:"innerDialog.form.replyImg"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.innerDialog.show=!1}}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterInnerDialog}},[e._v("确 定")])],1)])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"xl-report--title"},[a("span",{staticClass:"xl-report--title-label"},[e._v("基础信息")])]),a("el-form",{staticStyle:{"padding-left":"10px"},attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"举报用户:"}},[e._v(e._s(e.baseInfo.reportNickname))]),a("el-form-item",{attrs:{label:"举报类型:"}},[e._v(e._s(e.baseInfo.reportTypeLabel))]),a("el-form-item",{attrs:{label:"举报对象:"}},[e._v(e._s(e.baseInfo.newTitle))]),a("el-form-item",{attrs:{label:"所属新闻:"}},[e._v(e._s(e.baseInfo.newTitle))]),a("el-form-item",{attrs:{label:"举报时间:"}},[e._v(e._s(e.baseInfo.reportTime))]),a("el-form-item",{attrs:{label:"处理状态:"}},[e._v(e._s(e.baseInfo.handleStatusLabel))])],1)],1),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"xl-report--title"},[a("span",{staticClass:"xl-report--title-label"},[e._v("回复记录 "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dialog.isReply,expression:"dialog.isReply"}]},[e._v("(待回复)")])]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReply}},[e._v(" 回复 ")])],1),a("ul",{staticClass:"xl-report--content"},e._l(e.reportList,(function(t,r){return a("li",{key:r,staticClass:"xl-report--item"},[a("div",{staticClass:"xl-report--item-name"},[e._v(e._s(t.replyNickname))]),a("div",{staticClass:"xl-report--item-detail"},[a("div",{staticClass:"date"},[e._v(e._s(t.createdAt))]),a("p",[e._v(e._s(t.replyContent))]),e._l(t.replyImg,(function(e,r){return a("el-image",{key:r,staticStyle:{width:"100px",height:"100px"},attrs:{lazy:"",src:e,"preview-src-list":t.replyImg,fit:"cover"}})}))],2)])})),0)])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 关 闭 ")])],1)],1)],1)},n=[],l=a("06c4"),o=a("e9ff"),i=(a("2eeb"),a("053b"),a("e18c"),a("9302"),a("e35a"),a("0d7a"),a("5e9f"),a("4194"),a("e186"),a("0191")),s=a("0fea"),u=(a("cc48"),a("e60d")),c={components:{uploadSingle:u["a"]},data:function(){return{productLists:[],queryParams:{reportNickname:"",reportMobile:"",reportContent:"",reportType:"",replyStatus:"",handleStatus:"",beginReplyTime:"",endReplyTime:"",beginReportTime:"",endReportTime:"",sourceId:"",page:1,limit:10},reportDate:"",replyDate:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},mediaOptions:[{label:"全部",value:""},{label:"新闻",value:1},{label:"评论",value:2}],typeOptions:[{label:"全部",value:""},{label:"低俗色情",value:"1"},{label:"违法违政",value:"2"},{label:"侵权",value:"3"},{label:"标题党",value:"4"},{label:"与事实不符",value:"5"},{label:"内容灌水",value:"6"},{label:"排版格式有误",value:"7"},{label:"有错别字",value:"8"},{label:"其他",value:"9"}],replyOptions:[{label:"全部",value:""},{label:"待回复",value:1},{label:"已回复",value:2}],handleOption:[{label:"全部",value:""},{label:"处理中",value:1},{label:"已处理",value:2}],loading:!1,tableData:[],dialog:{title:"举报详情",show:!1,isReply:!1,id:""},baseInfo:{reportNickname:"",reportTypeLabel:"",newTitle:"",reportTime:"",handleStatusLabel:""},reportList:[],total:0,innerDialog:{show:!1,form:{replyContent:"",replyImg:""}}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()},methods:{getProductList:function(){var e=this;return Object(s["Xb"])({}).then((function(t){var a,r=t.data||[];e.productLists=r.map((function(e){return{label:e.name,value:e.source_id}})),e.queryParams.sourceId=null===r||void 0===r||null===(a=r[0])||void 0===a?void 0:a.source_id}))},handleReset:function(){this.reportDate="",this.replyDate="",Object.assign(this.queryParams,{beginReportTime:"",endReportTime:"",beginReplyTime:"",endReplyTime:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleDateChange:function(e,t){var a=e||["",""];"reportDate"===t?(this.queryParams.beginReportTime=a[0],this.queryParams.endReportTime=a[1]):(this.queryParams.beginReplyTime=a[0],this.queryParams.endReplyTime=a[1])},getList:function(){var e=this;this.loading=!0,this.tableData=[];var t=Object(l["a"])({},this.queryParams);Object(i["s"])(this.removePropertyOfNullFor0(t)).then((function(t){var a,r;e.tableData=((null===(a=t.data)||void 0===a?void 0:a.datas)||[]).map((function(t){var a,r;return Object(l["a"])(Object(l["a"])({},t),{},{reportTypeLabel:t.reportType.replace(/[\[|\]]/g,"").split(",").map((function(t){var a;return null===(a=e.typeOptions.find((function(e){return e.value==t})))||void 0===a?void 0:a.label})).join(),replyStatusLabel:null===(a=e.replyOptions.find((function(e){return e.value===t.replyStatus})))||void 0===a?void 0:a.label,handleStatusLabel:null===(r=e.handleOption.find((function(e){return e.value===t.handleStatus})))||void 0===r?void 0:r.label})})),e.total=(null===(r=t.data)||void 0===r?void 0:r.count)||0})).finally((function(){e.loading=!1}))},handleWatch:function(e){var t=e.id;this.dialog.id=t,this.dialog.show=!0,this.getReportDetail(t)},getReportDetail:function(e){var t=this;Object(i["t"])({id:e}).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(a){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=a.data,t.baseInfo=Object(l["a"])(Object(l["a"])({},n||{}),{},{reportTypeLabel:n.reportType.replace(/[\[|\]]/g,"").split(",").map((function(e){var a;return null===(a=t.typeOptions.find((function(t){return t.value==e})))||void 0===a?void 0:a.label})).join(),handleStatusLabel:null===(r=t.handleOption.find((function(e){return e.value===n.handleStatus})))||void 0===r?void 0:r.label}),t.reportList=(n.replyData||[]).map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{replyNickname:2===e.replyType?"官方回复":e.replyNickname,replyImg:e.replyImg.split(",")})})),o=t.reportList.length,t.dialog.isReply=o&&1===t.reportList[o-1].replyType;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleReply:function(){this.resetForm("innerForm"),this.innerDialog.show=!0},enterInnerDialog:function(){var e=this,t=this.dialog.id;Object(i["x"])(Object(l["a"])(Object(l["a"])({},this.innerDialog.form),{},{reportId:t})).then((function(){e.$message.success("回复成功!"),e.innerDialog.show=!1,e.getReportDetail(t),e.getList()}))}}},p=c,d=(a("b341"),a("cba8")),m=Object(d["a"])(p,r,n,!1,null,"18ddc086",null);t["default"]=m.exports},fb5a:function(e,t,a){}}]);