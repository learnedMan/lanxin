(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b06f16"],{"0385":function(t,e,r){"use strict";r("e18c");var n=r("f753"),a=r.n(n),o=r("b705"),i=r("a18c"),u=r("5041"),s=a.a.create({baseURL:u["d"],timeout:5e3});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=s},"0fea":function(t,e,r){"use strict";r.d(e,"mb",(function(){return i})),r.d(e,"j",(function(){return u})),r.d(e,"cb",(function(){return s})),r.d(e,"N",(function(){return c})),r.d(e,"J",(function(){return d})),r.d(e,"vb",(function(){return l})),r.d(e,"n",(function(){return f})),r.d(e,"hb",(function(){return m})),r.d(e,"T",(function(){return p})),r.d(e,"K",(function(){return h})),r.d(e,"Ob",(function(){return b})),r.d(e,"t",(function(){return g})),r.d(e,"Bb",(function(){return j})),r.d(e,"pb",(function(){return O})),r.d(e,"s",(function(){return y})),r.d(e,"kb",(function(){return w})),r.d(e,"A",(function(){return v})),r.d(e,"V",(function(){return k})),r.d(e,"L",(function(){return S})),r.d(e,"Tb",(function(){return _})),r.d(e,"u",(function(){return x})),r.d(e,"Ub",(function(){return C})),r.d(e,"v",(function(){return $})),r.d(e,"Pb",(function(){return P})),r.d(e,"o",(function(){return L})),r.d(e,"ib",(function(){return N})),r.d(e,"Wb",(function(){return q})),r.d(e,"Qb",(function(){return F})),r.d(e,"Kb",(function(){return T})),r.d(e,"l",(function(){return I})),r.d(e,"eb",(function(){return z})),r.d(e,"P",(function(){return U})),r.d(e,"Lb",(function(){return M})),r.d(e,"k",(function(){return R})),r.d(e,"db",(function(){return D})),r.d(e,"O",(function(){return V})),r.d(e,"h",(function(){return K})),r.d(e,"E",(function(){return B})),r.d(e,"bc",(function(){return J})),r.d(e,"Hb",(function(){return A})),r.d(e,"ab",(function(){return E})),r.d(e,"Mb",(function(){return H})),r.d(e,"ac",(function(){return G})),r.d(e,"Ib",(function(){return Q})),r.d(e,"i",(function(){return W})),r.d(e,"bb",(function(){return X})),r.d(e,"M",(function(){return Y})),r.d(e,"Nb",(function(){return Z})),r.d(e,"m",(function(){return tt})),r.d(e,"gb",(function(){return et})),r.d(e,"S",(function(){return rt})),r.d(e,"Jb",(function(){return nt})),r.d(e,"Rb",(function(){return at})),r.d(e,"p",(function(){return ot})),r.d(e,"U",(function(){return it})),r.d(e,"jb",(function(){return ut})),r.d(e,"Sb",(function(){return st})),r.d(e,"q",(function(){return ct})),r.d(e,"fb",(function(){return dt})),r.d(e,"Q",(function(){return lt})),r.d(e,"Vb",(function(){return ft})),r.d(e,"r",(function(){return mt})),r.d(e,"qb",(function(){return pt})),r.d(e,"W",(function(){return ht})),r.d(e,"D",(function(){return bt})),r.d(e,"ub",(function(){return gt})),r.d(e,"R",(function(){return jt})),r.d(e,"Gb",(function(){return Ot})),r.d(e,"Fb",(function(){return yt})),r.d(e,"g",(function(){return wt})),r.d(e,"x",(function(){return vt})),r.d(e,"cc",(function(){return kt})),r.d(e,"Db",(function(){return St})),r.d(e,"Cb",(function(){return _t})),r.d(e,"X",(function(){return xt})),r.d(e,"sb",(function(){return Ct})),r.d(e,"yb",(function(){return $t})),r.d(e,"xb",(function(){return Pt})),r.d(e,"e",(function(){return Lt})),r.d(e,"z",(function(){return Nt})),r.d(e,"I",(function(){return qt})),r.d(e,"ob",(function(){return Ft})),r.d(e,"w",(function(){return Tt})),r.d(e,"wb",(function(){return It})),r.d(e,"d",(function(){return zt})),r.d(e,"Z",(function(){return Ut})),r.d(e,"H",(function(){return Mt})),r.d(e,"Ab",(function(){return Rt})),r.d(e,"lb",(function(){return Dt})),r.d(e,"nb",(function(){return Vt})),r.d(e,"y",(function(){return Kt})),r.d(e,"zb",(function(){return Bt})),r.d(e,"a",(function(){return Jt})),r.d(e,"Zb",(function(){return At})),r.d(e,"F",(function(){return Et})),r.d(e,"rb",(function(){return Ht})),r.d(e,"b",(function(){return Gt})),r.d(e,"Yb",(function(){return Qt})),r.d(e,"G",(function(){return Wt})),r.d(e,"Eb",(function(){return Xt})),r.d(e,"f",(function(){return Yt})),r.d(e,"C",(function(){return Zt})),r.d(e,"tb",(function(){return te})),r.d(e,"B",(function(){return ee})),r.d(e,"Xb",(function(){return re})),r.d(e,"c",(function(){return ne})),r.d(e,"Y",(function(){return ae}));r("b4fb");var n=r("b775"),a=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(n["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(n["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(n["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(n["a"])({url:"/api/permissions/"+t,method:"delete"})}function d(t){return Object(n["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function l(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(n["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function p(t){return Object(n["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(n["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(n["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(n["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function j(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function O(t){return Object(n["a"])({url:"/api/channels",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/api/users",method:"post",data:t})}function w(t,e){return Object(n["a"])({url:"/api/user/"+t,method:"patch",data:e})}function v(t,e){return Object(n["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function k(t){return Object(n["a"])({url:"/api/user/"+t,method:"delete"})}function S(t){return Object(n["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function _(t){return Object(n["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function x(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function C(t){return Object(n["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function $(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function P(t){return Object(n["a"])({url:"/api/sites",method:"get",params:t})}function L(t){return Object(n["a"])({url:"/api/sites",method:"post",data:t})}function N(t,e){return Object(n["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function q(){return Object(n["a"])({url:"/api/zones",method:"get"})}function F(t){return Object(n["a"])({url:"/api/sites/"+t,method:"get"})}function T(t){return Object(n["a"])({url:"/api/products",method:"get",params:t})}function I(t){return Object(n["a"])({url:"/api/products",method:"post",data:t})}function z(t,e){return Object(n["a"])({url:"/api/products/"+t,method:"patch",data:e})}function U(t){return Object(n["a"])({url:"/api/products/"+t,method:"delete"})}function M(t){return Object(n["a"])({url:"/api/product_versions",method:"get",params:t})}function R(t){return Object(n["a"])({url:"/api/product_versions",method:"post",data:t})}function D(t,e){return Object(n["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function V(t){return Object(n["a"])({url:"/api/product_versions/"+t,method:"delete"})}function K(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function J(t){return Object(n["a"])({url:"/api/channels/setSort",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/api/channels/"+t,method:"get"})}function E(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function H(t){return Object(n["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function G(t){return Object(n["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function Q(t){return Object(n["a"])({url:"/api/categories",method:"get",params:t})}function W(t){return Object(n["a"])({url:"/api/categories",method:"post",data:t})}function X(t,e){return Object(n["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function Y(t){return Object(n["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(n["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(n["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(n["a"])({url:"/api/resources/"+t,method:"post",data:e})}function rt(t){return Object(n["a"])({url:"/api/resources/"+t,method:"delete"})}function nt(t){return Object(n["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(n["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function st(t){return Object(n["a"])({url:"/api/programs",method:"get",params:t})}function ct(t){return Object(n["a"])({url:"/api/programs",method:"post",data:t})}function dt(t,e){return Object(n["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function lt(t){return Object(n["a"])({url:"/api/programs/"+t,method:"delete"})}function ft(t){return Object(n["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function pt(t){return Object(n["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function ht(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(n["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function jt(t){return Object(n["a"])({url:"/api/replays/"+t,method:"delete"})}function Ot(t){return Object(n["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function yt(t,e){return Object(n["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function wt(t){return Object(n["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function vt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function kt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function St(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function _t(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function xt(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function Lt(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function Nt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Ft(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Tt(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function It(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function zt(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Ut(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Rt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Dt(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function Vt(t){return Object(n["a"])({url:"/api/products/".concat(t),method:"get"})}function Kt(t,e){return Object(n["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function Bt(){return Object(n["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Jt(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function At(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Et(t){return Object(n["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function Ht(t){return Object(n["a"])({url:"/api/h5",method:"get",params:t})}function Gt(t){return Object(n["a"])({url:"/api/h5",method:"post",data:t})}function Qt(t,e){return Object(n["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function Wt(t){return Object(n["a"])({url:"/api/h5/".concat(t),method:"delete"})}function Xt(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function Yt(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function Zt(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function te(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function re(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function ne(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ae(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"2ab73":function(t,e,r){"use strict";r("e18c");var n=r("f753"),a=r.n(n),o=r("b705"),i=r("a18c"),u=r("5041"),s=a.a.create({baseURL:u["b"],timeout:6e4});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},"4f32":function(t,e,r){"use strict";r("f821")},"8a19":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"staff-jurisdiction"},[r("el-form",{ref:"queryForm",attrs:{inline:!0}},[r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.adddata(0)}}},[t._v("新增")]),r("el-button",{attrs:{disabled:t.multipleSelection.length<1,type:"danger",size:"mini"},on:{click:t.delarrdata}},[t._v("批量删除")]),r("el-button",{attrs:{disabled:1!=t.multipleSelection.length,type:"warning",size:"mini"},on:{click:t.editdata}},[t._v("修改")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:t.dataList},on:{"selection-change":t.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:"id",align:"center",prop:"id"}}),r("el-table-column",{attrs:{label:"名称",align:"center",prop:"name","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"显示名称",align:"center",prop:"remarks","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"site-id",align:"center",prop:"site_id","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"created_at","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updated_at","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"240px"},scopedSlots:t._u([{key:"default",fn:function(e){return["超级管理员"!=e.row.remarks&&"站长"!=e.row.remarks&&"编辑"!=e.row.remarks?r("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(r){return t.editdata(e.row)}}}):t._e(),r("Iconbutton",{attrs:{icontype:"qx",label:"权限"},on:{fatherMethod:function(r){return t.editjurisdiction(e.row)}}}),"超级管理员"!=e.row.remarks&&"站长"!=e.row.remarks&&"编辑"!=e.row.remarks?r("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(r){return t.handleDelete(e.row)}}}):t._e()]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.page,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"page",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),r("el-dialog",{attrs:{width:"600px",title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"dataForm",attrs:{model:t.form,rules:t.rules}},[r("el-form-item",{attrs:{"label-width":"100px",label:"角色名称",prop:"name"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入角色名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{"label-width":"100px",label:"显示名称",prop:"remarks"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入显示名称"},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1),"add"==t.dialogType?r("el-form-item",{attrs:{"label-width":"100px",label:"site-id",prop:"site_id"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{autocomplete:"off",placeholder:"请输入当前角色的site-id"},model:{value:t.form.site_id,callback:function(e){t.$set(t.form,"site_id",e)},expression:"form.site_id"}})],1):t._e()],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v("确 定")])],1)],1),t.drawer?r("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,size:"40%",title:"角色权限配置"},on:{"update:visible":function(e){t.drawer=e}}},[r("el-tabs",{staticClass:"role-box",attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"角色权限菜单"}},[r("el-tree",{ref:"tree",attrs:{data:t.treedata,"default-checked-keys":t.treechoosedata,"show-checkbox":"","check-strictly":!0,"default-expand-all":"","node-key":"id","highlight-current":"",props:t.defaultProps},on:{"check-change":t.checkChange,check:t.nodeclick}})],1)],1),r("div",{staticClass:"clearflex",staticStyle:{"margin-right":"20px","margin-top":"20px"}},[r("el-button",{staticClass:"fl-right",attrs:{size:"small",type:"info"},on:{click:t.cancelrole}},[t._v("取消")]),r("el-button",{staticClass:"fl-right",staticStyle:{"margin-right":"15px"},attrs:{size:"small",type:"primary"},on:{click:t.surerole}},[t._v("确 定")])],1)],1):t._e()],1)},a=[],o=(r("ea69"),r("9302"),r("2eeb"),r("b4fb"),r("0fea")),i={name:"staff-role",data:function(){return{queryParams:{page:1,pageSize:10},loading:!0,dataList:[],dialogFormVisible:!1,form:{name:"",remarks:"",site_id:""},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入显示名称",trigger:"blur"}]},dialogType:"add",dialogTitle:"",multipleSelection:[],total:0,drawer:!1,treedata:[],treechoosedata:[],defaultProps:{children:"children",label:"remarks"},chooseid:void 0,checkflag:!0}},created:function(){this.getList()},methods:{getList:function(){var t=this,e={model:"Role"};Object(o["vb"])(Object.assign(e,this.queryParams)).then((function(e){t.loading=!1,t.dataList=e.data,t.total=e.total}))},handleSelectionChange:function(t){this.multipleSelection=t},checkChange:function(t,e,r){if(this.checkflag){Array.prototype.remove=function(t){var e=this.indexOf(t);e>-1&&this.splice(e,1)};var n=this.$refs.tree.getNode(t.id),a=this.$refs.tree.getCheckedKeys();if(e)for(var o=n.level;o>1;o--)n.parent.checked||(n=n.parent,a.push(n.data.id));else if(n.childNodes)for(var i=0;i<n.childNodes.length;i++)a.remove(n.childNodes[i].key);this.$refs.tree.setCheckedKeys(a)}},nodeclick:function(t,e){function r(t){if(t.childNodes)for(var e=0;e<t.childNodes.length;e++)n.push(t.childNodes[e].key),t.childNodes[e].childNodes&&r(t.childNodes[e])}var n=this.$refs.tree.getCheckedKeys();if(e.checkedKeys.indexOf(t.id)>-1){var a=this.$refs.tree.getNode(t.id);console.log(a),r(a),this.$refs.tree.setCheckedKeys(n)}},cancelrole:function(){this.drawer=!1},surerole:function(){var t=this,e=this.$refs.tree.getCheckedKeys(),r=e.map((function(t){return t})).join(",");Object(o["t"])(this.chooseid,r).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.getList(),t.drawer=!1):t.$message({message:e.message,type:"warning"})}))},editjurisdiction:function(t){var e=this;this.treechoosedata=[],this.treedata=[],this.drawer=!0,this.chooseid=t.id,Object(o["Ob"])(t.id).then((function(t){e.treedata=t.data;var r=JSON.parse(JSON.stringify(e.treedata)),n=[];function a(t){for(var e=0;e<t.length;e++)n=n.concat(t[e]),t[e].children&&a(t[e].children)}a(r);for(var o=0;o<n.length;o++)n[o].own&&e.treechoosedata.push(n[o].id)}))},initForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields(),this.form={name:"",remarks:"",site_id:""}},adddata:function(){this.initForm(),this.dialogTitle="新增角色",this.dialogType="add",this.dialogFormVisible=!0},editdata:function(t){t=this.multipleSelection[0]||t;this.initForm(),this.form=JSON.parse(JSON.stringify(t)),this.dialogTitle="编辑角色",this.dialogType="edit",this.dialogFormVisible=!0},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除id为"+t.id+"的角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["T"])(t.id).then((function(t){t.status_code>=200&&t.status_code<300?(e.$message({message:t.message,type:"success"}),e.getList()):e.$message({message:t.message,type:"warning"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},delarrdata:function(){var t=this,e=this.multipleSelection.map((function(t){return t.id})).join(",");this.$confirm("此操作将永久删除id为"+e+"的角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["K"])(e).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.getList()):t.$message({message:e.message,type:"warning"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},closeDialog:function(){this.dialogFormVisible=!1},enterDialog:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&("edit"==t.dialogType?Object(o["hb"])(t.form.id,t.form).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})})):Object(o["n"])(t.form).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.dialogFormVisible=!1,t.getList()):t.$message({message:e.message,type:"warning"})})))}))}}},u=i,s=(r("4f32"),r("b18d"),r("cba8")),c=Object(s["a"])(u,n,a,!1,null,"9a748d08",null);e["default"]=c.exports},a94f:function(t,e,r){},b18d:function(t,e,r){"use strict";r("a94f")},b60c:function(t,e,r){"use strict";r("e18c");var n=r("f753"),a=r.n(n),o=r("b705"),i=r("a18c"),u=r("5041"),s=a.a.create({baseURL:u["c"],timeout:5e3});s.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),s.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=s},f821:function(t,e,r){}}]);