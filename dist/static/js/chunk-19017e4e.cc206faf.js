(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19017e4e"],{"029b":function(t,e,r){},"0385":function(t,e,r){"use strict";r("caad"),r("2532"),r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),u=r("5f87"),s=r("5041"),c=a.a.create({baseURL:s["d"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(u["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(r){if(console.log(r.data),200===r.status){var n=r.data,a=n.token_type+" "+n.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0fea":function(t,e,r){"use strict";r.d(e,"zb",(function(){return i})),r.d(e,"o",(function(){return u})),r.d(e,"pb",(function(){return s})),r.d(e,"X",(function(){return c})),r.d(e,"T",(function(){return d})),r.d(e,"Nb",(function(){return l})),r.d(e,"s",(function(){return m})),r.d(e,"ub",(function(){return f})),r.d(e,"db",(function(){return p})),r.d(e,"U",(function(){return b})),r.d(e,"lc",(function(){return h})),r.d(e,"y",(function(){return g})),r.d(e,"Xb",(function(){return _})),r.d(e,"Cb",(function(){return j})),r.d(e,"x",(function(){return O})),r.d(e,"xb",(function(){return x})),r.d(e,"G",(function(){return v})),r.d(e,"fb",(function(){return w})),r.d(e,"V",(function(){return y})),r.d(e,"qc",(function(){return S})),r.d(e,"z",(function(){return k})),r.d(e,"rc",(function(){return I})),r.d(e,"A",(function(){return $})),r.d(e,"mc",(function(){return z})),r.d(e,"t",(function(){return U})),r.d(e,"vb",(function(){return C})),r.d(e,"tc",(function(){return P})),r.d(e,"nc",(function(){return A})),r.d(e,"hc",(function(){return L})),r.d(e,"q",(function(){return D})),r.d(e,"rb",(function(){return q})),r.d(e,"Z",(function(){return N})),r.d(e,"Ub",(function(){return R})),r.d(e,"Sb",(function(){return M})),r.d(e,"h",(function(){return T})),r.d(e,"kb",(function(){return E})),r.d(e,"J",(function(){return F})),r.d(e,"ic",(function(){return J})),r.d(e,"p",(function(){return B})),r.d(e,"qb",(function(){return V})),r.d(e,"Y",(function(){return Q})),r.d(e,"m",(function(){return H})),r.d(e,"N",(function(){return G})),r.d(e,"yc",(function(){return K})),r.d(e,"ec",(function(){return W})),r.d(e,"nb",(function(){return X})),r.d(e,"jc",(function(){return Y})),r.d(e,"xc",(function(){return Z})),r.d(e,"fc",(function(){return tt})),r.d(e,"n",(function(){return et})),r.d(e,"ob",(function(){return rt})),r.d(e,"W",(function(){return nt})),r.d(e,"kc",(function(){return at})),r.d(e,"r",(function(){return ot})),r.d(e,"tb",(function(){return it})),r.d(e,"cb",(function(){return ut})),r.d(e,"gc",(function(){return st})),r.d(e,"ac",(function(){return ct})),r.d(e,"j",(function(){return dt})),r.d(e,"lb",(function(){return lt})),r.d(e,"oc",(function(){return mt})),r.d(e,"u",(function(){return ft})),r.d(e,"eb",(function(){return pt})),r.d(e,"wb",(function(){return bt})),r.d(e,"pc",(function(){return ht})),r.d(e,"v",(function(){return gt})),r.d(e,"sb",(function(){return _t})),r.d(e,"ab",(function(){return jt})),r.d(e,"sc",(function(){return Ot})),r.d(e,"w",(function(){return xt})),r.d(e,"Db",(function(){return vt})),r.d(e,"gb",(function(){return wt})),r.d(e,"M",(function(){return yt})),r.d(e,"Mb",(function(){return St})),r.d(e,"bb",(function(){return kt})),r.d(e,"dc",(function(){return It})),r.d(e,"cc",(function(){return $t})),r.d(e,"l",(function(){return zt})),r.d(e,"mb",(function(){return Ut})),r.d(e,"L",(function(){return Ct})),r.d(e,"C",(function(){return Pt})),r.d(e,"zc",(function(){return At})),r.d(e,"Zb",(function(){return Lt})),r.d(e,"Yb",(function(){return Dt})),r.d(e,"hb",(function(){return qt})),r.d(e,"Jb",(function(){return Nt})),r.d(e,"Ib",(function(){return Rt})),r.d(e,"Kb",(function(){return Mt})),r.d(e,"Hb",(function(){return Tt})),r.d(e,"Qb",(function(){return Et})),r.d(e,"Pb",(function(){return Ft})),r.d(e,"f",(function(){return Jt})),r.d(e,"F",(function(){return Bt})),r.d(e,"S",(function(){return Vt})),r.d(e,"Bb",(function(){return Qt})),r.d(e,"B",(function(){return Ht})),r.d(e,"Ob",(function(){return Gt})),r.d(e,"e",(function(){return Kt})),r.d(e,"jb",(function(){return Wt})),r.d(e,"R",(function(){return Xt})),r.d(e,"Wb",(function(){return Yt})),r.d(e,"yb",(function(){return Zt})),r.d(e,"i",(function(){return te})),r.d(e,"Tb",(function(){return ee})),r.d(e,"Eb",(function(){return re})),r.d(e,"a",(function(){return ne})),r.d(e,"Fb",(function(){return ae})),r.d(e,"E",(function(){return oe})),r.d(e,"O",(function(){return ie})),r.d(e,"Ab",(function(){return ue})),r.d(e,"D",(function(){return se})),r.d(e,"Vb",(function(){return ce})),r.d(e,"b",(function(){return de})),r.d(e,"wc",(function(){return le})),r.d(e,"P",(function(){return me})),r.d(e,"Gb",(function(){return fe})),r.d(e,"c",(function(){return pe})),r.d(e,"vc",(function(){return be})),r.d(e,"Q",(function(){return he})),r.d(e,"bc",(function(){return ge})),r.d(e,"Rb",(function(){return _e})),r.d(e,"g",(function(){return je})),r.d(e,"I",(function(){return Oe})),r.d(e,"k",(function(){return xe})),r.d(e,"K",(function(){return ve})),r.d(e,"Lb",(function(){return we})),r.d(e,"H",(function(){return ye})),r.d(e,"uc",(function(){return Se})),r.d(e,"d",(function(){return ke})),r.d(e,"ib",(function(){return Ie}));r("99af");var n=r("b775"),a=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(n["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(n["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(n["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(n["a"])({url:"/api/permissions/"+t,method:"delete"})}function d(t){return Object(n["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function l(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/api/roles",method:"post",params:t})}function f(t,e){return Object(n["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function p(t){return Object(n["a"])({url:"/api/roles/"+t,method:"delete"})}function b(t){return Object(n["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function h(t){return Object(n["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(n["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function _(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/api/channels",method:"get",params:t})}function O(t){return Object(n["a"])({url:"/api/users",method:"post",data:t})}function x(t,e){return Object(n["a"])({url:"/api/user/"+t,method:"patch",data:e})}function v(t,e){return Object(n["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function w(t){return Object(n["a"])({url:"/api/user/"+t,method:"delete"})}function y(t){return Object(n["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function S(t){return Object(n["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function k(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function I(t){return Object(n["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function $(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function z(t){return Object(n["a"])({url:"/api/sites",method:"get",params:t})}function U(t){return Object(n["a"])({url:"/api/sites",method:"post",data:t})}function C(t,e){return Object(n["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function P(){return Object(n["a"])({url:"/api/zones",method:"get"})}function A(t){return Object(n["a"])({url:"/api/sites/"+t,method:"get"})}function L(t){return Object(n["a"])({url:"/api/products",method:"get",params:t})}function D(t){return Object(n["a"])({url:"/api/products",method:"post",data:t})}function q(t,e){return Object(n["a"])({url:"/api/products/"+t,method:"patch",data:e})}function N(t){return Object(n["a"])({url:"/api/products/"+t,method:"delete"})}function R(t){return Object(n["a"])({url:"/api/sync_settings",method:"get",params:t})}function M(){return Object(n["a"])({url:"/api/sync_settings/info",method:"get"})}function T(t){return Object(n["a"])({url:"/api/sync_settings",method:"post",data:t})}function E(t,e){return Object(n["a"])({url:"/api/sync_settings/"+t,method:"patch",data:e})}function F(t){return Object(n["a"])({url:"/api/sync_settings/"+t,method:"delete"})}function J(t){return Object(n["a"])({url:"/api/product_versions",method:"get",params:t})}function B(t){return Object(n["a"])({url:"/api/product_versions",method:"post",data:t})}function V(t,e){return Object(n["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function Q(t){return Object(n["a"])({url:"/api/product_versions/"+t,method:"delete"})}function H(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function G(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function K(t){return Object(n["a"])({url:"/api/channels/setSort",method:"post",data:t})}function W(t){return Object(n["a"])({url:"/api/channels/"+t,method:"get"})}function X(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function Y(t){return Object(n["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function Z(t){return Object(n["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function tt(t){return Object(n["a"])({url:"/api/categories",method:"get",params:t})}function et(t){return Object(n["a"])({url:"/api/categories",method:"post",data:t})}function rt(t,e){return Object(n["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function nt(t){return Object(n["a"])({url:"/api/categories/"+t,method:"delete"})}function at(t){return Object(n["a"])({url:"/api/resources",method:"get",params:t})}function ot(t){return Object(n["a"])({url:"/api/resources",method:"post",data:t})}function it(t,e){return Object(n["a"])({url:"/api/resources/"+t,method:"post",data:e})}function ut(t){return Object(n["a"])({url:"/api/resources/"+t,method:"delete"})}function st(t){return Object(n["a"])({url:"/api/resources/myResources",method:"get",params:t})}function ct(t){return Object(n["a"])({url:"/api/cloud_vms_channels",method:"get",params:t})}function dt(t){return Object(n["a"])({url:"/api/cloud_vms_channels",method:"post",data:t})}function lt(t,e){return Object(n["a"])({url:"/api/cloud_vms_channels/"+t,method:"patch",data:e})}function mt(t){return Object(n["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ft(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function pt(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function bt(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ht(t){return Object(n["a"])({url:"/api/programs",method:"get",params:t})}function gt(t){return Object(n["a"])({url:"/api/programs",method:"post",data:t})}function _t(t,e){return Object(n["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function jt(t){return Object(n["a"])({url:"/api/programs/"+t,method:"delete"})}function Ot(t){return Object(n["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function xt(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function vt(t){return Object(n["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function wt(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function yt(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function St(t){return Object(n["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function kt(t){return Object(n["a"])({url:"/api/replays/"+t,method:"delete"})}function It(t){return Object(n["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function $t(t,e){return Object(n["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function zt(t){return Object(n["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function Ut(t,e){return Object(n["a"])({url:"/api/broadcastStatement/".concat(t),method:"patch",data:e})}function Ct(t){return Object(n["a"])({url:"/api/broadcastStatement/"+t,method:"delete"})}function Pt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function At(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function Lt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function Tt(t){return Object(a["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function Et(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Ft(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Jt(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Bt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Vt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Qt(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Ht(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Gt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Kt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Wt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Xt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Yt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Zt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function te(t){return Object(a["a"])({url:"/internal/points/pointLoginCreate",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/internal/points/pointLoginList",method:"post",data:t})}function re(t){return Object(n["a"])({url:"/api/departments",method:"get",params:t})}function ne(t){return Object(n["a"])({url:"/api/departments",method:"post",data:t})}function ae(t){return Object(n["a"])({url:"/api/departments/"+t,method:"get"})}function oe(t,e){return Object(n["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function ie(t){return Object(n["a"])({url:"/api/departments/".concat(t),method:"delete"})}function ue(t){return Object(n["a"])({url:"/api/products/".concat(t),method:"get"})}function se(t,e){return Object(n["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function ce(){return Object(n["a"])({url:"/api/upload/getH5Dir",method:"get"})}function de(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function le(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function me(t){return Object(n["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function fe(t){return Object(n["a"])({url:"/api/h5",method:"get",params:t})}function pe(t){return Object(n["a"])({url:"/api/h5",method:"post",data:t})}function be(t,e){return Object(n["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function he(t){return Object(n["a"])({url:"/api/h5/".concat(t),method:"delete"})}function ge(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function _e(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function je(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function Oe(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function xe(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function ve(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function we(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ye(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function Se(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function ke(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function Ie(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),u=r("5041"),s=a.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"446b":function(t,e,r){},"79b0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"channel-info",staticStyle:{"padding-top":"80px"}},[r("el-form",{ref:"dataForm",staticStyle:{display:"flex"},attrs:{model:t.form,rules:t.rules}},[r("div",{staticClass:"form-l",staticStyle:{width:"50%","padding-left":"100px"}},[r("el-form-item",{attrs:{"label-width":"120px",label:"站点名称",prop:"name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入站点名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"英文标识",prop:"en_name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入英文标识"},model:{value:t.form.en_name,callback:function(e){t.$set(t.form,"en_name",e)},expression:"form.en_name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"区域选择",prop:"zone_id"}},[r("el-select",{attrs:{disabled:t.editflag,placeholder:"请选择"},model:{value:t.form.zone_id,callback:function(e){t.$set(t.form,"zone_id",e)},expression:"form.zone_id"}},t._l(t.zoneoptions,(function(t){return r("el-option",{key:t.id,attrs:{label:t.description,value:t.id}})})),1)],1),r("el-form-item",{staticStyle:{width:"120%"},attrs:{"label-width":"120px",label:"基础点击量随机",prop:"extra.random_view_range"}},[r("el-input-number",{attrs:{disabled:t.editflag,precision:0,max:t.form.extra.random_view_range.max||0,controls:!1},on:{input:function(e){return t.forceUpdate()}},model:{value:t.form.extra.random_view_range.min,callback:function(e){t.$set(t.form.extra.random_view_range,"min",e)},expression:"form.extra.random_view_range.min"}}),t._v(" ~ "),r("el-input-number",{attrs:{disabled:t.editflag,precision:0,min:t.form.extra.random_view_range.min||0,controls:!1},on:{input:function(e){return t.forceUpdate()}},model:{value:t.form.extra.random_view_range.max,callback:function(e){t.$set(t.form.extra.random_view_range,"max",e)},expression:"form.extra.random_view_range.max"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"点击量系数",prop:"extra.multiplying_factor"}},[r("el-input-number",{attrs:{disabled:t.editflag,precision:0,controls:!1},on:{input:function(e){return t.forceUpdate()}},model:{value:t.form.extra.multiplying_factor,callback:function(e){t.$set(t.form.extra,"multiplying_factor",e)},expression:"form.extra.multiplying_factor"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"LOGO：",prop:"logo"}},[r("el-upload",{staticClass:"avatar-uploader",class:t.editflag?"notallowed":"",attrs:{disabled:t.editflag,action:t.VUE_APP_BASE_API+"/api/upload/image",headers:t.importHeaders,name:"image","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.form.logo?r("img",{staticClass:"avatar",attrs:{src:t.form.logo}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{"label-width":"120px",label:"水印：",prop:"extra.watermark"}},[r("upload-single",{class:t.editflag?"notallowed":"",attrs:{disabled:t.editflag},model:{value:t.form.extra.watermark,callback:function(e){t.$set(t.form.extra,"watermark",e)},expression:"form.extra.watermark"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"云媒资站点标签配置",prop:"blue_cloud_tag"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入云媒资站点标签配置"},model:{value:t.form.extra.blue_cloud_tag,callback:function(e){t.$set(t.form.extra,"blue_cloud_tag",e)},expression:"form.extra.blue_cloud_tag"}})],1)],1),r("div",{staticClass:"form-r",staticStyle:{width:"50%","padding-left":"50px"}},[r("el-form-item",{attrs:{"label-width":"120px",label:"个性化域名",prop:"extra.custom_domain"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入个性化域名"},model:{value:t.form.extra.custom_domain,callback:function(e){t.$set(t.form.extra,"custom_domain",e)},expression:"form.extra.custom_domain"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"蓝云租户",prop:"extra.uni_site"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入蓝云租户"},model:{value:t.form.extra.uni_site,callback:function(e){t.$set(t.form.extra,"uni_site",e)},expression:"form.extra.uni_site"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"VMS租户",prop:"extra.vms_site_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入VMS租户"},model:{value:t.form.extra.vms_site_id,callback:function(e){t.$set(t.form.extra,"vms_site_id",e)},expression:"form.extra.vms_site_id"}})],1),r("el-form-item",{attrs:{disabled:t.editflag,"label-width":"120px",label:"大数据签名",prop:"extra.bigdata_settings.signature"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入大数据签名"},model:{value:t.form.extra.bigdata_settings.signature,callback:function(e){t.$set(t.form.extra.bigdata_settings,"signature",e)},expression:"form.extra.bigdata_settings.signature"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据租户ID",prop:"extra.bigdata_settings.customer_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入大数据租户ID"},model:{value:t.form.extra.bigdata_settings.customer_id,callback:function(e){t.$set(t.form.extra.bigdata_settings,"customer_id",e)},expression:"form.extra.bigdata_settings.customer_id"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据产品ID",prop:"extra.bigdata_settings.product_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入大数据产品ID"},model:{value:t.form.extra.bigdata_settings.product_id,callback:function(e){t.$set(t.form.extra.bigdata_settings,"product_id",e)},expression:"form.extra.bigdata_settings.product_id"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"大数据秘钥",prop:"extra.bigdata_settings.secret"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入大数据秘钥"},model:{value:t.form.extra.bigdata_settings.secret,callback:function(e){t.$set(t.form.extra.bigdata_settings,"secret",e)},expression:"form.extra.bigdata_settings.secret"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"负责人姓名",prop:"site_manager_name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入负责人姓名"},model:{value:t.form.site_manager_name,callback:function(e){t.$set(t.form,"site_manager_name",e)},expression:"form.site_manager_name"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"负责人手机号",prop:"site_manager_phone"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,autocomplete:"off",placeholder:"请输入负责人手机号"},model:{value:t.form.site_manager_phone,callback:function(e){t.$set(t.form,"site_manager_phone",e)},expression:"form.site_manager_phone"}})],1),r("el-form-item",{attrs:{"label-width":"120px",label:"简介",prop:"introduction"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:t.editflag,type:"textarea",autocomplete:"off",placeholder:"请输入简介"},model:{value:t.form.introduction,callback:function(e){t.$set(t.form,"introduction",e)},expression:"form.introduction"}})],1),r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"是否启用",prop:"status"}},[r("el-select",{attrs:{disabled:t.editflag,placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.statusoptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{"el-form-item":"","label-width":"120px",label:"允许外部人员直接发布稿件",prop:"extra.allow_www_publish"}},[r("el-select",{attrs:{disabled:t.editflag,placeholder:"请选择"},model:{value:t.form.extra.allow_www_publish,callback:function(e){t.$set(t.form.extra,"allow_www_publish",e)},expression:"form.extra.allow_www_publish"}},t._l(t.outloginoptions,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)]),r("div",{staticStyle:{"padding-top":"30px","padding-left":"50px"}},[r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:!t.editflag,type:"success",size:"mini"},on:{click:t.editfn}},[t._v("编辑")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:t.editflag,type:"info",size:"mini"},on:{click:t.reset}},[t._v("重置")]),r("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{disabled:t.editflag,type:"primary",size:"mini"},on:{click:t.save}},[t._v("保存")])],1)],1)},a=[],o=r("5530"),i=(r("e9c4"),r("b0c0"),r("2f62")),u=r("0fea"),s=r("e60d"),c={name:"channel-info",components:{uploadSingle:s["a"]},data:function(){var t=sessionStorage.getItem("token");return{importHeaders:{Authorization:t},editflag:!0,form:{},zoneoptions:[],outloginoptions:[{value:"1",label:"是"},{value:"0",label:"否"}],statusoptions:[{value:1,label:"是"},{value:0,label:"否"}],recordform:{},rules:{name:[{required:!0,message:"请输入站点姓名",trigger:"blur"}],en_name:[{required:!0,message:"请输入英文标识",trigger:"blur"}],zone_id:[{required:!0,message:"请选择区域",trigger:"blur"}],logo:[{required:!0,message:"请选择logo",trigger:"blur"}],site_manager_name:[{required:!0,message:"请输入负责人姓名",trigger:"blur"}],site_manager_phone:[{required:!0,message:"请输入负责人手机号",trigger:"blur"}]}}},computed:Object(o["a"])({VUE_APP_BASE_API:function(){return this.imgurl2}},Object(i["b"])(["sidebar","avatar","device","u_info"])),created:function(){this.form={name:"",en_name:"",logo:"",status:1,introduction:"",site_manager_name:"",site_manager_phone:"",extra:{watermark:"",uni_site:"",vms_site_id:"",custom_domain:"",blue_cloud_tag:"",bigdata_settings:{signature:"",customer_id:"",product_id:"",secret:""},random_view_range:{min:"",max:""},multiplying_factor:1}},this.getinfo(),this.getzones()},methods:{updateView:function(t){this.$forceUpdate()},forceUpdate:function(){this.$forceUpdate()},getzones:function(){var t=this;Object(u["tc"])().then((function(e){t.zoneoptions=e.data}))},getinfo:function(){var t=this;Object(u["nc"])(this.u_info.site_id).then((function(e){console.log(e),t.form=JSON.parse(JSON.stringify(e.data)),t.$set(t.form,"site_manager_name",t.form.user.name),t.$set(t.form,"site_manager_phone",t.form.user.phone),t.recordform=JSON.parse(JSON.stringify(e.data)),t.$set(t.recordform,"site_manager_name",t.recordform.user.name),t.$set(t.recordform,"site_manager_phone",t.recordform.user.phone),t.form.extra||(t.form.extra={},t.form.extra.uni_site="")}))},reset:function(){this.form=JSON.parse(JSON.stringify(this.recordform)),this.$message({type:"success",message:"已重置"}),console.log(this.recordform)},save:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&Object(u["vb"])(t.u_info.site_id,t.form).then((function(e){t.$message({message:"保存成功",type:"success"})})).then((function(e){t.editflag=!0,t.getinfo()}),(function(t){}))}))},editfn:function(){this.editflag=!1},handleAvatarSuccess:function(t,e,r){this.form.logo=t.path,this.$forceUpdate()},beforeAvatarUpload:function(t){var e=t.size/1024/1024<20;return e||this.$message.error("上传头像图片大小不能超过 20MB!"),e}}},d=c,l=(r("b567"),r("7eec"),r("2877")),m=Object(l["a"])(d,n,a,!1,null,"b1142f04",null);e["default"]=m.exports},"7eec":function(t,e,r){"use strict";r("029b")},b567:function(t,e,r){"use strict";r("446b")},b60c:function(t,e,r){"use strict";r("caad"),r("2532"),r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),u=r("5f87"),s=r("5041"),c=a.a.create({baseURL:s["c"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(u["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(r){if(console.log(r.data),200===r.status){var n=r.data,a=n.token_type+" "+n.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),i["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),i["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},e9c4:function(t,e,r){var n=r("23e7"),a=r("d066"),o=r("d039"),i=a("JSON","stringify"),u=/[\uD800-\uDFFF]/g,s=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,d=function(t,e,r){var n=r.charAt(e-1),a=r.charAt(e+1);return s.test(t)&&!c.test(a)||c.test(t)&&!s.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},l=o((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&n({target:"JSON",stat:!0,forced:l},{stringify:function(t,e,r){var n=i.apply(null,arguments);return"string"==typeof n?n.replace(u,d):n}})}}]);