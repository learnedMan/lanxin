<style type="text/scss" lang="scss" scoped>

</style>
<template>
  <div class="xl-integral-value">
    <el-form
      ref="queryForm"
      :model="queryParams"
      :inline="true"
      size="small"
    >
      <el-form-item label="变动时间:">
        <el-date-picker
          v-model="queryParams.time"
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
          @click="handleReturn"
        >
          返回上一级
        </el-button>
      </el-form-item>
    </el-form>
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
        label="用户名"
        align="center"
        prop="nickName"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        label="手机号"
        align="center"
        prop="mobile"
      />
      <el-table-column
        label="变动积分值"
        align="center"
        prop="points"
      />
      <el-table-column
        label="变动时间"
        align="center"
        prop="createdTime"
      />
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.page"
      :limit.sync="queryParams.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
  import { getUserDetail, getInvited } from '@/api/manage'

  export default {
    props: {
      id: {
        type: [ Number, String ],
        required: true
      }
    },
    data() {
      return {
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
        queryParams: {
          userId: '',
          sourceId: '',
          startTime: '',
          endTime: '',
          time: '',
          page: 1,
          limit: 10
        },
        total: 0,
        loading: false,
        tableData: []
      }
    },
    methods: {
      /* 获取用户详情 */
      getUserDetail () {
        const { id } = this;
        return getUserDetail({ id }).then(res => {
          if(res.code == 200) {
            const data = res.data;
            Object.assign(this.queryParams, {
              userId: data.userId,
              sourceId: data.sourceId,
            })
          }
        })
      },
      /* 重置 */
      handleReset () {
        Object.assign(this.queryParams, {
          startTime: '',
          endTime: '',
          page: 1
        })
        this.resetForm('queryForm');
      },
      /* 查询 */
      handleQuery () {
        this.queryParams.page = 1;
        this.getList();
      },
      /* 返回上一级 */
      handleReturn () {
        this.$emit('handleReturn');
      },
      /* 修改注册时间 */
      handleDateChange (val) {
        const arr = val || ['', ''];
        this.queryParams.startTime = arr[0];
        this.queryParams.endTime = arr[1];
      },
      /* 获取列表数据 */
      getList () {
        const params = { ...this.queryParams };
        delete params.time;
        this.loading = true;
        getInvited(this.removePropertyOfNullFor0(params)).then(res => {
          if(res.code == 200) {
            const data = res.data || {};
            this.tableData = data.list || [];
            this.total = data.totalCount || 0;
          }
        }).finally(() => {
          this.loading = false;
        })
      }
    },
    async created() {
      await this.getUserDetail();
      this.getList();
    }
  }
</script>
