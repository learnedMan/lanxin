(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-834ad086"],{"0385":function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),i=n("a18c"),u=a.a.create({baseURL:"http://10.30.10.1/api",timeout:5e3});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=u},"0fea":function(t,e,n){"use strict";n.d(e,"mb",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"cb",(function(){return c})),n.d(e,"N",(function(){return s})),n.d(e,"J",(function(){return l})),n.d(e,"vb",(function(){return d})),n.d(e,"n",(function(){return p})),n.d(e,"hb",(function(){return m})),n.d(e,"T",(function(){return f})),n.d(e,"K",(function(){return h})),n.d(e,"Ob",(function(){return b})),n.d(e,"t",(function(){return g})),n.d(e,"Bb",(function(){return O})),n.d(e,"pb",(function(){return j})),n.d(e,"s",(function(){return y})),n.d(e,"kb",(function(){return v})),n.d(e,"A",(function(){return w})),n.d(e,"V",(function(){return x})),n.d(e,"L",(function(){return k})),n.d(e,"Tb",(function(){return C})),n.d(e,"u",(function(){return S})),n.d(e,"Ub",(function(){return F})),n.d(e,"v",(function(){return $})),n.d(e,"Pb",(function(){return P})),n.d(e,"o",(function(){return L})),n.d(e,"ib",(function(){return R})),n.d(e,"Wb",(function(){return q})),n.d(e,"Qb",(function(){return _})),n.d(e,"Kb",(function(){return z})),n.d(e,"l",(function(){return I})),n.d(e,"eb",(function(){return A})),n.d(e,"P",(function(){return D})),n.d(e,"Lb",(function(){return U})),n.d(e,"k",(function(){return E})),n.d(e,"db",(function(){return M})),n.d(e,"O",(function(){return T})),n.d(e,"h",(function(){return K})),n.d(e,"E",(function(){return B})),n.d(e,"bc",(function(){return N})),n.d(e,"Hb",(function(){return Q})),n.d(e,"ab",(function(){return J})),n.d(e,"Mb",(function(){return V})),n.d(e,"ac",(function(){return G})),n.d(e,"Ib",(function(){return H})),n.d(e,"i",(function(){return Y})),n.d(e,"bb",(function(){return Z})),n.d(e,"M",(function(){return W})),n.d(e,"Nb",(function(){return X})),n.d(e,"m",(function(){return tt})),n.d(e,"gb",(function(){return et})),n.d(e,"S",(function(){return nt})),n.d(e,"Jb",(function(){return rt})),n.d(e,"Rb",(function(){return at})),n.d(e,"p",(function(){return ot})),n.d(e,"U",(function(){return it})),n.d(e,"jb",(function(){return ut})),n.d(e,"Sb",(function(){return ct})),n.d(e,"q",(function(){return st})),n.d(e,"fb",(function(){return lt})),n.d(e,"Q",(function(){return dt})),n.d(e,"Vb",(function(){return pt})),n.d(e,"r",(function(){return mt})),n.d(e,"qb",(function(){return ft})),n.d(e,"W",(function(){return ht})),n.d(e,"D",(function(){return bt})),n.d(e,"ub",(function(){return gt})),n.d(e,"R",(function(){return Ot})),n.d(e,"Gb",(function(){return jt})),n.d(e,"Fb",(function(){return yt})),n.d(e,"g",(function(){return vt})),n.d(e,"x",(function(){return wt})),n.d(e,"cc",(function(){return xt})),n.d(e,"Db",(function(){return kt})),n.d(e,"Cb",(function(){return Ct})),n.d(e,"X",(function(){return St})),n.d(e,"sb",(function(){return Ft})),n.d(e,"yb",(function(){return $t})),n.d(e,"xb",(function(){return Pt})),n.d(e,"e",(function(){return Lt})),n.d(e,"z",(function(){return Rt})),n.d(e,"I",(function(){return qt})),n.d(e,"ob",(function(){return _t})),n.d(e,"w",(function(){return zt})),n.d(e,"wb",(function(){return It})),n.d(e,"d",(function(){return At})),n.d(e,"Z",(function(){return Dt})),n.d(e,"H",(function(){return Ut})),n.d(e,"Ab",(function(){return Et})),n.d(e,"lb",(function(){return Mt})),n.d(e,"nb",(function(){return Tt})),n.d(e,"y",(function(){return Kt})),n.d(e,"zb",(function(){return Bt})),n.d(e,"a",(function(){return Nt})),n.d(e,"Zb",(function(){return Qt})),n.d(e,"F",(function(){return Jt})),n.d(e,"rb",(function(){return Vt})),n.d(e,"b",(function(){return Gt})),n.d(e,"Yb",(function(){return Ht})),n.d(e,"G",(function(){return Yt})),n.d(e,"Eb",(function(){return Zt})),n.d(e,"f",(function(){return Wt})),n.d(e,"C",(function(){return Xt})),n.d(e,"tb",(function(){return te})),n.d(e,"B",(function(){return ee})),n.d(e,"Xb",(function(){return ne})),n.d(e,"c",(function(){return re})),n.d(e,"Y",(function(){return ae}));n("99af");var r=n("b775"),a=n("b60c"),o=n("0385");n("2ab73");function i(){return Object(r["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(r["a"])({url:"/api/permissions",method:"post",params:t})}function c(t,e){return Object(r["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function s(t){return Object(r["a"])({url:"/api/permissions/"+t,method:"delete"})}function l(t){return Object(r["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function d(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(r["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(r["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(r["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(r["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(r["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(r["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function O(t){return Object(r["a"])({url:"/api/system/data",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/api/channels",method:"get",params:t})}function y(t){return Object(r["a"])({url:"/api/users",method:"post",data:t})}function v(t,e){return Object(r["a"])({url:"/api/user/"+t,method:"patch",data:e})}function w(t,e){return Object(r["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function x(t){return Object(r["a"])({url:"/api/user/"+t,method:"delete"})}function k(t){return Object(r["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function C(t){return Object(r["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function S(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function F(t){return Object(r["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function $(t,e){return Object(r["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function P(t){return Object(r["a"])({url:"/api/sites",method:"get",params:t})}function L(t){return Object(r["a"])({url:"/api/sites",method:"post",data:t})}function R(t,e){return Object(r["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function q(){return Object(r["a"])({url:"/api/zones",method:"get"})}function _(t){return Object(r["a"])({url:"/api/sites/"+t,method:"get"})}function z(t){return Object(r["a"])({url:"/api/products",method:"get",params:t})}function I(t){return Object(r["a"])({url:"/api/products",method:"post",data:t})}function A(t,e){return Object(r["a"])({url:"/api/products/"+t,method:"patch",data:e})}function D(t){return Object(r["a"])({url:"/api/products/"+t,method:"delete"})}function U(t){return Object(r["a"])({url:"/api/product_versions",method:"get",params:t})}function E(t){return Object(r["a"])({url:"/api/product_versions",method:"post",data:t})}function M(t,e){return Object(r["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function T(t){return Object(r["a"])({url:"/api/product_versions/"+t,method:"delete"})}function K(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function N(t){return Object(r["a"])({url:"/api/channels/setSort",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/api/channels/"+t,method:"get"})}function J(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function V(t){return Object(r["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(r["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function H(t){return Object(r["a"])({url:"/api/categories",method:"get",params:t})}function Y(t){return Object(r["a"])({url:"/api/categories",method:"post",data:t})}function Z(t,e){return Object(r["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function W(t){return Object(r["a"])({url:"/api/categories/"+t,method:"delete"})}function X(t){return Object(r["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(r["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(r["a"])({url:"/api/resources/"+t,method:"post",data:e})}function nt(t){return Object(r["a"])({url:"/api/resources/"+t,method:"delete"})}function rt(t){return Object(r["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function ct(t){return Object(r["a"])({url:"/api/programs",method:"get",params:t})}function st(t){return Object(r["a"])({url:"/api/programs",method:"post",data:t})}function lt(t,e){return Object(r["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function dt(t){return Object(r["a"])({url:"/api/programs/"+t,method:"delete"})}function pt(t){return Object(r["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(r["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(r["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function ht(t,e){return Object(r["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(r["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(r["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function Ot(t){return Object(r["a"])({url:"/api/replays/"+t,method:"delete"})}function jt(t){return Object(r["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function yt(t,e){return Object(r["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function vt(t){return Object(r["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function wt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function xt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function kt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function St(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Ft(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Lt(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Rt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function _t(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function zt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function It(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function At(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Et(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Mt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Tt(t){return Object(r["a"])({url:"/api/products/".concat(t),method:"get"})}function Kt(t,e){return Object(r["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Bt(){return Object(r["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Nt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Qt(t){return Object(r["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Jt(t){return Object(r["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function Vt(t){return Object(r["a"])({url:"/api/h5",method:"get",params:t})}function Gt(t){return Object(r["a"])({url:"/api/h5",method:"post",data:t})}function Ht(t,e){return Object(r["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function Yt(t){return Object(r["a"])({url:"/api/h5/".concat(t),method:"delete"})}function Zt(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function Wt(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function Xt(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function te(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function ne(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function re(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ae(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},2568:function(t,e,n){},"2ab73":function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),i=n("a18c"),u=a.a.create({baseURL:"http://10.30.10.125",timeout:6e4});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"845c":function(t,e,n){"use strict";n.r(e);var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xl-template-manage"},[n("div",{staticClass:"xl-template-manage--tree"},[n("h3",{staticClass:"xl-template-manage--title"},[n("span",[t._v("目录")]),n("span",[n("el-button",{staticStyle:{"margin-right":"6px"},attrs:{type:"text",icon:"el-icon-folder-add"},on:{click:t.handleAdd}}),n("el-switch",{model:{value:t.switchAction,callback:function(e){t.switchAction=e},expression:"switchAction"}})],1)]),n("el-tree",{ref:"tree",attrs:{data:t.channelsList,props:t.props,"node-key":"id","default-expand-all":"","expand-on-click-node":!1},on:{"current-change":t.treeChange},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.node,a=e.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[t._v(t._s(a.name))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.switchAction,expression:"switchAction"}]},[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return e.stopPropagation(),t.handleEdit(a)}}}),n("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return e.stopPropagation(),t.handleRemove(r,a)}}})],1)])}}])})],1),n("div",{staticClass:"xl-template-manage--content"},[n("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"名称:",prop:"keyword"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleReset}},[t._v(" 重置 ")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v(" 搜索 ")]),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleAddList}},[t._v(" 新增 ")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},data:t.tableData,border:"","tooltip-effect":"dark"}},[n("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),n("el-table-column",{attrs:{label:"名称",align:"center",prop:"name","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"路径规则",align:"center",prop:"url"}}),n("el-table-column",{attrs:{label:"域名",align:"center",prop:"domainLabel"}}),n("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updated_at"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"verify-table-action"},[n("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(n){return t.handleEditList(e.row)}}}),n("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(n){return t.handleDeleteList(e.row)}}})],1)]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}})],1),n("el-dialog",{attrs:{width:"400px",title:"新增目录",visible:t.directory.show},on:{"update:visible":function(e){return t.$set(t.directory,"show",e)}}},[n("el-form",{ref:"directoryForm",attrs:{model:t.directory.form,rules:t.directory.rules,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"上级目录:",prop:"path"}},[n("el-cascader",{staticStyle:{width:"200px"},attrs:{options:t.channelsList,props:t.cascaderOption,clearable:""},model:{value:t.directory.form.path,callback:function(e){t.$set(t.directory.form,"path",e)},expression:"directory.form.path"}})],1),n("el-form-item",{attrs:{label:"目录名称:",prop:"name"}},[n("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入目录名称",clearable:""},model:{value:t.directory.form.name,callback:function(e){t.$set(t.directory.form,"name",e)},expression:"directory.form.name"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.directory.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:t.directoryDialog}},[t._v(" 确 定 ")])],1)],1),n("el-dialog",{attrs:{width:"500px",title:t.dialog.title,visible:t.dialog.show},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}}},[n("el-form",{ref:"dialogForm",attrs:{model:t.listFrom,rules:t.listRule,"label-width":"120px",size:"small"}},[n("el-form-item",{attrs:{label:"域名:",prop:"domain"}},[n("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"请选择域名",clearable:""},model:{value:t.listFrom.domain,callback:function(e){t.$set(t.listFrom,"domain",e)},expression:"listFrom.domain"}},t._l(t.domainOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"名称:",prop:"name"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入名称",clearable:""},model:{value:t.listFrom.name,callback:function(e){t.$set(t.listFrom,"name","string"===typeof e?e.trim():e)},expression:"listFrom.name"}})],1),n("el-form-item",{attrs:{label:"路径:",prop:"path"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入路径(不填按年月日来生成路径)",clearable:""},model:{value:t.listFrom.path,callback:function(e){t.$set(t.listFrom,"path","string"===typeof e?e.trim():e)},expression:"listFrom.path"}})],1),n("el-form-item",{attrs:{label:"文件:",prop:"upload",rules:t.dialog.id?[]:{required:!0,message:"文件不能为空",trigger:"change"}}},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.handleFileChange,"on-remove":t.handleRemove,"auto-upload":!1}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("选取文件")])],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialog.show=!1}}},[t._v(" 取 消 ")]),n("el-button",{attrs:{type:"primary"},on:{click:t.entryDialog}},[t._v(" 确 定 ")])],1)],1)],1)},o=[],i=n("ade3"),u=n("5530"),c=n("1da1"),s=(n("96cf"),n("498a"),n("dca8"),n("159b"),n("99af"),n("b0c0"),n("ac1f"),n("5319"),n("a434"),n("d3b7"),n("d81d"),n("7db0"),n("0fea")),l={name:"Template-manage",data:function(){var t=function(t,e,n){""===e.trim()||/(\/[\w\/]*)?\w+/.test(e)?n():n(new Error("请输入正确的路径"))};return{channelsList:[],props:Object.freeze({label:"name",children:"child"}),currentKey:"",switchAction:!1,cascaderOption:{checkStrictly:!0,emitPath:!1,children:"child",value:"id",label:"name",multiple:!1},id:1,directory:{show:!1,form:{path:"",name:""},rules:{name:[{required:!0,message:"请输入目录名",trigger:"blur"}]}},queryParams:{name:"",page:1,pageSize:10},loading:!1,tableData:[],total:0,domainOptions:[{label:"全站",value:1},{label:"租户",value:2}],dialog:{show:!1,title:"新增"},listFrom:{domain:"",path:"",name:"",upload:""},listRule:{domain:{required:!0,message:"请选择域名",trigger:"change"},name:{required:!0,message:"请新增名称",trigger:"blur"},path:{validator:t,trigger:"blur"}}}},methods:(r={getChannels:function(){var t=this;return Object(s["zb"])().then((function(e){var n=[e];t.setOnlyId(n),t.channelsList=n}))},setOnlyId:function(t){var e=this;t.forEach((function(t){t.id="".concat(t.path,":").concat(t.name),t.child&&e.setOnlyId(t.child)}))},handleAdd:function(){this.resetForm("directoryForm"),this.directory.show=!0},directoryDialog:function(){var t,e=this;null===(t=this.$refs.directoryForm)||void 0===t||t.validate((function(t){if(t){var n=e.directory.form,r=n.path,a=n.name,o={path:r.replace(/:.+/,""),name:a};Object(s["a"])(o).then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=n.message,a=n.status_code,200!==a){t.next=9;break}return e.$message.success(r),e.directory.show=!1,t.next=6,e.getChannels();case 6:e.$refs.tree.setCurrentKey(e.currentKey),t.next=10;break;case 9:e.$message.warning(r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}))},handleEdit:function(t){var e=this,n=t.name,r=t.path;this.$prompt("请输入目录名","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t.name,inputValidator:function(t){return null!=t&&""!==t.trim()},inputErrorMessage:"请输入目录名"}).then((function(t){var a=t.value;n!==a&&Object(s["Zb"])({path:r,name:n,rename:a}).then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=n.message,a=n.status_code,200!==a){t.next=8;break}return e.$message.success(r),t.next=5,e.getChannels();case 5:e.$refs.tree.setCurrentKey(e.currentKey),t.next=9;break;case 8:e.$message.warning(r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(){e.$message({type:"info",message:"取消输入"})}))},handleRemove:function(t,e){var n=this,r=e.name,a=e.path;this.$confirm("此操作将永久删除该".concat(r,"目录, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["F"])({path:"".concat(a,"/").concat(r)}).then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.message,a=e.status_code,200!==a){t.next=8;break}return n.$message.success(r),t.next=5,n.getChannels();case 5:n.$refs.tree.setCurrentKey(n.currentKey),t.next=9;break;case 8:n.$message.warning(r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},treeChange:function(t){this.currentKey=t.id,console.log(t)},handleQuery:function(){this.queryParams.page=1,this.getList()},handleReset:function(){Object.assign(this.queryParams,{name:"",page:1})},handleAddList:function(){this.resetForm("dialogForm"),this.dialog={title:"新增",show:!0}},handleEditList:function(t){var e=t.id,n=t.name,r=t.domain,a=t.path;this.resetForm("dialogForm"),this.listFrom={name:n,domain:r,path:a,upload:""},this.dialog={title:"新增",show:!0,id:e}},handleFileChange:function(t,e){e.length>1&&e.splice(0,1),this.listFrom.upload=t.raw}},Object(i["a"])(r,"handleRemove",(function(){this.listFrom.upload=""})),Object(i["a"])(r,"entryDialog",(function(){var t,e=this;null===(t=this.$refs.dialogForm)||void 0===t||t.validate((function(t){if(t){var n,r=e.dialog.id,a=Object(u["a"])({},e.listFrom),o=new FormData;o.append("name",a.name),o.append("domain",a.domain),o.append("domain",a.path),a.upload&&o.append("upload",a.upload),n=r?Object(s["Yb"])(r,o):Object(s["b"])(o),n.then((function(){e.$message.success(r?"修改成功":"新增成功"),e.dialog.show=!1,e.getList()}))}}))})),Object(i["a"])(r,"handleDeleteList",(function(t){var e=this,n=t.id;this.$confirm("此操作将永久删除该id为".concat(n,"的文件, 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["G"])(n).then((function(){e.$message.success("删除成功"),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))})),Object(i["a"])(r,"getList",(function(){var t=this,e=Object(u["a"])({},this.queryParams);this.loading=!0,Object(s["rb"])(this.removePropertyOfNullFor0(e)).then((function(e){var n=e.data,r=e.total;t.tableData=n.map((function(e){var n,r;return Object(u["a"])(Object(u["a"])({},e),{},{domainLabel:null!==(n=null===(r=t.domainOptions.find((function(t){return t.value===e.domain})))||void 0===r?void 0:r.label)&&void 0!==n?n:""})})),t.total=r})).finally((function(){t.loading=!1}))})),r),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.getList(),e.next=3,t.getChannels();case 3:t.$nextTick((function(){var e,n=t.$route.query.id||(null===(e=t.channelsList[0])||void 0===e?void 0:e.id);t.currentKey=n,t.$refs.tree.setCurrentKey(n)}));case 4:case"end":return e.stop()}}),e)})))()}},d=l,p=(n("d550"),n("2877")),m=Object(p["a"])(d,a,o,!1,null,null,null);e["default"]=m.exports},b60c:function(t,e,n){"use strict";n("d3b7");var r=n("bc3a"),a=n.n(r),o=n("5c96"),i=n("a18c"),u=a.a.create({baseURL:"http://10.30.10.1/adm/fusion",timeout:5e3});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=u},d550:function(t,e,n){"use strict";n("2568")},dca8:function(t,e,n){var r=n("23e7"),a=n("bb2f"),o=n("d039"),i=n("861d"),u=n("f183").onFreeze,c=Object.freeze,s=o((function(){c(1)}));r({target:"Object",stat:!0,forced:s,sham:!a},{freeze:function(t){return c&&i(t)?c(u(t)):t}})}}]);