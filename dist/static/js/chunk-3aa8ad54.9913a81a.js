(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aa8ad54"],{"0184":function(t,e,n){"use strict";n("3d11")},"0385":function(t,e,n){"use strict";n("caad"),n("2532"),n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),u=n("a18c"),i=n("5f87"),s=n("5041"),c=a.a.create({baseURL:s["d"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(i["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(n){if(console.log(n.data),200===n.status){var r=n.data,a=r.token_type+" "+r.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),u["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),u["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),u["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0fea":function(t,e,n){"use strict";n.d(e,"zb",(function(){return u})),n.d(e,"o",(function(){return i})),n.d(e,"pb",(function(){return s})),n.d(e,"X",(function(){return c})),n.d(e,"T",(function(){return d})),n.d(e,"Nb",(function(){return l})),n.d(e,"s",(function(){return p})),n.d(e,"ub",(function(){return m})),n.d(e,"db",(function(){return f})),n.d(e,"U",(function(){return h})),n.d(e,"lc",(function(){return b})),n.d(e,"y",(function(){return g})),n.d(e,"Xb",(function(){return j})),n.d(e,"Cb",(function(){return O})),n.d(e,"x",(function(){return v})),n.d(e,"xb",(function(){return y})),n.d(e,"G",(function(){return I})),n.d(e,"fb",(function(){return w})),n.d(e,"V",(function(){return k})),n.d(e,"qc",(function(){return S})),n.d(e,"z",(function(){return P})),n.d(e,"rc",(function(){return _})),n.d(e,"A",(function(){return D})),n.d(e,"mc",(function(){return q})),n.d(e,"t",(function(){return x})),n.d(e,"vb",(function(){return L})),n.d(e,"tc",(function(){return N})),n.d(e,"nc",(function(){return C})),n.d(e,"hc",(function(){return R})),n.d(e,"q",(function(){return z})),n.d(e,"rb",(function(){return T})),n.d(e,"Z",(function(){return U})),n.d(e,"Ub",(function(){return F})),n.d(e,"Sb",(function(){return M})),n.d(e,"h",(function(){return A})),n.d(e,"kb",(function(){return E})),n.d(e,"J",(function(){return $})),n.d(e,"ic",(function(){return Q})),n.d(e,"p",(function(){return V})),n.d(e,"qb",(function(){return B})),n.d(e,"Y",(function(){return J})),n.d(e,"m",(function(){return H})),n.d(e,"N",(function(){return K})),n.d(e,"yc",(function(){return G})),n.d(e,"ec",(function(){return W})),n.d(e,"nb",(function(){return X})),n.d(e,"jc",(function(){return Y})),n.d(e,"xc",(function(){return Z})),n.d(e,"fc",(function(){return tt})),n.d(e,"n",(function(){return et})),n.d(e,"ob",(function(){return nt})),n.d(e,"W",(function(){return rt})),n.d(e,"kc",(function(){return at})),n.d(e,"r",(function(){return ot})),n.d(e,"tb",(function(){return ut})),n.d(e,"cb",(function(){return it})),n.d(e,"gc",(function(){return st})),n.d(e,"ac",(function(){return ct})),n.d(e,"j",(function(){return dt})),n.d(e,"lb",(function(){return lt})),n.d(e,"oc",(function(){return pt})),n.d(e,"u",(function(){return mt})),n.d(e,"eb",(function(){return ft})),n.d(e,"wb",(function(){return ht})),n.d(e,"pc",(function(){return bt})),n.d(e,"v",(function(){return gt})),n.d(e,"sb",(function(){return jt})),n.d(e,"ab",(function(){return Ot})),n.d(e,"sc",(function(){return vt})),n.d(e,"w",(function(){return yt})),n.d(e,"Db",(function(){return It})),n.d(e,"gb",(function(){return wt})),n.d(e,"M",(function(){return kt})),n.d(e,"Mb",(function(){return St})),n.d(e,"bb",(function(){return Pt})),n.d(e,"dc",(function(){return _t})),n.d(e,"cc",(function(){return Dt})),n.d(e,"l",(function(){return qt})),n.d(e,"mb",(function(){return xt})),n.d(e,"L",(function(){return Lt})),n.d(e,"C",(function(){return Nt})),n.d(e,"zc",(function(){return Ct})),n.d(e,"Zb",(function(){return Rt})),n.d(e,"Yb",(function(){return zt})),n.d(e,"hb",(function(){return Tt})),n.d(e,"Jb",(function(){return Ut})),n.d(e,"Ib",(function(){return Ft})),n.d(e,"Kb",(function(){return Mt})),n.d(e,"Hb",(function(){return At})),n.d(e,"Qb",(function(){return Et})),n.d(e,"Pb",(function(){return $t})),n.d(e,"f",(function(){return Qt})),n.d(e,"F",(function(){return Vt})),n.d(e,"S",(function(){return Bt})),n.d(e,"Bb",(function(){return Jt})),n.d(e,"B",(function(){return Ht})),n.d(e,"Ob",(function(){return Kt})),n.d(e,"e",(function(){return Gt})),n.d(e,"jb",(function(){return Wt})),n.d(e,"R",(function(){return Xt})),n.d(e,"Wb",(function(){return Yt})),n.d(e,"yb",(function(){return Zt})),n.d(e,"i",(function(){return te})),n.d(e,"Tb",(function(){return ee})),n.d(e,"Eb",(function(){return ne})),n.d(e,"a",(function(){return re})),n.d(e,"Fb",(function(){return ae})),n.d(e,"E",(function(){return oe})),n.d(e,"O",(function(){return ue})),n.d(e,"Ab",(function(){return ie})),n.d(e,"D",(function(){return se})),n.d(e,"Vb",(function(){return ce})),n.d(e,"b",(function(){return de})),n.d(e,"wc",(function(){return le})),n.d(e,"P",(function(){return pe})),n.d(e,"Gb",(function(){return me})),n.d(e,"c",(function(){return fe})),n.d(e,"vc",(function(){return he})),n.d(e,"Q",(function(){return be})),n.d(e,"bc",(function(){return ge})),n.d(e,"Rb",(function(){return je})),n.d(e,"g",(function(){return Oe})),n.d(e,"I",(function(){return ve})),n.d(e,"k",(function(){return ye})),n.d(e,"K",(function(){return Ie})),n.d(e,"Lb",(function(){return we})),n.d(e,"H",(function(){return ke})),n.d(e,"uc",(function(){return Se})),n.d(e,"d",(function(){return Pe})),n.d(e,"ib",(function(){return _e}));n("99af");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function u(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function i(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function d(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function l(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function j(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function I(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function w(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function k(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function S(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function P(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function _(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function D(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function q(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function x(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function L(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function N(){return Object(r["a"])({url:"/api/zones",method:"get"})}function C(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function R(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function z(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function T(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function U(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function F(t){return Object(r["a"])({url:"/api/sync_settings",method:"get",params:t})}function M(){return Object(r["a"])({url:"/api/sync_settings/info",method:"get"})}function A(t){return Object(r["a"])({url:"/api/sync_settings",method:"post",data:t})}function E(t,e){return Object(r["a"])({url:"/api/sync_settings/"+t,method:"patch",data:e})}function $(t){return Object(r["a"])({url:"/api/sync_settings/"+t,method:"delete"})}function Q(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function V(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function B(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function J(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function H(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function K(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function G(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function W(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function X(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function tt(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function et(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function nt(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function rt(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function at(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function ut(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function it(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function st(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"/api/cloud_vms_channels",method:"get",params:t})}function dt(t){return Object(r["a"])({url:"/api/cloud_vms_channels",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/cloud_vms_channels/"+t,method:"patch",data:e})}function pt(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function mt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ht(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function gt(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function jt(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function Ot(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function vt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function yt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function It(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function wt(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function kt(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function St(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function Pt(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function _t(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function Dt(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function qt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function xt(t,e){return Object(r["a"])({url:"/api/broadcastStatement/".concat(t),method:"patch",data:e})}function Lt(t){return Object(r["a"])({url:"/api/broadcastStatement/"+t,method:"delete"})}function Nt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function Ct(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function Tt(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function Ft(t){return Object(a["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function At(t){return Object(a["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function Et(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Qt(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Vt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Bt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Jt(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Ht(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Kt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Gt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Wt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Xt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Yt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Zt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function te(t){return Object(a["a"])({url:"/internal/points/pointLoginCreate",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/internal/points/pointLoginList",method:"post",data:t})}function ne(t){return Object(r["a"])({url:"/api/departments",method:"get",params:t})}function re(t){return Object(r["a"])({url:"/api/departments",method:"post",data:t})}function ae(t){return Object(r["a"])({url:"/api/departments/"+t,method:"get"})}function oe(t,e){return Object(r["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function ue(t){return Object(r["a"])({url:"/api/departments/".concat(t),method:"delete"})}function ie(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function se(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function ce(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function de(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function le(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function pe(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function me(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function fe(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function he(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function be(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function ge(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function je(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function Oe(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function ve(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function ye(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function Ie(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function we(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ke(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function Se(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function Pe(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function _e(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"18d2":function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n("d3b7"),n("159b"),n("b64b"),n("2b19"),n("e9c4"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861");var r=n("bc3a"),a=n.n(r),o=n("5c96"),u=n("a18c"),i=n("5041"),s=a.a.create({baseURL:i["f"],timeout:6e4});function c(t){var e="";return Object.keys(t).forEach((function(n){Object.is(t[n],void 0)||Object.is(t[n],null)||Object.is(JSON.stringify(t[n]),"{}")||(e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&")})),e}function d(t,e,n){return s.post(t,e,{transformRequest:[function(t){return c(t)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"blob"}).then((function(t){var e=t,r=new Blob([e]);if("download"in document.createElement("a")){var a=document.createElement("a");a.download=n,a.style.display="none",a.href=URL.createObjectURL(r),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)}else navigator.msSaveBlob(r,n)})).catch((function(t){console.error(t)}))}s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||200==t.data.status_code||"true"===t.headers.success||t.data instanceof Blob?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),u["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=s},"2ab73":function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),u=n("a18c"),i=n("5041"),s=a.a.create({baseURL:i["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),u["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"2b19":function(t,e,n){var r=n("23e7"),a=n("129f");r({target:"Object",stat:!0},{is:a})},"3d11":function(t,e,n){},"48b0":function(t,e,n){},"48fb":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return s}));var r=n("18d2");function a(t){return Object(r["a"])({url:"/api/algo/getMultiHits",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/api/statistics/items/kpiStatistics",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/api/statistics/items/kpiStatisticsByAuthor",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/api/statistics/items/pageKpiStatistics",method:"post",data:t})}function s(t,e){return Object(r["b"])(t,e,"statistics_kpi.xlsx")}},"8c22":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-statistics"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("keep-alive",{attrs:{exclude:t.exclude}},[n(t.component,{tag:"component",attrs:{id:t.id,authorId:t.authorId},on:{"watch-detail":t.watchDetail,handleReturn:t.handleReturn}})],1)],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-statistics-lists"},[n("el-tabs",{staticStyle:{height:"100%"},attrs:{"tab-position":"left"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"按部门查看",name:"department"}},[n("el-form",{ref:"department",attrs:{model:t.department.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"时间区间:",prop:"Date"}},[n("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:function(e){return t.handleDateChange(e,"department")}},model:{value:t.department.queryParams.Date,callback:function(e){t.$set(t.department.queryParams,"Date",e)},expression:"department.queryParams.Date"}})],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleReset("department")}}},[t._v(" 重置 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleQuery("department")}}},[t._v(" 搜索 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:function(e){return t.handleImport("department")}}},[t._v(" 导出 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.department.loading,expression:"department.loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.department.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":function(e){return t.handleSelectionChange(e,"department")}}},[n("el-table-column",{attrs:{label:"部门名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"#409EFF",cursor:"pointer"},on:{click:function(n){return t.goPerson(e.row)}}},[t._v(t._s(e.row.department_name))])]}}])}),n("el-table-column",{attrs:{label:"发稿量",align:"center",prop:"num"}}),n("el-table-column",{attrs:{label:"截止昨日点击量",align:"center",prop:"real_view"}})],1)],1),n("el-tab-pane",{attrs:{label:"按人员查看",name:"person"}},[n("el-form",{ref:"person",attrs:{model:t.person.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"时间区间:",prop:"Date"}},[n("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:function(e){return t.handleDateChange(e,"person")}},model:{value:t.person.queryParams.Date,callback:function(e){t.$set(t.person.queryParams,"Date",e)},expression:"person.queryParams.Date"}})],1),n("el-form-item",{attrs:{label:"部门:",prop:"departmentId"}},[n("el-cascader",{staticStyle:{width:"350px"},attrs:{"show-all-levels":!1,options:t.dataList,props:{emitPath:!1,checkStrictly:!0,value:"id",label:"name"},clearable:""},model:{value:t.person.queryParams.departmentId,callback:function(e){t.$set(t.person.queryParams,"departmentId",e)},expression:"person.queryParams.departmentId"}})],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleReset("person")}}},[t._v(" 重置 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleQuery("person")}}},[t._v(" 搜索 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:function(e){return t.handleImport("person")}}},[t._v(" 导出 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.person.loading,expression:"person.loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.person.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":function(e){return t.handleSelectionChange(e,"person")}}},[n("el-table-column",{attrs:{label:"人员",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"#409EFF",cursor:"pointer"},on:{click:function(n){return t.watchDetail(e.row)}}},[t._v(t._s(e.row.auhtor_name))])]}}])}),n("el-table-column",{attrs:{label:"部门",align:"center",prop:"department_name"}}),n("el-table-column",{attrs:{label:"发稿量",align:"center",prop:"num"}}),n("el-table-column",{attrs:{label:"截止昨日点击量",align:"center",prop:"real_view"}})],1)],1)],1)],1)},u=[],i=n("5530"),s=n("48fb"),c=n("0fea"),d={data:function(){return{activeName:"department",dataList:[],department:{queryParams:{beginTime:"",endTime:"",Date:""},loading:!1,tableData:[],selection:[]},person:{queryParams:{beginTime:"",endTime:"",Date:"",departmentId:""},loading:!1,tableData:[],selection:[]}}},computed:{site:function(t){var e,n,r=t.$store.state.user.u_info,a=(null===r||void 0===r||null===(e=r.site)||void 0===e||null===(n=e.extra)||void 0===n?void 0:n.bigdata_settings)||{};return{productId:a.product_id||"",customerId:a.customer_id||""}}},methods:{handleDateChange:function(t,e){var n=t||["",""];this[e].queryParams.beginTime=n[0],this[e].queryParams.endTime=n[1]},handleReset:function(t){this.resetForm(t)},handleQuery:function(t){this["department"===t?"getDepartmentList":"getPersonLists"]()},handleImport:function(){Object(s["a"])("/api/statistics/items/kpiStatistics/export",{customerId:this.site.customerId,productId:this.site.productId})},getDepart:function(){var t=this;Object(c["Eb"])().then((function(e){t.dataList=e}))},getDepartmentList:function(){var t=this.department;t.loading=!0,t.tableData=[],t.selection=[];var e=Object(i["a"])(Object(i["a"])({},t.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});delete e.Date,Object(s["d"])(this.removePropertyOfNullFor0(e)).then((function(e){t.loading=!1,t.tableData=e.data}))},getPersonLists:function(){var t=this.person;t.loading=!0,t.tableData=[],t.selection=[];var e=Object(i["a"])(Object(i["a"])({},t.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});delete e.Date,Object(s["c"])(this.removePropertyOfNullFor0(e)).then((function(e){t.loading=!1,t.tableData=e.data}))},watchDetail:function(t){this.$emit("watch-detail",t.department_id,t.auth_id)},goPerson:function(t){console.log("row",t),this.activeName="person",this.person.queryParams.departmentId=t.department_id,this.getPersonLists()}},created:function(){this.getDepart(),this.site.productId&&this.site.customerId?(this.getDepartmentList(),this.getPersonLists()):this.$message("请联系管理员配置productId和customerId参数")}},l=d,p=(n("0184"),n("2877")),m=Object(p["a"])(l,o,u,!1,null,"26a815f2",null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-statistics-detail"},[n("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"时间区间:",prop:"dateValue"}},[n("el-date-picker",{attrs:{size:"small",type:"daterange",align:"right","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.handleDateChange},model:{value:t.queryParams.dateValue,callback:function(e){t.$set(t.queryParams,"dateValue",e)},expression:"queryParams.dateValue"}})],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleReset}},[t._v(" 重置 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"warning",size:"mini"},on:{click:t.handleImport}},[t._v(" 导出 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"success",size:"mini"},on:{click:t.handleReturn}},[t._v(" 返回上一级 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"稿件名称",align:"center",prop:"title"}}),n("el-table-column",{attrs:{label:"发稿人",align:"center",prop:"auhtorName"}}),n("el-table-column",{attrs:{label:"原作者",align:"center",prop:"extra.author"}}),n("el-table-column",{attrs:{label:"所属部门",align:"center",prop:"departmentName"}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createdAt"}}),n("el-table-column",{attrs:{label:"发稿时间",align:"center",prop:"publishedAt"}}),n("el-table-column",{attrs:{label:"阅读量（真实）",align:"center",prop:"realView"}}),n("el-table-column",{attrs:{label:"阅读量（修正）",align:"center",prop:"baseView"}}),n("el-table-column",{attrs:{label:"链接",align:"center",prop:"extra.url"}})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}})],1)},b=[],g=(n("a9e3"),n("d81d"),{props:{id:[Number,String],authorId:[Number,String]},data:function(){return{queryParams:{departmentId:this.id,authorId:this.authorId,beginTime:"",endTime:"",dateValue:"",pageSize:10,pageNum:1},loading:!1,tableData:[],total:0}},computed:{site:function(t){var e,n,r=t.$store.state.user.u_info,a=(null===r||void 0===r||null===(e=r.site)||void 0===e||null===(n=e.extra)||void 0===n?void 0:n.bigdata_settings)||{};return{productId:a.product_id||"",customerId:a.customer_id||""}}},methods:{handleDateChange:function(t){var e=t||["",""];this.queryParams.beginTime=e[0],this.queryParams.endTime=e[1]},handleReset:function(){Object.assign(this.queryParams,{beginTime:"",endTime:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleReturn:function(){this.$emit("handleReturn")},handleImport:function(){var t=Object(i["a"])(Object(i["a"])({},this.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});delete t.dateValue,Object(s["a"])("/api/statistics/items/pageKpiStatistics/export",this.removePropertyOfNullFor0(t))},getList:function(){var t=this;this.loading=!0,this.tableData=[];var e=Object(i["a"])(Object(i["a"])({},this.queryParams),{},{customerId:this.site.customerId,productId:this.site.productId});delete e.dateValue,Object(s["e"])(this.removePropertyOfNullFor0(e)).then((function(e){t.loading=!1,t.tableData=(e.data||[]).map((function(t){return t.extra=JSON.parse(t.extra),Object(i["a"])({},t)}))}))}},created:function(){this.getList()}}),j=g,O=(n("d747"),Object(p["a"])(j,h,b,!1,null,null,null)),v=O.exports,y={name:"Statistics",components:{Lists:f,Detail:v},data:function(){return{exclude:["Detail"],component:"Lists",id:"",authorId:""}},methods:{handleReturn:function(){this.component="Lists"},watchDetail:function(t,e){this.id=t,this.authorId=e,this.component="Detail"}}},I=y,w=(n("d39c"),Object(p["a"])(I,r,a,!1,null,"61fdf637",null));e["default"]=w.exports},b60c:function(t,e,n){"use strict";n("caad"),n("2532"),n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),u=n("a18c"),i=n("5f87"),s=n("5041"),c=a.a.create({baseURL:s["c"],timeout:5e3});c.interceptors.request.use((function(t){return sessionStorage.getItem("token")&&Object(i["d"])()&&!t.url.includes("/api/authorizations/refresh")?new Promise((function(e){a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:sessionStorage.getItem("token")}}).then((function(n){if(console.log(n.data),200===n.status){var r=n.data,a=r.token_type+" "+r.access_token,o=(new Date).getTime();sessionStorage.setItem("token",a),sessionStorage.setItem("tokenQueryTime",o),t.headers.Authorization=a,e(t)}else sessionStorage.removeItem("token"),u["c"].push({path:"/login"})})).catch((function(){sessionStorage.removeItem("token"),u["c"].push({path:"/login"})}))})):(t.headers.Authorization=sessionStorage.getItem("token"),t)}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){var e=(new Date).getTime();return sessionStorage.setItem("tokenQueryTime",e),200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),u["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},d39c:function(t,e,n){"use strict";n("fbe9")},d747:function(t,e,n){"use strict";n("48b0")},e9c4:function(t,e,n){var r=n("23e7"),a=n("d066"),o=n("d039"),u=a("JSON","stringify"),i=/[\uD800-\uDFFF]/g,s=/^[\uD800-\uDBFF]$/,c=/^[\uDC00-\uDFFF]$/,d=function(t,e,n){var r=n.charAt(e-1),a=n.charAt(e+1);return s.test(t)&&!c.test(a)||c.test(t)&&!s.test(r)?"\\u"+t.charCodeAt(0).toString(16):t},l=o((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:l},{stringify:function(t,e,n){var r=u.apply(null,arguments);return"string"==typeof r?r.replace(i,d):r}})},fbe9:function(t,e,n){}}]);