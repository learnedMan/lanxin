<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <div style="margin-right: 10px" v-if="!isMobile">
        <el-button type="primary" size="mini" v-for="btn of btns" @click="$router.push(btn.url)">{{btn.label}}</el-button>
      </div>
      <el-button
        style="color:#999;margin-right:30px;"
        type="text"
        icon="el-icon-sort"
        @click="dialogFormVisible = true;"
      >切换频道</el-button>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/admin">
            <el-dropdown-item>账号管理</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- 切换频道 -->
      <el-dialog
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="600px" title="切换频道" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="dataForm">
          <el-form-item label-width="100px" label="选择频道" prop="id">
              <el-select v-model="form.id" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>
        </el-form>
        <div class="dialog-footer" slot="footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button @click="enterDialog" type="primary">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'


export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
  },
  data(){
    return {
      dialogFormVisible: false,
      form:{
        id:""
      },
      rules:{
        id:[
          { required: true, message: "请选择频道", trigger: "blur" }
        ]
      },
      btns: [
        {
          label: '新闻审核',
          url: '/workbench/reviewNews'
        },
        {
          label: '我的稿件',
          url: '/content/mediaAssets/my'
        },
        {
          label: '直播间',
          url: '/operaManage/studio/studioList'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      'u_info'
    ])
  },
  created(){
    // console.log(this.u_info)
    this.options = this.u_info.site_list
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    pickformdata(val){
      for(var i=0;i<this.options.length;i++){
        if(this.options[i].id==val){
          return this.options[i]
        }
      }
    },
    // 关闭窗口
    closeDialog() {
      this.dialogFormVisible = false;
    },
    // 确定弹窗
    enterDialog() {
      this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          this.dialogFormVisible = false;
          var data = this.pickformdata(this.form.id);
          sessionStorage.setItem('TempZone',data.zone_id)
          sessionStorage.setItem('TempSite',data.id)
          window.location.reload()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
