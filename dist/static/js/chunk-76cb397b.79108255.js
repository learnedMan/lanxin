(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76cb397b"],{"0f0c":function(e,t,a){"use strict";a("5f99")},"1faa":function(e,t,a){},"46f0":function(e,t,a){"use strict";a("1faa")},"5f99":function(e,t,a){},"8aa8":function(e,t,a){"use strict";a("b542")},9837:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[a("keep-alive",{attrs:{exclude:e.exclude}},[a(e.component,{tag:"component",attrs:{params:e.params},on:{handleReturn:e.handleReturn,watchList:e.watchList}})],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-advert-list"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"所属产品:"}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},on:{change:e.handleQuery},model:{value:e.queryParams.product_id,callback:function(t){e.$set(e.queryParams,"product_id",t)},expression:"queryParams.product_id"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"广告位:",prop:"name"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择类型",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"广告位名称",align:"center",prop:"name",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"广告位类型",align:"center",showOverflowTooltip:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getLabel(t.row.type)))]}}])}),a("el-table-column",{attrs:{label:"广告位描述",align:"center",prop:"intro"}}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{on:{change:function(a){return e.changeStatus(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}},e._l(e.statusOptions.filter((function(e){return""!==e.value})),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"ckxq",label:"广告列表"},on:{fatherMethod:function(a){return e.watchList(t.row)}}}),a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleListDelete(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,"close-on-click-modal":!1,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"所属产品:",prop:"product_id"}},[a("el-select",{attrs:{placeholder:"请选择所属产品",clearable:""},model:{value:e.dialogForm.product_id,callback:function(t){e.$set(e.dialogForm,"product_id",t)},expression:"dialogForm.product_id"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"广告位名称:",prop:"name"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入广告位名称",clearable:""},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),a("el-form-item",{attrs:{label:"广告位类型:",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择广告位类型",clearable:""},model:{value:e.dialogForm.type,callback:function(t){e.$set(e.dialogForm,"type",t)},expression:"dialogForm.type"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"广告位描述:",prop:"intro"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入广告位描述",type:"textarea",row:6,clearable:""},model:{value:e.dialogForm.intro,callback:function(t){e.$set(e.dialogForm,"intro",t)},expression:"dialogForm.intro"}})],1),a("el-form-item",{attrs:{label:"广告位布局:"}},[a("el-form-item",{attrs:{"label-width":"100px",label:"左边距:",prop:"extra.layout.margin-left"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入左边距",clearable:""},on:{change:function(t){return e.numberChange(t,e.dialogForm.extra.layout,"margin-left")}},model:{value:e.dialogForm.extra.layout["margin-left"],callback:function(t){e.$set(e.dialogForm.extra.layout,"margin-left",e._n(t))},expression:"dialogForm.extra.layout['margin-left']"}}),e._v(" px ")],1),a("el-form-item",{attrs:{"label-width":"100px",label:"右边距:",prop:"extra.layout.margin-right"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入右边距",clearable:""},model:{value:e.dialogForm.extra.layout["margin-right"],callback:function(t){e.$set(e.dialogForm.extra.layout,"margin-right",e._n(t))},expression:"dialogForm.extra.layout['margin-right']"}}),e._v(" px ")],1),a("el-form-item",{attrs:{"label-width":"100px",label:"宽:",prop:"extra.layout.width"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入宽",clearable:""},model:{value:e.dialogForm.extra.layout.width,callback:function(t){e.$set(e.dialogForm.extra.layout,"width",e._n(t))},expression:"dialogForm.extra.layout.width"}}),e._v(" px ")],1),a("el-form-item",{attrs:{"label-width":"100px",label:"高:",prop:"extra.layout.height"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入高",clearable:""},model:{value:e.dialogForm.extra.layout.height,callback:function(t){e.$set(e.dialogForm.extra.layout,"height",e._n(t))},expression:"dialogForm.extra.layout.height"}}),e._v(" px ")],1)],1),a("el-form-item",{attrs:{label:"是否启用:",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.dialogForm.status,callback:function(t){e.$set(e.dialogForm,"status",t)},expression:"dialogForm.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)],1)},o=[],n=a("1da1"),s=a("5530"),u=(a("96cf"),a("d81d"),a("b0c0"),a("25eb"),a("a9e3"),a("9129"),a("7db0"),a("d3b7"),a("0fea")),d=a("13cc"),c={name:"list",data:function(){return{productLists:[],statusOptions:[{label:"全部",value:""},{label:"启用",value:1},{label:"禁用",value:0}],typeOptions:[{label:"APP开机广告",value:7},{label:"APP顶部广告",value:8},{label:"矩形横幅",value:1},{label:"固定位置",value:2},{label:"漂浮广告",value:3},{label:"对联广告",value:4},{label:"文字广告",value:5},{label:"广告代码",value:6}],queryParams:{name:"",product_id:"",status:"",page:1,pageSize:10},total:0,loading:!1,tableData:[],dialog:{show:!1,title:"新增广告位"},dialogForm:{product_id:"",name:"",type:"",status:"",intro:"",extra:{layout:{"margin-left":"","margin-right":"",height:"",width:""}}},dialogRules:{product_id:[{required:!0,message:"请选择所属产品",trigger:"change"}],name:[{required:!0,message:"请输入广告位名称",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}]}}},methods:{getProductList:function(){var e=this;return Object(u["nc"])({}).then((function(t){var a,l=t.data||[];e.productLists=l.map((function(e){return{label:e.name,value:e.id}})),e.queryParams.product_id=null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.id}))},handleReset:function(){Object.assign(this.queryParams,{page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){this.resetForm("dialogForm"),this.dialog={title:"新增广告位",show:!0,isAdd:!0}},numberChange:function(e,t,a){e=Number.parseInt(e),t[a]=Number.isNaN(e)?"":e},changeStatus:function(e){var t,a,l,i,r=this,o={product_id:e.product_id,name:e.name,type:e.type,status:e.status,intro:e.intro,extra:{layout:{"margin-left":null!==(t=e.extra.layout["margin-left"])&&void 0!==t?t:"","margin-right":null!==(a=e.extra.layout["margin-right"])&&void 0!==a?a:"",height:null!==(l=e.extra.layout.height)&&void 0!==l?l:"",width:null!==(i=e.extra.layout.width)&&void 0!==i?i:""}}};Object(d["h"])(e.id,o).then((function(){r.$message.success("修改成功"),r.getList()}))},handleEdit:function(e){var t,a,l,i;this.resetForm("dialogForm"),this.dialog={title:"编辑广告位",show:!0,id:e.id},this.dialogForm={product_id:e.product_id,name:e.name,type:e.type,status:e.status,intro:e.intro,extra:{layout:{"margin-left":null!==(t=e.extra.layout["margin-left"])&&void 0!==t?t:"","margin-right":null!==(a=e.extra.layout["margin-right"])&&void 0!==a?a:"",height:null!==(l=e.extra.layout.height)&&void 0!==l?l:"",width:null!==(i=e.extra.layout.width)&&void 0!==i?i:""}}}},enterDialog:function(){var e,t=this;null===(e=this.$refs.dialogForm)||void 0===e||e.validate((function(e){var a,l=t.dialog,i=l.isAdd,r=l.id;e&&(a=i?Object(d["b"])(t.dialogForm):Object(d["h"])(r,t.dialogForm),a.then((function(){t.$message.success(i?"新增成功":"修改成功"),t.dialog.show=!1,t.getList()})))}))},handleListDelete:function(e){var t=this,a=e.id,l=e.name;this.$confirm("此操作将永久删除这条名称为".concat(l,"的广告位, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(d["n"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},watchList:function(e){this.$emit("watchList",{product_id:e.product_id,ad_place_id:e.id,name:e.name})},getLabel:function(e){var t,a;return null!==(t=null===(a=this.typeOptions.find((function(t){return t.value===e})))||void 0===a?void 0:a.label)&&void 0!==t?t:""},getList:function(){var e=this,t=Object(s["a"])({},this.queryParams);this.loading=!0,Object(d["x"])(this.removePropertyOfNullFor0(t)).then((function(t){e.tableData=t.data||[],e.total=t.total})).finally((function(){e.loading=!1}))}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()}},m=c,p=(a("8aa8"),a("2877")),g=Object(p["a"])(m,r,o,!1,null,"53d65cbb",null),h=g.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-children-list"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"广告标题:",prop:"keyword"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.title,callback:function(t){e.$set(e.queryParams,"title",t)},expression:"queryParams.title"}})],1),a("el-form-item",{attrs:{label:"状态:",prop:"status"}},[a("el-select",{attrs:{size:"small",placeholder:"请选择类型",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleReset}},[e._v(" 重置 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"success",size:"mini"},on:{click:e.handleReturn}},[e._v(" 返回上一级 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"广告标题",align:"center",prop:"title",showOverflowTooltip:""}}),a("el-table-column",{attrs:{label:"广告类型",align:"center",showOverflowTooltip:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getLabel(t.row.type)))]}}])}),a("el-table-column",{attrs:{label:"所属广告位",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.params.name))]}}])}),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{on:{change:function(a){return e.changeStatus(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}},e._l(e.statusOptions.filter((function(e){return""!==e.value})),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.handleEdit(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleListDelete(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e.dialog.show?a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,"close-on-click-modal":!1,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{label:"所属产品:",prop:"product_id",required:""}},[a("el-select",{attrs:{placeholder:"请选择所属产品",disabled:"",clearable:""},model:{value:e.dialogForm.product_id,callback:function(t){e.$set(e.dialogForm,"product_id",t)},expression:"dialogForm.product_id"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"广告标题:",prop:"title"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入广告标题",clearable:""},model:{value:e.dialogForm.title,callback:function(t){e.$set(e.dialogForm,"title",t)},expression:"dialogForm.title"}})],1),a("el-form-item",{attrs:{label:"广告类型:",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择广告类型",clearable:""},on:{chnage:function(t){e.dialogForm.extra.url=""}},model:{value:e.dialogForm.type,callback:function(t){e.$set(e.dialogForm,"type",t)},expression:"dialogForm.type"}},e._l(e.typeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"开始时间:",prop:"start_time"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择开始日期时间",align:"right",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptionsStart},model:{value:e.dialogForm.start_time,callback:function(t){e.$set(e.dialogForm,"start_time",t)},expression:"dialogForm.start_time"}})],1),a("el-form-item",{attrs:{label:"结束时间:",prop:"end_time"}},[a("el-date-picker",{ref:"endTime",attrs:{type:"datetime",placeholder:"选择结束日期时间",align:"right",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptionsEnd},model:{value:e.dialogForm.end_time,callback:function(t){e.$set(e.dialogForm,"end_time",t)},expression:"dialogForm.end_time"}}),a("el-checkbox",{staticStyle:{"margin-left":"10px"},on:{change:e.endAction},model:{value:e.dialogForm.unlimited,callback:function(t){e.$set(e.dialogForm,"unlimited",t)},expression:"dialogForm.unlimited"}},[e._v("不限制")])],1),a("el-form-item",{attrs:{label:"是否允许跳过:",prop:"extra.allow_skip"}},[a("el-radio-group",{model:{value:e.dialogForm.extra.allow_skip,callback:function(t){e.$set(e.dialogForm.extra,"allow_skip",t)},expression:"dialogForm.extra.allow_skip"}},[a("el-radio",{attrs:{label:"1"}},[e._v("是")]),a("el-radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),a("el-form-item",{attrs:{label:"广告时长:",prop:"extra.duration"}},[a("el-input-number",{staticStyle:{width:"194px"},attrs:{controls:!1,precision:0,placeholder:"请输入时长(单位: 秒)",clearable:""},model:{value:e.dialogForm.extra.duration,callback:function(t){e.$set(e.dialogForm.extra,"duration",t)},expression:"dialogForm.extra.duration"}})],1),a("el-form-item",{attrs:{label:"广告角标:",prop:"extra.corner_mark"}},[a("el-checkbox",{attrs:{"true-label":"1","false-label":"0"},model:{value:e.dialogForm.extra.corner_mark,callback:function(t){e.$set(e.dialogForm.extra,"corner_mark",t)},expression:"dialogForm.extra.corner_mark"}},[e._v("显示广告角标,客户端开机广告倒计时或顶部图片是否展示")])],1),a("el-form-item",{attrs:{label:"广告"+(1===e.dialogForm.type?"图片":"视频")+":",prop:"extra.url"}},[1===e.dialogForm.type?a("upload-single",{model:{value:e.dialogForm.extra.url,callback:function(t){e.$set(e.dialogForm.extra,"url",t)},expression:"dialogForm.extra.url"}}):a("upload-video",{model:{value:e.dialogForm.extra.url,callback:function(t){e.$set(e.dialogForm.extra,"url",t)},expression:"dialogForm.extra.url"}})],1),a("el-form-item",{attrs:{label:"广告跳转:",prop:"extra.link.type"}},[a("el-radio-group",{model:{value:e.dialogForm.extra.link.type,callback:function(t){e.$set(e.dialogForm.extra.link,"type",t)},expression:"dialogForm.extra.link.type"}},e._l(e.linkOptions,(function(t){return a("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),"outer_link"===e.dialogForm.extra.link.type?a("el-form-item",{attrs:{label:"链接地址:",prop:"extra.link.url"}},[a("el-input",{staticStyle:{width:"350px"},attrs:{placeholder:"请输入链接地址，如：https://www.baidu.com",clearable:""},model:{value:e.dialogForm.extra.link.url,callback:function(t){e.$set(e.dialogForm.extra.link,"url",t)},expression:"dialogForm.extra.link.url"}})],1):e._e(),"text"===e.dialogForm.extra.link.type?a("el-form-item",{attrs:{label:"文字提示:",prop:"extra.link.text"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入文字提示",clearable:""},model:{value:e.dialogForm.extra.link.text,callback:function(t){e.$set(e.dialogForm.extra.link,"text",t)},expression:"dialogForm.extra.link.text"}})],1):e._e(),"news"===e.dialogForm.extra.link.type?a("el-form-item",{attrs:{label:"新闻ID:",prop:"extra.link.id"}},[a("el-input",{staticStyle:{width:"194px"},attrs:{placeholder:"请输入新闻ID",clearable:""},model:{value:e.dialogForm.extra.link.id,callback:function(t){e.$set(e.dialogForm.extra.link,"id",t)},expression:"dialogForm.extra.link.id"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1):e._e()],1)},v=[],b=(a("9911"),a("e60d")),y=a("9fd7"),x={props:{params:Object},components:{uploadSingle:b["a"],uploadVideo:y["a"]},data:function(){var e=this,t=function(t){return!!e.dialogForm.end_time&&t.getTime()>new Date(e.dialogForm.end_time).getTime()},a=function(t){return!!e.dialogForm.start_time&&t.getTime()<=new Date(e.dialogForm.start_time).getTime()-864e5},l=function(t,a,l){var i=e.dialogForm.end_time;return a?i&&new Date(i).getTime()<new Date(a).getTime()?l(new Error("开始时间不能大于结束时间!")):void l():l(new Error("请选择开始日期!"))},i=function(t,a,l){var i=e.dialogForm.start_time;return e.dialogForm.unlimited?l():a?i&&new Date(i).getTime()>new Date(a).getTime()?l(new Error("结束时间不能小于开始时间!")):void l():l(new Error("请选择结束日期!"))};return{productLists:[],statusOptions:[{label:"全部",value:""},{label:"启用",value:1},{label:"禁用",value:0}],typeOptions:[{label:"图片",value:1},{label:"视频",value:2}],queryParams:{title:"",status:"",page:1,pageSize:10},total:0,loading:!1,tableData:[],dialog:{show:!1,title:"新增广告位"},pickerOptionsStart:{disabledDate:t},pickerOptionsEnd:{disabledDate:a},linkOptions:[{label:"无跳转",value:"none"},{label:"链接",value:"outer_link"}],dialogForm:{product_id:"",title:"",type:1,start_time:"",end_time:"",unlimited:!1,extra:{allow_skip:"1",introduction:"",corner_mark:"1",url:"",duration:"",link:{type:"none",url:"",text:"",id:""}}},dialogRules:{title:[{required:!0,message:"请输入广告位名称",trigger:"blur"}],type:[{required:!0,message:"请选择广告类型",trigger:"change"}],start_time:[{required:!0,validator:l,trigger:"blur"}],end_time:[{required:!0,validator:i,trigger:"blur"}],"extra.url":[{required:!0,message:"请输入广告图片/视频",trigger:"blur"}],"extra.duration":[{type:"number",required:!0,message:"请输入广告时长",trigger:"blur"}],"extra.link.url":[{required:!0,message:"请输入链接地址",trigger:"blur"}],"extra.link.text":[{required:!0,message:"请输入文字提示",trigger:"blur"}],"extra.link.id":[{required:!0,message:"请输入新闻id",trigger:"blur"}]}}},methods:{getProductList:function(){var e=this;return Object(u["nc"])({}).then((function(t){var a,l=t.data||[];e.productLists=l.map((function(e){return{label:e.name,value:e.id}})),e.queryParams.product_id=null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.id}))},handleReset:function(){Object.assign(this.queryParams,{page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleReturn:function(){this.$emit("handleReturn")},handleAdd:function(){this.resetForm("dialogForm"),this.dialog={title:"新增广告位",show:!0},this.dialogForm.product_id=this.params.product_id},endAction:function(){this.dialogForm.end_time="",this.dialogForm.unlimited&&this.$refs["dialogForm"].clearValidate(["end_time"])},handleEdit:function(e){var t,a,l,i;this.resetForm("dialogForm"),this.dialogForm={product_id:this.params.product_id,title:e.title,type:e.type,start_time:e.start_time,end_time:null!==(t=e.end_time)&&void 0!==t?t:"",unlimited:!e.end_time,extra:{allow_skip:e.extra.allow_skip,introduction:e.extra.introduction,corner_mark:e.extra.corner_mark,url:e.extra.url,duration:e.extra.duration,link:{type:e.extra.link.type,url:null!==(a=e.extra.link.url)&&void 0!==a?a:"",text:null!==(l=e.extra.link.text)&&void 0!==l?l:"",id:null!==(i=e.extra.link.id)&&void 0!==i?i:""}}},this.dialog={title:"新增广告位",show:!0,id:e.id}},enterDialog:function(){var e,t=this;null===(e=this.$refs.dialogForm)||void 0===e||e.validate((function(e){if(e){var a,l=t.dialog.id;"none"===t.dialogForm.extra.link.type&&(t.dialogForm.extra.link.id="",t.dialogForm.extra.link.url="");var i=Object(s["a"])({ad_place_id:t.params.ad_place_id},t.dialogForm);a=l?Object(d["i"])(l,i):Object(d["a"])(i),a.then((function(){t.$message.success(l?"修改成功":"新增成功"),t.dialog.show=!1,t.getList()}))}}))},handleListDelete:function(e){var t=this,a=e.id,l=e.title;this.$confirm("此操作将永久删除这条标题为".concat(l,"的广告, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(d["o"])(a).then((function(){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},changeStatus:function(e){var t,a,l,i,r=this,o=e.id,n={product_id:this.params.product_id,ad_place_id:this.params.ad_place_id,title:e.title,type:e.type,start_time:e.start_time,end_time:null!==(t=e.end_time)&&void 0!==t?t:"",status:e.status,extra:{allow_skip:e.extra.allow_skip,introduction:e.extra.introduction,corner_mark:e.extra.corner_mark,url:e.extra.url,duration:e.extra.duration,link:{type:e.extra.link.type,url:null!==(a=e.extra.link.url)&&void 0!==a?a:"",text:null!==(l=e.extra.link.text)&&void 0!==l?l:"",id:null!==(i=e.extra.link.id)&&void 0!==i?i:""}}};Object(d["i"])(o,n).then((function(){r.$message.success("修改成功"),r.getList()}))},getLabel:function(e){var t,a;return null!==(t=null===(a=this.typeOptions.find((function(t){return t.value===e})))||void 0===a?void 0:a.label)&&void 0!==t?t:""},getList:function(){var e=this,t=this.params,a=t.product_id,l=t.ad_place_id,i=Object(s["a"])(Object(s["a"])({},this.queryParams),{},{product_id:a,ad_place_id:l});this.loading=!0,Object(d["w"])(this.removePropertyOfNullFor0(i)).then((function(t){e.tableData=t.data||[],e.total=t.total})).finally((function(){e.loading=!1}))}},created:function(){this.getProductList(),this.getList()}},_=x,w=(a("0f0c"),Object(p["a"])(_,f,v,!1,null,null,null)),k=w.exports,F={name:"AdvertList",components:{list:h,childrenList:k},data:function(){return{component:"list",exclude:["childrenList"],params:{}}},methods:{handleReturn:function(){this.component="list"},watchList:function(e){this.params=e,this.component="childrenList"}}},$=F,q=Object(p["a"])($,l,i,!1,null,null,null);t["default"]=q.exports},"9fd7":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-upload-video"},[a("el-upload",{attrs:{name:"file",accept:"video/*",action:e.actionUrl,headers:e.uploadHeader,"show-file-list":!1,"on-success":e.handleUploadSuccess,"before-upload":e.beforeUploadVideo,"on-progress":e.handleProgress,"on-error":e.handleUploadError}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}]},[e._v("上传视频"),a("i",{staticClass:"el-icon-upload el-icon--right",staticStyle:{"font-size":"14px"}})])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"xl-upload-video--play",on:{click:e.play}},[e._v(e._s(e.value)+" "),a("i",{staticClass:"el-icon-video-play"})]),a("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.percentage,expression:"percentage"}],attrs:{percentage:e.percentage}}),e.dialog.show?a("el-dialog",{attrs:{width:"640px",title:"视频",visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("video",{attrs:{height:"400",width:"600",controls:""}},[a("source",{attrs:{src:e.dialog.url}}),e._v(" 您的浏览器不支持 video 标签。 ")])]):e._e()],1)},i=[],r=(a("ac1f"),a("1276"),a("a15b"),{props:{value:String},data:function(){return{percentage:0,dialog:{show:!1,url:""}}},computed:{actionUrl:function(){return this.videourl},uploadHeader:function(){var e=sessionStorage.getItem("token");return{Authorization:e}},type:function(){var e=this.value&&this.value.split(".");return(null===e||void 0===e?void 0:e[e.length-1])||""}},methods:{beforeUploadVideo:function(e){var t=e.size/1024/1024<=300,a=["video/mp4","video/ogg","video/flv","video/avi","video/wmv","video/rmvb","video/mov"];return-1==a.indexOf(e.type)?(this.$message.warning("请上传正确的视频格式: ".concat(a.join())),!1):t?(this.percentage=0,!0):(this.$message.warning("视频大小不能超过300MB"),!1)},handleProgress:function(){this.percentage=90},handleUploadSuccess:function(e,t,a){e.status_code>=200&&e.status_code<300?(this.percentage=100,this.$message.success("视频上传成功!"),this.$emit("input",e.path)):(this.$message.error("视频上传失败!"),this.percentage=0,a.length=0)},handleUploadError:function(){this.$message.error("上传失败, 请重新上传!"),this.percentage=0},play:function(){this.dialog={show:!0,url:this.value}}}}),o=r,n=(a("46f0"),a("2877")),s=Object(n["a"])(o,l,i,!1,null,"664e7a03",null);t["a"]=s.exports},b542:function(e,t,a){}}]);