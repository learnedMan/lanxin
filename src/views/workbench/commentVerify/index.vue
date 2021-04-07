<style type="text/scss" lang="scss" scoped>
  .xl-comment-verify {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    padding: 30px 0 20px;
    flex-direction: column;
    .verify-table {
      flex: 1;
      margin-top: 10px;
    }
    .verify-table-action {
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        flex: 1;
        cursor: pointer;
        font-size: 16px;
      }
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
          <el-button size="small" type="primary" icon="el-icon-circle-check">批量通过</el-button>
          <el-button size="small" type="primary" icon="el-icon-circle-close">批量拒绝</el-button>
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
        <el-table-column label="操作" align="center">
          <template>
            <div class="verify-table-action">
              <!-- 不清楚 -->
              <i class="el-icon-edit" />
              <!-- 查看 -->
              <i class="el-icon-view" />
              <!-- 回复 -->
              <i class="el-icon-chat-line-square" />
              <!-- 审批通过 -->
              <i class="el-icon-circle-check" />
              <!-- 拒绝 -->
              <i class="el-icon-circle-close" />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="verify-page">
      <pagination
        v-show="page.total > 0"
        :total="page.total"
        :page.sync="page.current"
        :limit.sync="page.size"
        @pagination="getListData"
      />
    </div>
    <el-dialog width="700px" :title="dialog.title" :visible.sync="dialog.show">
      <el-form ref="dialogForm" :model="dialog.reply" :rules="dialog.replyRules">
        <el-form-item label-width="120px" label="回复昵称" prop="nikeName">
          <el-input v-model="dialog.reply.nikeName" style="width: 300px" autocomplete="off" placeholder="请输入昵称" />
        </el-form-item>
        <el-form-item label-width="120px" label="回复内容" prop="nikeName">
          <el-input v-model="dialog.reply.remark" style="width: 300px" type="textarea" autocomplete="off" />
        </el-form-item>
        <!--<el-form-item label-width="120px" label="是否启用" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>-->
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="enterDialog">确 定</el-button>
      </div>
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
        status: '', // 标题
        checkDate: '', // 审核时间
        submitDate: '' // 提交时间
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
          key: 'checkDate'
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
        total: 10,
        current: 1,
        size: 10
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
        refuse: {
          cause: ''
        }, // 拒绝
        refuseRules: {
          cause: { required: true, message: '请选择拒绝原因', trigger: 'change' }
        } // 拒绝验证
      }
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

    },
    /*
        * 弹框确认
        * */
    enterDialog() {

    }
  }
}
</script>
