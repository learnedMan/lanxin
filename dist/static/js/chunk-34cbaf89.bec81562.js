(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34cbaf89"],{"0385":function(t,e,n){"use strict";n("b130"),n("90aa"),n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5f87"),s=n("5041"),c=a.a.create({baseURL:s["d"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(u["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(n){if(console.log(n.data),200===n.status){var r=n.data,a=r.token_type+" "+r.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0a21":function(t,e,n){"use strict";n("9554")},"0fea":function(t,e,n){"use strict";n.d(e,"xb",(function(){return i})),n.d(e,"o",(function(){return u})),n.d(e,"nb",(function(){return s})),n.d(e,"W",(function(){return c})),n.d(e,"S",(function(){return d})),n.d(e,"Lb",(function(){return l})),n.d(e,"s",(function(){return p})),n.d(e,"sb",(function(){return m})),n.d(e,"cb",(function(){return f})),n.d(e,"T",(function(){return h})),n.d(e,"jc",(function(){return b})),n.d(e,"y",(function(){return g})),n.d(e,"Vb",(function(){return O})),n.d(e,"Ab",(function(){return j})),n.d(e,"x",(function(){return v})),n.d(e,"vb",(function(){return y})),n.d(e,"G",(function(){return L})),n.d(e,"eb",(function(){return w})),n.d(e,"U",(function(){return k})),n.d(e,"oc",(function(){return I})),n.d(e,"z",(function(){return _})),n.d(e,"pc",(function(){return S})),n.d(e,"A",(function(){return T})),n.d(e,"kc",(function(){return P})),n.d(e,"t",(function(){return q})),n.d(e,"tb",(function(){return x})),n.d(e,"rc",(function(){return C})),n.d(e,"lc",(function(){return N})),n.d(e,"fc",(function(){return D})),n.d(e,"q",(function(){return z})),n.d(e,"pb",(function(){return F})),n.d(e,"Y",(function(){return $})),n.d(e,"Sb",(function(){return J})),n.d(e,"Qb",(function(){return M})),n.d(e,"h",(function(){return R})),n.d(e,"jb",(function(){return U})),n.d(e,"J",(function(){return A})),n.d(e,"gc",(function(){return E})),n.d(e,"p",(function(){return B})),n.d(e,"ob",(function(){return Q})),n.d(e,"X",(function(){return V})),n.d(e,"m",(function(){return H})),n.d(e,"M",(function(){return W})),n.d(e,"wc",(function(){return G})),n.d(e,"cc",(function(){return K})),n.d(e,"lb",(function(){return X})),n.d(e,"hc",(function(){return Y})),n.d(e,"vc",(function(){return Z})),n.d(e,"dc",(function(){return tt})),n.d(e,"n",(function(){return et})),n.d(e,"mb",(function(){return nt})),n.d(e,"V",(function(){return rt})),n.d(e,"ic",(function(){return at})),n.d(e,"r",(function(){return ot})),n.d(e,"rb",(function(){return it})),n.d(e,"bb",(function(){return ut})),n.d(e,"ec",(function(){return st})),n.d(e,"Yb",(function(){return ct})),n.d(e,"j",(function(){return dt})),n.d(e,"kb",(function(){return lt})),n.d(e,"mc",(function(){return pt})),n.d(e,"u",(function(){return mt})),n.d(e,"db",(function(){return ft})),n.d(e,"ub",(function(){return ht})),n.d(e,"nc",(function(){return bt})),n.d(e,"v",(function(){return gt})),n.d(e,"qb",(function(){return Ot})),n.d(e,"Z",(function(){return jt})),n.d(e,"qc",(function(){return vt})),n.d(e,"w",(function(){return yt})),n.d(e,"Bb",(function(){return Lt})),n.d(e,"fb",(function(){return wt})),n.d(e,"L",(function(){return kt})),n.d(e,"Kb",(function(){return It})),n.d(e,"ab",(function(){return _t})),n.d(e,"bc",(function(){return St})),n.d(e,"ac",(function(){return Tt})),n.d(e,"l",(function(){return Pt})),n.d(e,"C",(function(){return qt})),n.d(e,"xc",(function(){return xt})),n.d(e,"Xb",(function(){return Ct})),n.d(e,"Wb",(function(){return Nt})),n.d(e,"gb",(function(){return Dt})),n.d(e,"Hb",(function(){return zt})),n.d(e,"Gb",(function(){return Ft})),n.d(e,"Ib",(function(){return $t})),n.d(e,"Fb",(function(){return Jt})),n.d(e,"Ob",(function(){return Mt})),n.d(e,"Nb",(function(){return Rt})),n.d(e,"f",(function(){return Ut})),n.d(e,"F",(function(){return At})),n.d(e,"R",(function(){return Et})),n.d(e,"zb",(function(){return Bt})),n.d(e,"B",(function(){return Qt})),n.d(e,"Mb",(function(){return Vt})),n.d(e,"e",(function(){return Ht})),n.d(e,"ib",(function(){return Wt})),n.d(e,"Q",(function(){return Gt})),n.d(e,"Ub",(function(){return Kt})),n.d(e,"wb",(function(){return Xt})),n.d(e,"i",(function(){return Yt})),n.d(e,"Rb",(function(){return Zt})),n.d(e,"Cb",(function(){return te})),n.d(e,"a",(function(){return ee})),n.d(e,"Db",(function(){return ne})),n.d(e,"E",(function(){return re})),n.d(e,"N",(function(){return ae})),n.d(e,"yb",(function(){return oe})),n.d(e,"D",(function(){return ie})),n.d(e,"Tb",(function(){return ue})),n.d(e,"b",(function(){return se})),n.d(e,"uc",(function(){return ce})),n.d(e,"O",(function(){return de})),n.d(e,"Eb",(function(){return le})),n.d(e,"c",(function(){return pe})),n.d(e,"tc",(function(){return me})),n.d(e,"P",(function(){return fe})),n.d(e,"Zb",(function(){return he})),n.d(e,"Pb",(function(){return be})),n.d(e,"g",(function(){return ge})),n.d(e,"I",(function(){return Oe})),n.d(e,"k",(function(){return je})),n.d(e,"K",(function(){return ve})),n.d(e,"Jb",(function(){return ye})),n.d(e,"H",(function(){return Le})),n.d(e,"sc",(function(){return we})),n.d(e,"d",(function(){return ke})),n.d(e,"hb",(function(){return Ie}));n("b4fb");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function i(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function d(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function l(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function O(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function L(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function w(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function k(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function I(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function _(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function S(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function T(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function P(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function q(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function x(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function C(){return Object(r["a"])({url:"/api/zones",method:"get"})}function N(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function D(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function z(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function F(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function $(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function J(t){return Object(r["a"])({url:"/api/sync_settings",method:"get",params:t})}function M(){return Object(r["a"])({url:"/api/sync_settings/info",method:"get"})}function R(t){return Object(r["a"])({url:"/api/sync_settings",method:"post",data:t})}function U(t,e){return Object(r["a"])({url:"/api/sync_settings/"+t,method:"patch",data:e})}function A(t){return Object(r["a"])({url:"/api/sync_settings/"+t,method:"delete"})}function E(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function B(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function Q(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function V(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function H(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function W(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function G(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function K(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function X(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function tt(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function et(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function nt(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function rt(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function at(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function it(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function ut(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function st(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"/api/cloud_vms_channels",method:"get",params:t})}function dt(t){return Object(r["a"])({url:"/api/cloud_vms_channels",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/cloud_vms_channels/"+t,method:"patch",data:e})}function pt(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function mt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ht(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function gt(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function Ot(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function jt(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function vt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function yt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function Lt(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function wt(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function kt(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function It(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function _t(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function St(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function Tt(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function Pt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function qt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function xt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function Dt(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function Ft(t){return Object(o["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function Jt(t){return Object(a["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function At(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Et(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Bt(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Qt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Vt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Ht(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Wt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Gt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Kt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Xt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Yt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginCreate",method:"post",data:t})}function Zt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginList",method:"post",data:t})}function te(t){return Object(r["a"])({url:"/api/departments",method:"get",params:t})}function ee(t){return Object(r["a"])({url:"/api/departments",method:"post",data:t})}function ne(t){return Object(r["a"])({url:"/api/departments/"+t,method:"get"})}function re(t,e){return Object(r["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function ae(t){return Object(r["a"])({url:"/api/departments/".concat(t),method:"delete"})}function oe(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function ie(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function ue(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function se(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function ce(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function de(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function le(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function pe(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function me(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function fe(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function he(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function be(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function ge(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function Oe(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function je(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function ve(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function ye(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function Le(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function we(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function ke(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function Ie(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5041"),s=a.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},4181:function(t,e,n){"use strict";n("83e2")},"83e2":function(t,e,n){},"873b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mbhmealmange"},[n("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"所属产品："}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changesource_id},model:{value:t.queryParams.sourceId,callback:function(e){t.$set(t.queryParams,"sourceId",e)},expression:"queryParams.sourceId"}},t._l(t.productList,(function(t){return n("el-option",{key:t.source_id,attrs:{label:t.name,value:t.source_id||0}})})),1)],1),n("el-form-item",{attrs:{label:"套餐名："}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.mealName,callback:function(e){t.$set(t.queryParams,"mealName",e)},expression:"queryParams.mealName"}})],1),n("el-form-item",{attrs:{label:"终端："}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.queryParams.appType,callback:function(e){t.$set(t.queryParams,"appType",e)},expression:"queryParams.appType"}},t._l(t.appTypeList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"更新时间："}},[n("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.changedate},model:{value:t.datevalue,callback:function(e){t.datevalue=e},expression:"datevalue"}})],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.initcondition}},[t._v("重置")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.adddata}},[t._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:t.dataList}},[n("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),n("el-table-column",{attrs:{align:"center",label:"JSON",prop:"path",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[e.row.publishJson?n("el-popover",{attrs:{placement:"right-start",trigger:"hover"}},[n("div",{staticClass:"popover-box"},[n("pre",[t._v(t._s(t.fmtBody(e.row.publishJson)))])]),n("i",{staticClass:"el-icon-view",attrs:{slot:"reference"},slot:"reference"})]):n("span",[t._v("无")])],1)]}}])}),n("el-table-column",{attrs:{label:"套餐ID",align:"center",prop:"mealId"}}),n("el-table-column",{attrs:{label:"套餐名",align:"center",prop:"mealName","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"终端",align:"center",prop:"appType","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"版本",align:"center",prop:"version","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"createdAt","show-overflow-tooltip":!0}}),n("el-table-column",{attrs:{width:"160px",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(n){return t.editdata(e.row)}}}),n("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(n){return t.handleDelete(e.row)}}})]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],attrs:{total:t.totalCount,page:t.queryParams.pageIndex,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageIndex",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),n("el-dialog",{attrs:{width:"550px","close-on-click-modal":!1,title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",attrs:{model:t.form,rules:t.rules}},[n("el-form-item",{attrs:{"label-width":"120px",label:"套餐:",prop:"mealId"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.mealId,callback:function(e){t.$set(t.form,"mealId",e)},expression:"form.mealId"}},t._l(t.mealList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.mealName,value:t.id}})})),1)],1),n("el-form-item",{attrs:{"label-width":"120px",label:"终端:",prop:"appType"}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:t.appTypechange},model:{value:t.form.appType,callback:function(e){t.$set(t.form,"appType",e)},expression:"form.appType"}},t._l(t.f_appTypeList,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{"label-width":"120px",label:"版本:",prop:"version"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},t._l(t.versionList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.platform+"："+t.version_code,value:t.version_code}})})),1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:t.closeDialog}},[t._v("取 消")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v("确 定")])],1)],1)],1)},a=[],o=(n("dbb3"),n("0fea")),i={name:"mbhmealmange",data:function(){return{datevalue:"",product_id:"",queryParams:{pageIndex:1,pageSize:10,sourceId:0,mealName:"",appType:""},loading:!0,dataList:[],totalCount:0,dialogFormVisible:!1,form:{},rules:{appType:[{required:!0,message:"请选择终端",trigger:"blur"}],version:[{required:!0,message:"请选择版本",trigger:"blur"}]},dialogType:"add",dialogTitle:"",mealList:[],productList:[],versionList:[],_versionList:[],appTypeList:[{value:"",label:"全部"},{value:"ANDROID",label:"ANDROID"},{value:"IOS",label:"IOS"},{value:"WEB",label:"WEB"}]}},created:function(){this.getproductList()},computed:{f_appTypeList:function(){return this.appTypeList.filter((function(t){return""!=t.value}))}},methods:{fmtBody:function(t){try{return JSON.parse(t)}catch(e){return t}},appTypechange:function(){var t=this;this.form.version="",this.versionList=JSON.parse(JSON.stringify(this._versionList)),this.versionList=this.versionList.filter((function(e){return e.platform.toLowerCase()==t.form.appType.toLowerCase()}))},getmealList:function(){var t=this,e={sourceId:this.queryParams.sourceId};Object(o["sc"])(e).then((function(e){t.mealList=e.data}))},getproductList:function(){var t=this;Object(o["fc"])({}).then((function(e){t.productList=e.data,t.product_id=t.productList[0].id,t.queryParams.sourceId=t.productList[0].source_id,t.getversionsList(),t.getmealList(),t.initForm(),t.getList()}))},getversionsList:function(){var t=this,e={page:1,pageSize:999,product_id:this.product_id};Object(o["gc"])(e).then((function(e){t._versionList=JSON.parse(JSON.stringify(e.data)),t.versionList=e.data}))},changesource_id:function(t){for(var e=0;e<this.productList.length;e++)this.productList[e].source_id==t&&(this.product_id=this.productList[e].id);this.getmealList(),this.getversionsList(),this.handleQuery(),this.initForm()},initcondition:function(){this.queryParams.mealName="",this.queryParams.appType="",this.queryParams.beginTime="",this.queryParams.endTime="",this.datevalue=""},changedate:function(){try{this.queryParams.beginTime=this.datevalue[0],this.queryParams.endTime=this.datevalue[1]}catch(t){this.queryParams.beginTime="",this.queryParams.endTime=""}},handleQuery:function(){this.loading=!0,this.queryParams.pageIndex=1,this.getList()},getList:function(){var t=this;this.loading=!0,Object(o["Jb"])(this.queryParams).then((function(e){t.loading=!1,t.dataList=e.data.list,t.totalCount=e.data.totalCount}))},adddata:function(){this.initForm(),this.dialogTitle="新增发布",this.dialogType="add",this.dialogFormVisible=!0},initForm:function(){this.form={mealId:"",sourceId:this.queryParams.sourceId,version:"",appType:""},this.$refs.dataForm&&this.$refs.dataForm.resetFields()},editdata:function(t){var e=this;this.initForm(),this.dialogTitle="编辑发布",this.dialogType="edit",this.$nextTick((function(){e.form=JSON.parse(JSON.stringify(t)),e.versionList=JSON.parse(JSON.stringify(e._versionList)),e.versionList=e.versionList.filter((function(t){return t.platform.toLowerCase()==e.form.appType.toLowerCase()}))})),this.dialogFormVisible=!0},closeDialog:function(){this.initForm(),this.dialogFormVisible=!1},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除套餐ID为"+t.mealId+"的模板化套餐, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["H"])(t.id).then((function(t){e.$message({message:"删除成功",type:"success"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},enterDialog:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e)if("edit"==t.dialogType){for(var n=0;n<t.mealList.length;n++)t.mealList[n].id==t.form.mealId&&(t.form.mealName=t.mealList[n].mealName);Object(o["hb"])(t.form).then((function(e){t.$message({message:"修改成功",type:"success"}),t.dialogFormVisible=!1,t.getList()}))}else Object(o["d"])(t.form).then((function(e){t.$message({message:"新建成功",type:"success"}),t.dialogFormVisible=!1,t.getList()}))}))}}},u=i,s=(n("4181"),n("0a21"),n("cba8")),c=Object(s["a"])(u,r,a,!1,null,"4b533b92",null);e["default"]=c.exports},9554:function(t,e,n){},b60c:function(t,e,n){"use strict";n("b130"),n("90aa"),n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5f87"),s=n("5041"),c=a.a.create({baseURL:s["c"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(u["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(n){if(console.log(n.data),200===n.status){var r=n.data,a=r.token_type+" "+r.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c}}]);