<style type="text/scss" lang="scss" scoped>

</style>
<template>
    <div class="xl-invited-record">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
        size="small"
      >
        <el-form-item
          label="手机号:"
          prop="mobile"
        >
          <el-input
            v-model.number="queryParams.mobile"
            placeholder="请输入手机号"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="注册时间:">
          <el-date-picker
            v-model="queryParams.registerTime"
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
          label="用户ID"
          align="center"
          prop="userId"
        />
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
          label="注册时间"
          align="center"
          prop="date"
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
        },
        beginTime: {
          type: String,
          default: '',
        },
        endTime: {
          type: String,
          default: ''
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
            mobile: '',
            beginTime: '',
            endTime: '',
            registerTime: '',
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
            beginTime: '',
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
          this.queryParams.beginTime = arr[0];
          this.queryParams.endTime = arr[1];
        },
        /* 获取列表数据 */
        getList () {
          this.queryParams.mobile = String(this.queryParams.mobile)
          const params = { ...this.queryParams };
          delete params.registerTime;
          this.loading = true;
          console.log('params',params)
          getInvited(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              this.tableData = res.data || [];
              this.total = res.total || 0;
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        this.queryParams.beginTime = this.beginTime
        this.queryParams.endTime = this.endTime
        await this.getUserDetail();
        this.getList();
      }
    }
</script>
