(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78463aff"],{"197d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"staff-staff"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"关键字："}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticStyle:{"margin-right":"50px"},attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.adddata}},[e._v("新增")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"success",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:function(t){return e.changearrstatus(1)}}},[e._v("批量启用")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:function(t){return e.changearrstatus(2)}}},[e._v("批量禁用")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"danger",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:function(t){return e.changearrstatus(0)}}},[e._v("批量冻结")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"danger",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:e.delarrdata}},[e._v("批量删除")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:e.dataList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),a("el-table-column",{attrs:{label:"头像",width:"80px",align:"center",prop:"avatar","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:t.row.avatar||e.useravatar,alt:""}})]}}])}),a("el-table-column",{attrs:{label:"姓名",align:"center",prop:"name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"手机号",align:"center",prop:"phone","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"邮箱",align:"center",prop:"email","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"status","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(a){return e.statuschange(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}},e._l(e.statusoptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"上次登录时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{width:"280px",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(a){return e.editdata(t.row)}}}),a("Iconbutton",{attrs:{icontype:"qx",label:"权限"},on:{fatherMethod:function(a){return e.editjurisdiction(t.row)}}}),a("Iconbutton",{attrs:{icontype:"js",label:"角色"},on:{fatherMethod:function(a){return e.editroledata(t.row)}}}),a("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(a){return e.handleDelete(t.row)}}})]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"700px",title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-dialog",{attrs:{width:"600px",title:"栏目权限",visible:e.innerVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[a("el-tree",{ref:"tree",attrs:{data:e.channeltree,"default-checked-keys":e.channeltreechoose,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps},on:{"check-change":e.checkChange}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:e.innercloseDialog}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.innerenterDialog}},[e._v("确 定")])],1)],1),a("el-form",{ref:"dataForm",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{"label-width":"120px",label:"用户姓名",prop:"name"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"头像：",prop:"avatar"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.VUE_APP_BASE_API+"/api/upload/image",headers:e.importHeaders,name:"image","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.form.avatar?a("img",{staticClass:"avatar",attrs:{src:e.form.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{"label-width":"120px",label:"手机号",prop:"phone"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),a("el-form-item",{staticClass:"placeholderdiv",attrs:{"label-width":"120px",label:"部门:",prop:"department_id"}},[a("el-cascader",{staticStyle:{width:"300px"},attrs:{"show-all-levels":!1,options:e.departmentList,props:{emitPath:!1,checkStrictly:!0,value:"id",label:"name"},clearable:""},model:{value:e.form.department_id,callback:function(t){e.$set(e.form,"department_id",t)},expression:"form.department_id"}})],1),a("el-form-item",{attrs:{"label-width":"120px",label:"邮箱",prop:"email"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"设置栏目权限"}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{size:"mini",type:"success"},on:{click:e.showchannel}},[e._v("权限")])],1),a("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"允许外网登录",prop:"extra.allow_www_login"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.extra.allow_www_login,callback:function(t){e.$set(e.form.extra,"allow_www_login",t)},expression:"form.extra.allow_www_login"}},e._l(e.www_loginoptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"edit"==e.dialogType?a("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"是否启用",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusoptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:e.closeDialog}},[e._v("取 消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1),e.drawer?a("el-drawer",{attrs:{visible:e.drawer,"with-header":!1,size:"40%",title:"用户直接权限配置"},on:{"update:visible":function(t){e.drawer=t}}},[a("el-tabs",{staticClass:"role-box",attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"用户直接权限菜单"}},[a("el-tree",{ref:"roletree",attrs:{data:e.treedata,"default-checked-keys":e.treechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.roledefaultProps},on:{check:e.nodeclick,"check-change":e.permissionMenu}})],1)],1),a("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:e.cancelrole}},[e._v("取消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:e.surerole}},[e._v("确 定")])],1)],1):e._e(),e.userroledrawer?a("el-drawer",{attrs:{visible:e.userroledrawer,"with-header":!1,size:"40%",title:"角色配置"},on:{"update:visible":function(t){e.userroledrawer=t}}},[a("el-tabs",{staticClass:"userrole-box",attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"用户角色菜单"}},[a("el-tree",{ref:"userroletree",attrs:{data:e.userroletreedata,"default-checked-keys":e.userroletreechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.roledefaultProps},on:{"check-change":e.userrolemenu}})],1)],1),a("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:e.userrolecancelrole}},[e._v("取消")]),a("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:e.userrolesurerole}},[e._v("确 定")])],1)],1):e._e()],1)},r=[],i=a("83a7"),o=(a("9302"),a("2eeb"),a("b4fb"),a("ea69"),a("e35a"),a("0d7a"),a("fe8a"),a("0fea")),n=a("61f7"),l={name:"staff-list",data:function(){var e=sessionStorage.getItem("token");return{drawer:!1,treedata:[],treechoosedata:[],roledefaultProps:{children:"children",label:"remarks"},chooseid:void 0,userroledrawer:!1,userroletreedata:[],userroletreechoosedata:[],useravatar:a("3f1e"),importHeaders:{Authorization:e},innerVisible:!1,defaultProps:{children:"children",label:"name"},channeltree:[],channeltreechoose:[],recordtree:[],queryParams:{page:1,pageSize:10,keyword:""},loading:!0,dataList:[],departmentList:[],total:0,www_loginoptions:[{value:"0",label:"否"},{value:"1",label:"是"}],statusoptions:[{value:"1",label:"启用"},{value:"2",label:"冻结"},{value:"0",label:"禁用"}],dialogFormVisible:!1,form:{name:"",phone:"",avatar:"",email:"",status:"",extra:{allow_www_login:"0"}},rules:{name:[{required:!0,message:"请输入用户姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],department_id:[{required:!0,message:"请选择部门",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[]}},computed:{VUE_APP_BASE_API:function(){return this.imgurl2}},created:function(){this.getList(),this.getDepartList()},methods:{userrolecancelrole:function(){this.userroledrawer=!1},userrolesurerole:function(){var e=this,t=this.$refs.userroletree.getCheckedKeys(),a=t.map((function(e){return e})).join(",");Object(o["y"])(this.chooseid,a).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList(),e.userroledrawer=!1):e.$message({message:t.message,type:"warning"})}))},cancelrole:function(){this.drawer=!1},getDepartList:function(){var e=this;console.log(this.queryParams),Object(o["xb"])(this.removePropertyOfNullFor0(this.queryParams)).then((function(t){e.departmentList=t}))},surerole:function(){var e=this,t=this.$refs.roletree.getCheckedKeys(),a=t.map((function(e){return e})).join(",");Object(o["x"])(this.chooseid,a).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList(),e.drawer=!1):e.$message({message:t.message,type:"warning"})}))},editroledata:function(e){var t=this;this.userroletreechoosedata=[],this.userroletreedata=[],this.userroledrawer=!0,this.chooseid=e.id,Object(o["hc"])(e.id).then((function(e){console.log(e),t.userroletreedata=e.data;var a=JSON.parse(JSON.stringify(t.userroletreedata)),s=[];function r(e){for(var t=0;t<e.length;t++)s=s.concat(e[t]),e[t].children&&r(e[t].children)}r(a);for(var i=0;i<s.length;i++)s[i].own&&t.userroletreechoosedata.push(s[i].id);console.log(t.userroletreechoosedata)}))},editjurisdiction:function(e){var t=this;this.treechoosedata=[],this.treedata=[],this.drawer=!0,this.chooseid=e.id,Object(o["gc"])(e.id).then((function(e){t.treedata=e.data;var a=JSON.parse(JSON.stringify(t.treedata)),s=[];function r(e){for(var t=0;t<e.length;t++)s=s.concat(e[t]),e[t].children&&r(e[t].children)}r(a);for(var i=0;i<s.length;i++)s[i].own&&t.treechoosedata.push(s[i].id)}))},userrolemenu:function(e,t,a){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var s=this.$refs.userroletree.getNode(e.id),r=this.$refs.userroletree.getCheckedKeys();if(t)for(var i=s.level;i>1;i--)s.parent.checked||(s=s.parent,r.push(s.data.id));else if(s.childNodes)for(var o=0;o<s.childNodes.length;o++)r.remove(s.childNodes[o].key);this.$refs.userroletree.setCheckedKeys(r)},nodeclick:function(e,t){function a(e){if(e.childNodes)for(var t=0;t<e.childNodes.length;t++)r.push(e.childNodes[t].key),e.childNodes[t].childNodes&&a(e.childNodes[t])}function s(e){if(e.childNodes)for(var t=0;t<e.childNodes.length;t++)r.remove(e.childNodes[t].key),e.childNodes[t].childNodes&&s(e.childNodes[t])}Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var r=this.$refs.roletree.getCheckedKeys(),i=this.$refs.roletree.getNode(e.id);if(t.checkedKeys.indexOf(e.id)>-1){a(i);for(var o=i.level;o>1;o--)i.parent.checked||(i=i.parent,r.push(i.data.id))}else{if(e.via_role)return this.$message({message:"该权限继承自角色 需要为当前用户撤销对应角色分配才能取消",type:"warning"}),r.push(e.id),void this.$refs.roletree.setCheckedKeys(r);s(i)}this.$refs.roletree.setCheckedKeys(r)},permissionMenu:function(e,t,a){},showchannel:function(){this.innerVisible=!0,this.getChannelsList()},checkChange:function(e,t,a){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var s=this.$refs.tree.getNode(e.id),r=this.$refs.tree.getCheckedKeys();if(t){var i=function e(t){if(t.childNodes!=[])for(var a=0;a<t.childNodes.length;a++)t.childNodes[a].checked&&r.remove(t.childNodes[a].key),e(t.childNodes[a])};i(s);for(var o=s.level;o>1;o--)s.parent.checked&&r.remove(s.parent.key),s=s.parent}this.$refs.tree.setCheckedKeys(r)},handleAvatarSuccess:function(e,t,a){this.form.avatar=e.path,this.$forceUpdate()},beforeAvatarUpload:function(e){var t=e.size/1024/1024<20;return t||this.$message.error("上传头像图片大小不能超过 20MB!"),t},handleQuery:function(){this.loading=!0,this.queryParams.page=1,this.getList()},changearrstatus:function(e){var t=this,a=this.multipleSelection.map((function(e){return e.id})).join(",");Object(o["E"])(a,e).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})}))},getChannelsList:function(){var e=this;Object(o["vb"])().then((function(t){e.channeltree=t}))},getList:function(){var e=this,t={model:"User"};Object(o["Ob"])(Object.assign(t,this.queryParams)).then((function(t){e.loading=!1,e.dataList=t.data,e.total=t.total}))},statuschange:function(e){var t=this;Object(o["qb"])(e.id,e).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})}))},adddata:function(){this.initForm(),this.dialogTitle="新增用户",this.dialogType="add",this.dialogFormVisible=!0},initForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields(),this.form={name:"",phone:"",avatar:"",email:"",status:"",extra:{allow_www_login:"0"}},this.recordtree=[],this.channeltreechoose=[]},editdata:function(e){this.initForm(),this.dialogTitle="编辑用户",this.dialogType="edit",this.form=JSON.parse(JSON.stringify(e)),console.log(this.form),this.form.extra||(this.form.extra={}),this.getChannelsList();try{var t=this.form.extra.channel_limit.split(",");this.recordtree=t,this.channeltreechoose=t}catch(a){}this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除id为"+e.id+"的权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["bb"])(e.id).then((function(e){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},delarrdata:function(){var e=this,t=this.multipleSelection.map((function(e){return e.id})).join(",");this.$confirm("此操作将永久删除id为"+t+"的权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["R"])(t).then((function(t){e.$message({message:"删除成功",type:"success"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},innercloseDialog:function(){this.channeltreechoose=this.recordtree,this.$refs.tree.setCheckedKeys(this.channeltreechoose),this.innerVisible=!1},innerenterDialog:function(){this.channeltreechoose=this.$refs.tree.getCheckedKeys(),this.recordtree=this.channeltreechoose,this.innerVisible=!1},closeDialog:function(){this.initForm(),this.dialogFormVisible=!1},toFormData:function(e){var t=new FormData;for(var a in e)s(e[a],a);function s(e,a){if(void 0==e||"function"==typeof e)return!1;if("object"!=Object(i["a"])(e))t.append(a,e);else if(e instanceof Array)if(0==e.length)t.append("".concat(a),"");else for(var r in e)for(var o in e[r])s(e[r][o],"".concat(a,"[").concat(r,"].").concat(o));else{var n=Object.keys(e);if(-1==n.indexOf("uid"))for(var l in e)s(e[l],"".concat(a,".").concat(l));else t.append("".concat(a),e)}}return t},enterDialog:function(){var e=this;Object(n["e"])(this.form.phone)?!this.form.email||Object(n["d"])(this.form.email)?this.$refs["dataForm"].validate((function(t){if(t)if("edit"==e.dialogType){var a=e.channeltreechoose.map((function(e){return e})).join(","),s=e.form;s.extra.channel_limit=a,Object(o["qb"])(s.id,s).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.dialogFormVisible=!1,e.getList()):e.$message({message:t.message,type:"warning"})}))}else{a=e.channeltreechoose.map((function(e){return e})).join(","),s=e.form;s.extra.channel_limit=a,console.log(s),Object(o["v"])(s).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.dialogFormVisible=!1,e.getList()):e.$message({message:t.message,type:"warning"})}))}})):this.$message({message:"请输入正确的邮箱",type:"error"}):this.$message({message:"请输入正确的手机号",type:"error"})},handleSelectionChange:function(e){this.multipleSelection=e}}},c=l,d=(a("b77a"),a("9ab6"),a("cba8")),u=Object(d["a"])(c,s,r,!1,null,"3b508d34",null);t["default"]=u.exports},"1f83":function(e,t,a){},"2f9d":function(e,t,a){},"9ab6":function(e,t,a){"use strict";a("2f9d")},b77a:function(e,t,a){"use strict";a("1f83")}}]);