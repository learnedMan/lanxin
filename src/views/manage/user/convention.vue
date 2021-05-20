<style type="text/scss" lang="scss" scoped>
  .xl-convention {

  }
</style>
<template>
    <div class="xl-convention">
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
          label="规则名称:"
          prop="ruleName"
        >
          <el-input
            v-model="queryParams.ruleName"
            placeholder="请输入规则名称"
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
        <el-form-item>
          <el-button
            type="primary"
            size="mini"
            @click="handleAdd"
          >
            添加
          </el-button>
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
      <el-table
        ref="multipleTable"
        :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column
          label="规则名称"
          align="center"
          prop="userId"
        />
        <el-table-column
          label="类型"
          align="center"
          prop="nickName"
          showOverflowTooltip
        />
        <el-table-column
          label="行为"
          align="center"
          prop="mobile"
        />
        <el-table-column
          label="积分"
          align="center"
          prop="invitationCode"
        />
        <el-table-column
          label="每日最高限额"
          align="center"
          prop="points"
        />
        <el-table-column
          label="最高限额积分"
          align="center"
          prop="creatTime"
        />
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-select
              v-model="scope.row.status"
              placeholder="请选择所属产品"
              clearable
            >
              <el-option
                v-for="item in statusLists.filter(n => n.value !== '')"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <!-- 审批通过 -->
            <el-button
              type="text"
              icon="el-icon-circle-check"
              size="small"
              @click="handleRestore(scope.row)"
            >恢复</el-button>
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
  import { getproduct } from '@/api/manage.js'

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
              label: '启用',
              value: '1'
            },
            {
              label: '不启用',
              value: '0'
            }
          ],
          queryParams: {
            sourceId: '',
            ruleName: '',
            status: '',
            page: 1,
            limit: 10
          },
          total: 0,
          loading: false,
          tableData: []
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
        /* 添加 */
        handleAdd () {

        },
        /* 获取列表数据 */
        getList () {

        }
      }
    }
</script>
