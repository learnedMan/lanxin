<template>
  <div class="login-container">

    <div  :class="['loginbox box-common',isMobile ? 'isMobile':'']"></div>
    <div  :class="['from-box box-common',isMobile ? 'isMobile':'']">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="off" label-position="left">
        <div class="title-container">
          <div class="title">管理后台登录</div>
        </div>
        <!-- 这两个input解决自动填充问题 -->
        <el-input
          type="text"
          style="position: fixed;z-index: -9999;width: 0;height: 0;overflow: hidden"
        ></el-input>
        <el-input
          style="position: fixed;z-index: -9999;width: 0;height: 0;overflow: hidden"
          type="password"
        ></el-input>
        <el-select class="pull-down-login" v-model="sitec.site_select" filterable placeholder="请选择站点" size='mini' @change='sites_change'>
          <el-option v-for="item in sitec.site_data" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
        <el-form-item prop="username" class="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入手机号码"
            maxlength="11"
            type="text"
            tabindex="1"
          />
        </el-form-item>
        <el-form-item prop="password" class="username" >
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="password"
            :type="eyeflag?'text':'password'"
            v-model.trim="loginForm.password"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
          />
          <i style="display: inline-block;height: 100%;vertical-align: bottom;margin-left:20px;">
            <img style="width:20px;cursor:pointer;" @click="eyeflag = !eyeflag" :src="eyeflag?openeye:closeeye" alt="">
            </i>
        </el-form-item>

        <el-form-item prop="yzcode" class="yzcode">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="yzcode"
            v-model="loginForm.yzcode"
            placeholder="请输入验证码"
            maxlength="8"
            type="text"
            name="yzcode"
            tabindex="3"
            @keyup.enter.native="handleLogin"
          />
          <div class="sendbtn" @click="getcodeFn">{{getcodeval}}</div>
        </el-form-item>
          <div style="font-size: 14px;color: #ccc;cursor: pointer;" @click="forgetPass">忘记密码</div>
        <el-button v-points = "1500"
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleLogin"
          class="loginbtn"
        >登录</el-button>
      </el-form>
    </div>
      
    <div class="login-bottom"></div>
    <change-pass
      :phone="loginForm.username"
      :zone_id="sitec.site_select_all.zone_id || ''"
      :site_id="sitec.site_select_all.id || ''"
      :disabledPhone="disabledPhone"
      ref="changePass"
      tip="为确保您的账号信息安全，请尽快修改您的登录密码"
    ></change-pass>
  </div>
</template>

<script>
import { validUsername  } from '@/utils/validate'

import { getcode , getSiteList , login} from '@/api/login'
import changePass from '@/views/dashboard/user/changePass.vue'

import closeeye from '@/assets/c_images/closeeye.png'
import openeye from '@/assets/c_images/openeye.png'
import axios from 'axios'
import {  VUE_APP_REQUEST4_API } from '@/utils/judgmentEvn.js'

export default {
  name: 'Login',
  components: {
    changePass
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if(!value){
        callback(new Error('请输入手机号'))
      }else if (!validUsername(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }
    const validateyzcode = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if(value === '') {
        callback(new Error('请输入密码'))
      }else {
        callback()
      }
    }
    return {
      closeeye,
      openeye,
      eyeflag:false,
      disabledPhone: true,
      loginForm: {//登录绑定
        username: '',
        password: '',
        yzcode: ''
      },
      loginRules: {//表单校验
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        yzcode: [{ required: true, trigger: 'blur', validator: validateyzcode }]
      },
      redirect: undefined,
      otherQuery: {},
      sitec:{
        site_select:'', //选择的站点
        site_data:[], //可供选择的站点
        site_select_all: {},//选择站点的全部信息
      },
      getcodeval:'获取验证码',
      getcodeflag:true,
      timer:null,
      verification_key:undefined//短信验证码的key
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    sessionStorage.removeItem('TempZone')
    sessionStorage.removeItem('TempSite')
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.yzcode === '') {
      this.$refs.yzcode.focus()
    }
    this.getsiteFn();
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    getsiteFn(){//获取站点
      getSiteList().then(response => {
        this.sitec.site_data = response;
        const siteId = window.localStorage.getItem('siteId');
        const username = window.localStorage.getItem('username')
        let obj = response.find(v =>v.id == siteId)
        if(siteId && username && obj) {
          this.sitec.site_select = Number(siteId) ;
          this.loginForm.username = username
          this.sitec.site_select_all = response.find(n => n.id == siteId);
        }else{
          window.localStorage.removeItem('siteId')
          window.localStorage.removeItem('username')
        }
        // else {
        //   this.sitec.site_select = response[0]?.id || '';
        //   this.sitec.site_select_all = response[0];
        // }
      })
    },
    getcodeFn(){//获取验证码
      if(!this.getcodeflag){
        return
      }
      if(!this.loginForm.username){
          this.$message({
            message: '请输入手机号',
            type: 'error'
          })
          return
      }
      if(!validUsername(this.loginForm.username)){
          this.$message({
            message: '请输入正确的手机号',
            type: 'error'
          })
          return
      }
      getcode(this.loginForm.username).then(response => {
        // console.log(response)
          this.verification_key = response.key;
          this.getcodeflag = false
          let count = 60
          this.getcodeval = count + ' s'
          this.timer = setInterval( ()=>{
            if ( count > 1 ) {
              count--
              this.getcodeval = count + ' s'
            }else{
              this.getcodeval = '再次获取'
              this.getcodeflag = true
              clearInterval(this.timer)
            }
          },1000)
      })
    },
    forgetPass() { //忘记密码
      if ( !this.sitec.site_select) {
          this.$message({
            message: '请选择站点',
            type: 'error'
          })
          return
      }
      const changePass = this.$refs.changePass;
      this.disabledPhone = false
      changePass.dialog.show = true;
    },
    sites_change(e){
      this.sitec.site_data.forEach((value,index,array)=>{
        if(e==value.id){
          this.sitec.site_select_all = value
        }
      })
      this.sitec.site_select = e;
      window.localStorage.setItem('siteId', e)
    },
    handleLogin() {
      // console.log(this.redirect)
      // console.log(this.otherQuery)
      // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      // return
      if ( !this.sitec.site_select&&this.loginForm.username!='13571949374') {
          this.$message({
            message: '请选择站点',
            type: 'error'
          })
          return
      }
      if ( !this.verification_key) {
        this.$message({
            message: '请先获取短信验证码',
            type: 'error'
        })
        return
      }
      if ( !this.loginForm.yzcode) {
        this.$message({
            message: '验证码不能为空',
            type: 'error'
        })
        return
      }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          let formData = new FormData()
            formData.append( "username",this.loginForm.username )
            formData.append( "password",this.loginForm.password )
            formData.append( "verification_code",this.loginForm.yzcode )
            formData.append( "verification_key",this.verification_key )
            formData.append( "zone_id",this.sitec.site_select_all.zone_id )
            formData.append( "site_id",this.sitec.site_select_all.id )

          this.$store.dispatch('user/login', formData)
            .then((data) => {
              // console.log(data)
               this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              // let script=document.createElement("script");
              // script.type="text/JavaScript";
              // script.src= this.VUE_APP_XLY_API+'/admin/login?token='+ data.access_token;
              // document.getElementsByTagName('head')[0].appendChild(script);
              // this.voteSign(data.access_token)
              this.singlesign(data.access_token)
              // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              window.localStorage.setItem('username', this.loginForm.username)
            })
            .catch((err) => {
              console.log(err)
              const errData = err.response.data;
              // 重置密码
              if(errData && errData.status_code === 412) {
                const changePass = this.$refs.changePass;
                changePass.dialog.show = true;
              }
              Object.assign(this.loginForm, {
                password: '',
                yzcode: ''
              })
            })
          // login(formData).then(response => {
          //   console.log(response)
          //   localStorage.setItem('token',response.token_type+' '+response.access_token)
          //   this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          // })

        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    singlesign(token) {
      axios({
            url: '/open/api/sso/xlyLogin',
            method: 'post',
            timeout: 5000,
            baseURL:VUE_APP_REQUEST4_API,
            headers: {
              'authToken': token
            },
            withCredentials: true
          }).then(res => {
            if (res.data.code === 200) {
            }else{
              // this.$message(res.data.message);
            }
          }).catch((err) => {
            console.log(err)
          })
    },
    voteSign(token) {
      axios({
            url: '/admin/login?token='+ token,
            method: 'get',
            timeout: 5000,
            baseURL:this.VUE_APP_XLY_API,
          }).then(res => {
            if (res.status === 200) {
             console.log('res',res)
            }
          }).catch((err) => {
            console.log(err)
          })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" scoped>

$images: '../../assets';
$w:#fff;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  // background: url($images+'/login_images/loginbg.jpg') no-repeat center;
  background: url($images+'/login_images/loginbg.jpg') no-repeat right;
  background-size: cover;
  .login-bottom{
    position: absolute;
    bottom: 27px;
    left: 0;
    right: 0;
    margin: auto;
    width: 520px;
    height: 27px;
    background: url($images+'/login_images/loginbot.png') no-repeat center;
    background-size: cover;
  }
  .loginbox{
    overflow: hidden;
  }
  .loginbox:before{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    content: '';
    background: url($images+'/login_images/loginbg.jpg') no-repeat right;
    background-size: cover;
    margin: -30px;
    z-index: 3;
    -webkit-filter: blur(12px);
    filter: blur(11px);
  }
  .box-common{
    width: 380px;
    height: 530px;
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translateY(-50%);
  }
  .isMobile{
    // right: 0%!important;
    left: 50%!important;
    transform: translate(-50%,-50%) !important;
  }
  .from-box{
    background: url($images+'/login_images/loginbg.png') no-repeat;
    background-size: cover; 
    z-index: 10;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 38px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    z-index: 20;
  }
  .username,.yzcode{
    border-bottom: 2px solid #fff ;
    .el-input{
      border: none;
    }
  }
  .title-container {
    position: relative;
    .title {
      color:$w;
      font-size: 20px;
      margin: 0px auto 40px auto;
      text-align: center;
    }
  }
  .pull-down-login{
    width: 100%;
    margin-bottom: 40px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    .svg-icon{
      color: #fff;
    }
  }
  .loginbtn{
    margin-top: 30px;
    // background: transparent;
    // border: 1px solid #fff;
    background: #155BD4;
    border-radius: 6px;
    border: none;
  }
}
</style>
<style lang="scss" >
  $t:transparent;
  .login-container {
    .pull-down-login{
      .el-input__inner{
        height: 36px;
      }
    }
    .username,.yzcode{
      position: relative;
      input{
        border: none;
      }
      .el-input{
        width: 60%;
      }
      .sendbtn{
        width: 75px;
        height: 30px;
        font-size: 12px;
        border: 1px solid #fff;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        cursor: pointer;
        position: absolute;
        right: 5px;
        bottom: 10px;
      }
    }

    .el-input__inner{
			background-color: $t;
			color:#fff;
		}
  }
</style>
