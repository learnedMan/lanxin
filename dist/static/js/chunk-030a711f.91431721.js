(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-030a711f"],{"0bf1":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{width:"500px","close-on-click-modal":!1,title:e.dialog.title,visible:e.dialog.show},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("span",[e._v(e._s(e.dialog.title))]),i("span",{staticStyle:{color:"#575757","font-size":"12px","margin-left":"10px"}},[e._v(e._s(e.tip))])]),i("el-form",{ref:"passForm",staticClass:"xl-pass-login",attrs:{size:"small",model:e.form,rules:e.rules,"validate-on-rule-change":!1,"label-width":"100px"}},[i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"}}),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"password"}}),i("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{autocomplete:"off",disabled:e.disabledPhone},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("el-form-item",{attrs:{label:"验证码",prop:"verification_code"}},[i("el-input",{ref:"verification_code",staticStyle:{width:"160px","margin-right":"8px"},attrs:{autocomplete:"off",placeholder:"请输入验证码"},model:{value:e.form.verification_code,callback:function(t){e.$set(e.form,"verification_code","string"===typeof t?t.trim():t)},expression:"form.verification_code"}}),i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.getCode}},[e._v(e._s(e.codeNum))])],1),i("el-form-item",{attrs:{label:"密码",prop:"password"}},[i("el-input",{ref:"password",staticStyle:{width:"260px"},attrs:{placeholder:"请输入密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),i("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[i("el-input",{staticStyle:{width:"260px"},attrs:{type:"password",placeholder:"请输入确认密码"},model:{value:e.form.confirmPassword,callback:function(t){e.$set(e.form,"confirmPassword","string"===typeof t?t.trim():t)},expression:"form.confirmPassword"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],on:{click:function(t){e.dialog.show=!1}}},[e._v(" 取 消 ")]),i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],attrs:{type:"primary"},on:{click:e.enterDialog}},[e._v(" 确 定 ")])],1)],1)},s=[],r=i("e9ff"),n=i("06c4"),a=(i("e186"),i("513c"),i("84c2"),i("e35a"),i("1c2e"),i("6db4"),i("7ded")),l={props:{phone:{type:[String,Number],required:!0},zone_id:{type:[String,Number],required:!0},site_id:{type:[String,Number],required:!0},tip:{type:String,default:""},disabledPhone:{type:Boolean,default:!0}},data:function(){var e=this,t=new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,16}"),i=function(i,o,s){""===o?s(new Error("请输入密码")):t.test(o)?(""!==e.form.confirmPassword.trim()&&e.$refs.passForm.validateField("confirmPassword"),s()):s(new Error("您的密码不符要求(密码中必须包含大小写字母和数字)"))},o=function(t,i,o){""===i?o(new Error("请再次输入密码")):i!==e.form.password?o(new Error("两次输入密码不一致!")):o()},s=function(e,t,i){t?i():i(new Error("请输入验证码"))};return{dialog:{title:"修改密码",show:!1},rules:{password:[{required:!0,trigger:"blur",validator:i}],confirmPassword:[{required:!0,trigger:"blur",validator:o}],verification_code:[{required:!0,trigger:"blur",validator:s}]},form:{verification_key:"",verification_code:"",password:"",confirmPassword:""},codeNum:"获取验证码",timer:"",codeFlag:!1}},watch:{"dialog.show":function(e){e&&this.resetForm("passForm")}},methods:{getCode:function(){var e=this;this.codeFlag||Object(a["c"])(this.phone).then((function(t){e.form.verification_key=t.key;var i=60;e.codeNum=i+" s",e.codeFlag=!0,e.timer=setInterval((function(){i>1?(i--,e.codeNum=i+" s"):(e.codeNum="再次获取",e.codeFlag=!1,clearInterval(e.timer))}),1e3)}))},enterDialog:function(){var e,t=this;null===(e=this.$refs.passForm)||void 0===e||e.validate((function(e){if(e){var i=Object(n["a"])(Object(n["a"])({},t.form),{},{phone:t.phone,zone_id:t.zone_id,site_id:t.site_id});delete i.confirmPassword,Object(a["a"])(i).then((function(e){t.dialog.show=!1,t.$message.success(e.message),t.logout()}))}}))},logout:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login");case 3:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){clearInterval(this.timer)}},c=l,d=(i("6e15"),i("cba8")),u=Object(d["a"])(c,o,s,!1,null,null,null);t["a"]=u.exports},"1cd7":function(e,t,i){},"215c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAxdJREFUWAntl01IVFEUx2cSiTJKJZEWUpGUZiWVSEhaQiuhXAktqo0LiQgEad0usk1QGYFtitpXizZJ6KpaZFibSiSEoC/7wIi+m35/vUfuOPfN05oi4h34ec4753/Ovd73fDOmUoklJ5CcQHICyQn80yeQ/p3dZTKZFfTvgx2wCZaDbALuwxBcSqfTz/B/z9hYG1yDbxBn0kjb9sd3yCK1cAN+1dRbW/CNMrQYeuEr+DbJxXlohw1Q4qjD74Fz8BZ804zjUFyQjTKoCm6Bb6+4OAiL4xZBsxD2wzj4pplVcf156wxohQl/KvFZKMvbGCjSswiOwhcw0+zWgDw+RWMHfLZJeN2q9lAn+Wa4Di8dipsjtI3UnoDZJ4KOkDYyR0MXfLcJ+EewJtRAvgd8LZdTplxPRE8ZtYFp2Yy2K6TNySHvhB9e8x1ie79l6ck3gP3hvCPucyiWqbY1q8ldkNcf3kUw05qdIe1MDoFuq38aQ1yXzAhmBdT6QfYB1llZscvhMv2WD3nqJyVyprXDt5uCng09D2Y6uSWhoZajPuzEVy1nnrxezrJhy0V5NKenlNM/tIdG0y6wAD8O/kfSaq5XevVQ+N4lSwPFZS5nmoAklWIzSyk0eEXtQXvJNcQ1oHec2XOCulzldIbaCRPiD5hOsZfvtfxsj6YcbntarV0zW5d1jaAeXntNb4i3Z4ncBfkK0KvFbJRAmKlWEdG7itpDE+K1Zn1Im5NDuAVegNlHgr05QhLkW+CpCT2vXEtETxM13R0zrbU5pI3M0VANYzbB+VP4nM9QcqXQDZcdikPPpX4hvTf1+jHTGtWRG8lXoLESBm2S8yP4pnx9oRo9+gJx080wp9mVIf2ccwwogmOgF6mZ4gsQe1vQrIcz4J+a+jWzKG4j6TiB1Rm2i7gP1lrO+bv4KzAKY5ABfSzqtu2GbeDbYy4O8S17wE8WJGaT+ng6ApMwX1OPenOe4YJszh/CIuVwGO5BnEkj7by/omnNOd9if4N+zMJ6d+2EjWBfKvRP0wMY5FaO4BNLTiA5geQEkhP4X0/gJysL0LAXJ9/VAAAAAElFTkSuQmCC"},"336c":function(e,t,i){"use strict";i("bf34")},"3de2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAApdJREFUWAntlk1IVUEUx981PwgJEbJMq5XQB7jog6LEhYtAIQjcSK4MIhJctZDcCBHtWgZBKxduKmjlqq0FrRQkCkWQRMgkspTITH39Ds6M5925970nvlcL58CPOXPOf865d+6d+14mEyzsQNiBsANhB8IO7I8dyGazvTACZ//XHdO7Dz7D05xrIHAYfoPYd7icI/gHE3oOSHNjW4z1ri2TKvhhkjKIf8UJyuzQq1+aKpvyWpLshg0lWsFv84QlDtBDLk52zNoXnJbENiRuW5UZ1xiHoTpxwR6C1GyEl6BtlcnFvGUR3IJ1vQr/A7TnXbiLJLWkxzfQJofjQlFlEHbAsl6NL49hFPLfYUoH1lXADRiHuH0kcDJlqR9GfA70oYkXnCTwAK5CrV9hO0KuAbrgCcxDmi2ROJ1UJ4oHEZ4iNg4NJrfGuAzHzDw+ZAl8giVYgUqogyY4CmkmJ/UMVBnBAmNbFEXzZu4PXNwJ0Hf6h/l1qIE7MAt7NXnEXdKd8SZsqoLT+Ef8K9sWRyTfK7Es7NVi5qKRx/oYFqBYk3fsPnifD2J3Y0Xe6p7OR9QaE/a7ZIKD9rnSj+EPwkOQd/MevAZrzxJKuBCiISs043GXtA6JAyB3Kqd10MaTRvK18BOsXYrrSFyzScavIO9mqpF/ZPTv8omqESW/A2oVmh5TTIY5lXIu8UqQ02mt0yVTHITy8c65kQqt5QStg5zGQtajBC+U71zqbDB55QKZjF6jwjsuaxbNup3gbj3u8BD8Amvn02og6LAiRvnwl/wn0+tNk3bVdMYTqAA6+fVYVPpWlS6PSzPZwQmQw9RdqAsa+RMq9gZqCulLkqfRQWguthha+QEo/+Mt9oKCLuxA2IGwA2EH9tEO/AWr2bT0nZv9RwAAAABJRU5ErkJggg=="},"6e15":function(e,t,i){"use strict";i("f241")},"7ded":function(e,t,i){"use strict";i.d(t,"c",(function(){return s})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return n}));var o=i("b775");function s(e){return Object(o["a"])({url:"/api/verificationCodes?phone="+e,method:"post"})}function r(){return Object(o["a"])({url:"/api/getSiteList",method:"get"})}function n(e){return Object(o["a"])({url:"/api/user/resetPassword",method:"patch",data:e})}},"9ed6":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-container"},[i("div",{class:["loginbox box-common",e.isMobile?"isMobile":""]}),i("div",{class:["from-box box-common",e.isMobile?"isMobile":""]},[i("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"off","label-position":"left"}},[i("div",{staticClass:"title-container"},[i("div",{staticClass:"title"},[e._v("管理后台登录")])]),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"text"}}),i("el-input",{staticStyle:{position:"fixed","z-index":"-9999",width:"0",height:"0",overflow:"hidden"},attrs:{type:"password"}}),i("el-select",{staticClass:"pull-down-login",attrs:{filterable:"",placeholder:"请选择站点",size:"mini"},on:{change:e.sites_change},model:{value:e.sitec.site_select,callback:function(t){e.$set(e.sitec,"site_select",t)},expression:"sitec.site_select"}},e._l(e.sitec.site_data,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),i("el-form-item",{staticClass:"username",attrs:{prop:"username"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"user"}})],1),i("el-input",{ref:"username",attrs:{placeholder:"请输入手机号码",maxlength:"11",type:"text",tabindex:"1"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),i("el-form-item",{staticClass:"username",attrs:{prop:"password"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),i("el-input",{ref:"password",attrs:{type:e.eyeflag?"text":"password",placeholder:"请输入密码",name:"password",tabindex:"2"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}}),i("i",{staticStyle:{display:"inline-block",height:"100%","vertical-align":"bottom","margin-left":"20px"}},[i("img",{staticStyle:{width:"20px",cursor:"pointer"},attrs:{src:e.eyeflag?e.openeye:e.closeeye,alt:""},on:{click:function(t){e.eyeflag=!e.eyeflag}}})])],1),i("el-form-item",{staticClass:"yzcode",attrs:{prop:"yzcode"}},[i("span",{staticClass:"svg-container"},[i("svg-icon",{attrs:{"icon-class":"password"}})],1),i("el-input",{ref:"yzcode",attrs:{placeholder:"请输入验证码",maxlength:"8",type:"text",name:"yzcode",tabindex:"3"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.yzcode,callback:function(t){e.$set(e.loginForm,"yzcode",t)},expression:"loginForm.yzcode"}}),i("div",{staticClass:"sendbtn",on:{click:e.getcodeFn}},[e._v(e._s(e.getcodeval))])],1),i("div",{staticStyle:{"font-size":"14px",color:"#ccc",cursor:"pointer"},on:{click:e.forgetPass}},[e._v("忘记密码")]),i("el-button",{directives:[{name:"points",rawName:"v-points",value:1500,expression:"1500"}],staticClass:"loginbtn",staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1),i("div",{staticClass:"login-bottom"}),i("change-pass",{ref:"changePass",attrs:{phone:e.loginForm.username,zone_id:e.sitec.site_select_all.zone_id||"",site_id:e.sitec.site_select_all.id||"",disabledPhone:e.disabledPhone,tip:"为确保您的账号信息安全，请尽快修改您的登录密码"}})],1)},s=[],r=(i("08ba"),i("fe8a"),i("61f7")),n=i("7ded"),a=i("0bf1"),l=i("3de2"),c=i.n(l),d=i("215c"),u=i.n(d),f=i("f753"),p=i.n(f),m=i("5041"),g={name:"Login",components:{changePass:a["a"]},data:function(){var e=function(e,t,i){t?Object(r["e"])(t)?i():i(new Error("请输入正确的手机号")):i(new Error("请输入手机号"))},t=function(e,t,i){t?i():i(new Error("请输入验证码"))},i=function(e,t,i){""===t?i(new Error("请输入密码")):i()};return{closeeye:c.a,openeye:u.a,eyeflag:!1,disabledPhone:!0,loginForm:{username:"",password:"",yzcode:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:i}],yzcode:[{required:!0,trigger:"blur",validator:t}]},redirect:void 0,otherQuery:{},sitec:{site_select:"",site_data:[],site_select_all:{}},getcodeval:"获取验证码",getcodeflag:!0,timer:null,verification_key:void 0}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){sessionStorage.removeItem("TempZone"),sessionStorage.removeItem("TempSite")},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.yzcode&&this.$refs.yzcode.focus(),this.getsiteFn()},destroyed:function(){},methods:{getsiteFn:function(){var e=this;Object(n["b"])().then((function(t){e.sitec.site_data=t}))},getcodeFn:function(){var e=this;this.getcodeflag&&(this.loginForm.username?Object(r["e"])(this.loginForm.username)?Object(n["c"])(this.loginForm.username).then((function(t){e.verification_key=t.key,e.getcodeflag=!1;var i=60;e.getcodeval=i+" s",e.timer=setInterval((function(){i>1?(i--,e.getcodeval=i+" s"):(e.getcodeval="再次获取",e.getcodeflag=!0,clearInterval(e.timer))}),1e3)})):this.$message({message:"请输入正确的手机号",type:"error"}):this.$message({message:"请输入手机号",type:"error"}))},forgetPass:function(){if(this.sitec.site_select){var e=this.$refs.changePass;this.disabledPhone=!1,e.dialog.show=!0}else this.$message({message:"请选择站点",type:"error"})},sites_change:function(e){var t=this;this.sitec.site_data.forEach((function(i,o,s){e==i.id&&(t.sitec.site_select_all=i)})),this.sitec.site_select=e,window.localStorage.setItem("siteId",e)},handleLogin:function(){var e=this;this.sitec.site_select||"13571949374"==this.loginForm.username?this.verification_key?this.loginForm.yzcode?this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;var i=new FormData;i.append("username",e.loginForm.username),i.append("password",e.loginForm.password),i.append("verification_code",e.loginForm.yzcode),i.append("verification_key",e.verification_key),i.append("zone_id",e.sitec.site_select_all.zone_id),i.append("site_id",e.sitec.site_select_all.id),e.$store.dispatch("user/login",i).then((function(t){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.voteSign(t.access_token)})).catch((function(t){console.log(t);var i=t.response.data;if(i&&412===i.status_code){var o=e.$refs.changePass;o.dialog.show=!0}Object.assign(e.loginForm,{password:"",yzcode:""})}))})):this.$message({message:"验证码不能为空",type:"error"}):this.$message({message:"请先获取短信验证码",type:"error"}):this.$message({message:"请选择站点",type:"error"})},singlesign:function(e){p()({url:"/open/api/sso/xlyLogin",method:"post",timeout:5e3,baseURL:m["e"],headers:{authToken:e}}).then((function(e){200===e.status&&console.log("res",e)})).catch((function(e){console.log(e)}))},voteSign:function(e){p()({url:"/admin/login?token="+e,method:"get",timeout:5e3,baseURL:this.VUE_APP_XLY_API}).then((function(e){200===e.status&&console.log("res",e)})).catch((function(e){console.log(e)}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,i){return"redirect"!==i&&(t[i]=e[i]),t}),{})}}},h=g,v=(i("9f40"),i("336c"),i("cba8")),w=Object(v["a"])(h,o,s,!1,null,"3fcd213c",null);t["default"]=w.exports},"9f40":function(e,t,i){"use strict";i("1cd7")},bf34:function(e,t,i){},f241:function(e,t,i){}}]);