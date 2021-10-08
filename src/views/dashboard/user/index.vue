<style type="text/scss" lang="scss">
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
  .xl-avatar-uploader {
    width: 100px;
    height: 100px;
    margin: 0 0 30px 60px;
    border-radius: 50%;
    .el-upload {
      border: none;
    }
    .avatar {
      border-radius: 50%;
    }
  }
}
</style>
<template>
    <div class="xl-user">
      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
        <el-form-item>
          <!--<el-image
            lazy
            style="width: 100px; height: 100px;border-radius: 50%;margin: 0 0 30px 60px"
            :src="info.avatar"
            fit="cover">
            <img slot="error" :src="avatar" alt="" style="width: 100%;height: 100%;">
          </el-image>-->
          <upload-img v-model="info.avatar" :del-btn="false" @input="changeAvatar"></upload-img>
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
            <p>密码由8-16位数字、字母或符号组成,至少包含大小写字母+数字，建议您经常修改密码，以保证帐号更加安全。</p>
            <el-button v-points = "1500" type="primary" @click="changePassword">修改密码</el-button>
          </div>
        </el-form-item>
      </el-form>
      <change-pass
        :phone="info.phone"
        :zone_id="info.zone_id"
        :site_id="info.site_id"
        ref="changePass"
      ></change-pass>
    </div>
</template>

<script>
  import changePass from './changePass'
  import uploadImg from '@/components/Upload/uploadSingle.vue'
  import {
    editusers,
  } from '@/api/manage'
    export default {
      name: 'User',
      components: {
        changePass,
        uploadImg
      },
      data () {
        return {
          avatar: require('@/assets/c_images/useravatar.jpg'), // 默认头像
          info: {
            avatar: '',
            name: '',
            phone: '',
            site: '',
            zone_id: '',
            site_id: '',
          }
        }
      },
      methods: {
        /* 修改密码 */
        changePassword () {
          const changePass = this.$refs.changePass;
          changePass.dialog.show = true;
        },
        /* 修改图片信息 */
        changeAvatar (val) {
          const id = this.$store.state.user.u_info.id;
          editusers(id, {
            avatar: val
          }).then(response => {
            if (response.status_code >= 200 && response.status_code < 300) {
              this.$message({
                message: response.message,
                type: 'success'
              });
              this.$store.dispatch('user/getuserinfo')
            }else {
              this.$message({
                message: response.message,
                type: 'warning'
              });
            }
          })
        }
      },
      watch: {
        '$store.state.user': {
          handler (val) {
            const user = val;
            this.info = {
              avatar: user.avatar || '',
              name: user.u_info?.name || '',
              phone: user.u_info?.phone || '',
              site: user.u_info?.site?.name || '',
              zone_id: user.u_info?.zone_id || '',
              site_id: user.u_info?.site_id || '',
            }
          },
          immediate: true
        }
      }
    }
</script>
