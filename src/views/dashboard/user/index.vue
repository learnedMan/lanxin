<style type="text/scss" lang="scss" scoped>
.xl-user {
  height: calc(100vh - 84px);
  display: flex;
  align-items: center;
  justify-content: center;
  .tip {
    line-height: 24px;
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #575757;
    display: flex;
    align-items: flex-start;
    p {
      width: 280px;
      padding: 0;
      margin: 0 10px 0 0;
    }
  }
}
</style>
<template>
    <div class="xl-user">
      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
        <el-form-item>
          <el-image
            style="width: 100px; height: 100px;border-radius: 50%;margin: 0 0 30px 60px"
            :src="info.avatar"
            fit="cover">
            <img slot="error" :src="avatar" alt="" style="width: 100%;height: 100%;">
          </el-image>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="info.name" autocomplete="off" disabled style="width: 260px"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="info.phone" autocomplete="off" disabled style="width: 260px"></el-input>
        </el-form-item>
        <el-form-item label="当前站点">
          <el-input v-model="info.site" disabled style="width: 260px"></el-input>
        </el-form-item>
        <el-form-item label="登录密码">
          <div class="tip">
            <p>密码要求至少包含字母，符号或数字中的两项且长度超过8位，建议您经常修改密码，以保证帐号更加安全。</p>
            <el-button type="primary" @click="changePassword">修改密码</el-button>
          </div>
        </el-form-item>
      </el-form>
      <el-dialog
        width="500px"
        :title="dialog.title"
        :visible.sync="dialog.show"
      >
        <el-form
          ref="dialogForm"
          size="small"
          :model="form"
          :rules="rules"
          label-width="100px"
        >
          <el-form-item
            label="手机号"
            prop="phone"
          >
            <el-input v-model="form.phone" disabled style="width: 260px"></el-input>
          </el-form-item>
          <el-form-item
            label="验证码"
            prop="verification_code"
          >
            <el-input v-model.trim="form.verification_code" placeholder="请输入验证码" style="width: 160px;margin-right: 8px"></el-input>
            <el-button type="primary" @click="getCode">{{ codeNum }}</el-button>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input v-model.trim="form.password"  placeholder="请输入密码" style="width: 260px"></el-input>
          </el-form-item>
          <el-form-item
            label="确认密码"
            prop="confirmPassword"
          >
            <el-input v-model.trim="form.confirmPassword"  placeholder="请输入确认密码" style="width: 260px"></el-input>
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
    </div>
</template>

<script>
  import { getcode, changePassword } from '@/api/login'

    export default {
      name: 'User',
      data () {
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.form.confirmPassword.trim() !== '') {
              this.$refs.dialogForm.validateField('confirmPassword');
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
          avatar: '', // 默认头像
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
            phone: '',
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
      computed: {
        info () {
          const user = this.$store.state.user;
          return {
            avatar: user.avatar || '',
            name: user.u_info?.name || '',
            phone: user.u_info?.phone || '',
            site: user.u_info?.site?.name || ''
          }
        }
      },
      methods: {
        /* 修改密码 */
        changePassword () {
          this.dialog.show = true;
          this.form.phone = this.info?.phone;
          this.$nextTick(() => {
            this.resetForm('dialogForm');
          })
        },
        /* 获取验证码 */
        getCode () {
          if(this.codeFlag) return;
          getcode(this.form.phone).then(response => {
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
          const data = { ...this.form };
          delete data.confirmPassword;
          changePassword(data).then(() => {
            this.$message.success('修改成功!');
          })
        },
      },
      beforeDestroy() {
        clearInterval(this.timer);
      }
    }
</script>
