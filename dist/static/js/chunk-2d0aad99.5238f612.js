(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aad99"],{1389:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"xl-secret-manage"},[t("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,size:"small"}},[t("el-form-item",{attrs:{label:"所属产品："}},[t("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:e.product_id,callback:function(a){e.product_id=a},expression:"product_id"}},e._l(e.productList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",[0===e.total?t("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")]):e._e(),t("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[t("el-table-column",{attrs:{label:"sourceId",align:"center",prop:"sourceId"}}),t("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"appName"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(t){return e.handleEdit(a.row)}}}),t("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(t){return e.handleDelete(a.row)}}})]}}])})],1),t("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.limit},on:{"update:page":function(a){return e.$set(e.queryParams,"page",a)},"update:limit":function(a){return e.$set(e.queryParams,"limit",a)},pagination:e.getList}}),t("el-dialog",{attrs:{width:"1000px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(a){return e.$set(e.dialog,"show",a)}}},[t("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,size:"small","label-width":"140px"}},[t("el-row",[t("el-col",{attrs:{span:14}},[t("el-form-item",{attrs:{label:"所属产品：",prop:"sourceId"}},[t("el-select",{staticStyle:{width:"200px"},attrs:{disabled:"",placeholder:"请选择所属产品",clearable:""},model:{value:e.dialogForm.sourceId,callback:function(a){e.$set(e.dialogForm,"sourceId",a)},expression:"dialogForm.sourceId"}},e._l(e.productLists,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{label:"SourceId：",prop:"sourceId"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{disabled:"",clearable:""},model:{value:e.dialogForm.sourceId,callback:function(a){e.$set(e.dialogForm,"sourceId",a)},expression:"dialogForm.sourceId"}})],1),t("el-form-item",{attrs:{label:"秘钥：",prop:"appSrcret"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入秘钥"},model:{value:e.dialogForm.appSrcret,callback:function(a){e.$set(e.dialogForm,"appSrcret",a)},expression:"dialogForm.appSrcret"}})],1),t("el-form-item",{attrs:{label:"App ID：",prop:"appId"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入App ID"},model:{value:e.dialogForm.appId,callback:function(a){e.$set(e.dialogForm,"appId",e._n(a))},expression:"dialogForm.appId"}})],1),t("el-form-item",{attrs:{label:"重保期选项："}},[t("el-col",{attrs:{span:6}},[t("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"registerDisableTag"}},[t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dialogForm.registerDisableTag,callback:function(a){e.$set(e.dialogForm,"registerDisableTag",a)},expression:"dialogForm.registerDisableTag"}},[e._v("禁止注册")])],1)],1),t("el-col",{attrs:{span:9}},[t("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"userInfoDisableTag"}},[t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dialogForm.userInfoDisableTag,callback:function(a){e.$set(e.dialogForm,"userInfoDisableTag",a)},expression:"dialogForm.userInfoDisableTag"}},[e._v("禁止修改用户信息")])],1)],1),t("el-col",{attrs:{span:9}},[t("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"loginDisableTag"}},[t("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dialogForm.loginDisableTag,callback:function(a){e.$set(e.dialogForm,"loginDisableTag",a)},expression:"dialogForm.loginDisableTag"}},[e._v("禁止第三方登录")])],1)],1)],1),t("el-form-item",{attrs:{label:"H5 Srcret：",prop:"h5Srcret"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入H5 Srcret",clearable:""},model:{value:e.dialogForm.h5Srcret,callback:function(a){e.$set(e.dialogForm,"h5Srcret",a)},expression:"dialogForm.h5Srcret"}})],1),t("el-form-item",{attrs:{label:"第三方QQ的key：",prop:"thirdKeyForQQ"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入第三方QQ的key",clearable:""},model:{value:e.dialogForm.thirdKeyForQQ,callback:function(a){e.$set(e.dialogForm,"thirdKeyForQQ",a)},expression:"dialogForm.thirdKeyForQQ"}})],1),t("el-form-item",{attrs:{label:"兑吧重定向地址：",prop:"duibaRedirect"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧重定向地址",clearable:""},model:{value:e.dialogForm.duibaRedirect,callback:function(a){e.$set(e.dialogForm,"duibaRedirect",a)},expression:"dialogForm.duibaRedirect"}})],1),t("el-form-item",{attrs:{label:"兑吧接口Appkey：",prop:"duibaAppKey"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧接口Appkey",clearable:""},model:{value:e.dialogForm.duibaAppKey,callback:function(a){e.$set(e.dialogForm,"duibaAppKey",a)},expression:"dialogForm.duibaAppKey"}})],1),t("el-form-item",{attrs:{label:"兑吧秘钥：",prop:"duibaSrcret"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧秘钥",clearable:""},model:{value:e.dialogForm.duibaSrcret,callback:function(a){e.$set(e.dialogForm,"duibaSrcret",a)},expression:"dialogForm.duibaSrcret"}})],1),t("el-form-item",{attrs:{label:"个推秘钥：",prop:"bluecore_mastersecret"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off",placeholder:"请输入个推秘钥"},model:{value:e.dialogForm.bluecore_mastersecret,callback:function(a){e.$set(e.dialogForm,"bluecore_mastersecret",a)},expression:"dialogForm.bluecore_mastersecret"}})],1),t("el-form-item",{attrs:{label:"蓝核APPkey：",prop:"bluecore_appkey"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off",placeholder:"请输入蓝核APPkey"},model:{value:e.dialogForm.bluecore_appkey,callback:function(a){e.$set(e.dialogForm,"bluecore_appkey",a)},expression:"dialogForm.bluecore_appkey"}})],1)],1),t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"蓝核APPID：",prop:"bluecore_appid"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off",placeholder:"请输入蓝核APPID"},model:{value:e.dialogForm.bluecore_appid,callback:function(a){e.$set(e.dialogForm,"bluecore_appid",a)},expression:"dialogForm.bluecore_appid"}})],1),t("el-form-item",{attrs:{label:"支付宝App ID：",prop:"alipayAppId"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝App ID",clearable:""},model:{value:e.dialogForm.alipayAppId,callback:function(a){e.$set(e.dialogForm,"alipayAppId",a)},expression:"dialogForm.alipayAppId"}})],1),t("el-form-item",{attrs:{label:"支付宝私有key：",prop:"alipayPrivateKey"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝私有key",clearable:""},model:{value:e.dialogForm.alipayPrivateKey,callback:function(a){e.$set(e.dialogForm,"alipayPrivateKey",a)},expression:"dialogForm.alipayPrivateKey"}})],1),t("el-form-item",{attrs:{label:"支付宝公有key：",prop:"alipayPublicKey"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝公有key",clearable:""},model:{value:e.dialogForm.alipayPublicKey,callback:function(a){e.$set(e.dialogForm,"alipayPublicKey",a)},expression:"dialogForm.alipayPublicKey"}})],1),t("el-form-item",{attrs:{label:"闪验安卓AppID：",prop:"flashAndroidAppId"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验安卓AppID",clearable:""},model:{value:e.dialogForm.flashAndroidAppId,callback:function(a){e.$set(e.dialogForm,"flashAndroidAppId",a)},expression:"dialogForm.flashAndroidAppId"}})],1),t("el-form-item",{attrs:{label:"闪验安卓appkey：",prop:"flashAndroidAppKey"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验安卓appkey",clearable:""},model:{value:e.dialogForm.flashAndroidAppKey,callback:function(a){e.$set(e.dialogForm,"flashAndroidAppKey",a)},expression:"dialogForm.flashAndroidAppKey"}})],1),t("el-form-item",{attrs:{label:"闪验苹果AppID：",prop:"flashIosAppId"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验苹果AppID",clearable:""},model:{value:e.dialogForm.flashIosAppId,callback:function(a){e.$set(e.dialogForm,"flashIosAppId",a)},expression:"dialogForm.flashIosAppId"}})],1),t("el-form-item",{attrs:{label:"闪验苹果AppKey：",prop:"flashIosAppKey"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验苹果AppKey",clearable:""},model:{value:e.dialogForm.flashIosAppKey,callback:function(a){e.$set(e.dialogForm,"flashIosAppKey",a)},expression:"dialogForm.flashIosAppKey"}})],1),t("el-form-item",{attrs:{label:"社区详情页面地址：",prop:"socialDetailUrl"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区详情页面地址",clearable:""},model:{value:e.dialogForm.socialDetailUrl,callback:function(a){e.$set(e.dialogForm,"socialDetailUrl",a)},expression:"dialogForm.socialDetailUrl"}})],1),t("el-form-item",{attrs:{label:"社区分享页面地址：",prop:"socialShareUrl"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区分享页面地址",clearable:""},model:{value:e.dialogForm.socialShareUrl,callback:function(a){e.$set(e.dialogForm,"socialShareUrl",a)},expression:"dialogForm.socialShareUrl"}})],1),t("el-form-item",{attrs:{label:"社区评论页面地址：",prop:"socialCommentUrl"}},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区评论页面地址",clearable:""},model:{value:e.dialogForm.socialCommentUrl,callback:function(a){e.$set(e.dialogForm,"socialCommentUrl",a)},expression:"dialogForm.socialCommentUrl"}})],1)],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(a){e.dialog.show=!1}}},[e._v(" 取 消 ")]),t("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)],1)},o=[],r=t("1da1"),i=t("5530"),s=(t("96cf"),t("4de4"),t("d3b7"),t("d81d"),t("b64b"),t("caad"),t("0fea")),c={name:"Secret-manage",data:function(){return{queryParams:{sourceId:"",page:1,limit:10},product_id:0,productList:[],loading:!1,tableData:[],total:0,dialog:{title:"新增秘钥",show:!1},dialogForm:{sourceId:"",appSrcret:"",appId:"",registerDisableTag:0,userInfoDisableTag:0,loginDisableTag:0,h5Srcret:"",thirdKeyForQQ:"",duibaRedirect:"",duibaAppKey:"",duibaSrcret:"",bluecore_mastersecret:"",bluecore_appkey:"",bluecore_appid:"",alipayAppId:"",alipayPrivateKey:"",alipayPublicKey:"",flashAndroidAppId:"",flashAndroidAppKey:"",flashIosAppId:"",flashIosAppKey:"",socialDetailUrl:"",socialShareUrl:"",socialCommentUrl:""},dialogRules:{appSrcret:[{required:!0,message:"请输入秘钥",trigger:"blur"}],appId:[{required:!0,message:"请输入appId",trigger:"blur"}]}}},watch:{product_id:function(e){this.queryParams.sourceId=this.productList.filter((function(a){return a.id==e}))[0].source_id||0,this.getList()}},methods:{getProductList:function(){var e=this;Object(s["mc"])({}).then((function(a){e.productList=a.data,e.product_id=e.productList[0].id}))},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){var e=this;Object.keys(this.dialogForm).map((function(a){["registerDisableTag","userInfoDisableTag","loginDisableTag"].includes(a)?e.dialogForm[a]=0:e.dialogForm[a]=""})),this.dialogForm.sourceId=this.queryParams.sourceId,this.dialog={title:"新增秘钥",show:!0}},handleEdit:function(e){var a=this,t=e.sourceId,l=e.id;this.resetForm("dialogForm"),Object(s["Vb"])({sourceId:t}).then((function(e){var t=e.code,o=e.data;200==t?(Object.keys(a.dialogForm).map((function(e){a.dialogForm[e]=o[e]})),a.dialog={title:"修改秘钥",show:!0,id:l}):a.$message.warning("获取详情失败")}))},handleDelete:function(e){var a=this,t=e.id,l=e.sourceId;this.$confirm("此操作将永久删除这条sourceId为".concat(l,"的产品, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["V"])({id:[t]}).then((function(e){var t=e.code,l=e.msg;200==t?a.$message.success(l):a.$message.error(l),a.getList()}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},enterDialog:function(){var e=this,a=this.dialog.id;this.$refs.dialogForm.validate((function(t){t&&(null!=a?(console.log("dialogForm",e.dialogForm),Object(s["G"])(Object(i["a"])(Object(i["a"])({},e.dialogForm),{},{id:a})).then((function(a){var t=a.code,l=a.msg;200==t?e.$message.success(l):e.$message.error(l),e.dialog.show=!1,e.getList()}))):Object(s["g"])(e.dialogForm).then((function(a){var t=a.code,l=a.msg;200==t?e.$message.success(l):e.$message.error(l),e.dialog.show=!1,e.getList()})))}))},getList:function(){var e=this,a=Object(i["a"])({},this.queryParams);this.loading=!0,Object(s["Wb"])(this.removePropertyOfNullFor0(a)).then((function(a){var t=a.data;200==a.code&&(e.tableData=t.list,e.total=t.totalCount)})).finally((function(){e.loading=!1}))}},created:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.getProductList();case 2:case"end":return a.stop()}}),a)})))()}},d=c,p=t("2877"),n=Object(p["a"])(d,l,o,!1,null,"0dc30a42",null);a["default"]=n.exports}}]);