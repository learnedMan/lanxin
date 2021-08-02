<template>
  <div class="architec-site">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="站点名称：">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态：">
        <el-select v-model="queryParams.status" placeholder="请选择">
          <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
          <el-button type="primary" @click="initcondition" size="mini" >重置</el-button>
          <el-button type="primary" @click="adddata" size="mini" >新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      border v-loading="loading" :data="dataList">
      <el-table-column label="站点id" align="center" prop="id" />
      <el-table-column label="站点名称" align="center" prop="name" :show-overflow-tooltip="true" />
      <el-table-column label="站点标识" align="center" prop="en_name" :show-overflow-tooltip="true" />
      <el-table-column label="站点负责人" align="center" prop="user.name" :show-overflow-tooltip="true" />
      <el-table-column label="负责人电话" align="center" prop="user.phone" :show-overflow-tooltip="true" />
      <el-table-column
        label="状态"
        align="center"
        prop="status"
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select @change="statuschange(scope.row)" v-model="scope.row.status" placeholder="请选择">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" align="center" prop="created_at" :show-overflow-tooltip="true" />
      <el-table-column label="上次登录时间" align="center" prop="updated_at" :show-overflow-tooltip="true" />
      <el-table-column width="200px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <!-- 新增/修改站点弹窗 -->
    <el-dialog width="1400px"
    :close-on-click-modal = false
    :title="dialogTitle" :visible.sync="dialogFormVisible">
      <el-form style="display:flex;" :model="form" :rules="rules" ref="dataForm">

        <div class="form-l" style="width:50%;padding-left:100px;">
          <el-form-item  label-width="120px" label="站点名称" prop="name">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入站点名称" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="英文标识" prop="en_name">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入英文标识" v-model="form.en_name"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="区域选择" prop="zone_id">
              <el-select v-model="form.zone_id" placeholder="请选择">
                <el-option v-for="item in zoneoptions" :key="item.id" :label="item.description" :value="item.id">
                </el-option>
              </el-select>
          </el-form-item>

          <el-form-item  label-width="120px" label="基础点击量随机" prop="extra.random_view_range">
            <el-input-number
            @input="forceUpdate()"
            :precision="0"
            :max="form.extra.random_view_range.max || 0"
            :controls="false"
            v-model="form.extra.random_view_range.min"></el-input-number>
            ~
            <el-input-number
            @input="forceUpdate()"
            :precision="0"
            :min="form.extra.random_view_range.min || 0"
            :controls="false"
            v-model="form.extra.random_view_range.max"></el-input-number>
          </el-form-item>
          <el-form-item  label-width="120px" label="点击量系数" prop="extra.multiplying_factor">
            <el-input-number
            @input="forceUpdate()"
            :precision="0"
            :controls="false"
            v-model="form.extra.multiplying_factor"></el-input-number>
          </el-form-item>
          <el-form-item  label-width="120px" label="LOGO："  prop="logo">
            <el-upload
              class="avatar-uploader"
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
            <upload-single v-model="form.extra.watermark" />
          </el-form-item>
        </div>
        <div class="form-r" style="width:50%;padding-left:50px;">
          <el-form-item  label-width="120px" label="分享页域名" prop="extra.share_page_domain">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入分享页域名" v-model="form.extra.share_page_domain"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="蓝云租户" prop="extra.uni_site">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入蓝云租户" v-model="form.extra.uni_site"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="VMS租户" prop="extra.vms_site_id">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入VMS租户" v-model="form.extra.vms_site_id"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据签名" prop="extra.bigdata_settings.signature">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入大数据签名" v-model="form.extra.bigdata_settings.signature"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据租户ID" prop="extra.bigdata_settings.customer_id">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入大数据租户ID" v-model="form.extra.bigdata_settings.customer_id"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据产品ID" prop="extra.bigdata_settings.product_id">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入大数据产品ID" v-model="form.extra.bigdata_settings.product_id"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="大数据秘钥" prop="extra.bigdata_settings.secret">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入大数据秘钥" v-model="form.extra.bigdata_settings.secret"></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="负责人姓名" prop="site_manager_name">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入负责人姓名"  v-model="form.site_manager_name" ></el-input>
          </el-form-item>
          <el-form-item label-width="120px" label="负责人手机号" prop="site_manager_phone">
            <el-input style="width: 300px" autocomplete="off" placeholder="请输入负责人手机号" v-model="form.site_manager_phone"></el-input>
          </el-form-item>
          <el-form-item  label-width="120px" label="简介" prop="introduction">
            <el-input type="textarea" style="width: 300px" autocomplete="off" placeholder="请输入简介" v-model="form.introduction"></el-input>
          </el-form-item>
          <el-form-item el-form-item  label-width="120px" label="是否启用" prop="status">
            <el-select v-model="form.status" placeholder="请选择">
              <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item el-form-item  label-width="120px" label="允许外部人员直接发布稿件" prop="extra.allow_www_publish">
            <el-select v-model="form.extra.allow_www_publish" placeholder="请选择">
              <el-option v-for="item in outloginoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        
        
      </el-form>

      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import {
  getsites,
  addsites,
  editsites,
  getzones
  } from '@/api/manage'
import { validUsername , validEmail } from '@/utils/validate'
import { parse } from 'path-to-regexp';
import uploadSingle from '@/components/Upload/uploadSingle.vue'
  export default {
    name: 'architec-site',
    data() {
      var mytoken = sessionStorage.getItem('token');
      var data = {
      }
      return {
        importHeaders: {Authorization: mytoken},//传图片时的token
        // 查询参数
        queryParams: {
          page: 1,
          pageSize: 10,
          name:"",
          status:""
        },
        loading:true,
        dataList:[],
        zoneoptions:[],
        // 总条数
        total: 0,
        statusoptions: [{
          value: 1,
          label: '是'
        },{
          value: 0,
          label: '否'
        }],
        outloginoptions: [{
          value: '1',
          label: '是'
        },{
          value: '0',
          label: '否'
        }],
        dialogFormVisible: false,
        form: {},
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
        },
        dialogType: "add",
        dialogTitle:'',
        multipleSelection:[]//选中数组
      }
    },
    components: {
      uploadSingle
    },
    computed: {
      VUE_APP_BASE_API(){
          return this.imgurl2
      }
    },
    created() {
      this.initForm()
      this.getList();
      this.getzones();
    },
    methods:{
      forceUpdate(){
        this.$forceUpdate();
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
      initcondition(){
        this.queryParams.name="";
        this.queryParams.status="";
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.loading = true;
        this.queryParams.page = 1;
        this.getList();
      },
      getzones(){
        getzones().then(response => {
          this.zoneoptions = response.data;
          // console.log(this.zoneoptions)
        })
      },
      getList(){
        var data = JSON.parse(JSON.stringify(this.queryParams));
        var removePropertyOfNull=function(obj){
            Object.keys(obj).forEach(item=>{
                if(!obj[item])  delete obj[item]
            })
            return obj;
        }
        removePropertyOfNull(data)
        getsites(data).then(response => {
          // console.log(response)
          this.loading = false;
          this.dataList = response.data;
          this.total = response.meta.pagination.total;
        })
      },
      statuschange(data){
        editsites(data.id,data).then(response => {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          this.getList();
        })
      },
      adddata(){
        this.initForm();
        console.log(this.form)
        this.dialogTitle = "新增站点";
        this.dialogType = "add";
        this.dialogFormVisible = true;
      },
      // 初始化表单
      initForm() {
          if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
          }
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
                share_page_domain: '',
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
                multiplying_factor:''
            }
          }
      },
      // 编辑站点
      editdata(row) {
        this.initForm();
        this.dialogTitle = "编辑站点";
        this.dialogType = "edit";
        this.$nextTick(() => {
          // for (let key in row) {
          //   this.form[key] = row[key];
          // }
          this.form = JSON.parse(JSON.stringify(row))
          console.log(this.form)
          this.form.site_manager_name = this.form.user.name
          this.form.site_manager_phone = this.form.user.phone;

          if(!this.form.extra){
            this.form.extra={};
            this.form.extra.uni_site = '';
          }
          if(!this.form.extra.multiplying_factor){
            this.form.extra.multiplying_factor = ''
            this.form.extra.random_view_range = {}
            this.form.extra.random_view_range.min = ''
            this.form.extra.random_view_range.max = ''
          }
          if(!this.form.extra.bigdata_settings) {
            this.form.extra.bigdata_settings = {
              signature: '',
              customer_id: '',
              product_id: '',
              secret:''
            }
          }
        })


        this.dialogFormVisible = true;
      },
      // 关闭窗口
      closeDialog() {
        this.initForm();
        this.dialogFormVisible = false;
      },
      // 确定弹窗
      enterDialog() {
        // if(!validUsername(this.form.phone)){
        //     this.$message({
        //       message: '请输入正确的手机号',
        //       type: 'error'
        //     })
        //     return
        // }
        // if(this.form.email){
        //   if(!validEmail(this.form.email)){
        //     this.$message({
        //       message: '请输入正确的邮箱',
        //       type: 'error'
        //     })
        //     return
        //   }
        // }
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          if (this.dialogType=='edit') {
            //修改
            // console.log(this.form)
            var data = this.form;
            editsites(data.id,data).then(response => {
              // if (response.status_code >= 200 && response.status_code < 300) {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
              // }else {
              //     this.$message({
              //       message: response.message,
              //       type: 'warning'
              //     });
              // }
            })
          }else{
            // 新增
            var data = JSON.parse(JSON.stringify(this.form));
            var removePropertyOfNull=function(obj){
                Object.keys(obj).forEach(item=>{
                    if(!obj[item])  delete obj[item]
                })
                return obj;
            }
            removePropertyOfNull(data)
            // console.log(data)
            // return
            addsites(data).then(response => {
              // if (response.status_code >= 200 && response.status_code < 300) {
                  this.$message({
                    message: '新建成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
              // }else {
              //     this.$message({
              //       message: response.message,
              //       type: 'warning'
              //     });
              // }
            })
          }
        })
      }
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
