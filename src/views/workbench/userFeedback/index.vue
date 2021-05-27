<!-- 用户反馈 -->
<style type="text/scss" lang="scss" scoped>
  .xl-feedback {
    padding: 30px;
    label {
      font-weight: normal;
    }
    &--title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-left: 6px solid #409eff;
      height: 24px;
      padding-left: 10px;
      margin-bottom: 20px;
      &-label {
        font-weight: bold;
        span {
          font-weight: normal;
        }
      }
    }
    &--content {
      padding: 0;
      margin: 0;
      max-height: 400px;
      overflow: auto;
    }
    &--item {
      list-style: none;
      padding: 0 20px 0 0;
      margin: 0;
      display: flex;
      align-items: flex-start;
      &-name {
        line-height: 24px;
        min-width: 100px;
        text-align: right;
        font-weight: 500;
      }
      &-detail {
        padding: 0 0 10px 10px;
        border-bottom: 1px solid #eee;
        flex: 1;
        .date {
          line-height: 24px;
          margin-bottom: 5px;
        }
        P {
          margin: 0;
          padding: 0;
          line-height: 24px;
        }
      }
    }
  }
</style>
<template>
  <div class="xl-feedback">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
        size="small"
      >
        <el-form-item
          label="所属产品:"
          prop="sourceId"
        >
          <el-select
            v-model="queryParams.sourceId"
            placeholder="请选择所属产品"
            clearable
          >
            <el-option
              v-for="item in productLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="反馈人:"
          prop="feedbackNickname"
        >
          <el-input
            v-model="queryParams.feedback_nickname"
            placeholder="请输入姓名"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="联系方式:"
          prop="feedbackMobile"
        >
          <el-input
            v-model="queryParams.feedback_mobile"
            placeholder="请输入联系方式"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="反馈内容:"
          prop="feedbackContent"
        >
          <el-input
            v-model="queryParams.feedback_content"
            placeholder="请输入关键字"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="反馈类型:"
          prop="type"
        >
          <el-select
            v-model="queryParams.feedback_type"
            size="small"
            placeholder="请选择类型"
            clearable
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="回复状态:"
          prop="replyStatus"
        >
          <el-select
            v-model="queryParams.reply_status"
            size="small"
            placeholder="请选择回复状态"
            clearable
          >
            <el-option
              v-for="item in replyOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="处理状态:"
          prop="handleStatus"
        >
          <el-select
            v-model="queryParams.handle_status"
            size="small"
            placeholder="请选择回复状态"
            clearable
          >
            <el-option
              v-for="item in handleOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="反馈时间:">
          <el-date-picker
            v-model="feedbackDate"
            type="datetimerange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange($event, 'feedbackDate')"
          />
        </el-form-item>
        <el-form-item label="回复时间:">
          <el-date-picker
            v-model="replyDate"
            type="datetimerange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange($event, 'replyDate')"
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
        </el-form-item>
      </el-form>
    </div>
    <el-table
      ref="multipleTable"
      v-loading="loading"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        label="ID"
        align="center"
        prop="id"
      />
      <el-table-column
        label="反馈人"
        align="center"
        prop="reportNickname"
      />
      <el-table-column
        label="联系方式"
        align="center"
        prop="reportMobile"
      />
      <el-table-column
        label="反馈内容"
        align="center"
        prop="reportContent"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="反馈类型"
        align="center"
        prop="reportTypeLabel"
      />
      <el-table-column
        label="回复状态"
        align="center"
        prop="replyStatusLabel"
      />
      <el-table-column
        label="处理状态"
        align="center"
        prop="handleStatusLabel"
      />
      <el-table-column
        label="回复时间"
        align="center"
        prop="replyTime"
      />
      <el-table-column
        label="反馈时间"
        align="center"
        prop="reportTime"
      />
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <!-- 查看 -->
          <el-button
            type="text"
            icon="el-icon-view"
            size="small"
            @click="handleWatch(scope.row)"
          >
            查看
          </el-button>
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
    <el-dialog
      width="1000px"
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <el-dialog
        width="500px"
        title="回复"
        :visible.sync="innerDialog.show"
        append-to-body
      >
        <el-form
          ref="innerForm"
          :inline="true"
          :model="innerDialog.form"
          size="small"
        >
          <el-form-item label="回复内容:" prop="replyContent">
            <el-input
              v-model="innerDialog.form.replyContent"
              placeholder="请输入回复内容"
              type="textarea"
              rows="5"
              clearable
              style="width: 300px"
            />
          </el-form-item>
          <el-form-item label="上传图片:" prop="replyImg">
            <upload-single v-model="innerDialog.form.replyImg" />
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <div slot="footer" class="dialog-footer">
            <el-button @click="innerDialog.show = false">取 消</el-button>
            <el-button type="primary" @click="enterInnerDialog">确 定</el-button>
          </div>
        </div>
      </el-dialog>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="xl-feedback--title">
            <span class="xl-feedback--title-label">基础信息</span>
          </div>
          <el-form label-width="100px" style="padding-left: 10px">
            <el-form-item label="反馈用户:">{{ baseInfo.feedbackNickname }}</el-form-item>
            <el-form-item label="反馈类型:">{{ baseInfo.feedbackTypeLabel }}</el-form-item>
            <el-form-item label="反馈时间:">{{ baseInfo.feedbackTime }}</el-form-item>
            <el-form-item label="处理状态:">{{ baseInfo.handleStatusLabel }}</el-form-item>
            <el-form-item label="设备:">{{ baseInfo.appDevice }}</el-form-item>
            <el-form-item label="系统:">{{ baseInfo.appSystem }}</el-form-item>
            <el-form-item label="APP版本:">{{ baseInfo.appVersion }}</el-form-item>
            <el-form-item label="当前网络:">{{ baseInfo.network }}</el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div class="xl-feedback--title">
            <span class="xl-feedback--title-label">回复记录 <span v-show="dialog.isReply">(待回复)</span></span>
            <el-button
              type="primary"
              size="mini"
              @click="handleReply"
            >
              回复
            </el-button>
          </div>
          <ul class="xl-feedback--content">
            <li v-for="(list, index) of feedbackList" :key="index" class="xl-feedback--item">
              <div class="xl-feedback--item-name">{{ list.feedbackNickname }}</div>
              <div class="xl-feedback--item-detail">
                <div class="date">{{ list.createdAt }}</div>
                <p>{{ list.replyContent }}</p>
                <el-image
                  v-for="(item, i) of list.replyImg"
                  :key="i"
                  style="width: 100px; height: 100px"
                  :src="item"
                  :preview-src-list="list.replyImg"
                  fit="cover"
                />
              </div>
            </li>
          </ul>
        </el-col>
      </el-row>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialog.show = false">
          关  闭
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getSourceList, getFeedback, getFeedbackDetail, reply } from '@/api/workbench.js'
import { getproduct } from '@/api/manage'
import uploadSingle from '@/components/Upload/uploadSingle.vue'

export default {
  name: 'Feedback',
  components: {
    uploadSingle
  },
  data() {
    return {
      productLists: [],
      queryParams: {
        feedback_nickname: '', // 反馈人
        feedback_mobile: '', // 联系人
        feedback_content: '', // 反馈内容
        feedback_type: '', // 反馈类型
        reply_status: '', // 回复状态
        handle_status: '', // 处理状态
        begin_reply_time: '', // 回复开始时间
        end_reply_time: '', // 回复结束时间
        begin_feedback_time: '', // 反馈开始时间
        end_feedback_time: '', // 反馈结束时间
        sourceId: '', // 来源id
        page: 1,
        limit: 10
      },
      feedbackDate: '', // 反馈时间
      replyDate: '', // 回复时间
      typeOptions: [
        {
          label: '全部',
          value: ''
        }
      ], // 反馈类型列表
      replyOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '待回复',
          value: 1
        },
        {
          label: '已回复',
          value: 2
        }
      ], // 回复状态列表
      handleOption: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '处理中',
          value: 1
        },
        {
          label: '已处理',
          value: 2
        }
      ], // 处理状态列表
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
      loading: false,
      tableData: [], // 列表数据
      dialog: {
        title: '反馈详情',
        show: false,
        isReply: false, // 是否已回复
        id: ''
      },
      baseInfo: {
        feedbackNickname: '', // 用户
        feedbackTypeLabel: '', // 反馈类型
        feedbackTime: '', // 反馈时间
        handleStatusLabel: '', // 处理状态
        appDevice: '', // 设备
        appSystem: '', // 系统
        appVersion: '', // 版本号
        network: '' // 网络
      },
      feedbackList: [], // 反馈列表接口
      total: 0,
      innerDialog: {
        show: false,
        form: {
          replyContent: '',
          replyImg: ''
        }
      }
    }
  },
  async created() {
    await this.getProductList();
    //this.getSourceList();
    this.getList()
  },
  methods: {
    /* 获取产品列表 */
    getProductList () {
      return getproduct({}).then(res => {
        const data = res.data || []
        this.productLists = data.map(n => ({
          label: n.name,
          value: n.source_id
        }));
        this.queryParams.sourceId = data?.[0]?.source_id;
      });
    },
    /* 重置 */
    handleReset() {
      this.feedbackDate = ''
      this.replyDate = ''
      Object.assign(this.queryParams, {
        begin_feedback_time: '',
        end_feedback_time: '',
        begin_reply_time: '',
        end_reply_time: '',
        page: 1
      })
      this.resetForm('queryForm')
    },
    /* 搜索 */
    handleQuery() {
      this.getList()
    },
    /* 时间变化 */
    handleDateChange(val, key) {
      const arr = val || ['', '']
      if (key === 'feedbackDate') {
        this.queryParams.begin_feedback_time = arr[0]
        this.queryParams.end_feedback_time = arr[1]
      } else {
        this.queryParams.begin_reply_time = arr[0]
        this.queryParams.end_reply_time = arr[1]
      }
    },
    /* 查看详情 */
    handleWatch(row) {
      const { id } = row
      this.dialog.id = id
      this.dialog.show = true
      this.getFeedDetail(id)
    },
    /* 获取详情 */
    getFeedDetail(id) {
      getFeedbackDetail({
        id
      }).then(res => {
        const data = res.data
        this.baseInfo = {
          ...(data || {}),
          feedbackTypeLabel: data.feedbackType.split(',').map(n => this.typeOptions.find(type => type.value == n)?.label).join(),
          handleStatusLabel: this.handleOption.find(n => n.value === data.handleStatus)?.label
        }
        this.feedbackList = (data.replyData || []).map(n => ({
          ...n,
          feedbackNickname: n.replyType === 2 ? '官方回复' : n.feedbackNickname,
          replyImg: n.replyImg.split(',')
        }))
        const length = this.feedbackList.length
        this.dialog.isReply = length && this.feedbackList[length - 1].replyType === 1
      })
    },
    /* 回复 */
    handleReply() {
      this.resetForm('innerForm')
      this.innerDialog.show = true
    },
    /* 确认回复 */
    enterInnerDialog() {
      const id = this.dialog.id
      reply({
        ...this.innerDialog.form,
        feedbackId: id
      }).then(() => {
        this.$message.success('回复成功!')
        this.innerDialog.show = false
        this.getFeedDetail(id)
        this.getList()
      })
    },
    /* 获取列表数据 */
    getList() {
      this.loading = true
      this.tableData = []
      const params = { ...this.queryParams }
      getFeedback(this.removePropertyOfNullFor0(params)).then(res => {
        this.tableData = (res.data || []).map(item => ({
          ...item,
          reportTypeLabel: item.reportType.split(',').map(n => this.typeOptions.find(type => type.value == n)?.label).join(),
          replyStatusLabel: this.replyOptions.find(n => n.value === item.replyStatus)?.label,
          handleStatusLabel: this.handleOption.find(n => n.value === item.handleStatus)?.label
        }))
        this.total = res.total || 0
      }).finally(() => {
        this.loading = false
      })
    },
    /* 获取来源列表 */
    getSourceList() {
      getSourceList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
