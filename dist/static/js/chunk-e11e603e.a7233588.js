(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e11e603e"],{"0385":function(t,e,r){"use strict";r("08ba"),r("b130"),r("90aa"),r("e18c"),r("e35a"),r("5e9f");var a=r("f753"),n=r.n(a),o=r("b705"),i=r("a18c"),u=r("5f87"),s=r("5041"),c=n.a.create({baseURL:s["d"],timeout:5e3}),l=!1,d=[];function p(t){d.forEach((function(e){e(t)})),d=[]}function m(t){d.push(t)}c.interceptors.request.use((function(t){if(t.headers.Authorization=sessionStorage.getItem("token"),sessionStorage.getItem("token")&&Object(u["d"])()&&(!t.url.includes("/api/authorizations")||!t.url.includes("api/authorizations/wwwLogin"))){l||(l=!0,n()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:"Basic "+sessionStorage.getItem("token")}}).then((function(t){if(l=!1,console.log(t.data),200===t.status){var e=t.data,r=e.token_type+" "+e.access_token,a=(new Date).getTime(),n=e.expires_in;sessionStorage.setItem("token",r),sessionStorage.setItem("tokenTime",n),sessionStorage.setItem("tokenQueryTime",a),p(r)}})).catch((function(){i["c"].push({path:"/login"}),l=!1})));var e=new Promise((function(e){m((function(r){t.headers.Authorization=r,t.url=t.url.replace(t.baseURL,""),e(t)}))}));return e}return t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0fea":function(t,e,r){"use strict";r.d(e,"sb",(function(){return i})),r.d(e,"m",(function(){return u})),r.d(e,"ib",(function(){return s})),r.d(e,"T",(function(){return c})),r.d(e,"P",(function(){return l})),r.d(e,"Gb",(function(){return d})),r.d(e,"q",(function(){return p})),r.d(e,"nb",(function(){return m})),r.d(e,"Z",(function(){return f})),r.d(e,"Q",(function(){return b})),r.d(e,"bc",(function(){return h})),r.d(e,"w",(function(){return g})),r.d(e,"Ob",(function(){return j})),r.d(e,"vb",(function(){return y})),r.d(e,"v",(function(){return O})),r.d(e,"qb",(function(){return v})),r.d(e,"E",(function(){return I})),r.d(e,"bb",(function(){return F})),r.d(e,"R",(function(){return S})),r.d(e,"gc",(function(){return w})),r.d(e,"x",(function(){return k})),r.d(e,"hc",(function(){return x})),r.d(e,"y",(function(){return A})),r.d(e,"cc",(function(){return D})),r.d(e,"r",(function(){return P})),r.d(e,"ob",(function(){return L})),r.d(e,"jc",(function(){return $})),r.d(e,"dc",(function(){return K})),r.d(e,"Xb",(function(){return U})),r.d(e,"o",(function(){return T})),r.d(e,"kb",(function(){return _})),r.d(e,"V",(function(){return q})),r.d(e,"Yb",(function(){return R})),r.d(e,"n",(function(){return C})),r.d(e,"jb",(function(){return Q})),r.d(e,"U",(function(){return z})),r.d(e,"k",(function(){return E})),r.d(e,"J",(function(){return M})),r.d(e,"oc",(function(){return N})),r.d(e,"Ub",(function(){return B})),r.d(e,"gb",(function(){return H})),r.d(e,"Zb",(function(){return J})),r.d(e,"nc",(function(){return X})),r.d(e,"Vb",(function(){return G})),r.d(e,"l",(function(){return V})),r.d(e,"hb",(function(){return W})),r.d(e,"S",(function(){return Y})),r.d(e,"ac",(function(){return Z})),r.d(e,"p",(function(){return tt})),r.d(e,"mb",(function(){return et})),r.d(e,"Y",(function(){return rt})),r.d(e,"Wb",(function(){return at})),r.d(e,"ec",(function(){return nt})),r.d(e,"s",(function(){return ot})),r.d(e,"ab",(function(){return it})),r.d(e,"pb",(function(){return ut})),r.d(e,"fc",(function(){return st})),r.d(e,"t",(function(){return ct})),r.d(e,"lb",(function(){return lt})),r.d(e,"W",(function(){return dt})),r.d(e,"ic",(function(){return pt})),r.d(e,"u",(function(){return mt})),r.d(e,"wb",(function(){return ft})),r.d(e,"cb",(function(){return bt})),r.d(e,"I",(function(){return ht})),r.d(e,"Fb",(function(){return gt})),r.d(e,"X",(function(){return jt})),r.d(e,"Tb",(function(){return yt})),r.d(e,"Sb",(function(){return Ot})),r.d(e,"j",(function(){return vt})),r.d(e,"A",(function(){return It})),r.d(e,"pc",(function(){return Ft})),r.d(e,"Qb",(function(){return St})),r.d(e,"Pb",(function(){return wt})),r.d(e,"db",(function(){return kt})),r.d(e,"Cb",(function(){return xt})),r.d(e,"Bb",(function(){return At})),r.d(e,"Db",(function(){return Dt})),r.d(e,"Ab",(function(){return Pt})),r.d(e,"Jb",(function(){return Lt})),r.d(e,"Ib",(function(){return $t})),r.d(e,"f",(function(){return Kt})),r.d(e,"D",(function(){return Ut})),r.d(e,"O",(function(){return Tt})),r.d(e,"ub",(function(){return _t})),r.d(e,"z",(function(){return qt})),r.d(e,"Hb",(function(){return Rt})),r.d(e,"e",(function(){return Ct})),r.d(e,"fb",(function(){return Qt})),r.d(e,"N",(function(){return zt})),r.d(e,"Nb",(function(){return Et})),r.d(e,"rb",(function(){return Mt})),r.d(e,"h",(function(){return Nt})),r.d(e,"Lb",(function(){return Bt})),r.d(e,"xb",(function(){return Ht})),r.d(e,"a",(function(){return Jt})),r.d(e,"yb",(function(){return Xt})),r.d(e,"C",(function(){return Gt})),r.d(e,"K",(function(){return Vt})),r.d(e,"tb",(function(){return Wt})),r.d(e,"B",(function(){return Yt})),r.d(e,"Mb",(function(){return Zt})),r.d(e,"b",(function(){return te})),r.d(e,"mc",(function(){return ee})),r.d(e,"L",(function(){return re})),r.d(e,"zb",(function(){return ae})),r.d(e,"c",(function(){return ne})),r.d(e,"lc",(function(){return oe})),r.d(e,"M",(function(){return ie})),r.d(e,"Rb",(function(){return ue})),r.d(e,"Kb",(function(){return se})),r.d(e,"g",(function(){return ce})),r.d(e,"G",(function(){return le})),r.d(e,"i",(function(){return de})),r.d(e,"H",(function(){return pe})),r.d(e,"Eb",(function(){return me})),r.d(e,"F",(function(){return fe})),r.d(e,"kc",(function(){return be})),r.d(e,"d",(function(){return he})),r.d(e,"eb",(function(){return ge}));r("b4fb");var a=r("b775"),n=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(a["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(a["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(a["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(a["a"])({url:"/api/permissions/"+t,method:"delete"})}function l(t){return Object(a["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(a["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(a["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(a["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(a["a"])({url:"/api/roles/"+t,method:"delete"})}function b(t){return Object(a["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function h(t){return Object(a["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(a["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function j(t){return Object(a["a"])({url:"/api/system/data",method:"get",params:t})}function y(t){return Object(a["a"])({url:"/api/channels",method:"get",params:t})}function O(t){return Object(a["a"])({url:"/api/users",method:"post",data:t})}function v(t,e){return Object(a["a"])({url:"/api/user/"+t,method:"patch",data:e})}function I(t,e){return Object(a["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function F(t){return Object(a["a"])({url:"/api/user/"+t,method:"delete"})}function S(t){return Object(a["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function w(t){return Object(a["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function k(t,e){return Object(a["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function x(t){return Object(a["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function A(t,e){return Object(a["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function D(t){return Object(a["a"])({url:"/api/sites",method:"get",params:t})}function P(t){return Object(a["a"])({url:"/api/sites",method:"post",data:t})}function L(t,e){return Object(a["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function $(){return Object(a["a"])({url:"/api/zones",method:"get"})}function K(t){return Object(a["a"])({url:"/api/sites/"+t,method:"get"})}function U(t){return Object(a["a"])({url:"/api/products",method:"get",params:t})}function T(t){return Object(a["a"])({url:"/api/products",method:"post",data:t})}function _(t,e){return Object(a["a"])({url:"/api/products/"+t,method:"patch",data:e})}function q(t){return Object(a["a"])({url:"/api/products/"+t,method:"delete"})}function R(t){return Object(a["a"])({url:"/api/product_versions",method:"get",params:t})}function C(t){return Object(a["a"])({url:"/api/product_versions",method:"post",data:t})}function Q(t,e){return Object(a["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function z(t){return Object(a["a"])({url:"/api/product_versions/"+t,method:"delete"})}function E(t){return Object(a["a"])({url:"/api/channels",method:"post",data:t})}function M(t){return Object(a["a"])({url:"/api/channels/"+t,method:"delete"})}function N(t){return Object(a["a"])({url:"/api/channels/setSort",method:"post",data:t})}function B(t){return Object(a["a"])({url:"/api/channels/"+t,method:"get"})}function H(t,e){return Object(a["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function J(t){return Object(a["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function X(t){return Object(a["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function G(t){return Object(a["a"])({url:"/api/categories",method:"get",params:t})}function V(t){return Object(a["a"])({url:"/api/categories",method:"post",data:t})}function W(t,e){return Object(a["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(a["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(a["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(a["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(a["a"])({url:"/api/resources/"+t,method:"post",data:e})}function rt(t){return Object(a["a"])({url:"/api/resources/"+t,method:"delete"})}function at(t){return Object(a["a"])({url:"/api/resources/myResources",method:"get",params:t})}function nt(t){return Object(a["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(a["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(a["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(a["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function st(t){return Object(a["a"])({url:"/api/programs",method:"get",params:t})}function ct(t){return Object(a["a"])({url:"/api/programs",method:"post",data:t})}function lt(t,e){return Object(a["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(a["a"])({url:"/api/programs/"+t,method:"delete"})}function pt(t){return Object(a["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(a["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(a["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function bt(t,e){return Object(a["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ht(t){return Object(a["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(a["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function jt(t){return Object(a["a"])({url:"/api/replays/"+t,method:"delete"})}function yt(t){return Object(a["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function Ot(t,e){return Object(a["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function vt(t){return Object(a["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function It(){return Object(n["a"])({url:"/catalog/list",method:"get"})}function Ft(t){return Object(n["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function St(t){return Object(n["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function wt(t){return Object(n["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function kt(t){return Object(n["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function xt(t){return Object(n["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function At(t){return Object(o["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function Dt(t){return Object(n["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function Pt(t){return Object(n["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function Lt(t){return Object(n["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function $t(t){return Object(n["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Kt(t){return Object(n["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Ut(t){return Object(n["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Tt(t){return Object(n["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function _t(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function qt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Rt(t){return Object(n["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Ct(t){return Object(n["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Qt(t){return Object(n["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function zt(t){return Object(n["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Et(){return Object(n["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Mt(){return Object(n["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Nt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginCreate",method:"post",data:t})}function Bt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginList",method:"post",data:t})}function Ht(t){return Object(a["a"])({url:"/api/departments",method:"get",params:t})}function Jt(t){return Object(a["a"])({url:"/api/departments",method:"post",data:t})}function Xt(t){return Object(a["a"])({url:"/api/departments/"+t,method:"get"})}function Gt(t,e){return Object(a["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function Vt(t){return Object(a["a"])({url:"/api/departments/".concat(t),method:"delete"})}function Wt(t){return Object(a["a"])({url:"/api/products/".concat(t),method:"get"})}function Yt(t,e){return Object(a["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Zt(){return Object(a["a"])({url:"/api/upload/getH5Dir",method:"get"})}function te(t){return Object(a["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function re(t){return Object(a["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function ae(t){return Object(a["a"])({url:"/api/h5",method:"get",params:t})}function ne(t){return Object(a["a"])({url:"/api/h5",method:"post",data:t})}function oe(t,e){return Object(a["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function ie(t){return Object(a["a"])({url:"/api/h5/".concat(t),method:"delete"})}function ue(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function se(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function ce(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function le(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function de(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function pe(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function me(t){return Object(n["a"])({url:"/publish/list",method:"post",data:t})}function fe(t){return Object(n["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function be(t){return Object(n["a"])({url:"/meal/openList",method:"post",data:t})}function he(t){return Object(n["a"])({url:"/publish/setPublish",method:"post",data:t})}function ge(t){return Object(n["a"])({url:"/publish/update",method:"post",data:t})}},1389:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl-secret-manage"},[r("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0,size:"small"}},[r("el-form-item",{attrs:{label:"所属产品:"}},[r("el-select",{attrs:{placeholder:"请选择所属产品"},on:{change:t.handleQuery},model:{value:t.queryParams.sourceId,callback:function(e){t.$set(t.queryParams,"sourceId",e)},expression:"queryParams.sourceId"}},t._l(t.productLists,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",[0===t.total?r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleAdd}},[t._v(" 新增 ")]):t._e(),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"}},[r("el-table-column",{attrs:{label:"sourceId",align:"center",prop:"sourceId"}}),r("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"appName"}}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(r){return t.handleEdit(e.row)}}}),r("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(r){return t.handleDelete(e.row)}}})]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.limit},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"limit",e)},pagination:t.getList}}),r("el-dialog",{attrs:{width:"1000px",title:t.dialog.title,visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[r("el-form",{ref:"dialogForm",attrs:{model:t.dialogForm,rules:t.dialogRules,size:"small","label-width":"140px"}},[r("el-row",[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"所属产品：",prop:"sourceId"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{disabled:"",placeholder:"请选择所属产品",clearable:""},model:{value:t.dialogForm.sourceId,callback:function(e){t.$set(t.dialogForm,"sourceId",e)},expression:"dialogForm.sourceId"}},t._l(t.productLists,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{label:"SourceId：",prop:"sourceId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{disabled:"",clearable:""},model:{value:t.dialogForm.sourceId,callback:function(e){t.$set(t.dialogForm,"sourceId",e)},expression:"dialogForm.sourceId"}})],1),r("el-form-item",{attrs:{label:"秘钥：",prop:"appSrcret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入秘钥"},model:{value:t.dialogForm.appSrcret,callback:function(e){t.$set(t.dialogForm,"appSrcret",e)},expression:"dialogForm.appSrcret"}})],1),r("el-form-item",{attrs:{label:"App ID：",prop:"appId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入App ID"},model:{value:t.dialogForm.appId,callback:function(e){t.$set(t.dialogForm,"appId",t._n(e))},expression:"dialogForm.appId"}})],1),r("el-form-item",{attrs:{label:"重保期选项："}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"registerDisableTag"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.dialogForm.registerDisableTag,callback:function(e){t.$set(t.dialogForm,"registerDisableTag",e)},expression:"dialogForm.registerDisableTag"}},[t._v("禁止注册")])],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"userInfoDisableTag"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.dialogForm.userInfoDisableTag,callback:function(e){t.$set(t.dialogForm,"userInfoDisableTag",e)},expression:"dialogForm.userInfoDisableTag"}},[t._v("禁止修改用户信息")])],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"loginDisableTag"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.dialogForm.loginDisableTag,callback:function(e){t.$set(t.dialogForm,"loginDisableTag",e)},expression:"dialogForm.loginDisableTag"}},[t._v("禁止第三方登录")])],1)],1)],1),r("el-form-item",{attrs:{label:"H5 Srcret：",prop:"h5Srcret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入H5 Srcret",clearable:""},model:{value:t.dialogForm.h5Srcret,callback:function(e){t.$set(t.dialogForm,"h5Srcret",e)},expression:"dialogForm.h5Srcret"}})],1),r("el-form-item",{attrs:{label:"第三方QQ的key：",prop:"thirdKeyForQQ"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入第三方QQ的key",clearable:""},model:{value:t.dialogForm.thirdKeyForQQ,callback:function(e){t.$set(t.dialogForm,"thirdKeyForQQ",e)},expression:"dialogForm.thirdKeyForQQ"}})],1),r("el-form-item",{attrs:{label:"兑吧重定向地址：",prop:"duibaRedirect"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧重定向地址",clearable:""},model:{value:t.dialogForm.duibaRedirect,callback:function(e){t.$set(t.dialogForm,"duibaRedirect",e)},expression:"dialogForm.duibaRedirect"}})],1),r("el-form-item",{attrs:{label:"兑吧接口Appkey：",prop:"duibaAppKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧接口Appkey",clearable:""},model:{value:t.dialogForm.duibaAppKey,callback:function(e){t.$set(t.dialogForm,"duibaAppKey",e)},expression:"dialogForm.duibaAppKey"}})],1),r("el-form-item",{attrs:{label:"兑吧秘钥：",prop:"duibaSrcret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧秘钥",clearable:""},model:{value:t.dialogForm.duibaSrcret,callback:function(e){t.$set(t.dialogForm,"duibaSrcret",e)},expression:"dialogForm.duibaSrcret"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"支付宝App ID：",prop:"alipayAppId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝App ID",clearable:""},model:{value:t.dialogForm.alipayAppId,callback:function(e){t.$set(t.dialogForm,"alipayAppId",e)},expression:"dialogForm.alipayAppId"}})],1),r("el-form-item",{attrs:{label:"支付宝私有key：",prop:"alipayPrivateKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝私有key",clearable:""},model:{value:t.dialogForm.alipayPrivateKey,callback:function(e){t.$set(t.dialogForm,"alipayPrivateKey",e)},expression:"dialogForm.alipayPrivateKey"}})],1),r("el-form-item",{attrs:{label:"支付宝公有key：",prop:"alipayPublicKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝公有key",clearable:""},model:{value:t.dialogForm.alipayPublicKey,callback:function(e){t.$set(t.dialogForm,"alipayPublicKey",e)},expression:"dialogForm.alipayPublicKey"}})],1),r("el-form-item",{attrs:{label:"闪验安卓AppID：",prop:"flashAndroidAppId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验安卓AppID",clearable:""},model:{value:t.dialogForm.flashAndroidAppId,callback:function(e){t.$set(t.dialogForm,"flashAndroidAppId",e)},expression:"dialogForm.flashAndroidAppId"}})],1),r("el-form-item",{attrs:{label:"闪验安卓appkey：",prop:"flashAndroidAppKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验安卓appkey",clearable:""},model:{value:t.dialogForm.flashAndroidAppKey,callback:function(e){t.$set(t.dialogForm,"flashAndroidAppKey",e)},expression:"dialogForm.flashAndroidAppKey"}})],1),r("el-form-item",{attrs:{label:"闪验苹果AppID：",prop:"flashIosAppId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验苹果AppID",clearable:""},model:{value:t.dialogForm.flashIosAppId,callback:function(e){t.$set(t.dialogForm,"flashIosAppId",e)},expression:"dialogForm.flashIosAppId"}})],1),r("el-form-item",{attrs:{label:"闪验苹果AppKey：",prop:"flashIosAppKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验苹果AppKey",clearable:""},model:{value:t.dialogForm.flashIosAppKey,callback:function(e){t.$set(t.dialogForm,"flashIosAppKey",e)},expression:"dialogForm.flashIosAppKey"}})],1),r("el-form-item",{attrs:{label:"社区详情页面地址：",prop:"socialDetailUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区详情页面地址",clearable:""},model:{value:t.dialogForm.socialDetailUrl,callback:function(e){t.$set(t.dialogForm,"socialDetailUrl",e)},expression:"dialogForm.socialDetailUrl"}})],1),r("el-form-item",{attrs:{label:"社区分享页面地址：",prop:"socialShareUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区分享页面地址",clearable:""},model:{value:t.dialogForm.socialShareUrl,callback:function(e){t.$set(t.dialogForm,"socialShareUrl",e)},expression:"dialogForm.socialShareUrl"}})],1),r("el-form-item",{attrs:{label:"社区评论页面地址：",prop:"socialCommentUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区评论页面地址",clearable:""},model:{value:t.dialogForm.socialCommentUrl,callback:function(e){t.$set(t.dialogForm,"socialCommentUrl",e)},expression:"dialogForm.socialCommentUrl"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(e){t.dialog.show=!1}}},[t._v(" 取 消 ")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v(" 确 定 ")])],1)],1)],1)},n=[],o=r("99a5"),i=r("1c03"),u=(r("6a61"),r("2eeb"),r("dbb3"),r("053b"),r("fe8a"),r("b130"),r("e18c"),r("0fea")),s={name:"Secret-manage",data:function(){return{queryParams:{sourceId:"",page:1,limit:10},productLists:[],loading:!1,tableData:[],total:0,dialog:{title:"新增秘钥",show:!1},dialogForm:{sourceId:"",appSrcret:"",appId:"",registerDisableTag:0,userInfoDisableTag:0,loginDisableTag:0,h5Srcret:"",thirdKeyForQQ:"",duibaRedirect:"",duibaAppKey:"",duibaSrcret:"",alipayAppId:"",alipayPrivateKey:"",alipayPublicKey:"",flashAndroidAppId:"",flashAndroidAppKey:"",flashIosAppId:"",flashIosAppKey:"",socialDetailUrl:"",socialShareUrl:"",socialCommentUrl:""},dialogRules:{appSrcret:[{required:!0,message:"请输入秘钥",trigger:"blur"}],appId:[{required:!0,message:"请输入appId",trigger:"blur"}]}}},methods:{getProductList:function(){var t=this;return Object(u["Xb"])().then((function(e){var r,a=e.data||[];t.productLists=a.filter((function(t){return t.source_id})).map((function(t){return{label:t.name,value:t.source_id}})),t.queryParams.sourceId=null===a||void 0===a||null===(r=a[0])||void 0===r?void 0:r.source_id}))},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){var t=this;Object.keys(this.dialogForm).map((function(e){["registerDisableTag","userInfoDisableTag","loginDisableTag"].includes(e)?t.dialogForm[e]=0:t.dialogForm[e]=""})),this.dialogForm.sourceId=this.queryParams.sourceId,this.dialog={title:"新增秘钥",show:!0}},handleEdit:function(t){var e=this,r=t.sourceId,a=t.id;this.resetForm("dialogForm"),Object(u["Ib"])({sourceId:r}).then((function(t){var r=t.code,n=t.data;200==r?(Object.keys(e.dialogForm).map((function(t){e.dialogForm[t]=n[t]})),e.dialog={title:"修改秘钥",show:!0,id:a}):e.$message.warning("获取详情失败")}))},handleDelete:function(t){var e=this,r=t.id,a=t.sourceId;this.$confirm("此操作将永久删除这条sourceId为".concat(a,"的产品, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["O"])({id:[r]}).then((function(t){var r=t.code,a=t.msg;200==r?e.$message.success(a):e.$message.error(a),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},enterDialog:function(){var t=this,e=this.dialog.id;this.$refs.dialogForm.validate((function(r){r&&(null!=e?(console.log("dialogForm",t.dialogForm),Object(u["D"])(Object(i["a"])(Object(i["a"])({},t.dialogForm),{},{id:e})).then((function(e){var r=e.code,a=e.msg;200==r?t.$message.success(a):t.$message.error(a),t.dialog.show=!1,t.getList()}))):Object(u["f"])(t.dialogForm).then((function(e){var r=e.code,a=e.msg;200==r?t.$message.success(a):t.$message.error(a),t.dialog.show=!1,t.getList()})))}))},getList:function(){var t=this,e=Object(i["a"])({},this.queryParams);this.loading=!0,Object(u["Jb"])(this.removePropertyOfNullFor0(e)).then((function(e){var r=e.data;200==e.code&&(t.tableData=r.list,t.total=r.totalCount)})).finally((function(){t.loading=!1}))}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProductList();case 2:t.getList();case 3:case"end":return e.stop()}}),e)})))()}},c=s,l=r("4ac2"),d=Object(l["a"])(c,a,n,!1,null,"0be7e4df",null);e["default"]=d.exports},"2ab73":function(t,e,r){"use strict";r("e18c");var a=r("f753"),n=r.n(a),o=r("b705"),i=r("a18c"),u=r("5041"),s=n.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},b60c:function(t,e,r){"use strict";r("08ba"),r("b130"),r("90aa"),r("e18c"),r("e35a"),r("5e9f");var a=r("f753"),n=r.n(a),o=r("b705"),i=r("a18c"),u=r("5f87"),s=r("5041"),c=n.a.create({baseURL:s["c"],timeout:5e3}),l=!1,d=[];function p(t){d.forEach((function(e){e(t)})),d=[]}function m(t){d.push(t)}c.interceptors.request.use((function(t){if(t.headers.Authorization=sessionStorage.getItem("token"),sessionStorage.getItem("token")&&Object(u["d"])()&&(!t.url.includes("/api/authorizations")||!t.url.includes("api/authorizations/wwwLogin"))){l||(l=!0,n()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:"Basic "+sessionStorage.getItem("token")}}).then((function(t){if(l=!1,console.log(t.data),200===t.status){var e=t.data,r=e.token_type+" "+e.access_token,a=(new Date).getTime(),n=e.expires_in;sessionStorage.setItem("token",r),sessionStorage.setItem("tokenTime",n),sessionStorage.setItem("tokenQueryTime",a),p(r)}})).catch((function(){i["c"].push({path:"/login"}),l=!1})));var e=new Promise((function(e){m((function(r){t.headers.Authorization=r,t.url=t.url.replace(t.baseURL,""),e(t)}))}));return e}return t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c}}]);