<style type="text/scss" lang="scss">
.xl-statistics-detail {

}
</style>
<template>
    <div class="xl-statistics-detail">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
      >
        <el-form-item label="时间区间:" prop="dateValue">
          <el-date-picker
            v-model="queryParams.dateValue"
            size="small"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
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
            type="warning"
            size="mini"
            @click="handleImport"
          >
            导出
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
          label="稿件名称"
          align="center"
          prop="title"
        />
        <el-table-column
          label="发稿人"
          align="center"
          prop="auhtorName"
        />
        <el-table-column
          label="原作者"
          align="center"
          prop="extra.author"
        />
        <el-table-column
          label="所属部门"
          align="center"
          prop="departmentName"
        />
        <el-table-column
          label="创建时间"
          align="center"
          prop="createdAt"
        />
        <el-table-column
          label="发稿时间"
          align="center"
          prop="publishedAt"
        />
        <el-table-column
          label="阅读量（真实）"
          align="center"
          prop="realView"
        />
        <el-table-column
          label="阅读量（修正）"
          align="center"
          prop="baseView"
        />
        <el-table-column
          label="链接"
          align="center"
          prop="extra.url"
        />
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />
    </div>
</template>

<script>
  import { listKpiDetail, fileImport } from '@/api/statistics'

    export default {
      props: {
        id: [Number, String],
        authorId: [Number, String]
      },
      data() {
        return {
          queryParams: {
            departmentId: this.id,
            authorId: this.authorId,
            beginTime: '',
            endTime: '',
            dateValue: '',
            pageSize: 10,
            pageNum: 1
          },
          loading: false,
          tableData: [],
          total: 0
        }
      },
      computed: {
        site ({ $store: { state: { user: { u_info } } } }) {
          const data = u_info?.site?.extra?.bigdata_settings || {};
          return {
            productId: data.product_id || '',
            customerId: data.customer_id || ''
          }
        }
      },
      methods: {
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.beginTime = arr[0];
          this.queryParams.endTime = arr[1];
        },
        /* 重置搜索 */
        handleReset() {
          Object.assign(this.queryParams, {
            beginTime: '',
            endTime: '',
            page: 1
          })
          this.resetForm('queryForm')
        },
        /* 搜索 */
        handleQuery() {
          this.queryParams.pageNum = 1;
          this.getList()
        },
        /* 返回上一级 */
        handleReturn () {
          this.$emit('handleReturn');
        },
        /* 导出 */
        handleImport () {
          const params = {
            ...this.queryParams,
            customerId: this.site.customerId,
            productId: this.site.productId,
          };
          delete params.dateValue;
          fileImport('/api/statistics/items/pageKpiStatistics/export', this.removePropertyOfNullFor0(params))
        },
        getList () {
          this.loading = true;
          this.tableData = [];
          const params = {
            ...this.queryParams,
            customerId: this.site.customerId,
            productId: this.site.productId,
          };
          delete params.dateValue;
          listKpiDetail(this.removePropertyOfNullFor0(params)).then(res => {
            this.loading = false;
            this.tableData=(res.data || []).map(v => {
              v.extra = JSON.parse(v.extra)
              return {...v}
            })
          })
        }
      },
      created() {
        this.getList();
      }
    }
</script>
