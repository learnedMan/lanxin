<template>
  <div class="page_b">
    <div
      v-show="returntvList.length > 0"
      style="padding-top: 20px"
      class="pbox page_b"
    >
      <el-row>
        <el-col :span="3">
          <el-tabs
            @tab-click="tabsClick"
            v-model="queryParams.channel_id"
            class="left"
            tab-position="left"
            style="height: 500px"
          >
            <el-tab-pane
              v-for="(item, index) in returntvList"
              :label="item.name"
              :name="'' + item.id"
            ></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="20">
          <div class="right">
            <div>
              <div class="top" style="display: inline">
                <el-date-picker
                  v-model="queryParams.date"
                  @change="pickerdatechange"
                  type="date"
                  value-format="yyyy-MM-dd"
                  :picker-options="pickerOptions"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </div>
              <el-radio-group
                @change="pickerdatechange"
                v-model="queryParams.date"
                style="margin-left: 20px"
              >
                <el-radio-button :label="nowDate(0)">{{
                  nowDate(0) | dateformat("today")
                }}</el-radio-button>
                <template v-for="(item, index) in 6">
                  <el-radio-button :label="nowDate(item)">{{
                    nowDate(item) | dateformat()
                  }}</el-radio-button>
                </template>
              </el-radio-group>
              <el-button
                style="margin-left: 20px"
                @click="adddata"
                type="primary"
                size="small"
                >新增</el-button
              >
            </div>
            <el-table
              style="margin-top: 20px"
              :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
              border
              v-loading="loading"
              :data="dataList"
            >
              <el-table-column
                label="节目名称"
                align="center"
                prop="name"
                :show-overflow-tooltip="true"
              />
              <el-table-column
                label="开始时间"
                align="center"
                prop="time"
                :show-overflow-tooltip="true"
              />
              <!-- <el-table-column label="播放时长" align="center" prop="extra.duration" :show-overflow-tooltip="true" /> -->
              <el-table-column
                label="允许回看"
                align="center"
                :show-overflow-tooltip="true"
              >
                <template slot-scope="scope">
                  {{ scope.row.extra.allow_replay | formatallow_replay }}
                </template>
              </el-table-column>
              <el-table-column width="150px" label="操作" align="center">
                <template slot-scope="scope">
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
                  <!-- <el-button
                            size="mini"
                            type="text"
                            icon="el-icon-edit"
                            style="color:#E6A23C;"
                            @click="editdata(scope.row)">修改</el-button>
                        <el-button
                            size="mini"
                            type="text"
                            icon="el-icon-delete"
                            style="color: #f56c6c"
                            @click="deldata(scope.row)"
                            >删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>
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
        <el-form-item label-width="120px" label="开始时间:" prop="time">
          <el-time-picker
            v-model="form.time"
            value-format="HH:mm:ss"
            placeholder="请选择时间"
          >
          </el-time-picker>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="是否允许回看:"
          prop="extra.allow_replay"
        >
          <el-select v-model="form.extra.allow_replay" placeholder="请选择">
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
        <el-button @click="innercloseDialog">取 消</el-button>
        <el-button @click="innerenterDialog" type="primary">确 定</el-button>
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
} from "@/api/manage";
export default {
  name: "page_b",
  props: {
    productId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    var nowday = this.getDay(0);
    return {
      pickerOptions: {
        disabledDate(time) {
          return (
            time.getTime() - 3600 * 1000 * 24 * 6 > Date.now() ||
            time.getTime() + 3600 * 1000 * 24 * 7 < Date.now()
          );
        },
      },
      loading: true,
      dataList: [],
      tvList: [],
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
        date: nowday,
      },
      //内部
      innerVisible: false,
      dialogTitle: "",
      form: {},
      rules: {
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
        "extra.allow_replay": [
          { required: true, message: "请选择是否允许回看", trigger: "blur" },
        ],
      },
      dialogType: "add",
      statusoptions: [
        {
          value: '1',
          label: "是",
        },
        {
          value: '0',
          label: "否",
        },
      ],
    };
  },
  created() {
    this.getList();
    this.initForm();
  },
  watch: {
    productId(val) {
      this.tvqueryParams.product_id = val;
      this.gettvList();
      this.getList();
    },
  },
  filters: {
    dateformat(val, str) {
      var val = new Date(val);
      let wk = val.getDay();
      let weeks = [
        "(周日)",
        "(周一)",
        "(周二)",
        "(周三)",
        "(周四)",
        "(周五)",
        "(周六)",
      ];
      let week = weeks[wk];
      let mm = val.getMonth() + 1;
      let dd = String(val.getDate() < 10 ? "0" + val.getDate() : val.getDate());
      if (str) {
        return mm + "." + dd + " (今天)";
      } else {
        return mm + "." + dd + " " + week;
      }
    },
    formatallow_replay(val) {
      if (val == 1) {
        return "是";
      } else {
        return "否";
      }
    },
  },
  computed: {
    nowDate() {
      return (index) => {
        return this.getDay(index);
      };
    },
    returntvList: function () {
      return this.tvList.filter(function (item) {
        return item.status == 1 && item.extra.has_live == "1";
      });
    },
  },
  methods: {
    pickerdatechange() {
      this.getList();
    },
    getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
    },
    doHandleMonth(month) {
      var m = month;
      if (month.toString().length === 1) {
        m = "0" + month;
      }
      return m;
    },
    getList() {
      this.loading = true;
      var data = JSON.parse(JSON.stringify(this.queryParams));
      // console.log(data)
      gettv_programs(data).then((response) => {
        this.loading = false;
        this.dataList = response.data;
      });
    },
    gettvList() {
      var data = this.tvqueryParams;
      gettv_channel(data).then((response) => {
        this.tvList = response.data;
        // console.log(this.tvList)
        this.tvList = this.tvList.filter(function (item) {
          return item.status == 1 && item.extra.has_live == "1";
        });
        this.queryParams.channel_id = this.tvList[0]
          ? "" + this.tvList[0].id
          : "";
        // console.log(this.queryParams.channel_id)
        this.getList();
      });
    },
    tabsClick() {
      this.getList();
    },
    initForm() {
      if (this.$refs.dataForm) {
        this.$refs.dataForm.resetFields();
      }
      this.form = {
        name: "",
        time: "",
        extra: {
          //   duration: "",
          allow_replay: "",
        },
      };
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
        // console.log(this.form)
      });
      this.innerVisible = true;
    },
    // 删除节目
    deldata(row) {
      this.$confirm(
        "此操作将永久删除节目名称为" + row.name + "的节目, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          delprograms(row.id).then((response) => {
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
        obj.type = "1";
        obj.channel_id = this.queryParams.channel_id;
        obj.date = this.queryParams.date;
        var data = Object.assign(obj, this.form);
        if (this.dialogType == "edit") {
          editprograms(data.id, data).then((response) => {
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
          addtv_programs(data).then((response) => {
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
.page_b .el-tabs__item {
  width: 140px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>