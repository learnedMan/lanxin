<!-- 评论审核 -->
<style type="text/scss" lang="scss" scoped>
  .xl-comment-verify {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    padding: 30px 30px 20px;
    flex-direction: column;
    .verify-table {
      flex: 1;
      margin-top: 10px;
    }
    .verify-table-action {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
    }
    .pagination-container {
      padding: 10px;
      margin-top: 0;
    }
  }
</style>
<template>
  <div class="xl-comment-verify">
    <search ref="search" v-model="search" :lists="searchLists">
      <div slot="action">
        <el-button size="small" type="primary" @click="resetSearch">重置</el-button>
        <el-button size="small" type="primary" @click="getList">搜索</el-button>
        <!--<el-button size="small" type="primary">添加评论</el-button>-->
        <el-button size="small" type="success" @click="batchAgreeOrRefused('approve')" :diasbled="disabledBatchAction">批量通过</el-button>
        <el-button size="small" type="warning" @click="batchAgreeOrRefused('reject')" :diasbled="disabledBatchAction">批量拒绝</el-button>
      </div>
    </search>
    <div ref="table" class="verify-table">
      <el-table
        ref="multipleTable"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="tableData"
        border
        :max-height="tableHeight"
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          v-for="(head, index) of tableDead"
          :key="index"
          v-bind="[head, { align: 'center' }]"
        >
          <template slot-scope="scope">
            {{ scope.row[head.prop] }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="120">
          <template slot-scope="scope">
            <div class="verify-table-action">
              <!-- 禁言-->
              <el-button type="text" :icon="scope.row.noTalkUser? 'el-icon-microphone' : 'el-icon-turn-off-microphone'" size="small" @click="handleMsgAction(scope.row)">{{ scope.row.noTalkUser? '取消禁言' : '禁言' }}</el-button>
              <!-- 回复 -->
              <!--<el-button type="text" icon="el-icon-chat-line-square" size="small" @click="handleDialogShow('回复', scope.row)">回复</el-button>-->
              <!-- 审批通过 -->
              <el-button type="text" icon="el-icon-circle-check" size="small" @click="handleAgreeOrRefused(scope.row, 'approve')" v-if="scope.row.status != 1">通过</el-button>
              <!-- 拒绝 -->
              <el-button type="text" icon="el-icon-circle-close" size="small" @click="handleAgreeOrRefused(scope.row, 'reject')" v-if="scope.row.status != 2">拒绝</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="verify-page">
      <pagination
        v-show="page.total > 0"
        :total="page.total"
        :page.sync="search.pageNo"
        :limit.sync="search.pageSize"
        @pagination="getList"
      />
    </div>
    <el-dialog width="500px" :title="dialog.title" :visible.sync="dialog.show">
      <el-form ref="reply" size="mini" :model="dialog.reply" :rules="dialog.replyRules">
        <el-form-item label-width="120px" label="回复昵称" prop="nikeName">
          <el-input v-model="dialog.reply.nikeName" style="width: 300px" autocomplete="off" placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item label-width="120px" label="回复内容" prop="nikeName">
          <el-input v-model="dialog.reply.remark" style="width: 300px" type="textarea" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="enterDialog">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      width="500px"
      :title="addDialog.title"
      :visible.sync="addDialog.show"
    >
      <el-dialog
        width="30%"
        title="选择新闻"
        :visible.sync="innerDialog.show"
        append-to-body
      >
        <el-form
          ref="innerForm"
          :model="innerDialog.queryParams"
          :inline="true"
          size="small"
        >
          <el-form-item
            label="新闻标题:"
            prop="title"
          >
            <el-input
              v-model="innerDialog.queryParams.title"
              placeholder="请输入姓名"
              clearable
              style="width: 200px"
              @keyup.enter.native="handleInnerQuery"
            />
          </el-form-item>
          <el-form-item label="创建时间:">
            <el-date-picker
              v-model="innerDialog.dateValue"
              type="daterange"
              align="right"
              size="small"
              unlink-panels
              range-separator="~"
              value-format="yyyy-MM-dd HH:mm:ss"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              @change="handleInnerDateChange"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="mini"
              @click="handleInnerReset"
            >
              重置
            </el-button>
            <el-button
              type="primary"
              size="mini"
              @click="handleInnerQuery"
            >
              搜索
            </el-button>
          </el-form-item>
        </el-form>
        <el-table
          ref="multipleTable"
          v-loading="innerDialog.loading"
          :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column
            label="新闻ID"
            align="center"
            prop="id"
          />
          <el-table-column
            label="新闻标题"
            align="center"
            prop="title"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="创建时间"
            align="center"
            prop="created_at"
            :show-overflow-tooltip="true"
          />
          <el-table-column
            label="操作"
            align="center"
            width="280"
          >
            <template slot-scope="scope">
              <!-- 选择 -->
              <el-button
                type="text"
                icon="el-icon-check"
                size="small"
                @click="handleInnerChoose(scope.row)"
              >
                选择
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
      <el-form ref="addComments" :model="addDialog.form" :rules="addDialog.rules" size="mini">
        <el-form-item label-width="120px" label="新闻标题" prop="title">
          <el-input
            v-model="addDialog.form.title"
            style="width: 300px"
            disabled
            autocomplete="off"
            placeholder="请选择新闻标题"
          />
          <el-button type="primary">选择新闻</el-button>
        </el-form-item>
        <el-form-item label-width="120px" label="评论昵称" prop="nikeName">
          <el-input v-model="addDialog.form.nikeName" style="width: 300px" autocomplete="off" />
        </el-form-item>
        <el-form-item label-width="120px" label="评论内容" prop="remark">
          <el-input
            v-model="addDialog.form.remark"
            style="width: 300px"
            type="textarea"
            rows="5"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import search from './components/search'
import {
  getproduct
} from '@/api/manage'
import { getCommentLists, commentAction, batchCommentAction, disableSendMsg, releaseShutup } from '@/api/workbench'
import { getNews } from '@/api/content'

export default {
  name: 'CommentVerify',
  components: {
    search
  },
  data() {
    return {
      search: {
        sourceId: '', // 产品
        dataId: '', // 新闻ID
        userId: '', // 评论人ID
        status: 'all', // 状态
        aduitStartTime: '', // 审核时间
        aduitEndTime: '', // 审核结束时间
        startTime: '', // 提交时间
        endTime: '', // 提交时间
        aduitTime: '',
        submitDate: '',
        pageSize: 10, // 页码
        pageNo: 1 // 当前页
      },
      searchLists: [
        {
          component: 'select',
          componentSize: 'small',
          placeholder: '请选择产品',
          label: '所属产品',
          selectOption: [],
          span: 6,
          key: 'sourceId'
        },
        {
          component: 'input',
          componentSize: 'small',
          placeholder: '请输入ID',
          label: '评论人ID',
          span: 6,
          key: 'userId'
        },
        {
          component: 'input',
          componentSize: 'small',
          placeholder: '请输入新闻ID',
          label: '新闻ID',
          span: 6,
          key: 'dataId'
        },
        {
          component: 'select',
          componentSize: 'small',
          placeholder: '请输入关键字',
          label: '状态',
          selectOption: [
            {
              label: '全部',
              value: 'all'
            },
            {
              label: '待审核',
              value: 0
            },
            {
              label: '审核通过',
              value: 1
            },
            {
              label: '审核不通过',
              value: 2
            }
          ],
          span: 6,
          key: 'status'
        },
        {
          component: 'daterange',
          componentSize: 'small',
          placeholder: '请选择日期',
          label: '审核时间',
          span: 8,
          key: 'aduitTime'
        },
        {
          component: 'daterange',
          componentSize: 'small',
          placeholder: '请选择日期',
          label: '提交时间',
          span: 8,
          key: 'submitDate'
        }
      ],
      tableDead: [
        {
          label: '评论ID',
          prop: 'id',
          width: 80,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '评论人',
          prop: 'nickname',
          width: 120,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '评论内容',
          prop: 'content',
          showOverflowTooltip: true // 超出省略号
        },
        {
          label: '所属新闻/帖子',
          prop: 'title',
          showOverflowTooltip: true // 超出省略号
        },
        {
          label: '状态',
          prop: 'statusLabel',
          width: 80,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '审核时间',
          prop: 'aduitTime',
          width: 120,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '提交时间',
          prop: 'creatTime',
          width: 120,
          showOverflowTooltip: false // 超出省略号
        }
      ],
      tableData: [],
      selection: [], // 选中项
      loading: false, // 列表加载
      page: {
        total: 10
      },
      tableHeight: 200,
      dialog: {
        show: false,
        title: '回复',
        reply: {
          nikeName: '',
          remark: ''
        }, // 回复
        replyRules: {
          nikeName: { required: true, message: '请输入昵称', trigger: 'blur' },
          remark: { required: true, message: '请输入备注', trigger: 'blur' }
        }, // 回复验证
      },
      addDialog: {
        show: false,
        title: '新增评论',
        form: {
          title: '',
          nikeName: '',
          remark: ''
        },
        rules: {
          title: { required: true, message: '请选择新闻标题', trigger: 'change' },
          nikeName: { required: true, message: '请输入评论昵称', trigger: 'blur' },
          remark: { required: true, message: '请输入评论内容', trigger: 'blur' }
        }
      }, // 新增和编辑评论弹框
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      innerDialog: {
        show: false,
        dateValue: '',
        loading: false,
        queryParams: {
          startdate: '',
          enddate: '',
          page: 1,
          pageSize: 10
        }
      } // 选择新闻弹框
    }
  },
  computed: {
    /* 站点id */
    site_id() {
      return this.$store.state.u_info.site_id
    },
    disabledBatchAction () {
      return this.selection.length === 0
    }
  },
  async created() {
    await this.getProductList();
    this.getList();
    this.$nextTick(() => {
      const table = this.$refs.table;
      this.tableHeight = table.clientHeight;
    })
  },
  methods: {
    /*
    * 重置搜索框
    * */
    resetSearch() {
      const form = this.$refs.search.$refs.ruleForm
      form.resetFields();
    },
    /*
    * 选择项发生变化时
    * */
    handleSelectionChange(arr) {
      this.selection = arr.map(n => n.comment_sn);
    },
    /*
    * 获取列表数据
    * */
    getList() {
      let params = { ...this.search };
      if(params.aduitTime) params.aduitStartTime = params.aduitTime[0],params.aduitEndTime = params.aduitTime[1];
      if(params.submitDate) params.startTime = params.submitDate[0],params.endTime = params.submitDate[1];
      delete params.aduitTime, delete params.submitDate;
      this.loading = true;
      this.selection = [];
      getCommentLists(params).then(res => {
        const { totalCount, list } = res.data;
        this.page.total = totalCount;
        const ids = list.map(n => n.id);
        getNews({ ids }).then(news => {
          const newMap = news.data.reduce((data, n) => {
            data[n.id] = n.title;
            return data
          }, {})
          this.tableData = list.map(n => ({
            ...n,
            statusLabel: this.searchLists[3].selectOption.find(k => k.value === n.status)?.label,
            title: newMap[n.dataId]
          }))
        })
      }).finally(() => {
        this.loading = false;
      })
    },
    /*
    * 关闭弹框
    * */
    closeDialog() {
      this.dialog.show = false
    },
    /*
    * 弹框确认
    * */
    enterDialog() {

    },
    /*
    * 显示回复和拒绝的弹框
    * */
    handleDialogShow(title, row) {
      Object.assign(this.dialog, {
        title,
        show: true
      })
    },
    /* 禁烟或取消禁言 */
    handleMsgAction (row) {
      const { userId, noTalkUser } = row;
      const data = {
        sourceId: this.search.sourceId,
        userId: userId
      }
      let promise;
      if(noTalkUser) {
        // 取消禁言
        promise = releaseShutup(data);
      }else {
        promise = disableSendMsg(data);
      }
      promise.then(res => {
        this.$message.success(res.message);
        this.getList();
      })
    },
    /*
    * 审核通过或拒绝
    * */
    handleAgreeOrRefused(row, status) {
      const str = `${status}/${row.comment_sn}`
      commentAction(str).then(res => {
        this.$message.success(res.message);
        this.getList();
      })
    },
    /* 批量审核通过或拒绝 */
    batchAgreeOrRefused (status) {
      batchCommentAction({
        operateType: status,
        commentSnList: this.selection
      }).then(res => {
        this.$message.success(res.message);
      })
    },
    /* 处理选择新闻时间 */
    handleInnerDateChange(val) {
      const arr = val || ['', '']
      this.innerDialog.queryParams.startdate = arr[0]
      this.innerDialog.queryParams.enddate = arr[1]
    },
    /* 获取新闻列表 */
    handleInnerQuery() {

    },
    /* 重置新闻搜索条件 */
    handleInnerReset() {
      this.innerDialog.dateValue = ''
      Object.assign(this.innerDialog.queryParams, {
        startdate: '',
        enddate: '',
        page: 1
      })
      this.resetForm('innerForm')
    },
    /* 确认选择的新闻 */
    handleInnerChoose(row) {

    },
    /* 获取产品列表 */
    getProductList(){
      return getproduct({}).then(res => {
        const data = res.data || []
        this.searchLists[0].selectOption = data.map(n => ({
          label: n.name,
          value: n.id
        }));
        this.search.sourceId = data?.[0]?.id;
      });
    },
  }
}
</script>
