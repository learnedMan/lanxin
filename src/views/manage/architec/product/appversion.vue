<template>
  <div class="appversion">
      <el-form ref="queryForm" :model="queryParams" :inline="true">
        <el-form-item label="终端">
          <el-select clearable v-model="queryParams.platform" placeholder="请选择">
            <el-option
              v-for="item in platformoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="版本：">
          <el-input
            v-model="queryParams.version_code"
            placeholder="请输入版本号"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery" size="mini"
            >搜索</el-button>
          <el-button type="info" @click="initcondition" size="mini"
            >重置</el-button>
            <el-button type="primary" @click="adddata" size="mini">添加</el-button>
            <el-button type="primary" @click="back" size="mini">返回上一级</el-button>
        </el-form-item>
      </el-form>
    <el-table
      style="margin-top: 20px"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
      v-loading="loading"
      :data="dataList">
      <el-table-column label="ID" width="100px" align="center" prop="id" />
      <el-table-column
        label="应用名称"
        width="100px"
        align="center"
        prop="name"/>
      <el-table-column
        label="应用LOGO"
        width="150px"
        align="center"
        prop="logo"
        :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <img
            :src="scope.row.logo"
            alt=""
            style="width: 50px; height: 50px; border-radius: 50%" />
        </template>
      </el-table-column>
      <el-table-column
        label="终端"
        align="center"
        prop="platform"
        :show-overflow-tooltip="true"/>
      <el-table-column
        label="版本"
        align="center"
        prop="version_code"
        :show-overflow-tooltip="true"/>
      <el-table-column
        label="下载地址"
        align="center"
        prop="url"
        :show-overflow-tooltip="true"/>
      <el-table-column
        label="创建时间"
        align="center"
        prop="created_at"
        :show-overflow-tooltip="true"/>
      <el-table-column width="200px" label="操作" align="center">
        <template slot-scope="scope">
          <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
          <Iconbutton icontype="sc" label="删除" @fatherMethod="deldata(scope.row)"></Iconbutton>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"/>
    <el-dialog
      width="800px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      top="2vh"
      :visible.sync="dialogFormVisible">
        <el-form
            :model="form"
            :rules="rules"
            ref="dataForm">
            <el-form-item label-width="150px" label="应用名称：" prop="name">
                <el-input
                disabled
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入产品名称"
                v-model="form.name"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="应用Logo:" prop="logo">
                <el-upload
                class="avatar-uploader"
                :action="VUE_APP_BASE_API + '/api/upload/image'"
                :headers="importHeaders"
                name="image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess.bind(this,'logo')"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.logo" :src="form.logo" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item el-form-item  label-width="150px" label="终端：" prop="platform">
                <el-select v-model="form.platform" placeholder="请选择">
                <el-option v-for="item in platformoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label-width="150px" :label="form.platform=='Android'?'安卓版本：':'ios版本：'" prop="version_code">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入产品名称"
                v-model="form.version_code"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="应用介绍：" prop="intro">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入应用介绍"
                v-model="form.intro"
                :autosize="{ minRows: 4}"
                type="textarea"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="新特性：" prop="new_features">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入应用介绍"
                v-model="form.new_features"
                :autosize="{ minRows: 4}"
                type="textarea"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="是否强制更新：" prop="status">
                <el-radio-group v-model="form.status">
                    <el-radio :label="0">不启用</el-radio>
                    <el-radio :label="1">不强更</el-radio>
                    <el-radio :label="2">强更</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- ios版本：url2 -->
            <el-form-item v-show="form.platform!='Android'" label-width="150px" label="APP Store链接：" prop="url">
                <el-input
                style="width: 500px"
                autocomplete="off"
                placeholder="请输入"
                v-model="form.url"
                ></el-input>
            </el-form-item>
            <!-- 安卓版本：url2 -->
            <el-form-item v-if="form.platform=='Android'" label-width="150px" label="Android APK包：" prop="url2">
                <!-- <el-input
                style="width: 500px"
                autocomplete="off"
                :disabled="form.platform=='Android'"
                placeholder=""
                v-model="form.url2"
                ></el-input> -->
                <uploadfile v-if="dialogFormVisible" v-model = "form.url2"  />
                <!-- <el-upload
                    style="display:inline;margin-left:20px;"
                    class="upload-demo"
                    :action="VUE_APP_BASE_API + '/api/upload/image'"
                    :headers="importHeaders"
                    :on-success="handleAvatarSuccess.bind(this,'url2')"
                    :limit="1"
                    :before-remove="beforeRemove"
                    name="image">
                    <el-button size="small" type="primary">添加</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传一个包，若已存在，请删除后再重新上传</div>
                </el-upload> -->
            </el-form-item>
        </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>

    
  </div>
</template>

<script>
import uploadfile from '../uploadFile/uploadFile'
import {
    addproduct_versions,
    getproduct_versions,
    delproduct_versions,
    editproduct_versions
} from "@/api/manage";
export default {
  name: "appversion",
  components: {
      uploadfile
  },
  props: {
    page2id: {
      type: Number,
      default: 0,
    },
    appname: {
      type: String,
      default: '',
    },
  },
  data() {
    var mytoken = sessionStorage.getItem("token");
    return {
      importHeaders: { Authorization: mytoken }, //传图片时的token
      statusoptions: [
        {
          value: 1,
          label: "启用",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
      platformoptions:[
        {
          value: 'Android',
          label: "安卓",
        },
        {
          value: 'iOS',
          label: "ios",
        },
      ],
      loading: false,
      form: {},
      dataList: [],
      rules: {
          logo: [{ required: true, message: "请选择应用logo", trigger: "blur" }],
          platform: [{ required: true, message: "请选择终端", trigger: "blur" }],
          version_code: [{ required: true, message: "请选择app版本", trigger: "blur" }],
          new_features: [{ required: true, message: "请输入新特性", trigger: "blur" }],
          status: [{ required: true, message: "请选择是否要强制更新", trigger: "blur" }],
      },
      queryParams: {
        page: 1,
        pageSize: 10,
        version_code:'',
        platform:'',
        product_id:this.page2id,
      },
      dialogTitle:'',
      dialogType:'',
      // 总条数
      total: 0,
      dialogFormVisible:false
    };
  },
  created() {
      this.initForm()
      this.getList()
  },
  computed: {
    VUE_APP_BASE_API() {
      return process.env.VUE_APP_BASE_API;
    }
  },
  methods: {
    initcondition() {//重置
      this.queryParams.version_code = "";
      this.queryParams.platform = "";
    },
    /** 搜索按钮操作 */
    handleQuery() {
      console.log(this.page2id)
      this.loading = true;
      this.queryParams.page = 1;
      this.getList();
    },
    handleAvatarSuccess(name, res) {
    console.log(res)
      this.form[name] = res.path;
      this.$forceUpdate();
    },
    beforeAvatarUpload(file) {
      const isLt = file.size / 1024 / 1024 < 20;
      if (!isLt) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isLt;
    },
    beforeRemove(){
        this.form.url2='';
    },
    back() {
      this.$parent.showpage = 1;
    },
    getList() {
        this.loading = true;
        getproduct_versions(this.queryParams).then(response => {
          this.loading = false;
          this.dataList = response.data;
          this.total = response.total;
        })
    },
    deldata(row){
      console.log(row)
      this.$confirm('此操作将永久删除id为'+row.id+'的版本, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delproduct_versions(row.id).then(response => {
              this.$message({
                message: '删除成功',
                type: 'success'
              });
              this.getList();
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    // 初始化表单
    initForm() {
        if (this.$refs.dataForm) {
            this.$refs.dataForm.resetFields();
        }
        this.form= {
            product_id:this.page2id,
            name: this.appname,
            platform: "Android",
            version_code: "",
            logo:"",
            status:0,
            url:"",
            url2:"",
            apk:"",
            new_features:"",
            intro:""
        }
    },
    adddata() {
      this.initForm();
      this.dialogTitle = "新增版本";
      this.dialogType = "add";
      this.dialogFormVisible = true;
    },
    // 编辑版本
    editdata(row) {
      this.initForm();
      this.dialogTitle = "编辑版本";
      this.dialogType = "edit";
      this.form = JSON.parse(JSON.stringify(row))
      if(this.form.platform=='Android'){
        this.form.url2 = this.form.url;
        this.form.url = '';
      }
      this.dialogFormVisible = true;
    },
    // 关闭窗口
    closeDialog() {
      this.initForm();
      this.dialogFormVisible = false;
    },
    // 确定弹窗
    enterDialog() {
        this.$refs["dataForm"].validate((valid) => {
          if (!valid) return;
          var data = JSON.parse(JSON.stringify(this.form));
          if(data.platform=='Android'){
              data.url = data.url2;
          }
          if (this.dialogType=='edit') {
            //修改
            editproduct_versions(data.id,data).then(response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }else{
            //新增
            addproduct_versions(data).then(response => {
                  this.$message({
                    message: '添加成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false;
                  this.getList();
            })
          }
        })
    },
  },
};
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
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}

.placeholderdiv input::-webkit-input-placeholder {
  color: #717171 !important;
}
.placeholderdiv input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #717171 !important;
}
.placeholderdiv input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #717171 !important;
}
.placeholderdiv input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #717171 !important;
}
</style>



<style scoped lang="scss">
.clearflex {
  *zoom: 1;
}

.clearflex:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.fl-right {
  float: right;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

.role-box {
  .el-tabs__content {
    height: calc(100vh - 150px);
    overflow: auto;
  }
}
</style>