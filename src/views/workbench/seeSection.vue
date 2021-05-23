<style type="text/scss" lang="scss">
  .xl-see-section {
    display: flex;
    padding: 0 20px;
    &--tree {
      display: inline-block;
      min-width: 240px;
      border-right: 1px solid #f3f3f3;
      padding: 20px 0 0 30px;
      background-color: #fff;
      .el-tree-node__content {
        padding-right: 20px;
        position: relative;
        height: 40px;
        .el-tree-node__expand-icon {
          position: absolute;
          right: 0;
        }
        &:hover {
          background-color: #ecf5ff;
        }
      }
      .el-tree-node:focus > .el-tree-node__content {
        background-color: #fff;
      }
      .el-tree-node.is-current:focus > .el-tree-node__content {
        background-color: #ecf5ff;
      }
      .is-current > .el-tree-node__content{
        color: rgb(64, 158, 255);
        background-color: #ecf5ff;
        &::before {
          content: '';
          position: absolute;
          height: 40px;
          width: 2px;
          background-color: #1c90ff;
          right: 0;
        }
      }
    }
    &--content {
      background-color: #fff;
      flex: 1;
      padding: 20px 0 0 30px;
    }
    .el-tree > .el-tree-node > .el-tree-node__content {
      padding-left: 10px!important;
    }
  }
</style>
<template>
  <div class="xl-see-section">
    <div class="xl-see-section--tree">
      <el-tree
        ref="tree"
        :data="channelsList"
        node-key="id"
        :props="props"
        :expand-on-click-node="false"
        :default-expanded-keys="defaultExpandedKeys"
        @current-change="treeChange"
      />
    </div>
    <div class="xl-see-section--content">
      <div class="search">
        <el-form
          ref="queryForm"
          :model="queryParams"
          :inline="true"
        >
          <el-form-item
            label="新闻名称:"
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
            label="新闻类型:"
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
              size="small"
              type="daterange"
              align="right"
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
      >
        <el-table-column
          label="新闻ID"
          align="center"
          prop="id"
        />
        <el-table-column
          label="新闻封面"
          align="center"
          prop="id"
          width="120"
        >
          <template slot-scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.cover || useravatar"
              fit="cover"
            >
              <img slot="error" :src="useravatar" alt="" style="width: 100%;height: 100%">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column
          label="新闻标题"
          align="center"
          prop="title"
          :show-overflow-tooltip="true"
        />
        <el-table-column
          label="新闻类型"
          align="center"
          prop="type"
        />
        <el-table-column
          label="状态"
          align="center"
          prop="statusLabel"
        />
        <el-table-column
          label="作者"
          align="center"
          prop="author_name"
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
          width="270"
        >
          <template slot-scope="scope">
            <div class="verify-table-action">
              <!-- 置顶和取消置顶 -->
              <el-button
                type="text"
                :icon="scope.row.top === 1? 'el-icon-bottom' : 'el-icon-top'"
                size="small"
                @click="handlePlaced(scope.row)"
              >
                {{ scope.row.top === 1? '取消置顶' : '置顶' }}
              </el-button>
              <!-- 编辑 -->
              <el-button
                type="text"
                icon="el-icon-edit"
                size="small"
                @click="handleEdit(scope.row)"
              >
                编辑
              </el-button>
              <!-- 删除 -->
              <el-button
                type="text"
                icon="el-icon-delete"
                size="small"
                @click="handleListDelete(scope.row)"
              >
                删除
              </el-button>
              <!-- 预览 -->
              <el-button
                type="text"
                icon="el-icon-picture"
                size="small"
              >
                预览
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
    </div>
    <!-- 编辑新闻 -->
    <el-dialog
      width="1200px"
      title="查看"
      top="20px"
      :visible.sync="detailDialog.show"
      v-if="detailDialog.show"
    >
      <new-detail :id="detailDialog.id" :visible.sync="detailDialog.show" @refresh="refresh" />
    </el-dialog>
  </div>
</template>

<script>
import { getChannels } from '@/api/manage'
import { getNews, deleteNews, setTop } from '@/api/content'
import NewDetail from './reviewNews/detail'

export default {
  components: {
    NewDetail
  },
  data() {
    return {
      channelsList: [], // 栏目
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
      ], // 新闻类型
      statusOptions: [
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
      ], // 状态集合
      props: Object.freeze({
        label: 'name'
      }),
      queryParams: {
        keyword: '',
        type: '',
        startdate: '',
        enddate: '',
        pageSize: 10,
        page: 1
      },
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
      useravatar: require('@/assets/c_images/useravatar.jpg'), // 默认头像
      dateValue: '',
      tableData: [],
      currentKey: '', // 树节点默认选中项
      defaultExpandedKeys: [], // 默认展开的节点
      total: 0,
      loading: false,
      detailDialog: {
        show: false,
        id: ''
      }
    }
  },
  async created() {
    await this.getChannels()
    this.$nextTick(() => {
      const id = this.$route.query.id || this.channelsList[0]?.id
      this.defaultExpandedKeys = [id]
      this.$refs.tree.setCurrentKey(id)
      this.getList()
    })
  },
  methods: {
    /*
      * 获取栏目列表
      * */
    getChannels() {
      return getChannels().then(res => {
        this.channelsList = res
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
      this.getList()
    },
    /*
      * 置顶和取消置顶
      * */
    handlePlaced(row) {
      const { top, id } = row
      setTop({
        ids: id,
        top: top === 1 ? 0 : 1
      }).then(() => {
        this.$message.success(top === 1 ? '取消置顶' : '置顶')
        this.getList()
      })
    },
    /*
      * 编辑新闻
      * */
    handleEdit(row) {
      const { id } = row
      this.detailDialog = {
        id,
        show: true
      }
    },
    /*
      * 删除新闻
      * */
    handleListDelete(row) {
      const { id } = row
      this.$confirm(`此操作将永久删除这条新闻, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteNews(id).then(() => {
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
    /* 节点数选中时 */
    treeChange() {
      this.handleReset()
      this.getList()
    },
    /* 获取列表数据 */
    getList() {
      const data = this.$refs.tree.getCurrentNode()
      this.$router.push({ path: this.$route.path, query: { id: data.id }})
      this.loading = true
      const params = { ...this.queryParams, channel_id: data.id }
      getNews(this.removePropertyOfNull(params)).then(res => {
        this.total = res.total
        this.tableData = (res.data || []).map(item => {
          const type = this.typeOptions.find(n => item.type === n.value)
          const cover = item.cover[0]
          /* {
                title: '', // 新闻标题
                type: '', // 新闻类型
                id: '', // 新闻id
                cover: '', // 图片(Array)
                author_name: '', // 作者
                status: '', // 状态
                created_at: '', // 创建时间
              }*/
          return {
            ...item,
            statusLabel: this.statusOptions.find(n => item.status === n.value)?.label ?? '',
            type: type && type.label || '',
            cover: cover && cover.path || '' // 图片
          }
        })
      }).finally(() => {
        this.loading = false
      })
    },
    /* 刷新视图 */
    refresh () {
      this.getList();
      this.dialog.id = '';
    },
  }
}
</script>
