(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47c06814"],{"0bf1":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{width:"500px","close-on-click-modal":!1,title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("span",[e._v(e._s(e.dialog.title))]),o("span",{staticStyle:{color:"#575757","font-size":"12px","margin-left":"10px"}},[e._v(e._s(e.tip))])]),o("el-form",{ref:"passForm",staticClass:"xl-pass-login",attrs:{size:"small",model:e.form,rules:e.rules,"validate-on-rule-change":!1,"label-width":"100px"}},[o("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"}}),o("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"password"}}),o("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),o("el-form-item",{attrs:{label:"验证码",prop:"verification_code"}},[o("el-input",{ref:"verification_code",staticStyle:{width:"160px","margin-right":"8px"},attrs:{autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.form.verification_code,callback:function(t){e.$set(e.form,"verification_code","string"===typeof t?t.trim():t)},expression:"form.verification_code"}}),o("el-button",{attrs:{type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.codeNum))])],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{ref:"password",staticStyle:{width:"260px"},attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),o("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{type:"password",placeholder:"请输入确认密码"},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword","string"===typeof t?t.trim():t)},expression:"form.confirmPassword"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),o("el-button",{attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)},r=[],a=o("1da1"),n=o("5530"),s=(o("96cf"),o("a9e3"),o("4d63"),o("ac1f"),o("25f0"),o("498a"),o("7ded")),l={props:{phone:{type:[String,Number],required:!0},zone_id:{type:[String,Number],required:!0},site_id:{type:[String,Number],required:!0},tip:{type:String,default:""}},data:function(){var e=this,t=new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,16}"),o=function(o,i,r){""===i?r(new Error("请输入密码")):t.test(i)?(""!==e.form.confirmPassword.trim()&&e.$refs.dialogForm.validateField("confirmPassword"),r()):r(new Error("您的密码不符要求(密码中必须包含大小写字母和数字)"))},i=function(t,o,i){""===o?i(new Error("请再次输入密码")):o!==e.form.password?i(new Error("两次输入密码不一致!")):i()},r=function(e,t,o){t?o():o(new Error("请输入验证码"))};return{dialog:{title:"修改密码",show:!1},rules:{password:[{required:!0,trigger:"blur",validator:o}],confirmPassword:[{required:!0,trigger:"blur",validator:i}],verification_code:[{required:!0,trigger:"blur",validator:r}]},form:{verification_key:"",verification_code:"",password:"",confirmPassword:""},codeNum:"获取验证码",timer:"",codeFlag:!1}},watch:{"dialog.show":function(e){e&&this.resetForm("passForm")}},methods:{getCode:function(){var e=this;this.codeFlag||Object(s["c"])(this.phone).then((function(t){e.form.verification_key=t.key;var o=60;e.codeNum=o+" s",e.codeFlag=!0,e.timer=setInterval((function(){o>1?(o--,e.codeNum=o+" s"):(e.codeNum="再次获取",e.codeFlag=!1,clearInterval(e.timer))}),1e3)}))},enterDialog:function(){var e,t=this;null===(e=this.$refs.passForm)||void 0===e||e.validate((function(e){if(e){var o=Object(n["a"])(Object(n["a"])({},t.form),{},{phone:t.phone,zone_id:t.zone_id,site_id:t.site_id});delete o.confirmPassword,Object(s["a"])(o).then((function(e){t.dialog.show=!1,t.$message.success(e.message),t.logout()}))}}))},logout:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){clearInterval(this.timer)}},c=l,d=(o("6e15"),o("2877")),u=Object(d["a"])(c,i,r,!1,null,null,null);t["a"]=u.exports},"0d28":function(e,t,o){},"1c35":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"xl-user"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px",size:"small"}},[o("el-form-item",[o("el-image",{staticStyle:{width:"100px",height:"100px","border-radius":"50%",margin:"0 0 30px 60px"},attrs:{src:e.info.avatar,fit:"cover"}},[o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"error",src:e.avatar,alt:""},slot:"error"})])],1),o("el-form-item",{attrs:{label:"用户名"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.info.name,callback:function(t){e.$set(e.info,"name",t)},expression:"info.name"}})],1),o("el-form-item",{attrs:{label:"手机号"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.info.phone,callback:function(t){e.$set(e.info,"phone",t)},expression:"info.phone"}})],1),o("el-form-item",{attrs:{label:"当前站点"}},[o("el-input",{staticStyle:{width:"260px"},attrs:{disabled:""},model:{value:e.info.site,callback:function(t){e.$set(e.info,"site",t)},expression:"info.site"}})],1),o("el-form-item",{attrs:{label:"登录密码"}},[o("div",{staticClass:"tip"},[o("p",[e._v("密码由8-16位数字、字母或符号组成,至少包含大小写字母+数字，建议您经常修改密码，以保证帐号更加安全。")]),o("el-button",{attrs:{type:"primary"},on:{click:e.changePassword}},[e._v("修改密码")])],1)])],1),o("change-pass",{ref:"changePass",attrs:{phone:e.info.phone,zone_id:e.info.zone_id,site_id:e.info.site_id}})],1)},r=[],a=(o("b0c0"),o("0bf1")),n={name:"User",components:{changePass:a["a"]},data:function(){return{avatar:""}},methods:{changePassword:function(){var e=this.$refs.changePass;e.dialog.show=!0}},computed:{info:function(){var e,t,o,i,r,a,n=this.$store.state.user;return{avatar:n.avatar||"",name:(null===(e=n.u_info)||void 0===e?void 0:e.name)||"",phone:(null===(t=n.u_info)||void 0===t?void 0:t.phone)||"",site:(null===(o=n.u_info)||void 0===o||null===(i=o.site)||void 0===i?void 0:i.name)||"",zone_id:(null===(r=n.u_info)||void 0===r?void 0:r.zone_id)||"",site_id:(null===(a=n.u_info)||void 0===a?void 0:a.site_id)||""}}}},s=n,l=(o("ce17"),o("2877")),c=Object(l["a"])(s,i,r,!1,null,"33210456",null);t["default"]=c.exports},"6e15":function(e,t,o){"use strict";o("9ea9")},"7ded":function(e,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return n}));var i=o("b775");function r(e){return Object(i["a"])({url:"/api/verificationCodes?phone="+e,method:"post"})}function a(){return Object(i["a"])({url:"/api/getSiteList",method:"get"})}function n(e){return Object(i["a"])({url:"/api/user/resetPassword",method:"patch",data:e})}},"9ea9":function(e,t,o){},ce17:function(e,t,o){"use strict";o("0d28")}}]);