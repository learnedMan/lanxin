<!-- 举报处理 -->
<style type="text/scss" lang="scss" scoped>
  .xl-report {
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
  <div class="xl-report">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
        size="small"
      >
        <el-form-item
          label="所属产品:"
        >
          <el-select
            v-model="queryParams.sourceId"
            placeholder="请选择所属产品"
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
          label="举报人:"
          prop="reportNickname"
        >
          <el-input
            v-model="queryParams.reportNickname"
            placeholder="请输入姓名"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <!--<el-form-item
          label="联系方式:"
          prop="reportMobile"
        >
          <el-input
            v-model="queryParams.reportMobile"
            placeholder="请输入联系方式"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>-->
        <el-form-item
          label="举报内容:"
          prop="reportContent"
        >
          <el-input
            v-model="queryParams.reportContent"
            placeholder="请输入关键字"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <!--<el-form-item
          label="举报类型:"
          prop="reportType"
        >
          <el-select
            v-model="queryParams.reportType"
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
        </el-form-item>-->
        <el-form-item
          label="回复状态:"
          prop="replyStatus"
        >
          <el-select
            v-model="queryParams.replyStatus"
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
            v-model="queryParams.handleStatus"
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
        <el-form-item label="投诉时间:">
          <el-date-picker
            v-model="reportDate"
            type="datetimerange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange($event, 'reportDate')"
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
        label="举报人"
        align="center"
        prop="reportNickname"
      />
      <el-table-column
        label="举报内容"
        align="center"
        prop="reportContent"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="所属新闻"
        align="center"
        prop="mediaTitle"
      />
      <el-table-column
        label="举报类型"
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
        label="举报时间"
        align="center"
        prop="reportTime"
      />
      <el-table-column
        label="操作"
        align="center"
        width="120"
      >
        <template slot-scope="scope">
          <!-- 查看 -->
          <Iconbutton
            icontype="ckxq"
            label="详情"
            @fatherMethod="handleWatch(scope.row)"
          ></Iconbutton>
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
          <div class="xl-report--title">
            <span class="xl-report--title-label">基础信息</span>
          </div>
          <el-form label-width="100px" style="padding-left: 10px">
            <el-form-item label="举报用户:">{{ baseInfo.reportNickname }}</el-form-item>
            <el-form-item label="举报类型:">{{ baseInfo.reportTypeLabel }}</el-form-item>
            <el-form-item label="举报对象:">{{ baseInfo.newTitle }}</el-form-item>
            <el-form-item label="所属新闻:">{{ baseInfo.newTitle }}</el-form-item>
            <el-form-item label="举报时间:">{{ baseInfo.reportTime }}</el-form-item>
            <el-form-item label="处理状态:">{{ baseInfo.handleStatusLabel }}</el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div class="xl-report--title">
            <span class="xl-report--title-label">回复记录 <span v-show="dialog.isReply">(待回复)</span></span>
            <el-button
              type="primary"
              size="mini"
              @click="handleReply"
            >
              回复
            </el-button>
          </div>
          <ul class="xl-report--content">
            <li v-for="(list, index) of reportList" :key="index" class="xl-report--item">
              <div class="xl-report--item-name">{{ list.replyNickname }}</div>
              <div class="xl-report--item-detail">
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
import { getReport, getReportDetail, reportReply } from '@/api/workbench.js'
import { getproduct } from '@/api/manage'
import { getNewDetail } from '@/api/content'
import uploadSingle from '@/components/Upload/uploadSingle.vue'

export default {
  components: {
    uploadSingle
  },
  data() {
    return {
      productLists: [],
      queryParams: {
        reportNickname: '',
        reportMobile: '',
        reportContent: '',
        reportType: '',
        replyStatus: '',
        handleStatus: '',
        beginReplyTime: '',
        endReplyTime: '',
        beginReportTime: '',
        endReportTime: '',
        sourceId: '', // 来源id
        page: 1,
        limit: 10
      },
      reportDate: '', // 投诉时间
      replyDate: '', // 回复时间
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
      mediaOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '新闻',
          value: 1
        },
        {
          label: '评论',
          value: 2
        }
      ], // 举报对象类型
      typeOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '低俗色情',
          value: '1'
        },
        {
          label: '违法违政',
          value: '2'
        },
        {
          label: '侵权',
          value: '3'
        },
        {
          label: '标题党',
          value: '4'
        },
        {
          label: '与事实不符',
          value: '5'
        },
        {
          label: '内容灌水',
          value: '6'
        },
        {
          label: '排版格式有误',
          value: '7'
        },
        {
          label: '有错别字',
          value: '8'
        },
        {
          label: '其他',
          value: '9'
        },
      ], // 举报类型列表
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
      loading: false,
      tableData: [], // 列表数据
      dialog: {
        title: '举报详情',
        show: false,
        isReply: false, // 是否已回复
        id: ''
      },
      baseInfo: {
        reportNickname: '', // 用户
        reportTypeLabel: '', // 举报类型
        newTitle: '', // 举报对象/所属新闻
        reportTime: '', // 举报时间
        handleStatusLabel: '' // 处理状态
      },
      reportList: [], // 回复列表接口
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
    this.getList();
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
      this.reportDate = ''
      this.replyDate = ''
      Object.assign(this.queryParams, {
        beginReportTime: '',
        endReportTime: '',
        beginReplyTime: '',
        endReplyTime: '',
        page: 1
      })
      this.resetForm('queryForm')
    },
    /* 搜索 */
    handleQuery() {
      this.queryParams.page = 1;
      this.getList()
    },
    /* 时间变化 */
    handleDateChange(val, key) {
      const arr = val || ['', '']
      if (key === 'reportDate') {
        this.queryParams.beginReportTime = arr[0]
        this.queryParams.endReportTime = arr[1]
      } else {
        this.queryParams.beginReplyTime = arr[0]
        this.queryParams.endReplyTime = arr[1]
      }
    },
    /* 获取列表数据 */
    getList() {
      this.loading = true
      this.tableData = []
      const params = { ...this.queryParams }
      getReport(this.removePropertyOfNullFor0(params)).then(res => {
        this.tableData = (res.data?.datas || []).map(item => ({
          ...item,
          reportTypeLabel: item.reportType.replace(/[\[|\]]/g, '').split(',').map(n => this.typeOptions.find(type => type.value == n)?.label).join(),
          replyStatusLabel: this.replyOptions.find(n => n.value === item.replyStatus)?.label,
          handleStatusLabel: this.handleOption.find(n => n.value === item.handleStatus)?.label,
        }))
        this.total = res.data?.count || 0
      }).finally(() => {
        this.loading = false
      })
    },
    /* 查看详情 */
    handleWatch(row) {
      const { id } = row
      this.dialog.id = id
      this.dialog.show = true
      this.getReportDetail(id)
    },
    /* 获取详情 */
    getReportDetail(id) {
      getReportDetail({
        id
      }).then(async res => {
        const data = res.data;
        /*const newData = await getNewDetail(data.newId);
        console.log(newData)*/
        this.baseInfo = {
          ...(data || {}),
          reportTypeLabel: data.reportType.replace(/[\[|\]]/g, '').split(',').map(n => this.typeOptions.find(type => type.value == n)?.label).join(),
          handleStatusLabel: this.handleOption.find(n => n.value === data.handleStatus)?.label,
        }
        this.reportList = (data.replyData || []).map(n => ({
          ...n,
          replyNickname: n.replyType === 2 ? '官方回复' : n.replyNickname,
          replyImg: n.replyImg.split(',')
        }))
        const length = this.reportList.length
        this.dialog.isReply = length && this.reportList[length - 1].replyType === 1
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
      reportReply({
        ...this.innerDialog.form,
        reportId: id
      }).then(() => {
        this.$message.success('回复成功!')
        this.innerDialog.show = false
        this.getReportDetail(id)
        this.getList()
      })
    }
  }
}
</script>
