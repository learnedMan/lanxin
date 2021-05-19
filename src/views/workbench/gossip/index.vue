<style type="text/scss" lang="scss" scoped>
  .xl-gossip {
    padding: 30px;
  }
</style>
<template>
    <div class="xl-gossip">
      <el-form
        ref="queryForm"
        :model="queryParams"
        :inline="true"
        size="small"
      >
        <el-form-item
          label="所属产品:"
          prop="sourceId"
        >
          <el-select
            v-model="queryParams.sourceId"
            placeholder="请选择所属产品"
            clearable
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
          label="爆料标题:"
          prop="title"
        >
          <el-input
            v-model="queryParams.title"
            placeholder="请输入关键字"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="状态:"
          prop="status"
        >
          <el-select
            v-model="queryParams.status"
            placeholder="请选择状态"
            clearable
          >
            <el-option
              v-for="item in statusLists"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="爆料人:"
          prop="userName"
        >
          <el-input
            v-model.number="queryParams.userName"
            placeholder="请输入姓名"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="提交时间:">
          <el-date-picker
            v-model="queryParams.submitTime"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange($event, 'submitTime')"
          />
        </el-form-item>
        <el-form-item label="审核时间:">
          <el-date-picker
            v-model="queryParams.auditTime"
            type="daterange"
            align="right"
            size="small"
            unlink-panels
            range-separator="~"
            value-format="yyyy-MM-dd HH:mm:ss"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            @change="handleDateChange($event, 'auditTime')"
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
            size="mini"
            type="success"
            @click="batchAgreeOrRefused('approve')"
            :disabled="disabledBatchAction"
          >批量通过</el-button>
          <el-button
            size="mini"
            type="warning"
            @click="batchAgreeOrRefused('reject')"
            :disabled="disabledBatchAction"
          >批量拒绝</el-button>
        </el-form-item>
      </el-form>
      <el-table
        ref="multipleTable"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="新闻ID"
          align="center"
          prop="id"
        />
        <el-table-column
          label="爆料标题"
          align="center"
          prop="title"
          showOverflowTooltip
        />
        <el-table-column
          label="状态"
          align="center"
          prop="statusLabel"
        />
        <el-table-column
          label="爆料人"
          align="center"
          prop="userName"
        />
        <el-table-column
          label="审核时间"
          align="center"
          prop="aduitTime"
        />
        <el-table-column
          label="提交时间"
          align="center"
          prop="creatTime"
        />
        <el-table-column label="操作" align="center" width="120">
          <template slot-scope="scope">
            <div class="verify-table-action">
              <!-- 审批通过 -->
              <el-button type="text" icon="el-icon-circle-check" size="small" @click="handleAgreeOrRefused(scope.row, 'approve')" v-if="scope.row.status != 1">通过</el-button>
              <!-- 拒绝 -->
              <el-button type="text" icon="el-icon-circle-close" size="small" @click="handleAgreeOrRefused(scope.row, 'reject')" v-if="scope.row.status != 3">拒绝</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import { getGossipLists } from '@/api/workbench.js'
  import { getproduct } from '@/api/manage'

    export default {
      data() {
        return {
          productLists: [],
          statusLists: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '已审核',
              value: 1
            },
            {
              label: '待审核',
              value: 2
            },
            {
              label: '已拒绝',
              value: 3
            }
          ],
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
            sourceId: '',
            type: '',
            status: '',
            title: '',
            type: 0,
            userName: '',
            //client: 'web',
            submitTime: '',
            auditTime: ''
          },
          loading: false,
          total: 0,
          tableData: [],
          selection: [], // 选中项
        }
      },
      computed: {
        disabledBatchAction () {
          return this.selection.length === 0;
        }
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
            this.queryParams.sourceId = 28//data?.[0]?.source_id;
          });
        },
        /* 修改时间 */
        handleDateChange (val, key) {
          const arr = val || ['', ''];
          if(key === 'submitTime') {

          }else {

          }
        },
        /* 重置 */
        handleReset () {
          Object.assign(this.queryParams, {
            page: 1
          })
          this.resetForm('queryForm');
        },
        /* 搜索 */
        handleQuery () {
          this.getList();
        },
        /* 批量通过或拒绝 */
        batchAgreeOrRefused () {

        },
        /* 修改选中项 */
        handleSelectionChange (arr) {
          this.selection = arr.map(n => n.id);
        },
        /* 获取列表数据 */
        getList () {
          this.loading = true;
          const params = { ...this.queryParams };
          delete params.submitTime, delete params.auditTime;
          getGossipLists(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              const data = res.data;
              this.selection = [];
              this.tableData = (data.data || []).map(n => ({
                ...n,
                statusLabel: this.statusLists.find(list => list.value === n.status)?.label
              }));
              this.total = data.totalCount;
            }
          }).finally(() => {
            this.loading = false;
          })
        }
      },
      async created() {
        await this.getProductList();
        this.getList();
      }
    }
</script>
