(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9f12a04"],{"0a03":function(e,t,a){},"7bba":function(e,t,a){},"87a1":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-media-all"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"媒资名称:",prop:"keyword"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),a("el-form-item",{attrs:{label:"所属订阅号:",prop:"source"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入所属订阅号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.source,callback:function(t){e.$set(e.queryParams,"source",t)},expression:"queryParams.source"}})],1),a("el-form-item",{attrs:{label:"创建日期:"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"success",size:"mini",disabled:0===e.selection.length},on:{click:e.handlePublish}},[e._v(" 批量发布 ")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%",overflow:"auto"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e.isMobile?e._e():a("el-table-column",{attrs:{label:"稿件ID",align:"center",width:"80",prop:"id"}}),e.isMobile?e._e():a("el-table-column",{attrs:{label:"稿件封面",align:"center",prop:"id",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"80px",height:"45px"},attrs:{lazy:"",src:t.row.cover||e.useravatar,"preview-src-list":[t.row.cover||e.useravatar],fit:"contain"}},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"error",src:e.useravatar,alt:""},slot:"error"})])]}}],null,!1,4093483307)}),a("el-table-column",{attrs:{label:"稿件标题",align:"center",prop:"title","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"watch-detail-btn",attrs:{type:"text"},on:{click:function(a){return e.handleWatch(t.row)}}},[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{label:"所属订阅号",align:"center",prop:"source"}}),e.isMobile?e._e():a("el-table-column",{attrs:{label:"发布栏目",align:"center",width:"100",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleListWatch(t.row)}}},[e._v(" 查看 ")])]}}],null,!1,3285639366)}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"verify-table-action"},[a("Iconbutton",{attrs:{icontype:"ckxq",label:"查看详情"},on:{fatherMethod:function(a){return e.handleWatch(t.row)}}}),a("Iconbutton",{attrs:{icontype:"fz",label:"复制"},on:{fatherMethod:function(a){return e.handleListCopy(t.row)}}})],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e.dialog.show?a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialog.form,rules:e.dialogRules}},[a("el-form-item",{attrs:{"label-width":"120px",label:"栏目",prop:"channel_id"}},[a("el-cascader",{staticStyle:{width:"350px"},attrs:{filterable:"",options:e.channelsList,props:e.cascaderOption,clearable:""},model:{value:e.dialog.form.channel_id,callback:function(t){e.$set(e.dialog.form,"channel_id",t)},expression:"dialog.form.channel_id"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:e.closeDialog}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1):e._e(),e.history.show?a("el-dialog",{attrs:{width:"700px",title:"操作记录",visible:e.history.show},on:{"update:visible":function(t){return e.$set(e.history,"show",t)}}},[a("version-history",{attrs:{id:e.history.id,type:"script"}})],1):e._e()],1)},n=[],s=a("06c4"),l=(a("e18c"),a("2eeb"),a("08d5"),a("9302"),a("cc48")),o=a("0fea"),r=a("9d3e"),c={name:"All-media",components:{VersionHistory:r["a"]},data:function(){return{queryParams:{keyword:"",source:"",startdate:"",enddate:"",pageSize:10,page:1},loading:!1,total:0,dateValue:"",typeOptions:[{label:"全部",value:""},{label:"微信",value:"wechat"},{label:"微博",value:"weibo"},{label:"媒体",value:"media"}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},tableData:[],useravatar:a("3f1e"),dialog:{show:!1,multiple:!1,title:"发布栏目",form:{channel_id:"",ids:""}},dialogRules:{channel_id:{required:!0,message:"请选择栏目",trigger:"change"}},cascaderOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!0},channelsList:[],selection:[],history:{show:!1,id:""}}},created:function(){this.getList(),this.getChannels()},methods:{handleDateChange:function(e){var t=e||["",""];this.queryParams.startdate=t[0],this.queryParams.enddate=t[1]},handleReset:function(){this.dateValue="",Object.assign(this.queryParams,{startdate:"",enddate:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){this.$router.push({name:"Add-media",query:{redirect:"All-media"}})},handlePublish:function(){this.handleDialogShow()},getList:function(){var e=this;this.loading=!0,this.selection=[],this.tableData=[],Object(l["J"])(this.removePropertyOfNull(this.queryParams)).then((function(t){e.tableData=(t.data||[]).map((function(e){return Object(s["a"])({},e)})),e.total=t.total})).finally((function(){e.loading=!1}))},handleSelectionChange:function(e){this.selection=e.map((function(e){return e.id}))},handleListWatch:function(e){this.$router.push("/content/publicSentiment/watch-column?id=".concat(e.id,"&redirect=collect-article"))},handleListCopy:function(e){var t=this,a=e.id,i=e.title;Object(l["r"])(a,{title:"[副本]".concat(i)}).then((function(e){var a=e.id,i=e.message;a?(t.getList(),t.$router.push({name:"Add-media",query:{id:a,redirect:"All-media"}}),t.$message.success("复制成功")):t.$message.warning(i)}))},handleEdit:function(e){var t=e.id,a=e.news;if(a.some((function(e){return 1===e.status})))return this.$message.warning("该文稿下存在已发布的新闻，请点击“一键下线”按钮下线所有新闻后再进行编辑");this.$router.push({name:"Add-media",query:{id:t,redirect:"All-media"}})},handlePreview:function(e){var t=e.id;this.$router.push({name:"Preview",query:{id:t,type:"scripts"}})},handleHistory:function(e){var t=e.id;this.history={show:!0,id:t}},handleOffline:function(e){var t=this,a=e.id;this.$confirm("此操作将下线该文稿下所有新闻, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["q"])(a).then((function(e){var a=e.message,i=e.status_code;t.$message({message:a,type:200===i?"success":"warning"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleWatch:function(e){var t=e.id;this.$router.push({name:"Add-media",query:{id:t,disabled:"1",media:"1"}})},handleListDelete:function(e){var t=this,a=e.id;this.$confirm("此操作将永久删除这条稿件id为".concat(a,"的明细, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["x"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleDialogShow:function(e,t){var a;console.log("row",t);var i=[],n="publish"===e;n?(i=t.channel.map((function(e){return e.id})).sort((function(e,t){return t-e})),a=t.id):a=this.selection,this.cascaderOption={checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:n},Object.assign(this.dialog,{show:!0,title:n?"发布栏目":"批量发布栏目",form:{channel_id:i,ids:a}})},closeDialog:function(){this.dialog.show=!1},enterDialog:function(){var e=this,t=this.dialog.form.ids,a=Array.isArray(t),i=this.dialog.form.channel_id;this.$refs.dialogForm.validate((function(n){n&&(a?Object(l["h"])({ids:t.join(),channel_id:i}).then((function(){e.$message.success("批量发布成功"),e.dialog.show=!1,e.getList()})):Object(l["b"])(t,{channels:i.join()}).then((function(){e.$message({message:"发布成功",type:"success"}),e.dialog.show=!1,e.getList()})))}))},getChannels:function(){var e=this;Object(o["Ab"])({with_special_channels:"topic"}).then((function(t){e.channelsList=t.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{disabled:!0})})),e.changeChannelName(e.channelsList)}))}}},u=c,d=(a("d41c"),a("cba8")),h=Object(d["a"])(u,i,n,!1,null,"0008efa8",null);t["default"]=h.exports},"9d3e":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-version-history"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"created_at",label:"日期",align:"center"}}),a("el-table-column",{attrs:{prop:"user.name",label:"姓名","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"operation",label:"操作记录","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleWatch(t.row)}}},[e._v(" 查看详情 ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getHistory}}),e.dialog.show?a("el-dialog",{attrs:{width:"1200px",top:"20px",title:e.dialog.title,visible:e.dialog.show,"append-to-body":""},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("scripts-details",{staticStyle:{padding:"10px",margin:"0"},attrs:{id:e.id,visible:e.dialog.show,typeDetails:e.type,"fetch-suggestions":e.fetchSuggestions,disabled:!0,disabledNews:!0},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}})],1):e._e()],1)},n=[],s=a("06c4"),l=(a("513c"),a("e18c"),a("cc48")),o=a("1d6e"),r=a("5fe8"),c={name:"versionHistory",components:{NewDetail:o["a"],scriptsDetails:r["default"]},props:{type:{type:String,default:"script"},id:{type:Number,required:!0}},data:function(){return{tableData:[],total:0,loading:!1,queryParams:{page:1,pageSize:10},dialog:{title:"查看详情",show:!1,id:""},fetchSuggestions:function(){return new Promise((function(e){return e()}))}}},methods:{getHistory:function(){var e=this,t=this.id,a=this.type;this.loading=!0,Object(l["G"])(Object(s["a"])({item_type:a,item_id:t},this.queryParams)).then((function(t){var a=t.data,i=t.total;e.tableData=a,e.total=i})).finally((function(){e.loading=!1}))},handleWatch:function(e){var t=e.extra;this.fetchSuggestions=function(){return new Promise((function(e){e(t.item)}))},this.dialog={title:"查看详情",show:!0}}},created:function(){this.getHistory()}},u=c,d=(a("9e1d"),a("cba8")),h=Object(d["a"])(u,i,n,!1,null,"c9ac419c",null);t["a"]=h.exports},"9e1d":function(e,t,a){"use strict";a("0a03")},d41c:function(e,t,a){"use strict";a("7bba")}}]);