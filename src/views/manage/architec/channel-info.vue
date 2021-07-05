<template>
  <div class="channel-info" style="padding-left:80px;padding-top:80px;">
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item  label-width="120px" label="LOGO："  prop="logo">
          <el-upload
            :disabled="editflag"
            class="avatar-uploader"
            :class="editflag?'notallowed':''"
            :action="VUE_APP_BASE_API+'/api/upload/image'"
            :headers="importHeaders"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.logo" :src="form.logo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item  label-width="120px" label="站点名称" prop="name">
          <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入站点名称" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="英文标识" prop="en_name">
          <el-input :disabled="editflag"  style="width: 300px" autocomplete="off" placeholder="请输入英文标识" v-model="form.en_name"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="负责人姓名" prop="site_manager_name">
          <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入负责人姓名"  v-model="form.site_manager_name" ></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="负责人手机号" prop="site_manager_phone">
          <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入负责人手机号" v-model="form.site_manager_phone"></el-input>
        </el-form-item>
        <el-form-item   label-width="120px" label="简介" prop="introduction">
          <el-input :disabled="editflag" type="textarea" style="width: 300px" autocomplete="off" placeholder="请输入简介" v-model="form.introduction"></el-input>
        </el-form-item>
        <el-form-item  label-width="120px" label="蓝云租户" prop="extra.uni_site">
          <el-input v-model="form.extra.uni_site" @input="updateView($event)" :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入简介" ></el-input>
        </el-form-item>
      </el-form>
        <div style="padding-top:30px;padding-left:50px;">
            <el-button @click="editfn" :disabled="!editflag" type="success" size="mini">编辑</el-button>
            <el-button @click="reset" :disabled="editflag" type="info" size="mini" >重置</el-button>
            <el-button @click="save" :disabled="editflag" type="primary" size="mini" >保存</el-button>
        </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getsitesinfo,
  editsites
  } from '@/api/manage'
  export default {
    name: 'channel-info',
    data() {
        var mytoken = sessionStorage.getItem('token');
        return {
            importHeaders: {Authorization: mytoken},//传图片时的token
            editflag:true,
            form: {
            },
            recordform:{},
            rules: {
                name: [
                    { required: true, message: "请输入站点姓名", trigger: "blur" }
                ],
                en_name: [
                    { required: true, message: "请输入英文标识", trigger: "blur" }
                ],
                zone_id: [
                    { required: true, message: "请选择区域", trigger: "blur" }
                ],
                logo: [
                    { required: true, message: "请选择logo", trigger: "blur" }
                ],
                site_manager_name: [
                    { required: true, message: "请输入负责人姓名", trigger: "blur" }
                ],
                site_manager_phone: [
                    { required: true, message: "请输入负责人手机号", trigger: "blur" }
                ]
            }
        }
    },
    computed: {
      VUE_APP_BASE_API(){
        return this.imgurl2
      },
      ...mapGetters([
        'sidebar',
        'avatar',
        'device',
        'u_info'
        ])
    },
    created() {
        this.form={
                name: "",
                en_name: "",
                logo: "",
                status:"",
                introduction:"",
                site_manager_name:'',
                site_manager_phone:'',
                extra:{
                  uni_site:''
                },
            };
        this.getinfo();
    },
    methods:{
        updateView(e) {
            this.$forceUpdate()
        },
        getinfo(){
            getsitesinfo(this.u_info.site_id).then(response=>{
              console.log(response)
                this.form = JSON.parse(JSON.stringify(response.data));
                this.$set(this.form,'site_manager_name',this.form.user.name);
                this.$set(this.form,'site_manager_phone',this.form.user.phone);

                this.recordform = JSON.parse(JSON.stringify(response.data));
                this.$set(this.recordform,'site_manager_name',this.recordform.user.name);
                this.$set(this.recordform,'site_manager_phone',this.recordform.user.phone);

                if(!this.form.extra){
                  this.form.extra={};
                  this.form.extra.uni_site = '';
                }
            })
        },
        reset(){
            this.form = JSON.parse(JSON.stringify(this.recordform));
            this.$message({
                type:"success",
                message:"已重置"
            })
            console.log(this.recordform)
        },
        save(){
            this.$refs["dataForm"].validate((valid) => {
                if (!valid) return;
                editsites(this.u_info.site_id,this.form).then(response => {
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                }).then(
                  (res) => {
                    this.editflag = true;
                    this.getinfo();
                  },  // 成功
                  (err) => {} // 失败
                )
                //
            })
        },
        editfn(){
            this.editflag = false;
        },
        handleAvatarSuccess(response, file, fileList) {
            this.form.logo = response.path;
            this.$forceUpdate();
        },
        beforeAvatarUpload(file) {
            const isLt = file.size / 1024 / 1024 < 20;
            if (!isLt) {
            this.$message.error('上传头像图片大小不能超过 20MB!');
            }
            return isLt;
        },
    }
  }

</script>
<style lang="scss">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
.notallowed .el-upload:hover {
    border-color: #d9d9d9;
    cursor: not-allowed;
}
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>



<style scoped>
.clearflex {
    *zoom: 1;
}

.clearflex:after {
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.fl-right{
  float: right;
}


</style>
