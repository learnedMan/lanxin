(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a0774e"],{"0191":function(t,e,n){"use strict";n.d(e,"n",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"q",(function(){return l})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return m})),n.d(e,"s",(function(){return f})),n.d(e,"o",(function(){return p})),n.d(e,"p",(function(){return b})),n.d(e,"t",(function(){return h})),n.d(e,"i",(function(){return g})),n.d(e,"e",(function(){return O})),n.d(e,"c",(function(){return j})),n.d(e,"g",(function(){return y})),n.d(e,"r",(function(){return v})),n.d(e,"m",(function(){return w})),n.d(e,"d",(function(){return k})),n.d(e,"b",(function(){return P})),n.d(e,"l",(function(){return q}));var r=n("b775"),a=n("b60c"),u=n("0385");n("2ab73");function o(t){return Object(r["a"])({url:"/api/refuseReasons",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/api/refuseReasons",method:"post",data:t})}function c(t,e){return Object(r["a"])({url:"/api/refuseReasons/".concat(t),method:"PATCH",data:e})}function s(t){return Object(r["a"])({url:"/api/refuseReasons/".concat(t),method:"delete"})}function l(){return Object(a["a"])({url:"/intranet/querySourceIdData",method:"get"})}function d(t){return Object(a["a"])({url:"/internal/feedback/pageList",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/internal/feedback/info",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/internal/feedback/reply",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/internal/report/pageList",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/internal/report/info",method:"get",params:t})}function h(t){return Object(a["a"])({url:"/internal/report/reply",method:"post",data:t})}function g(t){return Object(u["a"])({url:"/new/intranet/comment/listConsole",method:"post",data:t})}function O(t){return Object(u["a"])({url:"/new/intranet/comment/manage/".concat(t),method:"get"})}function j(t){return Object(u["a"])({url:"/new/intranet/comment/operate",method:"post",data:t})}function y(t){return Object(u["a"])({url:"/new/intranet/comment/noTalkUser",method:"post",data:t})}function v(t){return Object(u["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function w(t){return Object(a["a"])({url:"/internal/baoliao/getList",method:"post",data:t})}function k(t){return Object(a["a"])({url:"/internal/baoliao/modifyState",method:"post",data:t})}function P(t){return Object(a["a"])({url:"/internal/baoliao/batchModifyState",method:"post",data:t})}function q(t){return Object(a["a"])({url:"/internal/baoliao/getData",method:"post",params:t})}},"0385":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),u=n("b705"),o=n("a18c"),i=n("5041"),c=a.a.create({baseURL:i["d"],timeout:5e3});c.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(u["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(u["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),o["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(u["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0c31":function(t,e,n){"use strict";n("9dcc")},"0fea":function(t,e,n){"use strict";n.d(e,"mb",(function(){return o})),n.d(e,"j",(function(){return i})),n.d(e,"cb",(function(){return c})),n.d(e,"N",(function(){return s})),n.d(e,"J",(function(){return l})),n.d(e,"vb",(function(){return d})),n.d(e,"n",(function(){return m})),n.d(e,"hb",(function(){return f})),n.d(e,"T",(function(){return p})),n.d(e,"K",(function(){return b})),n.d(e,"Ob",(function(){return h})),n.d(e,"t",(function(){return g})),n.d(e,"Bb",(function(){return O})),n.d(e,"pb",(function(){return j})),n.d(e,"s",(function(){return y})),n.d(e,"kb",(function(){return v})),n.d(e,"A",(function(){return w})),n.d(e,"V",(function(){return k})),n.d(e,"L",(function(){return P})),n.d(e,"Tb",(function(){return q})),n.d(e,"u",(function(){return C})),n.d(e,"Ub",(function(){return L})),n.d(e,"v",(function(){return _})),n.d(e,"Pb",(function(){return A})),n.d(e,"o",(function(){return S})),n.d(e,"ib",(function(){return T})),n.d(e,"Wb",(function(){return x})),n.d(e,"Qb",(function(){return R})),n.d(e,"Kb",(function(){return I})),n.d(e,"l",(function(){return D})),n.d(e,"eb",(function(){return M})),n.d(e,"P",(function(){return U})),n.d(e,"Lb",(function(){return N})),n.d(e,"k",(function(){return z})),n.d(e,"db",(function(){return $})),n.d(e,"O",(function(){return H})),n.d(e,"h",(function(){return E})),n.d(e,"E",(function(){return B})),n.d(e,"bc",(function(){return F})),n.d(e,"Hb",(function(){return Q})),n.d(e,"ab",(function(){return J})),n.d(e,"Mb",(function(){return K})),n.d(e,"ac",(function(){return G})),n.d(e,"Ib",(function(){return V})),n.d(e,"i",(function(){return W})),n.d(e,"bb",(function(){return X})),n.d(e,"M",(function(){return Y})),n.d(e,"Nb",(function(){return Z})),n.d(e,"m",(function(){return tt})),n.d(e,"gb",(function(){return et})),n.d(e,"S",(function(){return nt})),n.d(e,"Jb",(function(){return rt})),n.d(e,"Rb",(function(){return at})),n.d(e,"p",(function(){return ut})),n.d(e,"U",(function(){return ot})),n.d(e,"jb",(function(){return it})),n.d(e,"Sb",(function(){return ct})),n.d(e,"q",(function(){return st})),n.d(e,"fb",(function(){return lt})),n.d(e,"Q",(function(){return dt})),n.d(e,"Vb",(function(){return mt})),n.d(e,"r",(function(){return ft})),n.d(e,"qb",(function(){return pt})),n.d(e,"W",(function(){return bt})),n.d(e,"D",(function(){return ht})),n.d(e,"ub",(function(){return gt})),n.d(e,"R",(function(){return Ot})),n.d(e,"Gb",(function(){return jt})),n.d(e,"Fb",(function(){return yt})),n.d(e,"g",(function(){return vt})),n.d(e,"x",(function(){return wt})),n.d(e,"cc",(function(){return kt})),n.d(e,"Db",(function(){return Pt})),n.d(e,"Cb",(function(){return qt})),n.d(e,"X",(function(){return Ct})),n.d(e,"sb",(function(){return Lt})),n.d(e,"yb",(function(){return _t})),n.d(e,"xb",(function(){return At})),n.d(e,"e",(function(){return St})),n.d(e,"z",(function(){return Tt})),n.d(e,"I",(function(){return xt})),n.d(e,"ob",(function(){return Rt})),n.d(e,"w",(function(){return It})),n.d(e,"wb",(function(){return Dt})),n.d(e,"d",(function(){return Mt})),n.d(e,"Z",(function(){return Ut})),n.d(e,"H",(function(){return Nt})),n.d(e,"Ab",(function(){return zt})),n.d(e,"lb",(function(){return $t})),n.d(e,"nb",(function(){return Ht})),n.d(e,"y",(function(){return Et})),n.d(e,"zb",(function(){return Bt})),n.d(e,"a",(function(){return Ft})),n.d(e,"Zb",(function(){return Qt})),n.d(e,"F",(function(){return Jt})),n.d(e,"rb",(function(){return Kt})),n.d(e,"b",(function(){return Gt})),n.d(e,"Yb",(function(){return Vt})),n.d(e,"G",(function(){return Wt})),n.d(e,"Eb",(function(){return Xt})),n.d(e,"f",(function(){return Yt})),n.d(e,"C",(function(){return Zt})),n.d(e,"tb",(function(){return te})),n.d(e,"B",(function(){return ee})),n.d(e,"Xb",(function(){return ne})),n.d(e,"c",(function(){return re})),n.d(e,"Y",(function(){return ae}));n("b4fb");var r=n("b775"),a=n("b60c"),u=n("0385");n("2ab73");function o(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function i(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function c(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function s(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function l(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function f(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function p(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function b(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function h(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function O(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function y(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function v(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function w(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function k(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function P(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function q(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function C(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function L(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function _(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function A(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function S(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function T(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function x(){return Object(r["a"])({url:"/api/zones",method:"get"})}function R(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function I(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function D(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function M(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function U(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function N(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function z(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function $(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function H(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function E(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function F(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function J(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function K(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function V(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function W(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function X(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function nt(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function rt(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ut(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ot(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function it(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ct(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function st(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function mt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function ft(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function pt(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function bt(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ht(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function Ot(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function jt(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function yt(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function vt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function wt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function kt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Lt(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function _t(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function At(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function St(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Tt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function xt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Rt(t){return Object(u["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function It(t){return Object(u["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function zt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function $t(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Ht(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function Et(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Bt(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Ft(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Qt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Jt(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function Kt(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function Gt(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function Vt(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function Wt(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function Xt(t){return Object(u["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function Yt(t){return Object(u["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function Zt(t){return Object(u["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function te(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function ne(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function re(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ae(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),u=n("b705"),o=n("a18c"),i=n("5041"),c=a.a.create({baseURL:i["b"],timeout:6e4});c.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(u["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(u["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),o["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(u["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"8e6c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-gossip"},[n("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0,size:"small"}},[n("el-form-item",{attrs:{label:"所属产品:"}},[n("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:t.queryParams.sourceId,callback:function(e){t.$set(t.queryParams,"sourceId",e)},expression:"queryParams.sourceId"}},t._l(t.productLists,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"爆料标题:",prop:"title"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.title,callback:function(e){t.$set(t.queryParams,"title",e)},expression:"queryParams.title"}})],1),n("el-form-item",{attrs:{label:"状态:",prop:"status"}},[n("el-select",{attrs:{placeholder:"请选择状态",clearable:""},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.statusLists,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"爆料人:",prop:"userName"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.userName,callback:function(e){t.$set(t.queryParams,"userName",t._n(e))},expression:"queryParams.userName"}})],1),n("el-form-item",{attrs:{label:"提交时间:",prop:"submitTime"}},[n("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:function(e){return t.handleDateChange(e,"submitTime")}},model:{value:t.queryParams.submitTime,callback:function(e){t.$set(t.queryParams,"submitTime",e)},expression:"queryParams.submitTime"}})],1),n("el-form-item",{attrs:{label:"审核时间:",prop:"auditTime"}},[n("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd HH:mm:ss","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"default-time":["00:00:00","23:59:59"]},on:{change:function(e){return t.handleDateChange(e,"auditTime")}},model:{value:t.queryParams.auditTime,callback:function(e){t.$set(t.queryParams,"auditTime",e)},expression:"queryParams.auditTime"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleReset}},[t._v(" 重置 ")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")]),n("el-button",{attrs:{size:"mini",type:"success",disabled:t.disabledBatchAction},on:{click:function(e){return t.batchAgreeOrRefused(1)}}},[t._v("批量通过")]),n("el-button",{attrs:{size:"mini",type:"warning",disabled:t.disabledBatchAction},on:{click:function(e){return t.batchAgreeOrRefused(3)}}},[t._v("批量拒绝")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"新闻ID",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"爆料标题",align:"center",prop:"title",showOverflowTooltip:""}}),n("el-table-column",{attrs:{label:"状态",align:"center",prop:"statusLabel"}}),n("el-table-column",{attrs:{label:"爆料人",align:"center",prop:"userName"}}),n("el-table-column",{attrs:{label:"审核时间",align:"center",prop:"auditAt"}}),n("el-table-column",{attrs:{label:"提交时间",align:"center",prop:"createdAt"}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"verify-table-action"},[n("Iconbutton",{attrs:{icontype:"ckxq",label:"详情"},on:{fatherMethod:function(n){return t.watchDetail(e.row)}}}),1!=e.row.status?n("Iconbutton",{attrs:{icontype:"shtg",label:"通过"},on:{fatherMethod:function(n){return t.handleAgreeOrRefused(e.row,1)}}}):t._e(),3!=e.row.status?n("Iconbutton",{attrs:{icontype:"shjj",label:"拒绝"},on:{fatherMethod:function(n){return t.handleAgreeOrRefused(e.row,3)}}}):t._e()],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.limit},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"limit",e)},pagination:t.getList}}),n("el-dialog",{attrs:{width:"600px",title:"详情",visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[n("el-form",{attrs:{size:"small","label-width":"120px"}},[n("el-form-item",{attrs:{label:"爆料人:"}},[t._v(t._s(t.detail.userName))]),n("el-form-item",{attrs:{label:"爆料账号:"}},[t._v(t._s(t.detail.userId))]),n("el-form-item",{attrs:{label:"爆料时间:"}},[t._v(t._s(t.detail.createdAt))]),n("el-form-item",{attrs:{label:"爆料标题:"}},[t._v(t._s(t.detail.title))]),n("el-form-item",{attrs:{label:"状态:"}},[t._v(t._s(t.detail.statusLabel))]),n("el-form-item",{attrs:{label:"爆料内容:"}},[t._v(t._s(t.detail.content))]),n("el-form-item",{attrs:{label:"图片/视频:"}},t._l(t.detail.files,(function(e){return n("span",{staticClass:"xl-gossip-file"},[2===e.type?n("el-image",{staticStyle:{width:"100%",height:"100%"},attrs:{lazy:"",src:e.path,fit:"cover","preview-src-list":t.imgLists}}):n("video",{staticStyle:{width:"100%",height:"100%"},attrs:{controls:"",preload:"metadata"}},[n("source",{attrs:{src:e.path}}),t._v(" 您的浏览器不支持 HTML5 video 标签。 ")])],1)})),0)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialog.show=!1}}},[t._v(" 关 闭 ")])],1)],1)],1)},a=[],u=n("99a5"),o=n("190b"),i=n("1c03"),c=n("46d3"),s=(n("6a61"),n("2eeb"),n("dbb3"),n("053b"),n("e18c"),n("4194"),n("0191")),l=n("0fea"),d={data:function(){var t;return{productLists:[],statusLists:[{label:"全部",value:""},{label:"已审核",value:1},{label:"待审核",value:2},{label:"已拒绝",value:3}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-6048e5),t.$emit("pick",[n,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-7776e6),t.$emit("pick",[n,e])}}]},queryParams:(t={sourceId:"",type:"",status:"",title:""},Object(c["a"])(t,"type",0),Object(c["a"])(t,"userName",""),Object(c["a"])(t,"startCreateAt",""),Object(c["a"])(t,"endCreateAt",""),Object(c["a"])(t,"submitTime",""),Object(c["a"])(t,"startAuditAt",""),Object(c["a"])(t,"endAuditAt",""),Object(c["a"])(t,"auditTime",""),Object(c["a"])(t,"page",1),Object(c["a"])(t,"limit",10),t),dialog:{show:!1},detail:{title:"",content:"",userName:"",statusLabel:"",files:[]},loading:!1,total:0,tableData:[],selection:[]}},computed:{disabledBatchAction:function(){return 0===this.selection.length},imgLists:function(){return this.detail.files.filter((function(t){return 2===t.type})).map((function(t){return t.path}))}},methods:{getProductList:function(){var t=this;return Object(l["Kb"])({}).then((function(e){var n,r=e.data||[];t.productLists=r.map((function(t){return{label:t.name,value:t.source_id}})),t.queryParams.sourceId=null===r||void 0===r||null===(n=r[0])||void 0===n?void 0:n.source_id}))},handleDateChange:function(t,e){var n=t||["",""];"submitTime"===e?(this.queryParams.startCreateAt=n[0],this.queryParams.endCreateAt=n[1]):(this.queryParams.startAuditAt=n[0],this.queryParams.endAuditAt=n[1])},handleReset:function(){Object.assign(this.queryParams,{startCreateAt:"",endCreateAt:"",startAuditAt:"",endAuditAt:"",page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},watchDetail:function(t){var e=this,n=t.id,r=t.statusLabel;Object(s["l"])({id:n}).then((function(t){var n;200==t.code&&(e.detail=Object(i["a"])(Object(i["a"])({},t.data||{}),{},{statusLabel:r,files:((null===(n=t.data)||void 0===n?void 0:n.files)||[]).filter((function(t){return 0!==t.type}))}),e.dialog.show=!0)}))},batchAgreeOrRefused:function(t){var e=this;Object(s["b"])({ids:Object(o["a"])(this.selection),status:t}).then((function(t){200==t.code&&(e.$message.success(t.msg),e.getList())}))},handleAgreeOrRefused:function(t,e){var n=this,r=t.id;Object(s["d"])({id:r,status:e}).then((function(t){200==t.code&&(n.$message.success(t.msg),n.getList())}))},handleSelectionChange:function(t){this.selection=t.map((function(t){return t.id}))},getList:function(){var t=this;this.loading=!0;var e=Object(i["a"])({},this.queryParams);delete e.submitTime,delete e.auditTime,Object(s["m"])(this.removePropertyOfNullFor0(e)).then((function(e){if(200==e.code){var n=e.data;t.selection=[],t.tableData=(n.list||[]).map((function(e){var n;return Object(i["a"])(Object(i["a"])({},e),{},{statusLabel:null===(n=t.statusLists.find((function(t){return t.value===e.status})))||void 0===n?void 0:n.label})})),t.total=n.totalCount}})).finally((function(){t.loading=!1}))}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProductList();case 2:t.getList();case 3:case"end":return e.stop()}}),e)})))()}},m=d,f=(n("0c31"),n("4ac2")),p=Object(f["a"])(m,r,a,!1,null,"ec407bca",null);e["default"]=p.exports},"9dcc":function(t,e,n){},b60c:function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),u=n("b705"),o=n("a18c"),i=n("5041"),c=a.a.create({baseURL:i["c"],timeout:5e3});c.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(u["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return console.log(t),200==t.data.code||"true"===t.headers.success?t.data:(Object(u["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),o["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(u["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c}}]);