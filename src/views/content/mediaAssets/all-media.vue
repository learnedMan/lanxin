<style type="text/scss" lang="scss" scoped>
  .xl-media-all {

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
          label="稿件名称:"
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
          label="稿件类型:"
          prop="type"
        >
          <el-select
            v-model="queryParams.type"
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
            @click="handleAdd"
          >
            新增
          </el-button>
          <el-button
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
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        label="稿件ID"
        align="center"
        prop="id"
      />
      <el-table-column
        label="稿件封面"
        align="center"
        prop="id"
        width="120"
      >
        <template slot-scope="scope">
          <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.cover || useravatar"
            :preview-src-list="[scope.row.cover || useravatar]"
            fit="cover"
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
          <el-button type="text" @click="handleWatch(scope.row)" class="watch-detail-btn">{{ scope.row.title }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="稿件类型"
        align="center"
        prop="type"
      />
      <el-table-column
        label="作者"
        align="center"
        prop="author_name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="发布栏目"
        align="center"
        prop="id"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleListWatch(scope.row)"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="更新时间"
        align="center"
        prop="updated_at"
      />
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
            <!-- 编辑 -->
            <Iconbutton
              icontype="xg"
              label="编辑"
              @fatherMethod="handleEdit(scope.row)"
            ></Iconbutton>
            <!-- 一键下线 -->
            <Iconbutton
              icontype="xx"
              label="下线"
              @fatherMethod="handleOffline(scope.row)"
            ></Iconbutton>
            <!-- 删除 -->
            <Iconbutton
              icontype="sc"
              label="删除"
              @fatherMethod="handleListDelete(scope.row)"
            ></Iconbutton>
            <!-- 复制 -->
            <Iconbutton
              icontype="fz"
              label="复制"
              @fatherMethod="handleListCopy(scope.row)"
            ></Iconbutton>
            <!-- 发布 -->
            <Iconbutton
              icontype="fb"
              label="栏目"
              @fatherMethod="handleDialogShow('publish', scope.row)"
            ></Iconbutton>
            <!-- 预览 -->
            <Iconbutton
              icontype="yl"
              label="预览"
              @fatherMethod="handlePreview(scope.row)"
            ></Iconbutton>
            <!-- 操作记录 -->
            <Iconbutton
              icontype="czjl"
              label="操作记录"
              @fatherMethod="handleHistory(scope.row)"
            ></Iconbutton>
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
      width="600px"
      :title="dialog.title"
      :visible.sync="dialog.show"
      v-if="dialog.show"
    >
      <el-form
        ref="dialogForm"
        :model="dialog.form"
        :rules="dialogRules"
      >
        <el-form-item
          label-width="120px"
          label="栏目"
          prop="channel_id"
        >
          <el-cascader
            filterable
            v-model="dialog.form.channel_id"
            style="width: 350px"
            :options="channelsList"
            :props="cascaderOption"
            clearable
          />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="closeDialog">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="enterDialog"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <!-- 查看历史版本 -->
    <el-dialog
      width="700px"
      title="操作记录"
      :visible.sync="history.show"
      v-if="history.show"
    >
      <version-history :id="history.id" type="script"></version-history>
    </el-dialog>
  </div>
</template>

<script>
import { getScripts, deleteScript, PatchScript, batchPublishScript, copyScript, offlineNews } from '@/api/content'
import { getChannels } from '@/api/manage'
import VersionHistory from '@/views/content/mediaAssets/components/versionHistory'

export default {
  components: {
    VersionHistory
  },
  data() {
    return {
      queryParams: {
        keyword: '',
        type: '',
        startdate: '',
        enddate: '',
        pageSize: 10,
        page: 1
      },
      loading: false,
      total: 0, // 总数
      dateValue: '',
      typeOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '新闻',
          value: 'news'
        },
        {
          label: '图集',
          value: 'album'
        },
        {
          label: '视频',
          value: 'video'
        },
        {
          label: '外链',
          value: 'outer_link'
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
        multiple: false, // 批量单选  单个多选
        title: '发布栏目',
        form: {
          channel_id: '',
          ids: ''
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
      getScripts(this.removePropertyOfNull(this.queryParams)).then(res => {
        this.tableData = (res.data || []).map(item => {
          const type = this.typeOptions.find(n => item.type === n.value)
          const cover = item.cover[0]
          /* {
              title: '', // 稿件标题
              type: '', // 稿件类型
              id: '', // 稿件id
              cover: '', // 图片(Array)
              author_name: '', // 作者
              status: '', // 状态
              created_at: '', // 创建时间
            }*/
          return {
            ...item,
            type: type && type.label || '',
            cover: cover && cover.path || '' // 图片
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
      this.$router.push(`/content/mediaAssets/watch-column?id=${row.id}&redirect=All-media`)
    },
    /* 复制稿件 */
    handleListCopy (row) {
      const { id, title } = row;
      copyScript(id, {
        title: `[副本]${title}`
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
    /* 一键下线 */
    handleOffline (row) {
      const { id } = row;
      this.$confirm(`此操作将下线该文稿下所有新闻, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        offlineNews(id).then(({ message, status_code }) => {
          this.$message({
            message: message,
            type: status_code === 200? 'success' : 'warning'
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
    /* 查看详情 */
    handleWatch (row) {
      const { id } = row;
      this.$router.push({ name: 'Add-media', query: { id, disabled: '1' } })
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
      * 弹框显示
      * */
    handleDialogShow(ident, row) {
      let id; let channel_id = []
      const isPublish = ident === 'publish' // 是否为列表发布
      if (isPublish) {
        channel_id = row.channel.map(n => n.id).sort((a, b) => b - a)
        id = row.id
      } else {
        id = this.selection
      }
      this.cascaderOption = {
        checkStrictly: true, // 是否强制父子不关联
        emitPath: false, // 返回值是否为数组
        value: 'id', // 选项值
        label: 'name', // 显示值
        multiple: isPublish // 多选
      }
      Object.assign(this.dialog, {
        show: true,
        title: isPublish ? '发布栏目' : '批量发布栏目',
        form: {
          channel_id,
          ids: id
        }
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
      const ids = this.dialog.form.ids
      const isArray = Array.isArray(ids)
      const channels = this.dialog.form.channel_id
      this.$refs.dialogForm.validate(val => {
        if (val) {
          // 多个稿件关联到单个栏目
          if (isArray) {
            batchPublishScript({
              ids: ids.join(),
              channel_id: channels
            }).then(() => {
              this.$message.success('批量发布成功');
              this.dialog.show = false;
              this.getList()
            })
          } else {
            // 单个稿件关联到多个栏目
            PatchScript(ids, {
              channels: channels.join()
            }).then(() => {
              this.$message({
                message: '发布成功',
                type: 'success'
              })
              this.dialog.show = false
              this.getList()
            })
          }
        }
      })
    },
    /*
      * 获取栏目列表
      * */
    getChannels() {
      getChannels({ status: 1 }).then(res => {
        this.channelsList = res.map(n => ({
          ...n,
          disabled: true
        }))
      })
    }
  }
}
</script>
