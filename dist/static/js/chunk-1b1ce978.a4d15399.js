(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b1ce978"],{"8a19":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"staff-jurisdiction"},[a("el-form",{ref:"queryForm",attrs:{inline:!0}},[a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.adddata(0)}}},[e._v("新增")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:e.multipleSelection.length<1,type:"danger",size:"mini"},on:{click:e.delarrdata}},[e._v("批量删除")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:1!=e.multipleSelection.length,type:"warning",size:"mini"},on:{click:e.editdata}},[e._v("修改")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:e.dataList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"显示名称",align:"center",prop:"remarks","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"site-id",align:"center",prop:"site_id","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"240px"},scopedSlots:e._u([{key:"default",fn:function(t){return["超级管理员"!=t.row.remarks&&"站长"!=t.row.remarks&&"编辑"!=t.row.remarks?a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.editdata(t.row)}}}):e._e(),a("Iconbutton",{attrs:{icontype:"qx",label:"权限"},on:{fatherMethod:function(a){return e.editjurisdiction(t.row)}}}),"超级管理员"!=t.row.remarks&&"站长"!=t.row.remarks&&"编辑"!=t.row.remarks?a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleDelete(t.row)}}}):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"600px",title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{"label-width":"100px",label:"角色名称",prop:"name"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入角色名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{"label-width":"100px",label:"显示名称",prop:"remarks"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入显示名称"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),"add"==e.dialogType?a("el-form-item",{attrs:{"label-width":"100px",label:"site-id",prop:"site_id"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入当前角色的site-id"},model:{value:e.form.site_id,callback:function(t){e.$set(e.form,"site_id",t)},expression:"form.site_id"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:e.closeDialog}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1),e.drawer?a("el-drawer",{attrs:{visible:e.drawer,"with-header":!1,size:"40%",title:"角色权限配置"},on:{"update:visible":function(t){e.drawer=t}}},[a("el-tabs",{staticClass:"role-box",attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"角色权限菜单"}},[a("el-tree",{ref:"tree",attrs:{data:e.treedata,"default-checked-keys":e.treechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps},on:{"check-change":e.checkChange,check:e.nodeclick}})],1)],1),a("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:e.cancelrole}},[e._v("取消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:e.surerole}},[e._v("确 定")])],1)],1):e._e()],1)},s=[],o=(a("ea69"),a("9302"),a("2eeb"),a("b4fb"),a("0fea")),r={name:"staff-role",data:function(){return{queryParams:{page:1,pageSize:10},loading:!0,dataList:[],dialogFormVisible:!1,form:{name:"",remarks:"",site_id:""},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入显示名称",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[],total:0,drawer:!1,treedata:[],treechoosedata:[],defaultProps:{children:"children",label:"remarks"},chooseid:void 0,checkflag:!0}},created:function(){this.getList()},methods:{getList:function(){var e=this,t={model:"Role"};Object(o["Gb"])(Object.assign(t,this.queryParams)).then((function(t){e.loading=!1,e.dataList=t.data,e.total=t.total}))},handleSelectionChange:function(e){this.multipleSelection=e},checkChange:function(e,t,a){if(this.checkflag){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var i=this.$refs.tree.getNode(e.id),s=this.$refs.tree.getCheckedKeys();if(t)for(var o=i.level;o>1;o--)i.parent.checked||(i=i.parent,s.push(i.data.id));else if(i.childNodes)for(var r=0;r<i.childNodes.length;r++)s.remove(i.childNodes[r].key);this.$refs.tree.setCheckedKeys(s)}},nodeclick:function(e,t){function a(e){if(e.childNodes)for(var t=0;t<e.childNodes.length;t++)i.push(e.childNodes[t].key),e.childNodes[t].childNodes&&a(e.childNodes[t])}var i=this.$refs.tree.getCheckedKeys();if(t.checkedKeys.indexOf(e.id)>-1){var s=this.$refs.tree.getNode(e.id);console.log(s),a(s),this.$refs.tree.setCheckedKeys(i)}},cancelrole:function(){this.drawer=!1},surerole:function(){var e=this,t=this.$refs.tree.getCheckedKeys(),a=t.map((function(e){return e})).join(",");Object(o["w"])(this.chooseid,a).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList(),e.drawer=!1):e.$message({message:t.message,type:"warning"})}))},editjurisdiction:function(e){var t=this;this.treechoosedata=[],this.treedata=[],this.drawer=!0,this.chooseid=e.id,Object(o["bc"])(e.id).then((function(e){t.treedata=e.data;var a=JSON.parse(JSON.stringify(t.treedata)),i=[];function s(e){for(var t=0;t<e.length;t++)i=i.concat(e[t]),e[t].children&&s(e[t].children)}s(a);for(var o=0;o<i.length;o++)i[o].own&&t.treechoosedata.push(i[o].id)}))},initForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields(),this.form={name:"",remarks:"",site_id:""}},adddata:function(){this.initForm(),this.dialogTitle="新增角色",this.dialogType="add",this.dialogFormVisible=!0},editdata:function(e){e=this.multipleSelection[0]||e;this.initForm(),this.form=JSON.parse(JSON.stringify(e)),this.dialogTitle="编辑角色",this.dialogType="edit",this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除id为"+e.id+"的角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["Z"])(e.id).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.getList()):t.$message({message:e.message,type:"warning"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},delarrdata:function(){var e=this,t=this.multipleSelection.map((function(e){return e.id})).join(",");this.$confirm("此操作将永久删除id为"+t+"的角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["Q"])(t).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList()):e.$message({message:t.message,type:"warning"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.dialogFormVisible=!1},enterDialog:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&("edit"==e.dialogType?Object(o["nb"])(e.form.id,e.form).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.dialogFormVisible=!1,e.getList()):e.$message({message:t.message,type:"warning"})})):Object(o["q"])(e.form).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.dialogFormVisible=!1,e.getList()):e.$message({message:t.message,type:"warning"})})))}))}}},n=r,l=(a("cb08"),a("b18d"),a("cba8")),c=Object(l["a"])(n,i,s,!1,null,"5bb2598d",null);t["default"]=c.exports},a94f:function(e,t,a){},b18d:function(e,t,a){"use strict";a("a94f")},cb08:function(e,t,a){"use strict";a("cfdb")},cfdb:function(e,t,a){}}]);