(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4573b54"],{"0385":function(t,e,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),u=a.a.create({baseURL:"http://10.30.10.1/api",timeout:5e3});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=u},"0fea":function(t,e,r){"use strict";r.d(e,"mb",(function(){return i})),r.d(e,"j",(function(){return u})),r.d(e,"cb",(function(){return s})),r.d(e,"N",(function(){return c})),r.d(e,"J",(function(){return d})),r.d(e,"vb",(function(){return l})),r.d(e,"n",(function(){return p})),r.d(e,"hb",(function(){return m})),r.d(e,"T",(function(){return f})),r.d(e,"K",(function(){return h})),r.d(e,"Ob",(function(){return b})),r.d(e,"t",(function(){return g})),r.d(e,"Bb",(function(){return O})),r.d(e,"pb",(function(){return j})),r.d(e,"s",(function(){return y})),r.d(e,"kb",(function(){return v})),r.d(e,"A",(function(){return L})),r.d(e,"V",(function(){return w})),r.d(e,"L",(function(){return P})),r.d(e,"Tb",(function(){return _})),r.d(e,"u",(function(){return k})),r.d(e,"Ub",(function(){return I})),r.d(e,"v",(function(){return S})),r.d(e,"Pb",(function(){return T})),r.d(e,"o",(function(){return q})),r.d(e,"ib",(function(){return x})),r.d(e,"Wb",(function(){return C})),r.d(e,"Qb",(function(){return N})),r.d(e,"Kb",(function(){return F})),r.d(e,"l",(function(){return D})),r.d(e,"eb",(function(){return $})),r.d(e,"P",(function(){return M})),r.d(e,"Lb",(function(){return J})),r.d(e,"k",(function(){return R})),r.d(e,"db",(function(){return U})),r.d(e,"O",(function(){return z})),r.d(e,"h",(function(){return V})),r.d(e,"E",(function(){return A})),r.d(e,"bc",(function(){return B})),r.d(e,"Hb",(function(){return E})),r.d(e,"ab",(function(){return Q})),r.d(e,"Mb",(function(){return H})),r.d(e,"ac",(function(){return K})),r.d(e,"Ib",(function(){return X})),r.d(e,"i",(function(){return Y})),r.d(e,"bb",(function(){return G})),r.d(e,"M",(function(){return W})),r.d(e,"Nb",(function(){return Z})),r.d(e,"m",(function(){return tt})),r.d(e,"gb",(function(){return et})),r.d(e,"S",(function(){return rt})),r.d(e,"Jb",(function(){return nt})),r.d(e,"Rb",(function(){return at})),r.d(e,"p",(function(){return ot})),r.d(e,"U",(function(){return it})),r.d(e,"jb",(function(){return ut})),r.d(e,"Sb",(function(){return st})),r.d(e,"q",(function(){return ct})),r.d(e,"fb",(function(){return dt})),r.d(e,"Q",(function(){return lt})),r.d(e,"Vb",(function(){return pt})),r.d(e,"r",(function(){return mt})),r.d(e,"qb",(function(){return ft})),r.d(e,"W",(function(){return ht})),r.d(e,"D",(function(){return bt})),r.d(e,"ub",(function(){return gt})),r.d(e,"R",(function(){return Ot})),r.d(e,"Gb",(function(){return jt})),r.d(e,"Fb",(function(){return yt})),r.d(e,"g",(function(){return vt})),r.d(e,"x",(function(){return Lt})),r.d(e,"cc",(function(){return wt})),r.d(e,"Db",(function(){return Pt})),r.d(e,"Cb",(function(){return _t})),r.d(e,"X",(function(){return kt})),r.d(e,"sb",(function(){return It})),r.d(e,"yb",(function(){return St})),r.d(e,"xb",(function(){return Tt})),r.d(e,"e",(function(){return qt})),r.d(e,"z",(function(){return xt})),r.d(e,"I",(function(){return Ct})),r.d(e,"ob",(function(){return Nt})),r.d(e,"w",(function(){return Ft})),r.d(e,"wb",(function(){return Dt})),r.d(e,"d",(function(){return $t})),r.d(e,"Z",(function(){return Mt})),r.d(e,"H",(function(){return Jt})),r.d(e,"Ab",(function(){return Rt})),r.d(e,"lb",(function(){return Ut})),r.d(e,"nb",(function(){return zt})),r.d(e,"y",(function(){return Vt})),r.d(e,"zb",(function(){return At})),r.d(e,"a",(function(){return Bt})),r.d(e,"Zb",(function(){return Et})),r.d(e,"F",(function(){return Qt})),r.d(e,"rb",(function(){return Ht})),r.d(e,"b",(function(){return Kt})),r.d(e,"Yb",(function(){return Xt})),r.d(e,"G",(function(){return Yt})),r.d(e,"Eb",(function(){return Gt})),r.d(e,"f",(function(){return Wt})),r.d(e,"C",(function(){return Zt})),r.d(e,"tb",(function(){return te})),r.d(e,"B",(function(){return ee})),r.d(e,"Xb",(function(){return re})),r.d(e,"c",(function(){return ne})),r.d(e,"Y",(function(){return ae}));r("99af");var n=r("b775"),a=r("b60c"),o=r("0385");r("2ab73");function i(){return Object(n["a"])({url:"/api/permissions/getAllPermissions",method:"get"})}function u(t){return Object(n["a"])({url:"/api/permissions",method:"post",params:t})}function s(t,e){return Object(n["a"])({url:"/api/permissions/"+t,method:"patch",params:e})}function c(t){return Object(n["a"])({url:"/api/permissions/"+t,method:"delete"})}function d(t){return Object(n["a"])({url:"/api/permissions/deletePermissions",method:"post",params:{ids:t}})}function l(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/api/roles",method:"post",params:t})}function m(t,e){return Object(n["a"])({url:"/api/roles/"+t,method:"patch",params:e})}function f(t){return Object(n["a"])({url:"/api/roles/"+t,method:"delete"})}function h(t){return Object(n["a"])({url:"/api/roles/deleteRoles",method:"post",params:{ids:t}})}function b(t){return Object(n["a"])({url:"/api/roles/"+t+"/permission",method:"get"})}function g(t,e){return Object(n["a"])({url:"/api/roles/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function O(t){return Object(n["a"])({url:"/api/system/data",method:"get",params:t})}function j(t){return Object(n["a"])({url:"/api/channels",method:"get",params:t})}function y(t){return Object(n["a"])({url:"/api/users",method:"post",data:t})}function v(t,e){return Object(n["a"])({url:"/api/user/"+t,method:"patch",data:e})}function L(t,e){return Object(n["a"])({url:"/api/users/setStatus",method:"post",params:{ids:t,status:e}})}function w(t){return Object(n["a"])({url:"/api/user/"+t,method:"delete"})}function P(t){return Object(n["a"])({url:"/api/user/deleteUsers",method:"post",params:{ids:t}})}function _(t){return Object(n["a"])({url:"/api/user/"+t+"/permission",method:"get"})}function k(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignPermission",method:"post",params:{permissions:e}})}function I(t){return Object(n["a"])({url:"/api/user/"+t+"/roles",method:"get"})}function S(t,e){return Object(n["a"])({url:"/api/user/"+t+"/assignRole",method:"post",params:{roles:e}})}function T(t){return Object(n["a"])({url:"/api/sites",method:"get",params:t})}function q(t){return Object(n["a"])({url:"/api/sites",method:"post",data:t})}function x(t,e){return Object(n["a"])({url:"/api/sites/"+t,method:"patch",data:e})}function C(){return Object(n["a"])({url:"/api/zones",method:"get"})}function N(t){return Object(n["a"])({url:"/api/sites/"+t,method:"get"})}function F(t){return Object(n["a"])({url:"/api/products",method:"get",params:t})}function D(t){return Object(n["a"])({url:"/api/products",method:"post",data:t})}function $(t,e){return Object(n["a"])({url:"/api/products/"+t,method:"patch",data:e})}function M(t){return Object(n["a"])({url:"/api/products/"+t,method:"delete"})}function J(t){return Object(n["a"])({url:"/api/product_versions",method:"get",params:t})}function R(t){return Object(n["a"])({url:"/api/product_versions",method:"post",data:t})}function U(t,e){return Object(n["a"])({url:"/api/product_versions/"+t,method:"patch",data:e})}function z(t){return Object(n["a"])({url:"/api/product_versions/"+t,method:"delete"})}function V(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function B(t){return Object(n["a"])({url:"/api/channels/setSort",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/api/channels/"+t,method:"get"})}function Q(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function H(t){return Object(n["a"])({url:"/api/news/recycleBin",method:"get",params:t})}function K(t){return Object(n["a"])({url:"/api/news/restore",method:"post",params:{ids:t}})}function X(t){return Object(n["a"])({url:"/api/categories",method:"get",params:t})}function Y(t){return Object(n["a"])({url:"/api/categories",method:"post",data:t})}function G(t,e){return Object(n["a"])({url:"/api/categories/"+t,method:"patch",data:e})}function W(t){return Object(n["a"])({url:"/api/categories/"+t,method:"delete"})}function Z(t){return Object(n["a"])({url:"/api/resources",method:"get",params:t})}function tt(t){return Object(n["a"])({url:"/api/resources",method:"post",data:t})}function et(t,e){return Object(n["a"])({url:"/api/resources/"+t,method:"post",data:e})}function rt(t){return Object(n["a"])({url:"/api/resources/"+t,method:"delete"})}function nt(t){return Object(n["a"])({url:"/api/resources/myResources",method:"get",params:t})}function at(t){return Object(n["a"])({url:"/api/channels/getSpecialChannels",method:"get",params:t})}function ot(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function it(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function ut(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function st(t){return Object(n["a"])({url:"/api/programs",method:"get",params:t})}function ct(t){return Object(n["a"])({url:"/api/programs",method:"post",data:t})}function dt(t,e){return Object(n["a"])({url:"/api/programs/"+t,method:"patch",data:e})}function lt(t){return Object(n["a"])({url:"/api/programs/"+t,method:"delete"})}function pt(t){return Object(n["a"])({url:"/api/videos/vms_channels/?cloud=".concat(t),method:"get"})}function mt(t){return Object(n["a"])({url:"/api/channels",method:"post",data:t})}function ft(t){return Object(n["a"])({url:"/api/channels/".concat(t,"/getChild"),method:"get"})}function ht(t,e){return Object(n["a"])({url:"/api/channels/"+t,method:"patch",data:e})}function bt(t){return Object(n["a"])({url:"/api/channels/"+t,method:"delete"})}function gt(t){return Object(n["a"])({url:"/api/replays/getReplaysByChannel",method:"get",params:t})}function Ot(t){return Object(n["a"])({url:"/api/replays/"+t,method:"delete"})}function jt(t){return Object(n["a"])({url:"/api/broadcasts/".concat(t),method:"get"})}function yt(t,e){return Object(n["a"])({url:"/api/broadcastStatement?broadcast_id=".concat(t,"&stream_id=").concat(e),method:"get"})}function vt(t){return Object(n["a"])({url:"/api/broadcastStatement",method:"post",data:t})}function Lt(){return Object(a["a"])({url:"/catalog/list",method:"get"})}function wt(t){return Object(a["a"])({url:"/style/catalogCodeStyle",method:"post",data:t})}function Pt(t){return Object(a["a"])({url:"/internal/uc/queryUserList",method:"post",data:t})}function _t(t){return Object(a["a"])({url:"/internal/uc/queryUserInfo",method:"get",params:t})}function kt(t){return Object(a["a"])({url:"/internal/uc/updateUserInfo",method:"post",data:t})}function It(t){return Object(a["a"])({url:"/internal/uc/queryInvitationcodeList",method:"post",data:t})}function St(t){return Object(a["a"])({url:"/internal/uc/qeurySrcretList",method:"post",data:t})}function Tt(t){return Object(a["a"])({url:"/internal/uc/querySrcretSet",method:"post",data:t})}function qt(t){return Object(a["a"])({url:"/internal/uc/addSrcretSet",method:"post",data:t})}function xt(t){return Object(a["a"])({url:"/internal/uc/updateSrcretSet",method:"post",data:t})}function Ct(t){return Object(a["a"])({url:"/internal/uc/deleteSrcretSet",method:"post",data:t})}function Nt(t){return Object(o["a"])({url:"/new/intranet/comment/getNoTalkUserList/page",method:"post",data:t})}function Ft(t){return Object(o["a"])({url:"/new/intranet/comment/cancelNoTalkUser",method:"post",data:t})}function Dt(t){return Object(a["a"])({url:"/internal/points/getRuleList",method:"post",data:t})}function $t(t){return Object(a["a"])({url:"/internal/points/ruleSave",method:"post",data:t})}function Mt(t){return Object(a["a"])({url:"/internal/points/ruleUpdate",method:"post",data:t})}function Jt(t){return Object(a["a"])({url:"/internal/points/ruleDelete",method:"post",data:t})}function Rt(){return Object(a["a"])({url:"/internal/points/rule/typelist",method:"get"})}function Ut(){return Object(a["a"])({url:"/internal/points/rule/actionlist",method:"get"})}function zt(t){return Object(n["a"])({url:"/api/products/".concat(t),method:"get"})}function Vt(t,e){return Object(n["a"])({url:"/api/products/".concat(t),method:"patch",data:e})}function At(){return Object(n["a"])({url:"/api/upload/getH5Dir",method:"get"})}function Bt(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Et(t){return Object(n["a"])({url:"/api/upload/mkdir",method:"post",data:t})}function Qt(t){return Object(n["a"])({url:"/api/upload/rmdir",method:"post",data:t})}function Ht(t){return Object(n["a"])({url:"/api/h5",method:"get",params:t})}function Kt(t){return Object(n["a"])({url:"/api/h5",method:"post",data:t})}function Xt(t,e){return Object(n["a"])({url:"/api/h5/".concat(t),method:"post",data:e})}function Yt(t){return Object(n["a"])({url:"/api/h5/".concat(t),method:"delete"})}function Gt(t){return Object(o["a"])({url:"/sensitive/whitetxt/list",method:"get",params:t})}function Wt(t){return Object(o["a"])({url:"/sensitive/whitetxt/add",method:"post",data:t})}function Zt(t){return Object(o["a"])({url:"/sensitive/whitetxt/del",method:"DELETE",data:t})}function te(t){return Object(a["a"])({url:"/publish/list",method:"post",data:t})}function ee(t){return Object(a["a"])({url:"/publish/delete?id=".concat(t),method:"post"})}function re(t){return Object(a["a"])({url:"/meal/openList",method:"post",data:t})}function ne(t){return Object(a["a"])({url:"/publish/setPublish",method:"post",data:t})}function ae(t){return Object(a["a"])({url:"/publish/update",method:"post",data:t})}},"1a63":function(t,e,r){"use strict";r("936f")},"2ab73":function(t,e,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),u=a.a.create({baseURL:"http://10.30.10.125",timeout:6e4});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)}))},4181:function(t,e,r){"use strict";r("5e3d")},"5e3d":function(t,e,r){},"873b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mbhmealmange"},[r("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0}},[r("el-form-item",{attrs:{label:"所属产品："}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changesource_id},model:{value:t.queryParams.sourceId,callback:function(e){t.$set(t.queryParams,"sourceId",e)},expression:"queryParams.sourceId"}},t._l(t.productList,(function(t){return r("el-option",{key:t.source_id,attrs:{label:t.name,value:t.source_id||0}})})),1)],1),r("el-form-item",{attrs:{label:"套餐名："}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键字",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.mealName,callback:function(e){t.$set(t.queryParams,"mealName",e)},expression:"queryParams.mealName"}})],1),r("el-form-item",{attrs:{label:"终端："}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.queryParams.appType,callback:function(e){t.$set(t.queryParams,"appType",e)},expression:"queryParams.appType"}},t._l(t.appTypeList,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{label:"更新时间："}},[r("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.changedate},model:{value:t.datevalue,callback:function(e){t.datevalue=e},expression:"datevalue"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.initcondition}},[t._v("重置")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.adddata}},[t._v("新增")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"header-cell-style":{background:"#eef1f6",color:"#606266"},border:"",data:t.dataList}},[r("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),r("el-table-column",{attrs:{align:"center",label:"JSON",prop:"path",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[e.row.publishJson?r("el-popover",{attrs:{placement:"right-start",trigger:"hover"}},[r("div",{staticClass:"popover-box"},[r("pre",[t._v(t._s(t.fmtBody(e.row.publishJson)))])]),r("i",{staticClass:"el-icon-view",attrs:{slot:"reference"},slot:"reference"})]):r("span",[t._v("无")])],1)]}}])}),r("el-table-column",{attrs:{label:"套餐ID",align:"center",prop:"mealId"}}),r("el-table-column",{attrs:{label:"套餐名",align:"center",prop:"mealName","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"终端",align:"center",prop:"appType","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"版本",align:"center",prop:"version","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"createdAt","show-overflow-tooltip":!0}}),r("el-table-column",{attrs:{width:"160px",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("Iconbutton",{attrs:{icontype:"xg",label:"修改"},on:{fatherMethod:function(r){return t.editdata(e.row)}}}),r("Iconbutton",{attrs:{icontype:"sc",label:"删除"},on:{fatherMethod:function(r){return t.handleDelete(e.row)}}})]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],attrs:{total:t.totalCount,page:t.queryParams.pageIndex,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageIndex",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),r("el-dialog",{attrs:{width:"550px","close-on-click-modal":!1,title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[r("el-form",{ref:"dataForm",attrs:{model:t.form,rules:t.rules}},[r("el-form-item",{attrs:{"label-width":"120px",label:"套餐:",prop:"mealId"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.mealId,callback:function(e){t.$set(t.form,"mealId",e)},expression:"form.mealId"}},t._l(t.mealList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.mealName,value:t.id}})})),1)],1),r("el-form-item",{attrs:{"label-width":"120px",label:"终端:",prop:"appType"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:t.appTypechange},model:{value:t.form.appType,callback:function(e){t.$set(t.form,"appType",e)},expression:"form.appType"}},t._l(t.f_appTypeList,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",{attrs:{"label-width":"120px",label:"版本:",prop:"version"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},t._l(t.versionList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.platform+"："+t.version_code,value:t.version_code}})})),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.closeDialog}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.enterDialog}},[t._v("确 定")])],1)],1)],1)},a=[],o=(r("4de4"),r("0fea")),i={name:"mbhmealmange",data:function(){return{datevalue:"",product_id:"",queryParams:{pageIndex:1,pageSize:10,sourceId:0,mealName:"",appType:""},loading:!0,dataList:[],totalCount:0,dialogFormVisible:!1,form:{},rules:{appType:[{required:!0,message:"请选择终端",trigger:"blur"}],version:[{required:!0,message:"请选择版本",trigger:"blur"}]},dialogType:"add",dialogTitle:"",mealList:[],productList:[],versionList:[],_versionList:[],appTypeList:[{value:"",label:"全部"},{value:"ANDROID",label:"ANDROID"},{value:"IOS",label:"IOS"}]}},created:function(){this.getproductList()},computed:{f_appTypeList:function(){return this.appTypeList.filter((function(t){return""!=t.value}))}},methods:{fmtBody:function(t){try{return JSON.parse(t)}catch(e){return t}},appTypechange:function(){var t=this;this.form.version="",this.versionList=JSON.parse(JSON.stringify(this._versionList)),this.versionList=this.versionList.filter((function(e){return e.platform.toLowerCase()==t.form.appType.toLowerCase()}))},getmealList:function(){var t=this,e={sourceId:this.queryParams.sourceId};Object(o["Xb"])(e).then((function(e){t.mealList=e.data}))},getproductList:function(){var t=this;Object(o["Kb"])({}).then((function(e){t.productList=e.data,t.product_id=t.productList[0].id,t.queryParams.sourceId=t.productList[0].source_id,t.getversionsList(),t.getmealList(),t.initForm(),t.getList()}))},getversionsList:function(){var t=this,e={page:1,pageSize:999,product_id:this.product_id};Object(o["Lb"])(e).then((function(e){t._versionList=JSON.parse(JSON.stringify(e.data)),t.versionList=e.data}))},changesource_id:function(t){for(var e=0;e<this.productList.length;e++)this.productList[e].source_id==t&&(this.product_id=this.productList[e].id);this.getmealList(),this.getversionsList(),this.handleQuery(),this.initForm()},initcondition:function(){this.queryParams.mealName="",this.queryParams.appType="",this.queryParams.beginTime="",this.queryParams.endTime="",this.datevalue=""},changedate:function(){try{this.queryParams.beginTime=this.datevalue[0],this.queryParams.endTime=this.datevalue[1]}catch(t){this.queryParams.beginTime="",this.queryParams.endTime=""}},handleQuery:function(){this.loading=!0,this.queryParams.pageIndex=1,this.getList()},getList:function(){var t=this;this.loading=!0,Object(o["tb"])(this.queryParams).then((function(e){t.loading=!1,t.dataList=e.data.list,t.totalCount=e.data.totalCount}))},adddata:function(){this.initForm(),this.dialogTitle="新增发布",this.dialogType="add",this.dialogFormVisible=!0},initForm:function(){this.form={mealId:"",sourceId:this.queryParams.sourceId,version:"",appType:""},this.$refs.dataForm&&this.$refs.dataForm.resetFields()},editdata:function(t){var e=this;this.initForm(),this.dialogTitle="编辑发布",this.dialogType="edit",this.$nextTick((function(){e.form=JSON.parse(JSON.stringify(t)),e.versionList=JSON.parse(JSON.stringify(e._versionList)),e.versionList=e.versionList.filter((function(t){return t.platform.toLowerCase()==e.form.appType.toLowerCase()}))})),this.dialogFormVisible=!0},closeDialog:function(){this.initForm(),this.dialogFormVisible=!1},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除套餐ID为"+t.mealId+"的模板化套餐, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["B"])(t.id).then((function(t){e.$message({message:"删除成功",type:"success"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},enterDialog:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&("edit"==t.dialogType?Object(o["Y"])(t.form).then((function(e){t.$message({message:"修改成功",type:"success"}),t.dialogFormVisible=!1,t.getList()})):Object(o["c"])(t.form).then((function(e){t.$message({message:"新建成功",type:"success"}),t.dialogFormVisible=!1,t.getList()})))}))}}},u=i,s=(r("4181"),r("1a63"),r("2877")),c=Object(s["a"])(u,n,a,!1,null,"46a5828c",null);e["default"]=c.exports},"936f":function(t,e,r){},b60c:function(t,e,r){"use strict";r("d3b7");var n=r("bc3a"),a=r.n(n),o=r("5c96"),i=r("a18c"),u=a.a.create({baseURL:"http://10.30.10.1/adm/fusion",timeout:5e3});u.interceptors.request.use((function(t){return t.headers.Authorization=sessionStorage.getItem("token"),t}),(function(t){return Object(o["Message"])({showClose:!0,message:t,duration:5e3,type:"error.data.error.message"}),Promise.reject(t.data.error.message)})),u.interceptors.response.use((function(t){return 200==t.data.code||"true"===t.headers.success?t.data:(Object(o["Message"])({showClose:!0,message:t.data.msg||decodeURI(t.headers.msg),type:"error"}),t.data.data&&t.data.data.reload&&(sessionStorage.removeItem("token"),i["c"].push("/login")),Promise.reject(t.data.msg))}),(function(t){return Object(o["Message"])({showClose:!0,message:t,type:"error"}),Promise.reject(t)})),e["a"]=u}}]);