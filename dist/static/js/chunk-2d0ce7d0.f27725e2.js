(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ce7d0"],{6055:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"staff-jurisdiction"},[a("el-form",{ref:"queryForm",attrs:{inline:!0}},[a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.adddata(0)}}},[e._v("新增")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:e.multipleSelection.length<1,type:"danger",size:"mini"},on:{click:e.delarrdata}},[e._v("批量删除")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:1!=e.multipleSelection.length,type:"warning",size:"mini"},on:{click:e.editdata}},[e._v("修改")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:e.dataList,"row-key":"id","tree-props":{children:"children"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"权限名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"显示名称",align:"center",prop:"remarks","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"路由",align:"center",prop:"id","show-overflow-tooltip":!0}},[e._v("web")]),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"240px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"xz",label:"新增"},on:{fatherMethod:function(a){return e.adddata(t.row.id)}}}),a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.editdata(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleDelete(t.row)}}})]}}])})],1),a("el-dialog",{attrs:{width:"600px",title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataFrom",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{"label-width":"100px",label:"权限名称",prop:"name"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入权限名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{"label-width":"100px",label:"显示名称",prop:"remarks"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入显示名称"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),"add"==e.dialogType?a("el-form-item",{attrs:{"label-width":"100px",label:"父节点",prop:"father"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入父节点"},model:{value:e.form.father,callback:function(t){e.$set(e.form,"father",t)},expression:"form.father"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:e.closeDialog}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1)],1)},o=[],s=(a("e9c4"),a("a15b"),a("d81d"),a("0fea")),n={name:"staff-jurisdiction",data:function(){return{loading:!0,dataList:[],dialogFormVisible:!1,form:{name:"",remarks:"",father:""},rules:{name:[{required:!0,message:"请输入权限名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入显示名称",trigger:"blur"}],father:[{required:!0,message:"请输入父节点",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;Object(s["Eb"])().then((function(t){e.loading=!1,e.dataList=t}))},handleSelectionChange:function(e){this.multipleSelection=e},initForm:function(){this.$refs.dataFrom&&this.$refs.dataFrom.resetFields(),this.form={name:"",remarks:"",father:""}},adddata:function(e){this.initForm(),this.form.father=e,this.dialogTitle="新增权限",this.dialogType="add",this.dialogFormVisible=!0},editdata:function(e){e=this.multipleSelection[0]||e;this.initForm(),this.form=JSON.parse(JSON.stringify(e)),this.dialogTitle="编辑权限",this.dialogType="edit",this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除id为"+e.id+"的权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["ab"])(e.id).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.getList()):t.$message({message:e.message,type:"warning"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},delarrdata:function(){var e=this,t=this.multipleSelection.map((function(e){return e.id})).join(",");this.$confirm("此操作将永久删除id为"+t+"的权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["W"])(t).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList()):e.$message({message:t.message,type:"warning"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.dialogFormVisible=!1},enterDialog:function(){var e=this;this.$refs["dataFrom"].validate((function(t){t&&(e.dialogFormVisible=!1,"edit"==e.dialogType?Object(s["ub"])(e.form.id,e.form).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList()):e.$message({message:t.message,type:"warning"})})):Object(s["p"])(e.form).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList()):e.$message({message:t.message,type:"warning"})})))}))}}},l=n,r=a("2877"),c=Object(r["a"])(l,i,o,!1,null,null,null);t["default"]=c.exports}}]);