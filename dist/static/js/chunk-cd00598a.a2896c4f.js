(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd00598a"],{"0496":function(e,t,a){var n=a("efe2");e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},"31a0":function(e,t,a){"use strict";var n=a("1c8b"),i=a("5197"),o=a("0496");n({target:"String",proto:!0,forced:o("link")},{link:function(e){return i(this,"a","href",e)}})},5197:function(e,t,a){var n=a("2732"),i=/"/g;e.exports=function(e,t,a,o){var l=String(n(e)),r="<"+t;return""!==a&&(r+=" "+a+'="'+String(o).replace(i,"&quot;")+'"'),r+">"+l+"</"+t+">"}},"74db":function(e,t,a){},a550:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xl-app-menu"},[a("el-form",{ref:"queryForm",attrs:{inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"所属产品:"}},[a("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:e.sourceId,callback:function(t){e.sourceId=t},expression:"sourceId"}},e._l(e.productLists,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1),a("div",{staticClass:"table-box"},[a("h4",[e._v("主功能区")]),e._m(0),a("div",{staticClass:"table-box--btn"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addCustom("main")}}},[e._v("新增自定义菜单")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addDefault("main")}}},[e._v("新增默认菜单")])],1),a("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.main,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(a){return e.handleEdit(t.row,"main")}}},[e._v(" 编辑 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(a){return e.handleDelete(t.$index,t.row.name,"main")}}},[e._v(" 删除 ")])]}}])})],1)],1),a("div",{staticClass:"table-box"},[a("h4",[e._v("常用功能区")]),a("p",[e._v("说明：副功能菜单在白底区，无数量限制，自动换行")]),a("div",{staticClass:"table-box--btn"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addCustom("frequent")}}},[e._v("新增自定义菜单")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addDefault("frequent")}}},[e._v("新增默认菜单")])],1),a("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.frequent,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(a){return e.handleEdit(t.row,"frequent")}}},[e._v(" 编辑 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(a){return e.handleDelete(t.$index,t.row.name,"frequent")}}},[e._v(" 删除 ")])]}}])})],1)],1),a("div",{staticClass:"table-box"},[a("h4",[e._v("更多区域")]),a("p"),a("div",{staticClass:"table-box--btn"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addCustom("more")}}},[e._v("新增自定义菜单")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addDefault("more")}}},[e._v("新增默认菜单")])],1),a("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.more,border:"","tooltip-effect":"dark"}},[a("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),a("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(a){return e.handleEdit(t.row,"more")}}},[e._v(" 编辑 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(a){return e.handleDelete(t.$index,t.row.name,"more")}}},[e._v(" 删除 ")])]}}])})],1)],1),a("el-dialog",{attrs:{width:"600px",title:e.defaultMenu.title,visible:e.defaultMenu.show},on:{"update:visible":function(t){return e.$set(e.defaultMenu,"show",t)}}},[a("el-checkbox-group",{attrs:{max:e.defaultMenu.max},model:{value:e.allMenuSelect,callback:function(t){e.allMenuSelect=t},expression:"allMenuSelect"}},e._l(e.allMenu,(function(t,n){return a("el-checkbox",{key:n,staticStyle:{"margin-bottom":"20px"},attrs:{label:t.name,disabled:e.judgeDisabled(t.name)}},[e._v(e._s(t.name))])})),1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.defaultMenu.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.defaultMenuEnter}},[e._v(" 确 定 ")])],1)],1),a("el-dialog",{attrs:{width:"600px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[a("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,size:"small","label-width":"120px"}},[a("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入菜单名(不要与默认菜单名重复)",disabled:e.dialog.disabledName},model:{value:e.dialogForm.name,callback:function(t){e.$set(e.dialogForm,"name",t)},expression:"dialogForm.name"}})],1),a("el-form-item",{attrs:{label:"图标",prop:"logo"}},[a("upload-single",{model:{value:e.dialogForm.logo,callback:function(t){e.$set(e.dialogForm,"logo",t)},expression:"dialogForm.logo"}})],1),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:""},model:{value:e.dialogForm.sort,callback:function(t){e.$set(e.dialogForm,"sort",e._n(t))},expression:"dialogForm.sort"}})],1),a("el-form-item",{attrs:{label:"类型",prop:"sort"}},[a("el-radio-group",{on:{change:e.radiochange},model:{value:e.dialogForm.type,callback:function(t){e.$set(e.dialogForm,"type",t)},expression:"dialogForm.type"}},e._l(e.typeOptions,(function(t){return a("el-radio",{key:t.value,staticStyle:{"margin-top":"10px"},attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),"outer_link"===e.dialogForm.type?a("el-form-item",{attrs:{label:"外链",prop:"link"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入链接"},model:{value:e.dialogForm.link,callback:function(t){e.$set(e.dialogForm,"link",t)},expression:"dialogForm.link"}})],1):e._e(),"auth_link"===e.dialogForm.type?a("el-form-item",{attrs:{label:"授权外链",prop:"link"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入链接"},model:{value:e.dialogForm.link,callback:function(t){e.$set(e.dialogForm,"link",t)},expression:"dialogForm.link"}})],1):e._e(),"app_redirect"===e.dialogForm.type?a("el-form-item",{attrs:{label:"原生跳转id",prop:"link"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入原生跳转id"},model:{value:e.dialogForm.link,callback:function(t){e.$set(e.dialogForm,"link",t)},expression:"dialogForm.link"}})],1):e._e(),"phone"===e.dialogForm.type?a("el-form-item",{attrs:{label:"电话号码",prop:"phone"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入电话号码"},model:{value:e.dialogForm.phone,callback:function(t){e.$set(e.dialogForm,"phone","string"===typeof t?t.trim():t)},expression:"dialogForm.phone"}})],1):e._e(),"text"===e.dialogForm.type?a("el-form-item",{attrs:{label:"信息展示",prop:"text"}},[a("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入展示信息"},model:{value:e.dialogForm.text,callback:function(t){e.$set(e.dialogForm,"text","string"===typeof t?t.trim():t)},expression:"dialogForm.text"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.dialogEnter}},[e._v(" 确 定 ")])],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("说明：主功能菜单在有色底区，最多支持"),a("span",{staticStyle:{color:"red","font-size":"18px"}},[e._v("4")]),e._v("个")])}],o=a("e9ff"),l=a("06c4"),r=(a("e186"),a("2eeb"),a("053b"),a("31a0"),a("b4fb"),a("b130"),a("90aa"),a("08ba"),a("4194"),a("dbb3"),a("08d5"),a("ea69"),a("3466"),a("0fea")),s=a("e60d"),c={components:{uploadSingle:s["a"]},data:function(){return{productLists:[],typeOptions:[{label:"外链",value:"outer_link"},{label:"授权外链",value:"auth_link"},{label:"原生跳转",value:"app_redirect"},{label:"电话",value:"phone"},{label:"信息展示",value:"text"}],sourceId:"",main:[],frequent:[],more:[],allMenu:[{name:"收藏",logo:"",sort:1,type:"app_redirect",link:"1"},{name:"积分",logo:"",sort:2,type:"app_redirect",link:"2"},{name:"评论",logo:"",sort:3,type:"app_redirect",link:"3"},{name:"活动",logo:"",sort:4,type:"app_redirect",link:"4"},{name:"爆料",logo:"",sort:5,type:"app_redirect",link:"5"},{name:"意见反馈",logo:"",sort:6,type:"app_redirect",link:"6"},{name:"邀请好友",logo:"",sort:7,type:"app_redirect",link:"7"},{name:"邀请码",logo:"",sort:8,type:"app_redirect",link:"8"},{name:"我的奖品",logo:"",sort:9,type:"app_redirect",link:"9"},{name:"发布",logo:"",sort:10,type:"app_redirect",link:"10"},{name:"我的钱包",logo:"",sort:11,type:"app_redirect",link:"11"},{name:"关于我们",logo:"",sort:12,type:"app_redirect",link:"12"},{name:"历史记录",logo:"",sort:15,type:"app_redirect",link:"15"}],allMenuSelect:[],defaultMenu:{title:"新增默认菜单",show:!1,key:"",max:9999},dialog:{title:"新增自定义菜单",show:!1,disabledName:!1,key:""},patchData:{},dialogForm:{name:"",logo:"",sort:"",type:"outer_link",link:"",text:"",phone:""},dialogRules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],logo:[{required:!0,message:"请新增菜单logo",trigger:"chnage"}],sort:[{required:!0,type:"number",message:"请输入排序",trigger:"blur"}],link:[{required:!0,message:"请输入",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],text:[{required:!0,message:"请输入展示号码",trigger:"blur"}]}}},methods:{getProductList:function(){var e=this;return Object(r["Xb"])({}).then((function(t){var a,n=t.data||[];e.productLists=n.map((function(e){return{label:e.name,value:e.id}})),e.sourceId=null===n||void 0===n||null===(a=n[0])||void 0===a?void 0:a.id}))},handleQuery:function(){this.getList()},radiochange:function(){this.dialogForm.link=""},judgeDisabled:function(e){var t=this.defaultMenu.key;if(""===t)return!1;var a=[];return a="main"===t?this.frequent.concat(this.more).map((function(e){return e.name})):"frequent"===t?this.main.concat(this.more).map((function(e){return e.name})):this.frequent.concat(this.main).map((function(e){return e.name})),a.includes(e)},addDefault:function(e){var t=this;this.allMenuSelect=this[e].map((function(e){return e.name})),this.allMenu.forEach((function(a){var n=t[e].find((function(e){return a.name===e.name}));n&&Object.assign(a,n)})),Object.assign(this.defaultMenu,{show:!0,key:e,max:"main"===e?4:99999})},defaultMenuEnter:function(){var e=this,t=this.patchData.extra.profile_settings||(this.patchData.extra.profile_settings={}),a=this.defaultMenu.key,n=this.allMenu.map((function(e){return e.name})),i=this.allMenu.filter((function(t){return e.allMenuSelect.includes(t.name)})),o=this[a].filter((function(e){return!n.includes(e.name)}));t[a]=i.concat(o),this.httpPatch((function(){e.defaultMenu.show=!1}))},addCustom:function(e){this.resetForm("dialogForm"),this.dialog={title:"新增自定义菜单",show:!0,disabledName:!1,add:!0,key:e}},handleEdit:function(e,t){this.resetForm("dialogForm");var a=e.name,n=e.logo,i=e.sort,o=e.type,l=void 0===o?"outer_link":o,r=e.link,s=void 0===r?"":r,c=e.text,u=void 0===c?"":c,d=e.phone,p=void 0===d?"":d;this.dialog={title:"编辑菜单",disabledName:this.allMenu.some((function(e){return e.name===a})),show:!0,key:t},this.dialogForm={name:a,logo:n,sort:i,type:l,link:s,text:u,phone:p}},dialogEnter:function(){var e,t=this;null===(e=this.$refs.dialogForm)||void 0===e||e.validate((function(e){if(e){var a=t.patchData.extra.profile_settings||(t.patchData.extra.profile_settings={}),n=t.dialog.key,i=a[n]||(a[n]=[]),o=Object(l["a"])({},t.dialogForm);t.dialog.add?i.push(o):i.splice(i.findIndex((function(e){return e.name===o.name})),1,o),t.httpPatch((function(){t.dialog.show=!1}))}}))},handleDelete:function(e,t,a){var n=this;this.$confirm("此操作将永久删除这条名为".concat(t,"的菜单, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=n.patchData.extra.profile_settings;t[a].splice(e,1),n.httpPatch((function(){n.dialog.show=!1}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},httpPatch:function(e){var t=this,a=this.sourceId;Object(r["B"])(a,this.patchData).then((function(){t.$message.success("修改菜单成功"),t.getList(),null===e||void 0===e||e()}))},getList:function(){var e=this;Object(r["tb"])(this.sourceId).then((function(t){console.log("res",t);var a=t.extra.profile_settings||{};e.patchData=t,e.main=(e.sortArry(a.main)||[]).map((function(e){return Object(l["a"])({},e)})),e.frequent=(e.sortArry(a.frequent)||[]).map((function(e){return Object(l["a"])({},e)})),e.more=(e.sortArry(a.more)||[]).map((function(e){return Object(l["a"])({},e)}))}))},sortArry:function(e){if(!e)return[];for(var t=0;t<e.length;t++)for(var a=t+1;a<e.length;a++)if(e[t].sort>e[a].sort){var n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()}},u=c,d=(a("ec45"),a("cba8")),p=Object(d["a"])(u,n,i,!1,null,"096fb0d7",null);t["default"]=p.exports},ec45:function(e,t,a){"use strict";a("74db")}}]);