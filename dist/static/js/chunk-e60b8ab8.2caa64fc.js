(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e60b8ab8"],{"0191":function(e,t,a){"use strict";a.d(t,"q",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"i",(function(){return l})),a.d(t,"g",(function(){return c})),a.d(t,"t",(function(){return u})),a.d(t,"k",(function(){return d})),a.d(t,"l",(function(){return m})),a.d(t,"v",(function(){return f})),a.d(t,"r",(function(){return p})),a.d(t,"s",(function(){return h})),a.d(t,"w",(function(){return b})),a.d(t,"j",(function(){return g})),a.d(t,"f",(function(){return v})),a.d(t,"c",(function(){return w})),a.d(t,"h",(function(){return y})),a.d(t,"u",(function(){return k})),a.d(t,"n",(function(){return x})),a.d(t,"d",(function(){return _})),a.d(t,"b",(function(){return j})),a.d(t,"m",(function(){return O})),a.d(t,"p",(function(){return $})),a.d(t,"e",(function(){return L})),a.d(t,"o",(function(){return D}));var n=a("b775"),r=a("b60c"),i=a("0385");a("2ab73");function o(e){return Object(n["a"])({url:"/api/refuseReasons",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/api/refuseReasons",method:"post",data:e})}function l(e,t){return Object(n["a"])({url:"/api/refuseReasons/".concat(e),method:"PATCH",data:t})}function c(e){return Object(n["a"])({url:"/api/refuseReasons/".concat(e),method:"delete"})}function u(){return Object(r["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(e){return Object(r["a"])({url:"/internal/feedback/pageList",method:"post",data:e})}function m(e){return Object(r["a"])({url:"/internal/feedback/info",method:"get",params:e})}function f(e){return Object(r["a"])({url:"/internal/feedback/reply",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/internal/report/pageList",method:"post",data:e})}function h(e){return Object(r["a"])({url:"/internal/report/info",method:"get",params:e})}function b(e){return Object(r["a"])({url:"/internal/report/reply",method:"post",data:e})}function g(e){return Object(i["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:e})}function v(e){return Object(i["a"])({url:"/new/intranet/comment/manage/".concat(e),method:"get"})}function w(e){return Object(i["a"])({url:"/new/intranet/comment/operate",method:"post",data:e})}function y(e){return Object(i["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:e})}function k(e){return Object(i["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function x(e){return Object(r["a"])({url:"/internal/baoliao/getList",method:"post",data:e})}function _(e){return Object(r["a"])({url:"/internal/baoliao/modifyState",method:"post",data:e})}function j(e){return Object(r["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:e})}function O(e){return Object(r["a"])({url:"/internal/baoliao/getData",method:"post",params:e})}function $(e){return Object(r["a"])({url:"/internal/social/post/list",method:"post",data:e})}function L(e){return Object(r["a"])({url:"/internal/social/post/verify",method:"post",data:e})}function D(e){return Object(r["a"])({url:"/internal/social/post/Info",method:"post",params:e})}},"0681":function(e,t,a){"use strict";a("5c66")},5837:function(e,t,a){},"5c66":function(e,t,a){},"7a2d":function(e,t,a){"use strict";a("5837")},"992f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-review-news"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"新闻标题:",prop:"keyword"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),a("el-form-item",{attrs:{label:"发布栏目:",prop:"channel_id"}},[a("el-cascader",{staticStyle:{width:"200px"},attrs:{filterable:"",options:e.channelsList,props:e.cascaderOption,clearable:""},model:{value:e.queryParams.channel_id,callback:function(t){e.$set(e.queryParams,"channel_id",t)},expression:"queryParams.channel_id"}})],1),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"提交时间:"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{attrs:{type:"primary",size:"mini",disabled:0===e.selection.length},on:{click:e.handleBatchThrough}},[e._v(" 批量通过 ")]),a("el-button",{attrs:{type:"warning",size:"mini",disabled:0===e.selection.length},on:{click:e.handleBatchReject}},[e._v(" 批量拒绝 ")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e.isMobile?e._e():a("el-table-column",{attrs:{label:"新闻ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"新闻标题",align:"center",prop:"title","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"watch-detail-btn",attrs:{type:"text"},on:{click:function(a){return e.goLink(t.row)}}},[e._v(e._s(t.row.title))])]}}])}),e.isMobile?e._e():a("el-table-column",{attrs:{label:"发布栏目ID",align:"center",prop:"channel_id"}}),a("el-table-column",{attrs:{label:"发布栏目",align:"center",prop:"channel.name"}}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.statusLabel)+" "),t.row.review_remark?a("el-popover",{attrs:{title:"拒绝原因",placement:"top",width:"200",trigger:"click",content:t.row.review_remark}},[a("i",{staticClass:"el-icon-info",staticStyle:{color:"#ccc"},attrs:{slot:"reference"},slot:"reference"})]):e._e()]}}])}),e.isMobile?e._e():a("el-table-column",{attrs:{label:"提交时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"verify-table-action"},[a("Iconbutton",{attrs:{icontype:"shjd",label:"进度"},on:{fatherMethod:function(a){return e.watchProgress(t.row)}}}),a("Iconbutton",{attrs:{icontype:"ckxq",label:"详情"},on:{fatherMethod:function(a){return e.goLink(t.row)}}}),0===t.row.status?a("Iconbutton",{attrs:{icontype:"shtg",label:"通过"},on:{fatherMethod:function(a){return e.handleThrough(t.row)}}}):e._e(),0===t.row.status?a("Iconbutton",{attrs:{icontype:"shjj",label:"拒绝"},on:{fatherMethod:function(a){return e.handleReject(t.row)}}}):e._e()],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialog.form,rules:e.dialogRules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"拒绝原因",prop:"remark"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择拒绝原因",clearable:""},model:{value:e.dialog.form.remark,callback:function(t){e.$set(e.dialog.form,"remark","string"===typeof t?t.trim():t)},expression:"dialog.form.remark"}},e._l(e.rejectLists,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),"自定义原因"===e.dialog.form.remark?a("el-form-item",{attrs:{label:"原因",prop:"reason"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:6,clearable:"",size:"small"},model:{value:e.dialog.form.reason,callback:function(t){e.$set(e.dialog.form,"reason","string"===typeof t?t.trim():t)},expression:"dialog.form.reason"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleDialogClose}},[e._v(" 取 消 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleDialogClose("confirm")}}},[e._v(" 确 定 ")])],1)],1),e.detailDialog.show&&!e.isMobile?a("el-dialog",{attrs:{width:"1200px",title:"查看",top:"20px",visible:e.detailDialog.show},on:{"update:visible":function(t){return e.$set(e.detailDialog,"show",t)}}},[a("new-detail",{attrs:{id:e.detailDialog.id,visible:e.detailDialog.show},on:{"update:visible":function(t){return e.$set(e.detailDialog,"show",t)},refresh:e.refresh}})],1):e._e(),e.detailDialog.show&&e.isMobile?a("el-dialog",{attrs:{width:"100vw",top:"0",title:"查看",visible:e.detailDialog.show},on:{"update:visible":function(t){return e.$set(e.detailDialog,"show",t)}}},[a("mobile-detail",{attrs:{id:e.detailDialog.id,visible:e.detailDialog.show},on:{"update:visible":function(t){return e.$set(e.detailDialog,"show",t)},refresh:e.refresh}})],1):e._e(),a("el-dialog",{attrs:{width:"400px",title:"审批进度",visible:e.approval.show},on:{"update:visible":function(t){return e.$set(e.approval,"show",t)}}},[a("el-steps",{attrs:{direction:"vertical",active:e.approval.active,space:100}},e._l(e.approval.lists,(function(t,n){return a("el-step",{key:t.sort,attrs:{title:t.title,description:t.description}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("div",[e._v(e._s(0===n?"提交人":"审核人")+": "+e._s(t.name))]),t.remark?a("p",[e._v("拒绝原因: "+e._s(t.remark))]):e._e()])])})),1)],1)],1)},r=[],i=a("1c03"),o=(a("2eeb"),a("053b"),a("9302"),a("3466"),a("e35a"),a("0d7a"),a("dbb3"),a("b130"),a("90aa"),a("e18c"),a("1c2e"),a("b4fb"),a("4194"),a("0fea")),s=a("cc48"),l=a("0191"),c=a("1d6e"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"xl-mobile-news"},[e.editorPerson?a("el-header",{staticClass:"xl-mobile-news--header",attrs:{height:"auto"}},[a("span",{staticStyle:{color:"#409eff","margin-right":"10px"}},[e._v(e._s(e.editorPerson))]),e._v(" 当前正在编辑该文稿 ")]):e._e(),a("el-main",{staticStyle:{padding:"10px 0"}},[a("el-tabs",{staticClass:"xl-mobile-news--tab",on:{"tab-click":function(t){return e.handleTabChange("tab")}},model:{value:e.from.extra.type,callback:function(t){e.$set(e.from.extra,"type",t)},expression:"from.extra.type"}},e._l(e.tabs,(function(t){return a("el-tab-pane",{key:t.value,attrs:{disabled:e.disabled,label:t.label,name:t.value}})})),1),a("el-form",{ref:"submitForm",staticStyle:{"max-height":"600px",overflow:"auto","background-color":"#fff",padding:"10px 10px"},attrs:{"label-width":"70px",size:"small",model:e.from,rules:e.currentTabsFromRules}},[a("el-form-item",e._b({directives:[{name:"show",rawName:"v-show",value:e.initFrom().includes("extra.title"),expression:"initFrom().includes('extra.title')"}]},"el-form-item",e.formOptions["extra.title"].item.props,!1),[a("el-input",e._b({attrs:{value:e.parseObj(e.formOptions["extra.title"].item),clearable:"",size:"small"},on:{input:function(t){return e.handleInput(t,e.formOptions["extra.title"].item)}}},"el-input",e.formOptions["extra.title"].item.componentProps,!1))],1),a("el-form-item",e._b({directives:[{name:"show",rawName:"v-show",value:e.initFrom().includes("extra.keywords"),expression:"initFrom().includes('extra.keywords')"}]},"el-form-item",e.formOptions["extra.keywords"].item.props,!1),[a("tag",{attrs:{value:e.parseObj(e.formOptions["extra.keywords"].item)},on:{input:function(t){return e.handleInput(t,e.formOptions["extra.keywords"].item)}}})],1),a("el-form-item",e._b({directives:[{name:"show",rawName:"v-show",value:e.initFrom().includes("extra.content"),expression:"initFrom().includes('extra.content')"}]},"el-form-item",e.formOptions["extra.content"].item.props,!1),[e.editorInit?a("editor",{attrs:{value:e.parseObj(e.formOptions["extra.content"].item)},on:{input:function(t){return e.handleInput(t,e.formOptions["extra.content"].item)},changeVideoList:e.changeVideoList}}):e._e()],1)],1)],1),a("el-footer",{staticClass:"xl-mobile-news--footer",attrs:{height:"40px"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleClose}},[e._v(" 关闭 ")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSave}},[e._v(" 保存 ")]),0===e.status?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleThrough}},[e._v(" 通过 ")]):e._e(),0===e.status?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleReject}},[e._v(" 拒绝 ")]):e._e()],1)],1)},d=[],m=a("99a5"),f=a("190b"),p=a("46d3"),h=(a("6a61"),a("513c"),a("15d9"),a("98e0"),a("96db"),a("6db4"),a("156b")),b=a("0d9b"),g={props:{id:{type:[Number,String],required:!0},disabled:{type:Boolean,default:!1}},components:{Editor:h["a"],Tag:b["a"]},data:function(){return{editorPerson:"",formOptions:Object.freeze({"extra.title":{item:{key:"extra.title",props:{label:"标题:",prop:"extra.title"},component:"input",componentProps:{placeholder:"请输入新闻标题"}},rule:[{required:!0,message:"请输入新闻标题",trigger:"blur"}]},"extra.keywords":{item:{key:"extra.keywords",props:{label:"关键词:"},component:"tag"}},"extra.content":{item:{key:"extra.content",props:{label:"编辑器:",prop:"extra.content"},component:"edit"},rule:[{required:!0,message:"请输入编辑器内容",trigger:"blur"}]},target_obj:{item:{key:"target_obj",props:{label:"链接对象:",prop:"target_obj"},component:"radio",lists:[{label:"看电视",value:"tv"},{label:"听广播",value:"radio"}]},rule:[{required:!0,message:"请选择链接对象",trigger:"change"}]}}),tabs:[{label:"图文",value:"news"},{label:"视频",value:"video"},{label:"图集",value:"album"},{label:"外链",value:"outer_link"}],currentTabsFromRules:{},from:{extra:{type:"news",title:"",keywords:"",content:""}},editorVideoLists:[],editorInit:!1,status:0}},methods:{parseObj:function(e){var t=e.key.split("."),a=t.reduce((function(e,t){return e[t]}),this.from);return"select"===e.component?a&&a.toString().split(","):a},handleInput:function(e,t){var a=t.key.split("."),n=t.type||"string";"number"===n&&(e=parseInt(e)||""),a.reduce((function(n,r){if(r!==a[a.length-1])return n[r];n[r]="select"===t.component?e.join():e}),this.from)},initFrom:function(){var e=[],t=["extra.title","extra.keywords"];switch(this.from.extra.type){case"news":e=[].concat(t,["extra.content"]);break;default:e=[].concat(t)}return e},delEditorVideo:function(e){var t=document.createElement("div");t.innerHTML=e;var a=Array.from(t.querySelectorAll("video"));return a.length?this.editorVideoLists.filter((function(e){return a.find((function(t){return t.title===e.title&&t.cover===e.poster}))})):[]},handleTabChange:function(e){var t=this,a=this.initFrom();this.currentTabsFromRules=a.reduce((function(e,a){return Object(i["a"])(Object(i["a"])({},e),{},Object(p["a"])({},a,t.formOptions[a].rule))}),{}),this.$nextTick((function(){var a;"tab"===e&&Object.assign(t.from.extra,{video_extra:{video_list:[]}}),null===(a=t.$refs.submitForm)||void 0===a||a.clearValidate()}))},changeVideoList:function(e){this.editorVideoLists.push(e)},handleSave:function(){var e=this;this.$refs.submitForm.validate((function(t){t&&("news"===e.from.extra.type&&(e.from.extra.video_extra={video_list:e.delEditorVideo(e.from.extra.content)}),Object(s["e"])(e.id,e.from).then((function(){e.$message.success("保存草稿成功!"),e.$emit("refresh"),e.handleClose()})))}))},handleThrough:function(){var e=this,t=this.id,a=this.from;this.$refs.submitForm.validate((function(n){n&&Object(s["e"])(t,a).then((function(){Object(s["g"])({ids:t,status:1}).then((function(){e.$emit("refresh"),e.handleClose()}))}))}))},handleReject:function(){var e=this,t=this.id;this.$prompt("请输入拒绝原因","拒绝",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"promptClass",inputValidator:function(e){return null!=e&&""!==e.trim()},inputErrorMessage:"请输入拒绝原因"}).then((function(a){var n=a.value;Object(s["g"])({ids:t,status:2,remark:n.trim()}).then((function(){e.$message.success("拒绝成功"),e.$emit("refresh"),e.handleClose()}))})).catch((function(){e.$message({type:"info",message:"取消输入"})}))},getEditorPerson:function(){var e=this;Object(s["s"])({id:this.id,type:"news"}).then((function(t){e.editorPerson=t.length<2?"":t.join()}))},handleClose:function(){this.$emit("update:visible",!1)},getList:function(){var e=this;return Object(s["v"])(this.id).then((function(t){var a=t.extra;e.status=t.status,e.from={author_name:t.author_name,editor_name:t.editor_name,extra:a},e.editorVideoLists=Object(f["a"])(a.video_extra&&a.video_extra.video_list||[])}))},getData:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getList();case 2:e.handleTabChange(),e.$nextTick((function(){e.editorInit=!0}));case 4:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this,t=setInterval((function(){e.getEditorPerson()}),8e3);this.$once("hook:beforeDestroy",(function(){clearInterval(t)})),this.getData()}},v=g,w=(a("7a2d"),a("4ac2")),y=Object(w["a"])(v,u,d,!1,null,null,null),k=y.exports,x={name:"ReviewNews",components:{NewDetail:c["a"],mobileDetail:k},data:function(){return{statusOptions:[{label:"全部",value:""},{label:"已审核",value:1},{label:"待审核",value:0},{label:"已拒绝",value:2}],queryParams:{keyword:"",channel_id:"",startdate:"",status:0,enddate:"",pageSize:10,page:1},total:0,loading:!1,dateValue:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:[],selection:[],cascaderOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!1},channelsList:[],rejectLists:[],dialog:{show:!1,title:"通过",form:{ids:"",status:2,reason:"",remark:""}},dialogRules:{remark:{required:!0,message:"请选择拒绝原因",trigger:"change"},reason:{required:!0,message:"请输入自定义原因",trigger:"change"}},detailDialog:{show:!1,id:""},approval:{show:!1,active:"",lists:[]},userLists:[]}},created:function(){this.getChannels(),this.getRejectList(),this.getList(),this.getUserList()},methods:{getUserList:function(){var e=this;Object(o["Bb"])({model:"User",page:1,pageSize:9999}).then((function(t){var a=t.data;e.userLists=a.map((function(e){var t=e.id,a=e.name;return{id:t,name:a}}))}))},handleThrough:function(e){var t=this,a=e.id;Object(s["g"])({ids:a,status:1}).then((function(){t.$message({message:"审核通过成功",type:"success"}),t.getList()}))},handleBatchThrough:function(){var e=this;Object(s["g"])({ids:this.selection.join(),status:1}).then((function(){e.$message({message:"批量审核通过成功",type:"success"}),e.getList()}))},handleReject:function(e){var t=this,a=e.id;Object.assign(this.dialog,{show:!0,title:"拒绝",form:{ids:a,status:2,remark:""}}),this.$nextTick((function(){var e;null===(e=t.$refs.dialogForm)||void 0===e||e.clearValidate()}))},handleBatchReject:function(){var e=this;Object.assign(this.dialog,{show:!0,title:"批量拒绝",form:{ids:this.selection.join(),status:2,remark:""}}),this.$nextTick((function(){var t;null===(t=e.$refs.dialogForm)||void 0===t||t.clearValidate()}))},watchProgress:function(e){var t=this,a=e.multi_review||[];if(0===a.length)return this.$message.warning("暂无审批进度");this.approval={show:!0,active:a.findIndex((function(e){return 1===e.status||2===e.status}))+1,lists:a.map((function(e){var a,n=e.reviewer_ids.split(",");return Object(i["a"])(Object(i["a"])({},e),{},{name:t.userLists.filter((function(t){return e.user_id?t.id===e.user_id:n.includes(t.id.toString())})).map((function(e){return e.name})).join(),title:"".concat(null===(a=t.statusOptions.find((function(t){return e.status===t.value})))||void 0===a?void 0:a.label,"   ").concat(e.time||"")})}))}},handleDateChange:function(e){var t=e||["",""];this.queryParams.startdate=t[0],this.queryParams.enddate=t[1]},handleQuery:function(){this.queryParams.page=1,this.getList()},handleReset:function(){this.dateValue="",Object.assign(this.queryParams,{startdate:"",enddate:"",page:1}),this.resetForm("queryForm")},goLink:function(e){var t=e.id;this.detailDialog={id:t,show:!0}},refresh:function(){this.getList(),this.dialog.id=""},handleDialogClose:function(e){var t=this;"confirm"===e?this.$refs.dialogForm.validate((function(e){if(e){var a=Object(i["a"])({},t.dialog.form);"自定义原因"===a.remark&&(a.remark=a.reason,delete a.reason),Object(s["g"])(a).then((function(){t.$message({message:"".concat(t.dialog.title,"成功"),type:"success"}),t.getList()})).finally((function(){t.dialog.show=!1}))}})):this.dialog.show=!1},handleSelectionChange:function(e){this.selection=e.map((function(e){return e.id}))},getList:function(){var e=this;this.loading=!0,this.selection=[],this.tableData=[];var t=Object(i["a"])(Object(i["a"])({},this.queryParams),{},{reviewer_id:this.$store.state.user.u_info.id});Object(s["w"])(this.removePropertyOfNullFor0(t)).then((function(t){var a;e.tableData=(t.data||[]).map((function(t){var n;return a=null===(n=e.statusOptions.find((function(e){return e.value===t.status})))||void 0===n?void 0:n.label,Object(i["a"])(Object(i["a"])({},t),{},{statusLabel:a})})),e.total=t.total})).finally((function(){e.loading=!1}))},getRejectList:function(){var e=this;Object(l["q"])({pageSize:9999,page:1,apply_to:"1"}).then((function(t){e.rejectLists=[{id:"98998989",name:"自定义原因"}].concat(t.data||[])}))},getChannels:function(){var e=this;Object(o["pb"])({with_special_channels:"topic"}).then((function(t){e.channelsList=t}))}}},_=x,j=(a("0681"),Object(w["a"])(_,n,r,!1,null,"547332c8",null));t["default"]=j.exports}}]);