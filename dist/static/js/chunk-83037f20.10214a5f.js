(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83037f20"],{"0385":function(t,e,n){"use strict";n("b130"),n("90aa"),n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),s=n("5f87"),u=n("5041"),c=a.a.create({baseURL:u["d"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(s["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(n){if(console.log(n.data),200===n.status){var r=n.data,a=r.token_type+" "+r.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0fea":function(t,e,n){"use strict";n.d(e,"zb",(function(){return i})),n.d(e,"o",(function(){return s})),n.d(e,"pb",(function(){return u})),n.d(e,"X",(function(){return c})),n.d(e,"T",(function(){return d})),n.d(e,"Nb",(function(){return l})),n.d(e,"s",(function(){return m})),n.d(e,"ub",(function(){return f})),n.d(e,"db",(function(){return p})),n.d(e,"U",(function(){return h})),n.d(e,"lc",(function(){return b})),n.d(e,"y",(function(){return g})),n.d(e,"Xb",(function(){return j})),n.d(e,"Cb",(function(){return O})),n.d(e,"x",(function(){return v})),n.d(e,"xb",(function(){return y})),n.d(e,"G",(function(){return w})),n.d(e,"fb",(function(){return k})),n.d(e,"V",(function(){return S})),n.d(e,"qc",(function(){return _})),n.d(e,"z",(function(){return x})),n.d(e,"rc",(function(){return L})),n.d(e,"A",(function(){return C})),n.d(e,"mc",(function(){return I})),n.d(e,"t",(function(){return $})),n.d(e,"vb",(function(){return N})),n.d(e,"tc",(function(){return P})),n.d(e,"nc",(function(){return T})),n.d(e,"hc",(function(){return q})),n.d(e,"q",(function(){return z})),n.d(e,"rb",(function(){return F})),n.d(e,"Z",(function(){return U})),n.d(e,"Ub",(function(){return D})),n.d(e,"Sb",(function(){return R})),n.d(e,"h",(function(){return M})),n.d(e,"kb",(function(){return A})),n.d(e,"J",(function(){return V})),n.d(e,"ic",(function(){return E})),n.d(e,"p",(function(){return B})),n.d(e,"qb",(function(){return J})),n.d(e,"Y",(function(){return K})),n.d(e,"m",(function(){return Q})),n.d(e,"N",(function(){return H})),n.d(e,"yc",(function(){return G})),n.d(e,"ec",(function(){return W})),n.d(e,"nb",(function(){return X})),n.d(e,"jc",(function(){return Y})),n.d(e,"xc",(function(){return Z})),n.d(e,"fc",(function(){return tt})),n.d(e,"n",(function(){return et})),n.d(e,"ob",(function(){return nt})),n.d(e,"W",(function(){return rt})),n.d(e,"kc",(function(){return at})),n.d(e,"r",(function(){return ot})),n.d(e,"tb",(function(){return it})),n.d(e,"cb",(function(){return st})),n.d(e,"gc",(function(){return ut})),n.d(e,"ac",(function(){return ct})),n.d(e,"j",(function(){return dt})),n.d(e,"lb",(function(){return lt})),n.d(e,"oc",(function(){return mt})),n.d(e,"u",(function(){return ft})),n.d(e,"eb",(function(){return pt})),n.d(e,"wb",(function(){return ht})),n.d(e,"pc",(function(){return bt})),n.d(e,"v",(function(){return gt})),n.d(e,"sb",(function(){return jt})),n.d(e,"ab",(function(){return Ot})),n.d(e,"sc",(function(){return vt})),n.d(e,"w",(function(){return yt})),n.d(e,"Db",(function(){return wt})),n.d(e,"gb",(function(){return kt})),n.d(e,"M",(function(){return St})),n.d(e,"Mb",(function(){return _t})),n.d(e,"bb",(function(){return xt})),n.d(e,"dc",(function(){return Lt})),n.d(e,"cc",(function(){return Ct})),n.d(e,"l",(function(){return It})),n.d(e,"mb",(function(){return $t})),n.d(e,"L",(function(){return Nt})),n.d(e,"C",(function(){return Pt})),n.d(e,"zc",(function(){return Tt})),n.d(e,"Zb",(function(){return qt})),n.d(e,"Yb",(function(){return zt})),n.d(e,"hb",(function(){return Ft})),n.d(e,"Jb",(function(){return Ut})),n.d(e,"Ib",(function(){return Dt})),n.d(e,"Kb",(function(){return Rt})),n.d(e,"Hb",(function(){return Mt})),n.d(e,"Qb",(function(){return At})),n.d(e,"Pb",(function(){return Vt})),n.d(e,"f",(function(){return Et})),n.d(e,"F",(function(){return Bt})),n.d(e,"S",(function(){return Jt})),n.d(e,"Bb",(function(){return Kt})),n.d(e,"B",(function(){return Qt})),n.d(e,"Ob",(function(){return Ht})),n.d(e,"e",(function(){return Gt})),n.d(e,"jb",(function(){return Wt})),n.d(e,"R",(function(){return Xt})),n.d(e,"Wb",(function(){return Yt})),n.d(e,"yb",(function(){return Zt})),n.d(e,"i",(function(){return te})),n.d(e,"Tb",(function(){return ee})),n.d(e,"Eb",(function(){return ne})),n.d(e,"a",(function(){return re})),n.d(e,"Fb",(function(){return ae})),n.d(e,"E",(function(){return oe})),n.d(e,"O",(function(){return ie})),n.d(e,"Ab",(function(){return se})),n.d(e,"D",(function(){return ue})),n.d(e,"Vb",(function(){return ce})),n.d(e,"b",(function(){return de})),n.d(e,"wc",(function(){return le})),n.d(e,"P",(function(){return me})),n.d(e,"Gb",(function(){return fe})),n.d(e,"c",(function(){return pe})),n.d(e,"vc",(function(){return he})),n.d(e,"Q",(function(){return be})),n.d(e,"bc",(function(){return ge})),n.d(e,"Rb",(function(){return je})),n.d(e,"g",(function(){return Oe})),n.d(e,"I",(function(){return ve})),n.d(e,"k",(function(){return ye})),n.d(e,"K",(function(){return we})),n.d(e,"Lb",(function(){return ke})),n.d(e,"H",(function(){return Se})),n.d(e,"uc",(function(){return _e})),n.d(e,"d",(function(){return xe})),n.d(e,"ib",(function(){return Le}));n("b4fb");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function i(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function s(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function u(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function d(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function l(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function f(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function p(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function j(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function w(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function k(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function S(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function _(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function x(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function L(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function C(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function I(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function $(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function N(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function P(){return Object(r["a"])({url:"/api/zones",method:"get"})}function T(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function q(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function z(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function F(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function U(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function D(t){return Object(r["a"])({url:"/api/sync_settings",method:"get",params:t})}function R(){return Object(r["a"])({url:"/api/sync_settings/info",method:"get"})}function M(t){return Object(r["a"])({url:"/api/sync_settings",method:"post",data:t})}function A(t,e){return Object(r["a"])({url:"/api/sync_settings/"+t,method:"patch",data:e})}function V(t){return Object(r["a"])({url:"/api/sync_settings/"+t,method:"delete"})}function E(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function B(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function J(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function K(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function Q(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function H(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function G(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function W(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function X(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function tt(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function et(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function nt(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function rt(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function at(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function it(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function st(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function ut(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"/api/cloud_vms_channels",method:"get",params:t})}function dt(t){return Object(r["a"])({url:"/api/cloud_vms_channels",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/cloud_vms_channels/"+t,method:"patch",data:e})}function mt(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ft(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function pt(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ht(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function gt(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function jt(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function Ot(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function vt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function yt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function wt(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function kt(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function St(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function _t(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function xt(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function Lt(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function Ct(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function It(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function $t(t,e){return Object(r["a"])({url:"/api/broadcastStatement/".concat(t),method:"patch",data:e})}function Nt(t){return Object(r["a"])({url:"/api/broadcastStatement/"+t,method:"delete"})}function Pt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function Tt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function Ft(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function Dt(t){return Object(o["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function At(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Vt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Et(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Bt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Jt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Kt(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Qt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Ht(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Gt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Wt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Xt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Yt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Zt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function te(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginCreate",method:"post",data:t})}function ee(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginList",method:"post",data:t})}function ne(t){return Object(r["a"])({url:"/api/departments",method:"get",params:t})}function re(t){return Object(r["a"])({url:"/api/departments",method:"post",data:t})}function ae(t){return Object(r["a"])({url:"/api/departments/"+t,method:"get"})}function oe(t,e){return Object(r["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function ie(t){return Object(r["a"])({url:"/api/departments/".concat(t),method:"delete"})}function se(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function ue(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function ce(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function de(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function le(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function me(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function fe(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function pe(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function he(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function be(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function ge(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function je(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function Oe(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function ve(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function ye(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function we(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function ke(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function Se(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function _e(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function xe(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function Le(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),s=n("5041"),u=a.a.create({baseURL:s["b"],timeout:6e4});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"8a19":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"staff-jurisdiction"},[n("el-form",{ref:"queryForm",attrs:{inline:!0}},[n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.adddata(0)}}},[t._v("新增")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:t.multipleSelection.length<1,type:"danger",size:"mini"},on:{click:t.delarrdata}},[t._v("批量删除")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:1!=t.multipleSelection.length,type:"warning",size:"mini"},on:{click:t.editdata}},[t._v("修改")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:t.dataList},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"显示名称",align:"center",prop:"remarks","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"site-id",align:"center",prop:"site_id","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"240px"},scopedSlots:t._u([{key:"default",fn:function(e){return["超级管理员"!=e.row.remarks&&"站长"!=e.row.remarks&&"编辑"!=e.row.remarks?n("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(n){return t.editdata(e.row)}}}):t._e(),n("Iconbutton",{attrs:{icontype:"qx",label:"权限"},on:{fatherMethod:function(n){return t.editjurisdiction(e.row)}}}),"超级管理员"!=e.row.remarks&&"站长"!=e.row.remarks&&"编辑"!=e.row.remarks?n("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(n){return t.handleDelete(e.row)}}}):t._e()]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),n("el-dialog",{attrs:{width:"600px",title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",attrs:{model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{"label-width":"100px",label:"角色名称",prop:"name"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入角色名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{"label-width":"100px",label:"显示名称",prop:"remarks"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入显示名称"},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1),"add"==t.dialogType?n("el-form-item",{attrs:{"label-width":"100px",label:"site-id",prop:"site_id"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入当前角色的site-id"},model:{value:t.form.site_id,callback:function(e){t.$set(t.form,"site_id",e)},expression:"form.site_id"}})],1):t._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:t.closeDialog}},[t._v("取 消")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v("确 定")])],1)],1),t.drawer?n("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,size:"40%",title:"角色权限配置"},on:{"update:visible":function(e){t.drawer=e}}},[n("el-tabs",{staticClass:"role-box",attrs:{type:"border-card"}},[n("el-tab-pane",{attrs:{label:"角色权限菜单"}},[n("el-tree",{ref:"tree",attrs:{data:t.treedata,"default-checked-keys":t.treechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:t.defaultProps},on:{"check-change":t.checkChange,check:t.nodeclick}})],1)],1),n("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:t.cancelrole}},[t._v("取消")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:t.surerole}},[t._v("确 定")])],1)],1):t._e()],1)},a=[],o=(n("ea69"),n("9302"),n("2eeb"),n("b4fb"),n("0fea")),i={name:"staff-role",data:function(){return{queryParams:{page:1,pageSize:10},loading:!0,dataList:[],dialogFormVisible:!1,form:{name:"",remarks:"",site_id:""},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入显示名称",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[],total:0,drawer:!1,treedata:[],treechoosedata:[],defaultProps:{children:"children",label:"remarks"},chooseid:void 0,checkflag:!0}},created:function(){this.getList()},methods:{getList:function(){var t=this,e={model:"Role"};Object(o["Nb"])(Object.assign(e,this.queryParams)).then((function(e){t.loading=!1,t.dataList=e.data,t.total=e.total}))},handleSelectionChange:function(t){this.multipleSelection=t},checkChange:function(t,e,n){if(this.checkflag){Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)};var r=this.$refs.tree.getNode(t.id),a=this.$refs.tree.getCheckedKeys();if(e)for(var o=r.level;o>1;o--)r.parent.checked||(r=r.parent,a.push(r.data.id));else if(r.childNodes)for(var i=0;i<r.childNodes.length;i++)a.remove(r.childNodes[i].key);this.$refs.tree.setCheckedKeys(a)}},nodeclick:function(t,e){function n(t){if(t.childNodes)for(var e=0;e<t.childNodes.length;e++)r.push(t.childNodes[e].key),t.childNodes[e].childNodes&&n(t.childNodes[e])}var r=this.$refs.tree.getCheckedKeys();if(e.checkedKeys.indexOf(t.id)>-1){var a=this.$refs.tree.getNode(t.id);console.log(a),n(a),this.$refs.tree.setCheckedKeys(r)}},cancelrole:function(){this.drawer=!1},surerole:function(){var t=this,e=this.$refs.tree.getCheckedKeys(),n=e.map((function(t){return t})).join(",");Object(o["y"])(this.chooseid,n).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.getList(),t.drawer=!1):t.$message({message:e.message,type:"warning"})}))},editjurisdiction:function(t){var e=this;this.treechoosedata=[],this.treedata=[],this.drawer=!0,this.chooseid=t.id,Object(o["lc"])(t.id).then((function(t){e.treedata=t.data;var n=JSON.parse(JSON.stringify(e.treedata)),r=[];function a(t){for(var e=0;e<t.length;e++)r=r.concat(t[e]),t[e].children&&a(t[e].children)}a(n);for(var o=0;o<r.length;o++)r[o].own&&e.treechoosedata.push(r[o].id)}))},initForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields(),this.form={name:"",remarks:"",site_id:""}},adddata:function(){this.initForm(),this.dialogTitle="新增角色",this.dialogType="add",this.dialogFormVisible=!0},editdata:function(t){t=this.multipleSelection[0]||t;this.initForm(),this.form=JSON.parse(JSON.stringify(t)),this.dialogTitle="编辑角色",this.dialogType="edit",this.dialogFormVisible=!0},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除id为"+t.id+"的角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["db"])(t.id).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList()):e.$message({message:t.message,type:"warning"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},delarrdata:function(){var t=this,e=this.multipleSelection.map((function(t){return t.id})).join(",");this.$confirm("此操作将永久删除id为"+e+"的角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["U"])(e).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.getList()):t.$message({message:e.message,type:"warning"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.dialogFormVisible=!1},enterDialog:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&("edit"==t.dialogType?Object(o["ub"])(t.form.id,t.form).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})})):Object(o["s"])(t.form).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})})))}))}}},s=i,u=(n("cb08"),n("b18d"),n("cba8")),c=Object(u["a"])(s,r,a,!1,null,"5bb2598d",null);e["default"]=c.exports},a94f:function(t,e,n){},b18d:function(t,e,n){"use strict";n("a94f")},b60c:function(t,e,n){"use strict";n("b130"),n("90aa"),n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),s=n("5f87"),u=n("5041"),c=a.a.create({baseURL:u["c"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(s["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(n){if(console.log(n.data),200===n.status){var r=n.data,a=r.token_type+" "+r.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},cb08:function(t,e,n){"use strict";n("cfdb")},cfdb:function(t,e,n){}}]);