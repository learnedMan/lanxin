<template>
  <div class="product">
    <div v-show="showpage==1">
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
          <el-button type="primary" @click="adddata" size="mini">新增</el-button>
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
        <el-table-column width="280px" label="操作" align="center">
          <template slot-scope="scope">
            <Iconbutton icontype="xg" label="修改" @fatherMethod="editdata(scope.row)"></Iconbutton>
            <Iconbutton icontype="sc" label="删除" @fatherMethod="deldata(scope.row)"></Iconbutton>
            <Iconbutton icontype="appbbgl" label="app版本管理" @fatherMethod="changepage(scope.row)"></Iconbutton>
            <!-- <el-button
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
              v-if="scope.row.type=='app'"
              size="mini"
              type="text"
              icon="el-icon-edit"
              style="color: #67c23a"
              @click="changepage(scope.row)"
              >客户端配置</el-button
            > -->
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
    </div>
    <Appversion :appname="appname" :page2id="page2id" v-if="showpage==2" />  
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
                    <el-radio :label="'3'">不做控制</el-radio>
                    <el-radio :label="'1'">先发后审</el-radio>
                    <el-radio :label="'2'">先审后发</el-radio>
                    <el-radio :label="'0'">禁止评论</el-radio>
                </el-radio-group>
          </el-form-item>
          <el-form-item label-width="150px" label="热门搜索词" prop="extra.hot_search">
            <el-tag
              v-for="(tag,index) in form.extra.hot_search"
              :key="tag+index"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增</el-button>
          </el-form-item>
          <el-form-item label-width="150px" label="重保期选项" prop="extra.user_settings">
                <el-checkbox true-label="1" false-label="0" v-model="form.extra.user_settings.deny_register">禁止注册</el-checkbox>
                <el-checkbox true-label="1" false-label="0" v-model="form.extra.user_settings.deny_modify">禁止修改用户信息</el-checkbox>
                <el-checkbox true-label="1" false-label="0" v-model="form.extra.user_settings.deny_OAuth">禁止第三方登录</el-checkbox>
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

          <el-form-item label-width="150px" label="个推秘钥" prop="bluecore_mastersecret">
            <el-input
              style="width: 200px"
              autocomplete="off"
              placeholder="请输入个推秘钥"
              v-model="form.bluecore_mastersecret"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="蓝核APPkey" prop="bluecore_appkey">
            <el-input
              style="width: 200px"
              autocomplete="off"
              placeholder="请输入蓝核APPkey"
              v-model="form.bluecore_appkey"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="蓝核APPID" prop="bluecore_appid">
            <el-input
              style="width: 200px"
              autocomplete="off"
              placeholder="请输入蓝核APPID"
              v-model="form.bluecore_appid"
            ></el-input>
          </el-form-item>

          <el-form-item label-width="150px" label="协议版本" prop="extra.policy.version">
            <el-input
              @input="updateView($event)"
              style="width: 200px"
              autocomplete="off"
              placeholder="请输入（版本由数字与点组成，如1.0.1）"
              v-model="form.extra.policy.version"
            ></el-input>
            <el-button v-show="dialogType!='add'" @click="innerVisible = true" style="margin-left:20px;" type="primary" size="small">查看历史版本</el-button>
          </el-form-item>
          <el-form-item label-width="150px" label="弹窗详情" prop="extra.policy.intro">
            <el-input
            @input="updateView($event)"
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入"
              v-model="form.extra.policy.intro"
              :autosize="{ minRows: 4}"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="用户协议链接" prop="extra.policy.privacy_policy">
            <el-input
            @input="updateView($event)"
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入链接"
              v-model="form.extra.policy.privacy_policy"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="150px" label="隐私政策链接" prop="extra.policy.user_policy">
            <el-input
            @input="updateView($event)"
              style="width: 350px"
              autocomplete="off"
              placeholder="请输入链接"
              v-model="form.extra.policy.user_policy"
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
      <el-dialog
        width="1000px"
        title="历史版本"
        :visible.sync="innerVisible"
        append-to-body>
        <el-table
          :data="innertableData"
          :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
          border
          style="width: 100%">
          <el-table-column
            prop="version"
            align="center"
            label="协议版本">
          </el-table-column>
          <el-table-column
            align="center"
            prop="intro"
            label="弹窗详情">
          </el-table-column>
          <el-table-column
            align="center"
            prop="user_policy"
            label="user_policy">
          </el-table-column>
          <el-table-column
            align="center"
            prop="privacy_policy"
            label="隐私政策协议接口">
          </el-table-column>
        </el-table>

      </el-dialog>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Appversion from './product/appversion'
import { getproduct , addproducts , editproducts , delproducts } from "@/api/manage";
export default {
  name: "product",
  components: {
      Appversion
  },
  data() {
    var mytoken = sessionStorage.getItem("token");
    return {
      inputVisible: false,
      inputValue: '',



      showpage:1,
      page2id:0,
      appname:'',
      importHeaders: { Authorization: mytoken }, //传图片时的token
      productavatar: require("@/assets/c_images/product.png"), //默认logo
      // 内层dialog
      innerVisible:false,
      innertableData:[],
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
            comment_control:'2',
            watermark:"",
            watermark_position:"",
            hot_search:[]
        }
      },
      rules: {
        name: [{ required: true, message: "请输入产品姓名", trigger: "blur" }],
        type: [{ required: true, message: "请选择产品类型", trigger: "blur" }],
        source_id: [{ required: true, message: "请输入source_id", trigger: "blur" }],
        'extra.logo': [{ required: true, message: "请选择产品logo", trigger: "blur" }],
        'extra.policy.version': [{ required: true, message: "请输入协议版本", trigger: "blur" }],
        'extra.policy.intro': [{ required: true, message: "请输入弹窗详情", trigger: "blur" }],
        'extra.policy.privacy_policy': [{ required: true, message: "请输入用户协议链接", trigger: "blur" }],
        'extra.policy.user_policy': [{ required: true, message: "请输入隐私政策链接", trigger: "blur" }],
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
    handleClose(tag) {
      this.form.extra.hot_search.splice(this.form.extra.hot_search.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        if(!this.form.extra.hot_search){
          this.form.extra.hot_search = [];  
        }
        this.form.extra.hot_search.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },




    updateView(e) {
        this.$forceUpdate()
    },
    changepage(row){
      this.page2id = row.id;
      this.appname = row.name;
      this.showpage = 2;
    },
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
        bluecore_mastersecret:"",
        bluecore_appkey:"",
        bluecore_appid:"",
        extra:{
            logo:"",
            logo_dark:"",
            introduction:"",
            comment_control:'2',
            watermark:"",
            watermark_position:"",
            hot_search:[],
            user_settings: {
              deny_register:"0",
              deny_modify:"0",
              deny_OAuth:"0"
            },
            policy: {
                version: "",
                intro: "",
                privacy_policy:"",
                user_policy:"",
                time:''
            }
        }
      };
    },
    // 编辑产品
    editdata(row) {
      this.initForm();
      this.dialogTitle = "编辑产品";
      this.dialogType = "edit";
      // console.log(row)
      this.form = JSON.parse(JSON.stringify(row))
      if(this.form.extra.policy_history){
       this.innertableData = this.form.extra.policy_history.slice(0,5);
      }
      console.log(this.form)
      if(!this.form.extra.policy){
        this.form.extra.policy = {}
        this.form.extra.policy = {
            version: "",
            intro: "",
            privacy_policy:"",
            user_policy:"",
            time:''
        }
      }
      if(!this.form.extra.user_settings){
        this.form.extra.user_settings = {}
        this.form.extra.user_settings = {
            deny_register:"0",
            deny_modify:"0",
            deny_OAuth:"0"
        }
      }

      this.dialogFormVisible = true;
    },
    // 删除产品
    deldata(row){
      console.log(row)
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
          console.log(data)
          data.extra.policy.time = new Date().getTime();


          // console.log(data)
          // return
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
          data.extra.policy.time = new Date().getTime();
          console.log(data)
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
<style lang="scss" scoped>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
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
