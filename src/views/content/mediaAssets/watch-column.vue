<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <div class="xl-watch-column">
    <el-form
      ref="queryForm"
      :inline="true"
    >
      <!--<el-form-item label="栏目名称:" prop="keyword">
        <el-input
          v-model="queryParams.keyword"
          placeholder="请输入关键字"
          clearable
          size="small"
          style="width: 200px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="审核状态:" prop="type">
        <el-select size="small" placeholder="请选择类型" clearable v-model="queryParams.status">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>-->
      <el-form-item>
        <!--<el-button type="primary" @click="handleReset" size="mini">重置</el-button>
        <el-button type="primary" @click="handleQuery" size="mini">搜索</el-button>
        <el-button type="primary" @click="handleAdd" size="mini">新增</el-button>-->
        <el-button
          type="success"
          size="mini"
          @click="handleReturn"
        >
          返回上一级
        </el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      v-loading="loading"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
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
        label="新闻名称"
        align="center"
        prop="title"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <el-button type="text" @click="handleWatch(scope.row)" class="watch-detail-btn">{{ scope.row.title }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="新闻类型"
        align="center"
        prop="type"
      />
      <el-table-column
        label="栏目ID"
        align="center"
        prop="channel_id"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="栏目名称"
        align="center"
        prop="channel_name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="评论控制"
        align="center"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.allow_comment"
            size="small"
            @change="changeCommentAndShare(scope.row, 'allow_comment')"
          >
            <el-option
              v-for="item in commentOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="分享控制"
        align="center"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.allow_share"
            size="small"
            @change="changeCommentAndShare(scope.row, 'allow_share')"
          >
            <el-option
              v-for="item in shareOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        align="center"
      >
        <template slot-scope="scope">
          <el-select
            v-model="scope.row.status"
            size="small"
            @change="changeStatus(scope.row)"
          >
            <el-option
              v-for="item in statusOptions.filter(n => n.value !== '')"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="380"
      >
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 审批进度 -->
            <Iconbutton
              icontype="shjd"
              label="审核进度"
              @fatherMethod="watchProgress(scope.row)"
            ></Iconbutton>
            <!-- 删除 -->
            <Iconbutton
              icontype="sc"
              label="删除"
              @fatherMethod="handleListDelete(scope.row)"
            ></Iconbutton>
            <!-- 查看 -->
            <Iconbutton
              v-if="scope.row.status === 1"
              icontype="ckxq"
              label="查看详情"
              @fatherMethod="handleWatch(scope.row)"
            ></Iconbutton>
            <!-- 编辑 -->
            <Iconbutton
              v-if="scope.row.status !== 1"
              icontype="xg"
              label="修改"
              @fatherMethod="handleEdit(scope.row)"
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
    <!-- 审批进度 -->
    <el-dialog
      width="400px"
      title="审批进度"
      :visible.sync="approval.show"
    >
      <el-steps direction="vertical" :active="approval.active" :space="100">
        <el-step
          v-for="(list, index) of approval.lists"
          :title="list.title"
          :key="list.sort"
          :description="list.description"
        >
          <div slot="description">
            <div>{{ index === 0? '提交人' : '审核人' }}: {{ list.name }}</div>
            <p v-if="list.remark">拒绝原因: {{ list.remark }}</p>
          </div>
        </el-step>
      </el-steps>
    </el-dialog>
    <!-- 详情 -->
    <el-dialog
      width="1200px"
      :title="dialog.title"
      top="20px"
      :visible.sync="dialog.show"
      v-if="dialog.show"
    >
      <new-detail
        :id="dialog.id"
        :visible.sync="dialog.show"
        :disabled="dialog.disabled"
        @refresh="refresh"
      />
    </el-dialog>
    <!-- 查看历史版本 -->
    <el-dialog
      width="700px"
      title="操作记录"
      :visible.sync="history.show"
      v-if="history.show"
    >
      <version-history :id="history.id" type="news"></version-history>
    </el-dialog>
  </div>
</template>

<script>
import { getScriptDetail, deleteNews, changeNews, changeNewsStatus } from '@/api/content'
import { getUser } from '@/api/manage'
import newDetail from '@/views/workbench/reviewNews/detail.vue'
import VersionHistory from '@/views/content/mediaAssets/components/versionHistory'

export default {
  components: {
    newDetail,
    VersionHistory
  },
  data() {
    return {
      statusOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '待审核',
          value: 0
        },
        {
          label: '已上线',
          value: 1
        },
        {
          label: '已下线',
          value: 2
        },
        {
          label: '待定时发布',
          value: 5
        }
      ], // 状态集合
      tableData: [], // 列表数据
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
      commentOption: [
        {
          label: '先审后发',
          value: '0'
        },
        {
          label: '先发后审',
          value: '1'
        },
        {
          label: '禁止评论',
          value: '2'
        }
      ], // 评论控制
      shareOption: [
        {
          label: '允许',
          value: '1'
        },
        {
          label: '不允许',
          value: '2'
        }
      ], // 分享控制
      loading: false,
      approval: {
        show: false,
        active: '',
        lists: []
      }, // 审批进度
      dialog: {
        title: '查看详情',
        show: false,
        id: '',
        disabled: false
      },
      history: {
        show: false,
        id: ''
      }, // 历史记录
      userLists: [] // 用户列表
    }
  },
  computed: {
    /* 当前已有的标签页 */
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    }
  },
  created() {
    this.getList()
    this.getUserList();
  },
  methods: {
    /* 获取用户列表数据 */
    getUserList () {
      getUser({ model: 'User', page: 1, pageSize: 9999 }).then(({ data }) => {
        this.userLists = data.map(({ id, name }) => ({ id, name }))
      })
    },
    /*
      * 获取列表数据
      * */
    getList() {
      const { id } = this.$route.query
      this.loading = true
      getScriptDetail(id).then(res => {
        this.tableData = (res.news || []).map(item => {
          const type = this.typeOptions.find(n => item.type === n.value)
          const status = this.statusOptions.find(n => item.status === n.value)
          return {
            ...item,
            channel_name: (res.channel || []).find(n => n.id === item.channel_id)?.name || '',
            type: type && type.label || '',
            statusLabel: status && status.label || '',
            allow_comment: item.extra.allow_comment,
            allow_share: item.extra.allow_share
          }
        })
      }).finally(() => {
        this.loading = false
      })
    },
    /*
      * 返回上一级
      * */
    handleReturn() {
      const fullPath = this.$route.fullPath
      const view = this.visitedViews.find(n => n.fullPath === fullPath)
      const { redirect = 'All-media' } = this.$route.query;
      this.$router.push({ name: redirect });
      this.$store.dispatch('tagsView/delView', view)
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
    /**
      * 修改评论控制或分享控制
      */
    changeCommentAndShare(row, key) {
      const { id } = row
      changeNews(id, {
        extra: {
          [key]: row[key]
        }
      }).then(({ message, statu_code }) => {
        if(statu_code) {
          this.$message({
            message,
            type: 'error'
          })
        }else {
          this.$message({
            message: '切换成功!',
            type: 'success'
          })
        }
        this.getList()
      })
    },
    /* 查看审批进度 */
    watchProgress (row) {
      const multi_review = row.extra.multi_review || [];
      if(multi_review.length === 0) return this.$message.warning('暂无审批进度');
      const statusOptions = [
        {
          label: '待审核',
          value: 0
        },
        {
          label: '已审核',
          value: 1
        },
        {
          label: '已拒绝',
          value: 2
        }
      ]
      this.approval = {
        show: true,
        active: multi_review.findIndex(n => n.status === 1 || n.status === 2) + 1,
        lists: multi_review.map(n => {
          const ids = n.reviewer_ids.split(',')
          return {
            ...n,
            name: this.userLists.filter(item => n.user_id? item.id === n.user_id : ids.includes(item.id.toString()) ).map(item => item.name).join(),
            title: `${statusOptions.find(item => n.status === item.value)?.label}   ${n.time || ''}`,
          }
        })
      }
    },
    /* 查看详情 */
    handleWatch (row) {
      const { id } = row;
      this.dialog = {
        title: '查看详情',
        show: true,
        id,
        disabled: true
      }
    },
    /* 编辑详情 */
    handleEdit (row) {
      const { id } = row;
      this.dialog = {
        title: '编辑详情',
        show: true,
        id,
        disabled: false
      }
    },
    /* 修改状态 */
    changeStatus (row) {
      const { id, status } = row;
      changeNewsStatus({
        ids: id,
        status
      }).then(() => {
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.getList()
      })
    },
    /* 刷新数据 */
    refresh () {
      this.getList();
    },
    /* 查看历史记录 */
    handleHistory (row) {
      const { id } = row;
      this.history = {
        show: true,
        id
      }
    },
  }
}
</script>
