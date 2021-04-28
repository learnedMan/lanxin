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
    <search ref="search" v-model="search" :lists="searchLists" />
    <div class="verify-action">
      <el-row>
        <el-col :span="12">
          <el-button size="small" type="primary">添加评论</el-button>
          <el-button size="small" type="primary">批量通过</el-button>
          <el-button size="small" type="primary">批量拒绝</el-button>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button size="small" type="primary" @click="resetSearch">重置</el-button>
          <el-button size="small" type="primary">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div ref="table" class="verify-table">
      <el-table
        ref="multipleTable"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        :data="tableData"
        border
        :max-height="tableHeight"
        tooltip-effect="dark"
        style="width: 100%"
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
            <el-popover
              v-if="head.tip"
              placement="top"
              width="200"
              trigger="click"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
              <i slot="reference" class="el-icon-info" style="color: #ccc;" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="280">
          <template slot-scope="scope">
            <div class="verify-table-action">
              <!-- 不清楚 -->
              <el-button type="text" icon="el-icon-edit" size="small">按钮</el-button>
              <!-- 查看 -->
              <el-button type="text" icon="el-icon-view" size="small" @click="watchDetail">查看</el-button>
              <!-- 回复 -->
              <el-button type="text" icon="el-icon-chat-line-square" size="small" @click="handleDialogShow('reply', '回复', scope.row)">回复</el-button>
              <!-- 审批通过 -->
              <el-button type="text" icon="el-icon-circle-check" size="small" @click="handleAgree">同意</el-button>
              <!-- 拒绝 -->
              <el-button type="text" icon="el-icon-circle-close" size="small" @click="handleDialogShow('refuse', '拒绝', scope.row)">拒绝</el-button>
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
        @pagination="getListData"
      />
    </div>
    <el-dialog width="500px" :title="dialog.title" :visible.sync="dialog.show">
      <el-form v-show="dialog.key === 'reply'" ref="reply" size="mini" :model="dialog.reply" :rules="dialog.replyRules">
        <el-form-item label-width="120px" label="回复昵称" prop="nikeName">
          <el-input v-model="dialog.reply.nikeName" style="width: 300px" autocomplete="off" placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item label-width="120px" label="回复内容" prop="nikeName">
          <el-input v-model="dialog.reply.remark" style="width: 300px" type="textarea" autocomplete="off" />
        </el-form-item>
      </el-form>
      <el-form v-show="dialog.key === 'refuse'" ref="refuse" size="mini" :model="dialog.refuse" :rules="dialog.refuseRules">
        <el-form-item label-width="120px" label="拒绝原因" prop="cause">
          <el-select v-model="dialog.refuse.cause" placeholder="请选择拒绝原因">
            <el-option v-for="item in dialog.refuse.causeOption" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
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
        title="选择媒资"
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
            label="媒资标题:"
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
            label="媒资"
            align="center"
            prop="id"
          />
          <el-table-column
            label="媒资标题"
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
        <el-form-item label-width="120px" label="媒资标题" prop="title">
          <el-input
            v-model="addDialog.form.title"
            style="width: 300px"
            disabled
            autocomplete="off"
            placeholder="请选择媒资标题"
          />
          <el-button type="primary">选择媒资</el-button>
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

export default {
  components: {
    search
  },
  data() {
    return {
      search: {
        critics: '', // 评论人
        content: '', // 评论内容
        commentType: '', // 评论类型
        title: '', // 媒资标题
        status: '', // 状态
        aduitTime: '', // 审核时间
        submitDate: '', // 提交时间
        pageSize: 10, // 页码
        pageNo: 1 // 当前页
      },
      searchLists: [
        {
          component: 'input',
          componentSize: 'small',
          placeholder: '请输入姓名',
          label: '评论人',
          span: 6,
          key: 'critics'
        },
        {
          component: 'input',
          componentSize: 'small',
          placeholder: '请输入关键字',
          label: '评论内容',
          span: 6,
          key: 'content'
        },
        {
          component: 'select',
          componentSize: 'small',
          placeholder: '请选择',
          selectOption: [{
            label: '全部',
            value: 1
          }],
          label: '评论类型',
          span: 6,
          key: 'commentType'
        },
        {
          component: 'input',
          componentSize: 'small',
          placeholder: '请输入关键字',
          label: '媒资标题',
          span: 6,
          key: 'title'
        },
        {
          component: 'select',
          componentSize: 'small',
          placeholder: '请输入关键字',
          label: '状态',
          selectOption: [{
            label: '全部',
            value: 1
          }],
          span: 6,
          key: 'status'
        },
        {
          component: 'daterange',
          componentSize: 'small',
          placeholder: '请输入关键字',
          label: '审核时间',
          span: 8,
          key: 'aduitTime'
        },
        {
          component: 'daterange',
          componentSize: 'small',
          placeholder: '请输入关键字',
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
          prop: 'critics',
          width: 120,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '评论内容',
          prop: 'content',
          showOverflowTooltip: true // 超出省略号
        },
        {
          label: '所属媒资/帖子',
          prop: 'title',
          showOverflowTooltip: true // 超出省略号
        },
        {
          label: '状态',
          prop: 'status',
          width: 80,
          tip: true,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '审核时间',
          prop: 'checkDate',
          width: 120,
          showOverflowTooltip: false // 超出省略号
        },
        {
          label: '提交时间',
          prop: 'submitDate',
          width: 120,
          showOverflowTooltip: false // 超出省略号
        }
      ],
      tableData: [
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        },
        {
          id: 111,
          critics: '12341',
          content: '123211231',
          commentType: '评论',
          title: '123123',
          status: '1231',
          checkDate: '1234234',
          submitDate: '2341234'
        }
      ],
      page: {
        total: 10
      },
      tableHeight: 200,
      dialog: {
        show: false,
        title: '回复',
        key: '',
        reply: {
          nikeName: '',
          remark: ''
        }, // 回复
        replyRules: {
          nikeName: { required: true, message: '请输入昵称', trigger: 'blur' },
          remark: { required: true, message: '请输入备注', trigger: 'blur' }
        }, // 回复验证
        refuse: {
          cause: '',
          causeOption: [] // 选择框列表数据
        }, // 拒绝
        refuseRules: {
          cause: { required: true, message: '请选择拒绝原因', trigger: 'change' }
        } // 拒绝验证
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
          title: { required: true, message: '请选择媒资标题', trigger: 'change' },
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
      } // 选择媒资弹框
    }
  },
  computed: {
    /* 站点id */
    site_id() {
      return this.$store.state.u_info.site_id
    }
  },
  created() {
    this.$nextTick(() => {
      const table = this.$refs.table
      this.tableHeight = table.clientHeight
    })
  },
  methods: {
    /*
    * 重置搜索框
    * */
    resetSearch() {
      const form = this.$refs.search.$refs.ruleForm
      form.resetFields()
    },
    /*
    * 选择项发生变化时
    * */
    handleSelectionChange(selection) {

    },
    /*
    * 获取列表数据
    * */
    getListData() {

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
    * 查看详情
    * */
    watchDetail() {

    },
    /*
    * 显示回复和拒绝的弹框
    * */
    handleDialogShow(key, title, row) {
      Object.assign(this.dialog, {
        title,
        key,
        show: true
      })
    },
    /*
    * 审核通过(同意)
    * */
    handleAgree() {

    },
    /* 处理选择媒资时间 */
    handleInnerDateChange(val) {
      const arr = val || ['', '']
      this.innerDialog.queryParams.startdate = arr[0]
      this.innerDialog.queryParams.enddate = arr[1]
    },
    /* 获取媒资列表 */
    handleInnerQuery() {

    },
    /* 重置媒资搜索条件 */
    handleInnerReset() {
      this.innerDialog.dateValue = ''
      Object.assign(this.innerDialog.queryParams, {
        startdate: '',
        enddate: '',
        page: 1
      })
      this.resetForm('innerForm')
    },
    /* 确认选择的媒资 */
    handleInnerChoose(row) {

    }
  }
}
</script>
