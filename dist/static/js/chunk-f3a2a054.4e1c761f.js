(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3a2a054"],{"0385":function(t,e,r){"use strict";r("b130"),r("90aa"),r("e18c");var n=r("f753"),a=r.n(n),o=r("b705"),i=r("a18c"),s=r("5f87"),u=r("5041"),c=a.a.create({baseURL:u["d"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(s["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(r){if(console.log(r.data),200===r.status){var n=r.data,a=n.token_type+" "+n.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"07a29":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"architec-site"},[r("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[r("el-form-item",{attrs:{label:"站点名称："}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}})],1),r("el-form-item",{attrs:{label:"状态："}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.statusoptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",[r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.initcondition}},[t._v("重置")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.adddata}},[t._v("新增")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:t.dataList}},[r("el-table-column",{attrs:{label:"站点id",align:"center",prop:"id"}}),r("el-table-column",{attrs:{label:"站点名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"站点标识",align:"center",prop:"en_name","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"站点负责人",align:"center",prop:"user.name","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"负责人电话",align:"center",prop:"user.phone","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"状态",align:"center",prop:"status","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(r){return t.statuschange(e.row)}},model:{value:e.row.status,callback:function(r){t.$set(e.row,"status",r)},expression:"scope.row.status"}},t._l(t.statusoptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"上次登录时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{width:"200px",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(r){return t.editdata(e.row)}}})]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),r("el-dialog",{attrs:{width:"1400px","close-on-click-modal":!1,title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"dataForm",staticStyle:{display:"flex"},attrs:{model:t.form,rules:t.rules}},[r("div",{staticClass:"form-l",staticStyle:{width:"50%","padding-left":"100px"}},[r("el-form-item",{attrs:{"label-width":"120px",label:"站点名称",prop:"name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入站点名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"英文标识",prop:"en_name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入英文标识"},model:{value:t.form.en_name,callback:function(e){t.$set(t.form,"en_name",e)},expression:"form.en_name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"区域选择",prop:"zone_id"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.zone_id,callback:function(e){t.$set(t.form,"zone_id",e)},expression:"form.zone_id"}},t._l(t.zoneoptions,(function(t){return r("el-option",{key:t.id,attrs:{label:t.description,value:t.id}})})),1)],1),r("el-form-item",{attrs:{"label-width":"120px",label:"基础点击量随机",prop:"extra.random_view_range"}},[r("el-input-number",{attrs:{precision:0,max:t.form.extra.random_view_range.max||0,controls:!1},on:{input:function(e){return t.forceUpdate()}},model:{value:t.form.extra.random_view_range.min,callback:function(e){t.$set(t.form.extra.random_view_range,"min",e)},expression:"form.extra.random_view_range.min"}}),t._v(" ~ "),r("el-input-number",{attrs:{precision:0,min:t.form.extra.random_view_range.min||0,controls:!1},on:{input:function(e){return t.forceUpdate()}},model:{value:t.form.extra.random_view_range.max,callback:function(e){t.$set(t.form.extra.random_view_range,"max",e)},expression:"form.extra.random_view_range.max"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"点击量系数",prop:"extra.multiplying_factor"}},[r("el-input-number",{attrs:{precision:0,controls:!1},on:{input:function(e){return t.forceUpdate()}},model:{value:t.form.extra.multiplying_factor,callback:function(e){t.$set(t.form.extra,"multiplying_factor",e)},expression:"form.extra.multiplying_factor"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"LOGO：",prop:"logo"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.VUE_APP_BASE_API+"/api/upload/image",headers:t.importHeaders,name:"image","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.form.logo?r("img",{staticClass:"avatar",attrs:{src:t.form.logo}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{"label-width":"120px",label:"水印：",prop:"extra.watermark"}},[r("upload-single",{model:{value:t.form.extra.watermark,callback:function(e){t.$set(t.form.extra,"watermark",e)},expression:"form.extra.watermark"}})],1)],1),r("div",{staticClass:"form-r",staticStyle:{width:"50%","padding-left":"50px"}},[r("el-form-item",{attrs:{"label-width":"120px",label:"个性化域名",prop:"extra.custom_domain"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入个性化域名"},model:{value:t.form.extra.custom_domain,callback:function(e){t.$set(t.form.extra,"custom_domain",e)},expression:"form.extra.custom_domain"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"预览域名",prop:"extra.preview_domain"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入预览域名"},model:{value:t.form.extra.preview_domain,callback:function(e){t.$set(t.form.extra,"preview_domain",e)},expression:"form.extra.preview_domain"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"蓝云租户",prop:"extra.uni_site"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入蓝云租户"},model:{value:t.form.extra.uni_site,callback:function(e){t.$set(t.form.extra,"uni_site",e)},expression:"form.extra.uni_site"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"VMS租户",prop:"extra.vms_site_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入VMS租户"},model:{value:t.form.extra.vms_site_id,callback:function(e){t.$set(t.form.extra,"vms_site_id",e)},expression:"form.extra.vms_site_id"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据签名",prop:"extra.bigdata_settings.signature"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入大数据签名"},model:{value:t.form.extra.bigdata_settings.signature,callback:function(e){t.$set(t.form.extra.bigdata_settings,"signature",e)},expression:"form.extra.bigdata_settings.signature"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据租户ID",prop:"extra.bigdata_settings.customer_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入大数据租户ID"},model:{value:t.form.extra.bigdata_settings.customer_id,callback:function(e){t.$set(t.form.extra.bigdata_settings,"customer_id",e)},expression:"form.extra.bigdata_settings.customer_id"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据产品ID",prop:"extra.bigdata_settings.product_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入大数据产品ID"},model:{value:t.form.extra.bigdata_settings.product_id,callback:function(e){t.$set(t.form.extra.bigdata_settings,"product_id",e)},expression:"form.extra.bigdata_settings.product_id"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据秘钥",prop:"extra.bigdata_settings.secret"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入大数据秘钥"},model:{value:t.form.extra.bigdata_settings.secret,callback:function(e){t.$set(t.form.extra.bigdata_settings,"secret",e)},expression:"form.extra.bigdata_settings.secret"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"负责人姓名",prop:"site_manager_name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入负责人姓名"},model:{value:t.form.site_manager_name,callback:function(e){t.$set(t.form,"site_manager_name",e)},expression:"form.site_manager_name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"负责人手机号",prop:"site_manager_phone"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入负责人手机号"},model:{value:t.form.site_manager_phone,callback:function(e){t.$set(t.form,"site_manager_phone",e)},expression:"form.site_manager_phone"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"简介",prop:"introduction"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入简介"},model:{value:t.form.introduction,callback:function(e){t.$set(t.form,"introduction",e)},expression:"form.introduction"}})],1),r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"是否启用",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statusoptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"允许外部人员直接发布稿件",prop:"extra.allow_www_publish"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.extra.allow_www_publish,callback:function(e){t.$set(t.form.extra,"allow_www_publish",e)},expression:"form.extra.allow_www_publish"}},t._l(t.outloginoptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:t.closeDialog}},[t._v("取 消")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v("确 定")])],1)],1)],1)},a=[],o=(r("053b"),r("08ba"),r("fe8a"),r("0fea")),i=(r("61f7"),r("c2ee"),r("e60d")),s={name:"architec-site",data:function(){var t=sessionStorage.getItem("token");return{importHeaders:{Authorization:t},queryParams:{page:1,pageSize:10,name:"",status:""},loading:!0,dataList:[],zoneoptions:[],total:0,statusoptions:[{value:1,label:"是"},{value:0,label:"否"}],outloginoptions:[{value:"1",label:"是"},{value:"0",label:"否"}],dialogFormVisible:!1,form:{},rules:{name:[{required:!0,message:"请输入站点姓名",trigger:"blur"}],en_name:[{required:!0,message:"请输入英文标识",trigger:"blur"}],zone_id:[{required:!0,message:"请选择区域",trigger:"blur"}],logo:[{required:!0,message:"请选择logo",trigger:"blur"}],site_manager_name:[{required:!0,message:"请输入负责人姓名",trigger:"blur"}],site_manager_phone:[{required:!0,message:"请输入负责人手机号",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[]}},components:{uploadSingle:i["a"]},computed:{VUE_APP_BASE_API:function(){return this.imgurl2}},created:function(){this.initForm(),this.getList(),this.getzones()},methods:{forceUpdate:function(){this.$forceUpdate()},handleAvatarSuccess:function(t,e,r){this.form.logo=t.path,this.$forceUpdate()},beforeAvatarUpload:function(t){var e=t.size/1024/1024<20;return e||this.$message.error("上传头像图片大小不能超过 20MB!"),e},initcondition:function(){this.queryParams.name="",this.queryParams.status=""},handleQuery:function(){this.loading=!0,this.queryParams.page=1,this.getList()},getzones:function(){var t=this;Object(o["jc"])().then((function(e){t.zoneoptions=e.data}))},getList:function(){var t=this,e=JSON.parse(JSON.stringify(this.queryParams)),r=function(t){return Object.keys(t).forEach((function(e){t[e]||delete t[e]})),t};r(e),Object(o["cc"])(e).then((function(e){t.loading=!1,t.dataList=e.data,t.total=e.meta.pagination.total}))},statuschange:function(t){var e=this;Object(o["ob"])(t.id,t).then((function(t){e.$message({message:"修改成功",type:"success"}),e.getList()}))},adddata:function(){this.initForm(),console.log(this.form),this.dialogTitle="新增站点",this.dialogType="add",this.dialogFormVisible=!0},initForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields(),this.form={name:"",en_name:"",logo:"",status:1,introduction:"",site_manager_name:"",site_manager_phone:"",extra:{watermark:"",uni_site:"",vms_site_id:"",custom_domain:"",preview_domain:"",bigdata_settings:{signature:"",customer_id:"",product_id:"",secret:""},random_view_range:{min:"",max:""},multiplying_factor:1}}},editdata:function(t){var e=this;this.initForm(),this.dialogTitle="编辑站点",this.dialogType="edit",this.$nextTick((function(){e.form=JSON.parse(JSON.stringify(t)),console.log(e.form),e.form.site_manager_name=e.form.user.name,e.form.site_manager_phone=e.form.user.phone,e.form.extra||(e.form.extra={},e.form.extra.uni_site=""),e.form.extra.multiplying_factor||(e.form.extra.multiplying_factor=1,e.form.extra.random_view_range={},e.form.extra.random_view_range.min="",e.form.extra.random_view_range.max=""),e.form.extra.bigdata_settings||(e.form.extra.bigdata_settings={signature:"",customer_id:"",product_id:"",secret:""})})),this.dialogFormVisible=!0},closeDialog:function(){this.initForm(),this.dialogFormVisible=!1},enterDialog:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e)if("edit"==t.dialogType){var r=t.form;Object(o["ob"])(r.id,r).then((function(e){t.$message({message:"修改成功",type:"success"}),t.dialogFormVisible=!1,t.getList()}))}else{r=JSON.parse(JSON.stringify(t.form));var n=function(t){return Object.keys(t).forEach((function(e){t[e]||delete t[e]})),t};n(r),Object(o["r"])(r).then((function(e){t.$message({message:"新建成功",type:"success"}),t.dialogFormVisible=!1,t.getList()}))}}))}}},u=s,c=(r("13c9"),r("46c9"),r("cba8")),l=Object(c["a"])(u,n,a,!1,null,"9ef7602c",null);e["default"]=l.exports},"0fea":function(t,e,r){"use strict";r.d(e,"sb",(function(){return i})),r.d(e,"m",(function(){return s})),r.d(e,"ib",(function(){return u})),r.d(e,"T",(function(){return c})),r.d(e,"P",(function(){return l})),r.d(e,"Gb",(function(){return d})),r.d(e,"q",(function(){return m})),r.d(e,"nb",(function(){return p})),r.d(e,"Z",(function(){return f})),r.d(e,"Q",(function(){return b})),r.d(e,"bc",(function(){return h})),r.d(e,"w",(function(){return g})),r.d(e,"Ob",(function(){return _})),r.d(e,"vb",(function(){return v})),r.d(e,"v",(function(){return j})),r.d(e,"qb",(function(){return O})),r.d(e,"E",(function(){return x})),r.d(e,"bb",(function(){return w})),r.d(e,"R",(function(){return y})),r.d(e,"gc",(function(){return k})),r.d(e,"x",(function(){return S})),r.d(e,"hc",(function(){return P})),r.d(e,"y",(function(){return I})),r.d(e,"cc",(function(){return q})),r.d(e,"r",(function(){return $})),r.d(e,"ob",(function(){return z})),r.d(e,"jc",(function(){return L})),r.d(e,"dc",(function(){return U})),r.d(e,"Xb",(function(){return C})),r.d(e,"o",(function(){return T})),r.d(e,"kb",(function(){return A})),r.d(e,"V",(function(){return F})),r.d(e,"Yb",(function(){return D})),r.d(e,"n",(function(){return N})),r.d(e,"jb",(function(){return E})),r.d(e,"U",(function(){return M})),r.d(e,"k",(function(){return R})),r.d(e,"J",(function(){return V})),r.d(e,"oc",(function(){return J})),r.d(e,"Ub",(function(){return Q})),r.d(e,"gb",(function(){return B})),r.d(e,"Zb",(function(){return H})),r.d(e,"nc",(function(){return G})),r.d(e,"Vb",(function(){return K})),r.d(e,"l",(function(){return W})),r.d(e,"hb",(function(){return X})),r.d(e,"S",(function(){return Y})),r.d(e,"ac",(function(){return Z})),r.d(e,"p",(function(){return tt})),r.d(e,"mb",(function(){return et})),r.d(e,"Y",(function(){return rt})),r.d(e,"Wb",(function(){return nt})),r.d(e,"ec",(function(){return at})),r.d(e,"s",(function(){return ot})),r.d(e,"ab",(function(){return it})),r.d(e,"pb",(function(){return st})),r.d(e,"fc",(function(){return ut})),r.d(e,"t",(function(){return ct})),r.d(e,"lb",(function(){return lt})),r.d(e,"W",(function(){return dt})),r.d(e,"ic",(function(){return mt})),r.d(e,"u",(function(){return pt})),r.d(e,"wb",(function(){return ft})),r.d(e,"cb",(function(){return bt})),r.d(e,"I",(function(){return ht})),r.d(e,"Fb",(function(){return gt})),r.d(e,"X",(function(){return _t})),r.d(e,"Tb",(function(){return vt})),r.d(e,"Sb",(function(){return jt})),r.d(e,"j",(function(){return Ot})),r.d(e,"A",(function(){return xt})),r.d(e,"pc",(function(){return wt})),r.d(e,"Qb",(function(){return yt})),r.d(e,"Pb",(function(){return kt})),r.d(e,"db",(function(){return St})),r.d(e,"Cb",(function(){return Pt})),r.d(e,"Bb",(function(){return It})),r.d(e,"Db",(function(){return qt})),r.d(e,"Ab",(function(){return $t})),r.d(e,"Jb",(function(){return zt})),r.d(e,"Ib",(function(){return Lt})),r.d(e,"f",(function(){return Ut})),r.d(e,"D",(function(){return Ct})),r.d(e,"O",(function(){return Tt})),r.d(e,"ub",(function(){return At})),r.d(e,"z",(function(){return Ft})),r.d(e,"Hb",(function(){return Dt})),r.d(e,"e",(function(){return Nt})),r.d(e,"fb",(function(){return Et})),r.d(e,"N",(function(){return Mt})),r.d(e,"Nb",(function(){return Rt})),r.d(e,"rb",(function(){return Vt})),r.d(e,"h",(function(){return Jt})),r.d(e,"Lb",(function(){return Qt})),r.d(e,"xb",(function(){return Bt})),r.d(e,"a",(function(){return Ht})),r.d(e,"yb",(function(){return Gt})),r.d(e,"C",(function(){return Kt})),r.d(e,"K",(function(){return Wt})),r.d(e,"tb",(function(){return Xt})),r.d(e,"B",(function(){return Yt})),r.d(e,"Mb",(function(){return Zt})),r.d(e,"b",(function(){return te})),r.d(e,"mc",(function(){return ee})),r.d(e,"L",(function(){return re})),r.d(e,"zb",(function(){return ne})),r.d(e,"c",(function(){return ae})),r.d(e,"lc",(function(){return oe})),r.d(e,"M",(function(){return ie})),r.d(e,"Rb",(function(){return se})),r.d(e,"Kb",(function(){return ue})),r.d(e,"g",(function(){return ce})),r.d(e,"G",(function(){return le})),r.d(e,"i",(function(){return de})),r.d(e,"H",(function(){return me})),r.d(e,"Eb",(function(){return pe})),r.d(e,"F",(function(){return fe})),r.d(e,"kc",(function(){return be})),r.d(e,"d",(function(){return he})),r.d(e,"eb",(function(){return ge}));r("b4fb");var n=r("b775"),a=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(n["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function s(t){return Object(n["a"])({url:"/api/permissions",method:"post",params:t})}function u(t,e){return Object(n["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(n["a"])({url:"/api/permissions/"+t,method:"delete"})}function l(t){return Object(n["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/api/roles",method:"post",params:t})}function p(t,e){return Object(n["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(n["a"])({url:"/api/roles/"+t,method:"delete"})}function b(t){return Object(n["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function h(t){return Object(n["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(n["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function _(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/api/channels",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/api/users",method:"post",data:t})}function O(t,e){return Object(n["a"])({url:"/api/user/"+t,method:"patch",data:e})}function x(t,e){return Object(n["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function w(t){return Object(n["a"])({url:"/api/user/"+t,method:"delete"})}function y(t){return Object(n["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function k(t){return Object(n["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function S(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function P(t){return Object(n["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function I(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function q(t){return Object(n["a"])({url:"/api/sites",method:"get",params:t})}function $(t){return Object(n["a"])({url:"/api/sites",method:"post",data:t})}function z(t,e){return Object(n["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function L(){return Object(n["a"])({url:"/api/zones",method:"get"})}function U(t){return Object(n["a"])({url:"/api/sites/"+t,method:"get"})}function C(t){return Object(n["a"])({url:"/api/products",method:"get",params:t})}function T(t){return Object(n["a"])({url:"/api/products",method:"post",data:t})}function A(t,e){return Object(n["a"])({url:"/api/products/"+t,method:"patch",data:e})}function F(t){return Object(n["a"])({url:"/api/products/"+t,method:"delete"})}function D(t){return Object(n["a"])({url:"/api/product_versions",method:"get",params:t})}function N(t){return Object(n["a"])({url:"/api/product_versions",method:"post",data:t})}function E(t,e){return Object(n["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function M(t){return Object(n["a"])({url:"/api/product_versions/"+t,method:"delete"})}function R(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function V(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function J(t){return Object(n["a"])({url:"/api/channels/setSort",method:"post",data:t})}function Q(t){return Object(n["a"])({url:"/api/channels/"+t,method:"get"})}function B(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function H(t){return Object(n["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(n["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function K(t){return Object(n["a"])({url:"/api/categories",method:"get",params:t})}function W(t){return Object(n["a"])({url:"/api/categories",method:"post",data:t})}function X(t,e){return Object(n["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(n["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(n["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(n["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(n["a"])({url:"/api/resources/"+t,method:"post",data:e})}function rt(t){return Object(n["a"])({url:"/api/resources/"+t,method:"delete"})}function nt(t){return Object(n["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(n["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function st(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ut(t){return Object(n["a"])({url:"/api/programs",method:"get",params:t})}function ct(t){return Object(n["a"])({url:"/api/programs",method:"post",data:t})}function lt(t,e){return Object(n["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(n["a"])({url:"/api/programs/"+t,method:"delete"})}function mt(t){return Object(n["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function pt(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(n["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function bt(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ht(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(n["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function _t(t){return Object(n["a"])({url:"/api/replays/"+t,method:"delete"})}function vt(t){return Object(n["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function jt(t,e){return Object(n["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function Ot(t){return Object(n["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function xt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function wt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function yt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function kt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function St(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function It(t){return Object(o["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Lt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Tt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function At(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Ft(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Et(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Rt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Vt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Jt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginCreate",method:"post",data:t})}function Qt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginList",method:"post",data:t})}function Bt(t){return Object(n["a"])({url:"/api/departments",method:"get",params:t})}function Ht(t){return Object(n["a"])({url:"/api/departments",method:"post",data:t})}function Gt(t){return Object(n["a"])({url:"/api/departments/"+t,method:"get"})}function Kt(t,e){return Object(n["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function Wt(t){return Object(n["a"])({url:"/api/departments/".concat(t),method:"delete"})}function Xt(t){return Object(n["a"])({url:"/api/products/".concat(t),method:"get"})}function Yt(t,e){return Object(n["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Zt(){return Object(n["a"])({url:"/api/upload/getH5Dir",method:"get"})}function te(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function ee(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function re(t){return Object(n["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function ne(t){return Object(n["a"])({url:"/api/h5",method:"get",params:t})}function ae(t){return Object(n["a"])({url:"/api/h5",method:"post",data:t})}function oe(t,e){return Object(n["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function ie(t){return Object(n["a"])({url:"/api/h5/".concat(t),method:"delete"})}function se(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function ue(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function ce(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function le(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function de(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function me(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function pe(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function fe(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function be(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function he(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ge(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},1193:function(t,e,r){},"13c9":function(t,e,r){"use strict";r("cc89")},"2ab73":function(t,e,r){"use strict";r("e18c");var n=r("f753"),a=r.n(n),o=r("b705"),i=r("a18c"),s=r("5041"),u=a.a.create({baseURL:s["b"],timeout:6e4});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"46c9":function(t,e,r){"use strict";r("1193")},b60c:function(t,e,r){"use strict";r("b130"),r("90aa"),r("e18c");var n=r("f753"),a=r.n(n),o=r("b705"),i=r("a18c"),s=r("5f87"),u=r("5041"),c=a.a.create({baseURL:u["c"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(s["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(r){if(console.log(r.data),200===r.status){var n=r.data,a=n.token_type+" "+n.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},cc89:function(t,e,r){}}]);