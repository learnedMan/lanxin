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
        label="稿件ID"
        align="center"
        prop="mediaId"
      />
      <el-table-column
        label="稿件名称"
        align="center"
        prop="mediaTitle"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="稿件类型"
        align="center"
        prop="type"
      />
      <el-table-column
        label="栏目ID"
        align="center"
        prop="id"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="栏目名称"
        align="center"
        prop="title"
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
        prop="status"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <div class="verify-table-action">
            <!-- 删除 -->
            <el-button
              type="text"
              icon="el-icon-delete"
              size="small"
              @click="handleListDelete(scope.row)"
            >
              删除
            </el-button>
            <!-- 编辑 -->
            <!--<el-button type="text" icon="el-icon-edit" size="small">编辑</el-button>-->
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getScriptDetail, deleteNews, changeNews } from '@/api/content'

export default {
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
          label: '已审核',
          value: 1
        },
        {
          label: '已拒绝',
          value: 2
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
          value: 0
        },
        {
          label: '先发后审',
          value: 1
        },
        {
          label: '禁止评论',
          value: 2
        }
      ], // 评论控制
      shareOption: [
        {
          label: '允许',
          value: 1
        },
        {
          label: '不允许',
          value: 2
        }
      ], // 分享控制
      loading: false
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
  },
  methods: {
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
            mediaId: res.id,
            mediaTitle: res.title,
            type: type && type.label || '',
            status: status && status.label || '',
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
      this.$router.push('/content/mediaAssets/all-media')
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
      }).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.getList()
      })
    }
  }
}
</script>
