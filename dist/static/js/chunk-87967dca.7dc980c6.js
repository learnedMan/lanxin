(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87967dca"],{"0385":function(t,e,n){"use strict";n("08ba"),n("b130"),n("90aa"),n("e18c"),n("e35a"),n("5e9f");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5f87"),s=n("5041"),c=a.a.create({baseURL:s["d"],timeout:5e3}),l=!1,d=[];function p(t){d.forEach((function(e){e(t)})),d=[]}function m(t){d.push(t)}c.interceptors.request.use((function(t){if(t.headers.Authorization=sessionStorage.getItem("token"),sessionStorage.getItem("token")&&Object(u["d"])()&&(!t.url.includes("/api/authorizations")||!t.url.includes("api/authorizations/wwwLogin"))){l||(l=!0,a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:"Basic "+sessionStorage.getItem("token")}}).then((function(t){if(l=!1,console.log(t.data),200===t.status){var e=t.data,n=e.token_type+" "+e.access_token,r=(new Date).getTime(),a=e.expires_in;sessionStorage.setItem("token",n),sessionStorage.setItem("tokenTime",a),sessionStorage.setItem("tokenQueryTime",r),p(n)}})).catch((function(){i["c"].push({path:"/login"}),l=!1})));var e=new Promise((function(e){m((function(n){t.headers.Authorization=n,t.url=t.url.replace(t.baseURL,""),e(t)}))}));return e}return t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},"0496":function(t,e,n){var r=n("efe2");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},"0fea":function(t,e,n){"use strict";n.d(e,"sb",(function(){return i})),n.d(e,"m",(function(){return u})),n.d(e,"ib",(function(){return s})),n.d(e,"T",(function(){return c})),n.d(e,"P",(function(){return l})),n.d(e,"Gb",(function(){return d})),n.d(e,"q",(function(){return p})),n.d(e,"nb",(function(){return m})),n.d(e,"Z",(function(){return f})),n.d(e,"Q",(function(){return b})),n.d(e,"bc",(function(){return h})),n.d(e,"w",(function(){return g})),n.d(e,"Ob",(function(){return v})),n.d(e,"vb",(function(){return j})),n.d(e,"v",(function(){return O})),n.d(e,"qb",(function(){return y})),n.d(e,"E",(function(){return k})),n.d(e,"bb",(function(){return x})),n.d(e,"R",(function(){return w})),n.d(e,"gc",(function(){return _})),n.d(e,"x",(function(){return S})),n.d(e,"hc",(function(){return F})),n.d(e,"y",(function(){return L})),n.d(e,"cc",(function(){return M})),n.d(e,"r",(function(){return I})),n.d(e,"ob",(function(){return q})),n.d(e,"jc",(function(){return z})),n.d(e,"dc",(function(){return C})),n.d(e,"Xb",(function(){return D})),n.d(e,"o",(function(){return N})),n.d(e,"kb",(function(){return P})),n.d(e,"V",(function(){return E})),n.d(e,"Yb",(function(){return R})),n.d(e,"n",(function(){return $})),n.d(e,"jb",(function(){return U})),n.d(e,"U",(function(){return A})),n.d(e,"k",(function(){return T})),n.d(e,"J",(function(){return B})),n.d(e,"oc",(function(){return Q})),n.d(e,"Ub",(function(){return J})),n.d(e,"gb",(function(){return H})),n.d(e,"Zb",(function(){return X})),n.d(e,"nc",(function(){return G})),n.d(e,"Vb",(function(){return K})),n.d(e,"l",(function(){return V})),n.d(e,"hb",(function(){return W})),n.d(e,"S",(function(){return Y})),n.d(e,"ac",(function(){return Z})),n.d(e,"p",(function(){return tt})),n.d(e,"mb",(function(){return et})),n.d(e,"Y",(function(){return nt})),n.d(e,"Wb",(function(){return rt})),n.d(e,"ec",(function(){return at})),n.d(e,"s",(function(){return ot})),n.d(e,"ab",(function(){return it})),n.d(e,"pb",(function(){return ut})),n.d(e,"fc",(function(){return st})),n.d(e,"t",(function(){return ct})),n.d(e,"lb",(function(){return lt})),n.d(e,"W",(function(){return dt})),n.d(e,"ic",(function(){return pt})),n.d(e,"u",(function(){return mt})),n.d(e,"wb",(function(){return ft})),n.d(e,"cb",(function(){return bt})),n.d(e,"I",(function(){return ht})),n.d(e,"Fb",(function(){return gt})),n.d(e,"X",(function(){return vt})),n.d(e,"Tb",(function(){return jt})),n.d(e,"Sb",(function(){return Ot})),n.d(e,"j",(function(){return yt})),n.d(e,"A",(function(){return kt})),n.d(e,"pc",(function(){return xt})),n.d(e,"Qb",(function(){return wt})),n.d(e,"Pb",(function(){return _t})),n.d(e,"db",(function(){return St})),n.d(e,"Cb",(function(){return Ft})),n.d(e,"Bb",(function(){return Lt})),n.d(e,"Db",(function(){return Mt})),n.d(e,"Ab",(function(){return It})),n.d(e,"Jb",(function(){return qt})),n.d(e,"Ib",(function(){return zt})),n.d(e,"f",(function(){return Ct})),n.d(e,"D",(function(){return Dt})),n.d(e,"O",(function(){return Nt})),n.d(e,"ub",(function(){return Pt})),n.d(e,"z",(function(){return Et})),n.d(e,"Hb",(function(){return Rt})),n.d(e,"e",(function(){return $t})),n.d(e,"fb",(function(){return Ut})),n.d(e,"N",(function(){return At})),n.d(e,"Nb",(function(){return Tt})),n.d(e,"rb",(function(){return Bt})),n.d(e,"h",(function(){return Qt})),n.d(e,"Lb",(function(){return Jt})),n.d(e,"xb",(function(){return Ht})),n.d(e,"a",(function(){return Xt})),n.d(e,"yb",(function(){return Gt})),n.d(e,"C",(function(){return Kt})),n.d(e,"K",(function(){return Vt})),n.d(e,"tb",(function(){return Wt})),n.d(e,"B",(function(){return Yt})),n.d(e,"Mb",(function(){return Zt})),n.d(e,"b",(function(){return te})),n.d(e,"mc",(function(){return ee})),n.d(e,"L",(function(){return ne})),n.d(e,"zb",(function(){return re})),n.d(e,"c",(function(){return ae})),n.d(e,"lc",(function(){return oe})),n.d(e,"M",(function(){return ie})),n.d(e,"Rb",(function(){return ue})),n.d(e,"Kb",(function(){return se})),n.d(e,"g",(function(){return ce})),n.d(e,"G",(function(){return le})),n.d(e,"i",(function(){return de})),n.d(e,"H",(function(){return pe})),n.d(e,"Eb",(function(){return me})),n.d(e,"F",(function(){return fe})),n.d(e,"kc",(function(){return be})),n.d(e,"d",(function(){return he})),n.d(e,"eb",(function(){return ge}));n("b4fb");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function i(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function l(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function b(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function h(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function v(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function k(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function x(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function w(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function _(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function S(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function F(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function L(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function M(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function I(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function q(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function z(){return Object(r["a"])({url:"/api/zones",method:"get"})}function C(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function D(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function N(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function P(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function E(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function R(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function $(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function U(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function A(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function T(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function Q(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function H(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function X(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function K(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function V(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function W(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function nt(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function rt(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function st(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function pt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function bt(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ht(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function vt(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function jt(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function Ot(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function yt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function kt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function xt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function wt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function _t(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function St(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Ft(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function Lt(t){return Object(o["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/uc/queryLoginLogList",method:"post",data:t})}function It(t){return Object(a["a"])({url:"/internal/points/queryPointsLog",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Pt(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Et(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function At(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Tt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Bt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Qt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginCreate",method:"post",data:t})}function Jt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginList",method:"post",data:t})}function Ht(t){return Object(r["a"])({url:"/api/departments",method:"get",params:t})}function Xt(t){return Object(r["a"])({url:"/api/departments",method:"post",data:t})}function Gt(t){return Object(r["a"])({url:"/api/departments/"+t,method:"get"})}function Kt(t,e){return Object(r["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function Vt(t){return Object(r["a"])({url:"/api/departments/".concat(t),method:"delete"})}function Wt(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function Yt(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Zt(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function te(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function ee(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function ne(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function re(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function ae(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function oe(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function ie(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function ue(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function se(t){return Object(o["a"])({url:"/sensitive/setting/list",method:"get",params:t})}function ce(t){return Object(o["a"])({url:"/sensitive/setting/add",method:"post",data:t})}function le(t){return Object(o["a"])({url:"/sensitive/setting/del",method:"DELETE",data:t})}function de(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function pe(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function me(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function fe(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function be(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function he(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ge(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5041"),s=a.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"31a0":function(t,e,n){"use strict";var r=n("1c8b"),a=n("5197"),o=n("0496");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return a(this,"a","href",t)}})},5197:function(t,e,n){var r=n("2732"),a=/"/g;t.exports=function(t,e,n,o){var i=String(r(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),u+">"+i+"</"+e+">"}},"7e41":function(t,e,n){},a550:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-app-menu"},[n("el-form",{ref:"queryForm",attrs:{inline:!0,size:"small"}},[n("el-form-item",{attrs:{label:"所属产品:"}},[n("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:t.sourceId,callback:function(e){t.sourceId=e},expression:"sourceId"}},t._l(t.productLists,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")])],1)],1),n("div",{staticClass:"table-box"},[n("h4",[t._v("主功能区")]),t._m(0),n("div",{staticClass:"table-box--btn"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addCustom("main")}}},[t._v("新增自定义菜单")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addDefault("main")}}},[t._v("新增默认菜单")])],1),n("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.main,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(n){return t.handleEdit(e.row,"main")}}},[t._v(" 编辑 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(n){return t.handleDelete(e.$index,e.row.name,"main")}}},[t._v(" 删除 ")])]}}])})],1)],1),n("div",{staticClass:"table-box"},[n("h4",[t._v("常用功能区")]),n("p",[t._v("说明：副功能菜单在白底区，无数量限制，自动换行")]),n("div",{staticClass:"table-box--btn"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addCustom("frequent")}}},[t._v("新增自定义菜单")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addDefault("frequent")}}},[t._v("新增默认菜单")])],1),n("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.frequent,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(n){return t.handleEdit(e.row,"frequent")}}},[t._v(" 编辑 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(n){return t.handleDelete(e.$index,e.row.name,"frequent")}}},[t._v(" 删除 ")])]}}])})],1)],1),n("div",{staticClass:"table-box"},[n("h4",[t._v("更多区域")]),n("p"),n("div",{staticClass:"table-box--btn"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addCustom("more")}}},[t._v("新增自定义菜单")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addDefault("more")}}},[t._v("新增默认菜单")])],1),n("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.more,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(n){return t.handleEdit(e.row,"more")}}},[t._v(" 编辑 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(n){return t.handleDelete(e.$index,e.row.name,"more")}}},[t._v(" 删除 ")])]}}])})],1)],1),n("el-dialog",{attrs:{width:"600px",title:t.defaultMenu.title,visible:t.defaultMenu.show},on:{"update:visible":function(e){return t.$set(t.defaultMenu,"show",e)}}},[n("el-checkbox-group",{attrs:{max:t.defaultMenu.max},model:{value:t.allMenuSelect,callback:function(e){t.allMenuSelect=e},expression:"allMenuSelect"}},t._l(t.allMenu,(function(e,r){return n("el-checkbox",{key:r,staticStyle:{"margin-bottom":"20px"},attrs:{label:e.name,disabled:t.judgeDisabled(e.name)}},[t._v(t._s(e.name))])})),1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(e){t.defaultMenu.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.defaultMenuEnter}},[t._v(" 确 定 ")])],1)],1),n("el-dialog",{attrs:{width:"600px",title:t.dialog.title,visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.dialogForm,rules:t.dialogRules,size:"small","label-width":"120px"}},[n("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入菜单名(不要与默认菜单名重复)",disabled:t.dialog.disabledName},model:{value:t.dialogForm.name,callback:function(e){t.$set(t.dialogForm,"name",e)},expression:"dialogForm.name"}})],1),n("el-form-item",{attrs:{label:"图标",prop:"logo"}},[n("upload-single",{model:{value:t.dialogForm.logo,callback:function(e){t.$set(t.dialogForm,"logo",e)},expression:"dialogForm.logo"}})],1),n("el-form-item",{attrs:{label:"排序",prop:"sort"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:""},model:{value:t.dialogForm.sort,callback:function(e){t.$set(t.dialogForm,"sort",t._n(e))},expression:"dialogForm.sort"}})],1),n("el-form-item",{attrs:{label:"类型",prop:"sort"}},[n("el-radio-group",{on:{change:t.radiochange},model:{value:t.dialogForm.type,callback:function(e){t.$set(t.dialogForm,"type",e)},expression:"dialogForm.type"}},t._l(t.typeOptions,(function(e){return n("el-radio",{key:e.value,staticStyle:{"margin-top":"10px"},attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1),"outer_link"===t.dialogForm.type?n("el-form-item",{attrs:{label:"外链",prop:"link"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入链接"},model:{value:t.dialogForm.link,callback:function(e){t.$set(t.dialogForm,"link",e)},expression:"dialogForm.link"}})],1):t._e(),"auth_link"===t.dialogForm.type?n("el-form-item",{attrs:{label:"授权外链",prop:"link"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入链接"},model:{value:t.dialogForm.link,callback:function(e){t.$set(t.dialogForm,"link",e)},expression:"dialogForm.link"}})],1):t._e(),"app_redirect"===t.dialogForm.type?n("el-form-item",{attrs:{label:"原生跳转id",prop:"link"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入原生跳转id"},model:{value:t.dialogForm.link,callback:function(e){t.$set(t.dialogForm,"link",e)},expression:"dialogForm.link"}})],1):t._e(),"phone"===t.dialogForm.type?n("el-form-item",{attrs:{label:"电话号码",prop:"phone"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入电话号码"},model:{value:t.dialogForm.phone,callback:function(e){t.$set(t.dialogForm,"phone","string"===typeof e?e.trim():e)},expression:"dialogForm.phone"}})],1):t._e(),"text"===t.dialogForm.type?n("el-form-item",{attrs:{label:"信息展示",prop:"text"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入展示信息"},model:{value:t.dialogForm.text,callback:function(e){t.$set(t.dialogForm,"text","string"===typeof e?e.trim():e)},expression:"dialogForm.text"}})],1):t._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(e){t.dialog.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.dialogEnter}},[t._v(" 确 定 ")])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("说明：主功能菜单在有色底区，最多支持"),n("span",{staticStyle:{color:"red","font-size":"18px"}},[t._v("4")]),t._v("个")])}],o=n("99a5"),i=n("1c03"),u=(n("6a61"),n("2eeb"),n("053b"),n("31a0"),n("b4fb"),n("b130"),n("90aa"),n("08ba"),n("4194"),n("dbb3"),n("08d5"),n("ea69"),n("3466"),n("0fea")),s=n("e60d"),c={components:{uploadSingle:s["a"]},data:function(){return{productLists:[],typeOptions:[{label:"外链",value:"outer_link"},{label:"授权外链",value:"auth_link"},{label:"原生跳转",value:"app_redirect"},{label:"电话",value:"phone"},{label:"信息展示",value:"text"}],sourceId:"",main:[],frequent:[],more:[],allMenu:[{name:"收藏",logo:"",sort:1,type:"app_redirect",link:"1"},{name:"积分",logo:"",sort:2,type:"app_redirect",link:"2"},{name:"评论",logo:"",sort:3,type:"app_redirect",link:"3"},{name:"活动",logo:"",sort:4,type:"app_redirect",link:"4"},{name:"爆料",logo:"",sort:5,type:"app_redirect",link:"5"},{name:"意见反馈",logo:"",sort:6,type:"app_redirect",link:"6"},{name:"邀请好友",logo:"",sort:7,type:"app_redirect",link:"7"},{name:"邀请码",logo:"",sort:8,type:"app_redirect",link:"8"},{name:"我的奖品",logo:"",sort:9,type:"app_redirect",link:"9"},{name:"发布",logo:"",sort:10,type:"app_redirect",link:"10"},{name:"我的钱包",logo:"",sort:11,type:"app_redirect",link:"11"},{name:"关于我们",logo:"",sort:12,type:"app_redirect",link:"12"},{name:"历史记录",logo:"",sort:15,type:"app_redirect",link:"15"}],allMenuSelect:[],defaultMenu:{title:"新增默认菜单",show:!1,key:"",max:9999},dialog:{title:"新增自定义菜单",show:!1,disabledName:!1,key:""},patchData:{},dialogForm:{name:"",logo:"",sort:"",type:"outer_link",link:"",text:"",phone:""},dialogRules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],logo:[{required:!0,message:"请新增菜单logo",trigger:"chnage"}],sort:[{required:!0,type:"number",message:"请输入排序",trigger:"blur"}],link:[{required:!0,message:"请输入",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],text:[{required:!0,message:"请输入展示号码",trigger:"blur"}]}}},methods:{getProductList:function(){var t=this;return Object(u["Xb"])({}).then((function(e){var n,r=e.data||[];t.productLists=r.map((function(t){return{label:t.name,value:t.id}})),t.sourceId=null===r||void 0===r||null===(n=r[0])||void 0===n?void 0:n.id}))},handleQuery:function(){this.getList()},radiochange:function(){this.dialogForm.link=""},judgeDisabled:function(t){var e=this.defaultMenu.key;if(""===e)return!1;var n=[];return n="main"===e?this.frequent.concat(this.more).map((function(t){return t.name})):"frequent"===e?this.main.concat(this.more).map((function(t){return t.name})):this.frequent.concat(this.main).map((function(t){return t.name})),n.includes(t)},addDefault:function(t){var e=this;this.allMenuSelect=this[t].map((function(t){return t.name})),this.allMenu.forEach((function(n){var r=e[t].find((function(t){return n.name===t.name}));r&&Object.assign(n,r)})),Object.assign(this.defaultMenu,{show:!0,key:t,max:"main"===t?4:99999})},defaultMenuEnter:function(){var t=this,e=this.patchData.extra.profile_settings||(this.patchData.extra.profile_settings={}),n=this.defaultMenu.key,r=this.allMenu.map((function(t){return t.name})),a=this.allMenu.filter((function(e){return t.allMenuSelect.includes(e.name)})),o=this[n].filter((function(t){return!r.includes(t.name)}));e[n]=a.concat(o),this.httpPatch((function(){t.defaultMenu.show=!1}))},addCustom:function(t){this.resetForm("dialogForm"),this.dialog={title:"新增自定义菜单",show:!0,disabledName:!1,add:!0,key:t}},handleEdit:function(t,e){this.resetForm("dialogForm");var n=t.name,r=t.logo,a=t.sort,o=t.type,i=void 0===o?"outer_link":o,u=t.link,s=void 0===u?"":u,c=t.text,l=void 0===c?"":c,d=t.phone,p=void 0===d?"":d;this.dialog={title:"编辑菜单",disabledName:this.allMenu.some((function(t){return t.name===n})),show:!0,key:e},this.dialogForm={name:n,logo:r,sort:a,type:i,link:s,text:l,phone:p}},dialogEnter:function(){var t,e=this;null===(t=this.$refs.dialogForm)||void 0===t||t.validate((function(t){if(t){var n=e.patchData.extra.profile_settings||(e.patchData.extra.profile_settings={}),r=e.dialog.key,a=n[r]||(n[r]=[]),o=Object(i["a"])({},e.dialogForm);e.dialog.add?a.push(o):a.splice(a.findIndex((function(t){return t.name===o.name})),1,o),e.httpPatch((function(){e.dialog.show=!1}))}}))},handleDelete:function(t,e,n){var r=this;this.$confirm("此操作将永久删除这条名为".concat(e,"的菜单, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=r.patchData.extra.profile_settings;e[n].splice(t,1),r.httpPatch((function(){r.dialog.show=!1}))})).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},httpPatch:function(t){var e=this,n=this.sourceId;Object(u["B"])(n,this.patchData).then((function(){e.$message.success("修改菜单成功"),e.getList(),null===t||void 0===t||t()}))},getList:function(){var t=this;Object(u["tb"])(this.sourceId).then((function(e){console.log("res",e);var n=e.extra.profile_settings||{};t.patchData=e,t.main=(t.sortArry(n.main)||[]).map((function(t){return Object(i["a"])({},t)})),t.frequent=(t.sortArry(n.frequent)||[]).map((function(t){return Object(i["a"])({},t)})),t.more=(t.sortArry(n.more)||[]).map((function(t){return Object(i["a"])({},t)}))}))},sortArry:function(t){if(!t)return[];for(var e=0;e<t.length;e++)for(var n=e+1;n<t.length;n++)if(t[e].sort>t[n].sort){var r=[t[n],t[e]];t[e]=r[0],t[n]=r[1]}return t}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProductList();case 2:t.getList();case 3:case"end":return e.stop()}}),e)})))()}},l=c,d=(n("ec45"),n("4ac2")),p=Object(d["a"])(l,r,a,!1,null,"096fb0d7",null);e["default"]=p.exports},b60c:function(t,e,n){"use strict";n("08ba"),n("b130"),n("90aa"),n("e18c"),n("e35a"),n("5e9f");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5f87"),s=n("5041"),c=a.a.create({baseURL:s["c"],timeout:5e3}),l=!1,d=[];function p(t){d.forEach((function(e){e(t)})),d=[]}function m(t){d.push(t)}c.interceptors.request.use((function(t){if(t.headers.Authorization=sessionStorage.getItem("token"),sessionStorage.getItem("token")&&Object(u["d"])()&&(!t.url.includes("/api/authorizations")||!t.url.includes("api/authorizations/wwwLogin"))){l||(l=!0,a()({url:"/api/authorizations/refresh",method:"post",baseURL:"/",timeout:5e3,headers:{Authorization:"Basic "+sessionStorage.getItem("token")}}).then((function(t){if(l=!1,console.log(t.data),200===t.status){var e=t.data,n=e.token_type+" "+e.access_token,r=(new Date).getTime(),a=e.expires_in;sessionStorage.setItem("token",n),sessionStorage.setItem("tokenTime",a),sessionStorage.setItem("tokenQueryTime",r),p(n)}})).catch((function(){i["c"].push({path:"/login"}),l=!1})));var e=new Promise((function(e){m((function(n){t.headers.Authorization=n,t.url=t.url.replace(t.baseURL,""),e(t)}))}));return e}return t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),c.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=c},ec45:function(t,e,n){"use strict";n("7e41")}}]);