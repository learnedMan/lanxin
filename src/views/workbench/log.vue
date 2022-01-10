<!-- 操作日志 -->
<style type="text/scss" lang="scss" scoped>
  .log {
    padding: 30px;
  }
</style>
<template>
  <div class="log">
    <div class="search">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item
          label="资源类型:"
          prop="item_type"
        >
          <el-select
            v-model="queryParams.item_type"
            size="small"
            placeholder="请选择类型"
            clearable
            @change="handleQuery"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
         <el-form-item
          label="资源ID:"
          prop="item_id"
        >
          <el-input
            v-model="queryParams.item_id"
            placeholder="请输入ID"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="操作人ID:"
          prop="user_id"
        >
          <el-input
            v-model="queryParams.user_id"
            placeholder="请输入操作人ID"
            clearable
            size="small"
            style="width: 200px"
            @keyup.enter.native="handleQuery"
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
        label="序号"
        type="index"
        width="100"
        align="center"
      />
      <el-table-column
        v-if="!isMobile"
        label="ID"
        width="100"
        align="center"
        prop="id"
      />
      <el-table-column
        label="操作内容"
        align="center"
        prop="operation"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="类型"
        align="center"
        width="140"
        prop="item_type"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="操作人ID"
        align="center"
        width="140"
        prop="user.id"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="操作人姓名"
        align="center"
        width="140"
        prop="user.name"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="操作人手机号"
        align="center"
        width="140"
        prop="user.phone"
        :show-overflow-tooltip="true"
      />
      <el-table-column
      v-if="!isMobile"
        label="操作时间"
        align="center"
        prop="created_at"
        :show-overflow-tooltip="true"
      />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { getLog } from '@/api/workbench'
export default {
  name: 'Log',
  data() {
    return {
      statusOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: 'user',
          value: 'user'
        },
        {
          label: '新闻',
          value: 'news'
        },
        {
          label: '栏目',
          value: 'channel'
        },
        {
          label: '稿件',
          value: 'script'
        }
      ], // 状态列表
      queryParams: {
        pageSize: 10,
        page: 1,
        user_id:'',
        item_type:'',
        item_id:''
      },
      total: 0,
      loading: true,
      tableData: [], // 列表数据
    }
  },
  created() {
    this.getList()
  },
  methods: {
    /* 获取列表数据 */
    getList() {
      this.loading = true
      getLog(this.queryParams).then(res =>{
          this.tableData = res.data;
          this.total = res.total;
      }).finally(()=>{
          this.loading = false
      })
    },
    /*
      * 重置
      * */
    handleReset() {
      Object.assign(this.queryParams, {
        user_id: '',
        item_type: '',
        item_id: '',
        page: 1
      })
    },
    /*
          * 搜索
          * */
    handleQuery() {
      this.queryParams.page = 1;
      this.getList()
    },
  }
}
</script>
