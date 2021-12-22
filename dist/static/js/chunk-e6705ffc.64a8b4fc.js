(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6705ffc"],{"0bf1":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{width:"500px","close-on-click-modal":!1,title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("span",[e._v(e._s(e.dialog.title))]),i("span",{staticStyle:{color:"#575757","font-size":"12px","margin-left":"10px"}},[e._v(e._s(e.tip))])]),i("el-form",{ref:"passForm",staticClass:"xl-pass-login",attrs:{size:"small",model:e.form,rules:e.rules,"validate-on-rule-change":!1,"label-width":"100px"}},[i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"}}),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"password"}}),i("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:e.disabledPhone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("el-form-item",{attrs:{label:"验证码",prop:"verification_code"}},[i("el-input",{ref:"verification_code",staticStyle:{width:"160px","margin-right":"8px"},attrs:{autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.form.verification_code,callback:function(t){e.$set(e.form,"verification_code","string"===typeof t?t.trim():t)},expression:"form.verification_code"}}),i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.codeNum))])],1),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{ref:"password",staticStyle:{width:"260px"},attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),i("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{type:"password",placeholder:"请输入确认密码"},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword","string"===typeof t?t.trim():t)},expression:"form.confirmPassword"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)},a=[],r=i("1da1"),s=i("5530"),n=(i("96cf"),i("a9e3"),i("4d63"),i("ac1f"),i("2c3e"),i("25f0"),i("00b4"),i("498a"),i("7ded")),l={props:{phone:{type:[String,Number],required:!0},zone_id:{type:[String,Number],required:!0},site_id:{type:[String,Number],required:!0},tip:{type:String,default:""},disabledPhone:{type:Boolean,default:!0}},data:function(){var e=this,t=new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,16}"),i=function(i,o,a){""===o?a(new Error("请输入密码")):t.test(o)?(""!==e.form.confirmPassword.trim()&&e.$refs.passForm.validateField("confirmPassword"),a()):a(new Error("您的密码不符要求(密码中必须包含大小写字母和数字)"))},o=function(t,i,o){""===i?o(new Error("请再次输入密码")):i!==e.form.password?o(new Error("两次输入密码不一致!")):o()},a=function(e,t,i){t?i():i(new Error("请输入验证码"))};return{dialog:{title:"修改密码",show:!1},rules:{password:[{required:!0,trigger:"blur",validator:i}],confirmPassword:[{required:!0,trigger:"blur",validator:o}],verification_code:[{required:!0,trigger:"blur",validator:a}]},form:{verification_key:"",verification_code:"",password:"",confirmPassword:""},codeNum:"获取验证码",timer:"",codeFlag:!1}},watch:{"dialog.show":function(e){e&&this.resetForm("passForm")}},methods:{getCode:function(){var e=this;this.codeFlag||Object(n["c"])(this.phone).then((function(t){e.form.verification_key=t.key;var i=60;e.codeNum=i+" s",e.codeFlag=!0,e.timer=setInterval((function(){i>1?(i--,e.codeNum=i+" s"):(e.codeNum="再次获取",e.codeFlag=!1,clearInterval(e.timer))}),1e3)}))},enterDialog:function(){var e,t=this;null===(e=this.$refs.passForm)||void 0===e||e.validate((function(e){if(e){var i=Object(s["a"])(Object(s["a"])({},t.form),{},{phone:t.phone,zone_id:t.zone_id,site_id:t.site_id});delete i.confirmPassword,Object(n["a"])(i).then((function(e){t.dialog.show=!1,t.$message.success(e.message),t.logout()}))}}))},logout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){clearInterval(this.timer)}},c=l,d=(i("6e15"),i("2877")),u=Object(d["a"])(c,o,a,!1,null,null,null);t["a"]=u.exports},"1c353":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"xl-user"},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px",size:"small"}},[i("el-form-item",[i("upload-img",{attrs:{"del-btn":!1},on:{input:e.changeAvatar},model:{value:e.info.avatar,callback:function(t){e.$set(e.info,"avatar",t)},expression:"info.avatar"}})],1),i("el-form-item",{attrs:{label:"用户名"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.info.name,callback:function(t){e.$set(e.info,"name",t)},expression:"info.name"}})],1),i("el-form-item",{attrs:{label:"手机号"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:""},model:{value:e.info.phone,callback:function(t){e.$set(e.info,"phone",t)},expression:"info.phone"}})],1),i("el-form-item",{attrs:{label:"当前站点"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{disabled:""},model:{value:e.info.site,callback:function(t){e.$set(e.info,"site",t)},expression:"info.site"}})],1),i("el-form-item",{attrs:{label:"登录密码"}},[i("div",{staticClass:"tip"},[i("p",[e._v("密码由8-16位数字、字母或符号组成,至少包含大小写字母+数字，建议您经常修改密码，以保证帐号更加安全。")]),i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.changePassword}},[e._v("修改密码")])],1)])],1),i("change-pass",{ref:"changePass",attrs:{phone:e.info.phone,zone_id:e.info.zone_id,site_id:e.info.site_id}})],1)},a=[],r=(i("b0c0"),i("0bf1")),s=i("e60d"),n=i("0fea"),l={name:"User",components:{changePass:r["a"],uploadImg:s["a"]},data:function(){return{avatar:i("3f1e"),info:{avatar:"",name:"",phone:"",site:"",zone_id:"",site_id:""}}},methods:{changePassword:function(){var e=this.$refs.changePass;e.dialog.show=!0},changeAvatar:function(e){var t=this,i=this.$store.state.user.u_info.id;Object(n["zb"])(i,{avatar:e}).then((function(e){e.status_code>=200&&e.status_code<300?(t.$message({message:e.message,type:"success"}),t.$store.dispatch("user/getuserinfo")):t.$message({message:e.message,type:"warning"})}))}},watch:{"$store.state.user":{handler:function(e){var t,i,o,a,r,s,n=e;this.info={avatar:n.avatar||"",name:(null===(t=n.u_info)||void 0===t?void 0:t.name)||"",phone:(null===(i=n.u_info)||void 0===i?void 0:i.phone)||"",site:(null===(o=n.u_info)||void 0===o||null===(a=o.site)||void 0===a?void 0:a.name)||"",zone_id:(null===(r=n.u_info)||void 0===r?void 0:r.zone_id)||"",site_id:(null===(s=n.u_info)||void 0===s?void 0:s.site_id)||""}},immediate:!0}}},c=l,d=(i("f646"),i("2877")),u=Object(d["a"])(c,o,a,!1,null,null,null);t["default"]=u.exports},"552a":function(e,t,i){},"6e15":function(e,t,i){"use strict";i("9ea9")},"7ded":function(e,t,i){"use strict";i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return s}));var o=i("b775");function a(e){return Object(o["a"])({url:"/api/verificationCodes?phone="+e,method:"post"})}function r(){return Object(o["a"])({url:"/api/getSiteList",method:"get"})}function s(e){return Object(o["a"])({url:"/api/user/resetPassword",method:"patch",data:e})}},"9ea9":function(e,t,i){},f646:function(e,t,i){"use strict";i("552a")}}]);