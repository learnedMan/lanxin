<template>
    <div class="statffDispatches">
        <el-form
            ref="department"
            :model="newsData.queryParams"
            :inline="true"
          >
            <el-form-item label="时间区间:" prop="Date">
              <el-date-picker
                v-model="newsData.queryParams.Date"
                type="daterange"
                align="right"
                size="small"
                unlink-panels
                range-separator="~"
                value-format="yyyy-MM-dd"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="handleDateChange($event, 'department')"
              />
            </el-form-item>
            <el-form-item>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleReset()"
              >
                重置
              </el-button>
              <el-button v-points = "1500"
                type="primary"
                size="mini"
                @click="handleQuery()"
              >
                搜索
              </el-button>
              <el-button v-points = "1500"
                type="warning"
                size="mini"
                @click="handleImport()"
              >
                导出
              </el-button>
            </el-form-item>
          </el-form>
          <el-table
            ref="multipleTable"
            v-loading="newsData.loading"
            :header-cell-style="{ background:'#eef1f6', color:'#606266' }"
            :data="newsData.tableData"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange($event, 'department')"
          >
            <el-table-column
              label="部门名称"
              align="center"
            >
              <template slot-scope="scope">
                <!-- <span style="color: #409EFF;cursor: pointer" @click="watchDetail(scope.row)">{{ scope.row.department_name }}</span> -->
                <span style="color: #409EFF;cursor: pointer" @click="goPerson(scope.row)">{{ scope.row.department_name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="发稿量"
              align="center"
              prop="num"
            />
            <el-table-column
              label="截止昨日点击量"
              align="center"
              prop="real_view"
            />
          </el-table>
    </div>
</template>
<script>
export default {
    name: 'statffDispatches',
    data() {
        return{
            newsData: {
                queryParams: {
                beginTime: '',
                endTime: '',
                Date: ''
                },
            loading: false,
            tableData: [],
            selection: []
          }, // 部门
        }
    },
    created() {

    },
    methods: {

    }
}
</script>