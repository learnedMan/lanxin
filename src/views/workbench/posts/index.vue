<style type="text/scss" lang="scss" scoped>
.xl-posts {
  padding: 30px;
  &-file {
    display: inline-block;
    width: 300px;
    height: 200px;
    margin-right: 10px;
    background-color: #409eff;
  }
}
</style>
<template>
  <div class="xl-posts">
    <el-form ref="queryForm" :model="queryParams" :inline="true" size="small">
      <!-- <el-form-item label="所属产品:">
        <el-select @change="sourceIdChange" v-model="queryParams.sourceId" placeholder="请选择所属产品">
          <el-option
            v-for="item in productLists"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item> -->
      <el-form-item label="所属产品：">
        <el-select v-model="product_id" placeholder="请选择所属产品">
          <el-option v-for="item in productList" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="帖子内容:" prop="content">
        <el-input
          v-model="queryParams.content"
          placeholder="请输入帖子内容"
          clearable
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="话题:" prop="topicId">
        <el-select
          v-model="queryParams.topicId"
          placeholder="请选择话题"
          clearable
        >
          <el-option
            v-for="item in topicLists"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="状态:" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择状态"
          clearable
        >
          <el-option
            v-for="item in statusLists"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="发帖人:" prop="nickName">
        <el-input
          v-model="queryParams.nickName"
          placeholder="请输入姓名"
          clearable
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="发帖账号:" prop="mobile">
        <el-input
          v-model="queryParams.mobile"
          placeholder="请输入手机号"
          clearable
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提交时间:" prop="submitTime">
        <el-date-picker
          v-model="queryParams.submitTime"
          type="daterange"
          align="right"
          size="small"
          unlink-panels
          range-separator="~"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          :default-time="['00:00:00', '23:59:59']"
          @change="handleDateChange($event, 'submitTime')"
        />
      </el-form-item>
      <el-form-item label="审核时间:" prop="auditTime">
        <el-date-picker
          v-model="queryParams.auditTime"
          type="daterange"
          align="right"
          size="small"
          unlink-panels
          range-separator="~"
          value-format="yyyy-MM-dd HH:mm:ss"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          :default-time="['00:00:00', '23:59:59']"
          @change="handleDateChange($event, 'auditTime')"
        />
      </el-form-item>
      <el-form-item>
        <el-button v-points = "1500" type="primary" size="mini" @click="handleReset">
          重置
        </el-button>
        <el-button v-points = "1500" type="primary" size="mini" @click="handleQuery">
          搜索
        </el-button>
        <el-button v-points = "1500"
          size="mini"
          type="success"
          @click="batchAgreeOrRefused(1)"
          :disabled="disabledBatchAction"
          >批量通过</el-button>
        <el-button v-points = "1500"
          size="mini"
          type="warning"
          @click="handleBatchReject"
          :disabled="disabledBatchAction"
          >批量拒绝</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
      v-loading="loading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="新闻ID" align="center" prop="id" />
      <el-table-column
        label="发帖内容"
        align="center"
        prop="content"
        showOverflowTooltip
      />
      <el-table-column
        label="分类"
        align="center"
        prop="classifyName"
        showOverflowTooltip
      >
      <template slot-scope="scope">
        {{scope.row.classifyName|classifyfilter}}
      </template>
      </el-table-column>
      <el-table-column label="状态" align="center" prop="statusLabel" />
      <el-table-column label="发帖人" align="center" prop="nickName" />
      <el-table-column label="审核时间" align="center" prop="updatedTime" />
      <el-table-column label="提交时间" align="center" prop="createdTime" />
      <el-table-column label="操作" align="center" width="280">
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 查看 -->
            <Iconbutton
              icontype="ckxq"
              label="详情"
              @fatherMethod="watchDetail(scope.row)"
            ></Iconbutton>
            <!-- 通过 -->
            <Iconbutton
              v-if="scope.row.status != 1"
              icontype="shtg"
              label="通过"
              @fatherMethod="handleAgreeOrRefused(scope.row, 1)"
            ></Iconbutton>
            <!-- 拒绝 -->
            <!-- <Iconbutton
              v-if="scope.row.status != 2"
              icontype="shjj"
              label="拒绝"
              @fatherMethod="handleAgreeOrRefused(scope.row, 2)"
            ></Iconbutton> -->
             <Iconbutton
              v-if="scope.row.status != 2"
              icontype="shjj"
              label="拒绝"
              @fatherMethod="handleReject(scope.row)"
            ></Iconbutton>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.limit"
      @pagination="getList"
    />
     <!-- 批量或单个拒绝 -->
    <el-dialog
      width="600px"
      :title="rejectDialog.title"
      :visible.sync="rejectDialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="rejectDialog.form"
        :rules="dialogRules"
        label-width="120px"
      >
        <el-form-item
          label="拒绝原因"
          prop="remark"
        >
          <el-select
            v-model.trim="rejectDialog.form.remark"
            size="small"
            placeholder="请选择拒绝原因"
            clearable
          >
            <el-option
              v-for="item in rejectLists"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="原因"
          prop="reason"
          v-if="rejectDialog.form.remark === '自定义原因'"
        >
          <el-input
            v-model.trim="rejectDialog.form.reason"
            type="textarea"
            :rows="6"
            clearable
            size="small"
            style="width: 300px"
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button v-points = "1500" @click="handleDialogClose">
          取 消
        </el-button>
        <el-button v-points = "1500"
          type="primary"
          @click="handleDialogClose('confirm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 详情 -->
    <el-dialog width="600px" title="详情" :visible.sync="dialog.show">
      <el-form size="small" label-width="120px">
        <el-form-item label="发帖人:">{{ detail.nickName }}</el-form-item>
        <el-form-item label="发帖时间:">{{ detail.createdTime }}</el-form-item>
        <el-form-item label="分类:">{{ detail.classifyName|classifyfilter }}</el-form-item>
        <el-form-item label="话题:">{{ detail.topicInfo|topicInfofilter }}</el-form-item>
        <el-form-item label="状态:">{{ detail.statusLabel }}</el-form-item>
        <el-form-item label="发帖内容:">{{ detail.content }}</el-form-item>
        <el-form-item label="图片/视频:">
          <span class="xl-posts-file" v-for="list of detail.images">
            <el-image
              lazy
              style="width: 100%; height: 100%"
              :src="list.path"
              fit="cover"
              :preview-src-list="imgLists"
            ></el-image>
          </span>
          <span class="xl-posts-file" v-for="list of detail.videos">
            <video
              controls
              preload="metadata"
              style="width: 100%; height: 100%"
            >
              <source :src="list.path" />
              您的浏览器不支持 HTML5 video 标签。
            </video>
          </span>
        </el-form-item>
        <el-form-item
          label="拒绝原因:"
          v-if="detail.refusalCause"
        >
          <el-input
            v-model.trim="detail.refusalCause"
            type="textarea"
            :rows="6"
            clearable
            size="small"
            style="width: 300px"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button v-points = "1500" @click="dialog.show = false"> 关 闭 </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getPostLists,
  changePostStatus,
  getReasons,
  getPostDetail,
} from "@/api/workbench.js";
import { getproduct } from "@/api/manage";
import {
  getTopicList
  } from '@/api/operamanage'
export default {
  data() {
    return {
      topicLists:[],
      productList: [],
      rejectLists: [], //拒绝原因列表
      statusLists: [
        {
          label: "全部",
          value: 3,
        },
        {
          label: "已审核",
          value: 1,
        },
        {
          label: "待审核",
          value: 0,
        },
        {
          label: "已拒绝",
          value: 2,
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      queryParams: {
        sourceId: "",
        status: 3,
        content: "",
        topicId: "",
        nickName: "",
        mobile: "",
        createdStartTime: "",
        createdEndTime: "",
        submitTime: "",
        updatedStartTime: "",
        updatedEndTime: "",
        auditTime: "",
        page: 1,
        limit: 10,
      },
      product_id: 0,
      dialog: {
        show: false,
      },
      rejectDialog: {
        show: false,
        title: '拒绝',
        form: {
          id: '',
          sourceId: '',
          status: 2,
          reason: '',
          remark: ''
        }
      },
      dialogRules: {
        remark: { required: true, message: '请选择拒绝原因', trigger: 'change' },
        reason: { required: true, message: '请输入自定义原因', trigger: 'change' },
      },
      detail: {
        title: "",
        content: "",
        userName: "",
        statusLabel: "",
        files: [],
        nickName:"",
        refusalCause: ''
      },
      loading: false,
      total: 0,
      tableData: [],
      selection: [], // 选中项
    };
  },
  computed: {
    disabledBatchAction() {
      return this.selection.length === 0;
    },
    /* 详情图片集合 */
    imgLists() {
      return this.detail.files.filter((n) => n.type === 2).map((n) => n.path);
    },
  },
  filters:{
    classifyfilter(data){
      return data || '默认分类'
      // if(data==1){
      //   return '分类一'
      // }else if(data==2){
      //   return '分类一 - 分类二'
      // }else{
      //   return '未知分类'
      // }
    },
    topicInfofilter(data){
     data = data||[]
      return data.map(item=>item.topicName).join(',')
    }
  },
   watch:{
    product_id(val){
      this.queryParams.sourceId = this.productList.filter(item=>item.id==val)[0].source_id||0;
      this.getList();
      this.getTopicList();
    },
  },
  methods: {
    /* sourceidchange */
    sourceIdChange(){
      this.getTopicList();
      this.getList();
    },
    /* 获取产品列表 */
    getProductList() {
      // return getproduct({}).then((res) => {
      //   const data = res.data || [];
      //   this.productLists = data.map((n) => ({
      //     label: n.name,
      //     value: n.source_id,
      //   }));
      //   this.queryParams.sourceId = data?.[0]?.source_id;
      // });
        getproduct({}).then((response) => {
            this.productList = response.data;
            this.product_id = this.productList[0].id;
          });
    },
    /* 获取话题列表 */
    getTopicList(){
        var data = {
          sourceId:this.queryParams.sourceId,
          page:1,
          limit:9999
        };
        getTopicList(data).then(response => {
          let arr = JSON.parse(JSON.stringify(response.data.list));
          arr.unshift({name:'全部',id:''});
          this.topicLists = arr;
        })
    },
    /* 获取拒绝原因列表 */
    getRejectList() {
      getReasons({
        pageSize: 9999,
        page: 1,
        apply_to: '4'
      }).then(res => {
        this.rejectLists = [{
          id: '98998989',
          name: '自定义原因'
        }].concat(res.data || [])
      })
    },
    /* 修改时间 */
    handleDateChange(val, key) {
      const arr = val || ["", ""];
      if (key === "submitTime") {
        this.queryParams.createdStartTime = arr[0];
        this.queryParams.createdEndTime = arr[1];
      } else {
        this.queryParams.updatedStartTime = arr[0];
        this.queryParams.updatedEndTime = arr[1];
      }
    },
    /* 重置 */
    handleReset() {
      Object.assign(this.queryParams, {
        createdStartTime: "",
        createdEndTime: "",
        updatedStartTime: "",
        updatedEndTime: "",
        page: 1,
      });
      this.resetForm("queryForm");
    },
    /* 搜索 */
    handleQuery() {
      this.queryParams.page = 1;
      this.getList();
    },
    /* 查看帖子详情 */
    watchDetail(row) {
      const { id, statusLabel,nickName} = row;
      getPostDetail({ id ,sourceId:this.queryParams.sourceId}).then((res) => {
        if (res.code == 200) {
          this.detail = {
            ...(res.data || {}),
            statusLabel,
            nickName,
            files: (res.data?.files || []).filter((n) => n.type !== 0),
          };
          this.dialog.show = true;
        }
      });
    },
    /* 批量通过或拒绝 */
    batchAgreeOrRefused(status) {
      changePostStatus({
        sourceId:this.queryParams.sourceId,
        id: [...this.selection],
        status,
      }).then((res) => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.getList();
        }
      });
    },
    /* 通过或拒绝 */
    handleAgreeOrRefused(row, status) {
      var idarr = []
      idarr[0]=row.id;
      changePostStatus({
        sourceId:this.queryParams.sourceId,
        id:idarr,
        status,
      }).then((res) => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.getList();
        }
      });
    },
    /* 批量拒绝 */
    handleBatchReject() {
      Object.assign(this.rejectDialog, {
        show: true,
        title: '批量拒绝',
        form: {
          id: [...this.selection],
          sourceId: this.queryParams.sourceId,
          status: 2,
          remark: ''
        }
      })
      this.$nextTick(() => {
        this.$refs.dialogForm?.clearValidate()
      })
    },
     /* 拒绝 */
    handleReject(row) {
      const { id } = row
      Object.assign(this.rejectDialog, {
        show: true,
        title: '拒绝',
        form: {
          id: [id],
          status: 2,
          sourceId: this.queryParams.sourceId,
          remark: ''
        }
      })
      this.$nextTick(() => {
        this.$refs.dialogForm?.clearValidate()
      })
    },
     /* 确认或关闭弹框 */
    handleDialogClose(status) {
      if (status === 'confirm') {
        this.$refs.dialogForm.validate(val => {
          if (val) {
            const params = { ...this.rejectDialog.form };
            if(params.remark === '自定义原因') params.remark = params.reason
            params.refusalCause = params.remark
            delete params.remark
            delete params.reason
            console.log('params',params)
            // return
            changePostStatus(params).then(() => {
              this.$message({
                message: `${this.rejectDialog.title}成功`,
                type: 'success'
              })
              this.getList()
            }).finally(() => {
              this.rejectDialog.show = false
            })
          }
        })
      } else {
        this.rejectDialog.show = false
      }
    },
    /* 修改选中项 */
    handleSelectionChange(arr) {
      this.selection = arr.map((n) => n.id);
    },
    /* 获取列表数据 */
    getList() {
      this.loading = true;
      const params = { ...this.queryParams };
      delete params.submitTime, delete params.auditTime;
      getPostLists(this.removePropertyOfNullFor0(params))
        .then((res) => {
          if (res.code == 200) {
            const data = res.data;
            this.selection = [];
            this.tableData = (data.list || []).map((n) => ({
              ...n,
              statusLabel: this.statusLists.find(
                (list) => list.value === n.status
              )?.label,
            }));
            this.total = data.totalCount;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  async created() {
    await this.getProductList()
    // this.sourceIdChange()
    this.getRejectList()
  },
};
</script>
