(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-489a7876"],{"0385":function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),i=n("a18c"),u=a.a.create({baseURL:"http://10.30.10.1/api",timeout:5e3});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=u},"0fea":function(t,e,n){"use strict";n.d(e,"mb",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"cb",(function(){return c})),n.d(e,"N",(function(){return l})),n.d(e,"J",(function(){return s})),n.d(e,"vb",(function(){return d})),n.d(e,"n",(function(){return p})),n.d(e,"hb",(function(){return m})),n.d(e,"T",(function(){return f})),n.d(e,"K",(function(){return b})),n.d(e,"Ob",(function(){return h})),n.d(e,"t",(function(){return g})),n.d(e,"Bb",(function(){return j})),n.d(e,"pb",(function(){return O})),n.d(e,"s",(function(){return v})),n.d(e,"kb",(function(){return y})),n.d(e,"A",(function(){return k})),n.d(e,"V",(function(){return _})),n.d(e,"L",(function(){return x})),n.d(e,"Tb",(function(){return w})),n.d(e,"u",(function(){return S})),n.d(e,"Ub",(function(){return F})),n.d(e,"v",(function(){return M})),n.d(e,"Pb",(function(){return q})),n.d(e,"o",(function(){return C})),n.d(e,"ib",(function(){return D})),n.d(e,"Wb",(function(){return z})),n.d(e,"Qb",(function(){return I})),n.d(e,"Kb",(function(){return L})),n.d(e,"l",(function(){return P})),n.d(e,"eb",(function(){return $})),n.d(e,"P",(function(){return R})),n.d(e,"Lb",(function(){return E})),n.d(e,"k",(function(){return U})),n.d(e,"db",(function(){return N})),n.d(e,"O",(function(){return T})),n.d(e,"h",(function(){return A})),n.d(e,"E",(function(){return B})),n.d(e,"bc",(function(){return J})),n.d(e,"Hb",(function(){return Q})),n.d(e,"ab",(function(){return H})),n.d(e,"Mb",(function(){return K})),n.d(e,"ac",(function(){return G})),n.d(e,"Ib",(function(){return V})),n.d(e,"i",(function(){return W})),n.d(e,"bb",(function(){return X})),n.d(e,"M",(function(){return Y})),n.d(e,"Nb",(function(){return Z})),n.d(e,"m",(function(){return tt})),n.d(e,"gb",(function(){return et})),n.d(e,"S",(function(){return nt})),n.d(e,"Jb",(function(){return rt})),n.d(e,"Rb",(function(){return at})),n.d(e,"p",(function(){return ot})),n.d(e,"U",(function(){return it})),n.d(e,"jb",(function(){return ut})),n.d(e,"Sb",(function(){return ct})),n.d(e,"q",(function(){return lt})),n.d(e,"fb",(function(){return st})),n.d(e,"Q",(function(){return dt})),n.d(e,"Vb",(function(){return pt})),n.d(e,"r",(function(){return mt})),n.d(e,"qb",(function(){return ft})),n.d(e,"W",(function(){return bt})),n.d(e,"D",(function(){return ht})),n.d(e,"ub",(function(){return gt})),n.d(e,"R",(function(){return jt})),n.d(e,"Gb",(function(){return Ot})),n.d(e,"Fb",(function(){return vt})),n.d(e,"g",(function(){return yt})),n.d(e,"x",(function(){return kt})),n.d(e,"cc",(function(){return _t})),n.d(e,"Db",(function(){return xt})),n.d(e,"Cb",(function(){return wt})),n.d(e,"X",(function(){return St})),n.d(e,"sb",(function(){return Ft})),n.d(e,"yb",(function(){return Mt})),n.d(e,"xb",(function(){return qt})),n.d(e,"e",(function(){return Ct})),n.d(e,"z",(function(){return Dt})),n.d(e,"I",(function(){return zt})),n.d(e,"ob",(function(){return It})),n.d(e,"w",(function(){return Lt})),n.d(e,"wb",(function(){return Pt})),n.d(e,"d",(function(){return $t})),n.d(e,"Z",(function(){return Rt})),n.d(e,"H",(function(){return Et})),n.d(e,"Ab",(function(){return Ut})),n.d(e,"lb",(function(){return Nt})),n.d(e,"nb",(function(){return Tt})),n.d(e,"y",(function(){return At})),n.d(e,"zb",(function(){return Bt})),n.d(e,"a",(function(){return Jt})),n.d(e,"Zb",(function(){return Qt})),n.d(e,"F",(function(){return Ht})),n.d(e,"rb",(function(){return Kt})),n.d(e,"b",(function(){return Gt})),n.d(e,"Yb",(function(){return Vt})),n.d(e,"G",(function(){return Wt})),n.d(e,"Eb",(function(){return Xt})),n.d(e,"f",(function(){return Yt})),n.d(e,"C",(function(){return Zt})),n.d(e,"tb",(function(){return te})),n.d(e,"B",(function(){return ee})),n.d(e,"Xb",(function(){return ne})),n.d(e,"c",(function(){return re})),n.d(e,"Y",(function(){return ae}));n("99af");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function i(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function c(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function l(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function s(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function b(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function h(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function j(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function k(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function _(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function x(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function w(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function S(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function F(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function M(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function q(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function C(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function D(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function z(){return Object(r["a"])({url:"/api/zones",method:"get"})}function I(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function L(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function P(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function $(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function R(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function E(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function U(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function N(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function T(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function A(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function J(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function H(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function K(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function V(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function W(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function X(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function nt(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function rt(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ct(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function lt(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function st(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function pt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function bt(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ht(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function jt(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function Ot(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function vt(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function yt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function kt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function _t(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function xt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function wt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function St(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Ft(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function It(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Lt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Et(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Ut(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Nt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Tt(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function At(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Bt(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Jt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Qt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Ht(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function Kt(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function Gt(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function Vt(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function Wt(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function Xt(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function Yt(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function Zt(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function te(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function ne(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function re(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ae(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),i=n("a18c"),u=a.a.create({baseURL:"http://10.30.10.125",timeout:6e4});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},3696:function(t,e,n){},"857a":function(t,e,n){var r=n("1d80"),a=/"/g;t.exports=function(t,e,n,o){var i=String(r(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),u+">"+i+"</"+e+">"}},9911:function(t,e,n){"use strict";var r=n("23e7"),a=n("857a"),o=n("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return a(this,"a","href",t)}})},a550:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-app-menu"},[n("el-form",{ref:"queryForm",attrs:{inline:!0,size:"small"}},[n("el-form-item",{attrs:{label:"所属产品:"}},[n("el-select",{attrs:{placeholder:"请选择所属产品"},model:{value:t.sourceId,callback:function(e){t.sourceId=e},expression:"sourceId"}},t._l(t.productLists,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")])],1)],1),n("div",{staticClass:"table-box"},[n("h4",[t._v("主功能区")]),t._m(0),n("div",{staticClass:"table-box--btn"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addCustom("main")}}},[t._v("新增自定义菜单")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addDefault("main")}}},[t._v("新增默认菜单")])],1),n("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.main,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(n){return t.handleEdit(e.row,"main")}}},[t._v(" 编辑 ")]),n("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(n){return t.handleDelete(e.$index,e.row.name,"main")}}},[t._v(" 删除 ")])]}}])})],1)],1),n("div",{staticClass:"table-box"},[n("h4",[t._v("常用功能区")]),n("p",[t._v("说明：副功能菜单在白底区，无数量限制，自动换行")]),n("div",{staticClass:"table-box--btn"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addCustom("frequent")}}},[t._v("新增自定义菜单")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addDefault("frequent")}}},[t._v("新增默认菜单")])],1),n("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.frequent,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(n){return t.handleEdit(e.row,"frequent")}}},[t._v(" 编辑 ")]),n("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(n){return t.handleDelete(e.$index,e.row.name,"frequent")}}},[t._v(" 删除 ")])]}}])})],1)],1),n("div",{staticClass:"table-box"},[n("h4",[t._v("更多区域")]),n("p"),n("div",{staticClass:"table-box--btn"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addCustom("more")}}},[t._v("新增自定义菜单")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addDefault("more")}}},[t._v("新增默认菜单")])],1),n("el-table",{ref:"first",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.more,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"菜单名称",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"排序",align:"center",prop:"sort"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit",size:"small"},on:{click:function(n){return t.handleEdit(e.row,"more")}}},[t._v(" 编辑 ")]),n("el-button",{attrs:{type:"text",icon:"el-icon-delete",size:"small"},on:{click:function(n){return t.handleDelete(e.$index,e.row.name,"more")}}},[t._v(" 删除 ")])]}}])})],1)],1),n("el-dialog",{attrs:{width:"600px",title:t.defaultMenu.title,visible:t.defaultMenu.show},on:{"update:visible":function(e){return t.$set(t.defaultMenu,"show",e)}}},[n("el-checkbox-group",{attrs:{max:t.defaultMenu.max},model:{value:t.allMenuSelect,callback:function(e){t.allMenuSelect=e},expression:"allMenuSelect"}},t._l(t.allMenu,(function(e,r){return n("el-checkbox",{key:r,staticStyle:{"margin-bottom":"20px"},attrs:{label:e.name,disabled:t.judgeDisabled(e.name)}},[t._v(t._s(e.name))])})),1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.defaultMenu.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:t.defaultMenuEnter}},[t._v(" 确 定 ")])],1)],1),n("el-dialog",{attrs:{width:"600px",title:t.dialog.title,visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.dialogForm,rules:t.dialogRules,size:"small","label-width":"120px"}},[n("el-form-item",{attrs:{label:"菜单名称",prop:"name"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入菜单名(不要与默认菜单名重复)",disabled:t.dialog.disabledName},model:{value:t.dialogForm.name,callback:function(e){t.$set(t.dialogForm,"name",e)},expression:"dialogForm.name"}})],1),n("el-form-item",{attrs:{label:"图标",prop:"logo"}},[n("upload-single",{model:{value:t.dialogForm.logo,callback:function(e){t.$set(t.dialogForm,"logo",e)},expression:"dialogForm.logo"}})],1),n("el-form-item",{attrs:{label:"排序",prop:"sort"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:""},model:{value:t.dialogForm.sort,callback:function(e){t.$set(t.dialogForm,"sort",t._n(e))},expression:"dialogForm.sort"}})],1),n("el-form-item",{attrs:{label:"类型",prop:"sort"}},[n("el-radio-group",{on:{change:t.radiochange},model:{value:t.dialogForm.type,callback:function(e){t.$set(t.dialogForm,"type",e)},expression:"dialogForm.type"}},t._l(t.typeOptions,(function(e){return n("el-radio",{key:e.value,staticStyle:{"margin-top":"10px"},attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1),"outer_link"===t.dialogForm.type?n("el-form-item",{attrs:{label:"外链",prop:"link"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入链接"},model:{value:t.dialogForm.link,callback:function(e){t.$set(t.dialogForm,"link",e)},expression:"dialogForm.link"}})],1):t._e(),"auth_link"===t.dialogForm.type?n("el-form-item",{attrs:{label:"授权外链",prop:"link"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入链接"},model:{value:t.dialogForm.link,callback:function(e){t.$set(t.dialogForm,"link",e)},expression:"dialogForm.link"}})],1):t._e(),"app_redirect"===t.dialogForm.type?n("el-form-item",{attrs:{label:"原生跳转id",prop:"link"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入原生跳转id"},model:{value:t.dialogForm.link,callback:function(e){t.$set(t.dialogForm,"link",e)},expression:"dialogForm.link"}})],1):t._e(),"phone"===t.dialogForm.type?n("el-form-item",{attrs:{label:"电话号码",prop:"phone"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入电话号码"},model:{value:t.dialogForm.phone,callback:function(e){t.$set(t.dialogForm,"phone","string"===typeof e?e.trim():e)},expression:"dialogForm.phone"}})],1):t._e(),"text"===t.dialogForm.type?n("el-form-item",{attrs:{label:"信息展示",prop:"text"}},[n("el-input",{staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"请输入展示信息"},model:{value:t.dialogForm.text,callback:function(e){t.$set(t.dialogForm,"text","string"===typeof e?e.trim():e)},expression:"dialogForm.text"}})],1):t._e()],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialog.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:t.dialogEnter}},[t._v(" 确 定 ")])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("说明：主功能菜单在有色底区，最多支持"),n("span",{staticStyle:{color:"red","font-size":"18px"}},[t._v("4")]),t._v("个")])}],o=n("1da1"),i=n("5530"),u=(n("96cf"),n("d81d"),n("b0c0"),n("9911"),n("99af"),n("caad"),n("2532"),n("159b"),n("7db0"),n("4de4"),n("a434"),n("c740"),n("0fea")),c=n("e60d"),l={components:{uploadSingle:c["a"]},data:function(){return{productLists:[],typeOptions:[{label:"外链",value:"outer_link"},{label:"授权外链",value:"auth_link"},{label:"原生跳转",value:"app_redirect"},{label:"电话",value:"phone"},{label:"信息展示",value:"text"}],sourceId:"",main:[],frequent:[],more:[],allMenu:[{name:"收藏",logo:"",sort:1,type:"app_redirect",link:"1"},{name:"积分",logo:"",sort:2,type:"app_redirect",link:"2"},{name:"评论",logo:"",sort:3,type:"app_redirect",link:"3"},{name:"活动",logo:"",sort:4,type:"app_redirect",link:"4"},{name:"爆料",logo:"",sort:5,type:"app_redirect",link:"5"},{name:"意见反馈",logo:"",sort:6,type:"app_redirect",link:"6"},{name:"邀请好友",logo:"",sort:7,type:"app_redirect",link:"7"},{name:"邀请码",logo:"",sort:8,type:"app_redirect",link:"8"},{name:"我的奖品",logo:"",sort:9,type:"app_redirect",link:"9"},{name:"发布",logo:"",sort:10,type:"app_redirect",link:"10"},{name:"我的钱包",logo:"",sort:11,type:"app_redirect",link:"11"},{name:"关于我们",logo:"",sort:12,type:"app_redirect",link:"12"}],allMenuSelect:[],defaultMenu:{title:"新增默认菜单",show:!1,key:"",max:9999},dialog:{title:"新增自定义菜单",show:!1,disabledName:!1,key:""},patchData:{},dialogForm:{name:"",logo:"",sort:"",type:"outer_link",link:"",text:"",phone:""},dialogRules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],logo:[{required:!0,message:"请新增菜单logo",trigger:"chnage"}],sort:[{required:!0,type:"number",message:"请输入排序",trigger:"blur"}],link:[{required:!0,message:"请输入",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],text:[{required:!0,message:"请输入展示号码",trigger:"blur"}]}}},methods:{getProductList:function(){var t=this;return Object(u["Kb"])({}).then((function(e){var n,r=e.data||[];t.productLists=r.map((function(t){return{label:t.name,value:t.id}})),t.sourceId=null===r||void 0===r||null===(n=r[0])||void 0===n?void 0:n.id}))},handleQuery:function(){this.getList()},radiochange:function(){this.dialogForm.link=""},judgeDisabled:function(t){var e=this.defaultMenu.key;if(""===e)return!1;var n=[];return n="main"===e?this.frequent.concat(this.more).map((function(t){return t.name})):"frequent"===e?this.main.concat(this.more).map((function(t){return t.name})):this.frequent.concat(this.main).map((function(t){return t.name})),n.includes(t)},addDefault:function(t){var e=this;this.allMenuSelect=this[t].map((function(t){return t.name})),this.allMenu.forEach((function(n){var r=e[t].find((function(t){return n.name===t.name}));r&&Object.assign(n,r)})),Object.assign(this.defaultMenu,{show:!0,key:t,max:"main"===t?4:99999})},defaultMenuEnter:function(){var t=this,e=this.patchData.extra.profile_settings||(this.patchData.extra.profile_settings={}),n=this.defaultMenu.key,r=this.allMenu.map((function(t){return t.name})),a=this.allMenu.filter((function(e){return t.allMenuSelect.includes(e.name)})),o=this[n].filter((function(t){return!r.includes(t.name)}));e[n]=a.concat(o),this.httpPatch((function(){t.defaultMenu.show=!1}))},addCustom:function(t){this.resetForm("dialogForm"),this.dialog={title:"新增自定义菜单",show:!0,disabledName:!1,add:!0,key:t}},handleEdit:function(t,e){this.resetForm("dialogForm");var n=t.name,r=t.logo,a=t.sort,o=t.type,i=void 0===o?"outer_link":o,u=t.link,c=void 0===u?"":u,l=t.text,s=void 0===l?"":l,d=t.phone,p=void 0===d?"":d;this.dialog={title:"编辑菜单",disabledName:this.allMenu.some((function(t){return t.name===n})),show:!0,key:e},this.dialogForm={name:n,logo:r,sort:a,type:i,link:c,text:s,phone:p}},dialogEnter:function(){var t,e=this;null===(t=this.$refs.dialogForm)||void 0===t||t.validate((function(t){if(t){var n=e.patchData.extra.profile_settings||(e.patchData.extra.profile_settings={}),r=e.dialog.key,a=n[r]||(n[r]=[]),o=Object(i["a"])({},e.dialogForm);e.dialog.add?a.push(o):a.splice(a.findIndex((function(t){return t.name===o.name})),1,o),e.httpPatch((function(){e.dialog.show=!1}))}}))},handleDelete:function(t,e,n){var r=this;this.$confirm("此操作将永久删除这条名为".concat(e,"的菜单, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e=r.patchData.extra.profile_settings;e[n].splice(t,1),r.httpPatch((function(){r.dialog.show=!1}))})).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},httpPatch:function(t){var e=this,n=this.sourceId;Object(u["y"])(n,this.patchData).then((function(){e.$message.success("修改菜单成功"),e.getList(),null===t||void 0===t||t()}))},getList:function(){var t=this;Object(u["nb"])(this.sourceId).then((function(e){var n=e.extra.profile_settings||{};t.patchData=e,t.main=(n.main||[]).map((function(t){return Object(i["a"])({},t)})),t.frequent=(n.frequent||[]).map((function(t){return Object(i["a"])({},t)})),t.more=(n.more||[]).map((function(t){return Object(i["a"])({},t)}))}))}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProductList();case 2:t.getList();case 3:case"end":return e.stop()}}),e)})))()}},s=l,d=(n("ba0b"),n("2877")),p=Object(d["a"])(s,r,a,!1,null,"266a5864",null);e["default"]=p.exports},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b60c:function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),i=n("a18c"),u=a.a.create({baseURL:"http://10.30.10.1/adm/fusion",timeout:5e3});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=u},ba0b:function(t,e,n){"use strict";n("3696")}}]);