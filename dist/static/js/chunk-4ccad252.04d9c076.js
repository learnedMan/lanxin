(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ccad252"],{"0bf1":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{width:"500px","close-on-click-modal":!1,title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("span",[e._v(e._s(e.dialog.title))]),i("span",{staticStyle:{color:"#575757","font-size":"12px","margin-left":"10px"}},[e._v(e._s(e.tip))])]),i("el-form",{ref:"passForm",staticClass:"xl-pass-login",attrs:{size:"small",model:e.form,rules:e.rules,"validate-on-rule-change":!1,"label-width":"100px"}},[i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"}}),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"password"}}),i("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("el-form-item",{attrs:{label:"验证码",prop:"verification_code"}},[i("el-input",{ref:"verification_code",staticStyle:{width:"160px","margin-right":"8px"},attrs:{autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.form.verification_code,callback:function(t){e.$set(e.form,"verification_code","string"===typeof t?t.trim():t)},expression:"form.verification_code"}}),i("el-button",{attrs:{type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.codeNum))])],1),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{ref:"password",staticStyle:{width:"260px"},attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),i("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{type:"password",placeholder:"请输入确认密码"},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword","string"===typeof t?t.trim():t)},expression:"form.confirmPassword"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),i("el-button",{attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)},r=[],s=i("1da1"),n=i("5530"),a=(i("96cf"),i("a9e3"),i("4d63"),i("ac1f"),i("25f0"),i("498a"),i("7ded")),c={props:{phone:{type:[String,Number],required:!0},zone_id:{type:[String,Number],required:!0},site_id:{type:[String,Number],required:!0},tip:{type:String,default:""}},data:function(){var e=this,t=new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,16}"),i=function(i,o,r){""===o?r(new Error("请输入密码")):t.test(o)?(""!==e.form.confirmPassword.trim()&&e.$refs.dialogForm.validateField("confirmPassword"),r()):r(new Error("您的密码不符要求(密码中必须包含大小写字母和数字)"))},o=function(t,i,o){""===i?o(new Error("请再次输入密码")):i!==e.form.password?o(new Error("两次输入密码不一致!")):o()},r=function(e,t,i){t?i():i(new Error("请输入验证码"))};return{dialog:{title:"修改密码",show:!1},rules:{password:[{required:!0,trigger:"blur",validator:i}],confirmPassword:[{required:!0,trigger:"blur",validator:o}],verification_code:[{required:!0,trigger:"blur",validator:r}]},form:{verification_key:"",verification_code:"",password:"",confirmPassword:""},codeNum:"获取验证码",timer:"",codeFlag:!1}},watch:{"dialog.show":function(e){e&&this.resetForm("passForm")}},methods:{getCode:function(){var e=this;this.codeFlag||Object(a["c"])(this.phone).then((function(t){e.form.verification_key=t.key;var i=60;e.codeNum=i+" s",e.codeFlag=!0,e.timer=setInterval((function(){i>1?(i--,e.codeNum=i+" s"):(e.codeNum="再次获取",e.codeFlag=!1,clearInterval(e.timer))}),1e3)}))},enterDialog:function(){var e,t=this;null===(e=this.$refs.passForm)||void 0===e||e.validate((function(e){if(e){var i=Object(n["a"])(Object(n["a"])({},t.form),{},{phone:t.phone,zone_id:t.zone_id,site_id:t.site_id});delete i.confirmPassword,Object(a["a"])(i).then((function(e){t.dialog.show=!1,t.$message.success(e.message),t.logout()}))}}))},logout:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){clearInterval(this.timer)}},l=c,d=(i("6e15"),i("2877")),u=Object(d["a"])(l,o,r,!1,null,null,null);t["a"]=u.exports},"336c":function(e,t,i){"use strict";i("9f6c")},"454a":function(e,t,i){},"6e15":function(e,t,i){"use strict";i("9ea9")},"7ded":function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"a",(function(){return n}));var o=i("b775");function r(e){return Object(o["a"])({url:"/api/verificationCodes?phone="+e,method:"post"})}function s(){return Object(o["a"])({url:"/api/getSiteList",method:"get"})}function n(e){return Object(o["a"])({url:"/api/user/resetPassword",method:"patch",data:e})}},"9ea9":function(e,t,i){},"9ed6":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-container"},[i("div",{staticClass:"loginbox"},[i("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"off","label-position":"left"}},[i("div",{staticClass:"title-container"},[i("div",{staticClass:"title"},[e._v("管理后台登录")])]),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"text"}}),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"password"}}),i("el-select",{staticClass:"pull-down-login",attrs:{filterable:"",placeholder:"请选择站点",size:"mini"},on:{change:e.sites_change},model:{value:e.sitec.site_select,callback:function(t){e.$set(e.sitec,"site_select",t)},expression:"sitec.site_select"}},e._l(e.sitec.site_data,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),i("el-form-item",{staticClass:"username",attrs:{prop:"username"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"user"}})],1),i("el-input",{ref:"username",attrs:{placeholder:"请输入手机号码",maxlength:"11",type:"text",tabindex:"1"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),i("el-form-item",{staticClass:"username",attrs:{prop:"password"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),i("el-input",{ref:"password",attrs:{type:"password",placeholder:"请输入密码",name:"password",tabindex:"2"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}})],1),i("el-form-item",{staticClass:"yzcode",attrs:{prop:"yzcode"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),i("el-input",{ref:"yzcode",attrs:{placeholder:"请输入验证码",maxlength:"8",type:"text",name:"yzcode",tabindex:"3"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.yzcode,callback:function(t){e.$set(e.loginForm,"yzcode",t)},expression:"loginForm.yzcode"}}),i("div",{staticClass:"sendbtn",on:{click:e.getcodeFn}},[e._v(e._s(e.getcodeval))])],1),i("el-button",{staticClass:"loginbtn",staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1),i("change-pass",{ref:"changePass",attrs:{phone:e.loginForm.username,zone_id:e.sitec.site_select_all.zone_id||"",site_id:e.sitec.site_select_all.id||"",tip:"为确保您的账号信息安全，请尽快修改您的登录密码"}})],1)},r=[],s=(i("159b"),i("b64b"),i("61f7")),n=i("7ded"),a=i("0bf1"),c={name:"Login",components:{changePass:a["a"]},data:function(){var e=function(e,t,i){t?Object(s["e"])(t)?i():i(new Error("请输入正确的手机号")):i(new Error("请输入手机号"))},t=function(e,t,i){t?i():i(new Error("请输入验证码"))},i=function(e,t,i){""===t?i(new Error("请输入密码")):i()};return{loginForm:{username:"",password:"",yzcode:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:i}],yzcode:[{required:!0,trigger:"blur",validator:t}]},redirect:void 0,otherQuery:{},sitec:{site_select:"",site_data:[],site_select_all:{}},getcodeval:"获取验证码",getcodeflag:!0,timer:null,verification_key:void 0}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){sessionStorage.removeItem("TempZone"),sessionStorage.removeItem("TempSite")},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.yzcode&&this.$refs.yzcode.focus(),this.getsiteFn()},destroyed:function(){},methods:{getsiteFn:function(){var e=this;Object(n["b"])().then((function(t){e.sitec.site_data=t}))},getcodeFn:function(){var e=this;this.getcodeflag&&(this.loginForm.username?Object(s["e"])(this.loginForm.username)?Object(n["c"])(this.loginForm.username).then((function(t){e.verification_key=t.key,e.getcodeflag=!1;var i=60;e.getcodeval=i+" s",e.timer=setInterval((function(){i>1?(i--,e.getcodeval=i+" s"):(e.getcodeval="再次获取",e.getcodeflag=!0,clearInterval(e.timer))}),1e3)})):this.$message({message:"请输入正确的手机号",type:"error"}):this.$message({message:"请输入手机号",type:"error"}))},sites_change:function(e){var t=this;this.sitec.site_data.forEach((function(i,o,r){e==i.id&&(t.sitec.site_select_all=i)})),this.sitec.site_select=e},handleLogin:function(){var e=this;this.sitec.site_select?this.verification_key?this.loginForm.yzcode?this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;var i=new FormData;i.append("username",e.loginForm.username),i.append("password",e.loginForm.password),i.append("verification_code",e.loginForm.yzcode),i.append("verification_key",e.verification_key),i.append("zone_id",e.sitec.site_select_all.zone_id),i.append("site_id",e.sitec.site_select_all.id),e.$store.dispatch("user/login",i).then((function(t){var i=document.createElement("script");i.type="text/JavaScript",i.src="http://dev-a.cztvcloud.com/admin/login?token="+t.access_token,document.getElementsByTagName("head")[0].appendChild(i),e.$router.push({path:e.redirect||"/",query:e.otherQuery})})).catch((function(t){var i=t.response.data;if(i&&406===i.status_code){var o=e.$refs.changePass;o.dialog.show=!0}Object.assign(e.loginForm,{password:"",yzcode:""})}))})):this.$message({message:"验证码不能为空",type:"error"}):this.$message({message:"请先获取短信验证码",type:"error"}):this.$message({message:"请选择站点",type:"error"})},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,i){return"redirect"!==i&&(t[i]=e[i]),t}),{})}}},l=c,d=(i("b54e"),i("336c"),i("2877")),u=Object(d["a"])(l,o,r,!1,null,"1bf6a949",null);t["default"]=u.exports},"9f6c":function(e,t,i){},b54e:function(e,t,i){"use strict";i("454a")}}]);