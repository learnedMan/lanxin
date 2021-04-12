<template>
  <div class="product">
    <el-form ref="queryForm" :model="queryParams" :inline="true">
      <el-form-item label="产品名称：">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="产品类型：">
        <el-select v-model="queryParams.type" placeholder="请选择">
          <el-option
            v-for="item in productoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery" size="mini"
          >搜索</el-button
        >
        <el-button type="info" @click="initcondition" size="mini"
          >重置</el-button
        >
        <el-button type="primary" @click="adddata" size="mini">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      border
      v-loading="loading"
      :data="dataList"
    >
      <el-table-column label="产品id" width="100px" align="center" prop="id" />

      <el-table-column
        label="产品LOGO"
        width="150px"
        align="center"
        prop="extra.logo"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <img
            :src="scope.row.extra.logo || productavatar"
            alt=""
            style="width: 50px; height: 50px; border-radius: 50%"
          />
        </template>
      </el-table-column>

      <el-table-column
        label="产品名称"
        align="center"
        prop="name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="产品类型"
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
      <el-table-column
        label="上次登录时间"
        align="center"
        prop="updated_at"
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
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color: #67c23a"
            @click="editdata(scope.row)"
            >安卓</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            style="color: #67c23a"
            @click="editdata(scope.row)"
            >苹果</el-button
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
    <!-- 新增/修改产品弹窗 -->
    <el-dialog
      width="1200px"
      :close-on-click-modal="false"
      :title="dialogTitle"
      top="10vh"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="form"
        :rules="rules"
        ref="dataForm"
        style="display: flex"
      >
        <div class="fl" style="width: 50%">
          <el-form-item label-width="150px" label="产品名称" prop="name">
            <el-input
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入产品名称"
              v-model="form.name"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="产品类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option
                v-for="item in productoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label-width="150px" label="source_id" prop="source_id">
            <el-input
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入source_id"
              v-model="form.source_id"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="150px" label="产品LOGO：" prop="extra.logo">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'logo')"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.extra.logo" :src="form.extra.logo" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label-width="150px" label="深色背景Logo" prop="extra.logo_dark">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'logo_dark')"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.extra.logo_dark" :src="form.extra.logo_dark" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label-width="150px" label="产品简介" prop="extra.introduction">
            <el-input
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入产品简介"
              v-model="form.extra.introduction"
              :autosize="{ minRows: 4}"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="评论控制" prop="extra.comment_control">
                <el-radio-group v-model="form.extra.comment_control">
                    <el-radio :label="3">不做控制</el-radio>
                    <el-radio :label="1">先发后审</el-radio>
                    <el-radio :label="2">先审后发</el-radio>
                    <el-radio :label="0">禁止评论</el-radio>
                </el-radio-group>
          </el-form-item>
        </div>

        <div class="fr" style="width: 50%">
            <el-form-item label-width="150px" label="水印" prop="extra.watermark">
            <el-upload
              class="avatar-uploader"
              :action="VUE_APP_BASE_API + '/api/upload/image'"
              :headers="importHeaders"
              name="image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess.bind(this,'watermark')"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.extra.watermark" :src="form.extra.watermark" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label-width="150px" label="水印位置" prop="extra.watermark_position">
            <el-select v-model="form.extra.watermark_position" placeholder="请选择">
              <el-option
                v-for="item in watermarkoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label-width="150px" label="用户协议" prop="extra.user_policy">
            <el-input
              type="textarea"
              style="width: 350px"
              :autosize="{ minRows: 4}"
              autocomplete="off"
              placeholder="请输入用户协议"
              v-model="form.extra.user_policy"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="隐私政策" prop="extra.privacy_policy">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4}"
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入隐私政策"
              v-model="form.extra.privacy_policy"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="朋友圈用户协议" prop="extra.moment_policy">
            <el-input
              type="textarea"
              :autosize="{ minRows: 4}"
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入朋友圈用户协议"
              v-model="form.extra.moment_policy"
            ></el-input>
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
import { getproduct , addproducts , editproducts , delproducts } from "@/api/manage";
export default {
  name: "product",
  data() {
    var mytoken = sessionStorage.getItem("token");
    return {
      importHeaders: { Authorization: mytoken }, //传图片时的token
      productavatar: require("@/assets/c_images/product.png"), //默认logo
      // 查询参数
      queryParams: {
        page: 1,
        pageSize: 10,
        name: "",
        type: "",
      },
      loading: true,
      dataList: [],
      // 总条数
      total: 0,
      productoptions: [
        {
          value: "app",
          label: "App",
        },
        {
          value: "web",
          label: "网站",
        },
        {
          value: "wap",
          label: "Wap",
        },
        {
          value: "wechat",
          label: "微信",
        },
        {
          value: "weibo",
          label: "微博",
        },
        {
          value: "other",
          label: "其他",
        },
      ],
      watermarkoptions:[
        {
          value: "nw",
          label: "左上",
        },
        {
          value: "north",
          label: "中上",
        },
        {
          value: "ne",
          label: "右上",
        },
        {
          value: "west",
          label: "左",
        },
        {
          value: "center",
          label: "中",
        },
        {
          value: "east",
          label: "右",
        },
        {
          value: "sw",
          label: "左下",
        },
        {
          value: "south",
          label: "中下",
        },
        {
          value: "se",
          label: "右下",
        }
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        type:"",
        source_id:"",
        extra:{
            logo:"",
            logo_dark:"",
            introduction:"",
            comment_control:"",
            watermark:"",
            watermark_position:"",
            user_policy:"",
            privacy_policy:"",
            moment_policy:""
        }
      },
      rules: {
        name: [{ required: true, message: "请输入产品姓名", trigger: "blur" }],
        type: [{ required: true, message: "请选择产品类型", trigger: "blur" }],
        'extra.logo': [{ required: true, message: "请选择产品logo", trigger: "blur" }],
        'extra.watermark': [{ required: true, message: "请选择水印", trigger: "blur" }],
        'extra.watermark_position': [{ required: true, message: "请选择水印位置", trigger: "blur" }],
        'extra.user_policy': [{ required: true, message: "请输入用户协议", trigger: "blur" }],
        'extra.privacy_policy': [{ required: true, message: "请输入隐私政策", trigger: "blur" }],
      },
      dialogType: "add",
      dialogTitle: ""
    };
  },
  computed: {
    VUE_APP_BASE_API() {
      return process.env.VUE_APP_BASE_API;
    },
  },
  created() {
    this.getList();
    this.initForm()
  },
  methods: {
    handleAvatarSuccess(name,res) {
      this.form.extra[name] = res.path;
    },
    beforeAvatarUpload(file) {
      const isLt = file.size / 1024 / 1024 < 20;
      if (!isLt) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isLt;
    },
    initcondition() {//重置
      this.queryParams.name = "";
      this.queryParams.type = "";
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.loading = true;
      this.queryParams.page = 1;
      this.getList();
    },
    getList() {
      var data = JSON.parse(JSON.stringify(this.queryParams));
      this.removePropertyOfNull(data)
      getproduct(data).then((response) => {
        // console.log(response);
        this.loading = false;
        this.dataList = response.data;
        this.total = response.total;
      });
    },
    adddata() {
      this.initForm();
      this.dialogTitle = "新增产品";
      this.dialogType = "add";
      this.dialogFormVisible = true;
    },
    // 初始化表单
    initForm() {
      if (this.$refs.dataForm) {
        this.$refs.dataForm.resetFields();
      }
      this.form= {
        name: "",
        type:"",
        extra:{
            logo:"",
            logo_dark:"",
            introduction:"",
            comment_control:"",
            watermark:"",
            watermark_position:"",
            user_policy:"",
            privacy_policy:"",
            moment_policy:""
        }
      };
    },
    // 编辑产品
    editdata(row) {
      this.initForm();
      this.dialogTitle = "编辑产品";
      this.dialogType = "edit";
      // this.$nextTick(() => {
      //   for (let key in row) {
      //     this.form[key] = row[key];
      //   }
      // });
      console.log(row)
      this.form = JSON.parse(JSON.stringify(row))

      this.dialogFormVisible = true;
    },
    // 删除产品
    deldata(row){
      this.$confirm('此操作将永久删除id为'+row.id+'的产品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delproducts(row.id).then(response => {
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
    // 关闭窗口
    closeDialog() {
      this.initForm();
      this.dialogFormVisible = false;
    },
    // 确定弹窗
    enterDialog() {
      this.$refs["dataForm"].validate((valid) => {
        if (!valid) return;
        if (this.dialogType == "edit") {
          //修改
          // console.log(this.form)
          var data = JSON.parse(JSON.stringify(this.form));
          editproducts(data.id, data).then((response) => {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.dialogFormVisible = false;
            this.getList();
          });
        } else {
          // 新增
          var data = JSON.parse(JSON.stringify(this.form));
          this.removePropertyOfNull(data);
          addproducts(data).then((response) => {
            this.$message({
              message: "新建成功",
              type: "success",
            });
            this.dialogFormVisible = false;
            this.getList();
          });
        }
      });
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