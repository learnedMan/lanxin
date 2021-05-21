<template>
  <div class="appversion">
    <el-button type="primary" @click="back" size="mini">返回上一级</el-button>
    <el-button type="primary" @click="adddata" size="mini">添加</el-button>
    <el-table
      style="margin-top: 20px"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
      v-loading="loading"
      :data="dataList"
    >
      <el-table-column label="ID" width="100px" align="center" prop="id" />
      <el-table-column
        label="应用名称"
        width="100px"
        align="center"
        prop="id"
      />
      <el-table-column
        label="应用LOGO"
        width="150px"
        align="center"
        prop="name"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <img
            :src="scope.row.name"
            alt=""
            style="width: 50px; height: 50px; border-radius: 50%"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="终端"
        align="center"
        prop="name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="版本"
        align="center"
        prop="type"
        :show-overflow-tooltip="true"
      />
      <el-table-column 
        label="状态" 
        align="center" 
        prop="name" 
        :show-overflow-tooltip="true" >
        <template slot-scope="scope">
          <el-select v-model="scope.row.name" placeholder="请选择">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="下载地址"
        align="center"
        prop="type"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="创建时间"
        align="center"
        prop="created_at"
        :show-overflow-tooltip="true"
      />
      <el-table-column width="240px" label="操作" align="left">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color: #e6a23c"
            @click="editdata(scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            style="color: #f56c6c"
            @click="deldata(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
    <el-dialog
      width="800px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      top="10vh"
      :visible.sync="dialogFormVisible"
    >
        <el-form
            :model="form"
            :rules="rules"
            ref="dataForm">
            <el-form-item label-width="150px" label="应用名称" prop="name">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入产品名称"
                v-model="form.name"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="应用Logo:" prop="name">
                <el-upload
                class="avatar-uploader"
                :action="VUE_APP_BASE_API + '/api/upload/image'"
                :headers="importHeaders"
                name="image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess.bind(this,'cover')"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.name" :src="form.name" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item el-form-item  label-width="150px" label="终端:" prop="name">
                <el-select v-model="form.name" placeholder="请选择">
                <el-option v-for="item in platformoptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label-width="150px" label="安卓版本" prop="name">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入产品名称"
                v-model="form.name"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="应用介绍" prop="name">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入应用介绍"
                v-model="form.name"
                :autosize="{ minRows: 4}"
                type="textarea"
                ></el-input>
            </el-form-item>
            <el-form-item label-width="150px" label="新特性" prop="name">
                <el-input
                style="width: 350px"
                autocomplete="off"
                placeholder="请输入应用介绍"
                v-model="form.name"
                :autosize="{ minRows: 4}"
                type="textarea"
                ></el-input>
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
import {} from "@/api/manage";
export default {
  name: "appversion",
  props: {
    page2id: {
      type: Number,
      default: 0,
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
          label: "苹果",
        },
      ],
      loading: false,
      form: {},
      dataList: [{"name":1}],
      rules: {},
      queryParams: {
        page: 1,
        pageSize: 10,
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
  },
  computed: {
    VUE_APP_BASE_API() {
      return process.env.VUE_APP_BASE_API;
    },
  },
  methods: {
    handleAvatarSuccess(name, res) {
      this.form.name = res.path;
      this.$forceUpdate();
    },
    beforeAvatarUpload(file) {
      const isLt = file.size / 1024 / 1024 < 20;
      if (!isLt) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isLt;
    },
    back() {
      this.$parent.showpage = 1;
    },
    getList() {},
    // 初始化表单
    initForm() {
      if (this.$refs.dataForm) {
        this.$refs.dataForm.resetFields();
      }
      this.form= {
        name: "",
        type:"",
      };
    },
    adddata() {
      this.initForm();
      this.dialogTitle = "新增版本";
      this.dialogType = "add";
      this.dialogFormVisible = true;
    },
    // 关闭窗口
    closeDialog() {
      this.initForm();
      this.dialogFormVisible = false;
    },
    // 确定弹窗
    enterDialog() {
      this.initForm();
      this.dialogFormVisible = false;
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