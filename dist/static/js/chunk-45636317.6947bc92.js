(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45636317"],{"0191":function(e,t,a){"use strict";a.d(t,"n",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"h",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"q",(function(){return u})),a.d(t,"j",(function(){return d})),a.d(t,"k",(function(){return m})),a.d(t,"s",(function(){return p})),a.d(t,"o",(function(){return f})),a.d(t,"p",(function(){return g})),a.d(t,"t",(function(){return h})),a.d(t,"i",(function(){return b})),a.d(t,"e",(function(){return y})),a.d(t,"c",(function(){return v})),a.d(t,"g",(function(){return j})),a.d(t,"r",(function(){return w})),a.d(t,"m",(function(){return O})),a.d(t,"d",(function(){return k})),a.d(t,"b",(function(){return _})),a.d(t,"l",(function(){return P}));var r=a("b775"),n=a("b60c"),o=a("0385");a("2ab73");function i(e){return Object(r["a"])({url:"/api/refuseReasons",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/api/refuseReasons",method:"post",data:e})}function l(e,t){return Object(r["a"])({url:"/api/refuseReasons/".concat(e),method:"PATCH",data:t})}function c(e){return Object(r["a"])({url:"/api/refuseReasons/".concat(e),method:"delete"})}function u(){return Object(n["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(e){return Object(n["a"])({url:"/internal/feedback/pageList",method:"post",data:e})}function m(e){return Object(n["a"])({url:"/internal/feedback/info",method:"get",params:e})}function p(e){return Object(n["a"])({url:"/internal/feedback/reply",method:"post",data:e})}function f(e){return Object(n["a"])({url:"/internal/report/pageList",method:"post",data:e})}function g(e){return Object(n["a"])({url:"/internal/report/info",method:"get",params:e})}function h(e){return Object(n["a"])({url:"/internal/report/reply",method:"post",data:e})}function b(e){return Object(o["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:e})}function y(e){return Object(o["a"])({url:"/new/intranet/comment/manage/".concat(e),method:"get"})}function v(e){return Object(o["a"])({url:"/new/intranet/comment/operate",method:"post",data:e})}function j(e){return Object(o["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:e})}function w(e){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function O(e){return Object(n["a"])({url:"/internal/baoliao/getList",method:"post",data:e})}function k(e){return Object(n["a"])({url:"/internal/baoliao/modifyState",method:"post",data:e})}function _(e){return Object(n["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:e})}function P(e){return Object(n["a"])({url:"/internal/baoliao/getData",method:"post",params:e})}},"0385":function(e,t,a){"use strict";a("e18c");var r=a("f753"),n=a.n(r),o=a("b705"),i=a("a18c"),s=n.a.create({baseURL:"http://10.30.10.158/api",timeout:5e3});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)})),t["a"]=s},"2ab73":function(e,t,a){"use strict";a("e18c");var r=a("f753"),n=a.n(r),o=a("b705"),i=a("a18c"),s=n.a.create({baseURL:"http://10.30.10.71:8080",timeout:6e4});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)}))},3171:function(e,t,a){},"5f7f":function(e,t,a){"use strict";a("3171")},b60c:function(e,t,a){"use strict";a("e18c");var r=a("f753"),n=a.n(r),o=a("b705"),i=a("a18c"),s=n.a.create({baseURL:"http://10.30.10.158/adm/fusion",timeout:5e3});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)})),t["a"]=s},ce8a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-reject-reasons"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"原因名称:",prop:"name"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),a("el-form-item",{attrs:{label:"适用场景:",prop:"apply_to"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择类型",clearable:""},model:{value:e.queryParams.apply_to,callback:function(t){e.$set(e.queryParams,"apply_to",t)},expression:"queryParams.apply_to"}},e._l(e.applyOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"创建日期:"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"原因名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"原因描述",align:"center",prop:"introduction","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"适用于",align:"center",prop:"applyLabel","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"verify-table-action"},[a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleListDelete(t.row)}}})],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialog.form,rules:e.dialog.rules}},[a("el-form-item",{attrs:{"label-width":"120px",label:"拒绝原因:",prop:"name"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入拒绝原因",clearable:"",size:"small"},model:{value:e.dialog.form.name,callback:function(t){e.$set(e.dialog.form,"name",t)},expression:"dialog.form.name"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"描述:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入描述",clearable:"",type:"textarea",rows:"4",resize:"none"},model:{value:e.dialog.form.introduction,callback:function(t){e.$set(e.dialog.form,"introduction",t)},expression:"dialog.form.introduction"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"适用于:",prop:"apply_to"}},[a("el-checkbox-group",{model:{value:e.dialog.form.apply_to,callback:function(t){e.$set(e.dialog.form,"apply_to",t)},expression:"dialog.form.apply_to"}},e._l(e.applyOptions.slice(1),(function(t){return a("el-checkbox",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1)],1)},n=[],o=a("46d3"),i=a("1c03"),s=(a("e18c"),a("2eeb"),a("9302"),a("e35a"),a("0d7a"),a("053b"),a("513c"),a("0191")),l={name:"RejectReasons",data:function(){return{queryParams:{name:"",apply_to:"",startdate:"",enddate:"",pageSize:10,page:1},applyOptions:[{label:"全部",value:""},{label:"新闻审核",value:1},{label:"评论审核",value:2},{label:"爆料审核",value:3},{label:"提现审核",value:4}],total:0,loading:!1,dateValue:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:[],dialog:{title:"新增",show:!1,form:{name:"",apply_to:[],introduction:""},rules:{name:{required:!0,message:"请输入标签名称",trigger:"blur"},apply_to:{type:"array",required:!0,message:"请选择使用场景",trigger:"change"}}}}},created:function(){this.getList()},methods:{handleReset:function(){this.dateValue="",Object.assign(this.queryParams,{startdate:"",enddate:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){var e=this;Object.assign(this.dialog,{show:!0,title:"新增",form:{name:"",apply_to:[],introduction:""}}),this.$nextTick((function(){var t;null===(t=e.$refs.dialogForm)||void 0===t||t.clearValidate()}))},handleDateChange:function(e){var t=e||["",""];this.queryParams.startdate=t[0],this.queryParams.enddate=t[1]},getList:function(){var e=this;this.loading=!0;var t=Object(i["a"])({},this.queryParams);Object(s["n"])(this.removePropertyOfNull(t)).then((function(t){var a=t.data,r=t.total,n=e.applyOptions.reduce((function(e,t){return Object(i["a"])(Object(i["a"])({},e),{},Object(o["a"])({},t.value,t.label))}),{});e.tableData=a.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{applyLabel:e.apply_to.split(",").map((function(e){return n[e]})).join()})})),e.total=r})).finally((function(){e.loading=!1}))},handleListDelete:function(e){var t=this,a=e.id;this.$confirm("此操作将永久删除这条id为".concat(a,"的拒绝原因, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["f"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleEdit:function(e){var t=this;Object.assign(this.dialog,{show:!0,title:"编辑",form:{name:e.name,apply_to:e.apply_to.split(",").map((function(e){return Number(e)})),introduction:e.introduction,id:e.id}}),this.$nextTick((function(){var e;null===(e=t.$refs.dialogForm)||void 0===e||e.clearValidate()}))},closeDialog:function(){this.dialog.show=!1},enterDialog:function(){var e=this,t=this.dialog.form.id,a=Object(i["a"])({},this.dialog.form);delete a.id,a=this.removePropertyOfNull(Object(i["a"])(Object(i["a"])({},a),{},{apply_to:a.apply_to.join()})),this.$refs.dialogForm.validate((function(r){var n;r&&(t?(delete e.dialog.form.id,n=Object(s["h"])(t,a)):n=Object(s["a"])(e.removePropertyOfNull(a)),n.then((function(){e.$message({message:t?"修改成功":"新增成功",type:"success"}),e.dialog.show=!1,e.getList()})))}))}}},c=l,u=(a("5f7f"),a("4ac2")),d=Object(u["a"])(c,r,n,!1,null,"2f8664c2",null);t["default"]=d.exports}}]);