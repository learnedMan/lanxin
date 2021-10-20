<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <div style="margin-right: 10px" v-if="!isMobile">
        <el-button v-points = "1500" type="primary" size="mini" v-for="btn of btns" @click="$router.push(btn.url)">{{btn.label}}</el-button>
      </div>
      <el-button v-points = "1500" size="mini" @click="changeShortcut">修改</el-button>
      <el-button v-points = "1500"
        v-if="u_info.site_list.length !== 0"
        style="color:#999;"
        type="text"
        icon="el-icon-sort"
        @click="handleChangeSite"
      >切换站点</el-button>
      <el-button v-points = "1500"
      type="primary" size="mini"
      icon="el-icon-collection"
      style="background: #F15A24;border: none;margin-right: 30px;"
      ><a href="http://www.cztvcloud.com/lxpc_sysc" target="_blank">操作手册</a></el-button>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatarImg" class="user-avatar">
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

      <!-- 切换站点 -->
      <el-dialog
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="600px" title="切换站点" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="dataForm">
          <el-form-item label-width="100px" label="选择站点" prop="id">
              <el-select v-model="form.id" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>
        </el-form>
        <div class="dialog-footer" slot="footer">
          <el-button v-points = "1500" @click="closeDialog">取 消</el-button>
          <el-button v-points = "1500" @click="enterDialog" type="primary">确 定</el-button>
        </div>
      </el-dialog>
    <!-- 自定义快捷按钮 -->
       <el-dialog
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        width="600px" title="快速跳转" :visible.sync="dialogShortcut">
         <div style="height: 400px;overflow: auto;" class="shortcut">
          <el-tree
              :data="treedata"
              :default-checked-keys="treechoosedata"
              show-checkbox
              :check-strictly="true"
              default-expand-all
              node-key="path"
              ref="shortcutTree"
              highlight-current
              :props="roledefaultProps">
            </el-tree>
         </div>
        <div class="dialog-footer" slot="footer">
          <el-button v-points = "1500" @click="dialogShortcut = false;">取 消</el-button>
          <el-button v-points = "1500" @click="enterShortcutDialog" type="primary">确 定</el-button>
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
import { deepClone } from '@/utils'
import { PatchShortcuts } from '@/api/content'
// import store from './store'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
  },
  data(){
    return {
      dialogFormVisible: false,
      dialogShortcut: false,
      treedata: [],
      treechoosedata: [],
      roledefaultProps: {
        children: 'children',
        label: 'title',
        id: 'path'
      },
      form:{
        id:""
      },
      rules:{
        id:[
          { required: true, message: "请选择站点", trigger: "blur" }
        ]
      },
      // btns: [
      //   {
      //     label: '新闻审核',
      //     url: '/workbench/reviewNews'
      //   },
      //   {
      //     label: '我的稿件',
      //     url: '/content/mediaAssets/my'
      //   },
      //   {
      //     label: '直播间',
      //     url: '/content/studio/studioList'
      //   }
      // ]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      'u_info'
    ]),
    avatarImg () {
      return this.avatar? `${this.avatar}?imageView2/1/w/80/h/80` : require('@/assets/c_images/useravatar.jpg')
    },
    btns () {
      return this.$store.state.user.u_info.extra?.shortcuts || []
    },
    changeSite(){
      let flag = false;
      (this.u_info.roles.data || []).forEach((e)=>{
        if(e.name=='Administrator'||e.name=='Admin'){
          flag = true;
        }
      })
      return flag
    }
  },
  created(){
    // console.log(this.u_info)
    this.options = this.u_info.site_list
  },
  methods: {
    /* 切换站点 */
    handleChangeSite () {
      const id = this.u_info.site.id;
      this.form.id = id;
      this.dialogFormVisible = true;
    },
    /*修改快捷方式*/
    changeShortcut () {
      this.dialogShortcut = true
      let routes = deepClone(this.$store.state.permission.addRoutes)
      let user = this.$store.state.user.u_info
      this.treechoosedata = (user?.extra?.shortcuts || []).map(v=>{
        return v.url
      })
      this.treedata = this.convert(routes,[],'')
    },
    enterShortcutDialog () {
      let arr = this.$refs.shortcutTree.getCheckedNodes()
      if(!arr.length) {
        this.$message('请勾选快速跳转路由');
      }else if(arr.length > 4) {
        this.$message('最多只能勾选4个');
      }else{
         console.log(this.$refs.shortcutTree.getCheckedNodes());
         let id = this.$store.state.user.u_info.id
         let shortcuts = arr.map(v=>{
           let label = v.title,url = v.path
           return {
             label,url
           }
         })
         console.log('shortcuts',shortcuts)
          PatchShortcuts(id, {
              extra: {shortcuts}
            }).then(() => {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
              this.dialogShortcut = false
              this.$store.dispatch('user/getuserinfo')
              this.btns = this.$store.state.user.u_info.extra.shortcuts
            })
      }
    },
    convert(data, arr,url) {
        for (let i = 0; i < data.length; i++) {
            let e = data[i];
            let children = [];
            if(!e.hidden) {
              arr.push({
                  ...e,
                  title: e.meta.title,
                  path: url ? url + '/' + e.path : e.path,
                  children: children
              });
            }
            if(e.children && e.children.length >0) {
                this.convert(e.children, children,e.path);
            }
        }
        return arr;
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
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
    async enterDialog() {
      this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          this.dialogFormVisible = false;
          var data = this.pickformdata(this.form.id);
          sessionStorage.setItem('TempZone',data.zone_id)
          sessionStorage.setItem('TempSite',data.id)

          this.closeAllTags()
      })
    },
    closeAllTags(view) {
      this.$store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
        this.toLastView(visitedViews)
      })
    },
    toLastView(visitedViews) {
          this.$router.push('/')
          window.location.reload()
    },
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
<style lang="scss">
  .shortcut{
    .el-tree-node {
      .is-leaf + .el-checkbox .el-checkbox__inner {
        display: inline-block;
      }
      .el-checkbox .el-checkbox__inner {
        display: none;
      }
    }
  }
</style>