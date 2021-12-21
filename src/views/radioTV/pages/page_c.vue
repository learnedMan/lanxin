<template>
  <div class="page_c">
    <div
      v-show="returntvList.length > 0"
      class="pbox page_c"
      style="padding-top: 20px"
    >
    <el-row>
        <el-col :span="3">
      <el-tabs
        @tab-click="tabsClick"
        v-model="queryParams.channel_id"
        class="left"
        tab-position="left"
        style="height: 500px; margin-right: 20px; width: 180px"
      >
        <el-tab-pane
          v-for="(item, index) in returntvList"
          :label="item.name"
          :name="'' + item.id"
        ></el-tab-pane>
      </el-tabs>
        </el-col>
    <el-col :span="20">
      <div class="right" style="width: 1400px">
        <div v-if="!showlist">
          <el-button v-points = "1500"
            style="margin-left: 20px"
            @click="adddata"
            type="primary"
            size="small"
            >新增</el-button
          >
        </div>
        <el-table
          v-if="!showlist"
          style="margin-top: 20px"
          :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
          border
          v-loading="loading"
          :data="dataList"
        >
          <el-table-column
            label="id"
            align="center"
            prop="id"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="节目名称"
            align="center"
            prop="name"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="权重"
            align="center"
            prop="sort"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="状态"
            align="center"
            prop="name"
            :show-overflow-tooltip="true"
          >
            <template slot-scope="scope">
              <el-select
                @change="statuschange(scope.row)"
                v-model="scope.row.status"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in statusoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="创建时间"
            align="center"
            prop="updated_at"
            :show-overflow-tooltip="true"
          />
          <el-table-column width="280px" label="操作" align="center">
            <template slot-scope="scope">
              <Iconbutton
                icontype="dbjmd"
                label="点播节目单"
                @fatherMethod="golist(scope.row)"
              ></Iconbutton>
              <Iconbutton
                icontype="xg"
                label="修改"
                @fatherMethod="editdata(scope.row)"
              ></Iconbutton>
              <Iconbutton
                icontype="sc"
                label="删除"
                @fatherMethod="deldata(scope.row)"
              ></Iconbutton>
              <!-- <el-button v-points = "1500"
                            size="mini"
                            type="text"
                            icon="el-icon-tickets"
                            style="color:#67C23A;"
                            @click="golist(scope.row)">节目单</el-button>
                        <el-button v-points = "1500"
                            size="mini"
                            type="text"
                            icon="el-icon-edit"
                            style="color:#E6A23C;"
                            @click="editdata(scope.row)">修改</el-button>
                        <el-button v-points = "1500"
                            size="mini"
                            type="text"
                            icon="el-icon-delete"
                            style="color: #f56c6c"
                            @click="deldata(scope.row)"
                            >删除</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <Pageclist @back="back" :showlist="showlist" :_channel_id="_channel_id" v-if="showlist" />
      </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog
      width="540px"
      :title="dialogTitle"
      :show-close="false"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :visible.sync="innerVisible"
    >
      <el-form :model="form" :rules="rules" ref="dataForm">
        <el-form-item label-width="120px" label="节目名称:" prop="name">
          <el-input
            style="width: 350px"
            placeholder="请输入节目名称"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="节目Logo/封面:"
          prop="extra.cover[0].path"
        >
          <el-upload
            class="avatar-uploader"
            :action="VUE_APP_BASE_API + '/api/upload/image'"
            :headers="importHeaders"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess.bind(this, 'cover')"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="form.extra.cover[0].path"
              :src="form.extra.cover[0].path"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label-width="120px" label="权重(排序):" prop="sort">
          <el-input
            style="width: 350px"
            placeholder="请输入权重"
            v-model="form.sort"
          ></el-input>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="绑定视频栏目"
          prop="extra.vms_channel_type"
        >
          <el-radio-group v-model="form.extra.vms_channel_type">
            <el-radio label="cloud">蓝云视频栏目</el-radio>
            <el-radio label="vms">VMS视频栏目</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          v-if="form.extra.vms_channel_type == 'cloud'"
          label-width="120px"
          label="蓝云视频栏目:"
          prop="extra.vms_channel"
        >
          <el-cascader
            key="1"
            v-model="form.extra.vms_channel"
            :props="{ value: 'code', label: 'name', emitPath: false }"
            :options="videocatalogoptions"
            :show-all-levels="false"
          ></el-cascader>
        </el-form-item>
        <el-form-item
          v-if="form.extra.vms_channel_type == 'vms'"
          label-width="120px"
          label="VMS视频栏目:"
          prop="extra.vms_channel"
        >
          <el-cascader
            key="2"
            v-model="form.extra.vms_channel"
            :props="{ value: 'id', label: 'name', emitPath: false }"
            :options="vmscatalogoptions"
            :show-all-levels="false"
          ></el-cascader>
        </el-form-item>

        <el-form-item label-width="120px" label="是否启用:" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option
              v-for="item in statusoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button v-points = "1500" @click="innercloseDialog">取 消</el-button>
        <el-button v-points = "1500" @click="innerenterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  gettv_channel,
  gettv_programs,
  addtv_programs,
  editprograms,
  delprograms,
  getReplaysByChannel,
  getvms_channels,
  addtvchannels,
  getChildcatalog,
  editChildcatalog,
  delcatalog,
} from "@/api/manage";
import Pageclist from "./page_c/page_c_list";
export default {
  name: "page_c",
  props: {
    productId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Pageclist,
  },
  data() {
    var mytoken = sessionStorage.getItem("token");
    return {
      showlist: false,
      _channel_id: "",
      importHeaders: { Authorization: mytoken }, //传图片时的token
      loading: true,
      dataList: [],
      tvList: [],
      videocatalogoptions: [], //蓝云
      vmscatalogoptions: [], //vms
      // 查询参数
      tvqueryParams: {
        page: 1,
        pageSize: 999,
        product_id: 0,
        type: "tv_channel",
      },
      queryParams: {
        page: 1,
        pageSize: 999,
        channel_id: "",
        type: "tv_replay",
      },
      //内部
      innerVisible: false,
      dialogTitle: "",
      form: {},
      rules: {
        sort: [{ required: true, message: "请输入权重", trigger: "blur" }],
        status: [
          { required: true, message: "请选择是否允许回看", trigger: "blur" },
        ],
        "extra.cover[0].path": [
          { required: true, message: "请选择节目Logo/封面", trigger: "blur" },
        ],
        // "extra.vms_channel": [{ required: true, message: "请选择绑定视频栏目", trigger: "blur" }],
        // "extra.vms_channel_type": [{ required: true, message: "请选择绑定视频栏目", trigger: "blur" }]
      },
      dialogType: "add",
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
    };
  },
  created() {
    this.getList();
    this.initForm();
    this.getvms_channels();
  },
  watch: {
    productId(val) {
      this.tvqueryParams.product_id = val;
      this.gettvList();
      // this.getList()
    },
  },
  computed: {
    VUE_APP_BASE_API() {
      return this.imgurl2
    },
    returntvList: function () {
      return this.tvList.filter(function (item) {
        return item.status == 1 && item.extra.has_replay == "1";
      });
      // return this.tvList
    },
  },
  methods: {
    back(val){
      this.showlist = val
    },
    golist(res) {
      this._channel_id = res.id;
      this.showlist = true;
      // console.log(res)
    },
    statuschange(data) {
      // data.father = data.father.id
      editChildcatalog(data.id, data).then((response) => {
        this.$message({
          message: "修改成功",
          type: "success",
        });
        this.getList();
      });
    },
    getvms_channels() {
      getvms_channels(1).then((response) => {
        //蓝云
        this.videocatalogoptions = response;
      });
      getvms_channels(0).then((response) => {
        //vms
        this.vmscatalogoptions = response;
        function changetype(arr) {
          for (var i = 0; i < arr.length; i++) {
            arr[i].id = String(arr[i].id);
            if (arr[i].children) {
              changetype(arr[i].children);
            }
          }
          return arr;
        }
        changetype(this.vmscatalogoptions);
      });
    },
    handleAvatarSuccess(name, res) {
      this.form.extra.cover[0].path = res.path;
      this.$forceUpdate();
    },
    beforeAvatarUpload(file) {
      const isLt = file.size / 1024 / 1024 < 20;
      if (!isLt) {
        this.$message.error("上传头像图片大小不能超过 20MB!");
      }
      return isLt;
    },
    getList() {
      this.showlist = false;
      this.loading = true;
      var data = this.queryParams.channel_id;
      if (data) {
        getChildcatalog(data).then((response) => {
          this.loading = false;
          this.dataList = response.data;
        });
      }
    },
    gettvList() {
      var data = this.tvqueryParams;
      gettv_channel(data).then((response) => {
        this.tvList = response.data;
        // console.log(this.tvList)
        this.tvList = this.tvList.filter(function (item) {
          return item.status == 1 && item.extra.has_replay == "1";
        });
        this.queryParams.channel_id = this.tvList[0]
          ? "" + this.tvList[0].id
          : "";
        this.getList();
      });
    },
    tabsClick() {
      // this.initForm()
      this.getList();
    },
    initForm() {
      if (this.$refs.dataForm) {
        this.$refs.dataForm.resetFields();
      }
      this.form = {
        name: "",
        product_id: this.productId,
        father: this.queryParams.channel_id,
        sort: 0,
        status: 1,
        type: "tv_replay",
        extra: {
          cover: [
            {
              path: "",
              intro: "",
            },
          ],
          vms_channel: "",
          vms_channel_type: "cloud",
        },
      };
      // console.log(this.form)
    },
    adddata() {
      this.initForm();
      this.innerVisible = true;
      this.dialogTitle = "新增节目";
      this.dialogType = "add";
    },
    // 编辑节目
    editdata(row) {
      // console.log(row)
      this.initForm();
      this.dialogTitle = "编辑节目";
      this.dialogType = "edit";
      this.$nextTick(() => {
        this.form = JSON.parse(JSON.stringify(row));
        // if(this.form.extra.vms_channel){
        //     this.form.extra.vms_channel =  String(this.form.extra.vms_channel)
        // }

        console.log(this.form);
      });
      this.innerVisible = true;
    },
    // 删除节目
    deldata(row) {
      this.$confirm(
        "此操作将永久删除栏目id为" + row.id + "的节目, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          delcatalog(row.id).then((response) => {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    innercloseDialog() {
      this.innerVisible = false;
    },
    innerenterDialog() {
      // console.log(this.form)
      this.$refs["dataForm"].validate((valid) => {
        if (!valid) return;
        var obj = {};
        obj.channel_id = this.queryParams.channel_id;
        var data = Object.assign(obj, this.form);
        // data = JSON.parse(JSON.stringify(data))
        // if(data.extra.vms_channel){
        //     data.extra.vms_channel = data.extra.vms_channel[data.extra.vms_channel.length-1];
        // }
        if (this.dialogType == "edit") {
          editChildcatalog(data.id, data).then((response) => {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.innerVisible = false;
            this.getList();
          });
        } else {
          // console.log('新增')
          // 新增
          addtvchannels(data).then((response) => {
            this.$message({
              message: "新建成功",
              type: "success",
            });
            this.innerVisible = false;
            this.getList();
          });
        }
      });
    },
  },
};
</script>
<style lang="scss">
.page_c .el-tabs__item {
  width: 140px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
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
