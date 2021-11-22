<style type="text/scss" lang="scss" scoped>
  .xl-media-all {
    padding: 30px;
  }
</style>
<template>
  <div class="xl-media-all">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="媒资名称:"
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
          label="所属订阅号:"
          prop="source"
        >
          <el-input
            v-model="queryParams.source"
            placeholder="请输入所属订阅号"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="创建日期:">
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
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleReset"
          >
            重置
          </el-button>
          <el-button v-points = "1500"
            type="primary"
            size="mini"
            @click="handleQuery"
          >
            搜索
          </el-button>
          <el-button v-points = "1500"
            type="success"
            size="mini"
            :disabled="selection.length === 0"
            @click="handlePublish"
          >
            批量发布
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      ref="multipleTable"
      v-loading="loading"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%;overflow: auto;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
      v-if="!isMobile"
        label="稿件ID"
        align="center"
        width="80"
        prop="id"
      />
      <el-table-column
      v-if="!isMobile"
        label="稿件封面"
        align="center"
        prop="id"
        width="120"
      >
        <template slot-scope="scope">
          <el-image
            lazy
            style="width: 80px; height: 45px"
            :src="scope.row.cover || useravatar"
            :preview-src-list="[scope.row.cover || useravatar]"
            fit="contain"
          >
            <img slot="error" :src="useravatar" alt="" style="width: 100%;height: 100%">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        label="稿件标题"
        align="center"
        prop="title"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <el-button v-points = "1500" type="text" @click="handleWatch(scope.row)" class="watch-detail-btn">{{ scope.row.title }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="300"
      >
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 查看 -->
            <Iconbutton
              icontype="ckxq"
              label="查看详情"
              @fatherMethod="handleWatch(scope.row)"
            ></Iconbutton>
            <!-- <Iconbutton
              icontype="xx"
              label="下线"
              @fatherMethod="handleOffline(scope.row)"
            ></Iconbutton> -->
            <!-- 复制 -->
            <Iconbutton
              icontype="fz"
              label="复制"
              @fatherMethod="handleListCopy(scope.row)"
            ></Iconbutton>
            <!-- 发布 -->
            <!-- <Iconbutton
              icontype="fb"
              label="栏目"
              @fatherMethod="handleDialogShow('publish', scope.row)"
            ></Iconbutton> -->
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
    <!-- 批量或单个发布栏目 -->
    <el-dialog
      width="80%"
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialog.form"
        :rules="dialogRules"
      >
        <el-form-item
          label-width="60px"
          label="标题"
          prop="title"
        >
          <el-input  v-model="dialog.form.title" disabled></el-input>
        </el-form-item>
        <el-form-item
          label-width="60px"
        >
         <editor v-model="concent" disabled/>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getMeidaArticlList, deleteScript, PatchScriptCollect, batchPublishScriptCollect, copyMeidaArtic, collectOfflineNews,getMeditDetail } from '@/api/content'
import { getChannels } from '@/api/manage'
import VersionHistory from '@/views/content/mediaAssets/components/versionHistory'
import Editor from '@/components/editor'
export default {
  name: 'All-media',
  components: {
    VersionHistory,Editor
  },
  data() {
    return {
      queryParams: {
        keyword: '',
        source: '',
        startdate: '',
        enddate: '',
        pageSize: 10,
        page: 1
      },
      concent: '',
      loading: false,
      total: 0, // 总数
      dateValue: '',
      typeOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '微信',
          value: 'wechat'
        },
        {
          label: '微博',
          value: 'weibo'
        },
        {
          label: '媒体',
          value: 'media'
        }
      ], // 稿件类型
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
      useravatar: require('@/assets/c_images/useravatar.jpg'), // 默认头像
      dialog: {
        show: false,
        title: '详情',
        form: {
          title: '',
          concent: ''
        }
      },
      dialogRules: {
        channel_id: { required: true, message: '请选择栏目', trigger: 'change' }
      },
      cascaderOption: {
        checkStrictly: true, // 是否强制父子不关联
        emitPath: false, // 返回值是否为数组
        value: 'id', // 选项值
        label: 'name', // 显示值
        multiple: true // 多选
      }, // 级联选择器配置
      channelsList: [], // 栏目列表
      selection: [], // 表格选中项
      history: {
        show: false,
        id: ''
      }
    }
  },
  created() {
    this.getList()
    this.getChannels()
  },
  methods: {
    /*
      * 搜索时间变化
      * */
    handleDateChange(val) {
      const arr = val || ['', '']
      this.queryParams.startdate = arr[0]
      this.queryParams.enddate = arr[1]
    },
    /*
      * 重置搜索
      * */
    handleReset() {
      this.dateValue = ''
      Object.assign(this.queryParams, {
        startdate: '',
        enddate: '',
        page: 1
      })
      this.resetForm('queryForm')
    },
    /*
      * 搜索
      * */
    handleQuery() {
      this.queryParams.page = 1;
      this.getList()
    },
    /*
      * 新增
      * */
    handleAdd() {
      this.$router.push({ name: 'Add-media', query: { redirect: 'All-media' } })
    },
    /*
      * 批量发布
      * */
    handlePublish() {
      this.handleDialogShow()
    },
    /*
      * 获取表格数据
      * */
    getList() {
      this.loading = true
      this.selection = []
      this.tableData = []
      getMeidaArticlList(this.removePropertyOfNull(this.queryParams)).then(res => {
        this.tableData = (res.data || []).map(item => {
          return {
            ...item,
          }
        })
        this.total = res.total
      }).finally(() => {
        this.loading = false
      })
    },
    /*
      * 列表选择框变化
      * */
    handleSelectionChange(arr) {
      this.selection = arr.map(n => n.id)
    },
    /*
      * 查看栏目
      * */
    handleListWatch(row) {
      this.$router.push(`/content/publicSentiment/watch-column?id=${row.id}&redirect=collect-article`)
    // this.$router.push(`/content/mediaAssets/watch-column?id=${row.id}&redirect=All-media`)
    },
    /* 复制稿件 */
    handleListCopy (row) {
      const { id, title } = row;
      let hypertext_id = id
      copyMeidaArtic( {
        title: `[副本]${title}`,
        hypertext_id
      }).then(({ id, message }) => {
        if(id) {
          this.getList();
          this.$router.push({ name: 'Add-media', query: { id, redirect: 'All-media' }})
          this.$message.success('复制成功')
        }else {
          this.$message.warning(message)
        }
      })
    },
    /*
    * 编辑
    * */
    handleEdit(row) {
      const { id, news } = row;
      if(news.some(n => n.status === 1)) return this.$message.warning('该文稿下存在已发布的新闻，请点击“一键下线”按钮下线所有新闻后再进行编辑')
      this.$router.push({ name: 'Add-media', query: { id, redirect: 'All-media' }})
    },
    /* 预览 */
    handlePreview (row) {
      const { id } = row;
      this.$router.push({ name: 'Preview', query: { id, type: 'scripts' }})
    },
    /* 查看历史记录 */
    handleHistory (row) {
      const { id } = row;
      this.history = {
        show: true,
        id
      }
    },
    /* 查看详情 */
    handleWatch (row) {
      const { id } = row;
      getMeditDetail(id).then(res =>{
        this.dialog.show = true
        this.dialog.form.title = res.title
        this.concent = res.content
      })
      // this.$router.push({ name: 'Add-media', query: { id, disabled: '1',media: '1' } })
    },
    /*
      * 列表删除
      * */
    handleListDelete(row) {
      const { id } = row
      this.$confirm(`此操作将永久删除这条稿件id为${id}的明细, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteScript(id).then(() => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getList()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    /*
      * 关闭弹框
      * */
    closeDialog() {
      this.dialog.show = false
    },
    
    /*
      * 获取栏目列表
      * */
    getChannels() {
      getChannels({
          with_special_channels: 'topic'
      }).then(res => {
        this.channelsList = res.map(n => ({
          ...n,
          disabled: true
        }))
        this.changeChannelName(this.channelsList)
      })
    }
  }
}
</script>
