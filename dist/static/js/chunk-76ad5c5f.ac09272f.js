(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76ad5c5f"],{"0385":function(e,t,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),s=a.a.create({baseURL:"http://10.30.10.158/api",timeout:5e3});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["d"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)})),t["a"]=s},"0fea":function(e,t,r){"use strict";r.d(t,"mb",(function(){return i})),r.d(t,"j",(function(){return s})),r.d(t,"cb",(function(){return c})),r.d(t,"N",(function(){return u})),r.d(t,"J",(function(){return l})),r.d(t,"vb",(function(){return d})),r.d(t,"n",(function(){return h})),r.d(t,"hb",(function(){return f})),r.d(t,"T",(function(){return p})),r.d(t,"K",(function(){return m})),r.d(t,"Ob",(function(){return b})),r.d(t,"t",(function(){return g})),r.d(t,"Bb",(function(){return v})),r.d(t,"pb",(function(){return y})),r.d(t,"s",(function(){return j})),r.d(t,"kb",(function(){return O})),r.d(t,"A",(function(){return w})),r.d(t,"V",(function(){return k})),r.d(t,"L",(function(){return x})),r.d(t,"Tb",(function(){return _})),r.d(t,"u",(function(){return S})),r.d(t,"Ub",(function(){return C})),r.d(t,"v",(function(){return $})),r.d(t,"Pb",(function(){return P})),r.d(t,"o",(function(){return N})),r.d(t,"ib",(function(){return L})),r.d(t,"Wb",(function(){return z})),r.d(t,"Qb",(function(){return q})),r.d(t,"Kb",(function(){return F})),r.d(t,"l",(function(){return A})),r.d(t,"eb",(function(){return U})),r.d(t,"P",(function(){return I})),r.d(t,"Lb",(function(){return V})),r.d(t,"k",(function(){return T})),r.d(t,"db",(function(){return D})),r.d(t,"O",(function(){return M})),r.d(t,"h",(function(){return K})),r.d(t,"E",(function(){return R})),r.d(t,"bc",(function(){return B})),r.d(t,"Hb",(function(){return E})),r.d(t,"ab",(function(){return J})),r.d(t,"Mb",(function(){return H})),r.d(t,"ac",(function(){return Q})),r.d(t,"Ib",(function(){return G})),r.d(t,"i",(function(){return W})),r.d(t,"bb",(function(){return X})),r.d(t,"M",(function(){return Y})),r.d(t,"Nb",(function(){return Z})),r.d(t,"m",(function(){return ee})),r.d(t,"gb",(function(){return te})),r.d(t,"S",(function(){return re})),r.d(t,"Jb",(function(){return ne})),r.d(t,"Rb",(function(){return ae})),r.d(t,"p",(function(){return oe})),r.d(t,"U",(function(){return ie})),r.d(t,"jb",(function(){return se})),r.d(t,"Sb",(function(){return ce})),r.d(t,"q",(function(){return ue})),r.d(t,"fb",(function(){return le})),r.d(t,"Q",(function(){return de})),r.d(t,"Vb",(function(){return he})),r.d(t,"r",(function(){return fe})),r.d(t,"qb",(function(){return pe})),r.d(t,"W",(function(){return me})),r.d(t,"D",(function(){return be})),r.d(t,"ub",(function(){return ge})),r.d(t,"R",(function(){return ve})),r.d(t,"Gb",(function(){return ye})),r.d(t,"Fb",(function(){return je})),r.d(t,"g",(function(){return Oe})),r.d(t,"x",(function(){return we})),r.d(t,"cc",(function(){return ke})),r.d(t,"Db",(function(){return xe})),r.d(t,"Cb",(function(){return _e})),r.d(t,"X",(function(){return Se})),r.d(t,"sb",(function(){return Ce})),r.d(t,"yb",(function(){return $e})),r.d(t,"xb",(function(){return Pe})),r.d(t,"e",(function(){return Ne})),r.d(t,"z",(function(){return Le})),r.d(t,"I",(function(){return ze})),r.d(t,"ob",(function(){return qe})),r.d(t,"w",(function(){return Fe})),r.d(t,"wb",(function(){return Ae})),r.d(t,"d",(function(){return Ue})),r.d(t,"Z",(function(){return Ie})),r.d(t,"H",(function(){return Ve})),r.d(t,"Ab",(function(){return Te})),r.d(t,"lb",(function(){return De})),r.d(t,"nb",(function(){return Me})),r.d(t,"y",(function(){return Ke})),r.d(t,"zb",(function(){return Re})),r.d(t,"a",(function(){return Be})),r.d(t,"Zb",(function(){return Ee})),r.d(t,"F",(function(){return Je})),r.d(t,"rb",(function(){return He})),r.d(t,"b",(function(){return Qe})),r.d(t,"Yb",(function(){return Ge})),r.d(t,"G",(function(){return We})),r.d(t,"Eb",(function(){return Xe})),r.d(t,"f",(function(){return Ye})),r.d(t,"C",(function(){return Ze})),r.d(t,"tb",(function(){return et})),r.d(t,"B",(function(){return tt})),r.d(t,"Xb",(function(){return rt})),r.d(t,"c",(function(){return nt})),r.d(t,"Y",(function(){return at}));r("99af");var n=r("b775"),a=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(n["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function s(e){return Object(n["a"])({url:"/api/permissions",method:"post",params:e})}function c(e,t){return Object(n["a"])({url:"/api/permissions/"+e,method:"patch",params:t})}function u(e){return Object(n["a"])({url:"/api/permissions/"+e,method:"delete"})}function l(e){return Object(n["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:e}})}function d(e){return Object(n["a"])({url:"/api/system/data",method:"get",params:e})}function h(e){return Object(n["a"])({url:"/api/roles",method:"post",params:e})}function f(e,t){return Object(n["a"])({url:"/api/roles/"+e,method:"patch",params:t})}function p(e){return Object(n["a"])({url:"/api/roles/"+e,method:"delete"})}function m(e){return Object(n["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:e}})}function b(e){return Object(n["a"])({url:"/api/roles/"+e+"/permission",method:"get"})}function g(e,t){return Object(n["a"])({url:"/api/roles/"+e+"/assignPermission",method:"post",params:{permissions:t}})}function v(e){return Object(n["a"])({url:"/api/system/data",method:"get",params:e})}function y(e){return Object(n["a"])({url:"/api/channels",method:"get",params:e})}function j(e){return Object(n["a"])({url:"/api/users",method:"post",data:e})}function O(e,t){return Object(n["a"])({url:"/api/user/"+e,method:"patch",data:t})}function w(e,t){return Object(n["a"])({url:"/api/users/setStatus",method:"post",params:{ids:e,status:t}})}function k(e){return Object(n["a"])({url:"/api/user/"+e,method:"delete"})}function x(e){return Object(n["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:e}})}function _(e){return Object(n["a"])({url:"/api/user/"+e+"/permission",method:"get"})}function S(e,t){return Object(n["a"])({url:"/api/user/"+e+"/assignPermission",method:"post",params:{permissions:t}})}function C(e){return Object(n["a"])({url:"/api/user/"+e+"/roles",method:"get"})}function $(e,t){return Object(n["a"])({url:"/api/user/"+e+"/assignRole",method:"post",params:{roles:t}})}function P(e){return Object(n["a"])({url:"/api/sites",method:"get",params:e})}function N(e){return Object(n["a"])({url:"/api/sites",method:"post",data:e})}function L(e,t){return Object(n["a"])({url:"/api/sites/"+e,method:"patch",data:t})}function z(){return Object(n["a"])({url:"/api/zones",method:"get"})}function q(e){return Object(n["a"])({url:"/api/sites/"+e,method:"get"})}function F(e){return Object(n["a"])({url:"/api/products",method:"get",params:e})}function A(e){return Object(n["a"])({url:"/api/products",method:"post",data:e})}function U(e,t){return Object(n["a"])({url:"/api/products/"+e,method:"patch",data:t})}function I(e){return Object(n["a"])({url:"/api/products/"+e,method:"delete"})}function V(e){return Object(n["a"])({url:"/api/product_versions",method:"get",params:e})}function T(e){return Object(n["a"])({url:"/api/product_versions",method:"post",data:e})}function D(e,t){return Object(n["a"])({url:"/api/product_versions/"+e,method:"patch",data:t})}function M(e){return Object(n["a"])({url:"/api/product_versions/"+e,method:"delete"})}function K(e){return Object(n["a"])({url:"/api/channels",method:"post",data:e})}function R(e){return Object(n["a"])({url:"/api/channels/"+e,method:"delete"})}function B(e){return Object(n["a"])({url:"/api/channels/setSort",method:"post",data:e})}function E(e){return Object(n["a"])({url:"/api/channels/"+e,method:"get"})}function J(e,t){return Object(n["a"])({url:"/api/channels/"+e,method:"patch",data:t})}function H(e){return Object(n["a"])({url:"/api/news/recycleBin",method:"get",params:e})}function Q(e){return Object(n["a"])({url:"/api/news/restore",method:"post",params:{ids:e}})}function G(e){return Object(n["a"])({url:"/api/categories",method:"get",params:e})}function W(e){return Object(n["a"])({url:"/api/categories",method:"post",data:e})}function X(e,t){return Object(n["a"])({url:"/api/categories/"+e,method:"patch",data:t})}function Y(e){return Object(n["a"])({url:"/api/categories/"+e,method:"delete"})}function Z(e){return Object(n["a"])({url:"/api/resources",method:"get",params:e})}function ee(e){return Object(n["a"])({url:"/api/resources",method:"post",data:e})}function te(e,t){return Object(n["a"])({url:"/api/resources/"+e,method:"post",data:t})}function re(e){return Object(n["a"])({url:"/api/resources/"+e,method:"delete"})}function ne(e){return Object(n["a"])({url:"/api/resources/myResources",method:"get",params:e})}function ae(e){return Object(n["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:e})}function oe(e){return Object(n["a"])({url:"/api/channels",method:"post",data:e})}function ie(e){return Object(n["a"])({url:"/api/channels/"+e,method:"delete"})}function se(e,t){return Object(n["a"])({url:"/api/channels/"+e,method:"patch",data:t})}function ce(e){return Object(n["a"])({url:"/api/programs",method:"get",params:e})}function ue(e){return Object(n["a"])({url:"/api/programs",method:"post",data:e})}function le(e,t){return Object(n["a"])({url:"/api/programs/"+e,method:"patch",data:t})}function de(e){return Object(n["a"])({url:"/api/programs/"+e,method:"delete"})}function he(e){return Object(n["a"])({url:"/api/videos/vms_channels/?cloud=".concat(e),method:"get"})}function fe(e){return Object(n["a"])({url:"/api/channels",method:"post",data:e})}function pe(e){return Object(n["a"])({url:"/api/channels/".concat(e,"/getChild"),method:"get"})}function me(e,t){return Object(n["a"])({url:"/api/channels/"+e,method:"patch",data:t})}function be(e){return Object(n["a"])({url:"/api/channels/"+e,method:"delete"})}function ge(e){return Object(n["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:e})}function ve(e){return Object(n["a"])({url:"/api/replays/"+e,method:"delete"})}function ye(e){return Object(n["a"])({url:"/api/broadcasts/".concat(e),method:"get"})}function je(e,t){return Object(n["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(e,"&stream_id=").concat(t),method:"get"})}function Oe(e){return Object(n["a"])({url:"/api/broadcastStatement",method:"post",data:e})}function we(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function ke(e){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:e})}function xe(e){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:e})}function _e(e){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:e})}function Se(e){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:e})}function Ce(e){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:e})}function $e(e){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:e})}function Pe(e){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:e})}function Ne(e){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:e})}function Le(e){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:e})}function ze(e){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:e})}function qe(e){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:e})}function Fe(e){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function Ae(e){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:e})}function Ue(e){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:e})}function Ie(e){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:e})}function Ve(e){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:e})}function Te(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function De(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Me(e){return Object(n["a"])({url:"/api/products/".concat(e),method:"get"})}function Ke(e,t){return Object(n["a"])({url:"/api/products/".concat(e),method:"patch",data:t})}function Re(){return Object(n["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Be(e){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:e})}function Ee(e){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:e})}function Je(e){return Object(n["a"])({url:"/api/upload/rmdir",method:"post",data:e})}function He(e){return Object(n["a"])({url:"/api/h5",method:"get",params:e})}function Qe(e){return Object(n["a"])({url:"/api/h5",method:"post",data:e})}function Ge(e,t){return Object(n["a"])({url:"/api/h5/".concat(e),method:"post",data:t})}function We(e){return Object(n["a"])({url:"/api/h5/".concat(e),method:"delete"})}function Xe(e){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:e})}function Ye(e){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:e})}function Ze(e){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:e})}function et(e){return Object(a["a"])({url:"/publish/list",method:"post",data:e})}function tt(e){return Object(a["a"])({url:"/publish/delete?id=".concat(e),method:"post"})}function rt(e){return Object(a["a"])({url:"/meal/openList",method:"post",data:e})}function nt(e){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:e})}function at(e){return Object(a["a"])({url:"/publish/update",method:"post",data:e})}},"197d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"staff-staff"},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[r("el-form-item",{attrs:{label:"关键字："}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.keyword,callback:function(t){e.$set(e.queryParams,"keyword",t)},expression:"queryParams.keyword"}})],1),r("el-form-item",[r("el-button",{staticStyle:{"margin-right":"50px"},attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.adddata}},[e._v("新增")]),r("el-button",{attrs:{type:"success",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:function(t){return e.changearrstatus(1)}}},[e._v("批量启用")]),r("el-button",{attrs:{type:"warning",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:function(t){return e.changearrstatus(2)}}},[e._v("批量禁用")]),r("el-button",{attrs:{type:"danger",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:function(t){return e.changearrstatus(0)}}},[e._v("批量冻结")]),r("el-button",{attrs:{type:"danger",disabled:0==e.multipleSelection.length,size:"mini"},on:{click:e.delarrdata}},[e._v("批量删除")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:e.dataList},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),r("el-table-column",{attrs:{label:"头像",width:"80px",align:"center",prop:"avatar","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[r("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:t.row.avatar||e.useravatar,alt:""}})]}}])}),r("el-table-column",{attrs:{label:"姓名",align:"center",prop:"name","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"手机号",align:"center",prop:"phone","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"邮箱",align:"center",prop:"email","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"状态",align:"center",prop:"status","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(r){return e.statuschange(t.row)}},model:{value:t.row.status,callback:function(r){e.$set(t.row,"status",r)},expression:"scope.row.status"}},e._l(e.statusoptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"上次登录时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{width:"280px",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(r){return e.editdata(t.row)}}}),r("Iconbutton",{attrs:{icontype:"qx",label:"权限"},on:{fatherMethod:function(r){return e.editjurisdiction(t.row)}}}),r("Iconbutton",{attrs:{icontype:"js",label:"角色"},on:{fatherMethod:function(r){return e.editroledata(t.row)}}}),r("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(r){return e.handleDelete(t.row)}}})]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),r("el-dialog",{attrs:{width:"700px",title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-dialog",{attrs:{width:"600px",title:"栏目权限",visible:e.innerVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t}}},[r("el-tree",{ref:"tree",attrs:{data:e.channeltree,"default-checked-keys":e.channeltreechoose,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps},on:{"check-change":e.checkChange}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.innercloseDialog}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.innerenterDialog}},[e._v("确 定")])],1)],1),r("el-form",{ref:"dataForm",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{"label-width":"120px",label:"用户姓名",prop:"name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"头像：",prop:"avatar"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.VUE_APP_BASE_API+"/api/upload/image",headers:e.importHeaders,name:"image","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.form.avatar?r("img",{staticClass:"avatar",attrs:{src:e.form.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{"label-width":"120px",label:"手机号",prop:"phone"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"邮箱",prop:"email"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"设置栏目权限"}},[r("el-button",{attrs:{size:"mini",type:"success"},on:{click:e.showchannel}},[e._v("权限")])],1),r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"允许外网登录",prop:"extra.allow_www_login"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.extra.allow_www_login,callback:function(t){e.$set(e.form.extra,"allow_www_login",t)},expression:"form.extra.allow_www_login"}},e._l(e.www_loginoptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),"edit"==e.dialogType?r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"是否启用",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusoptions,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e()],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v("确 定")])],1)],1),e.drawer?r("el-drawer",{attrs:{visible:e.drawer,"with-header":!1,size:"40%",title:"用户直接权限配置"},on:{"update:visible":function(t){e.drawer=t}}},[r("el-tabs",{staticClass:"role-box",attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"用户直接权限菜单"}},[r("el-tree",{ref:"roletree",attrs:{data:e.treedata,"default-checked-keys":e.treechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.roledefaultProps},on:{check:e.nodeclick,"check-change":e.rolecheckChange}})],1)],1),r("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[r("el-button",{staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:e.cancelrole}},[e._v("取消")]),r("el-button",{staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:e.surerole}},[e._v("确 定")])],1)],1):e._e(),e.userroledrawer?r("el-drawer",{attrs:{visible:e.userroledrawer,"with-header":!1,size:"40%",title:"角色配置"},on:{"update:visible":function(t){e.userroledrawer=t}}},[r("el-tabs",{staticClass:"userrole-box",attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"用户角色菜单"}},[r("el-tree",{ref:"userroletree",attrs:{data:e.userroletreedata,"default-checked-keys":e.userroletreechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:e.roledefaultProps},on:{"check-change":e.userrolecheckChange}})],1)],1),r("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[r("el-button",{staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:e.userrolecancelrole}},[e._v("取消")]),r("el-button",{staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:e.userrolesurerole}},[e._v("确 定")])],1)],1):e._e()],1)},a=[],o=r("53ca"),i=(r("a15b"),r("d81d"),r("99af"),r("a434"),r("ac1f"),r("1276"),r("b64b"),r("0fea")),s=r("61f7"),c={name:"staff-list",data:function(){var e=sessionStorage.getItem("token");return{drawer:!1,treedata:[],treechoosedata:[],roledefaultProps:{children:"children",label:"remarks"},chooseid:void 0,userroledrawer:!1,userroletreedata:[],userroletreechoosedata:[],useravatar:r("3f1e"),importHeaders:{Authorization:e},innerVisible:!1,defaultProps:{children:"children",label:"name"},channeltree:[],channeltreechoose:[],recordtree:[],queryParams:{page:1,pageSize:10,keyword:""},loading:!0,dataList:[],total:0,www_loginoptions:[{value:"0",label:"否"},{value:"1",label:"是"}],statusoptions:[{value:"1",label:"启用"},{value:"2",label:"冻结"},{value:"0",label:"禁用"}],dialogFormVisible:!1,form:{name:"",phone:"",avatar:"",email:"",status:"",extra:{allow_www_login:"0"}},rules:{name:[{required:!0,message:"请输入用户姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[]}},computed:{VUE_APP_BASE_API:function(){return"http://batrix-local.cztv.com"}},created:function(){this.getList()},methods:{userrolecancelrole:function(){this.userroledrawer=!1},userrolesurerole:function(){var e=this,t=this.$refs.userroletree.getCheckedKeys(),r=t.map((function(e){return e})).join(",");Object(i["v"])(this.chooseid,r).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList(),e.userroledrawer=!1):e.$message({message:t.message,type:"warning"})}))},cancelrole:function(){this.drawer=!1},surerole:function(){var e=this,t=this.$refs.roletree.getCheckedKeys(),r=t.map((function(e){return e})).join(",");Object(i["u"])(this.chooseid,r).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList(),e.drawer=!1):e.$message({message:t.message,type:"warning"})}))},editroledata:function(e){var t=this;this.userroletreechoosedata=[],this.userroletreedata=[],this.userroledrawer=!0,this.chooseid=e.id,Object(i["Ub"])(e.id).then((function(e){console.log(e),t.userroletreedata=e.data;var r=JSON.parse(JSON.stringify(t.userroletreedata)),n=[];function a(e){for(var t=0;t<e.length;t++)n=n.concat(e[t]),e[t].children&&a(e[t].children)}a(r);for(var o=0;o<n.length;o++)n[o].own&&t.userroletreechoosedata.push(n[o].id);console.log(t.userroletreechoosedata)}))},editjurisdiction:function(e){var t=this;this.treechoosedata=[],this.treedata=[],this.drawer=!0,this.chooseid=e.id,Object(i["Tb"])(e.id).then((function(e){t.treedata=e.data;var r=JSON.parse(JSON.stringify(t.treedata)),n=[];function a(e){for(var t=0;t<e.length;t++)n=n.concat(e[t]),e[t].children&&a(e[t].children)}a(r);for(var o=0;o<n.length;o++)n[o].own&&t.treechoosedata.push(n[o].id)}))},userrolecheckChange:function(e,t,r){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var n=this.$refs.userroletree.getNode(e.id),a=this.$refs.userroletree.getCheckedKeys();if(t)for(var o=n.level;o>1;o--)n.parent.checked||(n=n.parent,a.push(n.data.id));else if(n.childNodes)for(var i=0;i<n.childNodes.length;i++)a.remove(n.childNodes[i].key);this.$refs.userroletree.setCheckedKeys(a)},rolecheckChange:function(e,t,r){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var n=this.$refs.roletree.getNode(e.id),a=this.$refs.roletree.getCheckedKeys();if(t)for(var o=n.level;o>1;o--)n.parent.checked||(n=n.parent,a.push(n.data.id));else if(n.childNodes)for(var i=0;i<n.childNodes.length;i++)a.remove(n.childNodes[i].key);this.$refs.roletree.setCheckedKeys(a)},showchannel:function(){this.innerVisible=!0,this.getChannelsList()},checkChange:function(e,t,r){Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var n=this.$refs.tree.getNode(e.id),a=this.$refs.tree.getCheckedKeys();if(t){var o=function e(t){if(t.childNodes!=[])for(var r=0;r<t.childNodes.length;r++)t.childNodes[r].checked&&a.remove(t.childNodes[r].key),e(t.childNodes[r])};o(n);for(var i=n.level;i>1;i--)n.parent.checked&&a.remove(n.parent.key),n=n.parent}this.$refs.tree.setCheckedKeys(a)},nodeclick:function(e,t){function r(e){if(e.childNodes)for(var t=0;t<e.childNodes.length;t++)n.push(e.childNodes[t].key),e.childNodes[t].childNodes&&r(e.childNodes[t])}var n=this.$refs.roletree.getCheckedKeys();if(t.checkedKeys.indexOf(e.id)>-1){var a=this.$refs.roletree.getNode(e.id);r(a),this.$refs.roletree.setCheckedKeys(n)}},handleAvatarSuccess:function(e,t,r){this.form.avatar=e.path,this.$forceUpdate()},beforeAvatarUpload:function(e){var t=e.size/1024/1024<20;return t||this.$message.error("上传头像图片大小不能超过 20MB!"),t},handleQuery:function(){this.loading=!0,this.queryParams.page=1,this.getList()},changearrstatus:function(e){var t=this,r=this.multipleSelection.map((function(e){return e.id})).join(",");Object(i["A"])(r,e).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})}))},getChannelsList:function(){var e=this;Object(i["pb"])().then((function(t){e.channeltree=t}))},getList:function(){var e=this,t={model:"User"};Object(i["Bb"])(Object.assign(t,this.queryParams)).then((function(t){e.loading=!1,e.dataList=t.data,e.total=t.total}))},statuschange:function(e){var t=this;Object(i["kb"])(e.id,e).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})}))},adddata:function(){this.initForm(),this.dialogTitle="新增用户",this.dialogType="add",this.dialogFormVisible=!0},initForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields(),this.form={name:"",phone:"",avatar:"",email:"",status:"",extra:{allow_www_login:"0"}},this.recordtree=[],this.channeltreechoose=[]},editdata:function(e){this.initForm(),this.dialogTitle="编辑用户",this.dialogType="edit",this.form=JSON.parse(JSON.stringify(e)),console.log(this.form),this.form.extra||(this.form.extra={}),this.getChannelsList();try{var t=this.form.extra.channel_limit.split(",");this.recordtree=t,this.channeltreechoose=t}catch(r){}this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除id为"+e.id+"的权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["V"])(e.id).then((function(e){t.$message({message:"删除成功",type:"success"}),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},delarrdata:function(){var e=this,t=this.multipleSelection.map((function(e){return e.id})).join(",");this.$confirm("此操作将永久删除id为"+t+"的权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["L"])(t).then((function(t){e.$message({message:"删除成功",type:"success"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},innercloseDialog:function(){this.channeltreechoose=this.recordtree,this.$refs.tree.setCheckedKeys(this.channeltreechoose),this.innerVisible=!1},innerenterDialog:function(){this.channeltreechoose=this.$refs.tree.getCheckedKeys(),this.recordtree=this.channeltreechoose,this.innerVisible=!1},closeDialog:function(){this.initForm(),this.dialogFormVisible=!1},toFormData:function(e){var t=new FormData;for(var r in e)n(e[r],r);function n(e,r){if(void 0==e||"function"==typeof e)return!1;if("object"!=Object(o["a"])(e))t.append(r,e);else if(e instanceof Array)if(0==e.length)t.append("".concat(r),"");else for(var a in e)for(var i in e[a])n(e[a][i],"".concat(r,"[").concat(a,"].").concat(i));else{var s=Object.keys(e);if(-1==s.indexOf("uid"))for(var c in e)n(e[c],"".concat(r,".").concat(c));else t.append("".concat(r),e)}}return t},enterDialog:function(){var e=this;Object(s["e"])(this.form.phone)?!this.form.email||Object(s["d"])(this.form.email)?this.$refs["dataForm"].validate((function(t){if(t)if("edit"==e.dialogType){var r=e.channeltreechoose.map((function(e){return e})).join(","),n=e.form;n.extra.channel_limit=r,Object(i["kb"])(n.id,n).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.dialogFormVisible=!1,e.getList()):e.$message({message:t.message,type:"warning"})}))}else{r=e.channeltreechoose.map((function(e){return e})).join(","),n=e.form;n.extra.channel_limit=r,console.log(n),Object(i["s"])(n).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.dialogFormVisible=!1,e.getList()):e.$message({message:t.message,type:"warning"})}))}})):this.$message({message:"请输入正确的邮箱",type:"error"}):this.$message({message:"请输入正确的手机号",type:"error"})},handleSelectionChange:function(e){this.multipleSelection=e}}},u=c,l=(r("b77a"),r("62e7"),r("2877")),d=Object(l["a"])(u,n,a,!1,null,"f131ca9c",null);t["default"]=d.exports},"2ab73":function(e,t,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),s=a.a.create({baseURL:"http://10.30.10.71:8080",timeout:6e4});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["d"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)}))},"3f1e":function(e,t,r){e.exports=r.p+"static/img/useravatar.e7e2147c.jpg"},"57a4":function(e,t,r){},"62e7":function(e,t,r){"use strict";r("844d")},"844d":function(e,t,r){},b60c:function(e,t,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),s=a.a.create({baseURL:"http://10.30.10.158/adm/fusion",timeout:5e3});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["d"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)})),t["a"]=s},b77a:function(e,t,r){"use strict";r("57a4")}}]);