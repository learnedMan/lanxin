(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e11e603e"],{"0385":function(e,t,r){"use strict";r("caad"),r("2532"),r("d3b7");var a=r("bc3a"),n=r.n(a),o=r("5c96"),i=r("a18c"),u=r("5f87"),s=r("5041"),c=n.a.create({baseURL:s["d"],timeout:5e3});c.interceptors.request.use((function(e){return sessionStorage.getItem("token")&&Object(u["d"])()&&!e.url.includes("/api/authorizations/refresh")?new Promise((function(t){n()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(r){if(console.log(r.data),200===r.status){var a=r.data,n=a.token_type+" "+a.access_token,o=(new Date).getTime();sessionStorage.setItem("token",n),sessionStorage.setItem("tokenQueryTime",o),e.headers.Authorization=n,t(e)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(e.headers.Authorization=sessionStorage.getItem("token"),e)}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),c.interceptors.response.use((function(e){var t=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",t),200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)})),t["a"]=c},"0fea":function(e,t,r){"use strict";r.d(t,"Bb",(function(){return i})),r.d(t,"o",(function(){return u})),r.d(t,"rb",(function(){return s})),r.d(t,"Y",(function(){return c})),r.d(t,"U",(function(){return l})),r.d(t,"Pb",(function(){return d})),r.d(t,"s",(function(){return p})),r.d(t,"wb",(function(){return m})),r.d(t,"eb",(function(){return f})),r.d(t,"V",(function(){return b})),r.d(t,"nc",(function(){return h})),r.d(t,"y",(function(){return g})),r.d(t,"Zb",(function(){return j})),r.d(t,"Eb",(function(){return y})),r.d(t,"x",(function(){return O})),r.d(t,"zb",(function(){return v})),r.d(t,"G",(function(){return I})),r.d(t,"gb",(function(){return F})),r.d(t,"W",(function(){return S})),r.d(t,"sc",(function(){return k})),r.d(t,"z",(function(){return w})),r.d(t,"tc",(function(){return x})),r.d(t,"A",(function(){return A})),r.d(t,"oc",(function(){return _})),r.d(t,"t",(function(){return P})),r.d(t,"xb",(function(){return D})),r.d(t,"vc",(function(){return $})),r.d(t,"pc",(function(){return T})),r.d(t,"jc",(function(){return L})),r.d(t,"q",(function(){return K})),r.d(t,"tb",(function(){return U})),r.d(t,"ab",(function(){return q})),r.d(t,"Wb",(function(){return C})),r.d(t,"Ub",(function(){return R})),r.d(t,"h",(function(){return Q})),r.d(t,"mb",(function(){return z})),r.d(t,"K",(function(){return M})),r.d(t,"kc",(function(){return N})),r.d(t,"p",(function(){return E})),r.d(t,"sb",(function(){return B})),r.d(t,"Z",(function(){return H})),r.d(t,"m",(function(){return J})),r.d(t,"O",(function(){return G})),r.d(t,"Ac",(function(){return V})),r.d(t,"gc",(function(){return W})),r.d(t,"pb",(function(){return X})),r.d(t,"lc",(function(){return Y})),r.d(t,"zc",(function(){return Z})),r.d(t,"hc",(function(){return ee})),r.d(t,"n",(function(){return te})),r.d(t,"qb",(function(){return re})),r.d(t,"X",(function(){return ae})),r.d(t,"mc",(function(){return ne})),r.d(t,"r",(function(){return oe})),r.d(t,"vb",(function(){return ie})),r.d(t,"db",(function(){return ue})),r.d(t,"ic",(function(){return se})),r.d(t,"cc",(function(){return ce})),r.d(t,"j",(function(){return le})),r.d(t,"nb",(function(){return de})),r.d(t,"qc",(function(){return pe})),r.d(t,"u",(function(){return me})),r.d(t,"fb",(function(){return fe})),r.d(t,"yb",(function(){return be})),r.d(t,"rc",(function(){return he})),r.d(t,"v",(function(){return ge})),r.d(t,"ub",(function(){return je})),r.d(t,"bb",(function(){return ye})),r.d(t,"uc",(function(){return Oe})),r.d(t,"w",(function(){return ve})),r.d(t,"Fb",(function(){return Ie})),r.d(t,"ib",(function(){return Fe})),r.d(t,"hb",(function(){return Se})),r.d(t,"N",(function(){return ke})),r.d(t,"Ob",(function(){return we})),r.d(t,"cb",(function(){return xe})),r.d(t,"fc",(function(){return Ae})),r.d(t,"ec",(function(){return _e})),r.d(t,"l",(function(){return Pe})),r.d(t,"ob",(function(){return De})),r.d(t,"M",(function(){return $e})),r.d(t,"C",(function(){return Te})),r.d(t,"Bc",(function(){return Le})),r.d(t,"bc",(function(){return Ke})),r.d(t,"ac",(function(){return Ue})),r.d(t,"jb",(function(){return qe})),r.d(t,"Lb",(function(){return Ce})),r.d(t,"Kb",(function(){return Re})),r.d(t,"Mb",(function(){return Qe})),r.d(t,"Jb",(function(){return ze})),r.d(t,"Sb",(function(){return Me})),r.d(t,"Rb",(function(){return Ne})),r.d(t,"f",(function(){return Ee})),r.d(t,"F",(function(){return Be})),r.d(t,"T",(function(){return He})),r.d(t,"Db",(function(){return Je})),r.d(t,"B",(function(){return Ge})),r.d(t,"Qb",(function(){return Ve})),r.d(t,"e",(function(){return We})),r.d(t,"lb",(function(){return Xe})),r.d(t,"S",(function(){return Ye})),r.d(t,"Yb",(function(){return Ze})),r.d(t,"Ab",(function(){return et})),r.d(t,"i",(function(){return tt})),r.d(t,"Vb",(function(){return rt})),r.d(t,"Gb",(function(){return at})),r.d(t,"a",(function(){return nt})),r.d(t,"Hb",(function(){return ot})),r.d(t,"E",(function(){return it})),r.d(t,"P",(function(){return ut})),r.d(t,"Cb",(function(){return st})),r.d(t,"D",(function(){return ct})),r.d(t,"Xb",(function(){return lt})),r.d(t,"b",(function(){return dt})),r.d(t,"yc",(function(){return pt})),r.d(t,"Q",(function(){return mt})),r.d(t,"Ib",(function(){return ft})),r.d(t,"c",(function(){return bt})),r.d(t,"xc",(function(){return ht})),r.d(t,"R",(function(){return gt})),r.d(t,"dc",(function(){return jt})),r.d(t,"Tb",(function(){return yt})),r.d(t,"g",(function(){return Ot})),r.d(t,"J",(function(){return vt})),r.d(t,"H",(function(){return It})),r.d(t,"k",(function(){return Ft})),r.d(t,"L",(function(){return St})),r.d(t,"Nb",(function(){return kt})),r.d(t,"I",(function(){return wt})),r.d(t,"wc",(function(){return xt})),r.d(t,"d",(function(){return At})),r.d(t,"kb",(function(){return _t}));r("99af");var a=r("b775"),n=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(a["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(e){return Object(a["a"])({url:"/api/permissions",method:"post",params:e})}function s(e,t){return Object(a["a"])({url:"/api/permissions/"+e,method:"patch",params:t})}function c(e){return Object(a["a"])({url:"/api/permissions/"+e,method:"delete"})}function l(e){return Object(a["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:e}})}function d(e){return Object(a["a"])({url:"/api/system/data",method:"get",params:e})}function p(e){return Object(a["a"])({url:"/api/roles",method:"post",params:e})}function m(e,t){return Object(a["a"])({url:"/api/roles/"+e,method:"patch",params:t})}function f(e){return Object(a["a"])({url:"/api/roles/"+e,method:"delete"})}function b(e){return Object(a["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:e}})}function h(e){return Object(a["a"])({url:"/api/roles/"+e+"/permission",method:"get"})}function g(e,t){return Object(a["a"])({url:"/api/roles/"+e+"/assignPermission",method:"post",params:{permissions:t}})}function j(e){return Object(a["a"])({url:"/api/system/data",method:"get",params:e})}function y(e){return Object(a["a"])({url:"/api/channels",method:"get",params:e})}function O(e){return Object(a["a"])({url:"/api/users",method:"post",data:e})}function v(e,t){return Object(a["a"])({url:"/api/user/"+e,method:"patch",data:t})}function I(e,t){return Object(a["a"])({url:"/api/users/setStatus",method:"post",params:{ids:e,status:t}})}function F(e){return Object(a["a"])({url:"/api/user/"+e,method:"delete"})}function S(e){return Object(a["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:e}})}function k(e){return Object(a["a"])({url:"/api/user/"+e+"/permission",method:"get"})}function w(e,t){return Object(a["a"])({url:"/api/user/"+e+"/assignPermission",method:"post",params:{permissions:t}})}function x(e){return Object(a["a"])({url:"/api/user/"+e+"/roles",method:"get"})}function A(e,t){return Object(a["a"])({url:"/api/user/"+e+"/assignRole",method:"post",params:{roles:t}})}function _(e){return Object(a["a"])({url:"/api/sites",method:"get",params:e})}function P(e){return Object(a["a"])({url:"/api/sites",method:"post",data:e})}function D(e,t){return Object(a["a"])({url:"/api/sites/"+e,method:"patch",data:t})}function $(){return Object(a["a"])({url:"/api/zones",method:"get"})}function T(e){return Object(a["a"])({url:"/api/sites/"+e,method:"get"})}function L(e){return Object(a["a"])({url:"/api/products",method:"get",params:e})}function K(e){return Object(a["a"])({url:"/api/products",method:"post",data:e})}function U(e,t){return Object(a["a"])({url:"/api/products/"+e,method:"patch",data:t})}function q(e){return Object(a["a"])({url:"/api/products/"+e,method:"delete"})}function C(e){return Object(a["a"])({url:"/api/sync_settings",method:"get",params:e})}function R(){return Object(a["a"])({url:"/api/sync_settings/info",method:"get"})}function Q(e){return Object(a["a"])({url:"/api/sync_settings",method:"post",data:e})}function z(e,t){return Object(a["a"])({url:"/api/sync_settings/"+e,method:"patch",data:t})}function M(e){return Object(a["a"])({url:"/api/sync_settings/"+e,method:"delete"})}function N(e){return Object(a["a"])({url:"/api/product_versions",method:"get",params:e})}function E(e){return Object(a["a"])({url:"/api/product_versions",method:"post",data:e})}function B(e,t){return Object(a["a"])({url:"/api/product_versions/"+e,method:"patch",data:t})}function H(e){return Object(a["a"])({url:"/api/product_versions/"+e,method:"delete"})}function J(e){return Object(a["a"])({url:"/api/channels",method:"post",data:e})}function G(e){return Object(a["a"])({url:"/api/channels/"+e,method:"delete"})}function V(e){return Object(a["a"])({url:"/api/channels/setSort",method:"post",data:e})}function W(e){return Object(a["a"])({url:"/api/channels/"+e,method:"get"})}function X(e,t){return Object(a["a"])({url:"/api/channels/"+e,method:"patch",data:t})}function Y(e){return Object(a["a"])({url:"/api/news/recycleBin",method:"get",params:e})}function Z(e){return Object(a["a"])({url:"/api/news/restore",method:"post",params:{ids:e}})}function ee(e){return Object(a["a"])({url:"/api/categories",method:"get",params:e})}function te(e){return Object(a["a"])({url:"/api/categories",method:"post",data:e})}function re(e,t){return Object(a["a"])({url:"/api/categories/"+e,method:"patch",data:t})}function ae(e){return Object(a["a"])({url:"/api/categories/"+e,method:"delete"})}function ne(e){return Object(a["a"])({url:"/api/resources",method:"get",params:e})}function oe(e){return Object(a["a"])({url:"/api/resources",method:"post",data:e})}function ie(e,t){return Object(a["a"])({url:"/api/resources/"+e,method:"post",data:t})}function ue(e){return Object(a["a"])({url:"/api/resources/"+e,method:"delete"})}function se(e){return Object(a["a"])({url:"/api/resources/myResources",method:"get",params:e})}function ce(e){return Object(a["a"])({url:"/api/cloud_vms_channels",method:"get",params:e})}function le(e){return Object(a["a"])({url:"/api/cloud_vms_channels",method:"post",data:e})}function de(e,t){return Object(a["a"])({url:"/api/cloud_vms_channels/"+e,method:"patch",data:t})}function pe(e){return Object(a["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:e})}function me(e){return Object(a["a"])({url:"/api/channels",method:"post",data:e})}function fe(e){return Object(a["a"])({url:"/api/channels/"+e,method:"delete"})}function be(e,t){return Object(a["a"])({url:"/api/channels/"+e,method:"patch",data:t})}function he(e){return Object(a["a"])({url:"/api/programs",method:"get",params:e})}function ge(e){return Object(a["a"])({url:"/api/programs",method:"post",data:e})}function je(e,t){return Object(a["a"])({url:"/api/programs/"+e,method:"patch",data:t})}function ye(e){return Object(a["a"])({url:"/api/programs/"+e,method:"delete"})}function Oe(e){return Object(a["a"])({url:"/api/videos/vms_channels/?cloud=".concat(e),method:"get"})}function ve(e){return Object(a["a"])({url:"/api/channels",method:"post",data:e})}function Ie(e,t){return Object(a["a"])({url:"/api/channels/".concat(e,"/getChild"),method:"get",params:t})}function Fe(e,t){return Object(a["a"])({url:"/api/channels/"+e,method:"patch",data:t})}function Se(e,t){return Object(a["a"])({url:"/api/replays/"+e,method:"patch",data:t})}function ke(e){return Object(a["a"])({url:"/api/channels/"+e,method:"delete"})}function we(e){return Object(a["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:e})}function xe(e){return Object(a["a"])({url:"/api/replays/"+e,method:"delete"})}function Ae(e){return Object(a["a"])({url:"/api/broadcasts/".concat(e),method:"get"})}function _e(e,t){return Object(a["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(e,"&stream_id=").concat(t),method:"get"})}function Pe(e){return Object(a["a"])({url:"/api/broadcastStatement",method:"post",data:e})}function De(e,t){return Object(a["a"])({url:"/api/broadcastStatement/".concat(e),method:"patch",data:t})}function $e(e){return Object(a["a"])({url:"/api/broadcastStatement/"+e,method:"delete"})}function Te(){return Object(n["a"])({url:"/catalog/list",method:"get"})}function Le(e){return Object(n["a"])({url:"/style/catalogCodeStyle",method:"post",data:e})}function Ke(e){return Object(n["a"])({url:"/internal/uc/queryUserList",method:"post",data:e})}function Ue(e){return Object(n["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:e})}function qe(e){return Object(n["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:e})}function Ce(e){return Object(n["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:e})}function Re(e){return Object(n["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:e})}function Qe(e){return Object(n["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:e})}function ze(e){return Object(n["a"])({url:"/internal/points/queryPointsLog",method:"post",data:e})}function Me(e){return Object(n["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:e})}function Ne(e){return Object(n["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:e})}function Ee(e){return Object(n["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:e})}function Be(e){return Object(n["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:e})}function He(e){return Object(n["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:e})}function Je(e){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:e})}function Ge(e){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:e})}function Ve(e){return Object(n["a"])({url:"/internal/points/getRuleList",method:"post",data:e})}function We(e){return Object(n["a"])({url:"/internal/points/ruleSave",method:"post",data:e})}function Xe(e){return Object(n["a"])({url:"/internal/points/ruleUpdate",method:"post",data:e})}function Ye(e){return Object(n["a"])({url:"/internal/points/ruleDelete",method:"post",data:e})}function Ze(){return Object(n["a"])({url:"/internal/points/rule/typelist",method:"get"})}function et(){return Object(n["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function tt(e){return Object(n["a"])({url:"/internal/points/pointLoginCreate",method:"post",data:e})}function rt(e){return Object(n["a"])({url:"/internal/points/pointLoginList",method:"post",data:e})}function at(e){return Object(a["a"])({url:"/api/departments",method:"get",params:e})}function nt(e){return Object(a["a"])({url:"/api/departments",method:"post",data:e})}function ot(e){return Object(a["a"])({url:"/api/departments/"+e,method:"get"})}function it(e,t){return Object(a["a"])({url:"/api/departments/".concat(e),method:"patch",data:t})}function ut(e){return Object(a["a"])({url:"/api/departments/".concat(e),method:"delete"})}function st(e){return Object(a["a"])({url:"/api/products/".concat(e),method:"get"})}function ct(e,t){return Object(a["a"])({url:"/api/products/".concat(e),method:"patch",data:t})}function lt(){return Object(a["a"])({url:"/api/upload/getH5Dir",method:"get"})}function dt(e){return Object(a["a"])({url:"/api/upload/mkdir",method:"post",data:e})}function pt(e){return Object(a["a"])({url:"/api/upload/mkdir",method:"post",data:e})}function mt(e){return Object(a["a"])({url:"/api/upload/rmdir",method:"post",data:e})}function ft(e){return Object(a["a"])({url:"/api/h5",method:"get",params:e})}function bt(e){return Object(a["a"])({url:"/api/h5",method:"post",data:e})}function ht(e,t){return Object(a["a"])({url:"/api/h5/".concat(e),method:"post",data:t})}function gt(e){return Object(a["a"])({url:"/api/h5/".concat(e),method:"delete"})}function jt(e){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:e})}function yt(e){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:e})}function Ot(e){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:e})}function vt(e){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:e})}function It(e){return Object(o["a"])({url:"/sensitive/tx/filter",method:"post",data:e})}function Ft(e){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:e})}function St(e){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:e})}function kt(e){return Object(n["a"])({url:"/publish/list",method:"post",data:e})}function wt(e){return Object(n["a"])({url:"/publish/delete?id=".concat(e),method:"post"})}function xt(e){return Object(n["a"])({url:"/meal/openList",method:"post",data:e})}function At(e){return Object(n["a"])({url:"/publish/setPublish",method:"post",data:e})}function _t(e){return Object(n["a"])({url:"/publish/update",method:"post",data:e})}},1389:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"xl-secret-manage"},[r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,size:"small"}},[r("el-form-item",{attrs:{label:"所属产品:"}},[r("el-select",{attrs:{placeholder:"请选择所属产品"},on:{change:e.handleQuery},model:{value:e.queryParams.sourceId,callback:function(t){e.$set(e.queryParams,"sourceId",t)},expression:"queryParams.sourceId"}},e._l(e.productLists,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",[0===e.total?r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleAdd}},[e._v(" 新增 ")]):e._e(),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:e.handleQuery}},[e._v(" 搜索 ")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:e.tableData,border:"","tooltip-effect":"dark"}},[r("el-table-column",{attrs:{label:"sourceId",align:"center",prop:"sourceId"}}),r("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"appName"}}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(r){return e.handleEdit(t.row)}}}),r("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(r){return e.handleDelete(t.row)}}})]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.page,limit:e.queryParams.limit},on:{"update:page":function(t){return e.$set(e.queryParams,"page",t)},"update:limit":function(t){return e.$set(e.queryParams,"limit",t)},pagination:e.getList}}),r("el-dialog",{attrs:{width:"1000px",title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[r("el-form",{ref:"dialogForm",attrs:{model:e.dialogForm,rules:e.dialogRules,size:"small","label-width":"140px"}},[r("el-row",[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"所属产品：",prop:"sourceId"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{disabled:"",placeholder:"请选择所属产品",clearable:""},model:{value:e.dialogForm.sourceId,callback:function(t){e.$set(e.dialogForm,"sourceId",t)},expression:"dialogForm.sourceId"}},e._l(e.productLists,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"SourceId：",prop:"sourceId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{disabled:"",clearable:""},model:{value:e.dialogForm.sourceId,callback:function(t){e.$set(e.dialogForm,"sourceId",t)},expression:"dialogForm.sourceId"}})],1),r("el-form-item",{attrs:{label:"秘钥：",prop:"appSrcret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入秘钥"},model:{value:e.dialogForm.appSrcret,callback:function(t){e.$set(e.dialogForm,"appSrcret",t)},expression:"dialogForm.appSrcret"}})],1),r("el-form-item",{attrs:{label:"App ID：",prop:"appId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入App ID"},model:{value:e.dialogForm.appId,callback:function(t){e.$set(e.dialogForm,"appId",e._n(t))},expression:"dialogForm.appId"}})],1),r("el-form-item",{attrs:{label:"重保期选项："}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"registerDisableTag"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dialogForm.registerDisableTag,callback:function(t){e.$set(e.dialogForm,"registerDisableTag",t)},expression:"dialogForm.registerDisableTag"}},[e._v("禁止注册")])],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"userInfoDisableTag"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dialogForm.userInfoDisableTag,callback:function(t){e.$set(e.dialogForm,"userInfoDisableTag",t)},expression:"dialogForm.userInfoDisableTag"}},[e._v("禁止修改用户信息")])],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{prop:"loginDisableTag"}},[r("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.dialogForm.loginDisableTag,callback:function(t){e.$set(e.dialogForm,"loginDisableTag",t)},expression:"dialogForm.loginDisableTag"}},[e._v("禁止第三方登录")])],1)],1)],1),r("el-form-item",{attrs:{label:"H5 Srcret：",prop:"h5Srcret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入H5 Srcret",clearable:""},model:{value:e.dialogForm.h5Srcret,callback:function(t){e.$set(e.dialogForm,"h5Srcret",t)},expression:"dialogForm.h5Srcret"}})],1),r("el-form-item",{attrs:{label:"第三方QQ的key：",prop:"thirdKeyForQQ"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入第三方QQ的key",clearable:""},model:{value:e.dialogForm.thirdKeyForQQ,callback:function(t){e.$set(e.dialogForm,"thirdKeyForQQ",t)},expression:"dialogForm.thirdKeyForQQ"}})],1),r("el-form-item",{attrs:{label:"兑吧重定向地址：",prop:"duibaRedirect"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧重定向地址",clearable:""},model:{value:e.dialogForm.duibaRedirect,callback:function(t){e.$set(e.dialogForm,"duibaRedirect",t)},expression:"dialogForm.duibaRedirect"}})],1),r("el-form-item",{attrs:{label:"兑吧接口Appkey：",prop:"duibaAppKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧接口Appkey",clearable:""},model:{value:e.dialogForm.duibaAppKey,callback:function(t){e.$set(e.dialogForm,"duibaAppKey",t)},expression:"dialogForm.duibaAppKey"}})],1),r("el-form-item",{attrs:{label:"兑吧秘钥：",prop:"duibaSrcret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入兑吧秘钥",clearable:""},model:{value:e.dialogForm.duibaSrcret,callback:function(t){e.$set(e.dialogForm,"duibaSrcret",t)},expression:"dialogForm.duibaSrcret"}})],1),r("el-form-item",{attrs:{label:"个推秘钥：",prop:"bluecore_mastersecret"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off",placeholder:"请输入个推秘钥"},model:{value:e.dialogForm.bluecore_mastersecret,callback:function(t){e.$set(e.dialogForm,"bluecore_mastersecret",t)},expression:"dialogForm.bluecore_mastersecret"}})],1),r("el-form-item",{attrs:{label:"蓝核APPkey：",prop:"bluecore_appkey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off",placeholder:"请输入蓝核APPkey"},model:{value:e.dialogForm.bluecore_appkey,callback:function(t){e.$set(e.dialogForm,"bluecore_appkey",t)},expression:"dialogForm.bluecore_appkey"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"蓝核APPID：",prop:"bluecore_appid"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{autocomplete:"off",placeholder:"请输入蓝核APPID"},model:{value:e.dialogForm.bluecore_appid,callback:function(t){e.$set(e.dialogForm,"bluecore_appid",t)},expression:"dialogForm.bluecore_appid"}})],1),r("el-form-item",{attrs:{label:"支付宝App ID：",prop:"alipayAppId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝App ID",clearable:""},model:{value:e.dialogForm.alipayAppId,callback:function(t){e.$set(e.dialogForm,"alipayAppId",t)},expression:"dialogForm.alipayAppId"}})],1),r("el-form-item",{attrs:{label:"支付宝私有key：",prop:"alipayPrivateKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝私有key",clearable:""},model:{value:e.dialogForm.alipayPrivateKey,callback:function(t){e.$set(e.dialogForm,"alipayPrivateKey",t)},expression:"dialogForm.alipayPrivateKey"}})],1),r("el-form-item",{attrs:{label:"支付宝公有key：",prop:"alipayPublicKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入支付宝公有key",clearable:""},model:{value:e.dialogForm.alipayPublicKey,callback:function(t){e.$set(e.dialogForm,"alipayPublicKey",t)},expression:"dialogForm.alipayPublicKey"}})],1),r("el-form-item",{attrs:{label:"闪验安卓AppID：",prop:"flashAndroidAppId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验安卓AppID",clearable:""},model:{value:e.dialogForm.flashAndroidAppId,callback:function(t){e.$set(e.dialogForm,"flashAndroidAppId",t)},expression:"dialogForm.flashAndroidAppId"}})],1),r("el-form-item",{attrs:{label:"闪验安卓appkey：",prop:"flashAndroidAppKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验安卓appkey",clearable:""},model:{value:e.dialogForm.flashAndroidAppKey,callback:function(t){e.$set(e.dialogForm,"flashAndroidAppKey",t)},expression:"dialogForm.flashAndroidAppKey"}})],1),r("el-form-item",{attrs:{label:"闪验苹果AppID：",prop:"flashIosAppId"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验苹果AppID",clearable:""},model:{value:e.dialogForm.flashIosAppId,callback:function(t){e.$set(e.dialogForm,"flashIosAppId",t)},expression:"dialogForm.flashIosAppId"}})],1),r("el-form-item",{attrs:{label:"闪验苹果AppKey：",prop:"flashIosAppKey"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入闪验苹果AppKey",clearable:""},model:{value:e.dialogForm.flashIosAppKey,callback:function(t){e.$set(e.dialogForm,"flashIosAppKey",t)},expression:"dialogForm.flashIosAppKey"}})],1),r("el-form-item",{attrs:{label:"社区详情页面地址：",prop:"socialDetailUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区详情页面地址",clearable:""},model:{value:e.dialogForm.socialDetailUrl,callback:function(t){e.$set(e.dialogForm,"socialDetailUrl",t)},expression:"dialogForm.socialDetailUrl"}})],1),r("el-form-item",{attrs:{label:"社区分享页面地址：",prop:"socialShareUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区分享页面地址",clearable:""},model:{value:e.dialogForm.socialShareUrl,callback:function(t){e.$set(e.dialogForm,"socialShareUrl",t)},expression:"dialogForm.socialShareUrl"}})],1),r("el-form-item",{attrs:{label:"社区评论页面地址：",prop:"socialCommentUrl"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入社区评论页面地址",clearable:""},model:{value:e.dialogForm.socialCommentUrl,callback:function(t){e.$set(e.dialogForm,"socialCommentUrl",t)},expression:"dialogForm.socialCommentUrl"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)],1)},n=[],o=r("1da1"),i=r("5530"),u=(r("96cf"),r("d81d"),r("4de4"),r("d3b7"),r("b0c0"),r("b64b"),r("caad"),r("0fea")),s={name:"Secret-manage",data:function(){return{queryParams:{sourceId:"",page:1,limit:10},productLists:[],loading:!1,tableData:[],total:0,dialog:{title:"新增秘钥",show:!1},dialogForm:{sourceId:"",appSrcret:"",appId:"",registerDisableTag:0,userInfoDisableTag:0,loginDisableTag:0,h5Srcret:"",thirdKeyForQQ:"",duibaRedirect:"",duibaAppKey:"",duibaSrcret:"",bluecore_mastersecret:"",bluecore_appkey:"",bluecore_appid:"",alipayAppId:"",alipayPrivateKey:"",alipayPublicKey:"",flashAndroidAppId:"",flashAndroidAppKey:"",flashIosAppId:"",flashIosAppKey:"",socialDetailUrl:"",socialShareUrl:"",socialCommentUrl:""},dialogRules:{appSrcret:[{required:!0,message:"请输入秘钥",trigger:"blur"}],appId:[{required:!0,message:"请输入appId",trigger:"blur"}]}}},methods:{getProductList:function(){var e=this;return Object(u["jc"])().then((function(t){var r,a=t.data||[];e.productLists=a.filter((function(e){return e.source_id})).map((function(e){return{label:e.name,value:e.source_id}})),e.queryParams.sourceId=null===a||void 0===a||null===(r=a[0])||void 0===r?void 0:r.source_id}))},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){var e=this;Object.keys(this.dialogForm).map((function(t){["registerDisableTag","userInfoDisableTag","loginDisableTag"].includes(t)?e.dialogForm[t]=0:e.dialogForm[t]=""})),this.dialogForm.sourceId=this.queryParams.sourceId,this.dialog={title:"新增秘钥",show:!0}},handleEdit:function(e){var t=this,r=e.sourceId,a=e.id;this.resetForm("dialogForm"),Object(u["Rb"])({sourceId:r}).then((function(e){var r=e.code,n=e.data;200==r?(Object.keys(t.dialogForm).map((function(e){t.dialogForm[e]=n[e]})),t.dialog={title:"修改秘钥",show:!0,id:a}):t.$message.warning("获取详情失败")}))},handleDelete:function(e){var t=this,r=e.id,a=e.sourceId;this.$confirm("此操作将永久删除这条sourceId为".concat(a,"的产品, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["T"])({id:[r]}).then((function(e){var r=e.code,a=e.msg;200==r?t.$message.success(a):t.$message.error(a),t.getList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},enterDialog:function(){var e=this,t=this.dialog.id;this.$refs.dialogForm.validate((function(r){r&&(null!=t?(console.log("dialogForm",e.dialogForm),Object(u["F"])(Object(i["a"])(Object(i["a"])({},e.dialogForm),{},{id:t})).then((function(t){var r=t.code,a=t.msg;200==r?e.$message.success(a):e.$message.error(a),e.dialog.show=!1,e.getList()}))):Object(u["f"])(e.dialogForm).then((function(t){var r=t.code,a=t.msg;200==r?e.$message.success(a):e.$message.error(a),e.dialog.show=!1,e.getList()})))}))},getList:function(){var e=this,t=Object(i["a"])({},this.queryParams);this.loading=!0,Object(u["Sb"])(this.removePropertyOfNullFor0(t)).then((function(t){var r=t.data;200==t.code&&(e.tableData=r.list,e.total=r.totalCount)})).finally((function(){e.loading=!1}))}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getProductList();case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()}},c=s,l=r("2877"),d=Object(l["a"])(c,a,n,!1,null,"12a24246",null);t["default"]=d.exports},"2ab73":function(e,t,r){"use strict";r("d3b7");var a=r("bc3a"),n=r.n(a),o=r("5c96"),i=r("a18c"),u=r("5041"),s=n.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(e){return e.headers.Authorization=sessionStorage.getItem("token"),e}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),s.interceptors.response.use((function(e){return 200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)}))},b60c:function(e,t,r){"use strict";r("caad"),r("2532"),r("d3b7");var a=r("bc3a"),n=r.n(a),o=r("5c96"),i=r("a18c"),u=r("5f87"),s=r("5041"),c=n.a.create({baseURL:s["c"],timeout:5e3});c.interceptors.request.use((function(e){return sessionStorage.getItem("token")&&Object(u["d"])()&&!e.url.includes("/api/authorizations/refresh")?new Promise((function(t){n()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(r){if(console.log(r.data),200===r.status){var a=r.data,n=a.token_type+" "+a.access_token,o=(new Date).getTime();sessionStorage.setItem("token",n),sessionStorage.setItem("tokenQueryTime",o),e.headers.Authorization=n,t(e)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(e.headers.Authorization=sessionStorage.getItem("token"),e)}),(function(e){return Object(o["Message"])({showClose:!0,message:e,duration:5e3,type:"error.data.error.message"}),Promise.reject(e.data.error.message)})),c.interceptors.response.use((function(e){var t=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",t),200==e.data.code||"true"===e.headers.success?e.data:(Object(o["Message"])({showClose:!0,message:e.data.msg||decodeURI(e.headers.msg),type:"error"}),e.data.data&&e.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(e.data.msg))}),(function(e){return Object(o["Message"])({showClose:!0,message:e,type:"error"}),Promise.reject(e)})),t["a"]=c}}]);