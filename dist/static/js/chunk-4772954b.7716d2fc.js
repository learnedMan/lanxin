(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4772954b"],{"244d":function(e,t,a){"use strict";a("b31a")},"6f96":function(e,t,a){"use strict";a.r(t);var i,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-collect-lists"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"订阅号/来源:",prop:"keyword"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),a("el-form-item",{attrs:{label:"状态:",prop:"is_valid"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择状态",clearable:""},model:{value:e.queryParams.is_valid,callback:function(t){e.$set(e.queryParams,"is_valid",t)},expression:"queryParams.is_valid"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"创建时间:",prop:"createDate"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.handleDateChange},model:{value:e.queryParams.createDate,callback:function(t){e.$set(e.queryParams,"createDate",t)},expression:"queryParams.createDate"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"订阅号",align:"center",prop:"account",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"来源",align:"center",prop:"source"}}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{on:{change:function(a){return e.changeStatus(t.row)}},model:{value:t.row.is_valid,callback:function(a){e.$set(t.row,"is_valid",a)},expression:"scope.row.is_valid"}},e._l(e.statusOptions.filter((function(e){return""!==e.value})),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleDelete(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px","close-on-click-modal":!1,title:e.publishDialog.title,visible:e.publishDialog.show},on:{"update:visible":function(t){return e.$set(e.publishDialog,"show",t)}}},[a("el-form",{ref:"publishForm",attrs:{model:e.publishDialog.form,rules:e.publishDialog.rules}},[a("el-form-item",{attrs:{"label-width":"120px",label:"栏目",prop:"channel_id"}},[a("el-cascader",{staticStyle:{width:"350px"},attrs:{filterable:"",options:e.channelsList,props:e.cascaderOption,clearable:""},model:{value:e.publishDialog.form.channels,callback:function(t){e.$set(e.publishDialog.form,"channels",t)},expression:"publishDialog.form.channels"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.publishDialog.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterPublishDialog}},[e._v(" 确 定 ")])],1)],1),a("el-dialog",{attrs:{width:"800px",top:"10vh","close-on-click-modal":!1,title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialog.form,rules:e.dialog.rules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"稿件来源",prop:"extra.type"}},[a("el-radio-group",{model:{value:e.dialog.form.extra.type,callback:function(t){e.$set(e.dialog.form.extra,"type",t)},expression:"dialog.form.extra.type"}},[a("el-radio",{attrs:{label:"wechat"}},[e._v("微信")]),a("el-radio",{attrs:{label:"weibo"}},[e._v("微博")]),a("el-radio",{attrs:{label:"media"}},[e._v("客户端/网站/报纸")])],1)],1),a("el-form-item",{attrs:{label:"采集名称:",prop:"name"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入采集名称",clearable:"",size:"small"},model:{value:e.dialog.form.name,callback:function(t){e.$set(e.dialog.form,"name",t)},expression:"dialog.form.name"}})],1),a("el-form-item",{attrs:{label:"来源名称:",prop:"source"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入来源名称",clearable:"",size:"small"},model:{value:e.dialog.form.source,callback:function(t){e.$set(e.dialog.form,"source",t)},expression:"dialog.form.source"}})],1),a("el-form-item",{attrs:{label:"来源logo:",prop:"extra.logo"}},[a("upload-single",{model:{value:e.dialog.form.extra.logo,callback:function(t){e.$set(e.dialog.form.extra,"logo",t)},expression:"dialog.form.extra.logo"}})],1),a("el-form-item",{attrs:{label:"来源账号:",prop:"account"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入来源名称",clearable:"",size:"small"},model:{value:e.dialog.form.account,callback:function(t){e.$set(e.dialog.form,"account",t)},expression:"dialog.form.account"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"分发栏目",prop:"channel_id"}},[a("el-cascader",{staticStyle:{width:"200px"},attrs:{filterable:"",options:e.channelsList,props:e.cascaderOption,clearable:""},model:{value:e.dialog.form.channel_id,callback:function(t){e.$set(e.dialog.form,"channel_id",t)},expression:"dialog.form.channel_id"}})],1),a("el-form-item",{attrs:{label:"简介:",prop:"extra.introduction"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{rows:6,type:"textarea",placeholder:"请输入简介",clearable:"",size:"small"},model:{value:e.dialog.form.extra.introduction,callback:function(t){e.$set(e.dialog.form.extra,"introduction",t)},expression:"dialog.form.extra.introduction"}})],1),a("el-form-item",{attrs:{label:"默认发布",prop:"extra.auto_publish"}},[a("el-radio-group",{model:{value:e.dialog.form.extra.auto_publish,callback:function(t){e.$set(e.dialog.form.extra,"auto_publish",t)},expression:"dialog.form.extra.auto_publish"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"是否启用",prop:"extra.is_valid"}},[a("el-radio-group",{model:{value:e.dialog.form.extra.is_valid,callback:function(t){e.$set(e.dialog.form.extra,"is_valid",t)},expression:"dialog.form.extra.is_valid"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterChangeDialog}},[e._v("确 定")])],1)],1)],1)},o=[],r=a("8955"),n=a("e9ff"),s=a("06c4"),c=(a("e186"),a("77ad"),a("053b"),a("4194"),a("2eeb"),a("9302"),a("e18c"),a("0fea")),u=a("b49d"),d=a("e60d"),p=a("cc48"),m=a("52c1"),g=(i={name:"collectList",components:{Cropper:u["a"],uploadSingle:d["a"]},computed:{visitedViews:function(){return this.$store.state.tagsView.visitedViews}},data:function(){return{queryParams:{is_valid:"",site_id:"",keyword:"",createDate:"",start_date:"",endd_ate:"",page:1,pageSize:10},productLists:[],statusOptions:[{label:"全部",value:""},{label:"启用",value:1},{label:"禁用",value:0}],loading:!1,total:0,tableData:[],cascaderOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!1},channelsList:[],publishDialog:{show:!1,title:"发布栏目",form:{channels:"",special_channel_ids:""},rules:{channels:[{required:!0,message:"请选择栏目",trigger:"change"}]}},imgCount:1,catalogOptions:[],styleOptions:[],dialog:{show:!1,title:"新增采集",form:{name:"",source:"",account:"",channel_id:"",extra:{type:"",auto_publish:"",is_valid:"",introduction:"",logo:""}},rules:{name:[{required:!0,message:"请输入采集名称",trigger:"blur"}],source:[{required:!0,message:"请输入来源名称",trigger:"blur"}],account:[{required:!0,message:"请输入来源账号",trigger:"blur"}],"extra.is_valid":[{required:!0,message:"请选择是否启用",trigger:"change"}],"extra.auto_publish":[{required:!0,message:"请选择是否默认发布",trigger:"blur"}],"extra.logo":[{required:!0,message:"请选择来源logo",trigger:"change"}]}}}}},Object(r["a"])(i,"computed",Object(s["a"])({site_id:function(){return this.$store.state.user.u_info.site_id}},Object(m["b"])(["u_info"]))),Object(r["a"])(i,"methods",{handleDateChange:function(e){var t=e||["",""];this.queryParams.start_date=t[0],this.queryParams.endd_ate=t[1]},handleReset:function(){Object.assign(this.queryParams,{page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){this.resetForm("dialogForm"),Object.assign(this.dialog,{title:"新增采集",show:!0,id:"",form:{name:"",source:"",account:"",channel_id:"",extra:{type:"wechat",auto_publish:"1",is_valid:"1",introduction:"",logo:""}}})},changeStatus:function(e){var t=this,a=e.is_valid,i=e.id;Object(p["j"])({status:a,ids:"".concat(i)}).then((function(){t.$message.success("修改状态成功"),t.getList()}))},handleEdit:function(e){this.resetForm("dialogForm"),console.log("row",e),Object.assign(this.dialog,{title:"编辑采集",show:!0,id:e.id,form:{name:e.name,source:e.source,account:e.account,channel_id:e.channel_id,extra:{type:e.type,auto_publish:String(e.auto_publish),is_valid:String(e.is_valid),introduction:e.introduction,logo:e.logo}}})},handleCoverChange:function(e){var t;this.imgCount=(null===(t=this.template_styleLists.find((function(t){return t.value===e})))||void 0===t?void 0:t.count)||1},enterChangeDialog:function(){var e,t=this;null===(e=this.$refs.dialogForm)||void 0===e||e.validate((function(e){if(e){var a=t.dialog.id,i=Object(s["a"])(Object(s["a"])({},t.dialog.form),t.dialog.form.extra);i.zone_id=t.u_info.zone_id,i.site_id=t.u_info.site_id,delete i.extra,console.log("this.dialog",t.dialog.form),console.log("params",i);var l=a?Object(p["i"])(a,i):Object(p["d"])(i);l.then((function(){t.$message.success("".concat(t.dialog.title,"成功!")),t.dialog.show=!1,t.getList()}))}}))},handleDelete:function(e){var t=this,a=e.id;this.$confirm("此操作将永久删除这条ID为".concat(a,"的订阅号, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["t"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},watchList:function(e){var t=e.id;this.$emit("watch-detail",t)},handlePublish:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var i,l,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.resetForm("publishForm"),i=e.id,l=e.extra.special_channel_script_id,o=[],!l){a.next=6;break}return a.next=6,Object(p["J"])(l).then((function(e){o=(e.channel||[]).map((function(e){return e.id}))}));case 6:Object.assign(t.publishDialog,{show:!0,form:{channels:o,special_channel_ids:i}});case 7:case"end":return a.stop()}}),a)})))()},enterPublishDialog:function(){var e,t=this;null===(e=this.$refs.publishForm)||void 0===e||e.validate((function(e){if(e){var a=t.publishDialog.form;Object(p["Q"])({channels:a.channels.join(),special_channel_ids:a.special_channel_ids,type:"topic"}).then((function(){t.$message.success("发布成功"),t.publishDialog.show=!1,t.getList()}))}}))},getList:function(){var e=this;this.queryParams.site_id=this.u_info.site_id;var t=Object(s["a"])({},this.queryParams);delete t.createDate,this.loading=!0,console.log("params",t),Object(p["C"])(this.removePropertyOfNullFor0(t)).then((function(t){console.log("res",t.data),e.tableData=(t.data||[]).map((function(e){return Object(s["a"])({},e)})),e.total=t.total||0})).finally((function(){e.loading=!1}))},getChannels:function(){var e=this;Object(c["vb"])({with_special_channels:"topic"}).then((function(t){e.channelsList=t.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{disabled:!0})})),e.changeChannelName(e.channelsList)}))},getCatelog:function(){var e=this;Object(c["A"])().then((function(t){e.catalogOptions=t.data.list}))},yulanfn:function(){window.open(this.viewurl+this.dialog.form.extra.template_json_id)}}),Object(r["a"])(i,"created",(function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getList(),e.getChannels(),e.getCatelog(),console.log("u_info",e.u_info);case 4:case"end":return t.stop()}}),t)})))()})),i),h=g,f=(a("244d"),a("cba8")),b=Object(f["a"])(h,l,o,!1,null,"9f12d0ee",null);t["default"]=b.exports},b31a:function(e,t,a){}}]);