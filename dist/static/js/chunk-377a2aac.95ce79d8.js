(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377a2aac"],{"0191":function(e,t,a){"use strict";a.d(t,"r",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"i",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"u",(function(){return u})),a.d(t,"k",(function(){return d})),a.d(t,"l",(function(){return p})),a.d(t,"w",(function(){return m})),a.d(t,"s",(function(){return f})),a.d(t,"t",(function(){return b})),a.d(t,"x",(function(){return y})),a.d(t,"j",(function(){return v})),a.d(t,"f",(function(){return h})),a.d(t,"c",(function(){return k})),a.d(t,"h",(function(){return g})),a.d(t,"v",(function(){return w})),a.d(t,"n",(function(){return O})),a.d(t,"d",(function(){return x})),a.d(t,"b",(function(){return D})),a.d(t,"m",(function(){return j})),a.d(t,"q",(function(){return _})),a.d(t,"e",(function(){return P})),a.d(t,"p",(function(){return q})),a.d(t,"o",(function(){return C}));var n=a("b775"),l=a("b60c"),r=a("0385");a("2ab73");function i(e){return Object(n["a"])({url:"/api/refuseReasons",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/api/refuseReasons",method:"post",data:e})}function s(e,t){return Object(n["a"])({url:"/api/refuseReasons/".concat(e),method:"PATCH",data:t})}function c(e){return Object(n["a"])({url:"/api/refuseReasons/".concat(e),method:"delete"})}function u(){return Object(l["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(e){return Object(l["a"])({url:"/internal/feedback/pageList",method:"post",data:e})}function p(e){return Object(l["a"])({url:"/internal/feedback/info",method:"get",params:e})}function m(e){return Object(l["a"])({url:"/internal/feedback/reply",method:"post",data:e})}function f(e){return Object(l["a"])({url:"/internal/report/pageList",method:"post",data:e})}function b(e){return Object(l["a"])({url:"/internal/report/info",method:"get",params:e})}function y(e){return Object(l["a"])({url:"/internal/report/reply",method:"post",data:e})}function v(e){return Object(r["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:e})}function h(e){return Object(r["a"])({url:"/new/intranet/comment/manage/".concat(e),method:"get"})}function k(e){return Object(r["a"])({url:"/new/intranet/comment/operate",method:"post",data:e})}function g(e){return Object(r["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:e})}function w(e){return Object(r["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function O(e){return Object(l["a"])({url:"/internal/baoliao/getList",method:"post",data:e})}function x(e){return Object(l["a"])({url:"/internal/baoliao/modifyState",method:"post",data:e})}function D(e){return Object(l["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:e})}function j(e){return Object(l["a"])({url:"/internal/baoliao/getData",method:"post",params:e})}function _(e){return Object(l["a"])({url:"/internal/social/post/list",method:"post",data:e})}function P(e){return Object(l["a"])({url:"/internal/social/post/verify",method:"post",data:e})}function q(e){return Object(l["a"])({url:"/internal/social/post/Info",method:"post",params:e})}function C(e){return Object(n["a"])({url:"/api/operationLogs",method:"get",params:e})}},"097e":function(e,t,a){"use strict";a("ee54")},b191:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-feedback"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"所属产品:"}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:e.queryParams.sourceId,callback:function(t){e.$set(e.queryParams,"sourceId",t)},expression:"queryParams.sourceId"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"反馈人:",prop:"feedbackNickname"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.feedbackNickname,callback:function(t){e.$set(e.queryParams,"feedbackNickname",t)},expression:"queryParams.feedbackNickname"}})],1),a("el-form-item",{attrs:{label:"联系方式:",prop:"feedbackMobile"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入联系方式",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.feedbackMobile,callback:function(t){e.$set(e.queryParams,"feedbackMobile",t)},expression:"queryParams.feedbackMobile"}})],1),a("el-form-item",{attrs:{label:"反馈内容:",prop:"feedbackContent"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.feedbackContent,callback:function(t){e.$set(e.queryParams,"feedbackContent",t)},expression:"queryParams.feedbackContent"}})],1),a("el-form-item",{attrs:{label:"回复状态:",prop:"replyStatus"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择回复状态",clearable:""},model:{value:e.queryParams.replyStatus,callback:function(t){e.$set(e.queryParams,"replyStatus",t)},expression:"queryParams.replyStatus"}},e._l(e.replyOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"处理状态:",prop:"handleStatus"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择回复状态",clearable:""},model:{value:e.queryParams.handleStatus,callback:function(t){e.$set(e.queryParams,"handleStatus",t)},expression:"queryParams.handleStatus"}},e._l(e.handleOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"反馈时间:"}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:function(t){return e.handleDateChange(t,"feedbackDate")}},model:{value:e.feedbackDate,callback:function(t){e.feedbackDate=t},expression:"feedbackDate"}})],1),a("el-form-item",{attrs:{label:"回复时间:"}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:function(t){return e.handleDateChange(t,"replyDate")}},model:{value:e.replyDate,callback:function(t){e.replyDate=t},expression:"replyDate"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"反馈人",align:"center",prop:"feedbackNickname"}}),a("el-table-column",{attrs:{label:"联系方式",align:"center",prop:"feedbackMobile"}}),a("el-table-column",{attrs:{label:"反馈内容",align:"center",prop:"feedbackContent","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"反馈类型",align:"center",prop:"reportTypeLabel"}}),a("el-table-column",{attrs:{label:"回复状态",align:"center",prop:"replyStatusLabel"}}),a("el-table-column",{attrs:{label:"处理状态",align:"center",prop:"handleStatusLabel"}}),a("el-table-column",{attrs:{label:"回复时间",align:"center",prop:"replyTime"}}),a("el-table-column",{attrs:{label:"反馈时间",align:"center",prop:"feedbackTime"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"ckxq",label:"详情"},on:{fatherMethod:function(a){return e.handleWatch(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.limit},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"limit",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"1000px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-dialog",{attrs:{width:"500px",title:"回复",visible:e.innerDialog.show,"append-to-body":""},on:{"update:visible":function(t){return e.$set(e.innerDialog,"show",t)}}},[a("el-form",{ref:"innerForm",attrs:{inline:!0,model:e.innerDialog.form,size:"small"}},[a("el-form-item",{attrs:{label:"回复内容:",prop:"replyContent"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入回复内容",type:"textarea",rows:"5",clearable:""},model:{value:e.innerDialog.form.replyContent,callback:function(t){e.$set(e.innerDialog.form,"replyContent",t)},expression:"innerDialog.form.replyContent"}})],1),a("el-form-item",{attrs:{label:"上传图片:",prop:"replyImg"}},[a("upload-single",{model:{value:e.innerDialog.form.replyImg,callback:function(t){e.$set(e.innerDialog.form,"replyImg",t)},expression:"innerDialog.form.replyImg"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.innerDialog.show=!1}}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterInnerDialog}},[e._v("确 定")])],1)])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"xl-feedback--title"},[a("span",{staticClass:"xl-feedback--title-label"},[e._v("基础信息")])]),a("el-form",{staticStyle:{"padding-left":"10px"},attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"反馈用户:"}},[e._v(e._s(e.baseInfo.feedbackNickname))]),a("el-form-item",{attrs:{label:"反馈类型:"}},[e._v(e._s(e.baseInfo.feedbackTypeLabel))]),a("el-form-item",{attrs:{label:"反馈时间:"}},[e._v(e._s(e.baseInfo.feedbackTime))]),a("el-form-item",{attrs:{label:"处理状态:"}},[e._v(e._s(e.baseInfo.handleStatusLabel))]),a("el-form-item",{attrs:{label:"设备:"}},[e._v(e._s(e.baseInfo.appDevice))]),a("el-form-item",{attrs:{label:"系统:"}},[e._v(e._s(e.baseInfo.appSystem))]),a("el-form-item",{attrs:{label:"APP版本:"}},[e._v(e._s(e.baseInfo.appVersion))]),a("el-form-item",{attrs:{label:"当前网络:"}},[e._v(e._s(e.baseInfo.network))])],1)],1),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"xl-feedback--title"},[a("span",{staticClass:"xl-feedback--title-label"},[e._v("回复记录 "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dialog.isReply,expression:"dialog.isReply"}]},[e._v("(待回复)")])]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReply}},[e._v(" 回复 ")])],1),a("ul",{staticClass:"xl-feedback--content"},e._l(e.feedbackList,(function(t,n){return a("li",{key:n,staticClass:"xl-feedback--item"},[a("div",{staticClass:"xl-feedback--item-name"},[e._v(e._s(t.feedbackNickname))]),a("div",{staticClass:"xl-feedback--item-detail"},[a("div",{staticClass:"date"},[e._v(e._s(t.createdAt))]),a("p",[e._v(e._s(t.replyContent))]),e._l(t.replyImg,(function(e,n){return a("el-image",{key:n,staticStyle:{width:"100px",height:"100px"},attrs:{lazy:"",src:e,"preview-src-list":t.replyImg,fit:"cover"}})}))],2)])})),0)])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 关 闭 ")])],1)],1)],1)},l=[],r=a("06c4"),i=a("e9ff"),o=(a("2eeb"),a("053b"),a("9302"),a("e35a"),a("0d7a"),a("4194"),a("e18c"),a("e186"),a("0191")),s=a("0fea"),c=a("e60d"),u={name:"Feedback",components:{uploadSingle:c["a"]},data:function(){return{productLists:[],queryParams:{feedbackNickname:"",feedbackMobile:"",feedbackContent:"",feedbackType:"",replyStatus:"",handleStatus:"",beginReplyTime:"",endReplyTime:"",beginFeedbackTime:"",endFeedbackTime:"",sourceId:"",page:1,limit:10},feedbackDate:"",replyDate:"",typeOptions:[{label:"全部",value:""},{label:"程序bug",value:"1"},{label:"功能建议",value:"2"},{label:"内容意见",value:"3"},{label:"广播问题",value:"4"},{label:"钱包问题",value:"5"},{label:"跟帖相关",value:"6"},{label:"活动相关",value:"7"},{label:"其他",value:"8"}],replyOptions:[{label:"全部",value:""},{label:"待回复",value:1},{label:"已回复",value:2}],handleOption:[{label:"全部",value:""},{label:"处理中",value:1},{label:"已处理",value:2}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},loading:!1,tableData:[],dialog:{title:"反馈详情",show:!1,isReply:!1,id:""},baseInfo:{feedbackNickname:"",feedbackTypeLabel:"",feedbackTime:"",handleStatusLabel:"",appDevice:"",appSystem:"",appVersion:"",network:""},feedbackList:[],total:0,innerDialog:{show:!1,form:{replyContent:"",replyImg:""}}}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()},methods:{getProductList:function(){var e=this;return Object(s["Xb"])({}).then((function(t){var a,n=t.data||[];e.productLists=n.map((function(e){return{label:e.name,value:e.source_id}})),e.queryParams.sourceId=null===n||void 0===n||null===(a=n[0])||void 0===a?void 0:a.source_id}))},handleReset:function(){this.feedbackDate="",this.replyDate="",Object.assign(this.queryParams,{beginFeedbackTime:"",endFeedbackTime:"",beginReplyTime:"",endReplyTime:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleDateChange:function(e,t){var a=e||["",""];"feedbackDate"===t?(this.queryParams.beginFeedbackTime=a[0],this.queryParams.endFeedbackTime=a[1]):(this.queryParams.beginReplyTime=a[0],this.queryParams.endReplyTime=a[1])},handleWatch:function(e){var t=e.id;this.dialog.id=t,this.dialog.show=!0,this.getFeedDetail(t)},getFeedDetail:function(e){var t=this;Object(o["l"])({id:e}).then((function(e){var a,n=e.data;t.baseInfo=Object(r["a"])(Object(r["a"])({},n||{}),{},{feedbackTypeLabel:n.feedbackType.split(",").map((function(e){var a;return null===(a=t.typeOptions.find((function(t){return t.value==e})))||void 0===a?void 0:a.label})).join(),handleStatusLabel:null===(a=t.handleOption.find((function(e){return e.value===n.handleStatus})))||void 0===a?void 0:a.label}),t.feedbackList=(n.replyData||[]).map((function(e){return Object(r["a"])(Object(r["a"])({},e),{},{feedbackNickname:2===e.replyType?"官方回复":e.feedbackNickname,replyImg:e.replyImg.split(",")})}));var l=t.feedbackList.length;t.dialog.isReply=l&&1===t.feedbackList[l-1].replyType}))},handleReply:function(){this.resetForm("innerForm"),this.innerDialog.show=!0},enterInnerDialog:function(){var e=this,t=this.dialog.id;Object(o["w"])(Object(r["a"])(Object(r["a"])({},this.innerDialog.form),{},{feedbackId:t})).then((function(){e.$message.success("回复成功!"),e.innerDialog.show=!1,e.getFeedDetail(t),e.getList()}))},getList:function(){var e=this;this.loading=!0,this.tableData=[];var t=Object(r["a"])({},this.queryParams);Object(o["k"])(this.removePropertyOfNullFor0(t)).then((function(t){var a,n;e.tableData=((null===(a=t.data)||void 0===a?void 0:a.datas)||[]).map((function(t){var a,n;return Object(r["a"])(Object(r["a"])({},t),{},{reportTypeLabel:t.feedbackType.split(",").map((function(t){var a;return null===(a=e.typeOptions.find((function(e){return e.value==t})))||void 0===a?void 0:a.label})).join(),replyStatusLabel:null===(a=e.replyOptions.find((function(e){return e.value===t.replyStatus})))||void 0===a?void 0:a.label,handleStatusLabel:null===(n=e.handleOption.find((function(e){return e.value===t.handleStatus})))||void 0===n?void 0:n.label})})),e.total=(null===(n=t.data)||void 0===n?void 0:n.count)||0})).finally((function(){e.loading=!1}))},getSourceList:function(){Object(o["u"])().then((function(e){console.log(e)}))}}},d=u,p=(a("097e"),a("cba8")),m=Object(p["a"])(d,n,l,!1,null,"673554fc",null);t["default"]=m.exports},ee54:function(e,t,a){}}]);