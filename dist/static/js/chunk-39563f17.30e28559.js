(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39563f17"],{"0385":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5041"),s=a.a.create({baseURL:u["d"],timeout:5e3});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=s},"0fea":function(t,e,n){"use strict";n.d(e,"qb",(function(){return i})),n.d(e,"l",(function(){return u})),n.d(e,"gb",(function(){return s})),n.d(e,"R",(function(){return c})),n.d(e,"N",(function(){return l})),n.d(e,"Cb",(function(){return d})),n.d(e,"p",(function(){return p})),n.d(e,"lb",(function(){return m})),n.d(e,"X",(function(){return f})),n.d(e,"O",(function(){return h})),n.d(e,"Wb",(function(){return b})),n.d(e,"v",(function(){return g})),n.d(e,"Jb",(function(){return j})),n.d(e,"tb",(function(){return O})),n.d(e,"u",(function(){return v})),n.d(e,"ob",(function(){return y})),n.d(e,"D",(function(){return _})),n.d(e,"Z",(function(){return w})),n.d(e,"P",(function(){return x})),n.d(e,"bc",(function(){return k})),n.d(e,"w",(function(){return S})),n.d(e,"cc",(function(){return P})),n.d(e,"x",(function(){return q})),n.d(e,"Xb",(function(){return D})),n.d(e,"q",(function(){return C})),n.d(e,"mb",(function(){return L})),n.d(e,"ec",(function(){return $})),n.d(e,"Yb",(function(){return z})),n.d(e,"Sb",(function(){return I})),n.d(e,"n",(function(){return R})),n.d(e,"ib",(function(){return F})),n.d(e,"T",(function(){return M})),n.d(e,"Tb",(function(){return N})),n.d(e,"m",(function(){return U})),n.d(e,"hb",(function(){return E})),n.d(e,"S",(function(){return T})),n.d(e,"j",(function(){return A})),n.d(e,"H",(function(){return B})),n.d(e,"jc",(function(){return Q})),n.d(e,"Pb",(function(){return J})),n.d(e,"eb",(function(){return V})),n.d(e,"Ub",(function(){return H})),n.d(e,"ic",(function(){return G})),n.d(e,"Qb",(function(){return K})),n.d(e,"k",(function(){return W})),n.d(e,"fb",(function(){return X})),n.d(e,"Q",(function(){return Y})),n.d(e,"Vb",(function(){return Z})),n.d(e,"o",(function(){return tt})),n.d(e,"kb",(function(){return et})),n.d(e,"W",(function(){return nt})),n.d(e,"Rb",(function(){return rt})),n.d(e,"Zb",(function(){return at})),n.d(e,"r",(function(){return ot})),n.d(e,"Y",(function(){return it})),n.d(e,"nb",(function(){return ut})),n.d(e,"ac",(function(){return st})),n.d(e,"s",(function(){return ct})),n.d(e,"jb",(function(){return lt})),n.d(e,"U",(function(){return dt})),n.d(e,"dc",(function(){return pt})),n.d(e,"t",(function(){return mt})),n.d(e,"ub",(function(){return ft})),n.d(e,"ab",(function(){return ht})),n.d(e,"G",(function(){return bt})),n.d(e,"Bb",(function(){return gt})),n.d(e,"V",(function(){return jt})),n.d(e,"Ob",(function(){return Ot})),n.d(e,"Nb",(function(){return vt})),n.d(e,"i",(function(){return yt})),n.d(e,"z",(function(){return _t})),n.d(e,"kc",(function(){return wt})),n.d(e,"Lb",(function(){return xt})),n.d(e,"Kb",(function(){return kt})),n.d(e,"bb",(function(){return St})),n.d(e,"zb",(function(){return Pt})),n.d(e,"yb",(function(){return qt})),n.d(e,"Fb",(function(){return Dt})),n.d(e,"Eb",(function(){return Ct})),n.d(e,"f",(function(){return Lt})),n.d(e,"C",(function(){return $t})),n.d(e,"M",(function(){return zt})),n.d(e,"sb",(function(){return It})),n.d(e,"y",(function(){return Rt})),n.d(e,"Db",(function(){return Ft})),n.d(e,"e",(function(){return Mt})),n.d(e,"db",(function(){return Nt})),n.d(e,"L",(function(){return Ut})),n.d(e,"Ib",(function(){return Et})),n.d(e,"pb",(function(){return Tt})),n.d(e,"g",(function(){return At})),n.d(e,"Gb",(function(){return Bt})),n.d(e,"vb",(function(){return Qt})),n.d(e,"a",(function(){return Jt})),n.d(e,"wb",(function(){return Vt})),n.d(e,"B",(function(){return Ht})),n.d(e,"I",(function(){return Gt})),n.d(e,"rb",(function(){return Kt})),n.d(e,"A",(function(){return Wt})),n.d(e,"Hb",(function(){return Xt})),n.d(e,"b",(function(){return Yt})),n.d(e,"hc",(function(){return Zt})),n.d(e,"J",(function(){return te})),n.d(e,"xb",(function(){return ee})),n.d(e,"c",(function(){return ne})),n.d(e,"gc",(function(){return re})),n.d(e,"K",(function(){return ae})),n.d(e,"Mb",(function(){return oe})),n.d(e,"h",(function(){return ie})),n.d(e,"F",(function(){return ue})),n.d(e,"Ab",(function(){return se})),n.d(e,"E",(function(){return ce})),n.d(e,"fc",(function(){return le})),n.d(e,"d",(function(){return de})),n.d(e,"cb",(function(){return pe}));n("b4fb");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function i(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function l(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function j(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function y(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function _(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function w(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function x(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function k(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function S(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function P(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function q(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function D(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function C(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function L(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function $(){return Object(r["a"])({url:"/api/zones",method:"get"})}function z(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function I(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function R(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function F(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function M(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function N(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function U(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function E(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function T(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function A(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function Q(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function V(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function H(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function K(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function W(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function X(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function nt(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function rt(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function st(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function ct(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function pt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function ht(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function jt(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function Ot(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function vt(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function yt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function _t(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function wt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function xt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function kt(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function St(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function qt(t){return Object(o["a"])({url:"/intranet/uc/queryInvitationCountDatas",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Lt(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function It(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Rt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Ft(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Et(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Tt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function At(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginCreate",method:"post",data:t})}function Bt(t){return Object(o["a"])({url:"/v1/internal/points/pointLoginList",method:"post",data:t})}function Qt(t){return Object(r["a"])({url:"/api/departments",method:"get",params:t})}function Jt(t){return Object(r["a"])({url:"/api/departments",method:"post",data:t})}function Vt(t){return Object(r["a"])({url:"/api/departments/"+t,method:"get"})}function Ht(t,e){return Object(r["a"])({url:"/api/departments/".concat(t),method:"patch",data:e})}function Gt(t){return Object(r["a"])({url:"/api/departments/".concat(t),method:"delete"})}function Kt(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function Wt(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Xt(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Yt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Zt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function te(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function ee(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function ne(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function re(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function ae(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function oe(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function ie(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function ue(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function se(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ce(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function le(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function de(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function pe(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"244d":function(t,e,n){"use strict";n("b31a")},"2ab73":function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5041"),s=a.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"6f96":function(t,e,n){"use strict";n.r(e);var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-collect-lists"},[n("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"订阅号/来源:",prop:"keyword"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.keyword,callback:function(e){t.$set(t.queryParams,"keyword",e)},expression:"queryParams.keyword"}})],1),n("el-form-item",{attrs:{label:"状态:",prop:"is_valid"}},[n("el-select",{attrs:{size:"small",placeholder:"请选择状态",clearable:""},model:{value:t.queryParams.is_valid,callback:function(e){t.$set(t.queryParams,"is_valid",e)},expression:"queryParams.is_valid"}},t._l(t.statusOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"创建时间:",prop:"createDate"}},[n("el-date-picker",{attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"~","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.handleDateChange},model:{value:t.queryParams.createDate,callback:function(e){t.$set(t.queryParams,"createDate",e)},expression:"queryParams.createDate"}})],1),n("el-form-item",[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleReset}},[t._v(" 重置 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary",size:"mini"},on:{click:t.handleAdd}},[t._v(" 新增 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"订阅号",align:"center",prop:"account",showOverflowTooltip:""}}),n("el-table-column",{attrs:{label:"来源",align:"center",prop:"source"}}),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-select",{on:{change:function(n){return t.changeStatus(e.row)}},model:{value:e.row.is_valid,callback:function(n){t.$set(e.row,"is_valid",n)},expression:"scope.row.is_valid"}},t._l(t.statusOptions.filter((function(t){return""!==t.value})),(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}])}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at"}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(n){return t.handleEdit(e.row)}}}),n("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(n){return t.handleDelete(e.row)}}})]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),n("el-dialog",{attrs:{width:"600px","close-on-click-modal":!1,title:t.publishDialog.title,visible:t.publishDialog.show},on:{"update:visible":function(e){return t.$set(t.publishDialog,"show",e)}}},[n("el-form",{ref:"publishForm",attrs:{model:t.publishDialog.form,rules:t.publishDialog.rules}},[n("el-form-item",{attrs:{"label-width":"120px",label:"栏目",prop:"channel_id"}},[n("el-cascader",{staticStyle:{width:"350px"},attrs:{filterable:"",options:t.channelsList,props:t.cascaderOption,clearable:""},model:{value:t.publishDialog.form.channels,callback:function(e){t.$set(t.publishDialog.form,"channels",e)},expression:"publishDialog.form.channels"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(e){t.publishDialog.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.enterPublishDialog}},[t._v(" 确 定 ")])],1)],1),n("el-dialog",{attrs:{width:"800px",top:"10vh","close-on-click-modal":!1,title:t.dialog.title,visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.dialog.form,rules:t.dialog.rules,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"稿件来源",prop:"extra.type"}},[n("el-radio-group",{model:{value:t.dialog.form.extra.type,callback:function(e){t.$set(t.dialog.form.extra,"type",e)},expression:"dialog.form.extra.type"}},[n("el-radio",{attrs:{label:"wechat"}},[t._v("微信")]),n("el-radio",{attrs:{label:"weibo"}},[t._v("微博")]),n("el-radio",{attrs:{label:"media"}},[t._v("客户端/网站/报纸")])],1)],1),n("el-form-item",{attrs:{label:"采集名称:",prop:"name"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入采集名称",clearable:"",size:"small"},model:{value:t.dialog.form.name,callback:function(e){t.$set(t.dialog.form,"name",e)},expression:"dialog.form.name"}})],1),n("el-form-item",{attrs:{label:"来源名称:",prop:"source"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入来源名称",clearable:"",size:"small"},model:{value:t.dialog.form.source,callback:function(e){t.$set(t.dialog.form,"source",e)},expression:"dialog.form.source"}})],1),n("el-form-item",{attrs:{label:"来源logo:",prop:"extra.logo"}},[n("upload-single",{model:{value:t.dialog.form.extra.logo,callback:function(e){t.$set(t.dialog.form.extra,"logo",e)},expression:"dialog.form.extra.logo"}})],1),n("el-form-item",{attrs:{label:"来源账号:",prop:"account"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入来源名称",clearable:"",size:"small"},model:{value:t.dialog.form.account,callback:function(e){t.$set(t.dialog.form,"account",e)},expression:"dialog.form.account"}})],1),n("el-form-item",{attrs:{"label-width":"120px",label:"分发栏目",prop:"channel_id"}},[n("el-cascader",{staticStyle:{width:"200px"},attrs:{filterable:"",options:t.channelsList,props:t.cascaderOption,clearable:""},model:{value:t.dialog.form.channel_id,callback:function(e){t.$set(t.dialog.form,"channel_id",e)},expression:"dialog.form.channel_id"}})],1),n("el-form-item",{attrs:{label:"简介:",prop:"extra.introduction"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{rows:6,type:"textarea",placeholder:"请输入简介",clearable:"",size:"small"},model:{value:t.dialog.form.extra.introduction,callback:function(e){t.$set(t.dialog.form.extra,"introduction",e)},expression:"dialog.form.extra.introduction"}})],1),n("el-form-item",{attrs:{label:"默认发布",prop:"extra.auto_publish"}},[n("el-radio-group",{model:{value:t.dialog.form.extra.auto_publish,callback:function(e){t.$set(t.dialog.form.extra,"auto_publish",e)},expression:"dialog.form.extra.auto_publish"}},[n("el-radio",{attrs:{label:"1"}},[t._v("是")]),n("el-radio",{attrs:{label:"0"}},[t._v("否")])],1)],1),n("el-form-item",{attrs:{label:"是否启用",prop:"extra.is_valid"}},[n("el-radio-group",{model:{value:t.dialog.form.extra.is_valid,callback:function(e){t.$set(t.dialog.form.extra,"is_valid",e)},expression:"dialog.form.extra.is_valid"}},[n("el-radio",{attrs:{label:"1"}},[t._v("是")]),n("el-radio",{attrs:{label:"0"}},[t._v("否")])],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(e){t.dialog.show=!1}}},[t._v("取 消")]),n("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:t.enterChangeDialog}},[t._v("确 定")])],1)],1)],1)},o=[],i=n("8955"),u=n("e9ff"),s=n("06c4"),c=(n("e186"),n("77ad"),n("053b"),n("4194"),n("2eeb"),n("9302"),n("e18c"),n("0fea")),l=n("b49d"),d=n("e60d"),p=n("cc48"),m=n("52c1"),f=(r={name:"collectList",components:{Cropper:l["a"],uploadSingle:d["a"]},computed:{visitedViews:function(){return this.$store.state.tagsView.visitedViews}},data:function(){return{queryParams:{is_valid:"",site_id:"",keyword:"",createDate:"",start_date:"",endd_ate:"",page:1,pageSize:10},productLists:[],statusOptions:[{label:"全部",value:""},{label:"启用",value:1},{label:"禁用",value:0}],loading:!1,total:0,tableData:[],cascaderOption:{checkStrictly:!0,emitPath:!1,value:"id",label:"name",multiple:!1},channelsList:[],publishDialog:{show:!1,title:"发布栏目",form:{channels:"",special_channel_ids:""},rules:{channels:[{required:!0,message:"请选择栏目",trigger:"change"}]}},imgCount:1,catalogOptions:[],styleOptions:[],dialog:{show:!1,title:"新增采集",form:{name:"",source:"",account:"",channel_id:"",extra:{type:"",auto_publish:"",is_valid:"",introduction:"",logo:""}},rules:{name:[{required:!0,message:"请输入采集名称",trigger:"blur"}],source:[{required:!0,message:"请输入来源名称",trigger:"blur"}],account:[{required:!0,message:"请输入来源账号",trigger:"blur"}],"extra.is_valid":[{required:!0,message:"请选择是否启用",trigger:"change"}],"extra.auto_publish":[{required:!0,message:"请选择是否默认发布",trigger:"blur"}],"extra.logo":[{required:!0,message:"请选择来源logo",trigger:"change"}]}}}}},Object(i["a"])(r,"computed",Object(s["a"])({site_id:function(){return this.$store.state.user.u_info.site_id}},Object(m["b"])(["u_info"]))),Object(i["a"])(r,"methods",{handleDateChange:function(t){var e=t||["",""];this.queryParams.start_date=e[0],this.queryParams.endd_ate=e[1]},handleReset:function(){Object.assign(this.queryParams,{page:1}),this.resetForm("queryForm")},handleQuery:function(){this.queryParams.page=1,this.getList()},handleAdd:function(){this.resetForm("dialogForm"),Object.assign(this.dialog,{title:"新增采集",show:!0,id:"",form:{name:"",source:"",account:"",channel_id:"",extra:{type:"wechat",auto_publish:"1",is_valid:"1",introduction:"",logo:""}}})},changeStatus:function(t){var e=this,n=t.is_valid,r=t.id;Object(p["j"])({status:n,ids:"".concat(r)}).then((function(){e.$message.success("修改状态成功"),e.getList()}))},handleEdit:function(t){this.resetForm("dialogForm"),console.log("row",t),Object.assign(this.dialog,{title:"编辑采集",show:!0,id:t.id,form:{name:t.name,source:t.source,account:t.account,channel_id:t.channel_id,extra:{type:t.type,auto_publish:String(t.auto_publish),is_valid:String(t.is_valid),introduction:t.introduction,logo:t.logo}}})},handleCoverChange:function(t){var e;this.imgCount=(null===(e=this.template_styleLists.find((function(e){return e.value===t})))||void 0===e?void 0:e.count)||1},enterChangeDialog:function(){var t,e=this;null===(t=this.$refs.dialogForm)||void 0===t||t.validate((function(t){if(t){var n=e.dialog.id,r=Object(s["a"])(Object(s["a"])({},e.dialog.form),e.dialog.form.extra);r.zone_id=e.u_info.zone_id,r.site_id=e.u_info.site_id,delete r.extra,console.log("this.dialog",e.dialog.form),console.log("params",r);var a=n?Object(p["i"])(n,r):Object(p["d"])(r);a.then((function(){e.$message.success("".concat(e.dialog.title,"成功!")),e.dialog.show=!1,e.getList()}))}}))},handleDelete:function(t){var e=this,n=t.id;this.$confirm("此操作将永久删除这条ID为".concat(n,"的订阅号, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(p["t"])(n).then((function(){e.$message({message:"删除成功",type:"success"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},watchList:function(t){var e=t.id;this.$emit("watch-detail",e)},handlePublish:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.resetForm("publishForm"),r=t.id,a=t.extra.special_channel_script_id,o=[],!a){n.next=6;break}return n.next=6,Object(p["J"])(a).then((function(t){o=(t.channel||[]).map((function(t){return t.id}))}));case 6:Object.assign(e.publishDialog,{show:!0,form:{channels:o,special_channel_ids:r}});case 7:case"end":return n.stop()}}),n)})))()},enterPublishDialog:function(){var t,e=this;null===(t=this.$refs.publishForm)||void 0===t||t.validate((function(t){if(t){var n=e.publishDialog.form;Object(p["Q"])({channels:n.channels.join(),special_channel_ids:n.special_channel_ids,type:"topic"}).then((function(){e.$message.success("发布成功"),e.publishDialog.show=!1,e.getList()}))}}))},getList:function(){var t=this;this.queryParams.site_id=this.u_info.site_id;var e=Object(s["a"])({},this.queryParams);delete e.createDate,this.loading=!0,console.log("params",e),Object(p["C"])(this.removePropertyOfNullFor0(e)).then((function(e){console.log("res",e.data),t.tableData=(e.data||[]).map((function(t){return Object(s["a"])({},t)})),t.total=e.total||0})).finally((function(){t.loading=!1}))},getChannels:function(){var t=this;Object(c["tb"])({with_special_channels:"topic"}).then((function(e){t.channelsList=e.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{disabled:!0})})),t.changeChannelName(t.channelsList)}))},getCatelog:function(){var t=this;Object(c["z"])().then((function(e){t.catalogOptions=e.data.list}))},yulanfn:function(){window.open(this.viewurl+this.dialog.form.extra.template_json_id)}}),Object(i["a"])(r,"created",(function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getList(),t.getChannels(),t.getCatelog(),console.log("u_info",t.u_info);case 4:case"end":return e.stop()}}),e)})))()})),r),h=f,b=(n("244d"),n("cba8")),g=Object(b["a"])(h,a,o,!1,null,"9f12d0ee",null);e["default"]=g.exports},b31a:function(t,e,n){},b60c:function(t,e,n){"use strict";n("e18c");var r=n("f753"),a=n.n(r),o=n("b705"),i=n("a18c"),u=n("5041"),s=a.a.create({baseURL:u["c"],timeout:5e3});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=s}}]);