<style type="text/scss" lang="scss" scoped>
  .xl-blacklist {

  }
</style>
<template>
    <div class="xl-blacklist">
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
          label="用户名:"
          prop="nickName"
        >
          <el-input
            v-model="queryParams.nickName"
            placeholder="请输入用户名"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="手机号:"
          prop="mobile"
        >
          <el-input
            v-model="queryParams.mobile"
            placeholder="请输入手机号"
            clearable
            style="width: 200px"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item
          label="注册时间:"
          prop="registerTime"
        >
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
          <!--<el-button
            size="mini"
            type="success"
            @click="batchRestore"
            :disabled="disabledBatchAction"
          >批量恢复</el-button>-->
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
          label="会员ID"
          align="center"
          prop="userId"
        />
        <el-table-column
          label="用户名"
          align="center"
          prop="nickName"
          showOverflowTooltip
        />
        <el-table-column
          label="手机号"
          align="center"
          prop="mobile"
        />
        <el-table-column
          label="邀请码"
          align="center"
          prop="invitationCode"
        />
        <el-table-column
          label="积分值"
          align="center"
          prop="points"
        />
        <el-table-column
          label="注册时间"
          align="center"
          prop="creatTime"
        />
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <Iconbutton
              icontype="hf"
              label="恢复"
              @fatherMethod="handleRestore(scope.row)"
            ></Iconbutton>
          </template>
        </el-table-column>
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
    import { getBlacklist, getproduct, blacklistRestore } from '@/api/manage.js'

    export default {
      data() {
        return {
          productLists: [],
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
            nickName: '',
            mobile: '',
            registerTime: '',
            page: 1,
            limit: 10
          },
          loading: false,
          tableData: [],
          selection: [],
          total: 0,
        }
      },
      computed: {
        disabledBatchAction () {
          return this.selection.length === 0
        }
      },
      methods: {
        /* 获取产品列表 */
        getProductList () {
          return getproduct({}).then(res => {
            const data = res.data || []
            this.productLists = data.filter(n => n.source_id).map(n => ({
              label: n.name,
              value: n.source_id.toString()
            }));
            this.queryParams.sourceId = data?.[0]?.source_id.toString();
          });
        },
        /* 修改时间 */
        handleDateChange (val) {
          const arr = val || ['', ''];
          this.queryParams.startTime = arr[0];
          this.queryParams.endTime = arr[1];
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
        /* 修改选中项 */
        handleSelectionChange (arr) {
          this.selection = arr.map(n => n.id);
        },
        /* 批量恢复 */
        batchRestore () {

        },
        /* 恢复单个 */
        handleRestore (row) {
          const { userId, sourceId } = row;
          blacklistRestore({
            userId,
            sourceId
          }).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg);
              this.getList();
            }
          })
        },
        /* 获取列表数据 */
        getList () {
          const params = { ...this.queryParams };
          delete params.registerTime;
          this.loading = true;
          getBlacklist(this.removePropertyOfNullFor0(params)).then(res => {
            if(res.code == 200) {
              const data = res.data;
              this.total = data.totalCount;
              this.tableData = data.list || [];
            }
          }).finally(() => {
            this.loading = false;
          })
        },
      },
      async created() {
        await this.getProductList();
        this.getList();
      }
    }
</script>
