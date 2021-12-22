<template>
  <div class="channel-info" style="padding-top:80px;">
      <!-- <el-form :model="form" :rules="rules" ref="dataForm">
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
      </el-form> -->
        
         <el-form style="display:flex;" :model="form" :rules="rules" ref="dataForm">

        <div class="form-l" style="width:50%;padding-left:100px;">
          <el-form-item  label-width="120px" label="站点名称" prop="name">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入站点名称" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="英文标识" prop="en_name">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入英文标识" v-model="form.en_name"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="区域选择" prop="zone_id">
              <el-select :disabled="editflag" v-model="form.zone_id" placeholder="请选择">
                <el-option v-for="item in zoneoptions" :key="item.id" :label="item.description" :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>

          <el-form-item style="width: 120%"  label-width="120px" label="基础点击量随机" prop="extra.random_view_range">
            <el-input-number
            :disabled="editflag"
            @input="forceUpdate()"
            :precision="0"
            :max="form.extra.random_view_range.max || 0"
            :controls="false"
            v-model="form.extra.random_view_range.min"></el-input-number>
            ~
            <el-input-number
            :disabled="editflag"
            @input="forceUpdate()"
            :precision="0"
            :min="form.extra.random_view_range.min || 0"
            :controls="false"
            v-model="form.extra.random_view_range.max"></el-input-number>
          </el-form-item>
          <el-form-item  label-width="120px" label="点击量系数" prop="extra.multiplying_factor">
            <el-input-number
            :disabled="editflag"
            @input="forceUpdate()"
            :precision="0"
            :controls="false"
            v-model="form.extra.multiplying_factor"></el-input-number>
          </el-form-item>
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
          <el-form-item  label-width="120px" label="水印："  prop="extra.watermark">
            <upload-single  :class="editflag?'notallowed':''" :disabled="editflag" v-model="form.extra.watermark" />
          </el-form-item>
          <el-form-item  label-width="120px" label="云媒资站点标签配置" prop="blue_cloud_tag">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入云媒资站点标签配置" v-model="form.extra.blue_cloud_tag"></el-input>
          </el-form-item>
           <el-form-item el-form-item  label-width="120px" label="允许h5页面复制" prop="extra.allow_h5_copy">
            <el-select :disabled="editflag" v-model="form.extra.allow_h5_copy" placeholder="请选择">
              <el-option  v-for="item in outloginoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form-r" style="width:50%;padding-left:50px;">
          <el-form-item  label-width="120px" label="个性化域名" prop="extra.custom_domain">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入个性化域名" v-model="form.extra.custom_domain"></el-input>
          </el-form-item>
           <el-form-item  label-width="120px" label="预览域名" prop="extra.preview_domain">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入预览域名" v-model="form.extra.preview_domain"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="蓝云租户" prop="extra.uni_site">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入蓝云租户" v-model="form.extra.uni_site"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="VMS租户" prop="extra.vms_site_id">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入VMS租户" v-model="form.extra.vms_site_id"></el-input>
          </el-form-item>
          <el-form-item :disabled="editflag"  label-width="120px" label="大数据签名" prop="extra.bigdata_settings.signature">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入大数据签名" v-model="form.extra.bigdata_settings.signature"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据租户ID" prop="extra.bigdata_settings.customer_id">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入大数据租户ID" v-model="form.extra.bigdata_settings.customer_id"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据产品ID" prop="extra.bigdata_settings.product_id">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入大数据产品ID" v-model="form.extra.bigdata_settings.product_id"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据秘钥" prop="extra.bigdata_settings.secret">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入大数据秘钥" v-model="form.extra.bigdata_settings.secret"></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="负责人姓名" prop="site_manager_name">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入负责人姓名"  v-model="form.site_manager_name" ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="负责人手机号" prop="site_manager_phone">
            <el-input :disabled="editflag" style="width: 300px" autocomplete="off" placeholder="请输入负责人手机号" v-model="form.site_manager_phone"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="简介" prop="introduction">
            <el-input :disabled="editflag" type="textarea" style="width: 300px" autocomplete="off" placeholder="请输入简介" v-model="form.introduction"></el-input>
          </el-form-item>
          <el-form-item el-form-item  label-width="120px" label="是否启用" prop="status">
            <el-select :disabled="editflag" v-model="form.status" placeholder="请选择">
              <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item el-form-item  label-width="120px" label="允许外部人员直接发布稿件" prop="extra.allow_www_publish">
            <el-select :disabled="editflag" v-model="form.extra.allow_www_publish" placeholder="请选择">
              <el-option v-for="item in outloginoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item el-form-item  label-width="120px" label="敏感词开关" prop="extra.enable_sensitive_word_filter">
            <el-select :disabled="editflag" v-model="form.extra.enable_sensitive_word_filter" placeholder="请选择">
              <el-option v-for="item in sensitiveWordoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        
        
      </el-form>
        
        
        <div style="padding-top:30px;padding-left:50px;">
            <el-button v-points = "1500" @click="editfn" :disabled="!editflag" type="success" size="mini">编辑</el-button>
            <el-button v-points = "1500" @click="reset" :disabled="editflag" type="info" size="mini" >重置</el-button>
            <el-button v-points = "1500" @click="save" :disabled="editflag" type="primary" size="mini" >保存</el-button>
        </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  getsitesinfo,
  getzones,
  editsites
  } from '@/api/manage'
  import uploadSingle from '@/components/Upload/uploadSingle.vue'
  export default {
    name: 'channel-info',
     components: {
      uploadSingle
    },
    data() {
        var mytoken = sessionStorage.getItem('token');
        return {
            importHeaders: {Authorization: mytoken},//传图片时的token
            editflag:true,
            form: {
            },
            zoneoptions:[],
            outloginoptions: [{
              value: '1',
              label: '是'
            },{
              value: '0',
              label: '否'
            }],
            statusoptions: [{
              value: 1,
              label: '是'
            },{
              value: 0,
              label: '否'
            }],
            sensitiveWordoptions: [{
              value: '1',
              label: '启用'
            },{
              value: '0',
              label: '禁用'
            }],
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
        // this.form={
        //         name: "",
        //         en_name: "",
        //         logo: "",
        //         status:"",
        //         introduction:"",
        //         site_manager_name:'',
        //         site_manager_phone:'',
        //         extra:{
        //           uni_site:''
        //         },
        //     };
         this.form = {
            name: "",
            en_name: "",
            logo: "",
            status:1,
            introduction:"",
            site_manager_name:'',
            site_manager_phone:'',
            extra: {
                watermark: '',
                uni_site:'',
                vms_site_id:'',
                custom_domain: '',
                preview_domain: '',
                blue_cloud_tag: '',
                enable_sensitive_word_filter: '0',
                allow_h5_copy: '0',
                bigdata_settings: {
                  signature: '',
                  customer_id: '',
                  product_id: '',
                  secret:''
                },
                random_view_range: {
                    min:'',
                    max:''
                },
                multiplying_factor:1
            }
          }
        this.getinfo();
        this.getzones();
    },
    methods:{
        updateView(e) {
            this.$forceUpdate()
        },
        forceUpdate(){
        this.$forceUpdate();
      },
       getzones(){
        getzones().then(response => {
          this.zoneoptions = response.data;
          // console.log(this.zoneoptions)
        })
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
