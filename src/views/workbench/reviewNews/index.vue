<!-- 新闻审核 -->
<style type="text/scss" lang="scss" scoped>
  .xl-review-news {
    padding: 30px;
  }
</style>
<template>
  <div class="xl-review-news">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="新闻标题:"
          prop="keyword"
        >
          <el-input
            v-model="queryParams.keyword"
            placeholder="请输入关键字"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="发布栏目:"
          prop="channel_id"
        >
          <el-cascader
            v-model="queryParams.channel_id"
            style="width: 200px"
            :options="channelsList"
            :props="cascaderOption"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="状态:"
          prop="status"
        >
          <el-select
            v-model="queryParams.status"
            size="small"
            placeholder="请选择状态"
            clearable
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="提交时间:">
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
            @click="handleReset"
          >
            重置
          </el-button>
          <el-button
            type="primary"
            size="mini"
            @click="handleQuery"
          >
            搜索
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="selection.length === 0"
            @click="handleBatchThrough"
          >
            批量通过
          </el-button>
          <el-button
            type="warning"
            size="mini"
            :disabled="selection.length === 0"
            @click="handleBatchReject"
          >
            批量拒绝
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      ref="multipleTable"
      v-loading="loading"
      :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
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
        label="发布栏目ID"
        align="center"
        prop="channel_id"
      />
      <el-table-column
        label="发布栏目"
        align="center"
        prop="channel.name"
      />
      <el-table-column
        label="状态"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.statusLabel }}
          <el-popover
            v-if="scope.row.review_remark"
            title="拒绝原因"
            placement="top"
            width="200"
            trigger="click"
            :content="scope.row.review_remark"
          >
            <i slot="reference" class="el-icon-info" style="color: #ccc;" />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="提交时间"
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
          <div class="verify-table-action">
            <!-- 查看 -->
            <el-button
              type="text"
              icon="el-icon-view"
              size="small"
              @click="goLink(scope.row)"
            >
              查看
            </el-button>
            <!-- 通过 -->
            <el-button
              v-if="scope.row.status !== 1"
              type="text"
              icon="el-icon-check"
              size="small"
              @click="handleThrough(scope.row)"
            >
              通过
            </el-button>
            <!-- 拒绝 -->
            <el-button
              v-if="scope.row.status !== 2"
              type="text"
              icon="el-icon-close"
              size="small"
              @click="handleReject(scope.row)"
            >
              拒绝
            </el-button>
          </div>
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
    <!-- 批量或单个拒绝 -->
    <el-dialog
      width="600px"
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialog.form"
        :rules="dialogRules"
        label-width="120px"
      >
        <el-form-item
          label="拒绝原因"
          prop="remark"
        >
          <el-select
            v-model.trim="dialog.form.remark"
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
          v-if="dialog.form.remark === '自定义原因'"
        >
          <el-input
            v-model.trim="dialog.form.reason"
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
        <el-button @click="handleDialogClose">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="handleDialogClose('confirm')"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 编辑新闻 -->
    <el-dialog
      width="1200px"
      title="查看"
      top="20px"
      :visible.sync="detailDialog.show"
      v-if="detailDialog.show"
    >
      <new-detail
        :id="detailDialog.id"
        :visible.sync="detailDialog.show"
        :disabled="true"
        @refresh="refresh"
      />
    </el-dialog>
  </div>
</template>

<script>
import { getChannels } from '@/api/manage'
import { getNews, changeNewsStatus } from '@/api/content'
import { getReasons } from '@/api/workbench'
import NewDetail from './detail'
export default {
  name: 'ReviewScript',
  components: {
    NewDetail
  },
  data() {
    return {
      statusOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '已审核',
          value: 1
        },
        {
          label: '待审核',
          value: 0
        },
        {
          label: '已拒绝',
          value: 2
        }
      ], // 状态列表
      queryParams: {
        keyword: '', // 标题
        channel_id: '', // 栏目
        startdate: '', // 提交时间
        status: '', // 状态
        enddate: '',
        pageSize: 10,
        page: 1
      },
      total: 0,
      loading: false,
      dateValue: '', // 时间区间
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
      tableData: [], // 列表数据
      selection: [], // 表格选中项
      cascaderOption: {
        checkStrictly: true, // 是否强制父子不关联
        emitPath: false, // 返回值是否为数组
        value: 'id', // 选项值
        label: 'name', // 显示值
        multiple: false // 多选
      }, // 级联选择器配置
      channelsList: [], // 栏目列表
      rejectLists: [], // 拒绝原因列表
      dialog: {
        show: false,
        title: '通过',
        form: {
          ids: '',
          status: 2,
          reason: '',
          remark: ''
        }
      },
      dialogRules: {
        remark: { required: true, message: '请选择拒绝原因', trigger: 'change' },
        reason: { required: true, message: '请输入自定义原因', trigger: 'change' },
      },
      detailDialog: {
        show: false,
        id: ''
      }
    }
  },
  created() {
    this.getChannels()
    this.getRejectList()
    this.getList()
  },
  methods: {
    /* 通过 */
    handleThrough(row) {
      const { id } = row
      changeNewsStatus({
        ids: id,
        status: 1
      }).then(() => {
        this.$message({
          message: '审核通过成功',
          type: 'success'
        })
        this.getList()
      })
    },
    /* 批量通过 */
    handleBatchThrough() {
      changeNewsStatus({
        ids: this.selection.join(),
        status: 1
      }).then(() => {
        this.$message({
          message: '批量审核通过成功',
          type: 'success'
        })
        this.getList()
      })
    },
    /* 拒绝 */
    handleReject(row) {
      const { id } = row
      Object.assign(this.dialog, {
        show: true,
        title: '拒绝',
        form: {
          ids: id,
          status: 2,
          remark: ''
        }
      })
      this.$nextTick(() => {
        this.$refs.dialogForm?.clearValidate()
      })
    },
    /* 批量拒绝 */
    handleBatchReject() {
      Object.assign(this.dialog, {
        show: true,
        title: '批量拒绝',
        form: {
          ids: this.selection.join(),
          status: 2,
          remark: ''
        }
      })
      this.$nextTick(() => {
        this.$refs.dialogForm?.clearValidate()
      })
    },
    /*
        * 搜索时间变化
        * */
    handleDateChange(val) {
      const arr = val || ['', '']
      this.queryParams.startdate = arr[0]
      this.queryParams.enddate = arr[1]
    },
    /* 搜索 */
    handleQuery() {
      this.getList()
    },
    /* 重置 */
    handleReset() {
      this.dateValue = ''
      Object.assign(this.queryParams, {
        startdate: '',
        enddate: '',
        page: 1
      })
      this.resetForm('queryForm')
    },
    /* 查看新闻详情 */
    goLink(row) {
      const { id } = row
      this.detailDialog = {
        id,
        show: true
      }
    },
    /* 刷新数据 */
    refresh() {
      this.getList()
      this.dialog.id = ''
    },
    /* 确认或关闭弹框 */
    handleDialogClose(status) {
      if (status === 'confirm') {
        this.$refs.dialogForm.validate(val => {
          if (val) {
            const params = { ...this.dialog.form };
            if(params.remark === '自定义原因') params.remark = params.reason, delete params.reason;
            changeNewsStatus(params).then(() => {
              this.$message({
                message: `${this.dialog.title}成功`,
                type: 'success'
              })
              this.getList()
            }).finally(() => {
              this.dialog.show = false
            })
          }
        })
      } else {
        this.dialog.show = false
      }
    },
    /*
        * 列表选择框变化
        * */
    handleSelectionChange(arr) {
      this.selection = arr.map(n => n.id)
    },
    /* 获取列表数据 */
    getList() {
      this.loading = true
      this.selection = []
      this.tableData = []
      const params = { ...this.queryParams }
      getNews(this.removePropertyOfNull(params)).then(res => {
        let statusLabel
        this.tableData = (res.data || []).map(n => {
          statusLabel = this.statusOptions.find(item => item.value === n.status)?.label
          return {
            ...n,
            statusLabel
          }
        })
        this.total = res.total
      }).finally(() => {
        this.loading = false
      })
    },
    /* 获取拒绝原因列表 */
    getRejectList() {
      getReasons({
        pageSize: 9999,
        page: 1
      }).then(res => {
        this.rejectLists = [{
          id: '98998989',
          name: '自定义原因'
        }].concat(res.data || [])
      })
    },
    /*
        * 获取栏目列表
        * */
    getChannels() {
      getChannels().then(res => {
        this.channelsList = res
      })
    }
  }
}
</script>
