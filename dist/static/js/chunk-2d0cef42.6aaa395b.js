(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cef42"],{"623c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("keep-alive",{attrs:{include:e.include}},[a(e.component,{tag:"component",attrs:{id:e.id,beginTime:e.beginTime,endTime:e.endTime},on:{handleReturn:e.handleReturn,invitedRecord:e.invitedRecord,integralValue:e.integralValue,loginRecord:e.loginRecord}})],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"所属产品:"}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},on:{change:e.handleQuery},model:{value:e.queryParams.sourceId,callback:function(t){e.$set(e.queryParams,"sourceId",t)},expression:"queryParams.sourceId"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"被邀请人注册时间:"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:e.handleDateChange},model:{value:e.queryParams.registerTime,callback:function(t){e.$set(e.queryParams,"registerTime",t)},expression:"queryParams.registerTime"}})],1),a("el-form-item",{attrs:{prop:"mobile"}},[a("el-input",{staticStyle:{width:"900px"},attrs:{type:"textarea",rows:4,placeholder:"请输入手机号或者邀请码进行搜索,多个以逗号隔开",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.textareaValue,callback:function(t){e.$set(e.queryParams,"textareaValue",t)},expression:"queryParams.textareaValue"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleImport}},[e._v(" 导出 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"会员ID",align:"center",prop:"userId"}}),a("el-table-column",{attrs:{label:"用户名",align:"center",prop:"nickName","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"手机号",align:"center",prop:"mobile"}}),a("el-table-column",{attrs:{label:"邀请码",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(t.row.invitationCode))]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"small"},on:{click:function(a){return e.invitedRecord(t.row)}}},[e._v(" 邀请记录("+e._s(t.row.invitationCount)+") ")])]}}])}),a("el-table-column",{attrs:{label:"积分值",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticStyle:{"text-decoration":"underline"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.integralValue(t.row)}}},[e._v(" "+e._s(t.row.points)+" ")])]}}])}),a("el-table-column",{attrs:{label:"登录记录",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"small"},on:{click:function(a){return e.loginRecord(t.row)}}},[e._v(" 登录记录 ")])]}}])}),a("el-table-column",{attrs:{label:"注册时间",align:"center",prop:"createdTime"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}),a("Iconbutton",{attrs:{icontype:"jy",label:"禁言"},on:{fatherMethod:function(a){return e.handleDelete(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.limit},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"limit",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"nickName"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:""},model:{value:e.dialogForm.nickName,callback:function(t){e.$set(e.dialogForm,"nickName",t)},expression:"dialogForm.nickName"}})],1),a("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[a("upload-single",{model:{value:e.dialogForm.avatar,callback:function(t){e.$set(e.dialogForm,"avatar",t)},expression:"dialogForm.avatar"}})],1),a("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",disabled:""},model:{value:e.dialogForm.mobile,callback:function(t){e.$set(e.dialogForm,"mobile",t)},expression:"dialogForm.mobile"}})],1),a("el-form-item",{attrs:{label:"邀请码",prop:"invitationCode"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",disabled:""},model:{value:e.dialogForm.invitationCode,callback:function(t){e.$set(e.dialogForm,"invitationCode",t)},expression:"dialogForm.invitationCode"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)],1)},o=[],l=a("1da1"),s=a("5530"),c=(a("96cf"),a("d81d"),a("b0c0"),a("fb6a"),a("99af"),a("ac1f"),a("1276"),a("00b4"),a("a9e3"),a("d3b7"),a("0fea")),u=a("0191"),d=(a("18d2"),a("e60d")),m={components:{uploadSingle:d["a"]},data:function(){return{productLists:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},queryParams:{sourceId:"",page:1,limit:10,nickName:"",mobile:"",textareaValue:"",invitationCode:"",beginTime:"",endTime:"",registerTime:""},total:0,loading:!1,tableData:[],dialog:{title:"编辑用户",show:!1},dialogForm:{id:"",avatar:"",nickName:"",mobile:"",invitationCode:""},dialogRules:{nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}]}}},methods:{getProductList:function(){var e=this;return Object(c["jc"])({}).then((function(t){var a,i=t.data||[];e.productLists=i.map((function(e){return{label:e.name,value:e.source_id}})),e.queryParams.sourceId=null===i||void 0===i||null===(a=i[0])||void 0===a?void 0:a.source_id}))},handleReset:function(){this.queryParams.textareaValue="",Object.assign(this.queryParams,{beginTime:"",endTime:"",registerTime:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1;var e=this.queryParams.textareaValue;e?this.getList():this.$message("请搜索你所需要导出的数据")},getStr:function(e){var t="";return e.length>0&&e.map((function(e){t+=e.mobile+","})),t.slice(0,-1)},handleImport:function(){var e=this.queryParams,t=e.textareaValue,a=e.sourceId,i=this.getStr(this.tableData);if(t&&i){var n=this.VUE_APP_REQUEST2_API+"/internal/uc/excelUserData?sourceId=".concat(a,"&mobile=").concat(i);console.log("str",n),this.download(n,"")}else this.$message("请搜索你所需要导出的数据")},getPhone:function(){var e=this.queryParams.textareaValue,t=[],a=/^\d+$/,i="",n="";t=e.split(/,|，|\s+/),t.map((function(e){a.test(Number(e))?i+=e+",":n+=e+","})),this.queryParams.mobile=i.slice(0,-1)||"",this.queryParams.invitationCode=n.slice(0,-1)||""},download:function(e,t){t||(t=e.slice(e.lastIndexOf("/")+1));var a=document.createElement("a");a.download=t,a.style.display="none",a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)},handleDateChange:function(e){var t=e||["",""];this.queryParams.beginTime=t[0],this.queryParams.endTime=t[1]},invitedRecord:function(e){var t=e.id,a=this.queryParams,i=a.beginTime,n=a.endTime;this.$emit("invitedRecord",t,i,n)},integralValue:function(e){var t=e.id;this.$emit("integralValue",t)},loginRecord:function(e){var t=e.id;this.$emit("loginRecord",t)},handleEdit:function(e){var t=this,a=e.id;Object(c["ac"])({id:a}).then((function(e){if(200==e.code){var i=e.data;Object.assign(t.dialogForm,{id:a,nickName:i.nickName,mobile:i.mobile,invitationCode:i.invitationCode,avatar:i.avatar}),t.dialog.show=!0,t.$nextTick((function(){var e;null===(e=t.$refs.dialogForm)||void 0===e||e.clearValidate()}))}}))},enterDialog:function(){var e,t=this;null===(e=this.$refs.dialogForm)||void 0===e||e.validate((function(e){e&&Object(c["jb"])(t.dialogForm).then((function(e){200==e.code&&(t.$message.success(e.msg),t.dialog.show=!1)}))}))},handleDelete:function(e){var t=this,a=e.userId,i=e.sourceId;Object(u["h"])({sourceId:i,userId:a,expiresIn:604800}).then((function(e){var a=e.code,i=e.msg;t.$message.success(200==a?"禁言成功":i),200==a&&t.getList()}))},getList:function(){var e=this;this.loading=!0,this.getPhone();var t=Object(s["a"])({},this.queryParams);delete t.registerTime,delete t.textareaValue,delete t.beginTime,delete t.endTime,Object(c["bc"])(this.removePropertyOfNullFor0(t)).then((function(t){if(200==t.code){var a=t.data;if(e.total=a.totalCount,e.tableData=a.list||[],e.queryParams.beginTime&&e.queryParams.endTime){var i=Object(s["a"])({},e.queryParams);i.sourceId=String(i.sourceId),i.limit=String(i.limit),i.page=String(i.page),Object(c["Kb"])(e.removePropertyOfNullFor0(i)).then((function(t){if(200==t.code){var a=t.data||[],i=Object.assign([],e.tableData);e.tableData=i.map((function(e){return a.map((function(t){t.invitationCode===e.invitationCode&&(e.invitationCount=t.countNum)})),Object(s["a"])({},e)}))}}))}}})).finally((function(){e.loading=!1}))}},created:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:case"end":return t.stop()}}),t)})))()}},p=m,g=a("2877"),v=Object(g["a"])(p,r,o,!1,null,"88c8cb9c",null),f=v.exports,b=a("d0ca"),h=a("bf5c"),y=a("725e"),k={name:"User-list",components:{lists:f,invitedRecord:b["a"],integralValue:h["a"],loginRecord:y["a"]},data:function(){return{id:"",beginTime:"",endTime:"",component:"lists",include:["lists"]}},methods:{handleReturn:function(){this.component="lists"},invitedRecord:function(e,t,a){this.id=e,this.beginTime=t,this.endTime=a,this.component="invitedRecord"},integralValue:function(e){this.id=e,this.component="integralValue"},loginRecord:function(e){this.id=e,this.component="loginRecord"}}},w=k,x=Object(g["a"])(w,i,n,!1,null,null,null);t["default"]=x.exports}}]);