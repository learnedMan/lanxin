<style type="text/scss" lang="scss">
  .xl-pass-login {
    .el-input__inner {
      color: #575757!important;
    }
  }
</style>
<template>
  <el-dialog
    width="500px"
    :close-on-click-modal="false"
    :title="dialog.title"
    :visible.sync="dialog.show"
  >
    <div slot="title">
      <span>{{ dialog.title }}</span>
      <span style="color: #575757;font-size: 12px;margin-left: 10px">{{ tip }}</span>
    </div>
    <el-form
      class="xl-pass-login"
      ref="passForm"
      size="small"
      :model="form"
      :rules="rules"
      :validate-on-rule-change="false"
      label-width="100px"
    >
      <!-- 这两个input解决自动填充问题 -->
      <el-input
        style="position: fixed;z-index: -9999;width: 0;height: 0;overflow: hidden"
      ></el-input>
      <el-input
        style="position: fixed;z-index: -9999;width: 0;height: 0;overflow: hidden"
        type="password"
      ></el-input>
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input
          v-model="phone"
          autocomplete="off"
          disabled
          style="width: 260px"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="verification_code"
      >
        <el-input
          ref="verification_code"
          v-model.trim="form.verification_code"
          autocomplete="off"
          placeholder="请输入验证码"
          style="width: 160px;margin-right: 8px"
        ></el-input>

        <el-button type="primary" @click="getCode">{{ codeNum }}</el-button>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          ref="password"
          v-model.trim="form.password"
          placeholder="请输入密码"
          type="password"
          style="width: 260px"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="confirmPassword"
      >
        <el-input
          v-model.trim="form.confirmPassword"
          type="password"
          placeholder="请输入确认密码"
          style="width: 260px"
        ></el-input>
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="dialog.show = false">
        取 消
      </el-button>
      <el-button
        type="primary"
        @click="enterDialog"
      >
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { getcode, changePassword } from '@/api/login'

    export default {
      props: {
        phone: {
          type: [ String, Number ],
          required: true
        },
        zone_id: {
          type: [ String, Number ],
          required: true
        },
        site_id: {
          type: [ String, Number ],
          required: true
        },
        /* 提示 */
        tip: {
          type: String,
          default: ''
        }
      },
      data() {
        const pwdRegex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,16}');
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else if(!pwdRegex.test(value)) {
            callback(new Error('您的密码不符要求(密码中必须包含大小写字母和数字)'))
          } else {
            if (this.form.confirmPassword.trim() !== '') {
              this.$refs.passForm.validateField('confirmPassword');
            }
            callback();
          }
        };
        const validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.form.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        const validateyzcode = (rule, value, callback) => {
          if (!value) {
            callback(new Error('请输入验证码'))
          } else {
            callback()
          }
        }
        return {
          dialog: {
            title: '修改密码',
            show: false
          },
          rules: {
            password: [
              { required: true, trigger: 'blur', validator: validatePass }
            ],
            confirmPassword: [
              { required: true, trigger: 'blur', validator: validatePass2 }
            ],
            verification_code: [
              { required: true, trigger: 'blur', validator: validateyzcode }
            ]
          },
          form: {
            verification_key: '', // 验证短信的key
            verification_code: '', // 验证码
            password: '',
            confirmPassword: '', // 确认密码
          },
          codeNum: '获取验证码',
          timer: '',
          codeFlag: false, // 限制
        }
      },
      watch: {
        'dialog.show' (val) {
          if(val) {
            this.resetForm('passForm')
          }
        }
      },
      methods: {
        /* 获取验证码 */
        getCode () {
          if(this.codeFlag) return;
          getcode(this.phone).then(response => {
            this.form.verification_key = response.key;
            let count = 60;
            this.codeNum = count + ' s';
            this.codeFlag = true;
            this.timer = setInterval(() => {
              if ( count > 1 ) {
                count--;
                this.codeNum = count + ' s';
              }else{
                this.codeNum = '再次获取';
                this.codeFlag = false;
                clearInterval(this.timer);
              }
            },1000)
          })
        },
        /* 确认修改 */
        enterDialog () {
          this.$refs.passForm?.validate(val => {
            if(val) {
              const data = { ...this.form, phone: this.phone, zone_id: this.zone_id, site_id: this.site_id };
              delete data.confirmPassword;
              changePassword(data).then(res => {
                this.dialog.show = false;
                this.$message.success(res.message);
                this.logout();
              })
            }
          })
        },
        /* 重新登录 */
        async logout() {
          await this.$store.dispatch('user/logout');
          this.$router.push('/login')
        },
      },
      beforeDestroy() {
        clearInterval(this.timer);
      }
    }
</script>
