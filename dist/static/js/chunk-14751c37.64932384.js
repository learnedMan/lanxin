(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14751c37"],{"0cea":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-push"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"所属产品:"}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},on:{change:e.handleQuery},model:{value:e.queryParams.product_id,callback:function(t){e.$set(e.queryParams,"product_id",t)},expression:"queryParams.product_id"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"推送标题:",prop:"title"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),a("el-form-item",{attrs:{label:"媒资标题:",prop:"article_title"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.article_title,callback:function(t){e.$set(e.queryParams,"article_title",t)},expression:"queryParams.article_title"}})],1),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择类型",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"消息内容",align:"center",prop:"extra.title",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"媒资标题",align:"center",prop:"extra.linked_to.title",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"推送状态",align:"center",prop:"statusLabel"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.watchDetail(t.row)}}},[e._v(" "+e._s(t.row.statusLabel)+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at"}}),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"push_time"}}),a("el-table-column",{attrs:{label:"推送个人",align:"center",prop:"isSingle"}}),a("el-table-column",{attrs:{label:"启用状态",align:"center",prop:"openStatus"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{on:{change:function(a){return e.openStatusChange(t.row)}},model:{value:t.row.openStatus,callback:function(a){e.$set(t.row,"openStatus",a)},expression:"scope.row.openStatus"}},[a("el-option",{attrs:{label:"禁用",value:0}}),a("el-option",{attrs:{label:"启用",value:1}})],1)]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleListDelete(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"推送终端:",prop:"push_to.terminal"}},[a("el-select",{attrs:{placeholder:"请选择终端",clearable:""},model:{value:e.dialogForm.push_to.terminal,callback:function(t){e.$set(e.dialogForm.push_to,"terminal",t)},expression:"dialogForm.push_to.terminal"}},e._l(e.terminal,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"消息内容:",prop:"title"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入消息内容",clearable:""},model:{value:e.dialogForm.title,callback:function(t){e.$set(e.dialogForm,"title",t)},expression:"dialogForm.title"}})],1),a("el-form-item",{attrs:{label:"消息详情:",prop:"content"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入消息详情",clearable:"",type:"textarea",row:4,maxlength:"50","show-word-limit":""},model:{value:e.dialogForm.content,callback:function(t){e.$set(e.dialogForm,"content",t)},expression:"dialogForm.content"}})],1),a("el-form-item",{attrs:{label:"推送类型:",prop:"linked_to.route_type"}},[a("el-radio-group",{model:{value:e.dialogForm.linked_to.route_type,callback:function(t){e.$set(e.dialogForm.linked_to,"route_type",t)},expression:"dialogForm.linked_to.route_type"}},e._l(e.typeOption,(function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),a("el-form-item",{attrs:{label:"链接到:",prop:"linked_to.id"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{disabled:""},model:{value:e.dialogForm.linked_to.title,callback:function(t){e.$set(e.dialogForm.linked_to,"title",t)},expression:"dialogForm.linked_to.title"}}),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.handleChoose}},[e._v("选择")])],1),a("el-form-item",{attrs:{label:"推送图片:",prop:"cover"}},[a("upload-single",{model:{value:e.dialogForm.cover,callback:function(t){e.$set(e.dialogForm,"cover",t)},expression:"dialogForm.cover"}})],1),a("el-form-item",{attrs:{label:"推送时间:",prop:"push_time"}},[a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:e.switchVal,expression:"switchVal"}],staticStyle:{width:"194px","margin-right":"10px"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间","picker-options":e.pickerOptions},on:{focus:e.pickerFocus},model:{value:e.dialogForm.push_time,callback:function(t){e.$set(e.dialogForm,"push_time",t)},expression:"dialogForm.push_time"}}),a("el-radio",{attrs:{label:!0},model:{value:e.switchVal,callback:function(t){e.switchVal=t},expression:"switchVal"}},[e._v("自定义时间")]),a("el-radio",{attrs:{label:!1},model:{value:e.switchVal,callback:function(t){e.switchVal=t},expression:"switchVal"}},[e._v("立即推送")])],1),a("el-form-item",{attrs:{label:"是否推送给个人:",prop:"push_to.type"}},[a("el-radio-group",{model:{value:e.dialogForm.push_to.type,callback:function(t){e.$set(e.dialogForm.push_to,"type",t)},expression:"dialogForm.push_to.type"}},[a("el-radio",{attrs:{label:"all"}},[e._v("否")]),a("el-radio",{attrs:{label:"single"}},[e._v("是")])],1)],1),"single"===e.dialogForm.push_to.type?a("el-form-item",{attrs:{label:"客户端ID:",prop:"push_to.cid"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入客户端ID",clearable:""},model:{value:e.dialogForm.push_to.cid,callback:function(t){e.$set(e.dialogForm.push_to,"cid",t)},expression:"dialogForm.push_to.cid"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1),e.innerDialog.show?a("el-dialog",{attrs:{top:"20px",width:e.innerDialog.width,title:e.innerDialog.title,visible:e.innerDialog.show,"append-to-body":""},on:{"update:visible":function(t){return e.$set(e.innerDialog,"show",t)}}},["news"===e.dialogForm.linked_to.route_type?a("new-list",{on:{confirm:e.confirmChoose}}):e._e(),"channel"===e.dialogForm.linked_to.route_type?a("channel",{attrs:{id:e.dialogForm.linked_to.id},on:{confirm:e.confirmChoose}}):e._e()],1):e._e()],1)],1)},i=[],n=a("1da1"),r=a("5530"),o=(a("96cf"),a("99af"),a("d81d"),a("b0c0"),a("b64b"),a("9911"),a("a15b"),a("e9c4"),a("d3b7"),a("0fea")),s=a("13cc"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-see-section"},[a("div",{staticClass:"xl-see-section--tree"},[a("el-tree",{ref:"tree",attrs:{data:e.channelsList,"node-key":"id",props:e.props,"expand-on-click-node":!1,"default-expanded-keys":e.defaultExpandedKeys},on:{"current-change":e.treeChange}})],1),a("div",{staticClass:"xl-see-section--content"},[a("div",{staticClass:"search"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"新闻名称:",prop:"keyword"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),a("el-form-item",{attrs:{label:"新闻类型:",prop:"type"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择类型",clearable:""},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"创建日期:"}},[a("el-date-picker",{attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.handleDateChange},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%",overflow:"auto"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"选择",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.row.id},on:{change:function(a){return e.handleChange(t.row)}},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}})]}}])}),a("el-table-column",{attrs:{label:"新闻ID",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"新闻封面",align:"center",prop:"id",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{lazy:"",src:t.row.cover||e.useravatar,fit:"cover"}},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"error",src:e.useravatar,alt:""},slot:"error"})])]}}])}),a("el-table-column",{attrs:{label:"新闻标题",align:"center",prop:"title","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"新闻类型",align:"center",prop:"typeLabel"}}),a("el-table-column",{attrs:{label:"作者",align:"center",prop:"author_name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")])],1)],1)])},u=[],d=(a("dca8"),a("7db0"),a("cc48")),p={data:function(){return{channelsList:[],typeOptions:[{label:"全部",value:""},{label:"新闻",value:"news"},{label:"图集",value:"album"},{label:"视频",value:"video"},{label:"外链",value:"outer_link"}],statusOptions:[{label:"已审核",value:1},{label:"待审核",value:0},{label:"已拒绝",value:2}],props:Object.freeze({label:"name"}),queryParams:{keyword:"",type:"",startdate:"",enddate:"",status:1,pageSize:10,page:1},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},useravatar:a("3f1e"),dateValue:"",tableData:[],currentKey:"",defaultExpandedKeys:[],total:0,radio:"",loading:!1,params:{}}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getChannels();case 2:e.$nextTick((function(){var t,a=e.$route.query.id||(null===(t=e.channelsList[0])||void 0===t?void 0:t.id);e.defaultExpandedKeys=[a],e.$refs.tree.setCurrentKey(a),e.getList()}));case 3:case"end":return t.stop()}}),t)})))()},methods:{getChannels:function(){var e=this;return Object(o["Ib"])({status:1}).then((function(t){e.channelsList=t}))},handleDateChange:function(e){var t=e||["",""];this.queryParams.startdate=t[0],this.queryParams.enddate=t[1]},handleReset:function(){this.dateValue="",Object.assign(this.queryParams,{startdate:"",enddate:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.getList()},treeChange:function(){this.handleReset(),this.getList()},getList:function(){var e=this,t=this.$refs.tree.getCurrentNode();this.$router.push({path:this.$route.path,query:{id:t.id}}),this.loading=!0;var a=Object(r["a"])(Object(r["a"])({},this.queryParams),{},{channel_id:t.id});Object(d["N"])(this.removePropertyOfNull(a)).then((function(t){e.total=t.total,e.tableData=(t.data||[]).map((function(t){var a=e.typeOptions.find((function(e){return t.type===e.value})),l=t.cover[0];return Object(r["a"])(Object(r["a"])({},t),{},{typeLabel:a&&a.label||"",cover:l&&l.path||""})}))})).finally((function(){e.loading=!1}))},handleChange:function(e){this.params={id:e.id,type:e.type,title:e.title,cover:e.cover},e.link&&(this.params.link=Object(r["a"])({},e.link))},confirm:function(){this.$emit("confirm",Object(r["a"])({},this.params))}}},m=p,h=(a("60aa"),a("2877")),g=Object(h["a"])(m,c,u,!1,null,null,null),f=g.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-push-channel"},[a("el-tree",{ref:"channel",attrs:{data:e.channelsList,"show-checkbox":"","check-strictly":"","node-key":"id","default-checked-keys":e.defaultKeys,props:e.props},on:{check:e.handleChecked}}),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")])],1)],1)},y=[],b={props:["id"],data:function(){return{channelsList:[],props:Object.freeze({label:"name"}),params:{}}},computed:{defaultKeys:function(e){var t=e.id;return t?[t]:[]}},methods:{getChannels:function(){var e=this;return Object(o["Ib"])({status:1}).then((function(t){e.channelsList=t}))},handleChecked:function(e){var t,a=e.id;this.$refs.channel.setCheckedKeys([]),this.$refs.channel.setCheckedKeys([a]);try{var l,i;t=(null===(l=JSON.parse(e.cover))||void 0===l||null===(i=l[0])||void 0===i?void 0:i.path)||""}catch(n){t=""}this.params={id:e.id,type:e.type,title:e.name,cover:t}},confirm:function(){this.$emit("confirm",Object(r["a"])({},this.params))}},created:function(){this.getChannels()}},_=b,k=Object(h["a"])(_,v,y,!1,null,"0aec7fd1",null),w=k.exports,x=a("469d"),O=a("e60d"),F={components:{newList:f,channel:w,uploadSingle:O["a"]},data:function(){var e=function(){var e=new Date((new Date).getTime()+1e3),t=e.getHours(),a=e.getMinutes(),l=e.getSeconds();return"".concat(t,":").concat(a,":").concat(l," - 23:59:59")};return{pickerOptions:{selectableRange:e(),disabledDate:function(e){return e.getTime()<(new Date).getTime()-864e5}},updateSelectableRange:e,productLists:[],statusOptions:[{label:"全部",value:""},{label:"禁用",value:0},{label:"启用",value:1}],terminal:[{label:"全部",value:3},{label:"ios",value:2},{label:"安卓",value:1}],queryParams:{status:"",article_title:"",title:"",product_id:"",page:1,pageSize:10},total:0,loading:!1,tableData:[],typeOption:[{label:"新闻",value:"news"}],dialogForm:{title:"",content:"",cover:"",linked_to:{route_type:"news",type:"",id:"",title:""},push_to:{type:"all",terminal:"",cid:""},push_time:""},dialogRules:{title:[{required:!0,message:"请输入消息内容",trigger:"blur"}],content:[{required:!0,message:"请输入消息详情",trigger:"blur"}],push_time:[{required:!0,message:"请选择推送时间",trigger:"change"}],"push_to.cid":[{required:!0,message:"请输入客户端ID",trigger:"blur"}],"linked_to.id":[{required:!0,message:"请选择链接到的内容",trigger:"change"}],"push_to.terminal":[{required:!0,message:"请选择推送终端",trigger:"change"}]},dialog:{title:"",show:!1},innerDialog:{title:"链接到",width:"1000px",show:!1},switchVal:!1}},watch:{"innerDialog.show":function(){this.$router.push({query:{}})}},methods:{switchChange:function(){var e=this;this.$nextTick((function(){var t;null===(t=e.$refs.dialogForm)||void 0===t||t.clearValidate("push_time")}))},pickerFocus:function(){this.pickerOptions.selectableRange=this.updateSelectableRange()},getProductList:function(){var e=this;return Object(o["mc"])({}).then((function(t){var a,l=t.data||[];e.productLists=l.map((function(e){return{label:e.name,value:e.id}})),e.queryParams.product_id=null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.id}))},handleReset:function(){this.resetForm("queryForm"),Object.assign(this.queryParams,{page:1})},handleQuery:function(){this.queryParams.page=1,this.getList()},handleChoose:function(){var e=this.dialogForm.linked_to.route_type;"news"===e?this.innerDialog={title:"链接到新闻",width:"1000px",show:!0}:"channel"===e&&(this.innerDialog={title:"链接到早播报",width:"600px",show:!0})},confirmChoose:function(e){if(console.log(e),0!==Object.keys(e).length){var t={route_type:this.dialogForm.linked_to.route_type,type:e.type,id:e.id,title:e.title};e.link&&(t.link=e.link),Object.assign(this.dialogForm,{linked_to:t,cover:e.cover})}this.innerDialog.show=!1},handleAdd:function(){var e=this;this.switchVal=!1,this.dialogForm={title:"",content:"",cover:"",linked_to:{route_type:"news",type:"",id:"",title:""},push_to:{type:"all",terminal:"",cid:""},push_time:""},this.dialog={title:"新增推送",show:!0},this.$nextTick((function(){e.$refs.dialogForm.clearValidate()}))},handleEdit:function(e){var t,a=e.id,l=e.extra;this.switchVal=!0,this.resetForm("dialogForm"),this.dialogForm={title:l.title,content:l.content,cover:l.cover,linked_to:Object(r["a"])({route_type:l.linked_to.route_type,type:l.linked_to.type,id:l.linked_to.id,title:l.linked_to.title},l.linked_to.link?{link:l.linked_to.link}:{}),push_to:{type:l.push_to.type,terminal:l.push_to.terminal,cid:(null===(t=l.push_to.cid)||void 0===t?void 0:t.join())||""},push_time:l.push_time},this.dialog={title:"编辑推送",show:!0,id:a}},enterDialog:function(){var e,t=this;this.switchVal||(this.dialogForm.push_time=Object(x["a"])(new Date,"yyyy-MM-dd hh:mm:ss")),null===(e=this.$refs.dialogForm)||void 0===e||e.validate((function(e){if(e){var a,l=t.dialog.id,i=t.dialogForm.push_to.cid,n={product_id:t.queryParams.product_id,extra:Object(r["a"])(Object(r["a"])({},t.dialogForm),{},{push_to:Object(r["a"])(Object(r["a"])({},t.dialogForm.push_to),{},{cid:i?[i]:[]})})};a=l?Object(s["j"])(l,n):Object(s["d"])(n),a.then((function(){t.$message.success(l?"修改成功":"新增成功"),t.dialog.show=!1,t.getList()}))}}))},handleListDelete:function(e){var t=this,a=e.id,l=e.title;this.$confirm("此操作将永久删除这条消息内容为".concat(l,"的推送信息, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["p"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},openStatusChange:function(e){var t,a=this,l=e.id,i=e.extra,n=e.openStatus,o={product_id:this.queryParams.product_id,status:n,extra:{title:i.title,content:i.content,cover:i.cover,linked_to:Object(r["a"])({route_type:i.linked_to.route_type,type:i.linked_to.type,id:i.linked_to.id,title:i.linked_to.title},i.linked_to.link?{link:i.linked_to.link}:{}),push_to:{type:i.push_to.type,terminal:i.push_to.terminal,cid:null===(t=i.push_to.cid)||void 0===t?void 0:t.join()},push_time:i.push_time}};Object(s["j"])(l,o).then((function(){a.$message.success("修改成功"),a.getList()}))},watchDetail:function(e){this.$alert(JSON.stringify(e.extra.pushResult),"详情",{confirmButtonText:"确定"})},getList:function(){var e=this,t=Object(r["a"])({},this.queryParams);this.loading=!0,Object(s["z"])(this.removePropertyOfNullFor0(t)).then((function(t){e.tableData=(t.data||[]).map((function(e){var t;return Object(r["a"])(Object(r["a"])({},e),{},{openStatus:e.status,statusLabel:e.processed_at?null!==(t=e.extra.pushResult)&&void 0!==t&&t.pushSeq?"成功":"失败":"待执行",isSingle:"single"===e.extra.push_to.type?"是":"否"})})),e.total=t.total})).finally((function(){e.loading=!1}))}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()}},q=F,$=(a("9ad9"),Object(h["a"])(q,l,i,!1,null,"2afc342b",null));t["default"]=$.exports},2079:function(e,t,a){},"60aa":function(e,t,a){"use strict";a("2079")},"7eab":function(e,t,a){},"9ad9":function(e,t,a){"use strict";a("7eab")}}]);